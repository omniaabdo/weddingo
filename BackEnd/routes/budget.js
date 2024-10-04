const express = require('express');
const { createBudget, getBudget, updateBudget, deleteBudget } = require('../controllers/budgetController');
const auth = require('../middleware/auth');  // Assuming you have an authentication middleware

const router = express.Router();

// Routes for the budget
router.post('/', auth, createBudget);  // Create a budget
router.get('/', auth, getBudget);      // Get the current user's budget
router.put('/', auth, updateBudget);   // Update a budget
router.delete('/', auth, deleteBudget); // Delete a budget

module.exports = router;

