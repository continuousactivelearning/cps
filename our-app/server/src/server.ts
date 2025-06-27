import mongoose from 'mongoose';
import app from './app';

const PORT = process.env.PORT || 3000;

// ========================================
// DATABASE CONNECTION
// ========================================

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/our-app-db')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// ========================================
// SERVER STARTUP
// ========================================

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}`);
  console.log(`Server started at ${new Date().toISOString()}`);
});
