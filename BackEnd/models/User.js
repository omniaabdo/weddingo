const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

// User Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
    select: false, // Hide password from query results
  },
  role: {
    type: String,
    enum: ['user', 'vendor', 'admin'],
    default: 'user', // default role
  },
  phoneNumber: {
    type: [Number],
    default: [],
  },
  facebookLink: {
    type: String,
    default: "",
  },
  twitterLink: {
    type: String,
    default: "",
  },
  instegramLink: {
    type: String,
    default: "",
  },
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function (next) {
  // Only run if password was actually modified
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12); // Hash the password
  next();
});

// Instance method to check password correctness
userSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
