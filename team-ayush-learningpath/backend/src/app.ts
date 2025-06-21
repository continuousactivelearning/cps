// src/app.ts
import express, { Express } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'; // <-- Import cookie-parser
// import connectDB from './config/db';
import authRoutes from './routes/authRoutes';

// Load environment variables
dotenv.config();

// Initialize Express app
const app: Express = express();

// Connect to Database
// connectDB();

// Core Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use('/api/auth', authRoutes);

// Server Initialization
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running in '${process.env.NODE_ENV || 'development'}' mode on port ${PORT}`);
});