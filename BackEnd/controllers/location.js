"use strict";
const Location = require("../models/location");

const getAll = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 
    const skip = (page - 1) * limit;

    const getAll = await Location.find().skip(skip).limit(limit);
    const total = await Location.countDocuments();

    res.status(200).json({
      totalDocuments: total, 
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      data: getAll,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const getOne = await Location.findById(req.params.id);
    res.status(200).json({
      state: true,
      messege: "Data Fatched Successfuly",
      data: {
        Location: getOne,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const create = new Location(req.body);
    await create.save();

    res.status(200).json({
      state: true,
      messege: "Data Createed Successfuly",
      data: create,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

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
      messege: "Data Updated Successfuly",
      data: update,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const deleteOne = async (req, res, next) => {
  try {
    const deleteOne = await Location.findByIdAndDelete(req.params.id);
    res.status(200).json({
      state: true,
      messege: "Data Deleted  Successfuly",
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
