import Course from '../models/Course';
import { CourseDocument } from '../interfaces/Document_Interfaces';
import type { PrerequisiteGraph } from '../types/customTypes';

// Building Prerequisite Graph
export async function buildPrerequisiteGraph(): Promise<PrerequisiteGraph> {
    const courses: Pick<CourseDocument, 'courseName' | 'prerequisites'>[] = await Course.find().select('courseName prerequisites').lean();

    const graph: PrerequisiteGraph = {};

    for (const course of courses) {
        graph[course.courseName] = course.prerequisites || [];
    }

    return graph;
}