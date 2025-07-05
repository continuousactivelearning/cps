import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";

// Import all beginner quiz data
import arraysQuiz from "../../data/javascript/beginner/Arrays";
import linkedListsQuiz from "../../data/javascript/beginner/LinkedLists";
import matricesQuiz from "../../data/javascript/beginner/Matrices";
import queuesQuiz from "../../data/javascript/beginner/Queues";
import recursionQuiz from "../../data/javascript/beginner/Recursion";
import stacksQuiz from "../../data/javascript/beginner/Stacks";
import stringsQuiz from "../../data/javascript/beginner/Strings";
import complexityAnalysisQuiz from "../../data/javascript/beginner/ComplexityAnalysis";
import pointersQuiz from "../../data/javascript/beginner/Pointers";
import hashTablesQuiz from "../../data/javascript/beginner/HashTables";
import treesQuiz from "../../data/javascript/beginner/Trees";
import binaryTreesQuiz from "../../data/javascript/beginner/BinaryTrees";
import binarySearchTreesQuiz from "../../data/javascript/beginner/BinarySearchTrees";
import heapsQuiz from "../../data/javascript/beginner/Heaps";
import graphsQuiz from "../../data/javascript/beginner/Graphs";
import sortingAlgorithmsQuiz from "../../data/javascript/beginner/SortingAlgorithms";
import searchingAlgorithmsQuiz from "../../data/javascript/beginner/SearchingAlgorithms";
import bfsQuiz from "../../data/javascript/beginner/BFS";
import dfsQuiz from "../../data/javascript/beginner/DFS";
import divideAndConquerQuiz from "../../data/javascript/beginner/DivideAndConquer";
import greedyAlgorithmsQuiz from "../../data/javascript/beginner/GreedyAlgorithms";
import binarySearchQuiz from "../../data/javascript/beginner/BinarySearch";
import twoPointersQuiz from "../../data/javascript/beginner/TwoPointers";
import slidingWindowQuiz from "../../data/javascript/beginner/SlidingWindow";
import binaryOperationsQuiz from "../../data/javascript/beginner/BinaryOperations";
import backtrackingQuiz from "../../data/javascript/beginner/Backtracking";
import dynamicProgrammingQuiz from "../../data/javascript/beginner/DynamicProgramming";
import dijkstrasAlgorithmQuiz from "../../data/javascript/beginner/DijkstrasAlgorithm";
import bellmanFordAlgorithmQuiz from "../../data/javascript/beginner/BellmanFordAlgorithm";
import floydWarshallAlgorithmQuiz from "../../data/javascript/beginner/FloydWarshallAlgorithm";
import primsAlgorithmQuiz from "../../data/javascript/beginner/PrimsAlgorithm";
import kruskalsAlgorithmQuiz from "../../data/javascript/beginner/KruskalsAlgorithm";
import topologicalSortQuiz from "../../data/javascript/beginner/TopologicalSort";
import avlTreesQuiz from "../../data/javascript/beginner/AVLTrees";
import redBlackTreesQuiz from "../../data/javascript/beginner/RedBlackTrees";
import bTreesQuiz from "../../data/javascript/beginner/BTrees";
import triesQuiz from "../../data/javascript/beginner/Tries";
import segmentTreesQuiz from "../../data/javascript/beginner/SegmentTrees";
import fenwickTreesQuiz from "../../data/javascript/beginner/FenwickTrees";
import disjointSetUnionQuiz from "../../data/javascript/beginner/DisjointSetUnion";
import suffixArraysTreesQuiz from "../../data/javascript/beginner/SuffixArraysTrees";

const seedJavaScriptBeginnerQuizzes = async () => {
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
            console.log(`Inserted JavaScript beginner quiz for: ${courseTitle}`);
        }

        console.log("JavaScript beginner quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding JavaScript beginner quizzes:", error);
        throw error;
    }
};

export default seedJavaScriptBeginnerQuizzes; 