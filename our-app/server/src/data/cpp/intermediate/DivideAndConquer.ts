import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Divide and Conquer - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz evaluates your intermediate understanding of Divide and Conquer algorithms in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DivideAndConquer"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the basic idea behind the Divide and Conquer strategy?",
            options: [
                { optionText: "Divide the problem, solve subproblems, combine the results", optionTag: "A" },
                { optionText: "Sort and merge", optionTag: "B" },
                { optionText: "Divide the input and discard half", optionTag: "C" },
                { optionText: "Build a greedy solution", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following algorithms uses Divide and Conquer?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
                { optionText: "Kruskal’s Algorithm", optionTag: "C" },
                { optionText: "Bellman-Ford Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the recurrence relation for Merge Sort?",
            options: [
                { optionText: "T(n) = 2T(n/2) + O(n)", optionTag: "A" },
                { optionText: "T(n) = T(n/2) + O(n)", optionTag: "B" },
                { optionText: "T(n) = T(n-1) + O(n)", optionTag: "C" },
                { optionText: "T(n) = T(n-1) + O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is an example of Divide and Conquer for multiplication?",
            options: [
                { optionText: "Karatsuba Algorithm", optionTag: "A" },
                { optionText: "Strassen’s Algorithm", optionTag: "B" },
                { optionText: "Knuth-Morris-Pratt Algorithm", optionTag: "C" },
                { optionText: "Greedy Multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Binary Search using Divide and Conquer?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems can be solved using Divide and Conquer?",
            options: [
                { optionText: "Finding the maximum subarray (Kadane’s variant)", optionTag: "A" },
                { optionText: "Graph coloring", optionTag: "B" },
                { optionText: "Dynamic programming on trees", optionTag: "C" },
                { optionText: "Topological sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is **not** a step in Divide and Conquer?",
            options: [
                { optionText: "Greedy selection", optionTag: "A" },
                { optionText: "Divide", optionTag: "B" },
                { optionText: "Conquer", optionTag: "C" },
                { optionText: "Combine", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm uses Divide and Conquer to count inversions in an array?",
            options: [
                { optionText: "Modified Merge Sort", optionTag: "A" },
                { optionText: "Heap Sort", optionTag: "B" },
                { optionText: "Counting Sort", optionTag: "C" },
                { optionText: "Radix Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best case time complexity of Quick Sort?",
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
            questionText: "Which is the worst-case time complexity of Quick Sort?",
            options: [
                { optionText: "O(n^2)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which divide and conquer algorithm multiplies two matrices faster than the standard approach?",
            options: [
                { optionText: "Strassen’s Algorithm", optionTag: "A" },
                { optionText: "Naive Matrix Multiplication", optionTag: "B" },
                { optionText: "Karatsuba Algorithm", optionTag: "C" },
                { optionText: "Fourier Transform", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the auxiliary space used by Merge Sort?",
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
            questionText: "What is the purpose of the 'combine' step in Divide and Conquer?",
            options: [
                { optionText: "To merge the solutions of subproblems", optionTag: "A" },
                { optionText: "To divide input", optionTag: "B" },
                { optionText: "To reduce the size", optionTag: "C" },
                { optionText: "To initialize the input", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a divide and conquer sorting algorithm?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Selection Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main disadvantage of Quick Sort?",
            options: [
                { optionText: "Worst case time complexity is O(n^2)", optionTag: "A" },
                { optionText: "Uses extra space", optionTag: "B" },
                { optionText: "Cannot sort integers", optionTag: "C" },
                { optionText: "It is not stable", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a base case in Divide and Conquer?",
            options: [
                { optionText: "A problem that can be solved directly", optionTag: "A" },
                { optionText: "A problem with multiple solutions", optionTag: "B" },
                { optionText: "An undefined result", optionTag: "C" },
                { optionText: "A function with infinite recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Divide and Conquer is suitable for problems that are:",
            options: [
                { optionText: "Easily broken down into subproblems", optionTag: "A" },
                { optionText: "Only solved iteratively", optionTag: "B" },
                { optionText: "Not recursive in nature", optionTag: "C" },
                { optionText: "Dependent on global variables", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is **not** typically solved using Divide and Conquer?",
            options: [
                { optionText: "Breadth-First Search", optionTag: "A" },
                { optionText: "Closest pair of points", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which part of Merge Sort contributes to its time complexity?",
            options: [
                { optionText: "Merge step", optionTag: "A" },
                { optionText: "Divide step", optionTag: "B" },
                { optionText: "Base case", optionTag: "C" },
                { optionText: "Input check", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property of divide and conquer helps with parallelization?",
            options: [
                { optionText: "Independent subproblems", optionTag: "A" },
                { optionText: "Greedy decisions", optionTag: "B" },
                { optionText: "Global variables", optionTag: "C" },
                { optionText: "Recursive backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
