const mongoose = module.require('mongoose');

const beautyCenter = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
            unique: true
        },
        description: {
            type: String
        },
        address: {
            type: String
        },
        contacts: {
            phoneNumber: { type: [Number], default: [] },
            facebookLink: { type: String, default: "" },
            twitterLink: { type: String, default: "" },
            instegramLink: { type: String, default: "" },
        },
        status:{
            enum:["open","close"]
        },
        availableDays: [String],
        features: [String],
        services: [String],
        packages: [{ name: String, data: String }],
        album: [Buffer]
    }
)

const model = mongoose.model("beautyCenter", beautyCenter)
module.exports = model;

