const mongoose = require("mongoose");

const carRentSchema = new mongoose.Schema(
  {
    carName: { type: String, require: true },
    description: { type: String, require: true },
    brand: { type: String, require: true },
    carType: { type: String, require: true },
    year: { type: Number, require: true },
    color: { type: String, require: true },
    seatCapacity: { type: Number, require: true },
    priceParDay: { type: Number, require: true },
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
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("CarRent", carRentSchema);
