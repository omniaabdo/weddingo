const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Album name is required"],
      trim: true,
      minlength: [1, "Album name must be at least 1 character long"],
      maxlength: [100, "Album name cannot exceed 100 characters"],
    },
    mainImage: {
      type: String,
      default: "",
      validate: {
        validator: function (v) {
          return v === "" || /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/.test(v);
        },
        message: "Main image must be a valid URL or left empty",
      },
    },
    images: {
      type: [String],
      default: [],
      validate: {
        validator: function (v) {
          return v.every(img => /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/.test(img));
        },
        message: "All images must be valid URLs",
      },
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "Photographer",
      required: [true, "UserId is required and must reference a Photographer"],
    },
  },
  { timestamps: true } // Automatically handles createdAt and updatedAt fields
);

module.exports = mongoose.model("Album", albumSchema);
