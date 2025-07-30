// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productId: { type: Number, unique: true, required: true },
  name: String,
  quantity: Number,
  expiration: Date,
  size: String,
  status: String
});

module.exports = mongoose.model('Product', productSchema);
