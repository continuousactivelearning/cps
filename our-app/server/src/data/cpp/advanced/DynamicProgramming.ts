import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Dynamic Programming - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of Dynamic Programming in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DynamicProgramming"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following is NOT a property of dynamic programming?",
            options: [
                { optionText: "Overlapping subproblems", optionTag: "A" },
                { optionText: "Greedy choice property", optionTag: "B" },
                { optionText: "Optimal substructure", optionTag: "C" },
                { optionText: "Memoization", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the time complexity of the matrix chain multiplication using DP?",
            options: [
                { optionText: "O(n^3)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems is not suitable for dynamic programming?",
            options: [
                { optionText: "Finding shortest path in unweighted graph", optionTag: "A" },
                { optionText: "0/1 Knapsack Problem", optionTag: "B" },
                { optionText: "Longest Common Subsequence", optionTag: "C" },
                { optionText: "Matrix Chain Multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which DP approach builds the solution from the bottom-up?",
            options: [
                { optionText: "Tabulation", optionTag: "A" },
                { optionText: "Memoization", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of the standard LCS DP solution?",
            options: [
                { optionText: "O(n*m)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the recurrence for Fibonacci using memoization?",
            options: [
                { optionText: "F(n) = F(n-1) + F(n-2)", optionTag: "A" },
                { optionText: "F(n) = 2*F(n-1)", optionTag: "B" },
                { optionText: "F(n) = F(n-2) - F(n-1)", optionTag: "C" },
                { optionText: "F(n) = F(n-3) + F(n-2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the 0/1 knapsack problem, which condition is used for transition?",
            options: [
                { optionText: "max(dp[i-1][j], dp[i-1][j-wt[i]] + val[i])", optionTag: "A" },
                { optionText: "dp[i][j] = dp[i][j-1] + 1", optionTag: "B" },
                { optionText: "dp[i][j] = dp[i-1][j] + val[i]", optionTag: "C" },
                { optionText: "dp[i][j] = max(dp[i-1][j], wt[i])", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which optimization can reduce space in LCS problem?",
            options: [
                { optionText: "Using only two rows", optionTag: "A" },
                { optionText: "Using binary search", optionTag: "B" },
                { optionText: "Replacing strings with integers", optionTag: "C" },
                { optionText: "Bit manipulation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the goal of memoization?",
            options: [
                { optionText: "Avoid recomputation by storing results", optionTag: "A" },
                { optionText: "Reduce space", optionTag: "B" },
                { optionText: "Build solution bottom-up", optionTag: "C" },
                { optionText: "Use recursion with stacks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Coin Change problem, which base case is used?",
            options: [
                { optionText: "dp[0] = 0", optionTag: "A" },
                { optionText: "dp[0] = -1", optionTag: "B" },
                { optionText: "dp[0] = INF", optionTag: "C" },
                { optionText: "dp[0] = 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is used in Bottom-up DP?",
            options: [
                { optionText: "Tabulation", optionTag: "A" },
                { optionText: "Memoization", optionTag: "B" },
                { optionText: "Recursion", optionTag: "C" },
                { optionText: "Greedy", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is DP preferred over recursion?",
            options: [
                { optionText: "When overlapping subproblems exist", optionTag: "A" },
                { optionText: "When greedy works", optionTag: "B" },
                { optionText: "When input is small", optionTag: "C" },
                { optionText: "When loops can't be used", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm solves the longest increasing subsequence in O(n log n)?",
            options: [
                { optionText: "Patience Sorting with Binary Search", optionTag: "A" },
                { optionText: "Brute Force", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "Floyd-Warshall", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these can reduce time complexity in edit distance problem?",
            options: [
                { optionText: "DP with tabulation", optionTag: "A" },
                { optionText: "DFS recursion", optionTag: "B" },
                { optionText: "Hashing", optionTag: "C" },
                { optionText: "Graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "DP solutions usually avoid which problem?",
            options: [
                { optionText: "Exponential recursion", optionTag: "A" },
                { optionText: "Input size constraints", optionTag: "B" },
                { optionText: "Greedy behavior", optionTag: "C" },
                { optionText: "Divide and Conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about Bellman-Ford algorithm in DP context?",
            options: [
                { optionText: "It can be formulated with bottom-up dynamic programming", optionTag: "A" },
                { optionText: "It only uses recursion", optionTag: "B" },
                { optionText: "It is purely greedy", optionTag: "C" },
                { optionText: "It is depth-first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is an unbounded knapsack variant?",
            options: [
                { optionText: "Rod Cutting Problem", optionTag: "A" },
                { optionText: "LCS", optionTag: "B" },
                { optionText: "Subset Sum", optionTag: "C" },
                { optionText: "Matrix Chain", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which approach is used to solve Palindrome Partitioning?",
            options: [
                { optionText: "Dynamic Programming", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems uses state compression?",
            options: [
                { optionText: "Subset Sum using bitmasks", optionTag: "A" },
                { optionText: "Matrix Chain", optionTag: "B" },
                { optionText: "Rod Cutting", optionTag: "C" },
                { optionText: "Edit Distance", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the benefit of tabulation over memoization?",
            options: [
                { optionText: "No stack overhead and often easier to optimize", optionTag: "A" },
                { optionText: "Smaller code", optionTag: "B" },
                { optionText: "Slower but readable", optionTag: "C" },
                { optionText: "Uses divide and conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
