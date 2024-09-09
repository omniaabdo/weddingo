const Venue = require('../models/Venue');

exports.createVenue = async (req, res) => {
    try {
        const venue = new Venue(req.body);
        await venue.save();
        res.status(201).json(venue);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create venue' });
    }
};

exports.getVenues = async (req, res) => {
    try {
        const venues = await Venue.find();
        res.status(200).json(venues);
    } catch (err) {
        res.status(500).json({ error: 'Failed to get venues' });
    }
};

exports.updateVenue = async (req, res) => {
    try {
        const venue = await Venue.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!venue) return res.status(404).json({ error: 'Venue not found' });
        res.status(200).json(venue);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update venue' });
    }
};

exports.deleteVenue = async (req, res) => {
    try {
        const venue = await Venue.findByIdAndDelete(req.params.id);
        if (!venue) return res.status(404).json({ error: 'Venue not found' });
        res.status(200).json({ message: 'Venue deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete venue' });
    }
};
