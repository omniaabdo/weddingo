const express = require('express');
const budgetcontroller=require('../controllers/budgetController');
const router = express.Router();

// Routes for the budget
router.post('/',budgetcontroller.createBudget);  // Create a budget
router.get('/', budgetcontroller.getBudget);      // Get the current user's budget
router.put('/', budgetcontroller.updateBudget);   // Update a budget
router.delete('/', budgetcontroller.deleteBudget); // Delete a budget

module.exports = router;

