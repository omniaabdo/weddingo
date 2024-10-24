const Venue = require("../models/Venue");
const Cars = require("../models/car_rent");
const Photographer = require("../models/photographer");
const Locations = require("../models/location");
const Subscription = require("../models/subscriptions");

exports.getServices = async (req, res, next) => {
  try {
    const venues = await Venue.find().select("name images");
    const cars = await Cars.find().select("name images");
    const photographers = await Photographer.find().select("name images");
    const locations = await Locations.find().select("name images");

    res.status(200).json({
      status: "success",
      message: "Data Fetched Successfully",
      data: {
        venues,
        cars,
        photographers,
        locations,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
exports.getAll = async (req, res, next) => {
  try {
    const venues = await Venue.find().select("name");
    const cars = await Cars.find().select("name ");
    const photographers = await Photographer.find().select("name");
    const locations = await Locations.find().select("name ");

    res.status(200).json({
      status: "success",
      message: "Data Fetched Successfully",
      data: {
        venues,
        cars,
        photographers,
        locations,
      },
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.addSubscription = async (req, res, next) => {
  try {
    const sub = new Subscription(req.body);
    await sub.save();

    res.status(200).json({
      status: "success",
      message: "Data Fetched Successfully",
      data: sub,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
