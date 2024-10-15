const express = require("express");
const routes = express.Router();

const locationControllers = require("../controllers/location");

routes.get("/", locationControllers.getAll);
routes.get("/:id", locationControllers.getOne);
routes.post("/", locationControllers.create);
routes.put("/:id", locationControllers.update);
routes.delete("/:id", locationControllers.deleteOne);

module.exports = routes;
