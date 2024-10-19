const express = require("express");
const routes = express.Router();

const photographerControllers = require("../controllers/photographer");
const { checkToken } = require("../middleware/auth");
routes.get("/", photographerControllers.getAll);
routes.get("/:id", photographerControllers.getOne);
routes.post("/", checkToken, photographerControllers.create);
routes.put("/:id", photographerControllers.update);
routes.delete("/:id", photographerControllers.deleteOne);

module.exports = routes;
