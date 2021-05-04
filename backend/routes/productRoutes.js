import express from 'express';
import {
  addProduct,
  getProducts,
  updateProduct,
} from '../controllers/productControllers.js';

const router = express.Router();

router.post('/product', addProduct);
router.get('/products', getProducts);
router.put('/product/:id', updateProduct);

export default router;