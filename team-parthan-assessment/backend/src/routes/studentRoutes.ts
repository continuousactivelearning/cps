import express from 'express';
import { authorize } from '../middlewares/authMiddleware';
import upload from '../middlewares/upload';
import { enrollUnderInstructor, submitConcern } from '../controllers/studentController';

const router = express.Router();

router.post('/enroll', authorize(['student']), async (req, res, next) => {
  try {
	await enrollUnderInstructor(req, res);
  } catch (err) {
	next(err);
  }
});
router.post('/submit-concern', authorize(['student']), upload.single('pdf'), async (req, res, next) => {
  try {
    await submitConcern(req, res);
  } catch (err) {
    next(err);
  }
});

export default router;