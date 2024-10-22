const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Location name is required"],
      trim: true,
      minlength: [3, "Location name must be at least 3 characters long"],
      maxlength: [100, "Location name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Location description is required"],
      minlength: [10, "Description must be at least 10 characters long"],
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    avalabileDate: {
      type: [Date],
      default: [],
    },
    feature: {
      type: [String],
      default: [],
      validate: {
        validator: function (val) {
          return val.length >= 0;
        },
        message: "You can specify a maximum of 5 features",
      },
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    location: {
      city: {
        type: String,
        trim: true,
        default: "",
        maxlength: [100, "City name cannot exceed 100 characters"],
      },
      state: {
        type: String,
        trim: true,
        default: "",
        maxlength: [100, "State name cannot exceed 100 characters"],
      },
    },
    contacts: {
      phoneNumber: {
        type: [Number],
        default: [],
        validate: {
          validator: function (v) {
            return v.every(num => String(num).length === 10);
          },
          message: "Each phone number must be exactly 10 digits",
        },
      },
      facebookLink: {
        type: String,
        trim: true,
        default: "",
        validate: {
          validator: function (v) {
            return !v || /^https?:\/\/(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/.test(v);
          },
          message: "Invalid Facebook link",
        },
      },
      twitterLink: {
        type: String,
        trim: true,
        default: "",
        validate: {
          validator: function (v) {
            return !v || /^https?:\/\/(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/.test(v);
          },
          message: "Invalid Twitter link",
        },
      },
      instegramLink: {
        type: String,
        trim: true,
        default: "",
        validate: {
          validator: function (v) {
            return !v || /^https?:\/\/(www\.)?instagram.com\/[a-zA-Z0-9(\.\?)?]/.test(v);
          },
          message: "Invalid Instagram link",
        },
      },
    },
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
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Location", locationSchema);
