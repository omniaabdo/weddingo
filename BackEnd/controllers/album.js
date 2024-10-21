"use strict";
const Album = require("../../models/album");

// Get all albums for a specific user with pagination
const getAllFor = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page
    const skip = (page - 1) * limit;

    const getAll = await Album.find({ uersId: req.params.id })
                              .skip(skip)
                              .limit(limit);
    const total = await Album.countDocuments({ uersId: req.params.id });

    res.status(200).json({
      totalDocuments: total, // Total number of albums for this user
      currentPage: page, // Current page number
      totalPages: Math.ceil(total / limit), // Total number of pages
      data: getAll, // Paginated album data
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get one album by ID
const getOne = async (req, res, next) => {
  try {
    const getOne = await Album.findById(req.params.id);
    res.status(200).json({
      state: true,
      messege: "Data Fatched Successfully",
      data: getOne,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Create a new album
const create = async (req, res, next) => {
  try {
    const create = new Album(req.body);
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

// Update an album
const update = async (req, res, next) => {
  try {
    const update = await Album.findById(req.params.id);
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

// Delete an album
const deleteOne = async (req, res, next) => {
  try {
    const deleteOne = await Album.findByIdAndDelete(req.params.id);

    res.status(200).json({
      state: true,
      messege: "Data Deleted Successfully",
      data: deleteOne,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  getAllFor,
  getOne,
  create,
  update,
  deleteOne,
};
