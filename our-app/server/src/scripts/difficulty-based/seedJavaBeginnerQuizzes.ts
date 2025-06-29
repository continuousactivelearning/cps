import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";
import arraysQuiz from "../../data/java/beginner/Arrays";
import linkedListsQuiz from "../../data/java/beginner/LinkedLists";
import matricesQuiz from "../../data/java/beginner/Matrices";
import queuesQuiz from "../../data/java/beginner/Queues";
import recursionQuiz from "../../data/java/beginner/Recursion";
import stacksQuiz from "../../data/java/beginner/Stacks";
import stringsQuiz from "../../data/java/beginner/Strings";

const seedJavaBeginnerQuizzes = async () => {
    try {
        // Get all required courses
        const courses = await Course.find({
            courseName: {
                $in: ['Arrays', 'Linked Lists', 'Matrices', 'Queues',
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
            'Linked Lists': linkedListsQuiz,
            'Matrices': matricesQuiz,
            'Queues': queuesQuiz,
            'Recursion': recursionQuiz,
            'Stacks': stacksQuiz,
            'Strings': stringsQuiz
        };

        // Seed all beginner quizzes
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

            await Quiz.insertMany([newQuiz]);
            console.log(`Inserted beginner quiz for: ${courseTitle}`);
        }

        console.log("Java beginner quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding Java beginner quizzes:", error);
        throw error;
    }
};

export default seedJavaBeginnerQuizzes; 