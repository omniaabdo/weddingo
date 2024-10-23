const express = require("express");
const routes = express.Router();

const locationControllers = require("../controllers/location");
const { checkToken } = require("../middleware/auth");

routes.get("/", locationControllers.getAll);
routes.get("/:id", locationControllers.getOne);
routes.post("/", checkToken, locationControllers.create);
routes.put("/:id", locationControllers.update);
routes.delete("/:id", locationControllers.deleteOne);

routes.post("/images/:id", checkToken, locationControllers.uploadeImages);

module.exports = routes;
