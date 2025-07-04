import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Topological Sort - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Topological Sorting in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "TopologicalSort"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Topological Sort can be performed only on which type of graph?",
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
            questionText: "What is the key idea behind topological sorting?",
            options: [
                { optionText: "Ordering vertices based on dependencies", optionTag: "A" },
                { optionText: "Finding shortest path", optionTag: "B" },
                { optionText: "Checking for cycles", optionTag: "C" },
                { optionText: "Coloring vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal technique is often used for Topological Sort?",
            options: [
                { optionText: "Depth First Search (DFS)", optionTag: "A" },
                { optionText: "Breadth First Search (BFS)", optionTag: "B" },
                { optionText: "Inorder Traversal", optionTag: "C" },
                { optionText: "Level Order Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is used to implement DFS-based topological sort?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DFS-based topological sort, when is a node pushed to the stack?",
            options: [
                { optionText: "After visiting all its neighbors", optionTag: "A" },
                { optionText: "Before visiting neighbors", optionTag: "B" },
                { optionText: "Whenever it is visited", optionTag: "C" },
                { optionText: "Only if it has no edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a valid topological sort of a graph?",
            options: [
                { optionText: "All edges go from earlier to later in the order", optionTag: "A" },
                { optionText: "All edges go from later to earlier in the order", optionTag: "B" },
                { optionText: "Edges can go in any direction", optionTag: "C" },
                { optionText: "There should be no edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does Kahn’s algorithm use to keep track of zero in-degree nodes?",
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
            questionText: "Which of these is required to perform Kahn’s Algorithm?",
            options: [
                { optionText: "In-degree of each node", optionTag: "A" },
                { optionText: "Out-degree of each node", optionTag: "B" },
                { optionText: "Edge weights", optionTag: "C" },
                { optionText: "DFS traversal list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of topological sort using DFS?",
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
            questionText: "What happens if the graph contains a cycle during topological sort?",
            options: [
                { optionText: "Sort is not possible", optionTag: "A" },
                { optionText: "Cycle will be removed", optionTag: "B" },
                { optionText: "A valid order is still returned", optionTag: "C" },
                { optionText: "Graph becomes disconnected", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a real-life application of topological sort?",
            options: [
                { optionText: "Task Scheduling", optionTag: "A" },
                { optionText: "Shortest path finding", optionTag: "B" },
                { optionText: "Image processing", optionTag: "C" },
                { optionText: "Binary search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of topological sort for a DAG?",
            options: [
                { optionText: "A linear ordering of vertices", optionTag: "A" },
                { optionText: "A cycle", optionTag: "B" },
                { optionText: "A tree", optionTag: "C" },
                { optionText: "Shortest path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following algorithms can detect a cycle in a graph?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Kahn’s Algorithm (with in-degree check)", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Topological sort is not defined for which of the following?",
            options: [
                { optionText: "Undirected Graphs", optionTag: "A" },
                { optionText: "Directed Acyclic Graphs", optionTag: "B" },
                { optionText: "Trees", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can topological sort help in compiler design?",
            options: [
                { optionText: "To schedule code compilation order", optionTag: "A" },
                { optionText: "To check syntax errors", optionTag: "B" },
                { optionText: "To optimize memory usage", optionTag: "C" },
                { optionText: "To generate random code", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these algorithms is NOT directly used in topological sort?",
            options: [
                { optionText: "Dijkstra’s algorithm", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Kahn’s algorithm", optionTag: "C" },
                { optionText: "BFS (with in-degree)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which STL container is best for storing the output of topological sort?",
            options: [
                { optionText: "vector", optionTag: "A" },
                { optionText: "set", optionTag: "B" },
                { optionText: "unordered_map", optionTag: "C" },
                { optionText: "priority_queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition is true for topological sort output?",
            options: [
                { optionText: "u appears before v if there is an edge u → v", optionTag: "A" },
                { optionText: "v appears before u if there is an edge u → v", optionTag: "B" },
                { optionText: "u and v can appear in any order", optionTag: "C" },
                { optionText: "v must come first in every case", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Topological sorting is mainly used in which kind of problems?",
            options: [
                { optionText: "Dependency resolution", optionTag: "A" },
                { optionText: "Cycle detection", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Sorting numbers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
