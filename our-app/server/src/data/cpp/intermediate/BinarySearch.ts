import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Binary Search - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate knowledge of Binary Search in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinarySearch"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of binary search in the worst case?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition is essential for binary search to work?",
            options: [
                { optionText: "Array must be sorted", optionTag: "A" },
                { optionText: "Array must be unsorted", optionTag: "B" },
                { optionText: "All elements must be distinct", optionTag: "C" },
                { optionText: "Array must be rotated", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will binary search return if the element is not present?",
            options: [
                { optionText: "-1 or some invalid index", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "Middle of array", optionTag: "C" },
                { optionText: "Last index", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In binary search, how is the middle index typically calculated?",
            options: [
                { optionText: "mid = low + (high - low) / 2", optionTag: "A" },
                { optionText: "mid = (low + high) / 2", optionTag: "B" },
                { optionText: "mid = low - (high + low) / 2", optionTag: "C" },
                { optionText: "mid = high + low", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What issue does using (low + high) / 2 cause?",
            options: [
                { optionText: "Integer overflow", optionTag: "A" },
                { optionText: "Compilation error", optionTag: "B" },
                { optionText: "Index out of bounds", optionTag: "C" },
                { optionText: "No issue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a binary search variation to find the first occurrence of an element?",
            options: [
                { optionText: "Modify binary search to continue on left even if element found", optionTag: "A" },
                { optionText: "Linear scan after binary search", optionTag: "B" },
                { optionText: "Reverse binary search", optionTag: "C" },
                { optionText: "Binary search with stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best case time complexity of binary search?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search can be applied on which of the following?",
            options: [
                { optionText: "Sorted arrays", optionTag: "A" },
                { optionText: "Sorted linked lists with random access", optionTag: "B" },
                { optionText: "Unsorted arrays", optionTag: "C" },
                { optionText: "Both A and B", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "In C++, which STL function implements binary search?",
            options: [
                { optionText: "binary_search()", optionTag: "A" },
                { optionText: "find()", optionTag: "B" },
                { optionText: "search()", optionTag: "C" },
                { optionText: "lookup()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does std::lower_bound() return in C++?",
            options: [
                { optionText: "Iterator to the first element not less than value", optionTag: "A" },
                { optionText: "Iterator to last element", optionTag: "B" },
                { optionText: "nullptr", optionTag: "C" },
                { optionText: "Iterator to the first element greater than value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is true for binary search on a rotated sorted array?",
            options: [
                { optionText: "It needs modification to handle rotation", optionTag: "A" },
                { optionText: "It works normally", optionTag: "B" },
                { optionText: "Cannot be used at all", optionTag: "C" },
                { optionText: "Only usable if array is strictly increasing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you use binary search to find a square root?",
            options: [
                { optionText: "Apply binary search on the number range", optionTag: "A" },
                { optionText: "Use DFS", optionTag: "B" },
                { optionText: "Use dynamic programming", optionTag: "C" },
                { optionText: "Use stack and queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is ternary search preferred over binary search?",
            options: [
                { optionText: "When function is unimodal", optionTag: "A" },
                { optionText: "On unsorted arrays", optionTag: "B" },
                { optionText: "When searching strings", optionTag: "C" },
                { optionText: "On constant-time access arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is best suited for binary search?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Linked list", optionTag: "B" },
                { optionText: "Graph", optionTag: "C" },
                { optionText: "Hash table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which binary search variation is used to find an element closest to target?",
            options: [
                { optionText: "Store min(abs(arr[mid] - target)) during traversal", optionTag: "A" },
                { optionText: "Use binary search normally", optionTag: "B" },
                { optionText: "Linear search after binary search", optionTag: "C" },
                { optionText: "Backtrack recursively", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is binary search preferred over linear search?",
            options: [
                { optionText: "More efficient for sorted data", optionTag: "A" },
                { optionText: "Less memory", optionTag: "B" },
                { optionText: "Works for all arrays", optionTag: "C" },
                { optionText: "No advantage", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can binary search be implemented recursively?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only for even length arrays", optionTag: "C" },
                { optionText: "Only for odd length arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of iterations in binary search for n elements?",
            options: [
                { optionText: "⌊log₂(n)⌋ + 1", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "n/2", optionTag: "C" },
                { optionText: "√n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of algorithm is binary search classified as?",
            options: [
                { optionText: "Divide and conquer", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Dynamic programming", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is NOT a valid use case for binary search?",
            options: [
                { optionText: "Finding peak element in bitonic array", optionTag: "A" },
                { optionText: "Searching in sorted array", optionTag: "B" },
                { optionText: "Finding element in unsorted array", optionTag: "C" },
                { optionText: "Finding square root of a number", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        }
    ]
};

export default quizData;
