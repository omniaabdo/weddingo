const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Assuming there's a User model
    required: [true, "User ID is required"],
  },
  weddingDate: {
    type: Date,
    required: [true, "Wedding date is required"],
    validate: {
      validator: function (value) {
        return value >= new Date(); // Wedding date must be today or in the future
      },
      message: "Wedding date must be today or in the future",
    },
  },
  totalBudget: {
    type: Number,
    required: [true, "Total budget is required"],
    min: [0, "Total budget cannot be negative"], // Ensure budget is not negative
  },
  remainingBudget: {
    type: Number,
    default: 0,
    min: [0, "Remaining budget cannot be negative"], // Ensure remaining budget is not negative
  },
  items: [
    {
      name: {
        type: String,
        required: [true, "Item name is required"],
        trim: true,
        minlength: [1, "Item name must be at least 1 character long"],
        maxlength: [100, "Item name cannot exceed 100 characters"],
      },
      cost: {
        type: Number,
        required: [true, "Item cost is required"],
        min: [0, "Item cost cannot be negative"], // Ensure item cost is not negative
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a method to calculate the remaining budget
BudgetSchema.methods.calculateRemainingBudget = function() {
  const totalSpent = this.items.reduce((total, item) => total + item.cost, 0);
  this.remainingBudget = this.totalBudget - totalSpent;
  return this.remainingBudget;
};

module.exports = mongoose.model('Budget', BudgetSchema);
