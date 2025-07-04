import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Binary Search - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced knowledge of Binary Search algorithms in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinarySearch"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following problems can be efficiently solved using Binary Search?",
            options: [
                { optionText: "Finding the square root of a number", optionTag: "A" },
                { optionText: "Topological sorting", optionTag: "B" },
                { optionText: "DFS traversal", optionTag: "C" },
                { optionText: "MST construction", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base condition in recursive binary search?",
            options: [
                { optionText: "low > high", optionTag: "A" },
                { optionText: "low == high", optionTag: "B" },
                { optionText: "mid == target", optionTag: "C" },
                { optionText: "low != high", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of binary search?",
            options: [
                { optionText: "O(log N)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(N log N)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you avoid overflow in binary search while calculating mid?",
            options: [
                { optionText: "mid = low + (high - low) / 2", optionTag: "A" },
                { optionText: "mid = (low + high) / 2", optionTag: "B" },
                { optionText: "mid = low * high / 2", optionTag: "C" },
                { optionText: "mid = low - high / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can be solved using Binary Search on the answer?",
            options: [
                { optionText: "Minimum speed to arrive on time", optionTag: "A" },
                { optionText: "Finding max in an array", optionTag: "B" },
                { optionText: "Sum of digits", optionTag: "C" },
                { optionText: "Prefix sum", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript function is commonly used for sorting before binary search?",
            options: [
                { optionText: "array.sort((a,b) => a - b)", optionTag: "A" },
                { optionText: "array.reverse()", optionTag: "B" },
                { optionText: "array.push()", optionTag: "C" },
                { optionText: "array.join()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best-case time complexity of binary search?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log N)", optionTag: "B" },
                { optionText: "O(N)", optionTag: "C" },
                { optionText: "O(N log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search requires the array to be:",
            options: [
                { optionText: "Sorted", optionTag: "A" },
                { optionText: "Reversed", optionTag: "B" },
                { optionText: "All positive", optionTag: "C" },
                { optionText: "Non-empty", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a possible bug in binary search?",
            options: [
                { optionText: "Infinite loop due to incorrect mid update", optionTag: "A" },
                { optionText: "Stack overflow", optionTag: "B" },
                { optionText: "Memory leak", optionTag: "C" },
                { optionText: "Deadlock", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search can be applied to which of the following data structures?",
            options: [
                { optionText: "Sorted arrays", optionTag: "A" },
                { optionText: "Stacks", optionTag: "B" },
                { optionText: "Queues", optionTag: "C" },
                { optionText: "Heaps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search on decreasing sorted array must compare using:",
            options: [
                { optionText: "target > arr[mid]", optionTag: "A" },
                { optionText: "target == arr[mid]", optionTag: "B" },
                { optionText: "target < arr[mid]", optionTag: "C" },
                { optionText: "target != arr[mid]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is ternary search?",
            options: [
                { optionText: "Search dividing array in 3 parts", optionTag: "A" },
                { optionText: "Three binary searches", optionTag: "B" },
                { optionText: "Recursively halve array", optionTag: "C" },
                { optionText: "Divide and conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a typical use case of binary search?",
            options: [
                { optionText: "Hash table lookups", optionTag: "A" },
                { optionText: "Finding peak in mountain array", optionTag: "B" },
                { optionText: "Searching in rotated array", optionTag: "C" },
                { optionText: "Binary search on answer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which strategy allows binary search to be used for optimization problems?",
            options: [
                { optionText: "Binary search on answer space", optionTag: "A" },
                { optionText: "Linear search", optionTag: "B" },
                { optionText: "Greedy", optionTag: "C" },
                { optionText: "Brute force", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of problems is 'search in rotated sorted array'?",
            options: [
                { optionText: "Modified binary search", optionTag: "A" },
                { optionText: "Linear scan", optionTag: "B" },
                { optionText: "Dynamic programming", optionTag: "C" },
                { optionText: "Greedy", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Binary search can be applied on a monotonic function to:",
            options: [
                { optionText: "Find minimal satisfying value", optionTag: "A" },
                { optionText: "Count values", optionTag: "B" },
                { optionText: "Print all values", optionTag: "C" },
                { optionText: "Multiply values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the best way to find the first occurrence of an element using binary search?",
            options: [
                { optionText: "Modify the high pointer after match", optionTag: "A" },
                { optionText: "Return immediately after match", optionTag: "B" },
                { optionText: "Search from start again", optionTag: "C" },
                { optionText: "Use linear search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to find insert position of an element in sorted array using binary search?",
            options: [
                { optionText: "Track low as insertion point", optionTag: "A" },
                { optionText: "Track high as insertion point", optionTag: "B" },
                { optionText: "Use stack", optionTag: "C" },
                { optionText: "Use prefix sum", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is similar to binary search for 2D matrix?",
            options: [
                { optionText: "Flatten 2D to 1D index and apply binary search", optionTag: "A" },
                { optionText: "Row-wise traversal", optionTag: "B" },
                { optionText: "Column-wise scan", optionTag: "C" },
                { optionText: "Use nested loops", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can binary search be applied to non-integer domains (like floating points)?",
            options: [
                { optionText: "Yes, with a precision threshold", optionTag: "A" },
                { optionText: "No, works only with integers", optionTag: "B" },
                { optionText: "Only with strings", optionTag: "C" },
                { optionText: "Only in Java", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
