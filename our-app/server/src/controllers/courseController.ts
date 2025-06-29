import Course from '../models/Course';
import type { Request, Response } from 'express';
import { coursesData } from '../data/coursesData';
import type { CourseDocument } from '../interfaces/Document_Interfaces';

const validDSATopics = coursesData.map(c => c.courseName);

export const getAllCourses = async (req: Request, res: Response) => {
    try {
        // console.log('Fetching all courses...');
        // console.log('MongoDB connection state:', mongoose.connection.readyState);
        // console.log('Connected to database:', mongoose.connection.name);

        const courses = await Course.find();
        // console.log('Courses found:', courses.length);
        // console.log('First course:', courses[0]);

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
        console.log('Creating course with data:', req.body);
        // console.log('Valid DSA topics:', validDSATopics);
        // console.log('Valid DSA topics length:', validDSATopics.length);
        if (!validDSATopics.includes(req.body.courseName)) {
            return res.status(400).json({ error: 'Invalid courseName. Must be a valid DSA topic.' });
        }
        const course = new Course(req.body);
        await course.save();
        res.status(201).json(course);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create course', details: err });
    }
};

export const updateCourse = async (req: Request, res: Response) => {
    try {
        if (req.body.courseName && !validDSATopics.includes(req.body.courseName)) {
            return res.status(400).json({ error: 'Invalid courseName. Must be a valid DSA topic.' });
        }
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

// METHODS FOR ADVANCED QUERYING

export const getCoursesByCourseName = async (req: Request, res: Response) => {
    try {
        const { courseName } = req.params;
        const courses = await Course.find({
            courseName: { $regex: courseName, $options: 'i' }
        });
        res.json({
            searchTerm: courseName,
            count: courses.length,
            courses
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses by courseName', details: err });
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

export const getCoursesByCourseNameAndLevel = async (req: Request, res: Response) => {
    try {
        const { courseName, level } = req.params;
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        const courses = await Course.find({
            courseName: { $regex: courseName, $options: 'i' },
            level
        });
        res.json({
            searchTerm: courseName,
            level,
            count: courses.length,
            courses
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses by courseName and level', details: err });
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

export const getCoursesByCourseNameLevelAndPrerequisite = async (req: Request, res: Response) => {
    try {
        const { courseName, level, prerequisite } = req.params;
        const validLevels = ['beginner', 'intermediate', 'advanced'];

        if (!validLevels.includes(level)) {
            return res.status(400).json({
                error: 'Invalid level',
                validLevels
            });
        }

        const courses = await Course.find({
            courseName: { $regex: courseName, $options: 'i' },
            level,
            prerequisites: { $regex: prerequisite, $options: 'i' }
        });
        res.json({
            searchTerm: courseName,
            level,
            prerequisite,
            count: courses.length,
            courses
        });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch courses by courseName, level and prerequisite', details: err });
    }
};

export const searchCourses = async (req: Request, res: Response) => {
    try {
        const { q, level, prerequisite, limit = 20, page = 1 } = req.query;
        const query: any = {};

        if (level) query.level = level;
        if (prerequisite) query.prerequisites = { $regex: prerequisite as string, $options: 'i' };

        // Improved text search logic
        if (q) {
            // Try multiple search approaches
            const searchTerm = q as string;

            // First, try exact courseName match
            const exactMatch = await Course.find({ courseName: { $regex: searchTerm, $options: 'i' } });

            // Then try text search
            const textSearch = await Course.find({ $text: { $search: searchTerm } });

            // Also try description search
            const descriptionSearch = await Course.find({ description: { $regex: searchTerm, $options: 'i' } });

            // Combine all results and remove duplicates
            const allResults = [...exactMatch, ...textSearch, ...descriptionSearch];
            const uniqueResults = allResults.filter((course, index, self) =>
                index === self.findIndex(c => (c as any)._id.toString() === (course as any)._id.toString())
            );

            // Apply additional filters if specified
            let filteredResults = uniqueResults;
            if (level) {
                filteredResults = filteredResults.filter(course => course.level === level);
            }
            if (prerequisite) {
                filteredResults = filteredResults.filter(course =>
                    course.prerequisites.some(p =>
                        p.toLowerCase().includes((prerequisite as string).toLowerCase())
                    )
                );
            }

            const skip = (parseInt(page as string) - 1) * parseInt(limit as string);
            const paginatedResults = filteredResults.slice(skip, skip + parseInt(limit as string));

            console.log("Search debug:", {
                searchTerm,
                exactMatchCount: exactMatch.length,
                textSearchCount: textSearch.length,
                descriptionSearchCount: descriptionSearch.length,
                totalUniqueResults: uniqueResults.length,
                finalResults: paginatedResults.length
            });

            res.json({
                courses: paginatedResults,
                pagination: {
                    page: parseInt(page as string),
                    limit: parseInt(limit as string),
                    total: filteredResults.length,
                    pages: Math.ceil(filteredResults.length / parseInt(limit as string))
                },
                searchInfo: {
                    searchTerm,
                    exactMatchCount: exactMatch.length,
                    textSearchCount: textSearch.length,
                    descriptionSearchCount: descriptionSearch.length
                }
            });
        } else {
            // No search term, just apply filters
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
        }
    } catch (err) {
        console.error('Search error:', err);
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

export const debugCourses = async (req: Request, res: Response) => {
    try {
        // Get all courses
        const allCourses = await Course.find().sort({ courseName: 1 }) as CourseDocument[];

        // Check for specific course
        const arraysCourse = await Course.findOne({ courseName: "Arrays" }) as CourseDocument | null;

        // Test text search directly
        const textSearchResults = await Course.find({ $text: { $search: "Arrays" } }) as CourseDocument[];

        // Test regex search
        const regexSearchResults = await Course.find({ courseName: { $regex: "Arrays", $options: 'i' } }) as CourseDocument[];

        res.json({
            totalCourses: allCourses.length,
            courseNames: allCourses.map(c => c.courseName),
            arraysCourse: arraysCourse,
            textSearchResults: textSearchResults.map(c => ({ id: (c as any)._id.toString(), courseName: c.courseName })),
            regexSearchResults: regexSearchResults.map(c => ({ id: (c as any)._id.toString(), courseName: c.courseName })),
            sampleCourses: allCourses.slice(0, 5).map(c => ({ id: (c as any)._id.toString(), courseName: c.courseName, level: c.level }))
        });
    } catch (err) {
        console.error('Debug error:', err);
        res.status(500).json({ error: 'Failed to debug courses', details: err });
    }
}; 