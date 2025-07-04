// src/data/java/beginner/topological_sort.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Topological Sort - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz checks your understanding of Topological Sorting in Directed Acyclic Graphs (DAGs).",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Topological Sort"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What kind of graph is required for topological sorting?",
            options: [
                { optionText: "Directed Acyclic Graph", optionTag: "A" },
                { optionText: "Undirected Graph", optionTag: "B" },
                { optionText: "Complete Graph", optionTag: "C" },
                { optionText: "Cyclic Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following algorithms can be used for topological sort?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Dijkstra", optionTag: "C" },
                { optionText: "Kruskal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is used to store the result of a topological sort?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "ArrayList", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following indicates that topological sort is not possible?",
            options: [
                { optionText: "Presence of a cycle", optionTag: "A" },
                { optionText: "Disconnected graph", optionTag: "B" },
                { optionText: "Too many vertices", optionTag: "C" },
                { optionText: "Negative weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is true about in-degree in topological sort?",
            options: [
                { optionText: "Vertices with in-degree 0 are processed first", optionTag: "A" },
                { optionText: "All vertices must have equal in-degree", optionTag: "B" },
                { optionText: "In-degree doesn't affect sorting", optionTag: "C" },
                { optionText: "In-degree must be 1 for all nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting method uses Kahn’s Algorithm?",
            options: [
                { optionText: "Topological Sort", optionTag: "A" },
                { optionText: "Heap Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
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
            questionText: "Topological sorting is mainly used in:",
            options: [
                { optionText: "Task scheduling", optionTag: "A" },
                { optionText: "Shortest path", optionTag: "B" },
                { optionText: "Minimum spanning tree", optionTag: "C" },
                { optionText: "Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Topological sort can be performed only if the graph is:",
            options: [
                { optionText: "Acyclic", optionTag: "A" },
                { optionText: "Cyclic", optionTag: "B" },
                { optionText: "Connected", optionTag: "C" },
                { optionText: "Unweighted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If graph has n nodes, what should be the size of result in topological sort?",
            options: [
                { optionText: "n", optionTag: "A" },
                { optionText: "n+1", optionTag: "B" },
                { optionText: "n-1", optionTag: "C" },
                { optionText: "Depends on cycles", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when a vertex has multiple outgoing edges in topological sort?",
            options: [
                { optionText: "All outgoing edges are processed", optionTag: "A" },
                { optionText: "Only one edge is processed", optionTag: "B" },
                { optionText: "Sorting stops", optionTag: "C" },
                { optionText: "DFS restarts", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DFS-based topological sort, when do we push the vertex to stack?",
            options: [
                { optionText: "After visiting all adjacent vertices", optionTag: "A" },
                { optionText: "Before visiting its children", optionTag: "B" },
                { optionText: "When it's the root", optionTag: "C" },
                { optionText: "Randomly", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Kahn’s algorithm, what triggers the next vertex to process?",
            options: [
                { optionText: "In-degree becomes 0", optionTag: "A" },
                { optionText: "Out-degree increases", optionTag: "B" },
                { optionText: "DFS completes", optionTag: "C" },
                { optionText: "Edge weight is positive", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a practical use case of topological sort?",
            options: [
                { optionText: "Build dependency resolution", optionTag: "A" },
                { optionText: "Shortest path", optionTag: "B" },
                { optionText: "Sorting integers", optionTag: "C" },
                { optionText: "Database indexing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of edge causes a cycle in DFS?",
            options: [
                { optionText: "Back edge", optionTag: "A" },
                { optionText: "Forward edge", optionTag: "B" },
                { optionText: "Cross edge", optionTag: "C" },
                { optionText: "Tree edge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Topological sort result is not unique if:",
            options: [
                { optionText: "There are multiple sources", optionTag: "A" },
                { optionText: "Graph is disconnected", optionTag: "B" },
                { optionText: "Edges are weighted", optionTag: "C" },
                { optionText: "Graph is cyclic", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which edge types are safe in topological sort DFS?",
            options: [
                { optionText: "Tree and forward edges", optionTag: "A" },
                { optionText: "Back edges only", optionTag: "B" },
                { optionText: "Cross edges only", optionTag: "C" },
                { optionText: "All edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does topological sort order represent in a scheduling problem?",
            options: [
                { optionText: "Execution sequence", optionTag: "A" },
                { optionText: "Frequency of task", optionTag: "B" },
                { optionText: "Priority", optionTag: "C" },
                { optionText: "Weight", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In topological sort using Kahn’s algorithm, which data structure is used?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does an in-degree of 0 mean in topological sort?",
            options: [
                { optionText: "No dependencies", optionTag: "A" },
                { optionText: "All tasks completed", optionTag: "B" },
                { optionText: "Part of a cycle", optionTag: "C" },
                { optionText: "Disconnected node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;