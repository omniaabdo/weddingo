<<<<<<< HEAD
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
=======
const express = require('express');
const userController = require('../controllers/userController'); // Assuming the code you shared is in userController.js
const authController = require('../controllers/authController'); // For protecting routes if you implement role-based access control
const router = express.Router();

// Public routes
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/forgotPassword', userController.forgotPassword);
router.patch('/resetPassword/:token', userController.resetPassword);
>>>>>>> 198e85055a4db47ed4e94035ac76982399ae207c

// Protect all routes after this middleware
router.use(authController.protect);  // Middleware to protect routes (e.g., checks JWT)

<<<<<<< HEAD
router
  .route("/:id")
  .get(userController.getUser)
=======
// User routes (for logged-in users)
router.route('/me')
  .get(userController.getUser) // Get logged-in user's details
>>>>>>> 198e85055a4db47ed4e94035ac76982399ae207c
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

// Admin routes (for admins only)
router.use(authController.restrictTo('admin'));  // Middleware to restrict routes to 'admin' role

router.route('/')
  .post(userController.adminAddUser) // Admin adding new users
  .get(userController.getAllUsers); // Admins fetching all users (added a placeholder for this method)

router.route('/:id')
  .get(userController.getUser) // Fetch user by ID (both user/admin)
  .patch(userController.adminUpdateUser) // Admin updating user details
  .delete(userController.adminDeleteUser); // Admin deleting a user

module.exports = router;
