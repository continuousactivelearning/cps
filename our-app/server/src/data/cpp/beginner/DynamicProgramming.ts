import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Dynamic Programming - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Dynamic Programming in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DynamicProgramming"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main idea behind Dynamic Programming (DP)?",
            options: [
                { optionText: "Solving problems by breaking them into overlapping subproblems", optionTag: "A" },
                { optionText: "Using multiple threads", optionTag: "B" },
                { optionText: "Dividing problems into unrelated parts", optionTag: "C" },
                { optionText: "Iterating over data repeatedly", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is typically used in Dynamic Programming?",
            options: [
                { optionText: "Memoization", optionTag: "A" },
                { optionText: "Randomization", optionTag: "B" },
                { optionText: "Recursion Tree", optionTag: "C" },
                { optionText: "Brute Force", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key difference between DP and Divide and Conquer?",
            options: [
                { optionText: "DP solves overlapping subproblems", optionTag: "A" },
                { optionText: "DP uses loops only", optionTag: "B" },
                { optionText: "Divide and Conquer uses memoization", optionTag: "C" },
                { optionText: "DP avoids recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is a classic example of Dynamic Programming?",
            options: [
                { optionText: "Fibonacci series", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Bubble sort", optionTag: "C" },
                { optionText: "Heap sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is tabulation in DP?",
            options: [
                { optionText: "Bottom-up approach storing results in a table", optionTag: "A" },
                { optionText: "Recursive solution without memoization", optionTag: "B" },
                { optionText: "Using nested loops", optionTag: "C" },
                { optionText: "Using stacks and queues", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does memoization do?",
            options: [
                { optionText: "Stores already computed values to avoid recomputation", optionTag: "A" },
                { optionText: "Sorts values", optionTag: "B" },
                { optionText: "Clears cache", optionTag: "C" },
                { optionText: "Increases memory usage", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used for memoization?",
            options: [
                { optionText: "Map or Array", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of a DP Fibonacci solution with memoization?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(2^n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a DP problem?",
            options: [
                { optionText: "0/1 Knapsack", optionTag: "A" },
                { optionText: "Depth First Search", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Tree Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is DP more efficient than recursion in many cases?",
            options: [
                { optionText: "It avoids solving the same subproblem multiple times", optionTag: "A" },
                { optionText: "It uses less memory", optionTag: "B" },
                { optionText: "It is implemented with loops only", optionTag: "C" },
                { optionText: "It eliminates function calls", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which approach stores solutions to all subproblems in a table?",
            options: [
                { optionText: "Tabulation", optionTag: "A" },
                { optionText: "Memoization", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Greedy", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which one is **not** a feature of Dynamic Programming?",
            options: [
                { optionText: "Overlapping Subproblems", optionTag: "A" },
                { optionText: "Greedy Choices", optionTag: "B" },
                { optionText: "Optimal Substructure", optionTag: "C" },
                { optionText: "Memoization", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following problems is **not** suitable for DP?",
            options: [
                { optionText: "Sorting a list", optionTag: "A" },
                { optionText: "Matrix Chain Multiplication", optionTag: "B" },
                { optionText: "Longest Common Subsequence", optionTag: "C" },
                { optionText: "Coin Change", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition must be satisfied for a problem to be solved using DP?",
            options: [
                { optionText: "Overlapping subproblems and optimal substructure", optionTag: "A" },
                { optionText: "Constant input size", optionTag: "B" },
                { optionText: "No recursion allowed", optionTag: "C" },
                { optionText: "Sorted input", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best way to identify a DP problem?",
            options: [
                { optionText: "Look for overlapping subproblems and recursive structure", optionTag: "A" },
                { optionText: "Check if loops can solve it", optionTag: "B" },
                { optionText: "Check if inputs are sorted", optionTag: "C" },
                { optionText: "See if greedy works", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of recursion is used in memoization?",
            options: [
                { optionText: "Top-down", optionTag: "A" },
                { optionText: "Bottom-up", optionTag: "B" },
                { optionText: "Tail recursion", optionTag: "C" },
                { optionText: "Direct recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a DP approach to solve LCS?",
            options: [
                { optionText: "Using a 2D table to store lengths of common subsequences", optionTag: "A" },
                { optionText: "Sorting both strings", optionTag: "B" },
                { optionText: "Searching one string in another", optionTag: "C" },
                { optionText: "Comparing ASCII values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is Dynamic Programming always faster than recursion?",
            options: [
                { optionText: "Not always, depends on problem structure", optionTag: "A" },
                { optionText: "Yes, always faster", optionTag: "B" },
                { optionText: "No, recursion is always faster", optionTag: "C" },
                { optionText: "Only for large input sizes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the auxiliary space complexity of a DP solution storing an array of size n?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which approach is preferred when memory usage is a concern in DP?",
            options: [
                { optionText: "Space optimized tabulation", optionTag: "A" },
                { optionText: "Top-down memoization", optionTag: "B" },
                { optionText: "Recursive brute-force", optionTag: "C" },
                { optionText: "Loop unrolling", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
