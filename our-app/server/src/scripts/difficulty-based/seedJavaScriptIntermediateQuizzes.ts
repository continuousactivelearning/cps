import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";

// Import all intermediate quiz data
import arraysQuiz from "../../data/javascript/intermediate/Arrays";
import linkedListsQuiz from "../../data/javascript/intermediate/LinkedLists";
import matricesQuiz from "../../data/javascript/intermediate/Matrices";
import queuesQuiz from "../../data/javascript/intermediate/Queues";
import recursionQuiz from "../../data/javascript/intermediate/Recursion";
import stacksQuiz from "../../data/javascript/intermediate/Stacks";
import stringsQuiz from "../../data/javascript/intermediate/Strings";
import complexityAnalysisQuiz from "../../data/javascript/intermediate/ComplexityAnalysis";
import pointersQuiz from "../../data/javascript/intermediate/Pointers";
import hashTablesQuiz from "../../data/javascript/intermediate/HashTables";
import treesQuiz from "../../data/javascript/intermediate/Trees";
import binaryTreesQuiz from "../../data/javascript/intermediate/BinaryTrees";
import binarySearchTreesQuiz from "../../data/javascript/intermediate/BinarySearchTrees";
import heapsQuiz from "../../data/javascript/intermediate/Heaps";
import graphsQuiz from "../../data/javascript/intermediate/Graphs";
import sortingAlgorithmsQuiz from "../../data/javascript/intermediate/SortingAlgorithms";
import searchingAlgorithmsQuiz from "../../data/javascript/intermediate/SearchingAlgorithms";
import bfsQuiz from "../../data/javascript/intermediate/BFS";
import dfsQuiz from "../../data/javascript/intermediate/DFS";
import divideAndConquerQuiz from "../../data/javascript/intermediate/DivideAndConquer";
import greedyAlgorithmsQuiz from "../../data/javascript/intermediate/GreedyAlgorithms";
import binarySearchQuiz from "../../data/javascript/intermediate/BinarySearch";
import twoPointersQuiz from "../../data/javascript/intermediate/TwoPointers";
import slidingWindowQuiz from "../../data/javascript/intermediate/SlidingWindow";
import binaryOperationsQuiz from "../../data/javascript/intermediate/BinaryOperations";
import backtrackingQuiz from "../../data/javascript/intermediate/Backtracking";
import dynamicProgrammingQuiz from "../../data/javascript/intermediate/DynamicProgramming";
import dijkstrasAlgorithmQuiz from "../../data/javascript/intermediate/DijkstrasAlgorithm";
import bellmanFordAlgorithmQuiz from "../../data/javascript/intermediate/BellmanFordAlgorithm";
import floydWarshallAlgorithmQuiz from "../../data/javascript/intermediate/FloydWarshallAlgorithm";
import primsAlgorithmQuiz from "../../data/javascript/intermediate/PrimsAlgorithm";
import kruskalsAlgorithmQuiz from "../../data/javascript/intermediate/KruskalsAlgorithm";
import topologicalSortQuiz from "../../data/javascript/intermediate/TopologicalSort";
import avlTreesQuiz from "../../data/javascript/intermediate/AVLTrees";
import redBlackTreesQuiz from "../../data/javascript/intermediate/RedBlackTrees";
import bTreesQuiz from "../../data/javascript/intermediate/BTrees";
import triesQuiz from "../../data/javascript/intermediate/Tries";
import segmentTreesQuiz from "../../data/javascript/intermediate/SegmentTrees";
import fenwickTreesQuiz from "../../data/javascript/intermediate/FenwickTrees";
import disjointSetUnionQuiz from "../../data/javascript/intermediate/DisjointSetUnion";
import suffixArraysTreesQuiz from "../../data/javascript/intermediate/SuffixArraysTrees";

const seedJavaScriptIntermediateQuizzes = async () => {
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
            console.log(`Inserted JavaScript intermediate quiz for: ${courseTitle}`);
        }

        console.log("JavaScript intermediate quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding JavaScript intermediate quizzes:", error);
        throw error;
    }
};

export default seedJavaScriptIntermediateQuizzes; 