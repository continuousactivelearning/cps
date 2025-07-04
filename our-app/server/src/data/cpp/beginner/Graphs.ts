import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Graphs - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic knowledge of Graphs in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Graphs"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a graph in data structures?",
            options: [
                { optionText: "A set of nodes and edges", optionTag: "A" },
                { optionText: "A type of array", optionTag: "B" },
                { optionText: "A collection of stacks", optionTag: "C" },
                { optionText: "A type of queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation uses a 2D array?",
            options: [
                { optionText: "Adjacency Matrix", optionTag: "A" },
                { optionText: "Adjacency List", optionTag: "B" },
                { optionText: "Edge List", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to visit all vertices in a graph?",
            options: [
                { optionText: "DFS or BFS", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Level Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of an adjacency matrix for a graph with n vertices?",
            options: [
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^3)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which STL container is ideal for representing an adjacency list?",
            options: [
                { optionText: "vector<vector<int>>", optionTag: "A" },
                { optionText: "stack", optionTag: "B" },
                { optionText: "queue", optionTag: "C" },
                { optionText: "set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal uses a queue?",
            options: [
                { optionText: "BFS", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Postorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal uses a stack or recursion?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Level order", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of BFS in an adjacency list graph?",
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
            questionText: "Which of these is an undirected graph?",
            options: [
                { optionText: "Edges have no direction", optionTag: "A" },
                { optionText: "Edges go from one vertex to another", optionTag: "B" },
                { optionText: "Only source node exists", optionTag: "C" },
                { optionText: "Self loops are allowed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a cycle in a graph?",
            options: [
                { optionText: "Path that starts and ends at same vertex", optionTag: "A" },
                { optionText: "Path with only one edge", optionTag: "B" },
                { optionText: "Disconnected vertices", optionTag: "C" },
                { optionText: "A tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph has all vertices connected with each other?",
            options: [
                { optionText: "Complete Graph", optionTag: "A" },
                { optionText: "Tree", optionTag: "B" },
                { optionText: "Sparse Graph", optionTag: "C" },
                { optionText: "Cyclic Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm can detect a cycle in a graph?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Quick Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is used for BFS?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Priority Queue", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a disconnected graph?",
            options: [
                { optionText: "Some vertices are not reachable", optionTag: "A" },
                { optionText: "All vertices have self-loops", optionTag: "B" },
                { optionText: "It has no vertices", optionTag: "C" },
                { optionText: "It has only one edge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which one of the following is true about trees and graphs?",
            options: [
                { optionText: "All trees are graphs", optionTag: "A" },
                { optionText: "All graphs are trees", optionTag: "B" },
                { optionText: "Trees have cycles", optionTag: "C" },
                { optionText: "Graphs must have roots", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of edges in a simple undirected graph with n vertices?",
            options: [
                { optionText: "n(n-1)/2", optionTag: "A" },
                { optionText: "n(n+1)/2", optionTag: "B" },
                { optionText: "n^2", optionTag: "C" },
                { optionText: "n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does DFS stand for?",
            options: [
                { optionText: "Depth First Search", optionTag: "A" },
                { optionText: "Data Find Sequence", optionTag: "B" },
                { optionText: "Digital File Search", optionTag: "C" },
                { optionText: "Depth Factor Series", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is used to implement DFS?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of DFS in adjacency list representation?",
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
            questionText: "Which condition indicates a graph is cyclic?",
            options: [
                { optionText: "DFS finds a back edge", optionTag: "A" },
                { optionText: "BFS visits same node twice", optionTag: "B" },
                { optionText: "Root is missing", optionTag: "C" },
                { optionText: "All nodes have degree 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
