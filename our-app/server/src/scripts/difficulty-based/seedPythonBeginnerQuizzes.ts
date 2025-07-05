import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";

// Import all beginner quiz data
import arraysQuiz from "../../data/python/beginner/Arrays";
import linkedListsQuiz from "../../data/python/beginner/LinkedLists";
import matricesQuiz from "../../data/python/beginner/Matrices";
import queuesQuiz from "../../data/python/beginner/Queues";
import recursionQuiz from "../../data/python/beginner/Recursion";
import stacksQuiz from "../../data/python/beginner/Stacks";
import stringsQuiz from "../../data/python/beginner/Strings";
import complexityAnalysisQuiz from "../../data/python/beginner/ComplexityAnalysis";
import pointersQuiz from "../../data/python/beginner/Pointers";
import hashTablesQuiz from "../../data/python/beginner/HashTables";
import treesQuiz from "../../data/python/beginner/Trees";
import binaryTreesQuiz from "../../data/python/beginner/BinaryTrees";
import binarySearchTreesQuiz from "../../data/python/beginner/BinarySearchTrees";
import heapsQuiz from "../../data/python/beginner/Heaps";
import graphsQuiz from "../../data/python/beginner/Graphs";
import sortingAlgorithmsQuiz from "../../data/python/beginner/SortingAlgorithms";
import searchingAlgorithmsQuiz from "../../data/python/beginner/SearchingAlgorithms";
import bfsQuiz from "../../data/python/beginner/BFS";
import dfsQuiz from "../../data/python/beginner/DFS";
import divideAndConquerQuiz from "../../data/python/beginner/DivideAndConquer";
import greedyAlgorithmsQuiz from "../../data/python/beginner/GreedyAlgorithms";
import binarySearchQuiz from "../../data/python/beginner/BinarySearch";
import twoPointersQuiz from "../../data/python/beginner/TwoPointers";
import slidingWindowQuiz from "../../data/python/beginner/SlidingWindow";
import binaryOperationsQuiz from "../../data/python/beginner/BinaryOperations";
import backtrackingQuiz from "../../data/python/beginner/Backtracking";
import dynamicProgrammingQuiz from "../../data/python/beginner/DynamicProgramming";
import dijkstrasAlgorithmQuiz from "../../data/python/beginner/DijkstrasAlgorithm";
import bellmanFordAlgorithmQuiz from "../../data/python/beginner/BellmanFordAlgorithm";
import floydWarshallAlgorithmQuiz from "../../data/python/beginner/FloydWarshallAlgorithm";
import primsAlgorithmQuiz from "../../data/python/beginner/PrimsAlgorithm";
import kruskalsAlgorithmQuiz from "../../data/python/beginner/KruskalsAlgorithm";
import topologicalSortQuiz from "../../data/python/beginner/TopologicalSort";
import avlTreesQuiz from "../../data/python/beginner/AVLTrees";
import redBlackTreesQuiz from "../../data/python/beginner/RedBlackTrees";
import bTreesQuiz from "../../data/python/beginner/BTrees";
import triesQuiz from "../../data/python/beginner/Tries";
import segmentTreesQuiz from "../../data/python/beginner/SegmentTrees";
import fenwickTreesQuiz from "../../data/python/beginner/FenwickTrees";
import disjointSetUnionQuiz from "../../data/python/beginner/DisjointSetUnion";
import suffixArraysTreesQuiz from "../../data/python/beginner/SuffixArraysTrees";

const seedPythonBeginnerQuizzes = async () => {
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
            console.log(`Inserted Python beginner quiz for: ${courseTitle}`);
        }

        console.log("Python beginner quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding Python beginner quizzes:", error);
        throw error;
    }
};

export default seedPythonBeginnerQuizzes; 