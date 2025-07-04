import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Instructor from '../models/Instructor';
import User from '../models/User';
import { Parser as CsvParser } from 'json2csv';
import multer from 'multer';
import csv from 'csv-parser';
import fs from 'fs';
import Prerequisite from '../models/Prerequisite';
import AssessmentHistory from '../models/AssessmentHistory';
import LearningModule from '../models/LearningModule';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';
const upload = multer({ dest: 'uploads/' });
const INSTRUCTOR_JWT_SECRET = process.env.JWT_SECRET || 'changeme';

// Upload instructor profile photo (for registration)
router.post('/upload-profile-photo', upload.single('photo'), (req: express.Request, res: express.Response) => {
  const file = (req as any).file;
  if (!file) return res.status(400).json({ message: 'No file uploaded' });
  // In production, serve files securely and validate type/size
  const url = `/uploads/${file.filename}`;
  res.json({ url });
});

// Register instructor
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { name, email, password, speciality, degrees, experience, picture, bio } = req.body;
    if (!name || !email || !password || !speciality || !degrees || !experience) {
      return res.status(400).json({ message: 'All required fields must be filled.' });
    }
    const existing = await Instructor.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Instructor already exists.' });
    }
    const hashed = await bcrypt.hash(password, 10);
    const instructor = new Instructor({
      name,
      email,
      password: hashed,
      speciality,
      degrees,
      experience,
      profile: { picture: picture || '', bio: bio || '' },
    });
    await instructor.save();
    res.status(201).json({ message: 'Instructor registered successfully.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});
//instructor assessment tracking completed
// Login instructor
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const instructor = await Instructor.findOne({ email });
    if (!instructor) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }
    const valid = await bcrypt.compare(password, instructor.password);
    if (!valid) {
      return res.status(401).json({ message: 'Invalid credentials.' });
    }
    const token = jwt.sign(
      { id: instructor._id, role: 'instructor' },
      INSTRUCTOR_JWT_SECRET,
      { expiresIn: '7d' }
    );
    res.json({ token, instructor: { id: instructor._id, name: instructor.name, email: instructor.email, role: 'instructor' } });
  } catch (err) {
    res.status(500).json({ message: 'Server error.' });
  }
});

