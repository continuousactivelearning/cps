
require('dotenv').config();
console.log('Using MONGODB_URI:', process.env.MONGODB_URI); // Debug log
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { body, validationResult } = require('express-validator');
const path = require('path');
const csv = require('csv-parser');
const fetch = require('node-fetch');
const stream = require('stream');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/eduvlm-bench';
const UNIMODAL_CSV_URL = 'https://docs.google.com/spreadsheets/d/1YGX3bVxTXepx1sar_X_Zmo8LE7CPduV3S7CHhV7zBzc/export?format=csv';
const MULTIMODAL_CSV_URL = 'https://docs.google.com/spreadsheets/d/1QTFLq1VOyJCnR_iCVty-0WSXdH5YI-TRjv6PiaiFk5I/export?format=csv';
const FALLBACK_CSV_PATH = path.join(__dirname, 'fallback_questions.csv');

console.log('Attempting to load CSV from:', UNIMODAL_CSV_URL); // Debug log for URL verification

// Middleware
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname));

// MongoDB Connection with retry
const connectWithRetry = () => {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    setTimeout(connectWithRetry, 5000);
  });
};
connectWithRetry();

// User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 20
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Annotation Schema
const annotationSchema = new mongoose.Schema({
  question_id: { type: String, required: true },
  question: { type: String, required: true },
  annotated_prerequisite: { type: String, required: true },
  annotator_name: { type: String, required: true },
  dataset_type: { type: String, default: 'unimodal' },
  image_url: { type: String, default: null },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
const Annotation = mongoose.model('Annotation', annotationSchema);

// Create admin users
const createAdminUsers = async () => {
  const adminUsers = [
    { username: 'arka_mukerjee', email: 'arka@eduvlm.com', password: 'AdminArka123!', firstName: 'Arka', lastName: 'Mukerjee', isAdmin: true },
    { username: 'nilam_bhojwani', email: 'nilam@eduvlm.com', password: 'AdminNilam123!', firstName: 'Nilam', lastName: 'Bhojwani', isAdmin: true },
    { username: 'sriram_p', email: 'sriram@eduvlm.com', password: 'AdminSriram123!', firstName: 'Sriram', lastName: 'P', isAdmin: true },
    { username: 'abhisekh_padhy', email: 'abhisekh@eduvlm.com', password: 'AdminAbhisekh123!', firstName: 'Abhisekh', lastName: 'Padhy', isAdmin: true }
  ];

  try {
    for (const admin of adminUsers) {
      const existingUser = await User.findOne({ $or: [{ email: admin.email }, { username: admin.username }] });
      if (!existingUser) {
        const hashedPassword = await bcrypt.hash(admin.password, 12);
        const user = new User({
          username: admin.username,
          email: admin.email,
          password: hashedPassword,
          firstName: admin.firstName,
          lastName: admin.lastName,
          isAdmin: true
        });
        await user.save();
        console.log('Created admin user: ' + admin.username);
      } else {
        console.log('Admin user already exists: ' + admin.username);
      }
    }
  } catch (err) {
    console.error('Error creating admin users:', err.message);
  }
};

// Initialize admin users after MongoDB connection
mongoose.connection.once('open', () => {
  createAdminUsers().catch(err => console.error('Error in createAdminUsers:', err.message));
});

// Auth Middleware
const authenticateToken = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.userId).select('-password');
    if (!user) {
      return res.status(401).json({ error: 'Invalid token.' });
    }
    req.user = user;
    next();
  } catch (error) {
    console.error('Token verification error:', error.message);
    res.status(401).json({ error: 'Invalid token.' });
  }
};

const isAdmin = async (req, res, next) => {
  try {
    if (!req.user || !req.user.isAdmin) {
      return res.status(403).json({ error: 'Access denied. Admin only.' });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: 'Server error checking admin status' });
  }
};

// Load CSV data from Google Sheets
let unimodalQuestions = [];
let multimodalQuestions = [];

