"use strict";
const Car = require("../models/car_rent");
const Packege = require("../models/packege");
const { changeName, rmoveFile } = require("../utils/imageServices");
const ERRORHANDELLER = require("../utils/errorHandler");

const getAll = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const getAll = await Car.find().skip(skip).limit(limit);
    const totalDocuments = await Car.countDocuments();

    res.status(200).json({
      currentPage: page,
      totalPages: Math.ceil(totalDocuments / limit),
      totalDocuments: totalDocuments,
      data: getAll,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getOne = async (req, res, next) => {
  try {
    const getOne = await Car.findById(req.params.id);
    const getPackeges = await Packege.findOne({ serviceId: getOne._id });

    res.status(200).json({
      status: "success",
      message: "Data Fetched Successfully",
      data: {
        ...getOne._doc,
        packages: getPackeges?.packages, // إضافة الحزم إلى الاستجابة
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const create = async (req, res, next) => {
  try {

    const create = new Car({ ...req.body, userId: req.userId });
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
    const update = await Car.findById(req.params.id);
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
    const findCar = await Car.findById(req.params.id);

    if (!findCar) {
      ERRORHANDELLER(404, "data not found");
    }

    findCar.images.map((item) => rmoveFile(item));
    const deleteOne = await Car.findByIdAndDelete(req.params.id);
    const deletePackege = await Packege.findOneAndDelete({
      serviceId: req.params.id,
    });
    res.status(200).json({
      status: "success",
      message: "Data Deleted Successfully",
      data: deleteOne,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const uploadeImages = async (req, res, next) => {
  try {
    const carId = req.params.id;
    const userId = req.userId;
    const images = req.files;

    const newPaths = [...images.map((item) => changeName(item.path))];

    const updateService = await Car.findOne({
      _id: carId,
      userId: userId,
    });

    if (!updateService) {
      throwError(404, "data not found");
    }

    updateService.images.map((item) => rmoveFile(item));
    updateService.$set({ images: newPaths });
    await updateService.save();

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
  uploadeImages,
};
