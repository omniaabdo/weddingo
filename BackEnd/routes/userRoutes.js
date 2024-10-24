const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../middleware/auth");
const { checkToken } = require("../middleware/auth");
const   router = express.Router();

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/forgotPassword", userController.forgotPassword);
router.post('/verifyCode', userController.verifyCode);
router.post("/resetPassword", userController.resetPassword);
router.get("/services", checkToken, userController.getServices);

router.get("/me", checkToken, userController.getUser);

// userRoutes.js
router.get('/searchServices', userController.searchServices);

// Protect all routes after this middleware

// Admin routes
router.use(authController.restrictTo("admin"));

router.get("/users", userController.getAllUsers);

module.exports = router;
