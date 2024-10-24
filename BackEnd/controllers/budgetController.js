"use strict";
const Budget = require('../models/Budget');

// Create a new budget
const createBudget = async (req, res) => {
  try {
    const { weddingDate, totalBudget, items } = req.body;

    const budget = new Budget({
      user: req.user.id, // Assuming auth middleware sets req.user
      weddingDate,
      totalBudget,
      remainingBudget: totalBudget,  // Set the remaining budget initially to the total budget
      items,
    });

    await budget.save();
    res.status(201).json({ message: 'Budget created successfully', budget });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get the current user's budget
const getBudget = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    const budgets = await Budget.find({ user: req.user.id })
      .limit(limitNumber) 
      .skip((pageNumber - 1) * limitNumber)
      .exec();

    const totalBudgets = await Budget.countDocuments({ user: req.user.id });

    if (budgets.length === 0) {
      return res.status(404).json({ message: 'No budgets found' });
    }

    res.json({
      totalPages: Math.ceil(totalBudgets / limitNumber), 
      currentPage: pageNumber,   
      pageSize: limitNumber,    
      data: budgets,
      totalDocuments: totalBudgets
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update budget
const updateBudget = async (req, res) => {
  try {
    const { weddingDate, totalBudget, items } = req.body;
    const budget = await Budget.findOne({ user: req.user.id });
    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }

    budget.weddingDate = weddingDate || budget.weddingDate;
    budget.totalBudget = totalBudget || budget.totalBudget;
    budget.remainingBudget = totalBudget - budget.items.reduce((sum, item) => sum + item.cost, 0);
    budget.items = items || budget.items;

    await budget.save();
    res.json({ message: 'Budget updated successfully', budget });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete budget
const deleteBudget = async (req, res) => {
  try {
    const budget = await Budget.findOneAndDelete({ user: req.user.id });
    if (!budget) {
      return res.status(404).json({ message: 'Budget not found' });
    }
    res.json({ message: 'Budget deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createBudget,
  getBudget,
  updateBudget,
  deleteBudget,
};
