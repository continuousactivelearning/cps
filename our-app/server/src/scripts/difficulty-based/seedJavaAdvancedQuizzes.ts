import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";
// Import all advanced quiz data
import arraysQuiz from "../../data/java/advanced/Arrays";
import linkedListsQuiz from "../../data/java/advanced/LinkedLists";
import matricesQuiz from "../../data/java/advanced/Matrices";
import queuesQuiz from "../../data/java/advanced/Queues";
import recursionQuiz from "../../data/java/advanced/Recursion";
import stacksQuiz from "../../data/java/advanced/Stacks";
import stringsQuiz from "../../data/java/advanced/Strings";
import complexityAnalysisQuiz from "../../data/java/advanced/ComplexityAnalysis";
import pointersQuiz from "../../data/java/advanced/Pointers";
import hashTablesQuiz from "../../data/java/advanced/HashTables";
import treesQuiz from "../../data/java/advanced/Trees";
import binaryTreesQuiz from "../../data/java/advanced/BinaryTrees";
import binarySearchTreesQuiz from "../../data/java/advanced/BinarySearchTrees";
import heapsQuiz from "../../data/java/advanced/Heaps";
import graphsQuiz from "../../data/java/advanced/Graphs";
import sortingAlgorithmsQuiz from "../../data/java/advanced/SortingAlgorithms";
import searchingAlgorithmsQuiz from "../../data/java/advanced/SearchingAlgorithms";
import bfsQuiz from "../../data/java/advanced/BFS";
import dfsQuiz from "../../data/java/advanced/DFS";
import divideAndConquerQuiz from "../../data/java/advanced/DivideAndConquer";
import greedyAlgorithmsQuiz from "../../data/java/advanced/GreedyAlgorithms";
import binarySearchQuiz from "../../data/java/advanced/BinarySearch";
import twoPointersQuiz from "../../data/java/advanced/TwoPointers";
import slidingWindowQuiz from "../../data/java/advanced/SlidingWindow";
import binaryOperationsQuiz from "../../data/java/advanced/BinaryOperations";
import backtrackingQuiz from "../../data/java/advanced/Backtracking";
import dynamicProgrammingQuiz from "../../data/java/advanced/DynamicProgramming";
import dijkstrasAlgorithmQuiz from "../../data/java/advanced/DijkstrasAlgorithm";
import bellmanFordAlgorithmQuiz from "../../data/java/advanced/BellmanFordAlgorithm";
import floydWarshallAlgorithmQuiz from "../../data/java/advanced/FloydWarshallAlgorithm";
import primsAlgorithmQuiz from "../../data/java/advanced/PrimsAlgorithm";
import kruskalsAlgorithmQuiz from "../../data/java/advanced/KruskalsAlgorithm";
import topologicalSortQuiz from "../../data/java/advanced/TopologicalSort";
import avlTreesQuiz from "../../data/java/advanced/AVLTrees";
import redBlackTreesQuiz from "../../data/java/advanced/RedBlackTrees";
import bTreesQuiz from "../../data/java/advanced/BTrees";
import triesQuiz from "../../data/java/advanced/Tries";
import segmentTreesQuiz from "../../data/java/advanced/SegmentTrees";
import fenwickTreesQuiz from "../../data/java/advanced/FenwickTrees";
import disjointSetUnionQuiz from "../../data/java/advanced/DisjointSetUnion";
import suffixArraysTreesQuiz from "../../data/java/advanced/SuffixArraysTrees";

const seedJavaAdvancedQuizzes = async () => {
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

            await Quiz.create(newQuiz);
            console.log(`Inserted advanced quiz for: ${courseTitle}`);
        }

        console.log("Java advanced quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding Java advanced quizzes:", error);
        throw error;
    }
};

export default seedJavaAdvancedQuizzes;