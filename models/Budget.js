const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  totalBudget: { type: Number, required: true, default: 0 },
});

module.exports = mongoose.model("Budget", budgetSchema);
