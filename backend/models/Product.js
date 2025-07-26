// models/Product.js
const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  expiration: Date
});
module.exports = mongoose.model('Product', productSchema);
