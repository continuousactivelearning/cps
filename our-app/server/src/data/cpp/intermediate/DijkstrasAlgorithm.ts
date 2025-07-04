import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Dijkstra's Algorithm - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz evaluates your intermediate understanding of Dijkstra's shortest path algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DijkstrasAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main purpose of Dijkstra’s algorithm?",
            options: [
                { optionText: "Finding shortest paths from a single source", optionTag: "A" },
                { optionText: "Sorting vertices", optionTag: "B" },
                { optionText: "Detecting cycles", optionTag: "C" },
                { optionText: "Finding longest path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is commonly used to implement Dijkstra's algorithm efficiently?",
            options: [
                { optionText: "Priority Queue (min-heap)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Hash Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra's algorithm works correctly only when:",
            options: [
                { optionText: "There are no negative edge weights", optionTag: "A" },
                { optionText: "The graph is cyclic", optionTag: "B" },
                { optionText: "The graph is directed", optionTag: "C" },
                { optionText: "The graph is disconnected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Dijkstra’s algorithm using a min-heap?",
            options: [
                { optionText: "O((V + E) log V)", optionTag: "A" },
                { optionText: "O(VE)", optionTag: "B" },
                { optionText: "O(E^2)", optionTag: "C" },
                { optionText: "O(V^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In C++, which STL container is commonly used for Dijkstra’s priority queue?",
            options: [
                { optionText: "priority_queue", optionTag: "A" },
                { optionText: "stack", optionTag: "B" },
                { optionText: "deque", optionTag: "C" },
                { optionText: "set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is initialized to 0 at the beginning of Dijkstra’s algorithm?",
            options: [
                { optionText: "Source vertex distance", optionTag: "A" },
                { optionText: "All vertex distances", optionTag: "B" },
                { optionText: "Edge weights", optionTag: "C" },
                { optionText: "Priority queue size", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If all edges have equal weight, which algorithm can also be used for shortest path?",
            options: [
                { optionText: "BFS", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Kruskal’s", optionTag: "C" },
                { optionText: "Prim’s", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of Dijkstra's algorithm?",
            options: [
                { optionText: "Shortest distance to all vertices from source", optionTag: "A" },
                { optionText: "Number of connected components", optionTag: "B" },
                { optionText: "Topological order", optionTag: "C" },
                { optionText: "Minimum spanning tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dijkstra's algorithm fails on which graph type?",
            options: [
                { optionText: "Graph with negative weights", optionTag: "A" },
                { optionText: "Undirected graph", optionTag: "B" },
                { optionText: "Tree", optionTag: "C" },
                { optionText: "Cyclic graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation is efficient for Dijkstra's algorithm?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Incidence matrix", optionTag: "C" },
                { optionText: "Edge list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Dijkstra's algorithm, if you revisit a node with a smaller distance, what should be done?",
            options: [
                { optionText: "Update the distance and reprocess", optionTag: "A" },
                { optionText: "Ignore the node", optionTag: "B" },
                { optionText: "Restart the algorithm", optionTag: "C" },
                { optionText: "Remove the node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is the correct order of steps in Dijkstra's algorithm?",
            options: [
                { optionText: "Initialize → Relax → Process", optionTag: "A" },
                { optionText: "Process → Relax → Initialize", optionTag: "B" },
                { optionText: "Relax → Initialize → Process", optionTag: "C" },
                { optionText: "Relax → Process → Initialize", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is most frequent in Dijkstra's algorithm?",
            options: [
                { optionText: "Extract min from priority queue", optionTag: "A" },
                { optionText: "Sort vertices", optionTag: "B" },
                { optionText: "Multiply weights", optionTag: "C" },
                { optionText: "Color vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Dijkstra’s algorithm work with undirected graphs?",
            options: [
                { optionText: "Yes, if weights are non-negative", optionTag: "A" },
                { optionText: "No, it’s only for directed graphs", optionTag: "B" },
                { optionText: "Only with tree graphs", optionTag: "C" },
                { optionText: "Only if graph is connected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a visited array help with in Dijkstra’s algorithm?",
            options: [
                { optionText: "Avoid reprocessing nodes", optionTag: "A" },
                { optionText: "Track shortest path", optionTag: "B" },
                { optionText: "Store edge weights", optionTag: "C" },
                { optionText: "Store graph type", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best-case time complexity of Dijkstra’s algorithm?",
            options: [
                { optionText: "O(V)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(E)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What must be initialized for each vertex in Dijkstra’s algorithm?",
            options: [
                { optionText: "Distance from source", optionTag: "A" },
                { optionText: "Color", optionTag: "B" },
                { optionText: "Visited status only", optionTag: "C" },
                { optionText: "Parent", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is not a feature of Dijkstra’s algorithm?",
            options: [
                { optionText: "Handles negative edge weights", optionTag: "A" },
                { optionText: "Greedy strategy", optionTag: "B" },
                { optionText: "Single-source shortest path", optionTag: "C" },
                { optionText: "Efficient with heaps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these optimizations can improve Dijkstra’s algorithm?",
            options: [
                { optionText: "Use min-heap for priority queue", optionTag: "A" },
                { optionText: "Use array for queue", optionTag: "B" },
                { optionText: "Sort edges by weight", optionTag: "C" },
                { optionText: "Apply DFS instead", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem type can Dijkstra’s algorithm not solve?",
            options: [
                { optionText: "Shortest path with negative edge weights", optionTag: "A" },
                { optionText: "Shortest path in unweighted graph", optionTag: "B" },
                { optionText: "All-pairs shortest paths", optionTag: "C" },
                { optionText: "Minimum cost path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
