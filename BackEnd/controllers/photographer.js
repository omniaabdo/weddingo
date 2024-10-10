const Photographer = require("../../models/photographer");
const Album = require("../../models/album");
const Packege = require("../../models/packege");

const getAll = async (req, res, next) => {
  try {
    const getAll = await Photographer.find();
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
    const getOne = await Photographer.findById(req.params.id);
    const getAlbums = await Album.find({ uersId: req.params.id });
    const getPackeges = await Packege.find({ userId: req.params.id });

    res.status(200).json({
      state: true,
      messege: "Data Fatched Successfuly",
      data: {
        photographer: getOne,
        albums: getAlbums,
        packages: getPackeges,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const create = async (req, res, next) => {
  try {
    const create = new Photographer(req.body);
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
    const update = await Photographer.findById(req.params.id);
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
    const deleteOne = await Photographer.findByIdAndDelete(req.params.id);
    const album = await Album.deleteMany({ uersId: req.params.id });

    res.status(200).json({
      state: true,
      messege: "Data Deleted  Successfuly",
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
