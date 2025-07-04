import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Sliding Window - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of Sliding Window techniques in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SlidingWindow"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of finding the maximum sum subarray of size k using sliding window?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(k)", optionTag: "B" },
                { optionText: "O(nk)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is most efficient for solving sliding window maximum problems?",
            options: [
                { optionText: "Deque", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you detect the longest substring without repeating characters using sliding window?",
            options: [
                { optionText: "Two pointer approach with a set", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Dynamic programming", optionTag: "C" },
                { optionText: "Sorting and scanning", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems is NOT typically solved using sliding window?",
            options: [
                { optionText: "Finding duplicates in an array", optionTag: "A" },
                { optionText: "Maximum sum subarray of size k", optionTag: "B" },
                { optionText: "Longest substring with at most k distinct characters", optionTag: "C" },
                { optionText: "Minimum window substring", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the sliding window approach, what is the primary condition for moving the window's right boundary?",
            options: [
                { optionText: "When the constraint is not violated", optionTag: "A" },
                { optionText: "When array is sorted", optionTag: "B" },
                { optionText: "When space is exhausted", optionTag: "C" },
                { optionText: "Always, regardless of conditions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of sliding window maximum using deque?",
            options: [
                { optionText: "O(k)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL container best models a double-ended queue?",
            options: [
                { optionText: "std::deque", optionTag: "A" },
                { optionText: "std::vector", optionTag: "B" },
                { optionText: "std::list", optionTag: "C" },
                { optionText: "std::queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a sliding window algorithm, which condition typically reduces the window size?",
            options: [
                { optionText: "When the constraint is violated", optionTag: "A" },
                { optionText: "When window sum is minimum", optionTag: "B" },
                { optionText: "After sorting elements", optionTag: "C" },
                { optionText: "When size reaches k", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does the sliding window approach help in optimization?",
            options: [
                { optionText: "Avoids recomputing overlapping subproblems", optionTag: "A" },
                { optionText: "Sorts the array", optionTag: "B" },
                { optionText: "Increases recursion depth", optionTag: "C" },
                { optionText: "Uses memoization table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a key advantage of the sliding window technique?",
            options: [
                { optionText: "Improves time complexity from O(n^2) to O(n)", optionTag: "A" },
                { optionText: "Reduces space complexity to O(n^2)", optionTag: "B" },
                { optionText: "Uses divide and conquer", optionTag: "C" },
                { optionText: "Works only with sorted arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a key difference between fixed and variable sliding window?",
            options: [
                { optionText: "Fixed has a constant window size, variable adjusts dynamically", optionTag: "A" },
                { optionText: "Variable uses recursion", optionTag: "B" },
                { optionText: "Fixed uses a tree", optionTag: "C" },
                { optionText: "No difference exists", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can we implement the minimum size subarray sum problem using sliding window?",
            options: [
                { optionText: "Shrink window from left while sum >= target", optionTag: "A" },
                { optionText: "Expand window indefinitely", optionTag: "B" },
                { optionText: "Use nested loops", optionTag: "C" },
                { optionText: "Sort and scan", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ technique helps avoid TLE in sliding window problems on large inputs?",
            options: [
                { optionText: "Using fast I/O and preallocation", optionTag: "A" },
                { optionText: "Using vector always", optionTag: "B" },
                { optionText: "Avoiding STL completely", optionTag: "C" },
                { optionText: "Using recursion for each query", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to maintain frequency of characters in sliding window string problems?",
            options: [
                { optionText: "Use unordered_map or array[256]", optionTag: "A" },
                { optionText: "Use stack", optionTag: "B" },
                { optionText: "Use queue", optionTag: "C" },
                { optionText: "Use recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a use-case of sliding window on a circular array?",
            options: [
                { optionText: "Max element in circular window", optionTag: "A" },
                { optionText: "DFS traversal", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Linked list operations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is deque used in maximum sliding window?",
            options: [
                { optionText: "To maintain max elements efficiently", optionTag: "A" },
                { optionText: "To sort the window", optionTag: "B" },
                { optionText: "To maintain prefix sums", optionTag: "C" },
                { optionText: "To count characters", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if window boundaries are not updated correctly?",
            options: [
                { optionText: "Incorrect or infinite loops", optionTag: "A" },
                { optionText: "Correct output still produced", optionTag: "B" },
                { optionText: "Runtime error always", optionTag: "C" },
                { optionText: "Memory leak", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What sliding window concept helps avoid recomputation of sums?",
            options: [
                { optionText: "Subtract left element and add right", optionTag: "A" },
                { optionText: "Recalculate entire window sum", optionTag: "B" },
                { optionText: "Sort and pick largest", optionTag: "C" },
                { optionText: "Use prefix sum array always", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem benefits from both sliding window and hashmap?",
            options: [
                { optionText: "Longest substring without repeats", optionTag: "A" },
                { optionText: "Heapify", optionTag: "B" },
                { optionText: "Array rotation", optionTag: "C" },
                { optionText: "Matrix multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which two pointers typically define a sliding window?",
            options: [
                { optionText: "Start and end", optionTag: "A" },
                { optionText: "Left and mid", optionTag: "B" },
                { optionText: "Top and bottom", optionTag: "C" },
                { optionText: "Prev and next", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