const loadCSV = async (datasetType = 'unimodal') => {
  const CSV_URL = datasetType === 'multimodal' ? MULTIMODAL_CSV_URL : UNIMODAL_CSV_URL;
  const questionsArray = datasetType === 'multimodal' ? multimodalQuestions : unimodalQuestions;
  
  try {
    console.log(`Fetching ${datasetType} CSV from Google Sheets:`, CSV_URL);
    const response = await fetch(CSV_URL, { timeout: 10000 });
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }

    const buffer = await response.buffer();
    console.log(`${datasetType} CSV fetched, size:`, buffer.length, 'bytes');
    const bufferStream = new stream.PassThrough();
    bufferStream.end(buffer);

    questionsArray.length = 0; // Clear existing data
    bufferStream
      .pipe(csv())
      .on('data', (row) => {
        console.log(`Parsed ${datasetType} CSV row:`, row);
        
        if (datasetType === 'multimodal') {
          // Parse multimodal data structure
          const prerequisites = row.prerequisites
            ? row.prerequisites.split(',').map(item => item.trim()).filter(item => item)
            : [];
          
          let wrongAnswerArray = [];
          try {
            if (row.wrong_answer && row.wrong_answer.startsWith('[')) {
              wrongAnswerArray = JSON.parse(row.wrong_answer);
            } else {
              wrongAnswerArray = row.wrong_answer ? [row.wrong_answer] : [];
            }
          } catch (e) {
            wrongAnswerArray = row.wrong_answer ? [row.wrong_answer] : [];
          }
          
          questionsArray.push({
            question_id: row.question_id || 'N/A',
            question: row.question || 'N/A',
            correct_answer: row.correct_answer || 'N/A',
            all_prerequisites: prerequisites,
            wrong_answer: wrongAnswerArray.length > 0 ? wrongAnswerArray[0] : 'N/A',
            wrong_answers: wrongAnswerArray,
            image_url: row.image_url || null,
            image_caption: row.image_caption || null,
            dataset_type: 'multimodal'
          });
        } else {
          // Parse unimodal data structure
          const prerequisites = row.all_prerequisites
            ? row.all_prerequisites
                .replace(/[\[\]"]+/g, '')
                .split(',')
                .map(item => item.trim())
                .filter(item => item)
            : [];
          
          questionsArray.push({
            question_id: row.question_id || 'N/A',
            question: row.question || 'N/A',
            correct_answer: row.correct_answer || 'N/A',
            all_prerequisites: prerequisites,
            wrong_answer: row.wrong_answer || 'N/A',
            dataset_type: 'unimodal'
          });
        }
      })
      .on('end', () => {
        console.log(`${datasetType} CSV file loaded successfully with`, questionsArray.length, 'questions');
        if (questionsArray.length === 0) {
          console.warn(`Warning: ${datasetType} CSV loaded but no questions parsed. Check CSV format.`);
          if (datasetType === 'unimodal') {
            loadFallbackData();
          }
        }
      })
      .on('error', (err) => {
        console.error(`Error parsing ${datasetType} CSV:`, err.message);
        questionsArray.length = 0;
        if (datasetType === 'unimodal') {
          loadFallbackData();
        }
      });
  } catch (error) {
    console.error(`Error loading ${datasetType} CSV from Google Sheets:`, error.message);
    questionsArray.length = 0;
    if (datasetType === 'unimodal') {
      loadFallbackData();
    }
  }
};

// Fallback to test data
const loadFallbackData = () => {
  console.log('Loading fallback test data');
  unimodalQuestions = [
    {
      question_id: 'Q001',
      question: 'What is the derivative of x^2?',
      correct_answer: '2x',
      all_prerequisites: ['Basic algebra', 'Introduction to derivatives'],
      wrong_answer: 'x^2',
      dataset_type: 'unimodal'
    },
    {
      question_id: 'Q002',
      question: 'What is 2 + 2?',
      correct_answer: '4',
      all_prerequisites: ['Basic arithmetic'],
      wrong_answer: '22',
      dataset_type: 'unimodal'
    }
  ];
  console.log('Loaded fallback test data with', unimodalQuestions.length, 'questions');
};

// Load CSV data on server start
loadCSV('unimodal');
loadCSV('multimodal');

// Routes

// Register
app.post('/api/register', [
  body('username').isLength({ min: 3, max: 20 }).withMessage('Username must be 3-20 characters'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password, firstName, lastName } = req.body;

    const existingUser = await User.findOne({
      $or: [{ email }, { username }]
    });
    if (existingUser) {
      return res.status(400).json({ 
        error: existingUser.email === email ? 'Email already registered' : 'Username already taken' 
      });
    }

    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      email,
      password: hashedPassword,
      firstName,
      lastName
    });
    await user.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isAdmin: user.isAdmin
      }
    });
  } catch (error) {
    console.error('Registration error:', error.message);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// Login
app.post('/api/login', [
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('password').notEmpty().withMessage('Password is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '7d' });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    res.json({
      message: 'Login successful',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isAdmin: user.isAdmin
      }
    });
  } catch (error) {
    console.error('Login error:', error.message);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// Logout
app.post('/api/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Logout successful' });
});

