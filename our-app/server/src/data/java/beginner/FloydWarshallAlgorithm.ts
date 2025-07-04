// src/data/java/beginner/floyd_warshall_algorithm.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Floyd-Warshall Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz checks your understanding of the Floyd-Warshall algorithm for all-pairs shortest paths.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Floyd-Warshall Algorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the Floyd-Warshall algorithm used for?",
            options: [
                { optionText: "Finding all pairs shortest paths", optionTag: "A" },
                { optionText: "Sorting an array", optionTag: "B" },
                { optionText: "Finding a minimum spanning tree", optionTag: "C" },
                { optionText: "Graph coloring", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the Floyd-Warshall algorithm?",
            options: [
                { optionText: "O(V^3)", optionTag: "A" },
                { optionText: "O(E)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of graphs does Floyd-Warshall work on?",
            options: [
                { optionText: "Directed graphs with positive or negative edge weights", optionTag: "A" },
                { optionText: "Only undirected graphs", optionTag: "B" },
                { optionText: "Only trees", optionTag: "C" },
                { optionText: "Only unweighted graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is used to represent graph distances?",
            options: [
                { optionText: "2D array (matrix)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "HashMap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is repeated for each triplet (i, j, k) in Floyd-Warshall?",
            options: [
                { optionText: "Checking if a shorter path exists through vertex k", optionTag: "A" },
                { optionText: "Adding all edges", optionTag: "B" },
                { optionText: "Removing edges", optionTag: "C" },
                { optionText: "Restructuring the graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What value is used to represent 'infinity' in the matrix?",
            options: [
                { optionText: "Integer.MAX_VALUE", optionTag: "A" },
                { optionText: "-1", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "null", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is the Floyd-Warshall algorithm preferred?",
            options: [
                { optionText: "When all-pairs shortest paths are needed", optionTag: "A" },
                { optionText: "When only a single source is required", optionTag: "B" },
                { optionText: "For negative cycles", optionTag: "C" },
                { optionText: "When graph has few edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will Floyd-Warshall do if there is a negative cycle?",
            options: [
                { optionText: "Return negative values on the diagonal", optionTag: "A" },
                { optionText: "Throw an exception", optionTag: "B" },
                { optionText: "Return null", optionTag: "C" },
                { optionText: "Crash", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the diagonal of the distance matrix represent?",
            options: [
                { optionText: "Distance from a node to itself", optionTag: "A" },
                { optionText: "Distance between neighboring nodes", optionTag: "B" },
                { optionText: "Minimum edge weight", optionTag: "C" },
                { optionText: "Total path cost", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the distance matrix updated?",
            options: [
                { optionText: "By comparing old distance with intermediate vertex path", optionTag: "A" },
                { optionText: "By summing all weights", optionTag: "B" },
                { optionText: "Using binary search", optionTag: "C" },
                { optionText: "By deleting unused vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which statement is true about Floyd-Warshall?",
            options: [
                { optionText: "It is dynamic programming based", optionTag: "A" },
                { optionText: "It uses recursion", optionTag: "B" },
                { optionText: "It is a greedy algorithm", optionTag: "C" },
                { optionText: "It builds a tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT needed to implement Floyd-Warshall?",
            options: [
                { optionText: "Priority queue", optionTag: "A" },
                { optionText: "Loop through vertices", optionTag: "B" },
                { optionText: "Matrix for storing distances", optionTag: "C" },
                { optionText: "Initialization of graph matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following best describes Floyd-Warshall?",
            options: [
                { optionText: "Triple-nested loop algorithm", optionTag: "A" },
                { optionText: "Divide-and-conquer", optionTag: "B" },
                { optionText: "Heap-based algorithm", optionTag: "C" },
                { optionText: "Recursive DFS variant", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What condition must be checked during matrix updates?",
            options: [
                { optionText: "If distance through k is shorter", optionTag: "A" },
                { optionText: "If vertex is prime", optionTag: "B" },
                { optionText: "If array is sorted", optionTag: "C" },
                { optionText: "If graph is cyclic", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Floyd-Warshall works on which kind of graph weights?",
            options: [
                { optionText: "Positive and negative (without cycles)", optionTag: "A" },
                { optionText: "Only zero weights", optionTag: "B" },
                { optionText: "Only positive weights", optionTag: "C" },
                { optionText: "Only odd weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of Floyd-Warshall?",
            options: [
                { optionText: "O(V^2)", optionTag: "A" },
                { optionText: "O(E)", optionTag: "B" },
                { optionText: "O(V)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many nested loops are used in Floyd-Warshall?",
            options: [
                { optionText: "Three", optionTag: "A" },
                { optionText: "One", optionTag: "B" },
                { optionText: "Two", optionTag: "C" },
                { optionText: "Four", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of algorithm is Floyd-Warshall classified as?",
            options: [
                { optionText: "Dynamic programming", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Divide-and-conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a vertex is unreachable?",
            options: [
                { optionText: "Distance remains infinity", optionTag: "A" },
                { optionText: "Distance becomes zero", optionTag: "B" },
                { optionText: "Path is removed", optionTag: "C" },
                { optionText: "Distance is marked -1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;