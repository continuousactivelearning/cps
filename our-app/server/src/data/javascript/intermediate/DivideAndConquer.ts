import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Divide and Conquer - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz evaluates your intermediate understanding of the Divide and Conquer paradigm in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DivideAndConquer"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary strategy behind the Divide and Conquer technique?",
            options: [
                { optionText: "Divide the problem into subproblems, solve recursively, and combine", optionTag: "A" },
                { optionText: "Try all possibilities", optionTag: "B" },
                { optionText: "Use brute force to find solution", optionTag: "C" },
                { optionText: "Iterate and check each condition", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following algorithms uses Divide and Conquer?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Floyd-Warshall", optionTag: "C" },
                { optionText: "Prim's Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
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
            questionText: "Which part of Divide and Conquer does recursion usually implement?",
            options: [
                { optionText: "Solve the subproblems", optionTag: "A" },
                { optionText: "Divide the problem", optionTag: "B" },
                { optionText: "Combine solutions", optionTag: "C" },
                { optionText: "Terminate the solution", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is not based on Divide and Conquer?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Divide and Conquer, what typically triggers the base case?",
            options: [
                { optionText: "Input size becomes minimal", optionTag: "A" },
                { optionText: "Array is sorted", optionTag: "B" },
                { optionText: "Loop is complete", optionTag: "C" },
                { optionText: "Recursion stack is full", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary Search follows which paradigm?",
            options: [
                { optionText: "Divide and Conquer", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Dynamic Programming", optionTag: "C" },
                { optionText: "Brute Force", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base condition for a recursive merge sort function?",
            options: [
                { optionText: "Array length is 1 or 0", optionTag: "A" },
                { optionText: "Array is null", optionTag: "B" },
                { optionText: "Array is sorted", optionTag: "C" },
                { optionText: "Middle index is found", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm typically performs better in worst-case scenarios?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a benefit of Divide and Conquer?",
            options: [
                { optionText: "Always uses less memory", optionTag: "A" },
                { optionText: "Improves efficiency via recursion", optionTag: "B" },
                { optionText: "Can be parallelized", optionTag: "C" },
                { optionText: "Useful for large inputs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the time complexity of Binary Search?",
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
            questionText: "Which of the following is a real-life example of Divide and Conquer?",
            options: [
                { optionText: "Looking up a name in a phonebook", optionTag: "A" },
                { optionText: "Reading the full book cover to cover", optionTag: "B" },
                { optionText: "Linear search in a dictionary", optionTag: "C" },
                { optionText: "Reading every entry in a sorted list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following algorithms uses both Divide and Conquer and recursion?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Heap Sort", optionTag: "B" },
                { optionText: "Counting Sort", optionTag: "C" },
                { optionText: "Bucket Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Divide and Conquer is a subset of which paradigm?",
            options: [
                { optionText: "Algorithmic Design Techniques", optionTag: "A" },
                { optionText: "Graph Theory", optionTag: "B" },
                { optionText: "Combinatorics", optionTag: "C" },
                { optionText: "Automata Theory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which divide and conquer algorithm is often used in matrix multiplication?",
            options: [
                { optionText: "Strassen's Algorithm", optionTag: "A" },
                { optionText: "Bellman-Ford", optionTag: "B" },
                { optionText: "Kruskal's Algorithm", optionTag: "C" },
                { optionText: "BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which recursive algorithm uses divide and conquer for maximum subarray problem?",
            options: [
                { optionText: "Kadane’s algorithm (divide & conquer version)", optionTag: "A" },
                { optionText: "Floyd-Warshall", optionTag: "B" },
                { optionText: "Quick Select", optionTag: "C" },
                { optionText: "DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens in the 'combine' step of divide and conquer?",
            options: [
                { optionText: "Solutions of subproblems are merged", optionTag: "A" },
                { optionText: "Problem is split further", optionTag: "B" },
                { optionText: "Data is deleted", optionTag: "C" },
                { optionText: "Stack overflows", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which step does not involve recursion in Divide and Conquer?",
            options: [
                { optionText: "Combine step", optionTag: "A" },
                { optionText: "Divide step", optionTag: "B" },
                { optionText: "Solve subproblem", optionTag: "C" },
                { optionText: "All involve recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm has worst-case O(n log n) using Divide and Conquer?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a key challenge in implementing Divide and Conquer algorithms?",
            options: [
                { optionText: "Efficiently merging solutions", optionTag: "A" },
                { optionText: "Breaking problem", optionTag: "B" },
                { optionText: "Declaring variables", optionTag: "C" },
                { optionText: "Using console.log", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
