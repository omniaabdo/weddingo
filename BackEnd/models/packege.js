const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    packages: {
      type: [
        {
          title: {
            type: String,
            required: [true, "Package title is required"],
            trim: true,
            maxlength: [
              100,
              "Package title should not be more than 100 characters",
            ],
          },
          price: {
            type: Number,
            required: [true, "Package price is required"],
            min: [0, "Price cannot be negative"],
          },
        },
      ],
      default: [],
    },
    serviceId: {
      type: mongoose.Schema.ObjectId,
      required: [true, "User ID is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Package", serviceSchema);
