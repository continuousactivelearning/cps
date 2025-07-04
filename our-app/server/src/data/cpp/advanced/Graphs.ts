import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Graphs - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz evaluates your advanced knowledge of Graphs and related algorithms in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Graphs"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of checking whether an undirected graph is bipartite using BFS?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E log V)", optionTag: "C" },
                { optionText: "O(V log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used to find articulation points in a graph?",
            options: [
                { optionText: "Tarjan’s algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s algorithm", optionTag: "B" },
                { optionText: "Floyd-Warshall algorithm", optionTag: "C" },
                { optionText: "Bellman-Ford algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is preferred for representing sparse graphs?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "2D Array", optionTag: "C" },
                { optionText: "Binary Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Kosaraju’s algorithm, what is the purpose of reversing the graph?",
            options: [
                { optionText: "To find strongly connected components", optionTag: "A" },
                { optionText: "To check for cycles", optionTag: "B" },
                { optionText: "To convert to undirected", optionTag: "C" },
                { optionText: "To sort nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is commonly used for topological sorting?",
            options: [
                { optionText: "Kahn’s algorithm", optionTag: "A" },
                { optionText: "Prim’s algorithm", optionTag: "B" },
                { optionText: "Kruskal’s algorithm", optionTag: "C" },
                { optionText: "Tarjan’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many strongly connected components can an acyclic graph have?",
            options: [
                { optionText: "V", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "E", optionTag: "C" },
                { optionText: "V + E", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following detects bridges in a graph?",
            options: [
                { optionText: "Tarjan’s algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s algorithm", optionTag: "B" },
                { optionText: "Prim’s algorithm", optionTag: "C" },
                { optionText: "Kosaraju’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph algorithm uses a priority queue to select the next vertex?",
            options: [
                { optionText: "Dijkstra’s algorithm", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "Union-Find", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of edges in a connected graph with V vertices?",
            options: [
                { optionText: "V - 1", optionTag: "A" },
                { optionText: "V", optionTag: "B" },
                { optionText: "V + 1", optionTag: "C" },
                { optionText: "2V", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used for finding the shortest path in a DAG?",
            options: [
                { optionText: "Topological sort + relaxation", optionTag: "A" },
                { optionText: "Bellman-Ford", optionTag: "B" },
                { optionText: "Floyd-Warshall", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm guarantees the shortest path for graphs with negative weights?",
            options: [
                { optionText: "Bellman-Ford", optionTag: "A" },
                { optionText: "Dijkstra", optionTag: "B" },
                { optionText: "Prim’s", optionTag: "C" },
                { optionText: "Kruskal’s", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the edge relaxation step in shortest path algorithms?",
            options: [
                { optionText: "Update shortest distance if a better path is found", optionTag: "A" },
                { optionText: "Delete an edge", optionTag: "B" },
                { optionText: "Merge two nodes", optionTag: "C" },
                { optionText: "Sort edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition causes Dijkstra’s algorithm to fail?",
            options: [
                { optionText: "Presence of negative weights", optionTag: "A" },
                { optionText: "Cycle in the graph", optionTag: "B" },
                { optionText: "Disconnected components", optionTag: "C" },
                { optionText: "Directed edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm can be used to detect cycles in a directed graph?",
            options: [
                { optionText: "DFS with recursion stack", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Prim’s", optionTag: "C" },
                { optionText: "Kruskal’s", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT true for a complete graph with V vertices?",
            options: [
                { optionText: "It has V*(V-1)/2 edges", optionTag: "A" },
                { optionText: "Every pair of nodes is connected", optionTag: "B" },
                { optionText: "It has V edges", optionTag: "C" },
                { optionText: "Degree of each vertex is V-1", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the out-degree of a vertex in a directed graph?",
            options: [
                { optionText: "Number of edges going out from the vertex", optionTag: "A" },
                { optionText: "Number of incoming edges", optionTag: "B" },
                { optionText: "Total degree", optionTag: "C" },
                { optionText: "Sum of edge weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a valid property of a tree (a special graph)?",
            options: [
                { optionText: "Acyclic and connected", optionTag: "A" },
                { optionText: "Contains cycles", optionTag: "B" },
                { optionText: "Disconnected", optionTag: "C" },
                { optionText: "Has self loops", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is used in Kahn's algorithm?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm finds Minimum Spanning Tree in a connected graph?",
            options: [
                { optionText: "Prim’s or Kruskal’s", optionTag: "A" },
                { optionText: "Dijkstra’s", optionTag: "B" },
                { optionText: "Tarjan’s", optionTag: "C" },
                { optionText: "Kosaraju’s", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which representation is preferred for dense graphs?",
            options: [
                { optionText: "Adjacency matrix", optionTag: "A" },
                { optionText: "Adjacency list", optionTag: "B" },
                { optionText: "Edge list", optionTag: "C" },
                { optionText: "DFS tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
