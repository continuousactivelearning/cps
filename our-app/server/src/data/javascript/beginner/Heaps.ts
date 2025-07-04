import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Heaps - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your understanding of basic heap data structures and heap operations using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Heaps"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a heap?",
            options: [
                { optionText: "A complete binary tree", optionTag: "A" },
                { optionText: "A singly linked list", optionTag: "B" },
                { optionText: "A graph", optionTag: "C" },
                { optionText: "A hash table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What property does a min-heap satisfy?",
            options: [
                { optionText: "Parent is less than or equal to children", optionTag: "A" },
                { optionText: "Parent is greater than or equal to children", optionTag: "B" },
                { optionText: "All values are unique", optionTag: "C" },
                { optionText: "Values are in sorted order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript data structure is typically used to implement a heap?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Object", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of inserting into a heap?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation restores the heap property after insertion?",
            options: [
                { optionText: "Heapify up", optionTag: "A" },
                { optionText: "Heapify down", optionTag: "B" },
                { optionText: "Merge", optionTag: "C" },
                { optionText: "Split", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the root of a min-heap?",
            options: [
                { optionText: "Minimum element", optionTag: "A" },
                { optionText: "Maximum element", optionTag: "B" },
                { optionText: "Median element", optionTag: "C" },
                { optionText: "Random element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the 'heapify' function do?",
            options: [
                { optionText: "Restores heap property", optionTag: "A" },
                { optionText: "Sorts the array", optionTag: "B" },
                { optionText: "Deletes duplicates", optionTag: "C" },
                { optionText: "Converts object to heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which heap supports efficient access to maximum value?",
            options: [
                { optionText: "Max-heap", optionTag: "A" },
                { optionText: "Min-heap", optionTag: "B" },
                { optionText: "Binary Search Tree", optionTag: "C" },
                { optionText: "AVL Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the parent index of a node at index i in array representation of heap?",
            options: [
                { optionText: "Math.floor((i - 1) / 2)", optionTag: "A" },
                { optionText: "Math.floor((i + 1) / 2)", optionTag: "B" },
                { optionText: "Math.floor(i / 2)", optionTag: "C" },
                { optionText: "2 * i + 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a heap stored as array, what is left child index of node at i?",
            options: [
                { optionText: "2 * i + 1", optionTag: "A" },
                { optionText: "i + 1", optionTag: "B" },
                { optionText: "i - 1", optionTag: "C" },
                { optionText: "i / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation removes the root from the heap?",
            options: [
                { optionText: "Extract", optionTag: "A" },
                { optionText: "Pop", optionTag: "B" },
                { optionText: "Delete", optionTag: "C" },
                { optionText: "RemoveRoot", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of heapify-down operation?",
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
            questionText: "What is the height of a complete binary heap with n elements?",
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
            questionText: "Which JavaScript function is best to swap elements in heap array?",
            options: [
                { optionText: "A temporary variable", optionTag: "A" },
                { optionText: "splice()", optionTag: "B" },
                { optionText: "shift()", optionTag: "C" },
                { optionText: "push()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Heap is mainly used in which of the following applications?",
            options: [
                { optionText: "Priority Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Linked List", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about a heap?",
            options: [
                { optionText: "It is always a complete binary tree", optionTag: "A" },
                { optionText: "It is always balanced", optionTag: "B" },
                { optionText: "It stores only integers", optionTag: "C" },
                { optionText: "It uses hash tables", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which order is data removed from a min-heap?",
            options: [
                { optionText: "Ascending order", optionTag: "A" },
                { optionText: "Descending order", optionTag: "B" },
                { optionText: "Random order", optionTag: "C" },
                { optionText: "No order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which heap supports sorting via heap sort?",
            options: [
                { optionText: "Both min-heap and max-heap", optionTag: "A" },
                { optionText: "Only min-heap", optionTag: "B" },
                { optionText: "Only max-heap", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of building a heap from n elements?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is NOT a heap operation?",
            options: [
                { optionText: "Traversal", optionTag: "A" },
                { optionText: "Insert", optionTag: "B" },
                { optionText: "Extract min/max", optionTag: "C" },
                { optionText: "Heapify", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
