import express, { RequestHandler } from 'express';
import {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
    getCoursesByTitle,
    getCoursesByLevel,
    getCoursesByPrerequisite,
    getCoursesByTitleAndLevel,
    getCoursesByLevelAndPrerequisite,
    getCoursesByTitleLevelAndPrerequisite,
    searchCourses,
    getCoursesByDifficultyRange
} from '../controllers/courseController';

const router = express.Router();

// GET /api/courses
router.get('/', getAllCourses as RequestHandler);

// GET /api/courses/search - Advanced search with query parameters
router.get('/search', searchCourses as RequestHandler);

// GET /api/courses/difficulty-range - Get courses by difficulty range
router.get('/difficulty-range', getCoursesByDifficultyRange as RequestHandler);

// GET /api/courses/title/:title
router.get('/title/:title', getCoursesByTitle as RequestHandler);

// GET /api/courses/level/:level
router.get('/level/:level', getCoursesByLevel as RequestHandler);

// GET /api/courses/prerequisite/:prerequisite
router.get('/prerequisite/:prerequisite', getCoursesByPrerequisite as RequestHandler);

// GET /api/courses/title/:title/level/:level
router.get('/title/:title/level/:level', getCoursesByTitleAndLevel as RequestHandler);

// GET /api/courses/level/:level/prerequisite/:prerequisite
router.get('/level/:level/prerequisite/:prerequisite', getCoursesByLevelAndPrerequisite as RequestHandler);

// GET /api/courses/title/:title/level/:level/prerequisite/:prerequisite
router.get('/title/:title/level/:level/prerequisite/:prerequisite', getCoursesByTitleLevelAndPrerequisite as RequestHandler);

// GET /api/courses/:id
router.get('/:id', getCourseById as RequestHandler);

// POST /api/courses
router.post('/', createCourse as RequestHandler);

// PUT /api/courses/:id
router.put('/:id', updateCourse as RequestHandler);

// DELETE /api/courses/:id
router.delete('/:id', deleteCourse as RequestHandler);

export default router;