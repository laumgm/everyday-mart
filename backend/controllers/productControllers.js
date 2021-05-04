import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const addProduct = asyncHandler(async (req, res) => {
  const { 
    name, 
    category, 
    image, 
    brand, 
    description, 
    price, 
    countInStock,
  } = req.body;

  const productExists = await Product.findOne({ name });

  if (productExists) {
    res.status(400);
    throw new Error('Product already exists');
  }

  const product = await Product.create({
    name,
    category,
    image,
    brand,
    description,
    price,
    countInStock,
  })

  if (product) {
    res.status(201).json({
      name,
      category,
      image,
      brand,
      description,
      price,
      countInStock,
    })
  } else {
    res.status(500);
    throw new Error('Failed to create product');
  }
});

const getProducts = asyncHandler(async (req, res) => {
  const product = await Product.find({});
  res.json(product);
});

const updateProduct = asyncHandler(async (req, res) => {
  const { 
    name, 
    category, 
    image, 
    brand, 
    description, 
    price, 
    countInStock,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
      product.name = name;
      product.category = category;
      product.image = image;
      product.brand = brand;
      product.description = description;
      product.price = price;
      product.countInStock = countInStock;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
  } else {  
      res.status(400);
      throw new Error('Could not find product');
  }
});

export {
  addProduct,
  getProducts,
  updateProduct,
}



