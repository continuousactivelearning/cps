import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Heaps - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic knowledge of Heaps in C++.",
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
                { optionText: "A binary search tree", optionTag: "B" },
                { optionText: "A balanced tree", optionTag: "C" },
                { optionText: "A linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main property of a min-heap?",
            options: [
                { optionText: "Parent is smaller than children", optionTag: "A" },
                { optionText: "Parent is larger than children", optionTag: "B" },
                { optionText: "All elements are equal", optionTag: "C" },
                { optionText: "Heap has no root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a max-heap, where is the largest element stored?",
            options: [
                { optionText: "At the root", optionTag: "A" },
                { optionText: "At the leftmost node", optionTag: "B" },
                { optionText: "At the rightmost node", optionTag: "C" },
                { optionText: "Anywhere", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used to implement heaps?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Linked List", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity to insert an element into a heap?",
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
            questionText: "What is the height of a heap with n elements?",
            options: [
                { optionText: "log n", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "n log n", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about a max-heap?",
            options: [
                { optionText: "Every parent is greater than its children", optionTag: "A" },
                { optionText: "Every parent is smaller than its children", optionTag: "B" },
                { optionText: "All values are equal", optionTag: "C" },
                { optionText: "No two nodes can have same value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm commonly uses a heap?",
            options: [
                { optionText: "Heap Sort", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Bubble Sort", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of deleting the root in a heap?",
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
            questionText: "Which STL container is used for heaps in C++?",
            options: [
                { optionText: "priority_queue", optionTag: "A" },
                { optionText: "stack", optionTag: "B" },
                { optionText: "vector", optionTag: "C" },
                { optionText: "set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are elements arranged in a min-heap?",
            options: [
                { optionText: "Smallest element at root", optionTag: "A" },
                { optionText: "Largest element at root", optionTag: "B" },
                { optionText: "Random", optionTag: "C" },
                { optionText: "Only leaf nodes matter", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not true about a heap?",
            options: [
                { optionText: "It is a complete binary tree", optionTag: "A" },
                { optionText: "It is used for priority queues", optionTag: "B" },
                { optionText: "All levels are fully filled", optionTag: "C" },
                { optionText: "It is always balanced", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the parent index of a node at index i in a heap?",
            options: [
                { optionText: "(i - 1) / 2", optionTag: "A" },
                { optionText: "2 * i", optionTag: "B" },
                { optionText: "i - 2", optionTag: "C" },
                { optionText: "i / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which heap is used in Dijkstra’s algorithm?",
            options: [
                { optionText: "Min-heap", optionTag: "A" },
                { optionText: "Max-heap", optionTag: "B" },
                { optionText: "Binary Search Tree", optionTag: "C" },
                { optionText: "AVL Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is 'heapify'?",
            options: [
                { optionText: "Process to maintain heap property", optionTag: "A" },
                { optionText: "Removing the heap", optionTag: "B" },
                { optionText: "Sorting a heap", optionTag: "C" },
                { optionText: "Deleting root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which heap allows constant-time access to the maximum element?",
            options: [
                { optionText: "Max-heap", optionTag: "A" },
                { optionText: "Min-heap", optionTag: "B" },
                { optionText: "Binary heap", optionTag: "C" },
                { optionText: "AVL heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function creates a heap in C++ STL?",
            options: [
                { optionText: "make_heap()", optionTag: "A" },
                { optionText: "build_heap()", optionTag: "B" },
                { optionText: "heapify()", optionTag: "C" },
                { optionText: "create_heap()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does pop_heap() do in C++ STL?",
            options: [
                { optionText: "Moves max element to the end", optionTag: "A" },
                { optionText: "Deletes root", optionTag: "B" },
                { optionText: "Deletes last element", optionTag: "C" },
                { optionText: "Clears the heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is true for heap sort?",
            options: [
                { optionText: "Worst-case time is O(n log n)", optionTag: "A" },
                { optionText: "Worst-case is O(n)", optionTag: "B" },
                { optionText: "Unstable sort", optionTag: "C" },
                { optionText: "Both A and C", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "In C++, which header provides heap functions?",
            options: [
                { optionText: "<algorithm>", optionTag: "A" },
                { optionText: "<heap>", optionTag: "B" },
                { optionText: "<queue>", optionTag: "C" },
                { optionText: "<vector>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
