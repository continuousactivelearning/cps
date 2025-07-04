import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Bellman-Ford Algorithm - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced understanding of the Bellman-Ford Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BellmanFordAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of the Bellman-Ford algorithm for a graph with V vertices and E edges?",
            options: [
                { optionText: "O(VE)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E log V)", optionTag: "C" },
                { optionText: "O(V^3)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following statements is true about Bellman-Ford algorithm?",
            options: [
                { optionText: "It works with graphs containing negative weight edges", optionTag: "A" },
                { optionText: "It only works with positive edge weights", optionTag: "B" },
                { optionText: "It uses DFS traversal", optionTag: "C" },
                { optionText: "It cannot detect negative weight cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many times are all edges relaxed in the Bellman-Ford algorithm?",
            options: [
                { optionText: "V - 1 times", optionTag: "A" },
                { optionText: "E times", optionTag: "B" },
                { optionText: "V times", optionTag: "C" },
                { optionText: "1 time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following graph representations is ideal for implementing Bellman-Ford?",
            options: [
                { optionText: "Edge list", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Adjacency list", optionTag: "C" },
                { optionText: "Incidence matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition indicates the presence of a negative weight cycle in Bellman-Ford?",
            options: [
                { optionText: "Further distance updates after V-1 relaxations", optionTag: "A" },
                { optionText: "All edge weights are zero", optionTag: "B" },
                { optionText: "Total weight of all edges is negative", optionTag: "C" },
                { optionText: "Cycle length is greater than V", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is initialized to zero in the Bellman-Ford algorithm?",
            options: [
                { optionText: "Source vertex distance", optionTag: "A" },
                { optionText: "All vertex distances", optionTag: "B" },
                { optionText: "Edge weights", optionTag: "C" },
                { optionText: "Cycle length", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be the initial distance to all vertices except the source in Bellman-Ford?",
            options: [
                { optionText: "Infinity", optionTag: "A" },
                { optionText: "Zero", optionTag: "B" },
                { optionText: "Negative Infinity", optionTag: "C" },
                { optionText: "One", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Bellman-Ford algorithm is mainly used to:",
            options: [
                { optionText: "Detect negative weight cycles and find shortest paths", optionTag: "A" },
                { optionText: "Find minimum spanning tree", optionTag: "B" },
                { optionText: "Traverse tree in-order", optionTag: "C" },
                { optionText: "Sort graph vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a negative weight cycle is detected in Bellman-Ford?",
            options: [
                { optionText: "The algorithm returns failure or throws an error", optionTag: "A" },
                { optionText: "Distances are reset", optionTag: "B" },
                { optionText: "Cycle is skipped", optionTag: "C" },
                { optionText: "All weights are ignored", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these real-world problems can Bellman-Ford solve?",
            options: [
                { optionText: "Currency arbitrage detection", optionTag: "A" },
                { optionText: "Tree traversal", optionTag: "B" },
                { optionText: "Memory allocation", optionTag: "C" },
                { optionText: "Sorting integers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which optimization is sometimes applied to Bellman-Ford for early termination?",
            options: [
                { optionText: "Stop if no distance updates occur in a round", optionTag: "A" },
                { optionText: "Stop after first iteration", optionTag: "B" },
                { optionText: "Stop if source reaches last vertex", optionTag: "C" },
                { optionText: "Stop if edge count < V", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is Bellman-Ford not used for dense graphs?",
            options: [
                { optionText: "High time complexity due to edge count", optionTag: "A" },
                { optionText: "It can’t process adjacency matrix", optionTag: "B" },
                { optionText: "It requires a binary heap", optionTag: "C" },
                { optionText: "It works only for sparse trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Bellman-Ford, how many edges can be relaxed in one iteration?",
            options: [
                { optionText: "All E edges", optionTag: "A" },
                { optionText: "Only incoming edges to source", optionTag: "B" },
                { optionText: "Only outgoing edges from source", optionTag: "C" },
                { optionText: "V - 1 edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm does Bellman-Ford use?",
            options: [
                { optionText: "None", optionTag: "A" },
                { optionText: "Quick sort", optionTag: "B" },
                { optionText: "Merge sort", optionTag: "C" },
                { optionText: "Heap sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Bellman-Ford is better than Dijkstra’s algorithm when:",
            options: [
                { optionText: "Graph has negative edge weights", optionTag: "A" },
                { optionText: "Graph is unweighted", optionTag: "B" },
                { optionText: "Graph is a tree", optionTag: "C" },
                { optionText: "Graph is dense", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition should be checked before edge relaxation?",
            options: [
                { optionText: "If current distance is not infinity", optionTag: "A" },
                { optionText: "If vertex is odd", optionTag: "B" },
                { optionText: "If weight is zero", optionTag: "C" },
                { optionText: "If vertex has no incoming edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Bellman-Ford algorithm be used for undirected graphs with negative weights?",
            options: [
                { optionText: "No, it may misbehave due to bidirectional negative edges", optionTag: "A" },
                { optionText: "Yes, always", optionTag: "B" },
                { optionText: "Only if graph is connected", optionTag: "C" },
                { optionText: "Yes, with log weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Who proposed the Bellman-Ford algorithm?",
            options: [
                { optionText: "Richard Bellman and Lester Ford", optionTag: "A" },
                { optionText: "Edsger Dijkstra", optionTag: "B" },
                { optionText: "Prim and Kruskal", optionTag: "C" },
                { optionText: "Donald Knuth", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is typically used to store distances in Bellman-Ford?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is a simpler but less flexible alternative to Bellman-Ford?",
            options: [
                { optionText: "Dijkstra’s algorithm", optionTag: "A" },
                { optionText: "Floyd-Warshall", optionTag: "B" },
                { optionText: "Prim’s algorithm", optionTag: "C" },
                { optionText: "Kruskal’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
