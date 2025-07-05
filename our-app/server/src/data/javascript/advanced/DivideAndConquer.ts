import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Divide and Conquer - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz assesses your advanced understanding of Divide and Conquer algorithms, including their design principles, applications, and analysis in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DivideAndConquer"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following is NOT a Divide and Conquer algorithm?",
            options: [
                { optionText: "Dijkstra’s Algorithm", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key idea behind Divide and Conquer?",
            options: [
                { optionText: "Break problem, solve subproblems recursively, and combine results", optionTag: "A" },
                { optionText: "Backtrack through all paths", optionTag: "B" },
                { optionText: "Build a greedy solution", optionTag: "C" },
                { optionText: "Iterate linearly over inputs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which step is typically recursive in Divide and Conquer?",
            options: [
                { optionText: "Divide", optionTag: "A" },
                { optionText: "Conquer", optionTag: "B" },
                { optionText: "Combine", optionTag: "C" },
                { optionText: "Initialize", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the time complexity of Merge Sort?",
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
            questionText: "Which algorithm uses divide and conquer for logarithmic search?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "Breadth-first Search", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "Linear Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Quick Sort divide the array?",
            options: [
                { optionText: "Using a pivot element", optionTag: "A" },
                { optionText: "Splitting by midpoint", optionTag: "B" },
                { optionText: "Using recursion depth", optionTag: "C" },
                { optionText: "By dividing into equal halves", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these algorithms uses the Master Theorem for complexity analysis?",
            options: [
                { optionText: "Divide and Conquer algorithms", optionTag: "A" },
                { optionText: "Greedy algorithms", optionTag: "B" },
                { optionText: "Brute force algorithms", optionTag: "C" },
                { optionText: "Graph traversal algorithms", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case leads to worst-case time for Quick Sort?",
            options: [
                { optionText: "When the smallest/largest element is always chosen as pivot", optionTag: "A" },
                { optionText: "When median is chosen as pivot", optionTag: "B" },
                { optionText: "When random pivot is used", optionTag: "C" },
                { optionText: "When the array is sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the 'combine' step typically do in Merge Sort?",
            options: [
                { optionText: "Merge two sorted halves", optionTag: "A" },
                { optionText: "Swap elements", optionTag: "B" },
                { optionText: "Choose pivot", optionTag: "C" },
                { optionText: "Compare original values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the recurrence relation for Merge Sort?",
            options: [
                { optionText: "T(n) = 2T(n/2) + O(n)", optionTag: "A" },
                { optionText: "T(n) = T(n/2) + O(n)", optionTag: "B" },
                { optionText: "T(n) = 2T(n-1) + O(1)", optionTag: "C" },
                { optionText: "T(n) = T(n) + O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is best solved using Divide and Conquer?",
            options: [
                { optionText: "Finding maximum subarray sum", optionTag: "A" },
                { optionText: "Checking if number is prime", optionTag: "B" },
                { optionText: "In-order traversal of BST", optionTag: "C" },
                { optionText: "Sorting a linked list iteratively", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Strassen’s matrix multiplication algorithm is an example of:",
            options: [
                { optionText: "Divide and Conquer", optionTag: "A" },
                { optionText: "Dynamic Programming", optionTag: "B" },
                { optionText: "Greedy Algorithm", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the complexity of the closest pair of points using D&C?",
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
            questionText: "What makes Binary Search efficient?",
            options: [
                { optionText: "Divides problem in half at each step", optionTag: "A" },
                { optionText: "Processes all elements", optionTag: "B" },
                { optionText: "Stores every step in memory", optionTag: "C" },
                { optionText: "Ignores middle values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the Master Theorem solve?",
            options: [
                { optionText: "Recurrence relations", optionTag: "A" },
                { optionText: "Graphs", optionTag: "B" },
                { optionText: "Hashing conflicts", optionTag: "C" },
                { optionText: "Stack overflows", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition violates divide and conquer?",
            options: [
                { optionText: "Dependent subproblems", optionTag: "A" },
                { optionText: "Independent subproblems", optionTag: "B" },
                { optionText: "Base cases", optionTag: "C" },
                { optionText: "Recursive merging", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is recursion used in divide and conquer?",
            options: [
                { optionText: "To solve subproblems elegantly", optionTag: "A" },
                { optionText: "To create infinite loops", optionTag: "B" },
                { optionText: "To avoid time complexity", optionTag: "C" },
                { optionText: "To combine all inputs first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can divide and conquer be used for parallel computation?",
            options: [
                { optionText: "Yes, if subproblems are independent", optionTag: "A" },
                { optionText: "No, only sequentially", optionTag: "B" },
                { optionText: "Only with async/await", optionTag: "C" },
                { optionText: "Only if using event loop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is used in fast Fourier transform?",
            options: [
                { optionText: "Divide and Conquer", optionTag: "A" },
                { optionText: "Dynamic Programming", optionTag: "B" },
                { optionText: "Greedy Strategy", optionTag: "C" },
                { optionText: "Graph Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JS, which approach is best for implementing D&C merge sort?",
            options: [
                { optionText: "Recursive functions with array.slice", optionTag: "A" },
                { optionText: "Iterative loops", optionTag: "B" },
                { optionText: "Map/Filter/Reduce", optionTag: "C" },
                { optionText: "Global variables", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
