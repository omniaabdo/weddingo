const mongoose = require("mongoose");

const venueSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A venue must have a name"],
      trim: true,
      minlength: [3, "Venue name must have at least 3 characters"],
      maxlength: [100, "Venue name cannot have more than 100 characters"],
    },
    description: {
      type: String,
      required: [true, "A venue must have a description"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters long"],
    },
    availableFrom: {
      type: Date,
      required: [true, "Venue must have an available from date"],
    },
    availableTo: {
      type: Date,
      required: [true, "Venue must have an available to date"],
      validate: {
        validator: function (val) {
          return val > this.availableFrom;
        },
        message: "Available to date must be after available from date",
      },
    },
    feature: {
      type: [String],
      default: [],
      validate: {
        validator: function (val) {
          return val.length > 0;
        },
        message: "A venue must have at least one feature",
      },
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    location: {
      city: {
        type: String,
        default: "",
        required: [true, "City is required"],
        trim: true,
      },
      state: {
        type: String,
        default: "",
        required: [true, "State is required"],
        trim: true,
      },
    },
    contacts: {
      phoneNumber: {
        type: [Number],
        default: [],
        validate: {
          validator: function (val) {
            return val.length > 0;
          },
          message: "At least one phone number is required",
        },
      },
      facebookLink: {
        type: String,
        default: "",
        validate: {
          validator: function (val) {
            return /^(http|https):\/\/[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}\/?.*$/.test(val);
          },
          message: "Please enter a valid Facebook URL",
        },
      },
      twitterLink: {
        type: String,
        default: "",
        validate: {
          validator: function (val) {
            return /^(http|https):\/\/[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}\/?.*$/.test(val);
          },
          message: "Please enter a valid Twitter URL",
        },
      },
      instegramLink: {
        type: String,
        default: "",
        validate: {
          validator: function (val) {
            return /^(http|https):\/\/[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}\/?.*$/.test(val);
          },
          message: "Please enter a valid Instagram URL",
        },
      },
    },
    media: {
      images: {
        type: [String],
        default: [],
        validate: {
          validator: function (val) {
            return val.every((url) =>
              /^(http|https):\/\/[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}\/?.*$/.test(url)
            );
          },
          message: "Each image URL must be valid",
        },
      },
      video: {
        type: String,
        default: "",
        validate: {
          validator: function (val) {
            return !val || /^(http|https):\/\/[a-zA-Z0-9-.]+\.[a-zA-Z]{2,}\/?.*$/.test(val);
          },
          message: "Please enter a valid video URL",
        },
      },
    },
  },
  { timestamps: true }
);

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
