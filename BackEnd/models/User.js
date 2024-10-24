const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 8,
    select: false,
  },
  image: {
    type: String,
    default: "",
  },
  favoret: {
    type: [
      {
        type: mongoose.Schema.ObjectId,
      },
    ],
    default: [],
  },
  services: {
    type: [
      {
        type: mongoose.Schema.ObjectId,
      },
    ],
    default: [],
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  role: {
    type: String,
    enum: ["user", "vendor", "admin"],
    default: "user",
  },
  googleId: String,
  facebookId: String,
});

/// Middleware to hash password before saving the user
userSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  // Hash the password with a cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Method to check if the entered password matches the hashed password
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Token expires in 10 minutes
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  // Return the raw (unhashed) reset token so it can be sent to the user via email
  return resetToken;
};
// Export the model if it's already compiled, or create a new one
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
