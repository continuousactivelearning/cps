// server/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const authRoutes = require('./routes/authRoutes');
const learningPathRoutes = require('./routes/learningPathRoutes');
const quizRoutes = require('./routes/quizRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allow cross-origin requests from your React frontend
app.use(express.json()); // For parsing JSON request bodies

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/learning-paths', learningPathRoutes);
app.use('/api/quizzes', quizRoutes);

// Basic route for testing
app.get('/', (req, res) => {
    res.send('MERN Backend API is running!');
});

app.listen(PORT, () => {
    console.log(Server running on port ${PORT});
});
