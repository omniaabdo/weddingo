const express = require("express");
const routes = express.Router();

const carRentControlloers = require("../controlloers/car/car_rent");

routes.get("/", carRentControlloers.getAll);
routes.get("/:id", carRentControlloers.getOne);
routes.post("/", carRentControlloers.create);
routes.put("/:id", carRentControlloers.update);
routes.delete("/:id", carRentControlloers.deleteOne);

module.exports = routes;
