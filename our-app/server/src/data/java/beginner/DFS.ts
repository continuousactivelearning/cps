// src/data/java/beginner/depthFirstSearch.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java DFS - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your understanding of Depth-First Search (DFS) basics in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Depth-First Search (DFS)"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What data structure is typically used for DFS?",
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
            questionText: "Which traversal method is DFS most similar to?",
            options: [
                { optionText: "Pre-order traversal", optionTag: "A" },
                { optionText: "Post-order traversal", optionTag: "B" },
                { optionText: "Level-order traversal", optionTag: "C" },
                { optionText: "In-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which approach is commonly used in implementing DFS?",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "Iteration", optionTag: "B" },
                { optionText: "Greedy", optionTag: "C" },
                { optionText: "Divide and Conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS can be used to detect which graph property?",
            options: [
                { optionText: "Cycle", optionTag: "A" },
                { optionText: "Shortest path", optionTag: "B" },
                { optionText: "Minimum spanning tree", optionTag: "C" },
                { optionText: "Connectivity only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of DFS?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(VE)", optionTag: "B" },
                { optionText: "O(V^2)", optionTag: "C" },
                { optionText: "O(E^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS is useful in solving:",
            options: [
                { optionText: "Topological Sorting", optionTag: "A" },
                { optionText: "Shortest Path in Weighted Graphs", optionTag: "B" },
                { optionText: "Minimum Spanning Tree", optionTag: "C" },
                { optionText: "Greedy Algorithms", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be maintained to avoid revisiting nodes?",
            options: [
                { optionText: "Visited array", optionTag: "A" },
                { optionText: "Counter", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Priority Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal uses LIFO order?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Dijkstra", optionTag: "C" },
                { optionText: "Prim's", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DFS, what happens when a dead end is reached?",
            options: [
                { optionText: "Backtrack to previous node", optionTag: "A" },
                { optionText: "Restart", optionTag: "B" },
                { optionText: "Switch to BFS", optionTag: "C" },
                { optionText: "End traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS can be implemented with:",
            options: [
                { optionText: "Stack or Recursion", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Array only", optionTag: "C" },
                { optionText: "Min Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS is best suited for:",
            options: [
                { optionText: "Finding paths", optionTag: "A" },
                { optionText: "Shortest distances", optionTag: "B" },
                { optionText: "Network delays", optionTag: "C" },
                { optionText: "Cost optimization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS can be used for:",
            options: [
                { optionText: "Connected Components", optionTag: "A" },
                { optionText: "MST", optionTag: "B" },
                { optionText: "Path Compression", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal explores as far as possible before backtracking?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Dijkstra", optionTag: "C" },
                { optionText: "Topological", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which one is a DFS application?",
            options: [
                { optionText: "Cycle Detection", optionTag: "A" },
                { optionText: "Path Shortest", optionTag: "B" },
                { optionText: "Minimum Edge", optionTag: "C" },
                { optionText: "All Pairs Shortest Path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DFS visits:",
            options: [
                { optionText: "Deeper nodes before neighbors", optionTag: "A" },
                { optionText: "All neighbors first", optionTag: "B" },
                { optionText: "Only leaves", optionTag: "C" },
                { optionText: "Only root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a graph represented for DFS?",
            options: [
                { optionText: "Adjacency List", optionTag: "A" },
                { optionText: "Priority Queue", optionTag: "B" },
                { optionText: "Tree Structure", optionTag: "C" },
                { optionText: "2D Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal uses recursive call stack?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "Prim's", optionTag: "C" },
                { optionText: "Dijkstra", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case DFS will not terminate?",
            options: [
                { optionText: "Cycle without visited check", optionTag: "A" },
                { optionText: "Empty graph", optionTag: "B" },
                { optionText: "Disconnected graph", optionTag: "C" },
                { optionText: "Single node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many times a node is visited in DFS?",
            options: [
                { optionText: "Once", optionTag: "A" },
                { optionText: "Twice", optionTag: "B" },
                { optionText: "Depends on depth", optionTag: "C" },
                { optionText: "Infinite", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;