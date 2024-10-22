const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../middleware/auth');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/forgotPassword', userController.forgotPassword);
router.patch('/resetPassword/:token', userController.resetPassword);

// Protect all routes after this middleware
router.use(authController.protect);

router.get('/me', userController.getUser);

// Admin routes
router.use(authController.restrictTo('admin'));

router.get('/users', userController.getAllUsers);

module.exports = router;
