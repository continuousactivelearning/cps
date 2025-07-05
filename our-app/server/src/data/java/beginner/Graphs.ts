// src/data/java/beginner/graphs.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Graphs - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your basic understanding of Graphs in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Graphs"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a graph?",
            options: [
                { optionText: "A set of nodes and edges", optionTag: "A" },
                { optionText: "A list of arrays", optionTag: "B" },
                { optionText: "A heap structure", optionTag: "C" },
                { optionText: "A matrix of characters", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What are the main components of a graph?",
            options: [
                { optionText: "Vertices and Edges", optionTag: "A" },
                { optionText: "Nodes and Trees", optionTag: "B" },
                { optionText: "Stacks and Queues", optionTag: "C" },
                { optionText: "Lists and Arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a type of graph?",
            options: [
                { optionText: "Directed and Undirected", optionTag: "A" },
                { optionText: "Positive and Negative", optionTag: "B" },
                { optionText: "Linear and Non-linear", optionTag: "C" },
                { optionText: "Sorted and Unsorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is an adjacency matrix?",
            options: [
                { optionText: "2D array to represent a graph", optionTag: "A" },
                { optionText: "Stack implementation", optionTag: "B" },
                { optionText: "Queue implementation", optionTag: "C" },
                { optionText: "Tree structure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is an adjacency list?",
            options: [
                { optionText: "List storing neighbors of each vertex", optionTag: "A" },
                { optionText: "List of stacks", optionTag: "B" },
                { optionText: "Queue of queues", optionTag: "C" },
                { optionText: "Heap of arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is best for sparse graphs?",
            options: [
                { optionText: "Adjacency List", optionTag: "A" },
                { optionText: "Adjacency Matrix", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal method uses a queue?",
            options: [
                { optionText: "Breadth-First Search (BFS)", optionTag: "A" },
                { optionText: "Depth-First Search (DFS)", optionTag: "B" },
                { optionText: "Inorder Traversal", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal method uses a stack or recursion?",
            options: [
                { optionText: "Depth-First Search (DFS)", optionTag: "A" },
                { optionText: "Breadth-First Search (BFS)", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Insertion Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In an undirected graph, how many directions do edges have?",
            options: [
                { optionText: "Two", optionTag: "A" },
                { optionText: "One", optionTag: "B" },
                { optionText: "None", optionTag: "C" },
                { optionText: "Infinite", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the degree of a vertex?",
            options: [
                { optionText: "Number of edges connected to it", optionTag: "A" },
                { optionText: "Its index in the array", optionTag: "B" },
                { optionText: "Number of neighbors in a tree", optionTag: "C" },
                { optionText: "Height of the vertex", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a path in a graph?",
            options: [
                { optionText: "A sequence of vertices connected by edges", optionTag: "A" },
                { optionText: "Only the shortest route", optionTag: "B" },
                { optionText: "Only cyclic sequence", optionTag: "C" },
                { optionText: "Group of disconnected nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used to find shortest paths in a graph?",
            options: [
                { optionText: "Dijkstra's Algorithm", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "Stack Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph has no cycles?",
            options: [
                { optionText: "Acyclic Graph", optionTag: "A" },
                { optionText: "Cyclic Graph", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java class can represent graphs?",
            options: [
                { optionText: "HashMap with List", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is not used for graph traversal?",
            options: [
                { optionText: "Heap Sort", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "BFS", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph has both directed and undirected edges?",
            options: [
                { optionText: "Mixed Graph", optionTag: "A" },
                { optionText: "Simple Graph", optionTag: "B" },
                { optionText: "Complete Graph", optionTag: "C" },
                { optionText: "Cyclic Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of edges in a simple undirected graph with n vertices?",
            options: [
                { optionText: "n(n-1)/2", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "2n", optionTag: "C" },
                { optionText: "n(n+1)/2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "A graph without any edges is called:",
            options: [
                { optionText: "Null Graph", optionTag: "A" },
                { optionText: "Empty Graph", optionTag: "B" },
                { optionText: "Zero Graph", optionTag: "C" },
                { optionText: "Trivial Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In an adjacency list, each vertex stores:",
            options: [
                { optionText: "A list of its adjacent vertices", optionTag: "A" },
                { optionText: "Its value only", optionTag: "B" },
                { optionText: "The root", optionTag: "C" },
                { optionText: "Parent node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;