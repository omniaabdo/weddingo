const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Assuming there's a User model
    required: true,
  },
  weddingDate: {
    type: Date,
    required: true,
  },
  totalBudget: {
    type: Number,
    required: true,
  },
  remainingBudget: {
    type: Number,
    default: 0,
  },
  items: [
    {
      name: { type: String, required: true },
      cost: { type: Number, required: true },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Budget', BudgetSchema);
