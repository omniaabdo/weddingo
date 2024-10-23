"use strict";
const Venue = require("../models/Venue");
const Package = require("../models/packege");
const ERRORHANDELLER = require("../utils/errorHandler");
const { rmoveFile, changeName } = require("../utils/imageServices");

// Add a new venue
const addVenue = async (req, res) => {
  try {
    console.log(req.body);

    const venue = new Venue({ ...req.body, userId: req.userId });
    await venue.save();

    res.status(201).json({
      status: "success",
      message: "Data Created Successfully",
      data: venue,
    });
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
    const getPackeges = await Package.findOne({ serviceId: getOne._id });

    res.status(200).json({
      status: "success",
      message: "Data Fetched Successfully",
      data: {
        ...getOne._doc,
        packages: getPackeges?.packages,
      },
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
      return res.status(404).json({ message: "Venue not found" });
    }
    res.json({ message: "Venue updated successfully", venue });
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
      ERRORHANDELLER(404, "data not found");
    }
    res.json({
      status: "success",
      message: "Data Deleted Successfully",
      data: {
        venue,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const uploadeImages = async (req, res, next) => {
  try {
    const venueId = req.params.id;
    const userId = req.userId;
    const images = req.files;

    const newPaths = [...images.map((item) => changeName(item.path))];

    const updateService = await Venue.findOne({
      _id: venueId,
      userId: userId,
    });

    if (!updateService) {
      ERRORHANDELLER(404, "data not found");
    }

    updateService.images.map((item) => rmoveFile(item));
    updateService.$set({ images: newPaths });
    await updateService.save();

    // const deleteOne = await Photographer.findByIdAndDelete(req.params.id);
    // const album = await Album.deleteMany({ uersId: req.params.id });
    console.log(updateService);

    res.status(200).json({
      status: "success",
      message: "Data Updated Successfully",
      data: updateService,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};


module.exports = {
  addVenue,
  getVenues,
  getOneVenues,
  updateVenue,
  deleteVenue,
  uploadeImages
};
