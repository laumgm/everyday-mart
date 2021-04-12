import express from 'express';
import mongoose from 'mongoose';
import products from './products.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
dotenv.config();
const app = express();

//db connection
try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
    });

    console.log(
        `MongoDB Connected: ${conn.connection.host}`
    );
} catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
}

app.use(express.json());
app.use('/api/users', userRoutes);
// app.get('/api/products', (req, res) => {
//     res.json(products);
// });

// app.get('/api/products/:id', (req, res) => {
//     const product = products.find((p) => p._id === req.params.id);
//     res.json(product);
// });

const PORT = process.env.PORT || 3000
app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);