// services/productService.js
const Product = require('../models/Product');
const Counter = require('../models/Counter');

// Function to get next sequential ID
const getNextId = async () => {
  const counter = await Counter.findByIdAndUpdate(
    'productId',
    { $inc: { seq: 1 } },
    { new: true, upsert: true }
  );
  return counter.seq;
};

exports.getAll = () => {
  return Product.find().sort({ productId: 1 });
};

exports.create = async (productData) => {
  const productId = await getNextId();
  return Product.create({ ...productData, productId });
};

exports.update = async (productData) => {
  const { productId, ...updateData } = productData;
  return Product.findOneAndUpdate(
    { productId: parseInt(productId) },
    updateData,
    { new: true }
  );
};

exports.delete = async (productData) => {
  return Product.findOneAndDelete({ productId: parseInt(productData.productId) });
};
