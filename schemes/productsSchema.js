const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  author: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: false,
  },
  cover: {
    type: String,
    required: false,
  },
  pages: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
  print: {
    type: String,
    required: false,
  },
  price: {
    type: String,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
  isActive: {
    type: Boolean,
    required: false,
  },
  count: {
    type: String,
    required: false,
  },
  total: {
    type: String,
    required: false,
  },
  addedDate: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("products", ProductsSchema);
