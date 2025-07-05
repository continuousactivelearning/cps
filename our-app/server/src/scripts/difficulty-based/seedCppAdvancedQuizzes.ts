import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";

// Import all advanced quiz data
import arraysQuiz from "../../data/cpp/advanced/Arrays";
import linkedListsQuiz from "../../data/cpp/advanced/LinkedLists";
import matricesQuiz from "../../data/cpp/advanced/Matrices";
import queuesQuiz from "../../data/cpp/advanced/Queues";
import recursionQuiz from "../../data/cpp/advanced/Recursion";
import stacksQuiz from "../../data/cpp/advanced/Stacks";
import stringsQuiz from "../../data/cpp/advanced/Strings";
import complexityAnalysisQuiz from "../../data/cpp/advanced/ComplexityAnalysis";
import pointersQuiz from "../../data/cpp/advanced/Pointers";
import hashTablesQuiz from "../../data/cpp/advanced/HashTables";
import treesQuiz from "../../data/cpp/advanced/Trees";
import binaryTreesQuiz from "../../data/cpp/advanced/BinaryTrees";
import binarySearchTreesQuiz from "../../data/cpp/advanced/BinarySearchTrees";
import heapsQuiz from "../../data/cpp/advanced/Heaps";
import graphsQuiz from "../../data/cpp/advanced/Graphs";
import sortingAlgorithmsQuiz from "../../data/cpp/advanced/SortingAlgorithms";
import searchingAlgorithmsQuiz from "../../data/cpp/advanced/SearchingAlgorithms";
import bfsQuiz from "../../data/cpp/advanced/BFS";
import dfsQuiz from "../../data/cpp/advanced/DFS";
import divideAndConquerQuiz from "../../data/cpp/advanced/DivideAndConquer";
import greedyAlgorithmsQuiz from "../../data/cpp/advanced/GreedyAlgorithms";
import binarySearchQuiz from "../../data/cpp/advanced/BinarySearch";
import twoPointersQuiz from "../../data/cpp/advanced/TwoPointers";
import slidingWindowQuiz from "../../data/cpp/advanced/SlidingWindow";
import binaryOperationsQuiz from "../../data/cpp/advanced/BinaryOperations";
import backtrackingQuiz from "../../data/cpp/advanced/Backtracking";
import dynamicProgrammingQuiz from "../../data/cpp/advanced/DynamicProgramming";
import dijkstrasAlgorithmQuiz from "../../data/cpp/advanced/DijkstrasAlgorithm";
import bellmanFordAlgorithmQuiz from "../../data/cpp/advanced/BellmanFordAlgorithm";
import floydWarshallAlgorithmQuiz from "../../data/cpp/advanced/FloydWarshallAlgorithm";
import primsAlgorithmQuiz from "../../data/cpp/advanced/PrimsAlgorithm";
import kruskalsAlgorithmQuiz from "../../data/cpp/advanced/KruskalsAlgorithm";
import topologicalSortQuiz from "../../data/cpp/advanced/TopologicalSort";
import avlTreesQuiz from "../../data/cpp/advanced/AVLTrees";
import redBlackTreesQuiz from "../../data/cpp/advanced/RedBlackTrees";
import bTreesQuiz from "../../data/cpp/advanced/BTrees";
import triesQuiz from "../../data/cpp/advanced/Tries";
import segmentTreesQuiz from "../../data/cpp/advanced/SegmentTrees";
import fenwickTreesQuiz from "../../data/cpp/advanced/FenwickTrees";
import disjointSetUnionQuiz from "../../data/cpp/advanced/DisjointSetUnion";
import suffixArraysTreesQuiz from "../../data/cpp/advanced/SuffixArraysTrees";

const seedCppAdvancedQuizzes = async () => {
    try {
        // Get all required courses
        const courses = await Course.find({
            courseName: {
                $in: [
                    'Arrays', 'LinkedLists', 'Matrices', 'Queues', 'Recursion', 'Stacks', 'Strings',
                    'ComplexityAnalysis', 'Pointers', 'HashTables', 'Trees', 'BinaryTrees',
                    'BinarySearchTrees', 'Heaps', 'Graphs', 'SortingAlgorithms', 'SearchingAlgorithms',
                    'BFS', 'DFS', 'DivideAndConquer', 'GreedyAlgorithms', 'BinarySearch',
                    'TwoPointers', 'SlidingWindow', 'BinaryOperations', 'Backtracking',
                    'DynamicProgramming', 'DijkstrasAlgorithm', 'BellmanFordAlgorithm',
                    'FloydWarshallAlgorithm', 'PrimsAlgorithm', 'KruskalsAlgorithm',
                    'TopologicalSort', 'AVLTrees', 'RedBlackTrees', 'BTrees', 'Tries',
                    'SegmentTrees', 'FenwickTrees', 'DisjointSetUnion', 'SuffixArraysTrees'
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
            'BinaryOperations': binaryOperationsQuiz,
            'Backtracking': backtrackingQuiz,
            'DynamicProgramming': dynamicProgrammingQuiz,
            'DijkstrasAlgorithm': dijkstrasAlgorithmQuiz,
            'BellmanFordAlgorithm': bellmanFordAlgorithmQuiz,
            'FloydWarshallAlgorithm': floydWarshallAlgorithmQuiz,
            'PrimsAlgorithm': primsAlgorithmQuiz,
            'KruskalsAlgorithm': kruskalsAlgorithmQuiz,
            'TopologicalSort': topologicalSortQuiz,
            'AVLTrees': avlTreesQuiz,
            'RedBlackTrees': redBlackTreesQuiz,
            'BTrees': bTreesQuiz,
            'Tries': triesQuiz,
            'SegmentTrees': segmentTreesQuiz,
            'FenwickTrees': fenwickTreesQuiz,
            'DisjointSetUnion': disjointSetUnionQuiz,
            'SuffixArraysTrees': suffixArraysTreesQuiz
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

            await Quiz.insertMany([newQuiz]);
            console.log(`Inserted C++ advanced quiz for: ${courseTitle}`);
        }

        console.log("C++ advanced quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding C++ advanced quizzes:", error);
        throw error;
    }
};

export default seedCppAdvancedQuizzes; 