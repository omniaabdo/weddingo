const mongoose = module.require('mongoose');

const homeStore = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "name is required"],
            unique: true
        },
        description: {
            type: String
        },
        category:{
            type:mongoose.SchemaTypes.ObjectId,
            ref:"homeStoreCategory"
        },
        image: Buffer,
        price: Number,
        stockCount: Number,
        isActive: Boolean,
        createdAt: Date
    }
)

const model = mongoose.model("homeStore", homeStore)
module.exports = model;

