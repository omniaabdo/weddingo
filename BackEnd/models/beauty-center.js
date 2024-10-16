const mongoose = module.require('mongoose');

const beautyCenterSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            unique: true,
            trim: true,
            minlength: [1, "Name must be at least 1 character long"],
            maxlength: [100, "Name cannot exceed 100 characters"],
        },
        description: {
            type: String,
            maxlength: [500, "Description cannot exceed 500 characters"], // Limit description length
        },
        address: {
            type: String,
            required: [true, "Address is required"],
            trim: true,
            maxlength: [250, "Address cannot exceed 250 characters"], // Limit address length
        },
        contacts: {
            phoneNumber: {
                type: [Number],
                default: [],
                validate: {
                    validator: function (v) {
                        return v.every(num => num > 0); // Ensure all phone numbers are positive
                    },
                    message: "Phone numbers must be positive",
                },
            },
            facebookLink: {
                type: String,
                validate: {
                    validator: function (v) {
                        return /^(https?:\/\/)?(www\.)?(facebook\.com\/).+/.test(v); // Validate Facebook URL
                    },
                    message: "Invalid Facebook URL",
                },
            },
            twitterLink: {
                type: String,
                validate: {
                    validator: function (v) {
                        return /^(https?:\/\/)?(www\.)?(twitter\.com\/).+/.test(v); // Validate Twitter URL
                    },
                    message: "Invalid Twitter URL",
                },
            },
            instegramLink: {
                type: String,
                validate: {
                    validator: function (v) {
                        return /^(https?:\/\/)?(www\.)?(instagram\.com\/).+/.test(v); // Validate Instagram URL
                    },
                    message: "Invalid Instagram URL",
                },
            },
        },
        status: {
            type: String,
            enum: ["open", "close"],
            required: [true, "Status is required"], // Ensure status is required
        },
        availableDays: {
            type: [String],
            validate: {
                validator: function (v) {
                    const validDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    return v.every(day => validDays.includes(day)); // Ensure only valid days are included
                },
                message: "Available days must be valid day names",
            },
        },
        features: {
            type: [String],
            default: [],
        },
        services: {
            type: [String],
            default: [],
        },
        packages: [
            {
                name: {
                    type: String,
                    required: [true, "Package name is required"],
                    trim: true,
                },
                data: {
                    type: String,
                    required: [true, "Package data is required"],
                },
            },
        ],
        album: {
            type: [Buffer],
            default: [],
        },
    },
    { timestamps: true } // Automatically manage createdAt and updatedAt fields
);

const model = mongoose.model("beautyCenter", beautyCenterSchema);
module.exports = model;
