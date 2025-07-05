import mongoose from "mongoose";
import Course from "../../models/Course";
import Quiz from "../../models/Quiz";
// Import all intermediate quiz data
import arraysQuiz from "../../data/java/intermediate/Arrays";
import linkedListsQuiz from "../../data/java/intermediate/LinkedLists";
import matricesQuiz from "../../data/java/intermediate/Matrices";
import queuesQuiz from "../../data/java/intermediate/Queues";
import recursionQuiz from "../../data/java/intermediate/Recursion";
import stacksQuiz from "../../data/java/intermediate/Stacks";
import stringsQuiz from "../../data/java/intermediate/Strings";
import complexityAnalysisQuiz from "../../data/java/intermediate/ComplexityAnalysis";
import pointersQuiz from "../../data/java/intermediate/Pointers";
import hashTablesQuiz from "../../data/java/intermediate/HashTables";
import treesQuiz from "../../data/java/intermediate/Trees";
import binaryTreesQuiz from "../../data/java/intermediate/BinaryTrees";
import binarySearchTreesQuiz from "../../data/java/intermediate/BinarySearchTrees";
import heapsQuiz from "../../data/java/intermediate/Heaps";
import graphsQuiz from "../../data/java/intermediate/Graphs";
import sortingAlgorithmsQuiz from "../../data/java/intermediate/SortingAlgorithms";
import searchingAlgorithmsQuiz from "../../data/java/intermediate/SearchingAlgorithms";
import bfsQuiz from "../../data/java/intermediate/BFS";
import dfsQuiz from "../../data/java/intermediate/DFS";
import divideAndConquerQuiz from "../../data/java/intermediate/DivideAndConquer";
import greedyAlgorithmsQuiz from "../../data/java/intermediate/GreedyAlgorithms";
import binarySearchQuiz from "../../data/java/intermediate/BinarySearch";
import twoPointersQuiz from "../../data/java/intermediate/TwoPointers";
import slidingWindowQuiz from "../../data/java/intermediate/SlidingWindow";
import binaryOperationsQuiz from "../../data/java/intermediate/BinaryOperations";
import backtrackingQuiz from "../../data/java/intermediate/Backtracking";
import dynamicProgrammingQuiz from "../../data/java/intermediate/DynamicProgramming";
import dijkstrasAlgorithmQuiz from "../../data/java/intermediate/DijkstrasAlgorithm";
import bellmanFordAlgorithmQuiz from "../../data/java/intermediate/BellmanFordAlgorithm";
import floydWarshallAlgorithmQuiz from "../../data/java/intermediate/FloydWarshallAlgorithm";
import primsAlgorithmQuiz from "../../data/java/intermediate/PrimsAlgorithm";
import kruskalsAlgorithmQuiz from "../../data/java/intermediate/KruskalsAlgorithm";
import topologicalSortQuiz from "../../data/java/intermediate/TopologicalSort";
import avlTreesQuiz from "../../data/java/intermediate/AVLTrees";
import redBlackTreesQuiz from "../../data/java/intermediate/RedBlackTrees";
import bTreesQuiz from "../../data/java/intermediate/BTrees";
import triesQuiz from "../../data/java/intermediate/Tries";
import segmentTreesQuiz from "../../data/java/intermediate/SegmentTrees";
import fenwickTreesQuiz from "../../data/java/intermediate/FenwickTrees";
import disjointSetUnionQuiz from "../../data/java/intermediate/DisjointSetUnion";
import suffixArraysTreesQuiz from "../../data/java/intermediate/SuffixArraysTrees";

const seedJavaIntermediateQuizzes = async () => {
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

            await Quiz.create(newQuiz);
            console.log(`Inserted intermediate quiz for: ${courseTitle}`);
        }

        console.log("Java intermediate quizzes inserted successfully.");
    } catch (error) {
        console.error("Error seeding Java intermediate quizzes:", error);
        throw error;
    }
};

export default seedJavaIntermediateQuizzes; 