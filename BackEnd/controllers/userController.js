const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User'); // Assuming you have a User model
const sendEmail = require('../utils/sendEmail'); // A utility to send emails (e.g., using Nodemailer)

// Generate JWT
const signToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Register a new user
exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'user', // Assign role or default to 'user'
    });

    const token = signToken(newUser._id, newUser.role);

    res.status(201).json({
      status: 'success',
      token,
      data: { user: newUser },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please provide email and password',
    });
  }

  try {
    const user = await User.findOne({ email }).select('+password'); // Explicitly select password
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect email or password',
      });
    }

    const token = signToken(user._id, user.role);
    res.status(200).json({
      status: 'success',
      token,
      data: { user },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Get user details
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found',
      });
    }
    res.status(200).json({
      status: 'success',
      data: { user },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Update user details
exports.updateUser = async (req, res) => {
  try {
    const { name, email, currentPassword, password } = req.body;

    const user = await User.findById(req.user.id).select('+password');

    // Check if current password is provided and if it's correct
    if (currentPassword && !(await user.correctPassword(currentPassword, user.password))) {
      return res.status(401).json({
        status: 'fail',
        message: 'Incorrect current password',
      });
    }

    // Prepare user data for update
    const updatedData = { name, email };
    if (password) {
      updatedData.password = await bcrypt.hash(password, 12); // Re-hash the new password
    }

    // Update user data
    const updatedUser = await User.findByIdAndUpdate(req.user.id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found',
      });
    }

    const token = signToken(updatedUser._id, updatedUser.role);
    res.status(200).json({
      status: 'success',
      token,
      data: { user: updatedUser },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const userToDelete = await User.findById(req.user.id);
    if (!userToDelete) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found',
      });
    }

    // Allow only admin or the user themselves to delete the account
    if (req.user.role !== 'admin' && req.user._id.toString() !== userToDelete._id.toString()) {
      return res.status(403).json({
        status: 'fail',
        message: 'You do not have permission to delete this account',
      });
    }

    await User.findByIdAndDelete(req.user.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'There is no user with that email address',
      });
    }

    // Create a reset token
    const resetToken = crypto.randomBytes(32).toString('hex');
    const resetTokenHash = crypto.createHash('sha256').update(resetToken).digest('hex');

    user.passwordResetToken = resetTokenHash;
    user.passwordResetExpires = Date.now() + 10 * 60 * 1000; // Token valid for 10 minutes
    await user.save({ validateBeforeSave: false });

    const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetPassword/${resetToken}`;

    // Send email
    const message = `Forgot your password? Submit a PATCH request with your new password to: ${resetURL}`;
    try {
      await sendEmail({
        email: user.email,
        subject: 'Your password reset token (valid for 10 minutes)',
        message,
      });

      res.status(200).json({
        status: 'success',
        message: 'Token sent to email!',
      });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });

      return res.status(500).json({
        status: 'fail',
        message: 'There was an error sending the email. Try again later.',
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

    // Find user by reset token and check if token has not expired
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        status: 'fail',
        message: 'Token is invalid or has expired',
      });
    }

    // Update the password and clear the reset token fields
    user.password = await bcrypt.hash(req.body.password, 12);
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    // Log the user in (send a new token)
    const token = signToken(user._id, user.role);
    res.status(200).json({
      status: 'success',
      token,
      data: { user },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// ADMIN CRUD OPERATIONS

// Admin: Add User
exports.adminAddUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'user', // Assign role or default to 'user'
    });

    res.status(201).json({
      status: 'success',
      data: { user: newUser },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Admin: Update User
exports.adminUpdateUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const updatedData = { name, email, role };

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: { user: updatedUser },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};

// Admin: Delete User
exports.adminDeleteUser = async (req, res) => {
  try {
    const userToDelete = await User.findByIdAndDelete(req.params.id);
    if (!userToDelete) {
      return res.status(404).json({
        status: 'fail',
        message: 'User not found',
      });
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
