import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Floyd-Warshall Algorithm - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz assesses your intermediate understanding of the Floyd-Warshall Algorithm in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "FloydWarshallAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the Floyd-Warshall algorithm used for?",
            options: [
                { optionText: "Finding shortest paths between all pairs of vertices", optionTag: "A" },
                { optionText: "Finding the longest path in a graph", optionTag: "B" },
                { optionText: "Topological sorting", optionTag: "C" },
                { optionText: "Detecting cycles in a graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the Floyd-Warshall algorithm?",
            options: [
                { optionText: "O(n^3)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is typically used to store distances in Floyd-Warshall?",
            options: [
                { optionText: "2D array (matrix)", optionTag: "A" },
                { optionText: "1D array", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Floyd-Warshall algorithm works with which type of graph?",
            options: [
                { optionText: "Weighted directed graph", optionTag: "A" },
                { optionText: "Unweighted undirected graph", optionTag: "B" },
                { optionText: "Only trees", optionTag: "C" },
                { optionText: "Only DAGs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What value is used to initialize unreachable distances?",
            options: [
                { optionText: "Infinity", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the triple nested loop in Floyd-Warshall iterate over?",
            options: [
                { optionText: "All possible combinations of source, intermediate, and destination vertices", optionTag: "A" },
                { optionText: "Edges only", optionTag: "B" },
                { optionText: "Only shortest paths", optionTag: "C" },
                { optionText: "Cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Floyd-Warshall handle negative edge weights?",
            options: [
                { optionText: "Yes, as long as there are no negative cycles", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Yes, including negative cycles", optionTag: "C" },
                { optionText: "Only for DAGs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a key application of the Floyd-Warshall algorithm?",
            options: [
                { optionText: "Network routing optimization", optionTag: "A" },
                { optionText: "Page ranking", optionTag: "B" },
                { optionText: "Balancing binary trees", optionTag: "C" },
                { optionText: "Topological sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are diagonal elements of the distance matrix initialized?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "Infinity", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does the Floyd-Warshall algorithm detect negative cycles?",
            options: [
                { optionText: "If dist[i][i] becomes negative for any i", optionTag: "A" },
                { optionText: "If any edge weight is negative", optionTag: "B" },
                { optionText: "If total path cost is zero", optionTag: "C" },
                { optionText: "If number of iterations exceeds vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many matrices are required in Floyd-Warshall?",
            options: [
                { optionText: "One for distances", optionTag: "A" },
                { optionText: "Two for distances and visited nodes", optionTag: "B" },
                { optionText: "Three for path, distance and parent", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Floyd-Warshall algorithm work for undirected graphs?",
            options: [
                { optionText: "Yes, by treating undirected edges as two directed edges", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if all weights are equal", optionTag: "C" },
                { optionText: "Only if the graph is connected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can Floyd-Warshall be optimized for sparse graphs?",
            options: [
                { optionText: "Use adjacency lists and consider Dijkstra or Bellman-Ford", optionTag: "A" },
                { optionText: "Increase matrix size", optionTag: "B" },
                { optionText: "Use recursion", optionTag: "C" },
                { optionText: "Remove all edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which loop order is used in Floyd-Warshall?",
            options: [
                { optionText: "k → i → j", optionTag: "A" },
                { optionText: "i → j → k", optionTag: "B" },
                { optionText: "j → k → i", optionTag: "C" },
                { optionText: "i → k → j", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main difference between Floyd-Warshall and Dijkstra's algorithm?",
            options: [
                { optionText: "Floyd-Warshall finds all-pairs shortest paths", optionTag: "A" },
                { optionText: "Floyd-Warshall is faster", optionTag: "B" },
                { optionText: "Dijkstra handles negative weights", optionTag: "C" },
                { optionText: "Dijkstra is recursive", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the initial distance matrix filled?",
            options: [
                { optionText: "With edge weights or Infinity", optionTag: "A" },
                { optionText: "With 0s only", optionTag: "B" },
                { optionText: "With 1s", optionTag: "C" },
                { optionText: "With -1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be done if graph has negative weight cycle?",
            options: [
                { optionText: "Report and terminate algorithm", optionTag: "A" },
                { optionText: "Ignore and continue", optionTag: "B" },
                { optionText: "Convert to positive weights", optionTag: "C" },
                { optionText: "Remove random edge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm category does Floyd-Warshall belong to?",
            options: [
                { optionText: "Dynamic Programming", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Divide and Conquer", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is required to reconstruct the shortest path using Floyd-Warshall?",
            options: [
                { optionText: "A path matrix to track intermediate nodes", optionTag: "A" },
                { optionText: "Stack for every vertex", optionTag: "B" },
                { optionText: "Minimum spanning tree", optionTag: "C" },
                { optionText: "Cycle detection algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you represent Infinity in JavaScript for Floyd-Warshall?",
            options: [
                { optionText: "Number.POSITIVE_INFINITY", optionTag: "A" },
                { optionText: "null", optionTag: "B" },
                { optionText: "undefined", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
