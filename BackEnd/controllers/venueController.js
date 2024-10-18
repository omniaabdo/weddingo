"use strict";
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

// Get all venues with pagination
const getVenues = async (req, res) => {
  const { page = 1, limit = 10 } = req.query; // default page 1, limit 10
  try {
    const venues = await Venue.find()
      .limit(limit * 1) // limit the number of results
      .skip((page - 1) * limit) // skip items based on current page
      .exec();

    // Count total documents for pagination info
    const count = await Venue.countDocuments();

    res.json({
      venues,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneVenues = async (req, res, next) => {
  try {
    const getOne = await Venue.findById(req.params.id);

    res.status(200).json({
      state: true,
      message: "Data Fetched Successfully",
      data: getOne
    });
  } catch (error) {
    console.log(error);
    next(error);
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
  getOneVenues,
  updateVenue,
  deleteVenue,
};
