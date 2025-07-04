import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Sliding Window - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz assesses your understanding of the sliding window technique in JavaScript at an intermediate level.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SlidingWindow"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary benefit of using the sliding window technique?",
            options: [
                { optionText: "Reduces time complexity by avoiding redundant calculations", optionTag: "A" },
                { optionText: "Increases space complexity", optionTag: "B" },
                { optionText: "Increases recursion depth", optionTag: "C" },
                { optionText: "Used to traverse trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a fixed-size sliding window, what remains constant during iteration?",
            options: [
                { optionText: "Window size", optionTag: "A" },
                { optionText: "Window sum", optionTag: "B" },
                { optionText: "Array length", optionTag: "C" },
                { optionText: "Window start index", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What are the two pointers typically used in sliding window problems?",
            options: [
                { optionText: "start and end", optionTag: "A" },
                { optionText: "left and right", optionTag: "B" },
                { optionText: "i and j", optionTag: "C" },
                { optionText: "begin and limit", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a typical use case for the sliding window algorithm?",
            options: [
                { optionText: "Maximum sum subarray of size k", optionTag: "A" },
                { optionText: "Sorting an array", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Depth-first search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does the sliding window move?",
            options: [
                { optionText: "By adding one element to the window and removing one from the start", optionTag: "A" },
                { optionText: "By shifting the entire array", optionTag: "B" },
                { optionText: "By jumping k elements", optionTag: "C" },
                { optionText: "By rotating the array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method would you use to remove the first element from a JavaScript array in a sliding window?",
            options: [
                { optionText: "shift()", optionTag: "A" },
                { optionText: "pop()", optionTag: "B" },
                { optionText: "slice()", optionTag: "C" },
                { optionText: "splice()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of a basic sliding window for finding max sum of k-length subarray?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(nk)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(k^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems is a good candidate for a variable-size sliding window?",
            options: [
                { optionText: "Longest substring without repeating characters", optionTag: "A" },
                { optionText: "Binary Search in a sorted array", optionTag: "B" },
                { optionText: "Balanced Parentheses", optionTag: "C" },
                { optionText: "Sum of digits", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can we track character frequency efficiently in a sliding window problem?",
            options: [
                { optionText: "Using a hash map", optionTag: "A" },
                { optionText: "Using a for loop only", optionTag: "B" },
                { optionText: "Using a queue", optionTag: "C" },
                { optionText: "Using recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript method returns a shallow copy of an array portion?",
            options: [
                { optionText: "slice()", optionTag: "A" },
                { optionText: "splice()", optionTag: "B" },
                { optionText: "filter()", optionTag: "C" },
                { optionText: "reduce()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which situation is NOT suitable for sliding window?",
            options: [
                { optionText: "When overlapping subproblems are required", optionTag: "A" },
                { optionText: "Random access of elements", optionTag: "B" },
                { optionText: "Continuous range queries", optionTag: "C" },
                { optionText: "Fixed-length substring evaluations", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following can be used with a deque for optimized sliding window problems?",
            options: [
                { optionText: "Monotonic Queue", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Map", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When using sliding window, which technique helps find the minimum in a window?",
            options: [
                { optionText: "Monotonic increasing deque", optionTag: "A" },
                { optionText: "Using priority queue", optionTag: "B" },
                { optionText: "Using max heap", optionTag: "C" },
                { optionText: "Using recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the space complexity of a sliding window algorithm without auxiliary structures?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(k)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which approach is often used for minimum/maximum sliding window problems?",
            options: [
                { optionText: "Deque", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems uses a dynamic-size window?",
            options: [
                { optionText: "Smallest subarray with sum ≥ target", optionTag: "A" },
                { optionText: "Maximum sum subarray of size K", optionTag: "B" },
                { optionText: "Binary search for an element", optionTag: "C" },
                { optionText: "Stack maximum element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you slide the window forward in an array?",
            options: [
                { optionText: "Increment the start and end indices", optionTag: "A" },
                { optionText: "Reset all values", optionTag: "B" },
                { optionText: "Double the window size", optionTag: "C" },
                { optionText: "Insert at start", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Sliding window technique helps convert nested loops to:",
            options: [
                { optionText: "Single loop", optionTag: "A" },
                { optionText: "Tree traversal", optionTag: "B" },
                { optionText: "Recursion", optionTag: "C" },
                { optionText: "Map function", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "For fixed-size window, what is the window end condition?",
            options: [
                { optionText: "end < arr.length", optionTag: "A" },
                { optionText: "start = end", optionTag: "B" },
                { optionText: "start > end", optionTag: "C" },
                { optionText: "window size is zero", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used for sliding window maximum?",
            options: [
                { optionText: "Deque", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Hash Map", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
