import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Prim's Algorithm - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of Prim's Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "PrimsAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which data structure gives the best performance for Prim’s algorithm using an adjacency list?",
            options: [
                { optionText: "Min Heap", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Linked List", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Prim's algorithm using a binary heap and adjacency list?",
            options: [
                { optionText: "O(E log V)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E)", optionTag: "C" },
                { optionText: "O(V log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim's algorithm is best suited for which type of graph?",
            options: [
                { optionText: "Dense Graph", optionTag: "A" },
                { optionText: "Sparse Graph", optionTag: "B" },
                { optionText: "Directed Graph", optionTag: "C" },
                { optionText: "Cyclic Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim's algorithm uses which technique?",
            options: [
                { optionText: "Greedy", optionTag: "A" },
                { optionText: "Divide and Conquer", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Dynamic Programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition ensures a safe edge is added in Prim’s algorithm?",
            options: [
                { optionText: "Minimum weight edge that connects a new vertex to MST", optionTag: "A" },
                { optionText: "Any edge not forming a cycle", optionTag: "B" },
                { optionText: "Maximum weight edge", optionTag: "C" },
                { optionText: "Minimum degree node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many edges will the MST produced by Prim's algorithm contain for a connected graph with V vertices?",
            options: [
                { optionText: "V - 1", optionTag: "A" },
                { optionText: "V", optionTag: "B" },
                { optionText: "E - V + 1", optionTag: "C" },
                { optionText: "E", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Prim’s algorithm, what happens if we use an adjacency matrix without a priority queue?",
            options: [
                { optionText: "Time complexity becomes O(V^2)", optionTag: "A" },
                { optionText: "Time complexity becomes O(log V)", optionTag: "B" },
                { optionText: "Time complexity becomes O(E log V)", optionTag: "C" },
                { optionText: "It becomes Dijkstra’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim's algorithm can be used to find what kind of spanning tree?",
            options: [
                { optionText: "Minimum Spanning Tree", optionTag: "A" },
                { optionText: "Maximum Spanning Tree", optionTag: "B" },
                { optionText: "DFS Tree", optionTag: "C" },
                { optionText: "BFS Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not required in Prim’s algorithm implementation using priority queue?",
            options: [
                { optionText: "Visited array", optionTag: "A" },
                { optionText: "Parent array", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Color array", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which of the following may improve the runtime of Prim’s algorithm further?",
            options: [
                { optionText: "Fibonacci heap", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of edges required to connect all vertices using Prim's algorithm?",
            options: [
                { optionText: "V - 1", optionTag: "A" },
                { optionText: "V", optionTag: "B" },
                { optionText: "E", optionTag: "C" },
                { optionText: "V + 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Prim’s algorithm handle negative edge weights?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if all are equal", optionTag: "C" },
                { optionText: "Only positive allowed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the priority queue store in Prim’s algorithm?",
            options: [
                { optionText: "Pair of (weight, vertex)", optionTag: "A" },
                { optionText: "Pair of (parent, vertex)", optionTag: "B" },
                { optionText: "Adjacency matrix row", optionTag: "C" },
                { optionText: "List of vertices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case space complexity of Prim's algorithm?",
            options: [
                { optionText: "O(V + E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(log V)", optionTag: "C" },
                { optionText: "O(E log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Prim’s algorithm, what happens if multiple edges have same weights?",
            options: [
                { optionText: "Any of them can be chosen", optionTag: "A" },
                { optionText: "Algorithm fails", optionTag: "B" },
                { optionText: "It forms a cycle", optionTag: "C" },
                { optionText: "Results in incomplete MST", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph representation results in higher memory usage for sparse graphs in Prim's?",
            options: [
                { optionText: "Adjacency Matrix", optionTag: "A" },
                { optionText: "Adjacency List", optionTag: "B" },
                { optionText: "Edge List", optionTag: "C" },
                { optionText: "Priority Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of graph does Prim’s algorithm work on?",
            options: [
                { optionText: "Undirected, connected", optionTag: "A" },
                { optionText: "Directed", optionTag: "B" },
                { optionText: "Disconnected", optionTag: "C" },
                { optionText: "Multigraph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be initialized for the starting vertex in Prim's algorithm?",
            options: [
                { optionText: "Weight = 0", optionTag: "A" },
                { optionText: "Weight = ∞", optionTag: "B" },
                { optionText: "Visited = false", optionTag: "C" },
                { optionText: "Parent = NULL", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many vertices are explored in Prim’s algorithm?",
            options: [
                { optionText: "All vertices", optionTag: "A" },
                { optionText: "Only neighbors of root", optionTag: "B" },
                { optionText: "Half the vertices", optionTag: "C" },
                { optionText: "All but one", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim's and Dijkstra's algorithms are similar in that they:",
            options: [
                { optionText: "Use a priority queue", optionTag: "A" },
                { optionText: "Find shortest paths", optionTag: "B" },
                { optionText: "Work on directed graphs", optionTag: "C" },
                { optionText: "Use DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
