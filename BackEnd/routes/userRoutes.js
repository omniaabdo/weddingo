const express = require('express');
const { register, login } = require('../controllers/userController');
const { validateUser, validate } = require('../middleware/validator');
const router = express.Router();

router.post('/register', validateUser, validate, register);
router.post('/login', login);

module.exports = router;
