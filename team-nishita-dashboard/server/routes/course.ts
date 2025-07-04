import { Router, Request, Response, NextFunction } from 'express';
import { Course } from '../models/course';
import { jwtMiddleware } from '../middleware/jwt';
import { requireRole } from '../middleware/roleMiddleware';
// import  from 'slugify';
// const slugify = require('slugify');

export const courseRouter = Router();

// Admin routes - require admin role
courseRouter.post('/add-course', jwtMiddleware, requireRole('admin'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { courseId, courseName, slug, syllabusPDF, materialPDF } = req.body;

    // Validation
    if (!courseId || !courseName || !slug || !syllabusPDF || !materialPDF) {
      res.status(400).json({
        message: 'All fields are required'
      });
      return;
    }

    // Check if course ID already exists
    const existingCourse = await Course.findOne({ courseId: parseInt(courseId) });
    if (existingCourse) {
      res.status(400).json({
        message: 'Course ID already exists'
      });
      return;
    }

    // Check if course name already exists
    const existingCourseName = await Course.findOne({ courseName });
    if (existingCourseName) {
      res.status(400).json({
        message: 'Course name already exists'
      });
      return;
    }

    // Generate slug
    // const slug = slugify(courseName, { lower: true, strict: true });

    // Create course in database
    const newCourse = await Course.create({
      courseId: parseInt(courseId),
      courseName,
      slug,
      syllabusPDF,
      materialPDF
    });

    res.status(201).json({
      message: 'Course added successfully',
      course: newCourse
    });
    return;

  } catch (error) {
    next(error);
  }
});

// Public routes - accessible to authenticated users
courseRouter.use(jwtMiddleware); // All routes below require authentication

// Get all courses (for users)
courseRouter.get('/all', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const courses = await Course.find().sort({ courseId: 1 }).select('-__v');
    res.status(200).json({
      courses
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Get course by slug
courseRouter.get('/slug/:slug', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { slug } = req.params;
    const course = await Course.findOne({ slug }).select('-__v');

    if (!course) {
      res.status(404).json({
        message: 'Course not found'
      });
      return;
    }

    res.status(200).json({
      course
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Get course by ID
courseRouter.get('/:courseId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findOne({ courseId: parseInt(courseId) }).select('-__v');

    if (!course) {
      res.status(404).json({
        message: 'Course not found'
      });
      return;
    }

    res.status(200).json({
      course
    });
    return;
  } catch (error) {
    next(error);
  }
});

// Admin only - Delete course
courseRouter.delete('/:courseId', requireRole('admin'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { courseId } = req.params;
    const course = await Course.findOneAndDelete({ courseId: parseInt(courseId) });

    if (!course) {
      res.status(404).json({
        message: 'Course not found'
      });
      return;
    }

    res.status(200).json({
      message: 'Course deleted successfully'
    });
    return;
  } catch (error) {
    next(error);
  }
});
