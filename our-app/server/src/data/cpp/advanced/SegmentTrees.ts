import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Segment Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of Segment Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SegmentTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of building a Segment Tree for an array of size n?",
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
            questionText: "Which operation can be performed efficiently using a Segment Tree?",
            options: [
                { optionText: "Range Sum Query", optionTag: "A" },
                { optionText: "Finding Maximum Subarray", optionTag: "B" },
                { optionText: "Sorting an Array", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a Segment Tree for an array of size n?",
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
            questionText: "Which data structure is used internally to implement a Segment Tree efficiently?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Linked List", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How much memory does a Segment Tree typically require?",
            options: [
                { optionText: "About 4n", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "n log n", optionTag: "C" },
                { optionText: "n^2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity for a point update in Segment Tree?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function is typically used to build a Segment Tree recursively?",
            options: [
                { optionText: "Build()", optionTag: "A" },
                { optionText: "Insert()", optionTag: "B" },
                { optionText: "Update()", optionTag: "C" },
                { optionText: "Merge()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens in a Segment Tree when a range update is performed without lazy propagation?",
            options: [
                { optionText: "O(n) time per update", optionTag: "A" },
                { optionText: "O(log n) time per update", optionTag: "B" },
                { optionText: "O(1) time", optionTag: "C" },
                { optionText: "O(n log n) time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is lazy propagation used in Segment Trees?",
            options: [
                { optionText: "To optimize range updates", optionTag: "A" },
                { optionText: "To reduce memory usage", optionTag: "B" },
                { optionText: "To allow faster insertions", optionTag: "C" },
                { optionText: "To implement deletion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is stored at each internal node of a Segment Tree?",
            options: [
                { optionText: "Aggregate value (like sum/min/max) of a segment", optionTag: "A" },
                { optionText: "Only one array element", optionTag: "B" },
                { optionText: "Index of max value", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following queries can Segment Trees solve?",
            options: [
                { optionText: "Range Minimum Query", optionTag: "A" },
                { optionText: "Counting sort", optionTag: "B" },
                { optionText: "Binary Search Tree Search", optionTag: "C" },
                { optionText: "BFS Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is a Segment Tree preferred over a Binary Indexed Tree (Fenwick Tree)?",
            options: [
                { optionText: "When both range updates and queries are needed", optionTag: "A" },
                { optionText: "When only point updates are needed", optionTag: "B" },
                { optionText: "When memory is limited", optionTag: "C" },
                { optionText: "When data is sparse", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you determine the middle of a segment during tree construction?",
            options: [
                { optionText: "mid = (start + end) / 2", optionTag: "A" },
                { optionText: "mid = start * end", optionTag: "B" },
                { optionText: "mid = end - start", optionTag: "C" },
                { optionText: "mid = (start + end) / 4", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key idea in implementing a lazy update?",
            options: [
                { optionText: "Deferring the update until necessary", optionTag: "A" },
                { optionText: "Updating all child nodes eagerly", optionTag: "B" },
                { optionText: "Using recursion without condition", optionTag: "C" },
                { optionText: "Resetting node values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of a Segment Tree for n elements?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(4n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which scenario is best handled by a Segment Tree?",
            options: [
                { optionText: "Dynamic range queries", optionTag: "A" },
                { optionText: "Sorting data", optionTag: "B" },
                { optionText: "Hashing keys", optionTag: "C" },
                { optionText: "Linear search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about Segment Trees?",
            options: [
                { optionText: "They require fixed size arrays", optionTag: "A" },
                { optionText: "They can be generalized to multiple operations", optionTag: "B" },
                { optionText: "They use hash tables", optionTag: "C" },
                { optionText: "They sort data internally", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Can Segment Trees be used for 2D arrays?",
            options: [
                { optionText: "Yes, with modification", optionTag: "A" },
                { optionText: "No, they are strictly 1D", optionTag: "B" },
                { optionText: "Only in C language", optionTag: "C" },
                { optionText: "Only for small arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which tree traversal is used when building a Segment Tree recursively?",
            options: [
                { optionText: "Postorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is stored in a lazy tree alongside the Segment Tree?",
            options: [
                { optionText: "Delayed updates for nodes", optionTag: "A" },
                { optionText: "Sorted data", optionTag: "B" },
                { optionText: "Minimum index of segment", optionTag: "C" },
                { optionText: "Array pointers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
