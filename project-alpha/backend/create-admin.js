const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

// User schema (simplified version)
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  topics: [String],
  prerequisites: [{
    topic: String,
    prerequisites: [String]
  }],
  quizScores: [{
    topic: String,
    score: Number,
    date: String
  }],
  learningPaths: [{
    topic: String,
    weeks: Number,
    level: String,
    durationPerDay: String,
    path: mongoose.Schema.Types.Mixed,
    generatedAt: String
  }],
  avatar: String
});

const User = mongoose.model('User', userSchema);

async function createAdmin() {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGO_URI || 'mongodb+srv://dsivasai05:csk@cluster0.nmjhsng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ role: 'admin' });
    if (existingAdmin) {
      console.log('Admin user already exists:');
      console.log('Username:', existingAdmin.username);
      console.log('Email:', existingAdmin.email);
      console.log('Role:', existingAdmin.role);
      return;
    }

    // Create admin user
    const adminData = {
      username: 'admin',
      email: 'admin@example.com',
      password: await bcrypt.hash('admin123', 10),
      role: 'admin',
      topics: [],
      prerequisites: [],
      quizScores: [],
      learningPaths: []
    };

    const admin = new User(adminData);
    await admin.save();

    console.log('Admin user created successfully!');
    console.log('Username: admin');
    console.log('Email: admin@example.com');
    console.log('Password: admin123');
    console.log('Role: admin');

  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}

createAdmin();
