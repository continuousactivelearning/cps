import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Bellman-Ford Algorithm - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate understanding of the Bellman-Ford Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BellmanFordAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main purpose of the Bellman-Ford algorithm?",
            options: [
                { optionText: "To find shortest paths in graphs with negative weights", optionTag: "A" },
                { optionText: "To perform DFS", optionTag: "B" },
                { optionText: "To construct minimum spanning trees", optionTag: "C" },
                { optionText: "To sort vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following graph types can Bellman-Ford handle?",
            options: [
                { optionText: "Graphs with negative weight edges", optionTag: "A" },
                { optionText: "Graphs with positive weight edges only", optionTag: "B" },
                { optionText: "Graphs with cycles only", optionTag: "C" },
                { optionText: "Undirected graphs only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the Bellman-Ford algorithm?",
            options: [
                { optionText: "O(VE)", optionTag: "A" },
                { optionText: "O(E log V)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(V + E)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main idea of the Bellman-Ford algorithm?",
            options: [
                { optionText: "Relax all edges repeatedly", optionTag: "A" },
                { optionText: "Traverse only the shortest path", optionTag: "B" },
                { optionText: "Perform BFS and update distances", optionTag: "C" },
                { optionText: "Sort edges by weight", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many times are edges relaxed in Bellman-Ford?",
            options: [
                { optionText: "V - 1 times", optionTag: "A" },
                { optionText: "V times", optionTag: "B" },
                { optionText: "E times", optionTag: "C" },
                { optionText: "2V times", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What indicates a negative weight cycle in Bellman-Ford?",
            options: [
                { optionText: "Further relaxation is possible after V-1 iterations", optionTag: "A" },
                { optionText: "All distances become negative", optionTag: "B" },
                { optionText: "All edges have zero weights", optionTag: "C" },
                { optionText: "Vertices are visited more than once", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is used to store shortest distances?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be the initial distance of the source vertex?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "Infinity", optionTag: "C" },
                { optionText: "-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are unreachable vertices represented in distance array?",
            options: [
                { optionText: "Infinity", optionTag: "A" },
                { optionText: "-1", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "Their own index", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is Bellman-Ford slower than Dijkstra?",
            options: [
                { optionText: "Because it doesn't use a priority queue", optionTag: "A" },
                { optionText: "Because it only works on unweighted graphs", optionTag: "B" },
                { optionText: "Because it sorts the edges", optionTag: "C" },
                { optionText: "Because it uses BFS internally", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is TRUE about Bellman-Ford?",
            options: [
                { optionText: "It can detect negative weight cycles", optionTag: "A" },
                { optionText: "It works only on DAGs", optionTag: "B" },
                { optionText: "It requires a sorted edge list", optionTag: "C" },
                { optionText: "It cannot handle graphs with cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Bellman-Ford works best on which type of graph?",
            options: [
                { optionText: "Sparse graph with negative weights", optionTag: "A" },
                { optionText: "Complete graphs", optionTag: "B" },
                { optionText: "Undirected graphs", optionTag: "C" },
                { optionText: "Cyclic graphs only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the 'relaxation' step do?",
            options: [
                { optionText: "Updates shortest distance if a better path is found", optionTag: "A" },
                { optionText: "Deletes edges", optionTag: "B" },
                { optionText: "Sorts the edges", optionTag: "C" },
                { optionText: "Performs DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the edge case Bellman-Ford is famous for handling?",
            options: [
                { optionText: "Negative weight cycles", optionTag: "A" },
                { optionText: "Self-loops", optionTag: "B" },
                { optionText: "Disconnected components", optionTag: "C" },
                { optionText: "Multi-edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if there is a negative cycle reachable from the source?",
            options: [
                { optionText: "The algorithm detects it and exits", optionTag: "A" },
                { optionText: "It continues to relax edges infinitely", optionTag: "B" },
                { optionText: "It sorts the edges to stop it", optionTag: "C" },
                { optionText: "It throws an exception", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are edges represented in Bellman-Ford?",
            options: [
                { optionText: "As triples (u, v, w)", optionTag: "A" },
                { optionText: "As pairs (u, v)", optionTag: "B" },
                { optionText: "As adjacency matrix", optionTag: "C" },
                { optionText: "As a list of vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these cannot be handled by Dijkstra but is handled by Bellman-Ford?",
            options: [
                { optionText: "Graphs with negative edges", optionTag: "A" },
                { optionText: "Graphs with positive edges", optionTag: "B" },
                { optionText: "DAGs", optionTag: "C" },
                { optionText: "Graphs with zero weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations is repeated in the algorithm?",
            options: [
                { optionText: "Relaxing all edges", optionTag: "A" },
                { optionText: "Sorting the graph", optionTag: "B" },
                { optionText: "Topological ordering", optionTag: "C" },
                { optionText: "Counting edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If a negative cycle is detected, what should the algorithm return?",
            options: [
                { optionText: "Indication of negative cycle presence", optionTag: "A" },
                { optionText: "Infinity", optionTag: "B" },
                { optionText: "False distances", optionTag: "C" },
                { optionText: "Doesn’t return anything", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these problems can Bellman-Ford help solve?",
            options: [
                { optionText: "Currency arbitrage detection", optionTag: "A" },
                { optionText: "Graph coloring", optionTag: "B" },
                { optionText: "Maze generation", optionTag: "C" },
                { optionText: "Cycle detection in undirected graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
