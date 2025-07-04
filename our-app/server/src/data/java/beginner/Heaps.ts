// src/data/java/beginner/heaps.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Heaps - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your basic understanding of Heaps in Java.",
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
                { optionText: "A linked list", optionTag: "B" },
                { optionText: "A hash table", optionTag: "C" },
                { optionText: "A graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What are the two types of heaps?",
            options: [
                { optionText: "Min Heap and Max Heap", optionTag: "A" },
                { optionText: "Small Heap and Large Heap", optionTag: "B" },
                { optionText: "Ordered and Unordered", optionTag: "C" },
                { optionText: "Sorted and Unsorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the root element in a Min Heap?",
            options: [
                { optionText: "Smallest element", optionTag: "A" },
                { optionText: "Largest element", optionTag: "B" },
                { optionText: "Random element", optionTag: "C" },
                { optionText: "Middle element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java class is commonly used to implement heaps?",
            options: [
                { optionText: "PriorityQueue", optionTag: "A" },
                { optionText: "ArrayList", optionTag: "B" },
                { optionText: "LinkedList", optionTag: "C" },
                { optionText: "TreeMap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of inserting into a heap?",
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
            questionText: "Which of the following maintains the heap property after insertion?",
            options: [
                { optionText: "Heapify", optionTag: "A" },
                { optionText: "Sort", optionTag: "B" },
                { optionText: "Traverse", optionTag: "C" },
                { optionText: "Pop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a Max Heap, each parent node is:",
            options: [
                { optionText: "Greater than or equal to its children", optionTag: "A" },
                { optionText: "Smaller than its children", optionTag: "B" },
                { optionText: "Equal to its children", optionTag: "C" },
                { optionText: "Random", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the index of the left child of a node at index i (0-based) in a heap?",
            options: [
                { optionText: "2*i + 1", optionTag: "A" },
                { optionText: "2*i", optionTag: "B" },
                { optionText: "i + 1", optionTag: "C" },
                { optionText: "i - 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a characteristic of a heap?",
            options: [
                { optionText: "Always complete binary tree", optionTag: "A" },
                { optionText: "Maintains heap order", optionTag: "B" },
                { optionText: "Sorted array", optionTag: "C" },
                { optionText: "Root has min or max value", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which algorithm uses heaps to sort data?",
            options: [
                { optionText: "Heap Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Quick Sort", optionTag: "C" },
                { optionText: "Bubble Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a complete binary heap with n elements?",
            options: [
                { optionText: "log n", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "sqrt(n)", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation takes the least time in a heap?",
            options: [
                { optionText: "Accessing the root", optionTag: "A" },
                { optionText: "Insertion", optionTag: "B" },
                { optionText: "Deletion", optionTag: "C" },
                { optionText: "Heapify", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the parent index of node at index i in a heap?",
            options: [
                { optionText: "(i-1)/2", optionTag: "A" },
                { optionText: "i/2", optionTag: "B" },
                { optionText: "2*i", optionTag: "C" },
                { optionText: "i+1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is not a valid heap operation?",
            options: [
                { optionText: "Traverse in-order", optionTag: "A" },
                { optionText: "Insert", optionTag: "B" },
                { optionText: "Delete min/max", optionTag: "C" },
                { optionText: "Heapify", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is commonly used to implement a heap?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Linked List", optionTag: "B" },
                { optionText: "Graph", optionTag: "C" },
                { optionText: "TreeSet", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does PriorityQueue in Java use under the hood?",
            options: [
                { optionText: "Min Heap", optionTag: "A" },
                { optionText: "Max Heap", optionTag: "B" },
                { optionText: "Binary Tree", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
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
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about heaps?",
            options: [
                { optionText: "Every node is greater/smaller than its children", optionTag: "A" },
                { optionText: "Only leaf nodes have values", optionTag: "B" },
                { optionText: "Heap is always sorted", optionTag: "C" },
                { optionText: "Heap is a type of stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if we remove root in heap?",
            options: [
                { optionText: "It is replaced and heapified", optionTag: "A" },
                { optionText: "It is never removed", optionTag: "B" },
                { optionText: "Heap is deleted", optionTag: "C" },
                { optionText: "Nothing happens", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;