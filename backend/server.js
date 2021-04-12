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

// accept json data in the body
app.use(express.json());
app.use('/api/user', userRoutes);

app.get('/api/products', (req, res) => {
    res.json(products);
});

const PORT = process.env.PORT || 5000
app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);