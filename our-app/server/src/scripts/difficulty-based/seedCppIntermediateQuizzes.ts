import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";

// Import all intermediate quiz data
import arraysQuiz from "../../data/cpp/intermediate/Arrays";
import linkedListsQuiz from "../../data/cpp/intermediate/LinkedLists";
import matricesQuiz from "../../data/cpp/intermediate/Matrices";
import queuesQuiz from "../../data/cpp/intermediate/Queues";
import recursionQuiz from "../../data/cpp/intermediate/Recursion";
import stacksQuiz from "../../data/cpp/intermediate/Stacks";
import stringsQuiz from "../../data/cpp/intermediate/Strings";
import complexityAnalysisQuiz from "../../data/cpp/intermediate/ComplexityAnalysis";
import pointersQuiz from "../../data/cpp/intermediate/Pointers";
import hashTablesQuiz from "../../data/cpp/intermediate/HashTables";
import treesQuiz from "../../data/cpp/intermediate/Trees";
import binaryTreesQuiz from "../../data/cpp/intermediate/BinaryTrees";
import binarySearchTreesQuiz from "../../data/cpp/intermediate/BinarySearchTrees";
import heapsQuiz from "../../data/cpp/intermediate/Heaps";
import graphsQuiz from "../../data/cpp/intermediate/Graphs";
import sortingAlgorithmsQuiz from "../../data/cpp/intermediate/SortingAlgorithms";
import searchingAlgorithmsQuiz from "../../data/cpp/intermediate/SearchingAlgorithms";
import bfsQuiz from "../../data/cpp/intermediate/BFS";
import dfsQuiz from "../../data/cpp/intermediate/DFS";
import divideAndConquerQuiz from "../../data/cpp/intermediate/DivideAndConquer";
import greedyAlgorithmsQuiz from "../../data/cpp/intermediate/GreedyAlgorithms";
import binarySearchQuiz from "../../data/cpp/intermediate/BinarySearch";
import twoPointersQuiz from "../../data/cpp/intermediate/TwoPointers";
import slidingWindowQuiz from "../../data/cpp/intermediate/SlidingWindow";
import binaryOperationsQuiz from "../../data/cpp/intermediate/BinaryOperations";

const seedCppIntermediateQuizzes = async () => {
    try {
        // Get all required courses
        const courses = await Course.find({
            courseName: {
                $in: [
                    'Arrays', 'LinkedLists', 'Matrices', 'Queues', 'Recursion', 'Stacks', 'Strings',
                    'ComplexityAnalysis', 'Pointers', 'HashTables', 'Trees', 'BinaryTrees',
                    'BinarySearchTrees', 'Heaps', 'Graphs', 'SortingAlgorithms', 'SearchingAlgorithms',
                    'BFS', 'DFS', 'DivideAndConquer', 'GreedyAlgorithms', 'BinarySearch',
                    'TwoPointers', 'SlidingWindow', 'BinaryOperations'
                ]
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
            'Pointers': pointersQuiz,
            'HashTables': hashTablesQuiz,
            'Trees': treesQuiz,
            'BinaryTrees': binaryTreesQuiz,
            'BinarySearchTrees': binarySearchTreesQuiz,
            'Heaps': heapsQuiz,
            'Graphs': graphsQuiz,
            'SortingAlgorithms': sortingAlgorithmsQuiz,
            'SearchingAlgorithms': searchingAlgorithmsQuiz,
            'BFS': bfsQuiz,
            'DFS': dfsQuiz,
            'DivideAndConquer': divideAndConquerQuiz,
            'GreedyAlgorithms': greedyAlgorithmsQuiz,
            'BinarySearch': binarySearchQuiz,
            'TwoPointers': twoPointersQuiz,
            'SlidingWindow': slidingWindowQuiz,
            'BinaryOperations': binaryOperationsQuiz
        };

        // Seed all intermediate quizzes
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
            console.log(`Inserted C++ intermediate quiz for: ${courseTitle}`);
        }

        console.log("C++ intermediate quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding C++ intermediate quizzes:", error);
        throw error;
    }
};

export default seedCppIntermediateQuizzes; 