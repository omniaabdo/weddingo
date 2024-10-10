const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    mainImage: { type: String, default: "" },
    images: { type: [String], default: [] },
    uersId: {
      type: mongoose.Schema.ObjectId,
      ref: "Photographer",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Album", albumSchema);
