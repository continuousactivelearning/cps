import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Prim's Algorithm - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Prim's Algorithm in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "PrimsAlgorithm"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main purpose of Prim's Algorithm?",
            options: [
                { optionText: "To find Minimum Spanning Tree (MST)", optionTag: "A" },
                { optionText: "To find shortest path", optionTag: "B" },
                { optionText: "To detect cycle", optionTag: "C" },
                { optionText: "To perform DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim’s Algorithm starts from:",
            options: [
                { optionText: "An arbitrary vertex", optionTag: "A" },
                { optionText: "The highest weight vertex", optionTag: "B" },
                { optionText: "The leaf node", optionTag: "C" },
                { optionText: "The root node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used to optimize Prim's Algorithm?",
            options: [
                { optionText: "Min-Heap (Priority Queue)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Hash Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Time complexity of Prim’s Algorithm using Min-Heap and Adjacency List is:",
            options: [
                { optionText: "O(E log V)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(V + E)", optionTag: "C" },
                { optionText: "O(E^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Prim’s Algorithm, which edges are considered?",
            options: [
                { optionText: "Edges connecting MST to unvisited vertex", optionTag: "A" },
                { optionText: "All edges", optionTag: "B" },
                { optionText: "Only incoming edges", optionTag: "C" },
                { optionText: "Only outgoing edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim’s Algorithm works only for:",
            options: [
                { optionText: "Undirected weighted graphs", optionTag: "A" },
                { optionText: "Directed unweighted graphs", optionTag: "B" },
                { optionText: "Unweighted graphs", optionTag: "C" },
                { optionText: "Directed acyclic graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which header file is needed for priority_queue in C++?",
            options: [
                { optionText: "<queue>", optionTag: "A" },
                { optionText: "<stack>", optionTag: "B" },
                { optionText: "<map>", optionTag: "C" },
                { optionText: "<algorithm>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim's Algorithm is a type of which approach?",
            options: [
                { optionText: "Greedy", optionTag: "A" },
                { optionText: "Dynamic Programming", optionTag: "B" },
                { optionText: "Divide and Conquer", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If the graph is disconnected, Prim’s Algorithm will:",
            options: [
                { optionText: "Return MST for connected component only", optionTag: "A" },
                { optionText: "Return full MST", optionTag: "B" },
                { optionText: "Go into infinite loop", optionTag: "C" },
                { optionText: "Crash the program", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL is best for representing the graph in Prim’s Algorithm?",
            options: [
                { optionText: "vector<vector<pair<int, int>>>", optionTag: "A" },
                { optionText: "set", optionTag: "B" },
                { optionText: "map", optionTag: "C" },
                { optionText: "array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim’s Algorithm will always produce:",
            options: [
                { optionText: "A Minimum Spanning Tree", optionTag: "A" },
                { optionText: "A Spanning Forest", optionTag: "B" },
                { optionText: "A Shortest Path Tree", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node is picked in each step of Prim’s Algorithm?",
            options: [
                { optionText: "The one with the minimum edge weight", optionTag: "A" },
                { optionText: "The one with maximum edge weight", optionTag: "B" },
                { optionText: "The first node in the graph", optionTag: "C" },
                { optionText: "The node with no edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which structure is used to keep track of visited nodes in C++?",
            options: [
                { optionText: "vector<bool>", optionTag: "A" },
                { optionText: "queue", optionTag: "B" },
                { optionText: "set", optionTag: "C" },
                { optionText: "priority_queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Prim's Algorithm ensures that the selected edge:",
            options: [
                { optionText: "Has the least weight among all possible edges", optionTag: "A" },
                { optionText: "Has the highest weight", optionTag: "B" },
                { optionText: "Forms a cycle", optionTag: "C" },
                { optionText: "Is a self-loop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you insert the same node multiple times in the priority queue?",
            options: [
                { optionText: "It may reduce efficiency", optionTag: "A" },
                { optionText: "It improves the result", optionTag: "B" },
                { optionText: "It causes error", optionTag: "C" },
                { optionText: "It doesn't affect the algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the weight of MST for a graph with no edges?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "Infinity", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Prim's Algorithm work on directed graphs?",
            options: [
                { optionText: "No", optionTag: "A" },
                { optionText: "Yes, always", optionTag: "B" },
                { optionText: "Only if all edges are bidirectional", optionTag: "C" },
                { optionText: "Yes, if weights are positive", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL is used to store pairs of (weight, vertex)?",
            options: [
                { optionText: "pair<int, int>", optionTag: "A" },
                { optionText: "tuple<int, int>", optionTag: "B" },
                { optionText: "map<int, int>", optionTag: "C" },
                { optionText: "vector<int>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "The MST obtained by Prim’s Algorithm is:",
            options: [
                { optionText: "Always unique for distinct edge weights", optionTag: "A" },
                { optionText: "Never unique", optionTag: "B" },
                { optionText: "Depends on starting node", optionTag: "C" },
                { optionText: "Random", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which situation can affect the correctness of Prim’s Algorithm?",
            options: [
                { optionText: "Negative edge weights", optionTag: "A" },
                { optionText: "Multiple components", optionTag: "B" },
                { optionText: "Large graph size", optionTag: "C" },
                { optionText: "Loop edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
