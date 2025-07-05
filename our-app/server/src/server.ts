import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/our-app-db';

// DATABASE CONNECTION
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// SERVER STARTUP
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}`);
  console.log(`Server started at ${new Date().toISOString()}`);
});
