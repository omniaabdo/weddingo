const Venue = require('../models/Venue');

// Add a new venue
const addVenue = async (req, res) => {
  try {
    const { name, location, capacity, price } = req.body;
    const venue = new Venue({ name, location, capacity, price });
    await venue.save();
    res.status(201).json({ message: 'Venue added successfully', venue });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all venues
const getVenues = async (req, res) => {
  try {
    const venues = await Venue.find();
    res.json(venues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a venue
const updateVenue = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;
    const venue = await Venue.findByIdAndUpdate(id, updatedData, { new: true });
    if (!venue) {
      return res.status(404).json({ message: 'Venue not found' });
    }
    res.json({ message: 'Venue updated successfully', venue });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a venue
const deleteVenue = async (req, res) => {
  try {
    const { id } = req.params;
    const venue = await Venue.findByIdAndDelete(id);
    if (!venue) {
      return res.status(404).json({ message: 'Venue not found' });
    }
    res.json({ message: 'Venue deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addVenue,
  getVenues,
  updateVenue,
  deleteVenue,
};
