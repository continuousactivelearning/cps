import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";

// Import all advanced quiz data
import arraysQuiz from "../../data/javascript/advanced/Arrays";
import linkedListsQuiz from "../../data/javascript/advanced/LinkedLists";
import matricesQuiz from "../../data/javascript/advanced/Matrices";
import queuesQuiz from "../../data/javascript/advanced/Queues";
import recursionQuiz from "../../data/javascript/advanced/Recursion";
import stacksQuiz from "../../data/javascript/advanced/Stacks";
import stringsQuiz from "../../data/javascript/advanced/Strings";
import complexityAnalysisQuiz from "../../data/javascript/advanced/ComplexityAnalysis";
import pointersQuiz from "../../data/javascript/advanced/Pointers";
import hashTablesQuiz from "../../data/javascript/advanced/HashTables";
// import treesQuiz from "../../data/javascript/advanced/Trees";
import binaryTreesQuiz from "../../data/javascript/advanced/BinaryTrees";
import binarySearchTreesQuiz from "../../data/javascript/advanced/BinarySearchTrees";
import heapsQuiz from "../../data/javascript/advanced/Heaps";
import graphsQuiz from "../../data/javascript/advanced/Graphs";
import sortingAlgorithmsQuiz from "../../data/javascript/advanced/SortingAlgorithms";
import searchingAlgorithmsQuiz from "../../data/javascript/advanced/SearchingAlgorithms";
import bfsQuiz from "../../data/javascript/advanced/BFS";
import dfsQuiz from "../../data/javascript/advanced/DFS";
import divideAndConquerQuiz from "../../data/javascript/advanced/DivideAndConquer";
import greedyAlgorithmsQuiz from "../../data/javascript/advanced/GreedyAlgorithms";
import binarySearchQuiz from "../../data/javascript/advanced/BinarySearch";
// import twoPointersQuiz from "../../data/javascript/advanced/TwoPointers";
import slidingWindowQuiz from "../../data/javascript/advanced/SlidingWindow";
import binaryOperationsQuiz from "../../data/javascript/advanced/BinaryOperations";
import backtrackingQuiz from "../../data/javascript/advanced/Backtracking";
import dynamicProgrammingQuiz from "../../data/javascript/advanced/DynamicProgramming";
import dijkstrasAlgorithmQuiz from "../../data/javascript/advanced/DijkstrasAlgorithm";
import bellmanFordAlgorithmQuiz from "../../data/javascript/advanced/BellmanFordAlgorithm";
import floydWarshallAlgorithmQuiz from "../../data/javascript/advanced/FloydWarshallAlgorithm";
import primsAlgorithmQuiz from "../../data/javascript/advanced/PrimsAlgorithm";
import kruskalsAlgorithmQuiz from "../../data/javascript/advanced/KruskalsAlgorithm";
import topologicalSortQuiz from "../../data/javascript/advanced/TopologicalSort";
import avlTreesQuiz from "../../data/javascript/advanced/AVLTrees";
import redBlackTreesQuiz from "../../data/javascript/advanced/RedBlackTrees";
import bTreesQuiz from "../../data/javascript/advanced/BTrees";
// import triesQuiz from "../../data/javascript/advanced/Tries";
import segmentTreesQuiz from "../../data/javascript/advanced/SegmentTrees";
import fenwickTreesQuiz from "../../data/javascript/advanced/FenwickTrees";
import disjointSetUnionQuiz from "../../data/javascript/advanced/DisjointSetUnion";
import suffixArraysTreesQuiz from "../../data/javascript/advanced/SuffixArraysTrees";

const seedJavaScriptAdvancedQuizzes = async () => {
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
            // 'Trees': treesQuiz,
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
            // 'TwoPointers': twoPointersQuiz,
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
            // 'Tries': triesQuiz,
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
            console.log(`Inserted JavaScript advanced quiz for: ${courseTitle}`);
        }

        console.log("JavaScript advanced quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding JavaScript advanced quizzes:", error);
        throw error;
    }
};

export default seedJavaScriptAdvancedQuizzes; 