const User = require('../models/User');
const { generateToken } = require('../utils/jwt');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = new User({ name, email, password });
        await user.save();
        const token = generateToken(user._id);
        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Failed to register user' });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = generateToken(user._id);
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Failed to login' });
    }
};
