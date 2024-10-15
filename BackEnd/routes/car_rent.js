const express = require("express");
const routes = express.Router();

const carRentControllers = require("../controllers/car_rent");

routes.get("/", carRentControllers.getAll);
routes.get("/:id", carRentControllers.getOne);
routes.post("/", carRentControllers.create);
routes.put("/:id", carRentControllers.update);
routes.delete("/:id", carRentControllers.deleteOne);

module.exports = routes;
