const mongoose = require("mongoose");

const carRentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Car name is required"],
      trim: true,
      minlength: [2, "Car name must be at least 2 characters long"],
      maxlength: [100, "Car name cannot exceed 100 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters long"],
      maxlength: [1000, "Description cannot exceed 1000 characters"],
    },
    brand: {
      type: String,
      required: [true, "Car brand is required"],
      trim: true,
      maxlength: [50, "Car brand cannot exceed 50 characters"],
    },
    carType: {
      type: String,
      required: [true, "Car type is required"],
      trim: true,
      maxlength: [50, "Car type cannot exceed 50 characters"],
    },
    year: {
      type: Number,
      required: [true, "Manufacture year is required"],
      min: [1886, "Year must be after 1886"],
      max: [new Date().getFullYear(), "Year cannot be in the future"],
    },
    color: {
      type: String,
      required: [true, "Color is required"],
      trim: true,
      maxlength: [30, "Color cannot exceed 30 characters"],
    },
    seatCapacity: {
      type: Number,
      required: [true, "Seat capacity is required"],
      min: [1, "Seat capacity must be at least 1"],
      max: [100, "Seat capacity cannot exceed 100"],
    },
    priceParDay: {
      type: Number,
      required: [true, "Price per day is required"],
      min: [0, "Price must be a positive number"],
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
        validator: function (array) {
          return array.length <= 10;
        },
        message: "Maximum of 10 features allowed",
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
        maxlength: [100, "City name cannot exceed 100 characters"],
      },
      state: {
        type: String,
        trim: true,
        maxlength: [100, "State name cannot exceed 100 characters"],
      },
    },
    contacts: {
      phoneNumber: {
        type: [String],
        default: [],
        validate: {
          validator: function (v) {
            return v.every(
              (num) => String(num).length >= 7 && String(num).length <= 15
            );
          },
          message: "Phone numbers must be between 7 and 15 digits",
        },
      },
      facebookLink: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return !v || v.startsWith("https://");
          },
          message: "Invalid Facebook link",
        },
      },
      twitterLink: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return !v || v.startsWith("https://");
          },
          message: "Invalid Twitter link",
        },
      },
      instegramLink: {
        type: String,
        trim: true,
        validate: {
          validator: function (v) {
            return !v || v.startsWith("https://");
          },
          message: "Invalid Instagram link",
        },
      },
    },
    images: {
      type: [String],
      default: [],
      validate: {
        validator: function (array) {
          return array.length <= 10;
        },
        message: "Maximum of 10 images allowed",
      },
    },
    video: {
      type: String,
      default: "",
      validate: {
        validator: function (v) {
          return !v || v.startsWith("https://");
        },
        message: "Invalid video URL",
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

module.exports = mongoose.model("CarRent", carRentSchema);
