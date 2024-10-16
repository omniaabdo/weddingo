const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Service name is required"],
      trim: true,
      minlength: [3, "Service name must be at least 3 characters long"],
      maxlength: [100, "Service name cannot exceed 100 characters"],
    },
    feature: {
      type: [
        {
          name: {
            type: String,
            required: [true, "Feature name is required"],
            trim: true,
            maxlength: [100, "Feature name cannot exceed 100 characters"],
          },
          price: {
            type: Number,
            required: [true, "Feature price is required"],
            min: [0, "Price cannot be negative"],
          },
        },
      ],
      default: [],
      validate: {
        validator: function (v) {
          return v.length > 0;
        },
        message: "At least one feature must be provided",
      },
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "User ID is required"],
      validate: {
        validator: function (v) {
          return mongoose.Types.ObjectId.isValid(v);
        },
        message: "Invalid User ID",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