// Get current user
app.get('/api/user', authenticateToken, (req, res) => {
  res.json({
    user: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      isAdmin: req.user.isAdmin
    }
  });
});

// Get questions
app.get('/api/questions', authenticateToken, (req, res) => {
  const limit = parseInt(req.query.limit) || 10;
  const random = req.query.random === '1';
  const datasetType = req.query.dataset || 'unimodal';
  
  const questionsArray = datasetType === 'multimodal' ? multimodalQuestions : unimodalQuestions;
  
  if (questionsArray.length === 0) {
    console.error(`No ${datasetType} questions available in /api/questions. CSV loading may have failed.`);
    return res.status(500).json({ 
      error: `No ${datasetType} questions available. Check server logs for CSV loading errors or ensure the Google Sheets file is publicly accessible.`
    });
  }
  
  if (random) {
    const randomIndex = Math.floor(Math.random() * questionsArray.length);
    console.log(`Returning random ${datasetType} question:`, questionsArray[randomIndex]);
    return res.json([questionsArray[randomIndex]]);
  }
  
  res.json(questionsArray.slice(0, limit));
});

// Save annotation
app.post('/api/annotations', authenticateToken, [
  body('question_id').notEmpty().withMessage('Question ID is required'),
  body('question').notEmpty().withMessage('Question is required'),
  body('annotated_prerequisite').notEmpty().withMessage('Annotated prerequisite is required'),
  body('annotator_name').notEmpty().withMessage('Annotator name is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const annotation = new Annotation(req.body);
    await annotation.save();
    console.log('Saved annotation:', req.body); // Debug log
    res.status(201).json({ message: 'Annotation saved successfully' });
  } catch (error) {
    console.error('Annotation save error:', error.message);
    res.status(500).json({ error: 'Server error saving annotation' });
  }
});

// Detect prerequisites endpoint
app.post('/api/detect-prereqs', authenticateToken, async (req, res) => {
  try {
    const { question, correct_answer, wrong_answer } = req.body;
    console.log('Received /api/detect-prereqs request:', { question, correct_answer, wrong_answer }); // Debug log
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }
    
//http://localhost:5000/api/detect-prereqs
    const pythonApiUrl = 'https://eduvlm-frontpage.onrender.com/api/detect-prereqs';
    const pythonResponse = await fetch(pythonApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, correct_answer, wrong_answer })
    });

    const data = await pythonResponse.json();
    console.log('Flask API response:', data); // Debug log
    if (pythonResponse.ok) {
      res.json({
        question: data.question,
        all_prerequisites: Array.isArray(data.all_prerequisites) ? data.all_prerequisites : data.all_prerequisites.split(', ').map(item => item.trim()),
        single_missing_prerequisite: typeof data.single_missing_prerequisite === 'string' ? data.single_missing_prerequisite : 'None'
      });
    } else {
      console.error('Flask API error:', data);
      res.status(pythonResponse.status).json({ error: `Flask API error: ${data.error || 'Unknown error'}` });
    }
  } catch (error) {
    console.error('Error detecting prerequisites:', error.message);
    res.status(500).json({ error: `Server error detecting prerequisites: ${error.message}` });
  }
});

// Admin Routes
app.get('/api/admin/questions', [authenticateToken, isAdmin], (req, res) => {
  const datasetType = req.query.dataset || 'unimodal';
  const questionsArray = datasetType === 'multimodal' ? multimodalQuestions : unimodalQuestions;
  res.json(questionsArray);
});

