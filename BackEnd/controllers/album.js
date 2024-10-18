"use strict";
const Album = require("../../models/album");

const getAllFor = async (req, res, next) => {
  try {
    const getAll = await Album.find({ uersId: req.params.id });
    res.status(200).json({
      state: true,
      messege: "Data Fatched Successfuly",
      count: getAll.length,
      data: getAll,
    });
  } catch (error) {
    console.log(error);
    next(error);
    
  }
};
const getOne = async (req, res, next) => {
  try {
    const getOne = await Album.findById(req.params.id);
    res.status(200).json({
      state: true,
      messege: "Data Fatched Successfuly",
      data: getOne,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const create = async (req, res, next) => {
  try {
    const create = new Album(req.body);
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
    const deleteOne = await Album.findByIdAndDelete(req.params.id);

    res.status(200).json({
      state: true,
      messege: "Data Deleted  Successfuly",
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
