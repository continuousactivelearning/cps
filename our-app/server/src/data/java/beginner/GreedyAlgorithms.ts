// src/data/java/beginner/greedyAlgorithms.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Greedy Algorithms - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz checks your basic understanding of greedy algorithm strategies in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Greedy Algorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main principle of greedy algorithms?",
            options: [
                { optionText: "Choose the best option at each step", optionTag: "A" },
                { optionText: "Backtrack and try all paths", optionTag: "B" },
                { optionText: "Divide and solve sub-problems", optionTag: "C" },
                { optionText: "Memoize results for reuse", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these problems can be solved using a greedy algorithm?",
            options: [
                { optionText: "Activity Selection Problem", optionTag: "A" },
                { optionText: "Towers of Hanoi", optionTag: "B" },
                { optionText: "N-Queens", optionTag: "C" },
                { optionText: "Knapsack Problem (0/1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used in greedy algorithms like Huffman coding?",
            options: [
                { optionText: "Priority Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Linked List", optionTag: "C" },
                { optionText: "Deque", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In greedy algorithms, we:",
            options: [
                { optionText: "Make locally optimal choices", optionTag: "A" },
                { optionText: "Always find global optimum", optionTag: "B" },
                { optionText: "Backtrack frequently", optionTag: "C" },
                { optionText: "Store intermediate results", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm helps in solving the Activity Selection Problem?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Heap Sort", optionTag: "C" },
                { optionText: "Quick Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the greedy algorithm for fractional knapsack?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Greedy algorithms work well when:",
            options: [
                { optionText: "Greedy choice leads to global solution", optionTag: "A" },
                { optionText: "All options must be explored", optionTag: "B" },
                { optionText: "We need recursion", optionTag: "C" },
                { optionText: "Solutions depend on future steps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph algorithm uses greedy strategy?",
            options: [
                { optionText: "Prim's Algorithm", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Bellman-Ford", optionTag: "C" },
                { optionText: "Floyd-Warshall", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can greedy algorithms guarantee the optimal solution for all problems?",
            options: [
                { optionText: "No", optionTag: "A" },
                { optionText: "Yes", optionTag: "B" },
                { optionText: "Only in dynamic programming", optionTag: "C" },
                { optionText: "Depends on recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a greedy approach, decisions are made based on:",
            options: [
                { optionText: "Current state only", optionTag: "A" },
                { optionText: "Past and future states", optionTag: "B" },
                { optionText: "Backtracking steps", optionTag: "C" },
                { optionText: "Recursive tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the greedy strategy lack compared to dynamic programming?",
            options: [
                { optionText: "Memory of past decisions", optionTag: "A" },
                { optionText: "Speed", optionTag: "B" },
                { optionText: "Recursion", optionTag: "C" },
                { optionText: "Optimal substructure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition is essential for greedy algorithms to work correctly?",
            options: [
                { optionText: "Greedy choice property", optionTag: "A" },
                { optionText: "Recursive step", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Memoization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm constructs Huffman coding?",
            options: [
                { optionText: "Greedy", optionTag: "A" },
                { optionText: "Dynamic", optionTag: "B" },
                { optionText: "Divide & Conquer", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Greedy algorithms solve problems by:",
            options: [
                { optionText: "Making best local decisions", optionTag: "A" },
                { optionText: "Exploring all possibilities", optionTag: "B" },
                { optionText: "Building state-space trees", optionTag: "C" },
                { optionText: "Trying random approaches", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not solved by greedy algorithms?",
            options: [
                { optionText: "N-Queens Problem", optionTag: "A" },
                { optionText: "Huffman Coding", optionTag: "B" },
                { optionText: "Kruskal's Algorithm", optionTag: "C" },
                { optionText: "Prim's Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "The greedy algorithm may fail when:",
            options: [
                { optionText: "Global optimality is not guaranteed", optionTag: "A" },
                { optionText: "It is used for sorting", optionTag: "B" },
                { optionText: "The input is unsorted", optionTag: "C" },
                { optionText: "Used on small inputs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property must a problem satisfy for greedy to work?",
            options: [
                { optionText: "Greedy choice & optimal substructure", optionTag: "A" },
                { optionText: "Recursive & dynamic", optionTag: "B" },
                { optionText: "Brute-force", optionTag: "C" },
                { optionText: "Memoization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the goal of a greedy algorithm?",
            options: [
                { optionText: "Find best immediate solution", optionTag: "A" },
                { optionText: "Check all solutions", optionTag: "B" },
                { optionText: "Backtrack for best result", optionTag: "C" },
                { optionText: "Avoid optimal result", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Greedy algorithms are generally:",
            options: [
                { optionText: "Fast and easy to implement", optionTag: "A" },
                { optionText: "Always incorrect", optionTag: "B" },
                { optionText: "Slow", optionTag: "C" },
                { optionText: "Dynamic in nature", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;