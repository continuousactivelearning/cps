import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";

// Import all advanced quiz data
import arraysQuiz from "../../data/python/advanced/Arrays";
import linkedListsQuiz from "../../data/python/advanced/LinkedLists";
import matricesQuiz from "../../data/python/advanced/Matrices";
import queuesQuiz from "../../data/python/advanced/Queues";
import recursionQuiz from "../../data/python/advanced/Recursion";
import stacksQuiz from "../../data/python/advanced/Stacks";
import stringsQuiz from "../../data/python/advanced/Strings";
import complexityAnalysisQuiz from "../../data/python/advanced/ComplexityAnalysis";
import pointersQuiz from "../../data/python/advanced/Pointers";
import hashTablesQuiz from "../../data/python/advanced/HashTables";
import treesQuiz from "../../data/python/advanced/Trees";
import binaryTreesQuiz from "../../data/python/advanced/BinaryTrees";
import binarySearchTreesQuiz from "../../data/python/advanced/BinarySearchTrees";
import heapsQuiz from "../../data/python/advanced/Heaps";
import graphsQuiz from "../../data/python/advanced/Graphs";
import sortingAlgorithmsQuiz from "../../data/python/advanced/SortingAlgorithms";
import searchingAlgorithmsQuiz from "../../data/python/advanced/SearchingAlgorithms";
import bfsQuiz from "../../data/python/advanced/BFS";
import dfsQuiz from "../../data/python/advanced/DFS";
import divideAndConquerQuiz from "../../data/python/advanced/DivideAndConquer";
import greedyAlgorithmsQuiz from "../../data/python/advanced/GreedyAlgorithms";
import binarySearchQuiz from "../../data/python/advanced/BinarySearch";
import twoPointersQuiz from "../../data/python/advanced/TwoPointers";
// import slidingWindowQuiz from "../../data/python/advanced/SlidingWindow";
import binaryOperationsQuiz from "../../data/python/advanced/BinaryOperations";
import backtrackingQuiz from "../../data/python/advanced/Backtracking";
import dynamicProgrammingQuiz from "../../data/python/advanced/DynamicProgramming";
import dijkstrasAlgorithmQuiz from "../../data/python/advanced/DijkstrasAlgorithm";
import bellmanFordAlgorithmQuiz from "../../data/python/advanced/BellmanFordAlgorithm";
import floydWarshallAlgorithmQuiz from "../../data/python/advanced/FloydWarshallAlgorithm";
import primsAlgorithmQuiz from "../../data/python/advanced/PrimsAlgorithm";
import kruskalsAlgorithmQuiz from "../../data/python/advanced/KruskalsAlgorithm";
import topologicalSortQuiz from "../../data/python/advanced/TopologicalSort";
import avlTreesQuiz from "../../data/python/advanced/AVLTrees";
import redBlackTreesQuiz from "../../data/python/advanced/RedBlackTrees";
import bTreesQuiz from "../../data/python/advanced/BTrees";
import triesQuiz from "../../data/python/advanced/Tries";
import segmentTreesQuiz from "../../data/python/advanced/SegmentTrees";
import fenwickTreesQuiz from "../../data/python/advanced/FenwickTrees";
import disjointSetUnionQuiz from "../../data/python/advanced/DisjointSetUnion";
import suffixArraysTreesQuiz from "../../data/python/advanced/SuffixArraysTrees";

const seedPythonAdvancedQuizzes = async () => {
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
            // 'SlidingWindow': slidingWindowQuiz,
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
            console.log(`Inserted Python advanced quiz for: ${courseTitle}`);
        }

        console.log("Python advanced quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding Python advanced quizzes:", error);
        throw error;
    }
};

export default seedPythonAdvancedQuizzes; 