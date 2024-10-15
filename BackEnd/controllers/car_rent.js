const Car = require("../../models/car_rent");

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
    const create = new Car(req.body);
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
    const deleteOne = await Car.findByIdAndDelete(req.params.id);

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
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};
