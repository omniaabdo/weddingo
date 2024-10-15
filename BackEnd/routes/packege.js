const express = require("express");
const routes = express.Router();

const packageControllers = require("../controllers/packege");

routes.get("/photographer/:id", packageControllers.getAllFor);
routes.get("/:id", packageControllers.getOne);
routes.post("/", packageControllers.create);
routes.put("/:id", packageControllers.update);
routes.delete("/:id", packageControllers.deleteOne);

module.exports = routes;
