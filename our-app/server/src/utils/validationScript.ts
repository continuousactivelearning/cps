import { coursesData } from '../data/coursesData';

interface ValidationResult {
    isValid: boolean;
    errors: string[];
    warnings: string[];
}

export function validateCoursePrerequisites(): ValidationResult {
    const result: ValidationResult = {
        isValid: true,
        errors: [],
        warnings: []
    };

    // Get all course titles for validation
    const courseTitles = coursesData.map(course => course.title);

    // Validate each course's prerequisites
    coursesData.forEach(course => {
        course.prerequisites.forEach(prerequisite => {
            if (!courseTitles.includes(prerequisite)) {
                result.isValid = false;
                result.errors.push(
                    `Course "${course.title}" has prerequisite "${prerequisite}" that does not exist in the course list`
                );
            }
        });
    });

    // Check for circular dependencies
    const circularDeps = findCircularDependencies();
    if (circularDeps.length > 0) {
        result.isValid = false;
        result.errors.push(
            `Circular dependencies detected: ${circularDeps.join(', ')}`
        );
    }

    // Check for courses with no prerequisites that could be prerequisites for others
    const coursesWithNoPrereqs = coursesData.filter(course => course.prerequisites.length === 0);
    const allPrereqs = new Set(coursesData.flatMap(course => course.prerequisites));

    coursesWithNoPrereqs.forEach(course => {
        if (!allPrereqs.has(course.title)) {
            result.warnings.push(
                `Course "${course.title}" has no prerequisites and is not used as a prerequisite for any other course`
            );
        }
    });

    return result;
}

function findCircularDependencies(): string[] {
    const visited = new Set<string>();
    const recursionStack = new Set<string>();
    const circularDeps: string[] = [];

    function dfs(courseTitle: string, path: string[] = []): boolean {
        if (recursionStack.has(courseTitle)) {
            const cycle = [...path.slice(path.indexOf(courseTitle)), courseTitle];
            circularDeps.push(cycle.join(' -> '));
            return true;
        }

        if (visited.has(courseTitle)) {
            return false;
        }

        visited.add(courseTitle);
        recursionStack.add(courseTitle);

        const course = coursesData.find(c => c.title === courseTitle);
        if (course) {
            for (const prereq of course.prerequisites) {
                dfs(prereq, [...path, courseTitle]);
            }
        }

        recursionStack.delete(courseTitle);
        return false;
    }

    coursesData.forEach(course => {
        if (!visited.has(course.title)) {
            dfs(course.title);
        }
    });

    return circularDeps;
}

export function validateCourseLevels(): ValidationResult {
    const result: ValidationResult = {
        isValid: true,
        errors: [],
        warnings: []
    };

    // Check if prerequisites have appropriate levels
    coursesData.forEach(course => {
        course.prerequisites.forEach(prerequisite => {
            const prereqCourse = coursesData.find(c => c.title === prerequisite);
            if (prereqCourse) {
                const levelOrder = { 'beginner': 1, 'intermediate': 2, 'advanced': 3 };
                const courseLevel = levelOrder[course.level as keyof typeof levelOrder];
                const prereqLevel = levelOrder[prereqCourse.level as keyof typeof levelOrder];

                if (prereqLevel > courseLevel) {
                    result.warnings.push(
                        `Course "${course.title}" (${course.level}) has prerequisite "${prerequisite}" (${prereqCourse.level}) with higher difficulty level`
                    );
                }
            }
        });
    });

    return result;
}

// Main validation function
export function validateAllCourseData(): void {
    console.log('🔍 Validating course data...\n');

    const prereqValidation = validateCoursePrerequisites();
    const levelValidation = validateCourseLevels();

    console.log('📋 Prerequisites Validation:');
    if (prereqValidation.isValid) {
        console.log('✅ All prerequisites are valid');
    } else {
        console.log('❌ Prerequisites validation failed:');
        prereqValidation.errors.forEach(error => console.log(`  - ${error}`));
    }

    if (prereqValidation.warnings.length > 0) {
        console.log('⚠️  Warnings:');
        prereqValidation.warnings.forEach(warning => console.log(`  - ${warning}`));
    }

    console.log('\n📊 Level Validation:');
    if (levelValidation.isValid) {
        console.log('✅ All course levels are appropriate');
    } else {
        console.log('❌ Level validation failed:');
        levelValidation.errors.forEach(error => console.log(`  - ${error}`));
    }

    if (levelValidation.warnings.length > 0) {
        console.log('⚠️  Warnings:');
        levelValidation.warnings.forEach(warning => console.log(`  - ${warning}`));
    }

    console.log('\n📈 Summary:');
    console.log(`Total courses: ${coursesData.length}`);
    console.log(`Beginner courses: ${coursesData.filter(c => c.level === 'beginner').length}`);
    console.log(`Intermediate courses: ${coursesData.filter(c => c.level === 'intermediate').length}`);
    console.log(`Advanced courses: ${coursesData.filter(c => c.level === 'advanced').length}`);

    const totalPrereqs = coursesData.reduce((sum, course) => sum + course.prerequisites.length, 0);
    console.log(`Total prerequisites: ${totalPrereqs}`);
    console.log(`Average prerequisites per course: ${(totalPrereqs / coursesData.length).toFixed(2)}`);
}

// Export for use in other files
export { coursesData }; 