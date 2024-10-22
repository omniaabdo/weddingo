const express = require('express');
const {
    register,
    login,
    facebookLogin,
    googleLogin,
    forgotPassword,
    resetPassword,
    getUser,
    getAllUsers,
    adminAddUser,
    adminUpdateUser,
    adminDeleteUser,
} = require('../controllers/userController');
const authController = require('../middleware/auth');

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/facebookLogin', facebookLogin);
router.post('/googleLogin', googleLogin);
router.post('/forgotPassword', forgotPassword);
router.patch('/resetPassword/:token', resetPassword);

// Protected routes
router.use(authController.protect);
router.get('/me', getUser); // Get current user

// Admin routes
router.get('/', authController.restrictTo('admin'), getAllUsers);
router.post('/admin/users', authController.restrictTo('admin'), adminAddUser);
router
    .route('/admin/users/:id')
    .patch(authController.restrictTo('admin'), adminUpdateUser)
    .delete(authController.restrictTo('admin'), adminDeleteUser);

module.exports = router;