// Get all students (for instructor dashboard)
router.get('/students', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    // Optionally: check instructor exists
    // const instructor = await Instructor.findById(decoded.id);
    // if (!instructor) return res.status(403).json({ message: 'Invalid instructor' });
    const students = await User.find({}, '_id email profile achievements passedArray');
    res.json(students);
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Get single student by id
router.get('/students/:id', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const student = await User.findById(req.params.id, '_id email profile achievements passedArray flagged deactivated searchHistory');
    if (!student) return res.status(404).json({ message: 'Student not found' });
    // Fetch number of assessments attempted from AssessmentHistory
    const assessmentsAttempted = await AssessmentHistory.find({ userEmail: student.email }).select('topic score passed createdAt -_id');
    const studentObj = student.toObject();
    studentObj.assessmentsAttempted = assessmentsAttempted.length;
    studentObj.assessmentHist = assessmentsAttempted;
    res.json(studentObj);
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Flag a student
router.post('/students/:id/flag', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const student = await User.findByIdAndUpdate(req.params.id, { flagged: true }, { new: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student flagged', student });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Deactivate a student
router.post('/students/:id/deactivate', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const student = await User.findByIdAndUpdate(req.params.id, { deactivated: true }, { new: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student deactivated', student });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Reactivate a student
router.post('/students/:id/reactivate', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const student = await User.findByIdAndUpdate(req.params.id, { deactivated: false }, { new: true });
    if (!student) return res.status(404).json({ message: 'Student not found' });
    res.json({ message: 'Student reactivated', student });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Export students as CSV
router.get('/students/export', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const students = await User.find({}, 'email profile achievements passedArray flagged deactivated');
    const data = students.map(s => ({
      email: s.email,
      name: s.profile?.name || '',
      achievements: (s.achievements || []).join(';'),
      passedArray: (s.passedArray || []).join(';'),
      flagged: s.flagged || false,
      deactivated: s.deactivated || false,
    }));
    const parser = new CsvParser({ fields: ['email', 'name', 'achievements', 'passedArray', 'flagged', 'deactivated'] });
    const csvData = parser.parse(data);
    res.header('Content-Type', 'text/csv');
    res.attachment('students.csv');
    return res.send(csvData);
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Import students from CSV
router.post('/students/import', upload.single('file'), async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
    const results = [];
    fs.createReadStream(req.file.path)
      .pipe(csv())
      .on('data', (row) => results.push(row))
      .on('end', async () => {
        let created = 0, skipped = 0;
        for (const row of results) {
          if (!row.email || !row.name || !row.password) { skipped++; continue; }
          const exists = await User.findOne({ email: row.email });
          if (exists) { skipped++; continue; }
          await User.create({
            email: row.email,
            password: row.password, // In production, hash this!
            profile: { name: row.name },
            achievements: row.achievements ? row.achievements.split(';') : [],
            passedArray: row.passedArray ? row.passedArray.split(';') : [],
            flagged: row.flagged === 'true',
            deactivated: row.deactivated === 'true',
          });
          created++;
        }
        fs.unlinkSync(req.file.path);
        res.json({ message: `Import complete. Created: ${created}, Skipped: ${skipped}` });
      });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// List all topics
router.get('/topics', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const topics = await Prerequisite.find();
    res.json(topics);
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Add topic
router.post('/topics', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const { topic, prerequisites } = req.body;
    if (!topic || !Array.isArray(prerequisites)) return res.status(400).json({ message: 'Invalid data' });
    const exists = await Prerequisite.findOne({ topic });
    if (exists) return res.status(400).json({ message: 'Topic already exists' });
    const newTopic = await Prerequisite.create({ topic, prerequisites });
    res.json(newTopic);
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Edit topic
router.put('/topics/:id', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const { topic, prerequisites } = req.body;
    const updated = await Prerequisite.findByIdAndUpdate(req.params.id, { topic, prerequisites }, { new: true });
    if (!updated) return res.status(404).json({ message: 'Topic not found' });
    res.json(updated);
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Delete topic
router.delete('/topics/:id', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const deleted = await Prerequisite.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Topic not found' });
    res.json({ message: 'Deleted' });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Get all audit logs
router.get('/audit-logs', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const instructors = await Instructor.find({}, 'name email auditLogs');
    // Flatten logs with instructor info
    const logs = instructors.flatMap(inst =>
      (inst.auditLogs || []).map(log => ({
        instructorName: inst.name,
        instructorEmail: inst.email,
        ...log._doc,
      }))
    );
    // Sort by timestamp desc
    logs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    res.json(logs);
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Add an audit log entry for the authenticated instructor
router.post('/audit-log', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const { action, details } = req.body;
    const instructor = await Instructor.findById(decoded.id);
    if (!instructor) return res.status(404).json({ message: 'Instructor not found' });
    instructor.auditLogs.push({ action, details });
    await instructor.save();
    res.json({ message: 'Log added' });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});
router.get('/verify', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(403).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'changeme');
    const instructorId = (typeof decoded === 'string') ? undefined : decoded['id'];
    if (!instructorId) return res.status(403).json({ message: 'Invalid token' });
    const instructor = await Instructor.findById(instructorId);
    if (!instructor) return res.status(403).json({ message: 'Invalid token' });
    res.status(200).json({ valid: true });
  } catch (err) {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
});

router.get('/me', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'changeme');
    const instructorId = (typeof decoded === 'string') ? undefined : decoded['id'];
    if (!instructorId) return res.status(404).json({ message: 'Instructor not found' });
    const instructor = await Instructor.findById(instructorId).select('-password');
    if (!instructor) return res.status(404).json({ message: 'Instructor not found' });
    res.json(instructor);
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});
// Update instructor profile
router.put('/me', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const updateFields = {};
    const allowed = ['name', 'speciality', 'degrees', 'experience', 'profile'];
    for (const key of allowed) {
      if (req.body[key] !== undefined) updateFields[key] = req.body[key];
    }
    const updated = await Instructor.findByIdAndUpdate(decoded.id, updateFields, { new: true }).select('-password');
    if (!updated) return res.status(404).json({ message: 'Instructor not found' });
    res.json(updated);
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});


// GET /dashboard-stats - Instructor dashboard analytics and recent activity
router.get('/dashboard-stats', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);

    // Students
    const studentsCount = await User.countDocuments();
    // Topics
    const topicsCount = await Prerequisite.countDocuments();
    // Assessments
    const assessmentsCount = await AssessmentHistory.countDocuments();
    // Recent audit logs (last 5)
    const instructors = await Instructor.find({}, 'name email auditLogs');
    let auditLogs = instructors.flatMap(inst =>
      (inst.auditLogs || []).map(log => ({
        instructorName: inst.name,
        instructorEmail: inst.email,
        ...log._doc,
      }))
    );
    auditLogs.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    auditLogs = auditLogs.slice(0, 5);
    // Recent assessments (last 5)
    const recentAssessments = await AssessmentHistory.find().sort({ createdAt: -1 }).limit(5);
    // Recent topics (last 5)
    const recentTopics = await Prerequisite.find().sort({ _id: -1 }).limit(5);
    res.json({
      studentsCount,
      topicsCount,
      assessmentsCount,
      auditLogs,
      recentAssessments,
      recentTopics
    });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// GET /dependency-map - All topics and their prerequisites for dependency map
router.get('/dependency-map', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const topics = await Prerequisite.find({}, 'topic prerequisites');
    res.json(topics);
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

// Public stats endpoint for home page
router.get('/public-stats', async (req, res) => {
  try {
    const studentsCount = await User.countDocuments();
    const instructorsCount = await Instructor.countDocuments();
    const topicsCount = await Prerequisite.countDocuments();
    res.json({ studentsCount, instructorsCount, topicsCount });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /assessment-histories - Instructor assessment tracking with search and pagination
router.get('/assessment-histories', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: 'No token provided' });
    const token = authHeader.split(' ')[1];
    jwt.verify(token, INSTRUCTOR_JWT_SECRET);
    const { q = '', page = 1, limit = 20 } = req.query;
    const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
    let filter: any = {};
    let userMap: Record<string, string> = {};
    if (q) {
      // Find users matching name or email
      const users = await User.find({
        $or: [
          { email: { $regex: q, $options: 'i' } },
          { 'profile.name': { $regex: q, $options: 'i' } }
        ]
      }, 'email profile.name');
      const emails = users.map(u => u.email);
      userMap = Object.fromEntries(users.map(u => [u.email, u.profile?.name || '']));
      filter.userEmail = { $in: emails.length ? emails : [q] };
    }
    const total = await AssessmentHistory.countDocuments(filter);
    const histories = await AssessmentHistory.find(filter).sort({ createdAt: -1 }).skip(skip).limit(parseInt(limit as string));
    // Attach user name to each result
    if (!q) {
      // If not searching, fetch names for all emails in this page
      const emails = histories.map(h => h.userEmail);
      const users = await User.find({ email: { $in: emails } }, 'email profile.name');
      userMap = Object.fromEntries(users.map(u => [u.email, u.profile?.name || '']));
    }
    const results = histories.map(h => ({
      _id: h._id,
      userEmail: h.userEmail,
      userName: userMap[h.userEmail] || '',
      topic: h.topic,
      score: h.score,
      passed: h.passed,
      createdAt: h.createdAt,
      assessment: h
    }));
    res.json({ total, page: parseInt(page as string), limit: parseInt(limit as string), results });
  } catch (err) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
});

export default router; 