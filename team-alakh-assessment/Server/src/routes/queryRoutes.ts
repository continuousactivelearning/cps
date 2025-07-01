import express from 'express';
import multer from 'multer';
import Query from '../models/Query';
import User from '../models/User';
import Instructor from '../models/Instructor';
import path from 'path';
import fs from 'fs';
import jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

const router = express.Router();
const upload = multer({ dest: 'Server/uploads/' });
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

function getUserFromToken(req: express.Request): JwtPayload | null {
  const authHeader = req.headers.authorization;
  if (!authHeader) return null;
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (typeof decoded === 'string') return null;
    return decoded as JwtPayload;
  } catch {
    return null;
  }
}
//added the query routes to enable instructor to access the student queries
// Student: Create query
router.post('/', upload.array('attachments', 5), async (req, res):Promise<any> => {
  const user = getUserFromToken(req) as JwtPayload | null;
  if (!user || user.role !== 'user') return res.status(401).json({ message: 'Unauthorized' });
  const { content } = req.body;
  if (!content) return res.status(400).json({ message: 'Content required' });
  const attachments = ((req as any).files || []).map((f: any) => ({
    url: `/uploads/${f.filename}`,
    type: f.mimetype,
  }));
  const query = await Query.create({
    studentId: user.id,
    content,
    attachments,
    status: 'open',
  });
  res.json(query);
});

// Student: List own queries
router.get('/my', async (req, res):Promise<any> => {
  const user = getUserFromToken(req) as JwtPayload | null;
  if (!user || user.role !== 'user') return res.status(401).json({ message: 'Unauthorized' });
  const queries = await Query.find({ studentId: user.id }).sort({ createdAt: -1 });
  res.json(queries);
});

// Student: Close and delete query
router.post('/:id/close', async (req, res):Promise<any> => {
  const user = getUserFromToken(req) as JwtPayload | null;
  if (!user || user.role !== 'user') return res.status(401).json({ message: 'Unauthorized' });
  const query = await Query.findOne({ _id: req.params.id, studentId: user.id });
  if (!query) return res.status(404).json({ message: 'Query not found' });
  await Query.deleteOne({ _id: req.params.id });
  res.json({ message: 'Query closed and deleted' });
});

// Instructor: List all queries
router.get('/', async (req, res):Promise<any> => {
  const user = getUserFromToken(req) as JwtPayload | null;
  if (!user || user.role !== 'instructor') return res.status(401).json({ message: 'Unauthorized' });
  const queries = await Query.find().populate('studentId', 'profile email').sort({ createdAt: -1 });
  res.json(queries);
});

// Instructor: Update status
router.post('/:id/status', async (req, res):Promise<any> => {
  const user = getUserFromToken(req) as JwtPayload | null;
  if (!user || user.role !== 'instructor') return res.status(401).json({ message: 'Unauthorized' });
  let { status } = req.body;
  // Normalize status to match enum
  if (typeof status === 'string') {
    status = status.toLowerCase().replace(/\s+/g, '_');
  }
  const allowed = ['open', 'under_progress', 'solved', 'irrelevant', 'closed'];
  console.log('Received status:', status, 'Allowed:', allowed);
  if (!allowed.includes(status)) return res.status(400).json({ message: 'Invalid status' });

  // Use $set to ensure only the status field is updated
  const update = { $set: { status, instructorId: user.id } };
  const query = await Query.findOneAndUpdate(
    { _id: req.params.id },
    update,
    { new: true, runValidators: true }
  );
  console.log('Updated query:', query);
  if (!query) return res.status(404).json({ message: 'Query not found or update failed' });

  // Log audit
  await Instructor.findByIdAndUpdate(user.id, {
    $push: {
      auditLogs: {
        action: `Query status updated to ${status}`,
        details: { queryId: req.params.id, studentId: query.studentId, status },
        timestamp: new Date(),
      },
    },
  });
  res.json(query);
});

// Instructor: Add response
router.post('/:id/respond', async (req, res):Promise<any> => {
  const user = getUserFromToken(req) as JwtPayload | null;
  if (!user || user.role !== 'instructor') return res.status(401).json({ message: 'Unauthorized' });
  const { response } = req.body;
  const query = await Query.findByIdAndUpdate(req.params.id, { response, instructorId: user.id }, { new: true });
  if (!query) return res.status(404).json({ message: 'Query not found' });
  // Log audit
  await Instructor.findByIdAndUpdate(user.id, {
    $push: {
      auditLogs: {
        action: 'Responded to query',
        details: { queryId: req.params.id, studentId: query.studentId, response },
        timestamp: new Date(),
      },
    },
  });
  res.json(query);
});

export default router; 