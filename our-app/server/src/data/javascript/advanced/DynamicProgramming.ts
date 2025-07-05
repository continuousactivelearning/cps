import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Dynamic Programming - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced knowledge of Dynamic Programming (DP) in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DynamicProgramming"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which technique is primarily used in dynamic programming to avoid recalculating results?",
            options: [
                { optionText: "Memoization", optionTag: "A" },
                { optionText: "Recursion", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Heuristics", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the difference between memoization and tabulation?",
            options: [
                { optionText: "Memoization is top-down, tabulation is bottom-up", optionTag: "A" },
                { optionText: "Tabulation uses recursion", optionTag: "B" },
                { optionText: "Memoization uses iteration", optionTag: "C" },
                { optionText: "They are the same", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is a classic example of dynamic programming?",
            options: [
                { optionText: "0/1 Knapsack", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "C" },
                { optionText: "Prim's Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a typical DP solution using a 2D array?",
            options: [
                { optionText: "O(n * m)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n^2 log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript object type is best suited for memoization of subproblems?",
            options: [
                { optionText: "Map", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which approach is used in solving the Longest Increasing Subsequence problem efficiently?",
            options: [
                { optionText: "Binary search with DP", optionTag: "A" },
                { optionText: "Greedy with recursion", optionTag: "B" },
                { optionText: "DFS with memo", optionTag: "C" },
                { optionText: "Backtracking only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does overlapping subproblems mean in dynamic programming?",
            options: [
                { optionText: "The same subproblems are solved multiple times", optionTag: "A" },
                { optionText: "Solutions depend on future problems", optionTag: "B" },
                { optionText: "All subproblems are unique", optionTag: "C" },
                { optionText: "None are reused", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In tabulation, what is the usual order of solving subproblems?",
            options: [
                { optionText: "From smallest to largest", optionTag: "A" },
                { optionText: "From largest to smallest", optionTag: "B" },
                { optionText: "From random to ordered", optionTag: "C" },
                { optionText: "Parallel", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property must hold for dynamic programming to be applicable?",
            options: [
                { optionText: "Optimal substructure", optionTag: "A" },
                { optionText: "Data sorting", optionTag: "B" },
                { optionText: "Greedy choices", optionTag: "C" },
                { optionText: "Graph representation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you reduce space complexity in some DP problems?",
            options: [
                { optionText: "By using rolling arrays", optionTag: "A" },
                { optionText: "By using queues", optionTag: "B" },
                { optionText: "By skipping memoization", optionTag: "C" },
                { optionText: "By using trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the recurrence relation for the Fibonacci series using DP?",
            options: [
                { optionText: "F(n) = F(n-1) + F(n-2)", optionTag: "A" },
                { optionText: "F(n) = F(n-1) * F(n-2)", optionTag: "B" },
                { optionText: "F(n) = F(n-1) - F(n-2)", optionTag: "C" },
                { optionText: "F(n) = F(n/2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem cannot be solved using DP?",
            options: [
                { optionText: "Traveling Salesman Problem using brute-force", optionTag: "A" },
                { optionText: "Subset sum", optionTag: "B" },
                { optionText: "Coin change", optionTag: "C" },
                { optionText: "Longest common subsequence", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which DP problem is used for text comparison?",
            options: [
                { optionText: "Longest Common Subsequence", optionTag: "A" },
                { optionText: "Knapsack", optionTag: "B" },
                { optionText: "Floyd-Warshall", optionTag: "C" },
                { optionText: "Matrix Chain Multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is the best space optimization for 1D DP problems?",
            options: [
                { optionText: "Using two variables instead of full array", optionTag: "A" },
                { optionText: "Using a tree", optionTag: "B" },
                { optionText: "Using map instead of array", optionTag: "C" },
                { optionText: "Using recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does time complexity depend on in DP problems?",
            options: [
                { optionText: "Number of subproblems and time to solve each", optionTag: "A" },
                { optionText: "Depth of recursion tree only", optionTag: "B" },
                { optionText: "Sorting step", optionTag: "C" },
                { optionText: "Random input size", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the optimal solution strategy in DP?",
            options: [
                { optionText: "Build up from base cases", optionTag: "A" },
                { optionText: "Choose any random path", optionTag: "B" },
                { optionText: "Start from final goal", optionTag: "C" },
                { optionText: "Try all possibilities", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can greedy algorithms always replace DP?",
            options: [
                { optionText: "No, greedy doesn't always guarantee optimal solution", optionTag: "A" },
                { optionText: "Yes, they are the same", optionTag: "B" },
                { optionText: "Yes, but slower", optionTag: "C" },
                { optionText: "No, greedy is faster and always better", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does bottom-up DP rely on?",
            options: [
                { optionText: "Solving smaller subproblems first", optionTag: "A" },
                { optionText: "Recursion depth", optionTag: "B" },
                { optionText: "Heuristics", optionTag: "C" },
                { optionText: "Trial and error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you solve Matrix Chain Multiplication efficiently?",
            options: [
                { optionText: "By storing results of subproblems", optionTag: "A" },
                { optionText: "By always multiplying adjacent pairs", optionTag: "B" },
                { optionText: "By sorting matrices", optionTag: "C" },
                { optionText: "By using greedy merge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
