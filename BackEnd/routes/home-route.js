const express = require("express");
const routes = express.Router();

const homeControllser = require('../controllers/home-controller');

routes.get("/", homeControllser.getServices);
routes.post("/subscription", homeControllser.addSubscription);

module.exports = routes;
