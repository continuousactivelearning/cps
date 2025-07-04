import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Greedy Algorithms - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Greedy Algorithms in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "GreedyAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the key idea behind Greedy Algorithms?",
            options: [
                { optionText: "Making the locally optimal choice at each step", optionTag: "A" },
                { optionText: "Trying all possibilities", optionTag: "B" },
                { optionText: "Dividing the problem into subproblems", optionTag: "C" },
                { optionText: "Backtracking to previous steps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems can be solved using a greedy approach?",
            options: [
                { optionText: "Activity Selection Problem", optionTag: "A" },
                { optionText: "Knapsack (fractional)", optionTag: "B" },
                { optionText: "Huffman Coding", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used in greedy algorithms like Huffman coding?",
            options: [
                { optionText: "Priority Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the activity selection problem (when sorted)?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n²)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of knapsack problem can be solved using greedy approach?",
            options: [
                { optionText: "Fractional Knapsack", optionTag: "A" },
                { optionText: "0/1 Knapsack", optionTag: "B" },
                { optionText: "Bounded Knapsack", optionTag: "C" },
                { optionText: "Multi-dimensional Knapsack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical first step in a greedy solution?",
            options: [
                { optionText: "Sort based on some criteria", optionTag: "A" },
                { optionText: "Reverse the input", optionTag: "B" },
                { optionText: "Create a hash map", optionTag: "C" },
                { optionText: "Use recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which greedy algorithm is used to find minimum spanning tree?",
            options: [
                { optionText: "Prim’s Algorithm", optionTag: "A" },
                { optionText: "Kruskal’s Algorithm", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "Bellman-Ford", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the greedy choice in coin change problem (standard denominations)?",
            options: [
                { optionText: "Choose the largest possible coin", optionTag: "A" },
                { optionText: "Choose the smallest coin", optionTag: "B" },
                { optionText: "Choose any coin randomly", optionTag: "C" },
                { optionText: "Divide the amount by 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Does greedy always give optimal solution?",
            options: [
                { optionText: "No, only for specific problems", optionTag: "A" },
                { optionText: "Yes, always", optionTag: "B" },
                { optionText: "Only if data is sorted", optionTag: "C" },
                { optionText: "Only for graph problems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting technique is commonly used in greedy algorithms?",
            options: [
                { optionText: "Custom comparator with std::sort", optionTag: "A" },
                { optionText: "Bubble sort", optionTag: "B" },
                { optionText: "Merge sort", optionTag: "C" },
                { optionText: "Heap sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What property must a problem have for greedy to give the optimal solution?",
            options: [
                { optionText: "Greedy choice property", optionTag: "A" },
                { optionText: "Overlapping subproblems", optionTag: "B" },
                { optionText: "Divide and conquer property", optionTag: "C" },
                { optionText: "Stack behavior", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL container is ideal for implementing Kruskal's algorithm?",
            options: [
                { optionText: "vector and sort()", optionTag: "A" },
                { optionText: "map", optionTag: "B" },
                { optionText: "set", optionTag: "C" },
                { optionText: "queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is **not** typically solved using a greedy algorithm?",
            options: [
                { optionText: "0/1 Knapsack Problem", optionTag: "A" },
                { optionText: "Job Scheduling with Deadlines", optionTag: "B" },
                { optionText: "Minimum Spanning Tree", optionTag: "C" },
                { optionText: "Activity Selection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Huffman coding, what is minimized using the greedy approach?",
            options: [
                { optionText: "Total weighted path length", optionTag: "A" },
                { optionText: "Total characters used", optionTag: "B" },
                { optionText: "Memory usage", optionTag: "C" },
                { optionText: "Execution time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the goal of greedy coloring in graph theory?",
            options: [
                { optionText: "Minimize the number of colors used", optionTag: "A" },
                { optionText: "Maximize edge count", optionTag: "B" },
                { optionText: "Find shortest path", optionTag: "C" },
                { optionText: "Create a cycle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following algorithms is greedy in nature?",
            options: [
                { optionText: "Dijkstra's Algorithm", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Bellman-Ford", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is sorting important in greedy algorithms?",
            options: [
                { optionText: "To select items in correct order of preference", optionTag: "A" },
                { optionText: "To increase time complexity", optionTag: "B" },
                { optionText: "To avoid recursion", optionTag: "C" },
                { optionText: "It is not important", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Kruskal’s algorithm (with union-find)?",
            options: [
                { optionText: "O(E log E)", optionTag: "A" },
                { optionText: "O(V²)", optionTag: "B" },
                { optionText: "O(EV)", optionTag: "C" },
                { optionText: "O(E)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ header is needed for std::priority_queue?",
            options: [
                { optionText: "<queue>", optionTag: "A" },
                { optionText: "<stack>", optionTag: "B" },
                { optionText: "<set>", optionTag: "C" },
                { optionText: "<algorithm>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Greedy algorithms fail when the problem lacks which property?",
            options: [
                { optionText: "Greedy choice property", optionTag: "A" },
                { optionText: "Large input", optionTag: "B" },
                { optionText: "Array data", optionTag: "C" },
                { optionText: "Recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
