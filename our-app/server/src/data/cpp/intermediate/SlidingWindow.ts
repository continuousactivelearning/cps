import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Sliding Window - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate knowledge of the Sliding Window technique in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SlidingWindow"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the Sliding Window technique primarily used for?",
            options: [
                { optionText: "Optimizing time complexity for subarray problems", optionTag: "A" },
                { optionText: "Sorting arrays", optionTag: "B" },
                { optionText: "Recursion", optionTag: "C" },
                { optionText: "Dynamic Memory Allocation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of finding max sum subarray of size k using sliding window?",
            options: [
                { optionText: "O(N)", optionTag: "A" },
                { optionText: "O(N*K)", optionTag: "B" },
                { optionText: "O(K)", optionTag: "C" },
                { optionText: "O(log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is often used in advanced sliding window problems?",
            options: [
                { optionText: "Deque", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Linked List", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the sliding window technique, what happens when the window is 'slid'?",
            options: [
                { optionText: "One element is removed from start and one is added to end", optionTag: "A" },
                { optionText: "All elements are reversed", optionTag: "B" },
                { optionText: "Entire array is copied", optionTag: "C" },
                { optionText: "Window size changes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of the basic sliding window approach?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(K)", optionTag: "C" },
                { optionText: "O(log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems can be solved using sliding window?",
            options: [
                { optionText: "Longest substring without repeating characters", optionTag: "A" },
                { optionText: "Depth First Search", optionTag: "B" },
                { optionText: "Binary Tree Inorder Traversal", optionTag: "C" },
                { optionText: "Floyd-Warshall Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition usually triggers shrinking the window?",
            options: [
                { optionText: "A constraint is violated", optionTag: "A" },
                { optionText: "Input ends", optionTag: "B" },
                { optionText: "All elements become 0", optionTag: "C" },
                { optionText: "Window is empty", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s a common use case for a variable-size sliding window?",
            options: [
                { optionText: "Finding smallest subarray with a sum ≥ target", optionTag: "A" },
                { optionText: "Sorting fixed-length arrays", optionTag: "B" },
                { optionText: "Finding frequency of digits", optionTag: "C" },
                { optionText: "Counting loops", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which loop structure is commonly used with sliding window?",
            options: [
                { optionText: "Two pointers with while loop", optionTag: "A" },
                { optionText: "Nested for-loops", optionTag: "B" },
                { optionText: "Do-while loop only", optionTag: "C" },
                { optionText: "Recursive calls", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should you do when expanding the window?",
            options: [
                { optionText: "Include next element and update required variable", optionTag: "A" },
                { optionText: "Delete all previous values", optionTag: "B" },
                { optionText: "Shrink the window", optionTag: "C" },
                { optionText: "Restart the loop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key advantage of sliding window over brute-force?",
            options: [
                { optionText: "Reduces time complexity significantly", optionTag: "A" },
                { optionText: "Uses more space", optionTag: "B" },
                { optionText: "Increases loop count", optionTag: "C" },
                { optionText: "Increases function calls", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following C++ STL containers is ideal for maximum in window of size k?",
            options: [
                { optionText: "Deque", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Vector", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity to find max in each window of size k using deque?",
            options: [
                { optionText: "O(N)", optionTag: "A" },
                { optionText: "O(N*K)", optionTag: "B" },
                { optionText: "O(N log N)", optionTag: "C" },
                { optionText: "O(K)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a sliding window of size 3 over array [1,2,3,4]?",
            options: [
                { optionText: "[1,2,3], [2,3,4]", optionTag: "A" },
                { optionText: "[1,2], [2,3]", optionTag: "B" },
                { optionText: "[1], [2], [3]", optionTag: "C" },
                { optionText: "[1,3,4]", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In C++, which header file provides deque?",
            options: [
                { optionText: "<deque>", optionTag: "A" },
                { optionText: "<vector>", optionTag: "B" },
                { optionText: "<stack>", optionTag: "C" },
                { optionText: "<queue>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why do we pop elements from back of deque?",
            options: [
                { optionText: "To maintain decreasing order for max value", optionTag: "A" },
                { optionText: "To keep it sorted", optionTag: "B" },
                { optionText: "To add space", optionTag: "C" },
                { optionText: "To free memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be the size of deque at any point in max window problem?",
            options: [
                { optionText: "Less than or equal to window size", optionTag: "A" },
                { optionText: "Always equals window size", optionTag: "B" },
                { optionText: "Greater than window size", optionTag: "C" },
                { optionText: "Empty", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a brute-force alternative to sliding window?",
            options: [
                { optionText: "Nested loops", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "BFS", optionTag: "C" },
                { optionText: "Recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when deque front is out of current window?",
            options: [
                { optionText: "Pop it from front", optionTag: "A" },
                { optionText: "Pop from back", optionTag: "B" },
                { optionText: "Ignore it", optionTag: "C" },
                { optionText: "Insert it again", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Sliding window is often combined with which algorithmic technique?",
            options: [
                { optionText: "Two Pointers", optionTag: "A" },
                { optionText: "Backtracking", optionTag: "B" },
                { optionText: "Recursion", optionTag: "C" },
                { optionText: "Dynamic Allocation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
