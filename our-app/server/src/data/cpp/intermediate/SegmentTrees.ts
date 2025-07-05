import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Segment Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate knowledge of Segment Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SegmentTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main use of a segment tree?",
            options: [
                { optionText: "Range queries and updates", optionTag: "A" },
                { optionText: "Sorting elements", optionTag: "B" },
                { optionText: "Traversing trees", optionTag: "C" },
                { optionText: "Searching an element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of building a segment tree?",
            options: [
                { optionText: "O(N)", optionTag: "A" },
                { optionText: "O(N log N)", optionTag: "B" },
                { optionText: "O(log N)", optionTag: "C" },
                { optionText: "O(N^2)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the time complexity for range queries in a segment tree?",
            options: [
                { optionText: "O(log N)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(N log N)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is efficiently supported by segment trees?",
            options: [
                { optionText: "Range minimum/maximum/sum queries", optionTag: "A" },
                { optionText: "Matrix multiplication", optionTag: "B" },
                { optionText: "Graph traversal", optionTag: "C" },
                { optionText: "Sorting arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the segment tree typically implemented?",
            options: [
                { optionText: "Using arrays", optionTag: "A" },
                { optionText: "Using hash maps", optionTag: "B" },
                { optionText: "Using linked lists", optionTag: "C" },
                { optionText: "Using stacks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the size of the segment tree array for input size N?",
            options: [
                { optionText: "Approximately 4*N", optionTag: "A" },
                { optionText: "Exactly N", optionTag: "B" },
                { optionText: "Approximately 2*N", optionTag: "C" },
                { optionText: "Exactly log N", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to build a segment tree?",
            options: [
                { optionText: "Post-order", optionTag: "A" },
                { optionText: "In-order", optionTag: "B" },
                { optionText: "Pre-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can segment trees handle both point and range updates?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "Only point updates", optionTag: "B" },
                { optionText: "Only range updates", optionTag: "C" },
                { optionText: "No", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What technique is often used with segment trees for range updates?",
            options: [
                { optionText: "Lazy Propagation", optionTag: "A" },
                { optionText: "Depth First Search", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following queries can a segment tree solve?",
            options: [
                { optionText: "Range minimum query", optionTag: "A" },
                { optionText: "Matrix transpose", optionTag: "B" },
                { optionText: "Graph coloring", optionTag: "C" },
                { optionText: "Floyd Warshall", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the advantage of using Lazy Propagation?",
            options: [
                { optionText: "Efficient range updates", optionTag: "A" },
                { optionText: "Reduces memory", optionTag: "B" },
                { optionText: "Increases accuracy", optionTag: "C" },
                { optionText: "Avoids recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Segment trees are best used when...",
            options: [
                { optionText: "Frequent updates and queries are required", optionTag: "A" },
                { optionText: "Only sorting is needed", optionTag: "B" },
                { optionText: "Only one-time computation is needed", optionTag: "C" },
                { optionText: "Input size is very small", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about segment trees?",
            options: [
                { optionText: "They can be dynamic", optionTag: "A" },
                { optionText: "They are only static", optionTag: "B" },
                { optionText: "They do not support updates", optionTag: "C" },
                { optionText: "They are space inefficient", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which value does the segment tree node usually hold?",
            options: [
                { optionText: "Aggregate value over range", optionTag: "A" },
                { optionText: "Only one array element", optionTag: "B" },
                { optionText: "Pointer to child", optionTag: "C" },
                { optionText: "Binary flag", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you don’t use Lazy Propagation?",
            options: [
                { optionText: "Updates take more time", optionTag: "A" },
                { optionText: "Queries become faster", optionTag: "B" },
                { optionText: "Space complexity reduces", optionTag: "C" },
                { optionText: "Segment tree fails", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a variation of Segment Trees?",
            options: [
                { optionText: "Persistent Segment Tree", optionTag: "A" },
                { optionText: "Heap", optionTag: "B" },
                { optionText: "B-Tree", optionTag: "C" },
                { optionText: "Fenwick Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is faster for range queries: Segment Tree or Binary Indexed Tree?",
            options: [
                { optionText: "Both are similar in range query time", optionTag: "A" },
                { optionText: "Segment Tree is always faster", optionTag: "B" },
                { optionText: "BIT is faster for all operations", optionTag: "C" },
                { optionText: "Segment Tree is slower", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which structure can support multiple types of range queries simultaneously?",
            options: [
                { optionText: "Segment Tree", optionTag: "A" },
                { optionText: "Binary Search Tree", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the parent of node at index i in segment tree array?",
            options: [
                { optionText: "i / 2", optionTag: "A" },
                { optionText: "2 * i", optionTag: "B" },
                { optionText: "(i - 1) / 2", optionTag: "C" },
                { optionText: "2 * i + 1", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which index in array is the left child of i?",
            options: [
                { optionText: "2 * i + 1", optionTag: "A" },
                { optionText: "i / 2", optionTag: "B" },
                { optionText: "i - 1", optionTag: "C" },
                { optionText: "2 * i", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
