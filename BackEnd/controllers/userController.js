const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail'); // Assuming you have this utility
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// Generate JWT
const signToken = (id, role) => {
    return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

// Register a new user
exports.register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ status: 'fail', message: 'Email already in use.' });
        }

        const newUser = await User.create({ name, email, password, role: role || 'user' });

        const token = signToken(newUser._id, newUser.role);
        res.status(201).json({ status: 'success', token, data: { user: newUser } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

// Login
exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ status: 'fail', message: 'Please provide email and password' });
    }

    try {
        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.correctPassword(password, user.password))) {
            return res.status(401).json({ status: 'fail', message: 'Incorrect email or password' });
        }

        const token = signToken(user._id, user.role);
        res.status(200).json({ status: 'success', token, data: { user } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

// Facebook Login
exports.facebookLogin = async (req, res) => {
    const { accessToken, userID } = req.body;

    const url = `https://graph.facebook.com/v8.0/${userID}?fields=id,name,email&access_token=${accessToken}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const { email, name, id: facebookId } = data;

        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ name, email, facebookId });
        } else if (!user.facebookId) {
            user.facebookId = facebookId;
            await user.save();
        }

        const token = signToken(user._id, user.role);
        res.status(200).json({ status: 'success', token, data: { user } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

// Google Login
exports.googleLogin = async (req, res) => {
    const { tokenId } = req.body;

    try {
        const ticket = await googleClient.verifyIdToken({
            idToken: tokenId,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const { email, name, sub: googleId } = ticket.getPayload();

        let user = await User.findOne({ email });
        if (!user) {
            user = await User.create({ name, email, googleId });
        } else if (!user.googleId) {
            user.googleId = googleId;
            await user.save();
        }

        const token = signToken(user._id, user.role);
        res.status(200).json({ status: 'success', token, data: { user } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

// Forgot Password
exports.forgotPassword = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ status: 'fail', message: 'No user found with that email address' });
        }

        const resetToken = user.createPasswordResetToken();
        await user.save({ validateBeforeSave: false });

        const resetURL = `${req.protocol}://${req.get('host')}/api/users/resetPassword/${resetToken}`;

        await sendEmail({
            email: user.email,
            subject: 'Your password reset token (valid for 10 minutes)',
            message: `Reset your password using this link: ${resetURL}`,
        });

        res.status(200).json({ status: 'success', message: 'Token sent to email!' });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

// Reset Password
exports.resetPassword = async (req, res) => {
    try {
        const hashedToken = crypto.createHash('sha256').update(req.params.token).digest('hex');

        const user = await User.findOne({
            passwordResetToken: hashedToken,
            passwordResetExpires: { $gt: Date.now() },
        });

        if (!user) {
            return res.status(400).json({ status: 'fail', message: 'Token is invalid or has expired' });
        }

        user.password = req.body.password; // This will hash automatically due to the pre-save hook
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save();

        const token = signToken(user._id, user.role);
        res.status(200).json({ status: 'success', token, data: { user } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

// Get User
exports.getUser = async (req, res) => {
    const user = await User.findById(req.user.id);
    res.status(200).json({ status: 'success', data: { user } });
};

// Get All Users (Admin only)
exports.getAllUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json({ status: 'success', results: users.length, data: { users } });
};

// Admin CRUD Operations
exports.adminAddUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({ name, email, password: hashedPassword, role });
    res.status(201).json({ status: 'success', data: { user: newUser } });
};

exports.adminUpdateUser = async (req, res) => {
    const { name, email, role } = req.body;
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { name, email, role }, { new: true, runValidators: true });
    res.status(200).json({ status: 'success', data: { user: updatedUser } });
};

exports.adminDeleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).json({ status: 'success', data: null });
};
