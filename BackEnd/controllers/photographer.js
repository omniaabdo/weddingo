"use strict";
const Photographer = require("../models/photographer");
const Album = require("../models/album");
const Packege = require("../models/packege");

// Get all photographers with pagination
const getAll = async (req, res, next) => {
  try {
    // Get page and limit from query params, set default values if not provided
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 10; // Default to 10 items per page

    // Calculate the number of items to skip
    const skip = (page - 1) * limit;

    // Fetch photographers with pagination
    const getAll = await Photographer.find().skip(skip).limit(limit);

    // Get the total count of photographers
    const totalPhotographers = await Photographer.countDocuments();

    res.status(200).json({
      status: "success",
      message: "Data Fetched Successfully",
      count: getAll.length,
      totalPages: Math.ceil(totalPhotographers / limit),
      currentPage: page,
      data: getAll,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Other functions remain the same
const getOne = async (req, res, next) => {
  try {
    const getOne = await Photographer.findById(req.params.id);
    const getAlbums = await Album.find({ uersId: req.params.id });
    const getPackeges = await Packege.find({ userId: req.params.id });

    res.status(200).json({
      status: "success",
      message: "Data Fetched Successfully",
      data: getOne,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    console.log(req.body);
    console.log(req.userId);

    const create = new Photographer({ ...req.body, userId: req.userId });
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

const update = async (req, res, next) => {
  try {
    const update = await Photographer.findById(req.params.id);
    if (!update) {
      res.status(404).json({
        status: "success",
        message: "Data Not Found",
      });
      return;
    }
    update.$set({ ...req.body });
    await update.save();
    res.status(200).json({
      status: "success",
      message: "Data Updated Successfully",
      data: update,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const deleteOne = await Photographer.findByIdAndDelete(req.params.id);
    const album = await Album.deleteMany({ uersId: req.params.id });

    res.status(200).json({
      status: "success",
      message: "Data Deleted Successfully",
      data: {
        photographer: deleteOne,
        album: album,
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
