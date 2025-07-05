import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";

// Import all beginner quiz data
import arraysQuiz from "../../data/cpp/beginner/Arrays";
import linkedListsQuiz from "../../data/cpp/beginner/LinkedLists";
import matricesQuiz from "../../data/cpp/beginner/Matrices";
import queuesQuiz from "../../data/cpp/beginner/Queues";
import recursionQuiz from "../../data/cpp/beginner/Recursion";
import stacksQuiz from "../../data/cpp/beginner/Stacks";
import stringsQuiz from "../../data/cpp/beginner/Strings";
import complexityAnalysisQuiz from "../../data/cpp/beginner/ComplexityAnalysis";
import pointersQuiz from "../../data/cpp/beginner/Pointers";

const seedCppBeginnerQuizzes = async () => {
    try {
        // Get all required courses
        const courses = await Course.find({
            courseName: {
                $in: ['Arrays', 'LinkedLists', 'Matrices', 'Queues',
                    'Recursion', 'Stacks', 'Strings', 'ComplexityAnalysis', 'Pointers']
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
            'Strings': stringsQuiz,
            'ComplexityAnalysis': complexityAnalysisQuiz,
            'Pointers': pointersQuiz
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
            console.log(`Inserted C++ beginner quiz for: ${courseTitle}`);
        }

        console.log("C++ beginner quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding C++ beginner quizzes:", error);
        throw error;
    }
};

export default seedCppBeginnerQuizzes; 