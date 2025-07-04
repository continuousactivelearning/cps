import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Fenwick Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz evaluates your intermediate understanding of Fenwick Trees (Binary Indexed Trees) in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "FenwickTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is another name for Fenwick Tree?",
            options: [
                { optionText: "Binary Indexed Tree", optionTag: "A" },
                { optionText: "Segment Tree", optionTag: "B" },
                { optionText: "Heap Tree", optionTag: "C" },
                { optionText: "Trie", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity for updating a Fenwick Tree?",
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
            questionText: "What is the main purpose of a Fenwick Tree?",
            options: [
                { optionText: "Efficient prefix sum queries and updates", optionTag: "A" },
                { optionText: "Finding shortest paths", optionTag: "B" },
                { optionText: "Storing graph edges", optionTag: "C" },
                { optionText: "Sorting arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a Fenwick Tree typically implemented?",
            options: [
                { optionText: "Using arrays", optionTag: "A" },
                { optionText: "Using stacks", optionTag: "B" },
                { optionText: "Using queues", optionTag: "C" },
                { optionText: "Using heaps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What bitwise operator is commonly used in Fenwick Tree operations?",
            options: [
                { optionText: "& (bitwise AND)", optionTag: "A" },
                { optionText: "| (bitwise OR)", optionTag: "B" },
                { optionText: "^ (bitwise XOR)", optionTag: "C" },
                { optionText: "~ (bitwise NOT)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the expression `index & -index` return in Fenwick Tree?",
            options: [
                { optionText: "The least significant set bit", optionTag: "A" },
                { optionText: "The most significant bit", optionTag: "B" },
                { optionText: "Bit count of the index", optionTag: "C" },
                { optionText: "All set bits", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a Fenwick Tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Fenwick Tree, how do you move to the next index during update?",
            options: [
                { optionText: "index += index & -index", optionTag: "A" },
                { optionText: "index += 1", optionTag: "B" },
                { optionText: "index *= 2", optionTag: "C" },
                { optionText: "index >>= 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `index -= index & -index` do in Fenwick Tree?",
            options: [
                { optionText: "Moves to the parent node", optionTag: "A" },
                { optionText: "Moves to the next index", optionTag: "B" },
                { optionText: "Clears all bits", optionTag: "C" },
                { optionText: "Finds maximum value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical use case of Fenwick Tree?",
            options: [
                { optionText: "Range sum queries and updates", optionTag: "A" },
                { optionText: "Graph traversals", optionTag: "B" },
                { optionText: "String searching", optionTag: "C" },
                { optionText: "Matrix multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is not efficient in Fenwick Tree?",
            options: [
                { optionText: "Range minimum query", optionTag: "A" },
                { optionText: "Prefix sum", optionTag: "B" },
                { optionText: "Single element update", optionTag: "C" },
                { optionText: "Prefix average", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you initialize a Fenwick Tree?",
            options: [
                { optionText: "By creating an array of size n+1", optionTag: "A" },
                { optionText: "Using a queue", optionTag: "B" },
                { optionText: "Calling setTree()", optionTag: "C" },
                { optionText: "Using a heapify method", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used for prefix sum in Fenwick Tree?",
            options: [
                { optionText: "query(index)", optionTag: "A" },
                { optionText: "sum(index)", optionTag: "B" },
                { optionText: "get(index)", optionTag: "C" },
                { optionText: "search(index)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to update a Fenwick Tree?",
            options: [
                { optionText: "update(index, value)", optionTag: "A" },
                { optionText: "insert(index, value)", optionTag: "B" },
                { optionText: "replace(index, value)", optionTag: "C" },
                { optionText: "push(index, value)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can a Fenwick Tree be used to calculate range sum?",
            options: [
                { optionText: "Yes, using prefix sum difference", optionTag: "A" },
                { optionText: "Only for complete arrays", optionTag: "B" },
                { optionText: "No, it supports only individual values", optionTag: "C" },
                { optionText: "Only in O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is faster in Fenwick Tree than a Segment Tree?",
            options: [
                { optionText: "Prefix sum update", optionTag: "A" },
                { optionText: "Finding min element", optionTag: "B" },
                { optionText: "Finding max element", optionTag: "C" },
                { optionText: "Binary search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the indexing used in Fenwick Tree implementation?",
            options: [
                { optionText: "1-based indexing", optionTag: "A" },
                { optionText: "0-based indexing", optionTag: "B" },
                { optionText: "Negative indexing", optionTag: "C" },
                { optionText: "Dynamic indexing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the limitation of Fenwick Tree?",
            options: [
                { optionText: "Cannot handle range minimum queries efficiently", optionTag: "A" },
                { optionText: "Uses too much space", optionTag: "B" },
                { optionText: "Cannot do updates", optionTag: "C" },
                { optionText: "Slow for prefix sums", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which scenario is ideal for using a Fenwick Tree?",
            options: [
                { optionText: "Many prefix sum queries and updates", optionTag: "A" },
                { optionText: "Graph shortest path queries", optionTag: "B" },
                { optionText: "Matrix traversal", optionTag: "C" },
                { optionText: "Balanced tree operations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
