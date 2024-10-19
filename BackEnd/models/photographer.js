const mongoose = require("mongoose");

const photographerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A photographer must have a name"],
      trim: true,
      minlength: [3, "Photographer name must have at least 3 characters"],
      maxlength: [100, "Photographer name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "A photographer must have a description"],
      minlength: [10, "Description must be at least 10 characters long"],
      maxlength: [500, "Description cannot exceed 500 characters"],
    },
    avalabileDate: {
      type: [Date],
      default: [],
      // required: [true, "Available from date is required"],
      // validate: {

      //   validator: function (v) {
      //     return v instanceof Date && v >= new Date();
      //   },
      //   message: "Available from date must be valid and not in the past",
      // },
    },
    feature: {
      type: [String],
      default: [],
      validate: {
        validator: function (v) {
          return v.length <= 5;
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
        type: [String],
        default: [],
        validate: {
          validator: function (v) {
            return v.every((num) => num.length === 11);
          },
          message: "Phone number must be exactly 11 digits",
        },
      },
      facebookLink: {
        type: String,
        trim: true,
        default: "",
        validate: {
          validator: function (v) {
            return (
              !v ||
              /^https?:\/\/(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/.test(v)
            );
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
            return (
              !v ||
              /^https?:\/\/(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/.test(v)
            );
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
            return (
              !v ||
              /^https?:\/\/(www\.)?instagram.com\/[a-zA-Z0-9(\.\?)?]/.test(v)
            );
          },
          message: "Invalid Instagram link",
        },
      },
    },
    images: {
      type: String,
      default: "",
      validate: {
        validator: function (v) {
          return !v || /\.(jpg|jpeg|png|gif)$/.test(v);
        },
        message: "Image must be a valid file type (jpg, jpeg, png, gif)",
      },
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photographer", photographerSchema);
