import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";

// Import all intermediate quiz data
import arraysQuiz from "../../data/python/intermediate/Arrays";
import linkedListsQuiz from "../../data/python/intermediate/LinkedLists";
import matricesQuiz from "../../data/python/intermediate/Matrices";
import queuesQuiz from "../../data/python/intermediate/Queues";
import recursionQuiz from "../../data/python/intermediate/Recursion";
import stacksQuiz from "../../data/python/intermediate/Stacks";
import stringsQuiz from "../../data/python/intermediate/Strings";
import complexityAnalysisQuiz from "../../data/python/intermediate/ComplexityAnalysis";
import pointersQuiz from "../../data/python/intermediate/Pointers";
import hashTablesQuiz from "../../data/python/intermediate/HashTables";
import treesQuiz from "../../data/python/intermediate/Trees";
import binaryTreesQuiz from "../../data/python/intermediate/BinaryTrees";
import binarySearchTreesQuiz from "../../data/python/intermediate/BinarySearchTrees";
import heapsQuiz from "../../data/python/intermediate/Heaps";
import graphsQuiz from "../../data/python/intermediate/Graphs";
import sortingAlgorithmsQuiz from "../../data/python/intermediate/SortingAlgorithms";
import searchingAlgorithmsQuiz from "../../data/python/intermediate/SearchingAlgorithms";
import bfsQuiz from "../../data/python/intermediate/BFS";
import dfsQuiz from "../../data/python/intermediate/DFS";
import divideAndConquerQuiz from "../../data/python/intermediate/DivideAndConquer";
import greedyAlgorithmsQuiz from "../../data/python/intermediate/GreedyAlgorithms";
import binarySearchQuiz from "../../data/python/intermediate/BinarySearch";
import twoPointersQuiz from "../../data/python/intermediate/TwoPointers";
import slidingWindowQuiz from "../../data/python/intermediate/SlidingWindow";
import binaryOperationsQuiz from "../../data/python/intermediate/BinaryOperations";
import backtrackingQuiz from "../../data/python/intermediate/Backtracking";
import dynamicProgrammingQuiz from "../../data/python/intermediate/DynamicProgramming";
import dijkstrasAlgorithmQuiz from "../../data/python/intermediate/DijkstrasAlgorithm";
import bellmanFordAlgorithmQuiz from "../../data/python/intermediate/BellmanFordAlgorithm";
import floydWarshallAlgorithmQuiz from "../../data/python/intermediate/FloydWarshallAlgorithm";
import primsAlgorithmQuiz from "../../data/python/intermediate/PrimsAlgorithm";
import kruskalsAlgorithmQuiz from "../../data/python/intermediate/KruskalsAlgorithm";
import topologicalSortQuiz from "../../data/python/intermediate/TopologicalSort";
import avlTreesQuiz from "../../data/python/intermediate/AVLTrees";
import redBlackTreesQuiz from "../../data/python/intermediate/RedBlackTrees";
import bTreesQuiz from "../../data/python/intermediate/BTrees";
import triesQuiz from "../../data/python/intermediate/Tries";
import segmentTreesQuiz from "../../data/python/intermediate/SegmentTrees";
import fenwickTreesQuiz from "../../data/python/intermediate/FenwickTrees";
import disjointSetUnionQuiz from "../../data/python/intermediate/DisjointSetUnion";
import suffixArraysTreesQuiz from "../../data/python/intermediate/SuffixArraysTrees";

const seedPythonIntermediateQuizzes = async () => {
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
            console.log(`Inserted Python intermediate quiz for: ${courseTitle}`);
        }

        console.log("Python intermediate quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding Python intermediate quizzes:", error);
        throw error;
    }
};

export default seedPythonIntermediateQuizzes; 