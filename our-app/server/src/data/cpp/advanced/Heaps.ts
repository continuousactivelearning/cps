import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Heaps - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced understanding of Heaps in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Heaps"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of inserting an element into a binary heap?",
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
            questionText: "Which standard C++ library provides heap operations?",
            options: [
                { optionText: "<algorithm>", optionTag: "A" },
                { optionText: "<heap>", optionTag: "B" },
                { optionText: "<queue>", optionTag: "C" },
                { optionText: "<utility>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity for deleting the root from a binary heap?",
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
            questionText: "Which of the following is true about a Min Heap?",
            options: [
                { optionText: "Parent node is smaller than children", optionTag: "A" },
                { optionText: "Parent node is greater than children", optionTag: "B" },
                { optionText: "Heap contains only even numbers", optionTag: "C" },
                { optionText: "Heap is always sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function is used to convert a range into a heap in C++?",
            options: [
                { optionText: "make_heap()", optionTag: "A" },
                { optionText: "build_heap()", optionTag: "B" },
                { optionText: "heapify()", optionTag: "C" },
                { optionText: "init_heap()", optionTag: "D" }
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
            questionText: "Which data structure is used in the implementation of a priority queue?",
            options: [
                { optionText: "Heap", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Linked List", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the default heap type in STL’s priority_queue?",
            options: [
                { optionText: "Max Heap", optionTag: "A" },
                { optionText: "Min Heap", optionTag: "B" },
                { optionText: "Binary Heap", optionTag: "C" },
                { optionText: "Fibonacci Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function is used to remove the largest element from a heap in C++ STL?",
            options: [
                { optionText: "pop_heap()", optionTag: "A" },
                { optionText: "delete_heap()", optionTag: "B" },
                { optionText: "remove_max()", optionTag: "C" },
                { optionText: "extract()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity for building a binary heap?",
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
            questionText: "What is the best data structure for implementing a scheduler?",
            options: [
                { optionText: "Min Heap", optionTag: "A" },
                { optionText: "Max Heap", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these operations is not directly supported by heaps?",
            options: [
                { optionText: "Searching for arbitrary element", optionTag: "A" },
                { optionText: "Insert element", optionTag: "B" },
                { optionText: "Delete root", optionTag: "C" },
                { optionText: "Find min/max", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which kind of heap is used in Dijkstra’s algorithm?",
            options: [
                { optionText: "Min Heap", optionTag: "A" },
                { optionText: "Max Heap", optionTag: "B" },
                { optionText: "Binary Heap", optionTag: "C" },
                { optionText: "Fibonacci Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which traversal can a binary heap be represented as an array?",
            options: [
                { optionText: "Level-order", optionTag: "A" },
                { optionText: "In-order", optionTag: "B" },
                { optionText: "Pre-order", optionTag: "C" },
                { optionText: "Post-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which heap operation maintains the heap property after deletion?",
            options: [
                { optionText: "Heapify", optionTag: "A" },
                { optionText: "Insert", optionTag: "B" },
                { optionText: "Pop", optionTag: "C" },
                { optionText: "Build", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the push_heap() function do?",
            options: [
                { optionText: "Adds an element and maintains heap property", optionTag: "A" },
                { optionText: "Removes root", optionTag: "B" },
                { optionText: "Clears heap", optionTag: "C" },
                { optionText: "Sorts heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which heap provides the best amortized complexity for decrease-key?",
            options: [
                { optionText: "Fibonacci Heap", optionTag: "A" },
                { optionText: "Binary Heap", optionTag: "B" },
                { optionText: "Binomial Heap", optionTag: "C" },
                { optionText: "Ternary Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a type of heap?",
            options: [
                { optionText: "Cartesian Heap", optionTag: "A" },
                { optionText: "Min-Max Heap", optionTag: "B" },
                { optionText: "Skew Heap", optionTag: "C" },
                { optionText: "Circular Heap", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which heap is used to maintain median in streaming data?",
            options: [
                { optionText: "Two heaps: max and min", optionTag: "A" },
                { optionText: "One max heap", optionTag: "B" },
                { optionText: "One min heap", optionTag: "C" },
                { optionText: "Binary search tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which heap supports quick merging?",
            options: [
                { optionText: "Fibonacci Heap", optionTag: "A" },
                { optionText: "Binary Heap", optionTag: "B" },
                { optionText: "Min Heap", optionTag: "C" },
                { optionText: "Max Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
