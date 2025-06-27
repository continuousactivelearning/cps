import Course from '../models/Course';
import { Request, Response } from 'express';
import mongoose from 'mongoose';

export const getAllCourses = async (req: Request, res: Response) => {
    try {
        console.log('Fetching all courses...');
        console.log('MongoDB connection state:', mongoose.connection.readyState);
        console.log('Connected to database:', mongoose.connection.name);

        const courses = await Course.find();
        console.log('Courses found:', courses.length);
        console.log('First course:', courses[0]);

        res.json(courses);
    } catch (err) {
        console.error('Error fetching courses:', err);
        res.status(500).json({ error: 'Failed to fetch courses', details: err });
    }
};

export const getCourseById = async (req: Request, res: Response) => {
    try {
        const course = await Course.findById(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.json(course);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch course', details: err });
    }
};

export const createCourse = async (req: Request, res: Response) => {
    try {
        const course = new Course(req.body);
        await course.save();
        res.status(201).json(course);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create course', details: err });
    }
};

export const updateCourse = async (req: Request, res: Response) => {
    try {
        const course = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.json(course);
    } catch (err) {
        res.status(400).json({ error: 'Failed to update course', details: err });
    }
};

export const deleteCourse = async (req: Request, res: Response) => {
    try {
        const course = await Course.findByIdAndDelete(req.params.id);
        if (!course) return res.status(404).json({ error: 'Course not found' });
        res.json({ message: 'Course deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete course', details: err });
    }
};

// NEW METHODS FOR ADVANCED QUERYING

export const getCoursesByTitle = async (req: Request, res: Response) => {
    try {
        const { title } = req.params;

        const courses = await Course.find({
            title: { $regex: title, $options: 'i' }
        });
        res.json({
            searchTerm: title,
            count: courses.length,
            courses
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses by title', details: err });
    }
};

export const getCoursesByLevel = async (req: Request, res: Response) => {
    try {
        const { level } = req.params;
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        const courses = await Course.find({ level });
        res.json({
            level,
            count: courses.length,
            courses
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses by level', details: err });
    }
};

export const getCoursesByPrerequisite = async (req: Request, res: Response) => {
    try {
        const { prerequisite } = req.params;

        const courses = await Course.find({
            prerequisites: { $regex: prerequisite, $options: 'i' }
        });
        res.json({
            prerequisite,
            count: courses.length,
            courses
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses by prerequisite', details: err });
    }
};

export const getCoursesByTitleAndLevel = async (req: Request, res: Response) => {
    try {
        const { title, level } = req.params;
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        const courses = await Course.find({
            title: { $regex: title, $options: 'i' },
            level
        });
        res.json({
            searchTerm: title,
            level,
            count: courses.length,
            courses
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses by title and level', details: err });
    }
};

export const getCoursesByLevelAndPrerequisite = async (req: Request, res: Response) => {
    try {
        const { level, prerequisite } = req.params;
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        const courses = await Course.find({
            level,
            prerequisites: { $regex: prerequisite, $options: 'i' }
        });
        res.json({
            level,
            prerequisite,
            count: courses.length,
            courses
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses by level and prerequisite', details: err });
    }
};

export const getCoursesByTitleLevelAndPrerequisite = async (req: Request, res: Response) => {
    try {
        const { title, level, prerequisite } = req.params;
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        const courses = await Course.find({
            title: { $regex: title, $options: 'i' },
            level,
            prerequisites: { $regex: prerequisite, $options: 'i' }
        });
        res.json({
            searchTerm: title,
            level,
            prerequisite,
            count: courses.length,
            courses
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses by title, level and prerequisite', details: err });
    }
};

export const searchCourses = async (req: Request, res: Response) => {
    try {
        const { q, level, prerequisite, limit = 20, page = 1 } = req.query;

        const query: any = {};

        if (level) query.level = level;
        if (prerequisite) query.prerequisites = { $regex: prerequisite as string, $options: 'i' };

        if (q) {
            query.$text = { $search: q as string };
        }

        const skip = (parseInt(page as string) - 1) * parseInt(limit as string);

        const courses = await Course.find(query)
            .limit(parseInt(limit as string))
            .skip(skip)
            .sort({ createdAt: -1 });

        const total = await Course.countDocuments(query);

        res.json({
            courses,
            pagination: {
                page: parseInt(page as string),
                limit: parseInt(limit as string),
                total,
                pages: Math.ceil(total / parseInt(limit as string))
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to search courses', details: err });
    }
};

export const getCoursesByDifficultyRange = async (req: Request, res: Response) => {
    try {
        const { minLevel, maxLevel } = req.query;
        const validLevels = ['beginner', 'intermediate', 'advanced'];
        const levelOrder = { beginner: 1, intermediate: 2, advanced: 3 };

        if (minLevel && !validLevels.includes(minLevel as string)) {
            return res.status(400).json({
                error: 'Invalid minLevel',
                validLevels
            });
        }

        if (maxLevel && !validLevels.includes(maxLevel as string)) {
            return res.status(400).json({
                error: 'Invalid maxLevel',
                validLevels
            });
        }

        let query: any = {};

        if (minLevel && maxLevel) {
            const minOrder = levelOrder[minLevel as keyof typeof levelOrder];
            const maxOrder = levelOrder[maxLevel as keyof typeof levelOrder];

            if (minOrder > maxOrder) {
                return res.status(400).json({
                    error: 'minLevel cannot be higher than maxLevel'
                });
            }

            const levelsInRange = validLevels.filter(level => {
                const order = levelOrder[level as keyof typeof levelOrder];
                return order >= minOrder && order <= maxOrder;
            });

            query.level = { $in: levelsInRange };
        } else if (minLevel) {
            const minOrder = levelOrder[minLevel as keyof typeof levelOrder];
            const levelsInRange = validLevels.filter(level => {
                const order = levelOrder[level as keyof typeof levelOrder];
                return order >= minOrder;
            });
            query.level = { $in: levelsInRange };
        } else if (maxLevel) {
            const maxOrder = levelOrder[maxLevel as keyof typeof levelOrder];
            const levelsInRange = validLevels.filter(level => {
                const order = levelOrder[level as keyof typeof levelOrder];
                return order <= maxOrder;
            });
            query.level = { $in: levelsInRange };
        }

        const courses = await Course.find(query).sort({ level: 1 });

        res.json({
            filter: { minLevel, maxLevel },
            count: courses.length,
            courses
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses by difficulty range', details: err });
    }
}; 