const mongoose = require("mongoose");

const homeStoreSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Store name is required"],
      unique: true,
      trim: true,
      minlength: [3, "Store name must be at least 3 characters long"],
      maxlength: [100, "Store name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "homeStoreCategory",
      required: [true, "Category is required"],
      validate: {
        validator: function (v) {
          return mongoose.Types.ObjectId.isValid(v);
        },
        message: "Invalid category ID",
      },
    },
    media: {
      images: {
        type: [String],
        default: [],
        validate: {
          validator: function (v) {
            return v.every(file => /\.(jpg|jpeg|png|gif)$/.test(file));
          },
          message: "Each image must be a valid file type (jpg, jpeg, png, gif)",
        },
      },
      video: {
        type: String,
        default: "",
        validate: {
          validator: function (v) {
            return !v || /\.(mp4|mov|avi|mkv)$/.test(v);
          },
          message: "Video must be a valid file type (mp4, mov, avi, mkv)",
        },
      },
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    stockCount: {
      type: Number,
      required: [true, "Stock count is required"],
      min: [0, "Stock count cannot be negative"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("homeStore", homeStoreSchema);