app.post('/api/admin/questions', [
  authenticateToken,
  isAdmin,
  body('question_id').notEmpty().withMessage('Question ID is required'),
  body('question').notEmpty().withMessage('Question is required'),
  body('correct_answer').notEmpty().withMessage('Correct answer is required'),
  body('wrong_answer').notEmpty().withMessage('Wrong answer is required'),
  body('all_prerequisites').isArray().withMessage('Prerequisites must be an array')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { question_id, question, correct_answer, wrong_answer, all_prerequisites } = req.body;
    const newQuestion = {
      question_id,
      question,
      correct_answer,
      wrong_answer,
      all_prerequisites
    };
    questions.push(newQuestion);
    res.status(201).json({ message: 'Question added successfully', question: newQuestion });
  } catch (error) {
    console.error('Error adding question:', error.message);
    res.status(500).json({ error: 'Server error adding question' });
  }
});

app.put('/api/admin/questions/:question_id', [
  authenticateToken,
  isAdmin,
  body('question').notEmpty().withMessage('Question is required'),
  body('correct_answer').notEmpty().withMessage('Correct answer is required'),
  body('wrong_answer').notEmpty().withMessage('Wrong answer is required'),
  body('all_prerequisites').isArray().withMessage('Prerequisites must be an array')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { question_id } = req.params;
    const { question, correct_answer, wrong_answer, all_prerequisites } = req.body;
    const index = questions.findIndex(q => q.question_id === question_id);
    if (index === -1) {
      return res.status(404).json({ error: 'Question not found' });
    }

    questions[index] = { ...questions[index], question, correct_answer, wrong_answer, all_prerequisites };
    res.json({ message: 'Question updated successfully', question: questions[index] });
  } catch (error) {
    console.error('Error updating question:', error.message);
    res.status(500).json({ error: 'Server error updating question' });
  }
});

app.delete('/api/admin/questions/:question_id', [authenticateToken, isAdmin], async (req, res) => {
  try {
    const { question_id } = req.params;
    const index = questions.findIndex(q => q.question_id === question_id);
    if (index === -1) {
      return res.status(404).json({ error: 'Question not found' });
    }

    questions.splice(index, 1);
    res.json({ message: 'Question deleted successfully' });
  } catch (error) {
    console.error('Error deleting question:', error.message);
    res.status(500).json({ error: 'Server error deleting question' });
  }
});

app.get('/api/admin/annotations', [authenticateToken, isAdmin], async (req, res) => {
  try {
    const annotations = await Annotation.find();
    console.log('Fetched annotations:', annotations.length, new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })); // Debug log
    res.json(annotations);
  } catch (error) {
    console.error('Error fetching annotations:', error.message);
    res.status(500).json({ error: 'Server error fetching annotations' });
  }
});

app.get('/api/admin/report', [authenticateToken, isAdmin], async (req, res) => {
  try {
    const annotations = await Annotation.find();
    console.log('Generating report with', annotations.length, 'annotations'); // Debug log
    let csvContent = 'Question ID,Question,Annotated Prerequisite,Annotator Name,Dataset Type,Image URL,Created At\n';
    annotations.forEach(annotation => {
      const row = [
        annotation.question_id,
        `"${annotation.question.replace(/"/g, '""')}"`,
        `"${annotation.annotated_prerequisite.replace(/"/g, '""')}"`,
        annotation.annotator_name,
        annotation.dataset_type || 'unimodal',
        annotation.image_url || '',
        annotation.createdAt.toISOString()
      ].join(',');
      csvContent += `${row}\n`;
    });
    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename="annotations_report.csv"');
    res.send(csvContent);
  } catch (error) {
    console.error('Error generating report:', error.message);
    res.status(500).json({ error: 'Server error generating report' });
  }
});

app.get('/admin', [authenticateToken, isAdmin], (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Serve HTML files
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/leaderboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'leaderboard.html'));
});

app.get('/annotator', (req, res) => {
  res.sendFile(path.join(__dirname, 'annotator.html'));
});

app.get('/prerequisite_detection', (req, res) => {
  res.sendFile(path.join(__dirname, 'prerequisite_detection.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
});