import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Graphs - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic understanding of graph concepts and implementations in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Graphs"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a graph in data structures?",
            options: [
                { optionText: "A collection of nodes and edges", optionTag: "A" },
                { optionText: "A sorted list", optionTag: "B" },
                { optionText: "A hierarchical structure", optionTag: "C" },
                { optionText: "A binary tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true for undirected graphs?",
            options: [
                { optionText: "Edges do not have direction", optionTag: "A" },
                { optionText: "Edges point from one node to another", optionTag: "B" },
                { optionText: "Every node points to itself", optionTag: "C" },
                { optionText: "They cannot have loops", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the JavaScript data structure commonly used to implement graphs?",
            options: [
                { optionText: "Object or Map", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is an adjacency list?",
            options: [
                { optionText: "A collection where each node stores a list of connected nodes", optionTag: "A" },
                { optionText: "A matrix of 0s and 1s", optionTag: "B" },
                { optionText: "A sorted array", optionTag: "C" },
                { optionText: "A list of node degrees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph type allows multiple edges between the same two nodes?",
            options: [
                { optionText: "Multigraph", optionTag: "A" },
                { optionText: "Simple graph", optionTag: "B" },
                { optionText: "Tree", optionTag: "C" },
                { optionText: "DAG", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a common graph traversal method?",
            options: [
                { optionText: "Post-order traversal", optionTag: "A" },
                { optionText: "Breadth-first search", optionTag: "B" },
                { optionText: "Depth-first search", optionTag: "C" },
                { optionText: "All-pairs traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript feature helps avoid duplicate neighbors in an adjacency list?",
            options: [
                { optionText: "Set", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Object", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a cycle in a graph?",
            options: [
                { optionText: "A path that starts and ends at the same node", optionTag: "A" },
                { optionText: "A path that visits every node once", optionTag: "B" },
                { optionText: "A disconnected graph", optionTag: "C" },
                { optionText: "A graph with only one node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many edges are in a complete undirected graph with n nodes?",
            options: [
                { optionText: "n(n-1)/2", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "n(n+1)/2", optionTag: "C" },
                { optionText: "n^2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is commonly used to find the shortest path in unweighted graphs?",
            options: [
                { optionText: "Breadth-first search (BFS)", optionTag: "A" },
                { optionText: "Depth-first search (DFS)", optionTag: "B" },
                { optionText: "Dijkstra’s algorithm", optionTag: "C" },
                { optionText: "Prim’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following best describes a weighted graph?",
            options: [
                { optionText: "Each edge has an associated cost", optionTag: "A" },
                { optionText: "Each node has a unique weight", optionTag: "B" },
                { optionText: "Each cycle has a weight", optionTag: "C" },
                { optionText: "All edges point to root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the degree of a node in a graph?",
            options: [
                { optionText: "Number of edges connected to the node", optionTag: "A" },
                { optionText: "Value of the node", optionTag: "B" },
                { optionText: "Depth of the node", optionTag: "C" },
                { optionText: "Height of the node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the term 'connected graph' mean?",
            options: [
                { optionText: "There is a path between every pair of nodes", optionTag: "A" },
                { optionText: "Every node has the same degree", optionTag: "B" },
                { optionText: "There are no cycles", optionTag: "C" },
                { optionText: "The graph is directed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of an adjacency list for a graph with V vertices and E edges?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E^2)", optionTag: "C" },
                { optionText: "O(VE)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript method is used to iterate through an adjacency list stored as a Map?",
            options: [
                { optionText: ".forEach()", optionTag: "A" },
                { optionText: ".map()", optionTag: "B" },
                { optionText: ".reduce()", optionTag: "C" },
                { optionText: ".filter()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a directed graph, what does an edge represent?",
            options: [
                { optionText: "A one-way connection between two nodes", optionTag: "A" },
                { optionText: "A cycle", optionTag: "B" },
                { optionText: "A weighted edge", optionTag: "C" },
                { optionText: "A node removal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph algorithm visits the deepest child first?",
            options: [
                { optionText: "DFS (Depth-First Search)", optionTag: "A" },
                { optionText: "BFS (Breadth-First Search)", optionTag: "B" },
                { optionText: "Dijkstra", optionTag: "C" },
                { optionText: "Kruskal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is commonly used to implement BFS in graphs?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation is faster for sparse graphs?",
            options: [
                { optionText: "Adjacency list", optionTag: "A" },
                { optionText: "Adjacency matrix", optionTag: "B" },
                { optionText: "Incidence matrix", optionTag: "C" },
                { optionText: "Table lookup", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a DAG?",
            options: [
                { optionText: "Directed Acyclic Graph", optionTag: "A" },
                { optionText: "Double Adjacent Graph", optionTag: "B" },
                { optionText: "Discrete Algebraic Graph", optionTag: "C" },
                { optionText: "Dynamic Algorithmic Grid", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
