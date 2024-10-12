const mongoose = module.require('mongoose');

const homeStoreCategory = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "title is required"],
            unique: true
        },
        description: {
            type: String
        }
    }
)

const model = mongoose.model("homeStoreCategory", homeStoreCategory)
module.exports = model;

