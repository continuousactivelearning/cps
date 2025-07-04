import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Dynamic Programming - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your foundational knowledge of Dynamic Programming (DP) in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DynamicProgramming"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main idea of dynamic programming?",
            options: [
                { optionText: "Solving problems by combining solutions to subproblems", optionTag: "A" },
                { optionText: "Trying all possible combinations", optionTag: "B" },
                { optionText: "Using only brute-force recursion", optionTag: "C" },
                { optionText: "Sorting input before solving", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is memoization?",
            options: [
                { optionText: "Storing results of subproblems to avoid recomputation", optionTag: "A" },
                { optionText: "Removing elements from memory", optionTag: "B" },
                { optionText: "A way of compressing data", optionTag: "C" },
                { optionText: "A built-in JavaScript method", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key difference between dynamic programming and recursion?",
            options: [
                { optionText: "DP stores results of subproblems", optionTag: "A" },
                { optionText: "Recursion uses for loops", optionTag: "B" },
                { optionText: "DP cannot solve Fibonacci", optionTag: "C" },
                { optionText: "Recursion is faster", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is often used in bottom-up DP?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these problems is a classic example of DP?",
            options: [
                { optionText: "Fibonacci", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Linked List traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of recursive Fibonacci without DP?",
            options: [
                { optionText: "O(2^n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following reduces repeated computation?",
            options: [
                { optionText: "Memoization", optionTag: "A" },
                { optionText: "Recursion", optionTag: "B" },
                { optionText: "Sorting", optionTag: "C" },
                { optionText: "Looping", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is tabulation in DP?",
            options: [
                { optionText: "Bottom-up approach using tables (arrays)", optionTag: "A" },
                { optionText: "Storing in hash map", optionTag: "B" },
                { optionText: "Using stack memory", optionTag: "C" },
                { optionText: "Calling functions recursively", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the first step in solving a DP problem?",
            options: [
                { optionText: "Identifying overlapping subproblems", optionTag: "A" },
                { optionText: "Using nested loops", optionTag: "B" },
                { optionText: "Sorting inputs", optionTag: "C" },
                { optionText: "Importing modules", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a base case in DP?",
            options: [
                { optionText: "A known simple solution used to build others", optionTag: "A" },
                { optionText: "An error state", optionTag: "B" },
                { optionText: "A recursive call", optionTag: "C" },
                { optionText: "A condition to terminate the loop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which order is bottom-up DP solved?",
            options: [
                { optionText: "From smallest subproblems to the original problem", optionTag: "A" },
                { optionText: "From largest to smallest", optionTag: "B" },
                { optionText: "From random positions", optionTag: "C" },
                { optionText: "In reverse alphabet", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can be solved using DP?",
            options: [
                { optionText: "0/1 Knapsack Problem", optionTag: "A" },
                { optionText: "Sorting an array", optionTag: "B" },
                { optionText: "Checking prime numbers", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is memoization implemented in JavaScript?",
            options: [
                { optionText: "Using an object or array to store results", optionTag: "A" },
                { optionText: "Using try-catch", optionTag: "B" },
                { optionText: "Using a queue", optionTag: "C" },
                { optionText: "Using DOM methods", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why use DP over simple recursion?",
            options: [
                { optionText: "It avoids recomputation and is faster", optionTag: "A" },
                { optionText: "It uses less code", optionTag: "B" },
                { optionText: "It uses more loops", optionTag: "C" },
                { optionText: "It makes output random", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which keyword is used to define a function in JavaScript?",
            options: [
                { optionText: "function", optionTag: "A" },
                { optionText: "func", optionTag: "B" },
                { optionText: "def", optionTag: "C" },
                { optionText: "method", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is dynamic programming always recursive?",
            options: [
                { optionText: "No, it can be implemented iteratively too", optionTag: "A" },
                { optionText: "Yes, always", optionTag: "B" },
                { optionText: "Only in TypeScript", optionTag: "C" },
                { optionText: "Only for strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is more memory efficient?",
            options: [
                { optionText: "Bottom-up DP", optionTag: "A" },
                { optionText: "Recursive DP", optionTag: "B" },
                { optionText: "Naive Recursion", optionTag: "C" },
                { optionText: "Global Variables", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of bottom-up Fibonacci with array?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DP, overlapping subproblems mean:",
            options: [
                { optionText: "The same subproblems are solved multiple times", optionTag: "A" },
                { optionText: "Only one solution is possible", optionTag: "B" },
                { optionText: "No solution exists", optionTag: "C" },
                { optionText: "Different outputs are returned", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which DP approach starts from known base cases?",
            options: [
                { optionText: "Bottom-up", optionTag: "A" },
                { optionText: "Top-down", optionTag: "B" },
                { optionText: "Greedy", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
