const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    address: String,
    contacts: {
        phone: String,
        links: [String],
    },
    capacity: Number,
    type: { type: String, enum: ['open', 'closed'] },
    images: [String],
    videos: [String],
    services: [String],
    status: { type: String, default: 'available' },
    availableDays: [String],
    features: [String],
}, { timestamps: true });

module.exports = mongoose.model('Venue', venueSchema);
