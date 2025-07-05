import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Divide and Conquer - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of the Divide and Conquer strategy in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DivideAndConquer"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the first step in the Divide and Conquer strategy?",
            options: [
                { optionText: "Divide the problem into subproblems", optionTag: "A" },
                { optionText: "Combine the solutions", optionTag: "B" },
                { optionText: "Sort the data", optionTag: "C" },
                { optionText: "Solve the base case", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is an example of Divide and Conquer?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Linear Search", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Floyd-Warshall", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case in Divide and Conquer?",
            options: [
                { optionText: "The smallest subproblem that can be solved directly", optionTag: "A" },
                { optionText: "The first call to the function", optionTag: "B" },
                { optionText: "The final combined result", optionTag: "C" },
                { optionText: "A loop condition", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting algorithm uses Divide and Conquer?",
            options: [
                { optionText: "Quick Sort", optionTag: "A" },
                { optionText: "Selection Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Merge Sort?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is not based on Divide and Conquer?",
            options: [
                { optionText: "Bubble Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Binary Search, what does 'divide' refer to?",
            options: [
                { optionText: "Splitting the array in half", optionTag: "A" },
                { optionText: "Sorting the array", optionTag: "B" },
                { optionText: "Merging two arrays", optionTag: "C" },
                { optionText: "Inserting elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is the correct recurrence for Merge Sort?",
            options: [
                { optionText: "T(n) = 2T(n/2) + O(n)", optionTag: "A" },
                { optionText: "T(n) = T(n-1) + O(1)", optionTag: "B" },
                { optionText: "T(n) = T(n/2) + O(1)", optionTag: "C" },
                { optionText: "T(n) = T(n-2) + O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these steps is NOT part of Divide and Conquer?",
            options: [
                { optionText: "Iterate", optionTag: "A" },
                { optionText: "Divide", optionTag: "B" },
                { optionText: "Conquer", optionTag: "C" },
                { optionText: "Combine", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of Merge Sort?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Quick Sort perform on already sorted data (worst case)?",
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
            questionText: "What does the 'conquer' step in Divide and Conquer do?",
            options: [
                { optionText: "Solves the subproblems recursively", optionTag: "A" },
                { optionText: "Divides input data", optionTag: "B" },
                { optionText: "Initializes arrays", optionTag: "C" },
                { optionText: "Sorts the original problem", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a key advantage of Divide and Conquer algorithms?",
            options: [
                { optionText: "They reduce time complexity", optionTag: "A" },
                { optionText: "They are always iterative", optionTag: "B" },
                { optionText: "They require no memory", optionTag: "C" },
                { optionText: "They work only on small data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function helps solve divide-and-conquer recurrences?",
            options: [
                { optionText: "Master Theorem", optionTag: "A" },
                { optionText: "Ackermann function", optionTag: "B" },
                { optionText: "Fibonacci formula", optionTag: "C" },
                { optionText: "Catalan formula", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Divide and Conquer is generally implemented using:",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "Loops", optionTag: "B" },
                { optionText: "Heaps", optionTag: "C" },
                { optionText: "Stacks only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems is best solved using Divide and Conquer?",
            options: [
                { optionText: "Finding maximum subarray", optionTag: "A" },
                { optionText: "Counting sort", optionTag: "B" },
                { optionText: "Linear search", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens after solving the subproblems in Divide and Conquer?",
            options: [
                { optionText: "Combine the solutions to solve the main problem", optionTag: "A" },
                { optionText: "Discard the results", optionTag: "B" },
                { optionText: "Repeat the process infinitely", optionTag: "C" },
                { optionText: "Return only the first result", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Quick Sort, what is the pivot?",
            options: [
                { optionText: "The element used to partition the array", optionTag: "A" },
                { optionText: "The maximum element", optionTag: "B" },
                { optionText: "The median value", optionTag: "C" },
                { optionText: "Always the first element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is the best case time complexity for Quick Sort?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of problems benefit from Divide and Conquer?",
            options: [
                { optionText: "Problems that can be broken into subproblems", optionTag: "A" },
                { optionText: "Single-step solutions", optionTag: "B" },
                { optionText: "Unstructured data", optionTag: "C" },
                { optionText: "Linear recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
