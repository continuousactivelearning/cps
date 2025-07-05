import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Two Pointers - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate understanding of the Two Pointers technique in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "TwoPointers"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which type of problems are best suited for the two-pointer technique?",
            options: [
                { optionText: "Sorted array problems", optionTag: "A" },
                { optionText: "Unsorted linked lists", optionTag: "B" },
                { optionText: "Graphs", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the primary goal of using two pointers?",
            options: [
                { optionText: "To reduce time complexity by avoiding nested loops", optionTag: "A" },
                { optionText: "To use extra space", optionTag: "B" },
                { optionText: "To avoid recursion", optionTag: "C" },
                { optionText: "To sort arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical time complexity of a two-pointer algorithm on a sorted array?",
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
            questionText: "Which scenario would best utilize two pointers?",
            options: [
                { optionText: "Finding a pair with a given sum in a sorted array", optionTag: "A" },
                { optionText: "Sorting an array", optionTag: "B" },
                { optionText: "Finding duplicates in an unsorted array", optionTag: "C" },
                { optionText: "Reversing a linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In two-pointer method, if array is sorted in ascending order and sum is less than target, which pointer moves?",
            options: [
                { optionText: "Left pointer moves right", optionTag: "A" },
                { optionText: "Right pointer moves left", optionTag: "B" },
                { optionText: "Both pointers reset", optionTag: "C" },
                { optionText: "No pointer moves", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is two-pointer commonly used with?",
            options: [
                { optionText: "Arrays", optionTag: "A" },
                { optionText: "Stacks", optionTag: "B" },
                { optionText: "Queues", optionTag: "C" },
                { optionText: "Graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique helps to check for palindromes using two pointers?",
            options: [
                { optionText: "Comparing characters from both ends", optionTag: "A" },
                { optionText: "Hashing", optionTag: "B" },
                { optionText: "Sorting", optionTag: "C" },
                { optionText: "Recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which two-pointer variation is used to partition arrays?",
            options: [
                { optionText: "Slow and fast pointer", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "Stack-based", optionTag: "C" },
                { optionText: "Queue rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Two-pointer is often combined with which other algorithm?",
            options: [
                { optionText: "Sorting", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a typical two-pointer algorithm?",
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
            questionText: "How are pointers usually initialized in a two-pointer approach?",
            options: [
                { optionText: "At start and end of array", optionTag: "A" },
                { optionText: "Both at the middle", optionTag: "B" },
                { optionText: "Randomly", optionTag: "C" },
                { optionText: "None of these", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if the array is not sorted in a two-pointer approach?",
            options: [
                { optionText: "It may not give correct results", optionTag: "A" },
                { optionText: "It always works", optionTag: "B" },
                { optionText: "It becomes faster", optionTag: "C" },
                { optionText: "It uses more memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Two pointers can also be used to reverse:",
            options: [
                { optionText: "An array in place", optionTag: "A" },
                { optionText: "A BST", optionTag: "B" },
                { optionText: "A heap", optionTag: "C" },
                { optionText: "A matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does fast-slow pointer technique help detect in a linked list?",
            options: [
                { optionText: "Cycle", optionTag: "A" },
                { optionText: "Middle element", optionTag: "B" },
                { optionText: "Tail", optionTag: "C" },
                { optionText: "Head", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which standard problem uses two pointers?",
            options: [
                { optionText: "Container With Most Water", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Minimum Spanning Tree", optionTag: "C" },
                { optionText: "BFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the mid-pointer calculated in binary search?",
            options: [
                { optionText: "(low + high) / 2", optionTag: "A" },
                { optionText: "low * high", optionTag: "B" },
                { optionText: "low - high", optionTag: "C" },
                { optionText: "(low - high) / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the use of two pointers in removing duplicates from sorted array?",
            options: [
                { optionText: "One iterates, one builds unique result", optionTag: "A" },
                { optionText: "Both iterate same pace", optionTag: "B" },
                { optionText: "To sort the array", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when left > right in two-pointer technique?",
            options: [
                { optionText: "Terminate loop", optionTag: "A" },
                { optionText: "Reset pointers", optionTag: "B" },
                { optionText: "Continue searching", optionTag: "C" },
                { optionText: "Swap pointers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of sorting uses two pointers internally?",
            options: [
                { optionText: "Merge Sort", optionTag: "A" },
                { optionText: "Heap Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which two pointer problem finds a pair with sum closest to target?",
            options: [
                { optionText: "Two Sum Closest", optionTag: "A" },
                { optionText: "Three Sum", optionTag: "B" },
                { optionText: "Max Area", optionTag: "C" },
                { optionText: "Palindrome Check", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
