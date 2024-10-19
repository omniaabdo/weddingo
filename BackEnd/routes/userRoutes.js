const express = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/auth");
const { checkToken } = require("../middleware/auth");
const router = express.Router();

// Public Routes
router.post("/register", userController.register);
router.post("/login", userController.login);
// get all services for user
router.get("/services", checkToken, userController.getServices);

// Protected Routes (only authenticated users)
router.use(authMiddleware.protect);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
