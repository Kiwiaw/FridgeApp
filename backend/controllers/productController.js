// controllers/productController.js
const productService = require('../services/productService');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await productService.getAll();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, quantity, expiration } = req.body;
    
    // Validate required fields
    if (!name || !quantity) {
      return res.status(400).json({ error: 'Name and quantity are required' });
    }
    
    const newProduct = await productService.create({ name, quantity, expiration });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Failed to create product' });
  }
};
