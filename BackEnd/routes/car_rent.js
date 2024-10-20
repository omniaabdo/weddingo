const express = require("express");
const routes = express.Router();
const { checkToken } = require("../middleware/auth");
const carRentControllers = require("../controllers/car_rent");

routes.get("/", carRentControllers.getAll);
routes.get("/:id", carRentControllers.getOne);
routes.post("/", checkToken, carRentControllers.create);
routes.post("/images/:id", checkToken, carRentControllers.uploadeImages);

routes.put("/:id", carRentControllers.update);
routes.delete("/:id", carRentControllers.deleteOne);

module.exports = routes;
