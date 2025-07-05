import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Heaps - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate knowledge of Heaps in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Heaps"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a heap?",
            options: [
                { optionText: "A complete binary tree satisfying heap property", optionTag: "A" },
                { optionText: "A balanced BST", optionTag: "B" },
                { optionText: "An unsorted array", optionTag: "C" },
                { optionText: "A singly linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity to insert an element into a binary heap?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity to find the minimum element in a min-heap?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript structure can efficiently implement a heap?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Set", optionTag: "B" },
                { optionText: "Map", optionTag: "C" },
                { optionText: "Object", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the parent index of any child at index i in a binary heap?",
            options: [
                { optionText: "Math.floor((i - 1) / 2)", optionTag: "A" },
                { optionText: "Math.floor((i + 1) / 2)", optionTag: "B" },
                { optionText: "2 * i + 1", optionTag: "C" },
                { optionText: "2 * i", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a min-heap, the root node contains:",
            options: [
                { optionText: "The minimum value", optionTag: "A" },
                { optionText: "The maximum value", optionTag: "B" },
                { optionText: "A random value", optionTag: "C" },
                { optionText: "The median value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the last index at which children nodes can exist in a binary heap of size n?",
            options: [
                { optionText: "Math.floor((n - 2) / 2)", optionTag: "A" },
                { optionText: "n - 1", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "n / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation restores the heap property from top to bottom?",
            options: [
                { optionText: "Heapify", optionTag: "A" },
                { optionText: "Push", optionTag: "B" },
                { optionText: "Pop", optionTag: "C" },
                { optionText: "Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when you pop from a min-heap?",
            options: [
                { optionText: "Root is removed and replaced with last element, then heapified", optionTag: "A" },
                { optionText: "Only root is deleted", optionTag: "B" },
                { optionText: "Heap is sorted", optionTag: "C" },
                { optionText: "Middle element is deleted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of heapify?",
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
            questionText: "What is the time complexity of building a heap from an array of n elements?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is not a valid heap type?",
            options: [
                { optionText: "Max-heap", optionTag: "A" },
                { optionText: "Min-heap", optionTag: "B" },
                { optionText: "Sum-heap", optionTag: "C" },
                { optionText: "Ternary-heap", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "In a max-heap, where is the largest value?",
            options: [
                { optionText: "At the root", optionTag: "A" },
                { optionText: "At the left-most node", optionTag: "B" },
                { optionText: "At the right-most leaf", optionTag: "C" },
                { optionText: "At the deepest node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is commonly used in Dijkstra’s algorithm?",
            options: [
                { optionText: "Min-heap (priority queue)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Hash map", optionTag: "C" },
                { optionText: "Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the child index for a parent at index i?",
            options: [
                { optionText: "Left: 2*i + 1, Right: 2*i + 2", optionTag: "A" },
                { optionText: "Left: i + 1, Right: i + 2", optionTag: "B" },
                { optionText: "Left: i * 2, Right: i * 2 + 1", optionTag: "C" },
                { optionText: "Left: 2*i, Right: 2*i+1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a common use case of heaps?",
            options: [
                { optionText: "Priority queues", optionTag: "A" },
                { optionText: "Linked list traversal", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Depth-first search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm uses heaps for sorting?",
            options: [
                { optionText: "Heap Sort", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can heaps be used to implement a median finder?",
            options: [
                { optionText: "Yes, with min-heap and max-heap", optionTag: "A" },
                { optionText: "No, not possible", optionTag: "B" },
                { optionText: "Only with one max-heap", optionTag: "C" },
                { optionText: "Only with one min-heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which library provides a heap implementation in JavaScript?",
            options: [
                { optionText: "heapify-js", optionTag: "A" },
                { optionText: "lodash", optionTag: "B" },
                { optionText: "underscore", optionTag: "C" },
                { optionText: "fs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property must be true for all heaps?",
            options: [
                { optionText: "Complete binary tree", optionTag: "A" },
                { optionText: "Perfect binary tree", optionTag: "B" },
                { optionText: "Balanced BST", optionTag: "C" },
                { optionText: "AVL tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
