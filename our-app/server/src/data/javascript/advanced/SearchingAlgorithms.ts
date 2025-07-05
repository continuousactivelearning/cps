import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Searching Algorithms - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz evaluates advanced concepts in searching algorithms implemented in JavaScript, including binary search variants, interpolation search, exponential search, and their complexities.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SearchingAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of binary search on a sorted array?",
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
            questionText: "Which condition must be true for binary search to work correctly?",
            options: [
                { optionText: "Array must be sorted", optionTag: "A" },
                { optionText: "Array must be unsorted", optionTag: "B" },
                { optionText: "Array must contain unique elements", optionTag: "C" },
                { optionText: "Array must be cyclic", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is interpolation search best suited for?",
            options: [
                { optionText: "Uniformly distributed sorted arrays", optionTag: "A" },
                { optionText: "Unsorted arrays", optionTag: "B" },
                { optionText: "Linked lists", optionTag: "C" },
                { optionText: "Sparse arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the average time complexity of interpolation search?",
            options: [
                { optionText: "O(log log n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What differentiates exponential search from binary search?",
            options: [
                { optionText: "It finds the range to apply binary search first", optionTag: "A" },
                { optionText: "It works on unsorted arrays", optionTag: "B" },
                { optionText: "It only works on linked lists", optionTag: "C" },
                { optionText: "It is iterative only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of exponential search?",
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
            questionText: "Which searching algorithm adapts well for infinite or unbounded arrays?",
            options: [
                { optionText: "Exponential search", optionTag: "A" },
                { optionText: "Linear search", optionTag: "B" },
                { optionText: "Interpolation search", optionTag: "C" },
                { optionText: "Jump search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In jump search, what is the optimal jump size?",
            options: [
                { optionText: "√n", optionTag: "A" },
                { optionText: "log n", optionTag: "B" },
                { optionText: "n/2", optionTag: "C" },
                { optionText: "n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of linear search?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main limitation of binary search on linked lists?",
            options: [
                { optionText: "No direct index access, so O(n) to reach mid element", optionTag: "A" },
                { optionText: "It only works on doubly linked lists", optionTag: "B" },
                { optionText: "It requires sorted data", optionTag: "C" },
                { optionText: "It uses too much memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which search algorithm divides the array into blocks before searching?",
            options: [
                { optionText: "Jump search", optionTag: "A" },
                { optionText: "Interpolation search", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Linear search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best case time complexity for linear search?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which searching algorithm can be optimized using Fibonacci numbers?",
            options: [
                { optionText: "Fibonacci search", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Interpolation search", optionTag: "C" },
                { optionText: "Jump search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a key difference between Fibonacci search and binary search?",
            options: [
                { optionText: "Fibonacci search divides array using Fibonacci numbers, binary uses mid element", optionTag: "A" },
                { optionText: "Fibonacci search works only on linked lists", optionTag: "B" },
                { optionText: "Binary search is recursive, Fibonacci is not", optionTag: "C" },
                { optionText: "Fibonacci search is faster always", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the expected number of probes in interpolation search for uniformly distributed data?",
            options: [
                { optionText: "O(log log n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which search algorithm can perform poorly on non-uniform data distributions?",
            options: [
                { optionText: "Interpolation search", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Jump search", optionTag: "C" },
                { optionText: "Linear search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, what is a common pitfall when implementing binary search?",
            options: [
                { optionText: "Integer overflow when calculating mid index", optionTag: "A" },
                { optionText: "Missing base case", optionTag: "B" },
                { optionText: "Using recursive functions", optionTag: "C" },
                { optionText: "Sorting the array inside the search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to avoid integer overflow when calculating mid in binary search?",
            options: [
                { optionText: "Use mid = low + Math.floor((high - low) / 2)", optionTag: "A" },
                { optionText: "Use mid = (low + high) / 2", optionTag: "B" },
                { optionText: "Use bitwise AND", optionTag: "C" },
                { optionText: "Use global variables", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about recursive binary search?",
            options: [
                { optionText: "Uses O(log n) time and O(log n) space", optionTag: "A" },
                { optionText: "Uses O(n) space", optionTag: "B" },
                { optionText: "Uses O(1) space", optionTag: "C" },
                { optionText: "Not applicable", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which search algorithm is most suitable for searching in an unsorted array?",
            options: [
                { optionText: "Linear search", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Interpolation search", optionTag: "C" },
                { optionText: "Jump search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
