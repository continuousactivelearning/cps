import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Heaps - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate knowledge of Heaps in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Heaps"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which data structure is used to implement a heap?",
            options: [
                { optionText: "Binary tree", optionTag: "A" },
                { optionText: "Hash table", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations has O(log n) time complexity in a binary heap?",
            options: [
                { optionText: "Insertion", optionTag: "A" },
                { optionText: "Search", optionTag: "B" },
                { optionText: "Access maximum", optionTag: "C" },
                { optionText: "Build heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL container is used for heap operations?",
            options: [
                { optionText: "priority_queue", optionTag: "A" },
                { optionText: "stack", optionTag: "B" },
                { optionText: "map", optionTag: "C" },
                { optionText: "set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of heap is used in priority queues?",
            options: [
                { optionText: "Binary heap", optionTag: "A" },
                { optionText: "Min-max heap", optionTag: "B" },
                { optionText: "Binomial heap", optionTag: "C" },
                { optionText: "Fibonacci heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity to build a heap from an unsorted array?",
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
            questionText: "What is the maximum number of children a node can have in a binary heap?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "Unlimited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following maintains the heap property?",
            options: [
                { optionText: "Each parent is greater than or equal to its children", optionTag: "A" },
                { optionText: "Each child is greater than or equal to its parent", optionTag: "B" },
                { optionText: "All nodes are equal", optionTag: "C" },
                { optionText: "No specific order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true for a max heap?",
            options: [
                { optionText: "Root node contains the maximum value", optionTag: "A" },
                { optionText: "All leaves have maximum values", optionTag: "B" },
                { optionText: "Root node is null", optionTag: "C" },
                { optionText: "Every node has two children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the index of the parent of node at index i in a 0-based heap array?",
            options: [
                { optionText: "(i - 1) / 2", optionTag: "A" },
                { optionText: "i / 2", optionTag: "B" },
                { optionText: "(i + 1) / 2", optionTag: "C" },
                { optionText: "2i + 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a min-heap, which element is guaranteed to be smallest?",
            options: [
                { optionText: "Root", optionTag: "A" },
                { optionText: "Leaf", optionTag: "B" },
                { optionText: "Middle node", optionTag: "C" },
                { optionText: "Any node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function in C++ creates a max heap from a range?",
            options: [
                { optionText: "make_heap()", optionTag: "A" },
                { optionText: "create_heap()", optionTag: "B" },
                { optionText: "build_heap()", optionTag: "C" },
                { optionText: "heapify()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the purpose of `pop_heap()` in C++ STL?",
            options: [
                { optionText: "Moves the max element to the end", optionTag: "A" },
                { optionText: "Deletes the heap", optionTag: "B" },
                { optionText: "Adds an element to heap", optionTag: "C" },
                { optionText: "Sorts the heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function maintains the heap after changing root?",
            options: [
                { optionText: "heapify", optionTag: "A" },
                { optionText: "balance", optionTag: "B" },
                { optionText: "adjust", optionTag: "C" },
                { optionText: "align", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Heaps are mainly used in which of the following?",
            options: [
                { optionText: "Priority queues", optionTag: "A" },
                { optionText: "Hashing", optionTag: "B" },
                { optionText: "Linked lists", optionTag: "C" },
                { optionText: "Matrix operations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm uses heaps for efficient performance?",
            options: [
                { optionText: "Heap sort", optionTag: "A" },
                { optionText: "Merge sort", optionTag: "B" },
                { optionText: "Quick sort", optionTag: "C" },
                { optionText: "Bubble sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time for deleting the root from a heap?",
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
            questionText: "Which function in C++ removes the element from a heap container?",
            options: [
                { optionText: "pop_heap()", optionTag: "A" },
                { optionText: "extract_max()", optionTag: "B" },
                { optionText: "remove()", optionTag: "C" },
                { optionText: "delete()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property distinguishes a heap from a BST?",
            options: [
                { optionText: "Heap does not guarantee ordering between siblings", optionTag: "A" },
                { optionText: "Heap is always sorted", optionTag: "B" },
                { optionText: "BST has constant depth", optionTag: "C" },
                { optionText: "Heap is balanced", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node in a heap has no children?",
            options: [
                { optionText: "Leaf node", optionTag: "A" },
                { optionText: "Root node", optionTag: "B" },
                { optionText: "Middle node", optionTag: "C" },
                { optionText: "Any node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In heap sort, what is done after building the heap?",
            options: [
                { optionText: "Extract max and heapify", optionTag: "A" },
                { optionText: "Insert at end", optionTag: "B" },
                { optionText: "Search minimum", optionTag: "C" },
                { optionText: "Rebuild heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
