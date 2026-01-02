const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema(
  {
    category: String,
    name: String,
    price: String,
    image: String,
    quantity: Object,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Menu", menuSchema);
