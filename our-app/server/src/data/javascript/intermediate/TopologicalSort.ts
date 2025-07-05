import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Topological Sort - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate knowledge of Topological Sort using JavaScript, including algorithms, applications, and graph properties.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "TopologicalSort"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What type of graph does Topological Sort apply to?",
            options: [
                { optionText: "Directed Acyclic Graph (DAG)", optionTag: "A" },
                { optionText: "Undirected Graph", optionTag: "B" },
                { optionText: "Cyclic Graph", optionTag: "C" },
                { optionText: "Weighted Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used for implementing Kahn's algorithm?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm uses in-degree to perform Topological Sort?",
            options: [
                { optionText: "Kahn's algorithm", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Bellman-Ford", optionTag: "C" },
                { optionText: "Prim's", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will Topological Sort output for a graph with a cycle?",
            options: [
                { optionText: "It cannot perform the sort", optionTag: "A" },
                { optionText: "A sorted list", optionTag: "B" },
                { optionText: "An error-free empty list", optionTag: "C" },
                { optionText: "DFS traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript object is ideal for representing a graph adjacency list?",
            options: [
                { optionText: "Map", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Object", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Kahn's algorithm?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E log V)", optionTag: "C" },
                { optionText: "O(VE)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS-based Topological Sort uses which data structure?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Priority Queue", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Topological Sort, a vertex u must appear before vertex v if:",
            options: [
                { optionText: "There is a directed edge u → v", optionTag: "A" },
                { optionText: "There is a directed edge v → u", optionTag: "B" },
                { optionText: "u and v are not connected", optionTag: "C" },
                { optionText: "u and v form a cycle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the in-degree of a node represent?",
            options: [
                { optionText: "Number of incoming edges", optionTag: "A" },
                { optionText: "Number of outgoing edges", optionTag: "B" },
                { optionText: "Total edges", optionTag: "C" },
                { optionText: "Depth of node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of Topological Sort?",
            options: [
                { optionText: "A linear ordering of nodes", optionTag: "A" },
                { optionText: "Cycle detection", optionTag: "B" },
                { optionText: "Graph traversal path", optionTag: "C" },
                { optionText: "Minimum spanning tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem can Topological Sort solve?",
            options: [
                { optionText: "Task scheduling", optionTag: "A" },
                { optionText: "Shortest path", optionTag: "B" },
                { optionText: "Network flow", optionTag: "C" },
                { optionText: "Cycle detection in undirected graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition must be met for a graph to have a valid topological ordering?",
            options: [
                { optionText: "Graph must be acyclic and directed", optionTag: "A" },
                { optionText: "Graph must be cyclic", optionTag: "B" },
                { optionText: "Graph must be undirected", optionTag: "C" },
                { optionText: "Graph must be weighted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can a disconnected DAG be topologically sorted?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if connected", optionTag: "C" },
                { optionText: "Only if it has cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Topological sort is unique if:",
            options: [
                { optionText: "There is exactly one linear ordering", optionTag: "A" },
                { optionText: "Graph is cyclic", optionTag: "B" },
                { optionText: "Graph has only one edge", optionTag: "C" },
                { optionText: "Graph has equal in-degrees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If multiple nodes have in-degree 0, Kahn's algorithm will:",
            options: [
                { optionText: "Choose any of them", optionTag: "A" },
                { optionText: "Throw error", optionTag: "B" },
                { optionText: "Always choose the largest one", optionTag: "C" },
                { optionText: "Fails to complete", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Topological Sort is mostly used in:",
            options: [
                { optionText: "Job scheduling", optionTag: "A" },
                { optionText: "Game theory", optionTag: "B" },
                { optionText: "Web scraping", optionTag: "C" },
                { optionText: "Sorting arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS-based topological sort works by:",
            options: [
                { optionText: "Post-order traversal", optionTag: "A" },
                { optionText: "Pre-order traversal", optionTag: "B" },
                { optionText: "In-order traversal", optionTag: "C" },
                { optionText: "Breadth-first traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does it mean if Kahn’s algorithm cannot complete?",
            options: [
                { optionText: "Graph contains a cycle", optionTag: "A" },
                { optionText: "Graph is disconnected", optionTag: "B" },
                { optionText: "All nodes have 0 in-degree", optionTag: "C" },
                { optionText: "There are no edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm is similar in behavior to topological sort?",
            options: [
                { optionText: "Stable sorting", optionTag: "A" },
                { optionText: "Dependency-based sorting", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Counting Sort", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which algorithm can be used to detect a cycle in a graph during Topological Sort?",
            options: [
                { optionText: "DFS with visited and recursion stack", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Prim’s Algorithm", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
