import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Dynamic Programming - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz evaluates your intermediate knowledge of Dynamic Programming concepts in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DynamicProgramming"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is Dynamic Programming mainly used for?",
            options: [
                { optionText: "Solving problems with overlapping subproblems", optionTag: "A" },
                { optionText: "Sorting large datasets", optionTag: "B" },
                { optionText: "Searching in arrays", optionTag: "C" },
                { optionText: "Web development", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property must a problem have to use dynamic programming?",
            options: [
                { optionText: "Overlapping subproblems and optimal substructure", optionTag: "A" },
                { optionText: "Sorted input", optionTag: "B" },
                { optionText: "Graph representation", optionTag: "C" },
                { optionText: "Unique elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a common technique in dynamic programming?",
            options: [
                { optionText: "Memoization", optionTag: "A" },
                { optionText: "Heaps", optionTag: "B" },
                { optionText: "Hashing", optionTag: "C" },
                { optionText: "Recursion Trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does memoization help reduce?",
            options: [
                { optionText: "Repeated calculations", optionTag: "A" },
                { optionText: "Stack size", optionTag: "B" },
                { optionText: "Memory usage", optionTag: "C" },
                { optionText: "Recursion depth", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these problems is best solved by dynamic programming?",
            options: [
                { optionText: "Fibonacci sequence", optionTag: "A" },
                { optionText: "Finding minimum value", optionTag: "B" },
                { optionText: "Depth First Search", optionTag: "C" },
                { optionText: "Bubble sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Fibonacci using DP (bottom-up)?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(2^n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about top-down DP?",
            options: [
                { optionText: "It uses recursion and memoization", optionTag: "A" },
                { optionText: "It builds the solution iteratively", optionTag: "B" },
                { optionText: "It uses brute force", optionTag: "C" },
                { optionText: "It does not store results", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is bottom-up DP usually implemented with?",
            options: [
                { optionText: "Iterative loops", optionTag: "A" },
                { optionText: "Recursion", optionTag: "B" },
                { optionText: "Memoization", optionTag: "C" },
                { optionText: "Nested functions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is commonly used for memoization?",
            options: [
                { optionText: "Object or Map", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is an example of dynamic programming?",
            options: [
                { optionText: "Longest Common Subsequence", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Prim’s Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is tabulation in DP?",
            options: [
                { optionText: "Bottom-up approach using table to store solutions", optionTag: "A" },
                { optionText: "Top-down approach using recursion", optionTag: "B" },
                { optionText: "Dynamic input scanning", optionTag: "C" },
                { optionText: "Loop unrolling method", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem does NOT typically use dynamic programming?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Knapsack Problem", optionTag: "B" },
                { optionText: "Edit Distance", optionTag: "C" },
                { optionText: "Matrix Chain Multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When does a recursive solution become inefficient?",
            options: [
                { optionText: "When subproblems are solved multiple times", optionTag: "A" },
                { optionText: "When input size is small", optionTag: "B" },
                { optionText: "When stack is shallow", optionTag: "C" },
                { optionText: "When variables are global", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does DP improve performance?",
            options: [
                { optionText: "Avoids redundant computation", optionTag: "A" },
                { optionText: "Reduces memory usage", optionTag: "B" },
                { optionText: "Avoids all recursion", optionTag: "C" },
                { optionText: "Increases the number of iterations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of tabulated DP for Fibonacci?",
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
            questionText: "Can you convert a memoized DP solution to bottom-up?",
            options: [
                { optionText: "Yes, by converting recursion to iteration", optionTag: "A" },
                { optionText: "No, memoization is essential", optionTag: "B" },
                { optionText: "Only if input is sorted", optionTag: "C" },
                { optionText: "Only for graph problems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JS feature helps implement DP?",
            options: [
                { optionText: "Closures and objects", optionTag: "A" },
                { optionText: "Event bubbling", optionTag: "B" },
                { optionText: "DOM manipulation", optionTag: "C" },
                { optionText: "Timers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the recurrence relation for Fibonacci?",
            options: [
                { optionText: "F(n) = F(n-1) + F(n-2)", optionTag: "A" },
                { optionText: "F(n) = F(n-1) * F(n-2)", optionTag: "B" },
                { optionText: "F(n) = n * F(n-1)", optionTag: "C" },
                { optionText: "F(n) = F(n-1) - F(n-2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a limitation of bottom-up DP?",
            options: [
                { optionText: "Harder to understand for some problems", optionTag: "A" },
                { optionText: "Uses recursion stack", optionTag: "B" },
                { optionText: "Does not work with arrays", optionTag: "C" },
                { optionText: "Limited to numerical problems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which optimization technique works well with DP?",
            options: [
                { optionText: "Space optimization", optionTag: "A" },
                { optionText: "Greedy algorithms", optionTag: "B" },
                { optionText: "Nested loops", optionTag: "C" },
                { optionText: "Divide and Conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
