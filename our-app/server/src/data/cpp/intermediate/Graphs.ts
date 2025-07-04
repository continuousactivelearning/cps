import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Graphs - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate understanding of Graph concepts and operations in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Graphs"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which data structure is commonly used to represent graphs in memory?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to check connectivity in a graph?",
            options: [
                { optionText: "DFS or BFS", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is true for an undirected graph with n vertices and no edges?",
            options: [
                { optionText: "It has n connected components", optionTag: "A" },
                { optionText: "It is fully connected", optionTag: "B" },
                { optionText: "It is cyclic", optionTag: "C" },
                { optionText: "It is a tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of DFS using an adjacency list?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E^2)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which STL container is ideal for implementing a graph using adjacency list?",
            options: [
                { optionText: "vector<vector<int>>", optionTag: "A" },
                { optionText: "set", optionTag: "B" },
                { optionText: "stack", optionTag: "C" },
                { optionText: "map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these graphs has no cycles?",
            options: [
                { optionText: "Tree", optionTag: "A" },
                { optionText: "Complete graph", optionTag: "B" },
                { optionText: "Multigraph", optionTag: "C" },
                { optionText: "Directed graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used for detecting cycles in a directed graph?",
            options: [
                { optionText: "DFS with recursion stack", optionTag: "A" },
                { optionText: "BFS only", optionTag: "B" },
                { optionText: "Dijkstra’s", optionTag: "C" },
                { optionText: "Topological sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a property of a strongly connected graph?",
            options: [
                { optionText: "There is a path between every pair of vertices", optionTag: "A" },
                { optionText: "There are no loops", optionTag: "B" },
                { optionText: "It contains only one connected component", optionTag: "C" },
                { optionText: "All edges are bidirectional", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used to find shortest paths in unweighted graphs?",
            options: [
                { optionText: "BFS", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Dijkstra", optionTag: "C" },
                { optionText: "Floyd-Warshall", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of edges in a simple undirected graph with n vertices?",
            options: [
                { optionText: "n(n-1)/2", optionTag: "A" },
                { optionText: "n(n+1)/2", optionTag: "B" },
                { optionText: "n", optionTag: "C" },
                { optionText: "2n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm can be used to find a Minimum Spanning Tree?",
            options: [
                { optionText: "Prim's Algorithm", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Bellman-Ford", optionTag: "C" },
                { optionText: "Kahn’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In an adjacency matrix representation, how many cells are used for a graph with V vertices?",
            options: [
                { optionText: "V × V", optionTag: "A" },
                { optionText: "V", optionTag: "B" },
                { optionText: "V + E", optionTag: "C" },
                { optionText: "2V", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal method uses a queue?",
            options: [
                { optionText: "BFS", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Preorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is used in topological sorting?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Kruskal", optionTag: "C" },
                { optionText: "Prim", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you detect a cycle in an undirected graph?",
            options: [
                { optionText: "Union-Find", optionTag: "A" },
                { optionText: "Topological Sort", optionTag: "B" },
                { optionText: "Bellman-Ford", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these graph representations is space-efficient for sparse graphs?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Incidence matrix", optionTag: "C" },
                { optionText: "Weighted matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is expensive in adjacency matrix representation?",
            options: [
                { optionText: "Iterating over neighbors", optionTag: "A" },
                { optionText: "Checking if edge exists", optionTag: "B" },
                { optionText: "Edge deletion", optionTag: "C" },
                { optionText: "Edge addition", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following graphs is not connected?",
            options: [
                { optionText: "A graph with multiple components", optionTag: "A" },
                { optionText: "A spanning tree", optionTag: "B" },
                { optionText: "A fully connected graph", optionTag: "C" },
                { optionText: "A simple path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the out-degree of a vertex?",
            options: [
                { optionText: "Number of edges going out", optionTag: "A" },
                { optionText: "Number of incoming edges", optionTag: "B" },
                { optionText: "Total number of edges", optionTag: "C" },
                { optionText: "Sum of vertex values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a graph with negative weights, which algorithm is preferred?",
            options: [
                { optionText: "Bellman-Ford", optionTag: "A" },
                { optionText: "Dijkstra", optionTag: "B" },
                { optionText: "Prim", optionTag: "C" },
                { optionText: "Kruskal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
