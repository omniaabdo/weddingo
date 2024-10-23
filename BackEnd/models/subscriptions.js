const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
  },
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
