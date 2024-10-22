"use strict";
const Location = require("../models/location");
const Package = require("../models/packege");
const ERRORHANDELLER = require("../utils/errorHandler");
const { rmoveFile, changeName } = require("../utils/imageServices");

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

// Create a new location
const create = async (req, res, next) => {
  try {
    const create = new Location({ ...req.body, userId: req.userId });
    await create.save();

    res.status(200).json({
      status: "success",
      message: "Data Created Successfully",
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
    if (!deleteOne) {
      ERRORHANDELLER(404, "data not found");
    }
    res.status(200).json({
      status: "success",
      message: "Data Deleted Successfully",
      data: {
        Location: deleteOne,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const uploadeImages = async (req, res, next) => {
  try {
    const locationId = req.params.id;
    const userId = req.userId;
    const images = req.files;

    const newPaths = [...images.map((item) => changeName(item.path))];

    const updateService = await Location.findOne({
      _id: locationId,
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
  getAll,
  getOne,
  create,
  update,
  deleteOne,
  uploadeImages
};
