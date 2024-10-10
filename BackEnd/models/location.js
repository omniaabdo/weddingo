const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    description: { type: String, require: true },
    avalabileFrom: { type: Date, require: true },
    avalabileTo: { type: Date, require: true },
    feature: { type: [String], default: [] },
    isAvailable: { type: Boolean, default: true },
    location: {
      city: { type: String, default: "" },
      state: { type: String, default: "" },
    },
    contacts: {
      phoneNumber: { type: [Number], default: [] },
      facebookLink: { type: String, default: "" },
      twitterLink: { type: String, default: "" },
      instegramLink: { type: String, default: "" },
    },
    media: {
      images: { type: [String], default: [] },
      video: { type: String, defult: "" },
    },

    packeges: {
      type: [
        {
          description: { type: String },
          oldPrice: { type: Number },
          newPrice: { type: Number },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Location", locationSchema);
