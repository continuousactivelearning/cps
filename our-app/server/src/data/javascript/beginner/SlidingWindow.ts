import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Sliding Window - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your basic understanding of the Sliding Window technique in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SlidingWindow"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the Sliding Window technique used for?",
            options: [
                { optionText: "Efficiently handling subarray problems", optionTag: "A" },
                { optionText: "Sorting arrays", optionTag: "B" },
                { optionText: "Searching in trees", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the usual time complexity of Sliding Window algorithms?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of problems benefit most from Sliding Window?",
            options: [
                { optionText: "Contiguous subarray problems", optionTag: "A" },
                { optionText: "Recursive tree problems", optionTag: "B" },
                { optionText: "Sorting", optionTag: "C" },
                { optionText: "Graph coloring", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Sliding Window, what does the window represent?",
            options: [
                { optionText: "A subset of the array", optionTag: "A" },
                { optionText: "A pointer to the start of the array", optionTag: "B" },
                { optionText: "A sorted array", optionTag: "C" },
                { optionText: "A new array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many pointers are typically used in the Sliding Window approach?",
            options: [
                { optionText: "Two", optionTag: "A" },
                { optionText: "One", optionTag: "B" },
                { optionText: "Three", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript array method is often used in Sliding Window problems?",
            options: [
                { optionText: "slice()", optionTag: "A" },
                { optionText: "push()", optionTag: "B" },
                { optionText: "pop()", optionTag: "C" },
                { optionText: "filter()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is an example use-case for Sliding Window?",
            options: [
                { optionText: "Maximum sum subarray of size k", optionTag: "A" },
                { optionText: "Depth First Search", optionTag: "B" },
                { optionText: "Binary Tree traversal", optionTag: "C" },
                { optionText: "Graph adjacency list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a fixed-size sliding window?",
            options: [
                { optionText: "Window with constant length", optionTag: "A" },
                { optionText: "Window that keeps growing", optionTag: "B" },
                { optionText: "Window that shrinks", optionTag: "C" },
                { optionText: "Undefined window", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does 'shrinking window' mean in Sliding Window?",
            options: [
                { optionText: "Reducing window size to meet a condition", optionTag: "A" },
                { optionText: "Removing elements permanently", optionTag: "B" },
                { optionText: "Reversing array", optionTag: "C" },
                { optionText: "Sorting elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens to the time complexity if nested loops are used instead of Sliding Window?",
            options: [
                { optionText: "It increases to O(n^2)", optionTag: "A" },
                { optionText: "It stays O(n)", optionTag: "B" },
                { optionText: "It becomes O(1)", optionTag: "C" },
                { optionText: "It decreases", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem can be solved using Sliding Window?",
            options: [
                { optionText: "Find longest substring with K distinct characters", optionTag: "A" },
                { optionText: "Find median of array", optionTag: "B" },
                { optionText: "Merge sort", optionTag: "C" },
                { optionText: "Quick sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which variable usually moves forward in a sliding window?",
            options: [
                { optionText: "Right pointer", optionTag: "A" },
                { optionText: "Left pointer only", optionTag: "B" },
                { optionText: "Both simultaneously", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What condition typically ends a Sliding Window loop?",
            options: [
                { optionText: "Right pointer reaches array end", optionTag: "A" },
                { optionText: "Left pointer reaches start", optionTag: "B" },
                { optionText: "Array is reversed", optionTag: "C" },
                { optionText: "Window is empty", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Sliding Window avoids which type of algorithm inefficiency?",
            options: [
                { optionText: "Redundant computations", optionTag: "A" },
                { optionText: "Low memory", optionTag: "B" },
                { optionText: "Recursion", optionTag: "C" },
                { optionText: "Stack overflow", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which variable is adjusted to shrink the window?",
            options: [
                { optionText: "Left pointer", optionTag: "A" },
                { optionText: "Right pointer", optionTag: "B" },
                { optionText: "Window size", optionTag: "C" },
                { optionText: "Array size", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the 'window size' mean?",
            options: [
                { optionText: "Number of elements between two pointers", optionTag: "A" },
                { optionText: "Total length of array", optionTag: "B" },
                { optionText: "Size of the largest element", optionTag: "C" },
                { optionText: "Size of the function", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is Sliding Window technique greedy?",
            options: [
                { optionText: "No, it's based on two pointers", optionTag: "A" },
                { optionText: "Yes, always greedy", optionTag: "B" },
                { optionText: "Sometimes recursive", optionTag: "C" },
                { optionText: "Dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What helps to keep track of character frequencies in substring problems?",
            options: [
                { optionText: "Hash map", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can window size change in sliding window problems?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in sorted arrays", optionTag: "C" },
                { optionText: "Only in graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT solved by Sliding Window?",
            options: [
                { optionText: "Finding maximum element in range", optionTag: "A" },
                { optionText: "Binary tree traversal", optionTag: "B" },
                { optionText: "Longest subarray with sum", optionTag: "C" },
                { optionText: "Smallest substring with characters", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        }
    ]
};

export default quizData;
