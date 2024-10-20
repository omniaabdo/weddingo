const Packege = require("../models/packege");
const Photographer = require("../models/photographer");

const { throwError } = require("../middleware/errorHandler");
const getAllFor = async (req, res, next) => {
  try {
    const getAll = await Packege.find({ userId: req.params.id });
    res.status(200).json({
      status: "success",
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
    const getOne = await Packege.findById(req.params.id);
    res.status(200).json({
      status: "success",
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
    const userId = req.userId;
    const serviceId = req.params.serviceId;
    const packegeData = req.body;

    const create = new Packege({ packages: req.body, serviceId: serviceId });
    await create.save();

    res.status(200).json({
      status: "success",
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
    const update = await Packege.findById(req.params.id);
    if (!update) {
      res.status(404).json({
        status: "success",
        messege: "Data Not Found",
      });
      return;
    }
    update.$set({ ...req.body });
    await update.save();
    res.status(200).json({
      status: "success",
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
    const deleteOne = await Packege.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "success",
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
