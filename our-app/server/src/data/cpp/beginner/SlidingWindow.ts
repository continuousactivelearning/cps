import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Sliding Window - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Sliding Window techniques in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SlidingWindow"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the Sliding Window technique mainly used for?",
            options: [
                { optionText: "Optimizing problems involving subarrays or substrings", optionTag: "A" },
                { optionText: "Sorting arrays", optionTag: "B" },
                { optionText: "Binary Tree traversal", optionTag: "C" },
                { optionText: "Graph search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems can be solved using Sliding Window?",
            options: [
                { optionText: "Maximum sum subarray of size k", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Floyd-Warshall", optionTag: "C" },
                { optionText: "Dijkstra's Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical time complexity of a Sliding Window solution?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Sliding Window, what usually determines the window size?",
            options: [
                { optionText: "Problem constraints", optionTag: "A" },
                { optionText: "Array length", optionTag: "B" },
                { optionText: "Tree depth", optionTag: "C" },
                { optionText: "Graph edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used with Sliding Window to track max/min values?",
            options: [
                { optionText: "Deque", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Priority Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main advantage of using Sliding Window over nested loops?",
            options: [
                { optionText: "Improved time complexity", optionTag: "A" },
                { optionText: "Larger memory usage", optionTag: "B" },
                { optionText: "Simpler syntax", optionTag: "C" },
                { optionText: "Better visualization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is a classical use case for Sliding Window?",
            options: [
                { optionText: "Longest substring with at most K distinct characters", optionTag: "A" },
                { optionText: "Fibonacci sequence", optionTag: "B" },
                { optionText: "Tower of Hanoi", optionTag: "C" },
                { optionText: "DFS of a graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does a sliding window typically move?",
            options: [
                { optionText: "One element at a time", optionTag: "A" },
                { optionText: "Two elements at a time", optionTag: "B" },
                { optionText: "Jumps based on input", optionTag: "C" },
                { optionText: "Always resets to zero", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What are the two pointers usually called in a Sliding Window?",
            options: [
                { optionText: "Start and End", optionTag: "A" },
                { optionText: "Front and Back", optionTag: "B" },
                { optionText: "Top and Bottom", optionTag: "C" },
                { optionText: "Root and Leaf", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which approach is more efficient for finding a fixed-size max sum subarray?",
            options: [
                { optionText: "Sliding Window", optionTag: "A" },
                { optionText: "Brute Force", optionTag: "B" },
                { optionText: "Recursion", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you initialize the first window sum?",
            options: [
                { optionText: "By summing the first k elements", optionTag: "A" },
                { optionText: "Using maximum element", optionTag: "B" },
                { optionText: "By sorting the array", optionTag: "C" },
                { optionText: "Setting all to zero", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens as the window slides forward?",
            options: [
                { optionText: "Remove the first element and add the next", optionTag: "A" },
                { optionText: "Restart the loop", optionTag: "B" },
                { optionText: "Clear the array", optionTag: "C" },
                { optionText: "Only add new element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Sliding Window is ideal when the input is:",
            options: [
                { optionText: "Sequential and requires overlapping subarray analysis", optionTag: "A" },
                { optionText: "Randomly scattered", optionTag: "B" },
                { optionText: "Only sorted", optionTag: "C" },
                { optionText: "Tree-based", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ container is best for a fixed-size sliding window sum?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Map", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Vector", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Sliding Window is a part of which algorithm paradigm?",
            options: [
                { optionText: "Two-pointer", optionTag: "A" },
                { optionText: "Divide and Conquer", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Greedy", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a use case of Sliding Window?",
            options: [
                { optionText: "Finding median in a range", optionTag: "A" },
                { optionText: "Graph coloring", optionTag: "B" },
                { optionText: "Minimum size subarray sum", optionTag: "C" },
                { optionText: "Longest substring without repeating characters", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the sliding window size in the problem 'Maximum Sum Subarray of Size K'?",
            options: [
                { optionText: "k", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "log n", optionTag: "C" },
                { optionText: "n - k", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is harder to solve with brute-force compared to Sliding Window?",
            options: [
                { optionText: "Longest subarray with sum ≤ K", optionTag: "A" },
                { optionText: "Check even numbers in array", optionTag: "B" },
                { optionText: "Count digits", optionTag: "C" },
                { optionText: "Calculate sum of array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the sliding window technique's key idea?",
            options: [
                { optionText: "Reuse previous computation to optimize", optionTag: "A" },
                { optionText: "Recursively divide input", optionTag: "B" },
                { optionText: "Create tree structures", optionTag: "C" },
                { optionText: "Sort the input array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when the sliding window size becomes invalid?",
            options: [
                { optionText: "Shrink from the left", optionTag: "A" },
                { optionText: "Expand indefinitely", optionTag: "B" },
                { optionText: "Clear the window", optionTag: "C" },
                { optionText: "Reverse the array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
