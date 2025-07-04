import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Divide and Conquer - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz evaluates your advanced understanding of Divide and Conquer techniques in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DivideAndConquer"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary idea behind Divide and Conquer algorithms?",
            options: [
                { optionText: "Divide the problem, solve subproblems recursively, and combine results", optionTag: "A" },
                { optionText: "Solve iteratively without dividing", optionTag: "B" },
                { optionText: "Guess and check all solutions", optionTag: "C" },
                { optionText: "Use dynamic programming with memoization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the recurrence relation for Merge Sort?",
            options: [
                { optionText: "T(n) = 2T(n/2) + O(n)", optionTag: "A" },
                { optionText: "T(n) = T(n-1) + O(1)", optionTag: "B" },
                { optionText: "T(n) = T(n/2) + O(n)", optionTag: "C" },
                { optionText: "T(n) = nT(n-1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm uses Divide and Conquer to find the k-th smallest element in an unordered list?",
            options: [
                { optionText: "QuickSelect", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the naive matrix multiplication algorithm?",
            options: [
                { optionText: "O(n^3)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used to multiply matrices faster than the naive approach using Divide and Conquer?",
            options: [
                { optionText: "Strassen’s Algorithm", optionTag: "A" },
                { optionText: "Kronecker’s Algorithm", optionTag: "B" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "C" },
                { optionText: "Floyd-Warshall Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these problems can be solved using Divide and Conquer?",
            options: [
                { optionText: "Maximum subarray sum", optionTag: "A" },
                { optionText: "Counting inversions", optionTag: "B" },
                { optionText: "Closest pair of points", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of Quick Sort?",
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
            questionText: "How does Merge Sort handle large datasets?",
            options: [
                { optionText: "Efficient due to predictable time complexity and no worst-case degeneration", optionTag: "A" },
                { optionText: "Inefficient because of recursion", optionTag: "B" },
                { optionText: "Only suitable for small datasets", optionTag: "C" },
                { optionText: "Crashes due to stack overflow", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the auxiliary space complexity of Merge Sort?",
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
            questionText: "How does Quick Sort achieve its average-case performance?",
            options: [
                { optionText: "Balanced partitioning", optionTag: "A" },
                { optionText: "Stable sorting", optionTag: "B" },
                { optionText: "Heap-based structure", optionTag: "C" },
                { optionText: "Prefix sum optimization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a Divide and Conquer algorithm?",
            options: [
                { optionText: "Dijkstra’s Algorithm", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Strassen’s Matrix Multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case in a Divide and Conquer recursion?",
            options: [
                { optionText: "When the input size is small enough to solve directly", optionTag: "A" },
                { optionText: "When the input is infinite", optionTag: "B" },
                { optionText: "When input is not divisible", optionTag: "C" },
                { optionText: "When recursion depth reaches log n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following divide-and-conquer algorithms is not stable?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Strassen's", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which step in Divide and Conquer generally contributes most to time complexity?",
            options: [
                { optionText: "Combine step", optionTag: "A" },
                { optionText: "Divide step", optionTag: "B" },
                { optionText: "Recursion step", optionTag: "C" },
                { optionText: "Memory allocation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure benefits the least from divide and conquer?",
            options: [
                { optionText: "Linked List", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Matrix", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is Binary Search a Divide and Conquer algorithm?",
            options: [
                { optionText: "It splits the array into halves each time", optionTag: "A" },
                { optionText: "It merges results", optionTag: "B" },
                { optionText: "It uses heaps", optionTag: "C" },
                { optionText: "It finds maximum value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm does not use the divide and conquer paradigm?",
            options: [
                { optionText: "Bellman-Ford Algorithm", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm solves the maximum subarray problem efficiently?",
            options: [
                { optionText: "Kadane’s algorithm using D&C", optionTag: "A" },
                { optionText: "Floyd-Warshall", optionTag: "B" },
                { optionText: "Prim’s Algorithm", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method can reduce recursive overhead in divide and conquer?",
            options: [
                { optionText: "Tail recursion or loop conversion", optionTag: "A" },
                { optionText: "Using hash maps", optionTag: "B" },
                { optionText: "Heapify after divide", optionTag: "C" },
                { optionText: "Graph representation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
