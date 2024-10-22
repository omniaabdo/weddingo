const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const photographer = require("../models/photographer");
const Car = require("../models/car_rent");
const Venue = require("../models/Venue");
const Location = require("../models/location");

// Utility to generate JWT token
const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// Send response with token
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

// Register new user with hashed password
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const newUser = await User.create({
      name,
      email,
      password, // This should be hashed automatically
      role,
    });

    createSendToken(newUser, 201, res);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

// User login with password comparison
// User login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        status: "fail",
        message: "Please provide email and password!",
      });
    }

    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
    }

    createSendToken(user, 200, res);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
// Forgot Password
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "There is no user with that email address.",
      });
    }

    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    // TODO: Send email with resetToken (use an email service)

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  try {
    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        status: "fail",
        message: "Token is invalid or has expired",
      });
    }

    user.password = await bcrypt.hash(req.body.password, 12);
    user.passwordConfirm = req.body.passwordConfirm;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    createSendToken(user, 200, res);
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// Get current user
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// Admin - Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

// User - Get User Services
exports.getServices = async (req, res) => {
  try {
    const userId = req.userId;
    const userData = await User.findById(userId);
    // if (!userData) {
    //   throwError(404, "user not found");
    // }
    const getAllPhotgraphersServices = await photographer.find({
      userId: userData.id,
    });
    const getAllCarRentServices = await Car.find({
      userId: userData.id,
    });

    const getAllVenueServices = await Venue.find({
      userId: userData.id,
    });
    const getAllLocationServices = await Location.find({
      userId: userData.id,
    });

    res.status(200).json({
      status: "success",
      message: "data feached successfuly",
      data: {
        photographers: getAllPhotgraphersServices,
        cars: getAllCarRentServices,
        venue: getAllVenueServices,
        locations: getAllLocationServices,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
