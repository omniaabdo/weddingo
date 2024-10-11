const mongoose = require("mongoose");

const photographerSchema = new mongoose.Schema(
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
    images: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Photographer", photographerSchema);
