"use strict";
const Location = require("../models/location");

// Get all locations with pagination
const getAll = async (req, res, next) => {
  try {
    // Pagination logic
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
    const skip = (page - 1) * limit;

    // Fetch paginated data
    const getAll = await Location.find().skip(skip).limit(limit);
    const total = await Location.countDocuments(); // Get total document count

    res.status(200).json({
      totalDocuments: total, // Total number of documents in the collection
      currentPage: page, // Current page
      totalPages: Math.ceil(total / limit), // Total number of pages
      data: getAll, // Paginated data
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get one location by ID
const getOne = async (req, res, next) => {
  try {
    const getOne = await Location.findById(req.params.id);
    res.status(200).json({
      state: true,
      messege: "Data Fetched Successfully",
      data: {
        Location: getOne,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Create a new location
const create = async (req, res, next) => {
  try {
    const create = new Location(req.body);
    await create.save();

    res.status(200).json({
      state: true,
      messege: "Data Created Successfully",
      data: create,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Update an existing location
const update = async (req, res, next) => {
  try {
    const update = await Location.findById(req.params.id);
    if (!update) {
      res.status(404).json({
        state: true,
        messege: "Data Not Found",
      });
      return;
    }
    update.$set({ ...req.body });
    await update.save();
    res.status(200).json({
      state: true,
      messege: "Data Updated Successfully",
      data: update,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Delete a location by ID
const deleteOne = async (req, res, next) => {
  try {
    const deleteOne = await Location.findByIdAndDelete(req.params.id);
    res.status(200).json({
      state: true,
      messege: "Data Deleted Successfully",
      data: {
        Location: deleteOne,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
