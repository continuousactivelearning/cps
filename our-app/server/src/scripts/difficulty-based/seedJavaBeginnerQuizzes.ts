import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";
// Import all beginner quiz data
import arraysQuiz from "../../data/java/beginner/Arrays";
import linkedListsQuiz from "../../data/java/beginner/LinkedLists";
import matricesQuiz from "../../data/java/beginner/Matrices";
import queuesQuiz from "../../data/java/beginner/Queues";
import recursionQuiz from "../../data/java/beginner/Recursion";
import stacksQuiz from "../../data/java/beginner/Stacks";
import stringsQuiz from "../../data/java/beginner/Strings";
import complexityAnalysisQuiz from "../../data/java/beginner/ComplexityAnalysis";
import pointersQuiz from "../../data/java/beginner/Pointers";
import hashTablesQuiz from "../../data/java/beginner/HashTables";
import treesQuiz from "../../data/java/beginner/Trees";
import binaryTreesQuiz from "../../data/java/beginner/BinaryTrees";
import binarySearchTreesQuiz from "../../data/java/beginner/BinarySearchTrees";
import heapsQuiz from "../../data/java/beginner/Heaps";
import graphsQuiz from "../../data/java/beginner/Graphs";
import sortingAlgorithmsQuiz from "../../data/java/beginner/SortingAlgorithms";
import searchingAlgorithmsQuiz from "../../data/java/beginner/SearchingAlgorithms";
import bfsQuiz from "../../data/java/beginner/BFS";
import dfsQuiz from "../../data/java/beginner/DFS";
import divideAndConquerQuiz from "../../data/java/beginner/DivideAndConquer";
import greedyAlgorithmsQuiz from "../../data/java/beginner/GreedyAlgorithms";
import binarySearchQuiz from "../../data/java/beginner/BinarySearch";
import twoPointersQuiz from "../../data/java/beginner/TwoPointers";
import slidingWindowQuiz from "../../data/java/beginner/SlidingWindow";
import binaryOperationsQuiz from "../../data/java/beginner/BinaryOperations";
import backtrackingQuiz from "../../data/java/beginner/Backtracking";
import dynamicProgrammingQuiz from "../../data/java/beginner/DynamicProgramming";
import dijkstrasAlgorithmQuiz from "../../data/java/beginner/DijkstrasAlgorithm";
import bellmanFordAlgorithmQuiz from "../../data/java/beginner/BellmanFordAlgorithm";
import floydWarshallAlgorithmQuiz from "../../data/java/beginner/FloydWarshallAlgorithm";
import primsAlgorithmQuiz from "../../data/java/beginner/PrimsAlgorithm";
import kruskalsAlgorithmQuiz from "../../data/java/beginner/KruskalsAlgorithm";
import topologicalSortQuiz from "../../data/java/beginner/TopologicalSort";
import avlTreesQuiz from "../../data/java/beginner/AVLTrees";
import redBlackTreesQuiz from "../../data/java/beginner/RedBlackTrees";
import bTreesQuiz from "../../data/java/beginner/BTrees";
import triesQuiz from "../../data/java/beginner/Tries";
import segmentTreesQuiz from "../../data/java/beginner/SegmentTrees";
import fenwickTreesQuiz from "../../data/java/beginner/FenwickTrees";
import disjointSetUnionQuiz from "../../data/java/beginner/DisjointSetUnion";
import suffixArraysTreesQuiz from "../../data/java/beginner/SuffixArraysTrees";

const seedJavaBeginnerQuizzes = async () => {
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
            console.log(`Inserted beginner quiz for: ${courseTitle}`);
        }

        console.log("Java beginner quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding Java beginner quizzes:", error);
        throw error;
    }
};

export default seedJavaBeginnerQuizzes; 