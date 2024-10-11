const express = require("express");
const routes = express.Router();

const albumControllers = require("../controlloers/album/album");

routes.get("/photographer/:id", albumControllers.getAllFor);
routes.get("/:id", albumControllers.getOne);
routes.post("/", albumControllers.create);
routes.put("/:id", albumControllers.update);
routes.delete("/:id", albumControllers.deleteOne);

module.exports = routes;
