// services/productService.js
const Product = require('../models/Product');

exports.getAll = () => {
  return Product.find();
};

exports.create = (productData) => {
  return Product.create(productData);
};
