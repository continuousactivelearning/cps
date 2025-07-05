// src/data/java/beginner/dynamic_programming.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Dynamic Programming - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your basic understanding of Dynamic Programming in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Dynamic Programming"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the key idea behind dynamic programming?",
            options: [
                { optionText: "Solving overlapping subproblems", optionTag: "A" },
                { optionText: "Dividing array elements", optionTag: "B" },
                { optionText: "Looping through data", optionTag: "C" },
                { optionText: "Using pointers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a classic dynamic programming problem?",
            options: [
                { optionText: "Fibonacci sequence", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "DFS traversal", optionTag: "C" },
                { optionText: "Sorting array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is memoization?",
            options: [
                { optionText: "Storing results to avoid recomputation", optionTag: "A" },
                { optionText: "Deleting memory", optionTag: "B" },
                { optionText: "Loop optimization", optionTag: "C" },
                { optionText: "Recursion depth limit", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dynamic programming is useful when a problem has:",
            options: [
                { optionText: "Overlapping subproblems", optionTag: "A" },
                { optionText: "Sorted input", optionTag: "B" },
                { optionText: "Graph structure", optionTag: "C" },
                { optionText: "Binary values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used in dynamic programming?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Linked List", optionTag: "B" },
                { optionText: "Tree", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the 'bottom-up' approach in DP mean?",
            options: [
                { optionText: "Solving smaller subproblems first", optionTag: "A" },
                { optionText: "Using recursion directly", optionTag: "B" },
                { optionText: "Skipping subproblems", optionTag: "C" },
                { optionText: "Always using stacks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of computing the nth Fibonacci number using DP?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(2^n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these problems can be solved using DP?",
            options: [
                { optionText: "0/1 Knapsack", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "BFS traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DP, what is the purpose of a table or array?",
            options: [
                { optionText: "Store intermediate results", optionTag: "A" },
                { optionText: "Store user input", optionTag: "B" },
                { optionText: "Hold temporary files", optionTag: "C" },
                { optionText: "Draw diagrams", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java collection can also be used in place of arrays for DP?",
            options: [
                { optionText: "HashMap", optionTag: "A" },
                { optionText: "TreeMap", optionTag: "B" },
                { optionText: "PriorityQueue", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In memoization, where are results usually stored?",
            options: [
                { optionText: "In a cache or array", optionTag: "A" },
                { optionText: "In the call stack", optionTag: "B" },
                { optionText: "In a file", optionTag: "C" },
                { optionText: "In recursion itself", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a bottom-up approach?",
            options: [
                { optionText: "Tabulation", optionTag: "A" },
                { optionText: "Memoization", optionTag: "B" },
                { optionText: "Recursion", optionTag: "C" },
                { optionText: "Iteration", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of algorithm is Dynamic Programming?",
            options: [
                { optionText: "Optimization algorithm", optionTag: "A" },
                { optionText: "Sorting algorithm", optionTag: "B" },
                { optionText: "Random algorithm", optionTag: "C" },
                { optionText: "Recursive parser", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem does NOT require DP?",
            options: [
                { optionText: "Linear Search", optionTag: "A" },
                { optionText: "Fibonacci", optionTag: "B" },
                { optionText: "0/1 Knapsack", optionTag: "C" },
                { optionText: "Edit Distance", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Dynamic Programming avoids:",
            options: [
                { optionText: "Recomputing solutions to subproblems", optionTag: "A" },
                { optionText: "Recursion", optionTag: "B" },
                { optionText: "Iteration", optionTag: "C" },
                { optionText: "Input checking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is faster for large DP problems?",
            options: [
                { optionText: "Tabulation", optionTag: "A" },
                { optionText: "Memoization", optionTag: "B" },
                { optionText: "Brute Force", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Tabulation uses:",
            options: [
                { optionText: "Iteration", optionTag: "A" },
                { optionText: "Recursion", optionTag: "B" },
                { optionText: "Memoization", optionTag: "C" },
                { optionText: "Divide and Conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can dynamic programming be applied to tree problems?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in graphs", optionTag: "C" },
                { optionText: "Only in arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does DP differ from divide-and-conquer?",
            options: [
                { optionText: "DP reuses solutions; divide-and-conquer does not", optionTag: "A" },
                { optionText: "DP never uses recursion", optionTag: "B" },
                { optionText: "Divide-and-conquer is always faster", optionTag: "C" },
                { optionText: "DP does not use memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;