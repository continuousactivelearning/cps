import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";
import arraysQuiz from "../../data/java/advanced/Arrays";
import linkedListsQuiz from "../../data/java/advanced/LinkedLists";
import matricesQuiz from "../../data/java/advanced/Matrices";
import queuesQuiz from "../../data/java/advanced/Queues";
import recursionQuiz from "../../data/java/advanced/Recursion";
import stacksQuiz from "../../data/java/advanced/Stacks";
import stringsQuiz from "../../data/java/advanced/Strings";

const seedJavaAdvancedQuizzes = async () => {
    try {
        // Get all required courses
        const courses = await Course.find({
            courseName: {
                $in: ['Arrays', 'LinkedLists', 'Matrices', 'Queues',
                    'Recursion', 'Stacks', 'Strings']
            }
        });

        const courseMap = courses.reduce((map, course) => {
            map[course.courseName] = course;
            return map;
        }, {} as { [key: string]: any });

        // Map of quiz data to their corresponding course titles
        const quizzesByCourse = {
            'Arrays': arraysQuiz,
            'LinkedLists': linkedListsQuiz,
            'Matrices': matricesQuiz,
            'Queues': queuesQuiz,
            'Recursion': recursionQuiz,
            'Stacks': stacksQuiz,
            'Strings': stringsQuiz
        };

        // Seed all advanced quizzes
        for (const [courseTitle, quizData] of Object.entries(quizzesByCourse)) {
            const course = courseMap[courseTitle];
            if (!course) {
                console.error(`Could not find the '${courseTitle}' course. Skipping quiz insertion.`);
                continue;
            }

            // Create a new quiz object to avoid modifying the original data
            const newQuiz = {
                title: quizData.title,
                quizLevel: quizData.quizLevel,
                lang: quizData.lang,
                description: quizData.description,
                topic: {
                    courseID: course._id,
                    courseName: course.courseName
                },
                questions: quizData.questions,
                quizScore: quizData.quizScore
            };

            await Quiz.create(newQuiz);
            console.log(`Inserted advanced quiz for: ${courseTitle}`);
        }

        console.log("Java advanced quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding Java advanced quizzes:", error);
        throw error;
    }
};

export default seedJavaAdvancedQuizzes;