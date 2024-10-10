const express = require("express");
const routes = express.Router();

const packegeControllers = require("../controlloers/packege/packege");

routes.get("/photographer/:id", packegeControllers.getAllFor);
routes.get("/:id", packegeControllers.getOne);
routes.post("/", packegeControllers.create);
routes.put("/:id", packegeControllers.update);
routes.delete("/:id", packegeControllers.deleteOne);

module.exports = routes;
