const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    feature: {
      type: [
        {
          name: {
            type: String,
          },
          price: { type: Number },
        },
      ],
      default: [],
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Packege", serviceSchema);
