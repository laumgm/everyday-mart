import express from 'express';
import {
  registerUser,
  loginUser,
} from '../controllers/userControllers.js';

const router = express();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
