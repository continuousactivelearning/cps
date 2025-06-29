import express, { RequestHandler } from 'express';
import {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
    getCoursesByCourseName,
    getCoursesByLevel,
    getCoursesByPrerequisite,
    getCoursesByCourseNameAndLevel,
    getCoursesByLevelAndPrerequisite,
    getCoursesByCourseNameLevelAndPrerequisite,
    searchCourses,
    getCoursesByDifficultyRange,
    debugCourses
} from '../controllers/courseController';

const router = express.Router();

// GET /api/courses
router.get('/', getAllCourses as RequestHandler);

// GET /api/courses/debug - Debug endpoint to check database state
// router.get('/debug', debugCourses as RequestHandler);

// GET /api/courses/search - Advanced search with query parameters
router.get('/search', searchCourses as RequestHandler);

// GET /api/courses/difficulty-range - Get courses by difficulty range
router.get('/difficulty-range', getCoursesByDifficultyRange as RequestHandler);

// GET /api/courses/courseName/:courseName
router.get('/courseName/:courseName', getCoursesByCourseName as RequestHandler);

// GET /api/courses/level/:level
router.get('/level/:level', getCoursesByLevel as RequestHandler);

// GET /api/courses/prerequisite/:prerequisite
router.get('/prerequisite/:prerequisite', getCoursesByPrerequisite as RequestHandler);

// GET /api/courses/courseName/:courseName/level/:level
router.get('/courseName/:courseName/level/:level', getCoursesByCourseNameAndLevel as RequestHandler);

// GET /api/courses/level/:level/prerequisite/:prerequisite
router.get('/level/:level/prerequisite/:prerequisite', getCoursesByLevelAndPrerequisite as RequestHandler);

// GET /api/courses/courseName/:courseName/level/:level/prerequisite/:prerequisite
router.get('/courseName/:courseName/level/:level/prerequisite/:prerequisite', getCoursesByCourseNameLevelAndPrerequisite as RequestHandler);

// GET /api/courses/:id
router.get('/:id', getCourseById as RequestHandler);

// POST /api/courses
router.post('/', createCourse as RequestHandler);

// PUT /api/courses/:id
router.put('/:id', updateCourse as RequestHandler);

// DELETE /api/courses/:id
router.delete('/:id', deleteCourse as RequestHandler);

export default router;