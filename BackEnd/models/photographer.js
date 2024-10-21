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
<<<<<<< HEAD
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
=======
    avalabileFrom: {
      type: Date,
      required: [true, "Available from date is required"],
      validate: {
        validator: function (v) {
          return v instanceof Date && v <= new Date();
        },
        message: "Available from date must be valid and not in the future",
      },
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    avalabileTo: {
      type: Date,
      required: [true, "Available to date is required"],
      validate: {
        validator: function (v) {
          return v instanceof Date && v >= this.avalabileFrom;
        },
        message: "Available to date must be valid and after the available from date",
      },
>>>>>>> 198e85055a4db47ed4e94035ac76982399ae207c
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
<<<<<<< HEAD
    images: [
      {
=======
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
>>>>>>> 198e85055a4db47ed4e94035ac76982399ae207c
        type: String,
        default: "",
        validate: {
          validator: function (v) {
<<<<<<< HEAD
            return !v || /\.(jpg|jpeg|png|gif)$/.test(v);
          },
          message: "Image must be a valid file type (jpg, jpeg, png, gif)",
=======
            return !v || /\.(mp4|mov|avi|mkv)$/.test(v);
          },
          message: "Video must be a valid file type (mp4, mov, avi, mkv)",
>>>>>>> 198e85055a4db47ed4e94035ac76982399ae207c
        },
      },
    ],
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photographer", photographerSchema);
