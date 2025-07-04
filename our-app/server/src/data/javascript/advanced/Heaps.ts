import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Heaps - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced knowledge of heaps in JavaScript, including heap types, operations, and applications like priority queues and heap sort.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Heaps"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary property that distinguishes a heap data structure?",
            options: [
                { optionText: "Heap property (parent nodes follow a specific ordering)", optionTag: "A" },
                { optionText: "All nodes have exactly two children", optionTag: "B" },
                { optionText: "Nodes are sorted in inorder traversal", optionTag: "C" },
                { optionText: "Nodes store only unique values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a correct description of a max heap?",
            options: [
                { optionText: "Parent node is greater than or equal to its children", optionTag: "A" },
                { optionText: "Parent node is smaller than or equal to its children", optionTag: "B" },
                { optionText: "Nodes are sorted level by level", optionTag: "C" },
                { optionText: "All leaf nodes have the same value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of inserting an element into a heap of size n?",
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
            questionText: "Which data structure is commonly used to implement a priority queue?",
            options: [
                { optionText: "Heap", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Linked list", optionTag: "C" },
                { optionText: "Hash table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of extracting the root element from a heap?",
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
            questionText: "In JavaScript, which array index corresponds to the parent of the element at index i in a binary heap?",
            options: [
                { optionText: "Math.floor((i - 1) / 2)", optionTag: "A" },
                { optionText: "i / 2", optionTag: "B" },
                { optionText: "i - 1", optionTag: "C" },
                { optionText: "Math.ceil(i / 2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a valid operation for a heap?",
            options: [
                { optionText: "Searching for an arbitrary element in O(log n)", optionTag: "A" },
                { optionText: "Extracting the min or max element", optionTag: "B" },
                { optionText: "Inserting a new element", optionTag: "C" },
                { optionText: "Heapifying an array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the 'heapify' operation do?",
            options: [
                { optionText: "Transforms an unsorted array into a valid heap", optionTag: "A" },
                { optionText: "Sorts the array", optionTag: "B" },
                { optionText: "Deletes the root element", optionTag: "C" },
                { optionText: "Balances a binary search tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a min heap different from a max heap?",
            options: [
                { optionText: "Min heap's parent node is smaller or equal to children", optionTag: "A" },
                { optionText: "Min heap nodes are always positive", optionTag: "B" },
                { optionText: "Min heap stores sorted elements", optionTag: "C" },
                { optionText: "Min heap uses linked nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of storing a heap of n elements using an array?",
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
            questionText: "Which of the following is a common use case for heaps in algorithms?",
            options: [
                { optionText: "Dijkstra's shortest path algorithm", optionTag: "A" },
                { optionText: "Depth-first search", optionTag: "B" },
                { optionText: "Topological sort", optionTag: "C" },
                { optionText: "Binary search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you restore the heap property after extracting the root?",
            options: [
                { optionText: "Heapify down (sift down)", optionTag: "A" },
                { optionText: "Heapify up (sift up)", optionTag: "B" },
                { optionText: "Rebuild entire heap", optionTag: "C" },
                { optionText: "Swap root with last leaf only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you insert elements into a heap in sorted ascending order?",
            options: [
                { optionText: "Heap structure is maintained with O(log n) inserts", optionTag: "A" },
                { optionText: "Heap becomes a sorted array", optionTag: "B" },
                { optionText: "Heap property breaks", optionTag: "C" },
                { optionText: "Insertion takes O(n) time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of tree is a binary heap?",
            options: [
                { optionText: "Complete binary tree", optionTag: "A" },
                { optionText: "Full binary tree", optionTag: "B" },
                { optionText: "Perfect binary tree", optionTag: "C" },
                { optionText: "Degenerate tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these JavaScript array methods is useful when implementing a heap?",
            options: [
                { optionText: "push and pop", optionTag: "A" },
                { optionText: "shift and unshift", optionTag: "B" },
                { optionText: "slice and splice", optionTag: "C" },
                { optionText: "concat and join", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Heap sort has which of the following time complexities?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the first step when inserting a new element into a heap?",
            options: [
                { optionText: "Add element at the end of the array", optionTag: "A" },
                { optionText: "Replace the root", optionTag: "B" },
                { optionText: "Heapify entire array", optionTag: "C" },
                { optionText: "Remove the smallest element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following correctly represents the children indices of element at index i in a binary heap array?",
            options: [
                { optionText: "2i + 1 and 2i + 2", optionTag: "A" },
                { optionText: "i/2 and i/2 + 1", optionTag: "B" },
                { optionText: "i-1 and i+1", optionTag: "C" },
                { optionText: "i*2 and i*2 + 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a property of a binary heap?",
            options: [
                { optionText: "Heap is a complete binary tree", optionTag: "A" },
                { optionText: "Every parent node is greater than children (in max heap)", optionTag: "B" },
                { optionText: "Heap nodes are sorted in-order", optionTag: "C" },
                { optionText: "Heap supports efficient extract-max or extract-min", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the purpose of 'sift up' operation in a heap?",
            options: [
                { optionText: "Restore heap property after insertion", optionTag: "A" },
                { optionText: "Restore heap property after deletion", optionTag: "B" },
                { optionText: "Sort heap elements", optionTag: "C" },
                { optionText: "Find maximum element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
