import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Segment Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced knowledge of Segment Trees in JavaScript, covering construction, queries, updates, and optimization techniques.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SegmentTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity to build a segment tree for an array of size n?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n²)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity for a single range query in a segment tree?",
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
            questionText: "What is the size of the array used to store a segment tree for n elements?",
            options: [
                { optionText: "Approximately 4 * n", optionTag: "A" },
                { optionText: "Exactly n", optionTag: "B" },
                { optionText: "n log n", optionTag: "C" },
                { optionText: "2 * n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of queries can a segment tree efficiently answer?",
            options: [
                { optionText: "Range queries like sum, min, max", optionTag: "A" },
                { optionText: "Point queries only", optionTag: "B" },
                { optionText: "Only sum queries", optionTag: "C" },
                { optionText: "Only min queries", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique is used to improve update operations on segment trees?",
            options: [
                { optionText: "Lazy propagation", optionTag: "A" },
                { optionText: "Binary search", optionTag: "B" },
                { optionText: "DFS traversal", optionTag: "C" },
                { optionText: "Queue optimization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does lazy propagation in a segment tree help with?",
            options: [
                { optionText: "Efficient range updates without updating all nodes immediately", optionTag: "A" },
                { optionText: "Faster queries only", optionTag: "B" },
                { optionText: "Memory optimization", optionTag: "C" },
                { optionText: "Sorting the array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you represent the parent of node i in a segment tree stored in an array?",
            options: [
                { optionText: "Math.floor((i - 1) / 2)", optionTag: "A" },
                { optionText: "i / 2", optionTag: "B" },
                { optionText: "2 * i", optionTag: "C" },
                { optionText: "i + 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the range covered by the root node of a segment tree?",
            options: [
                { optionText: "The entire array", optionTag: "A" },
                { optionText: "Single element", optionTag: "B" },
                { optionText: "First half of the array", optionTag: "C" },
                { optionText: "Last element only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is commonly used to build a segment tree?",
            options: [
                { optionText: "Post-order traversal", optionTag: "A" },
                { optionText: "Pre-order traversal", optionTag: "B" },
                { optionText: "In-order traversal", optionTag: "C" },
                { optionText: "Level-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you perform a range sum query on a segment tree?",
            options: [
                { optionText: "Combine sums from relevant child nodes covering the range", optionTag: "A" },
                { optionText: "Iterate over the array elements in the range", optionTag: "B" },
                { optionText: "Use binary search to find sum", optionTag: "C" },
                { optionText: "Use a priority queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity for updating a single element in a segment tree?",
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
            questionText: "In lazy propagation, what does the lazy array store?",
            options: [
                { optionText: "Updates to be applied later to segments", optionTag: "A" },
                { optionText: "Current segment sums", optionTag: "B" },
                { optionText: "Node depths", optionTag: "C" },
                { optionText: "Number of queries", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a valid application of segment trees?",
            options: [
                { optionText: "Range minimum query (RMQ)", optionTag: "A" },
                { optionText: "Sorting arrays", optionTag: "B" },
                { optionText: "Graph shortest paths", optionTag: "C" },
                { optionText: "Matrix multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case when building a segment tree recursively?",
            options: [
                { optionText: "When the segment represents a single element", optionTag: "A" },
                { optionText: "When the segment is empty", optionTag: "B" },
                { optionText: "When the segment is the entire array", optionTag: "C" },
                { optionText: "When segment size is two", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you update a range using lazy propagation?",
            options: [
                { optionText: "Mark the segment as lazy and update children only when required", optionTag: "A" },
                { optionText: "Update all nodes immediately", optionTag: "B" },
                { optionText: "Skip the update", optionTag: "C" },
                { optionText: "Rebuild the entire tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure does a segment tree resemble?",
            options: [
                { optionText: "A full binary tree", optionTag: "A" },
                { optionText: "A linked list", optionTag: "B" },
                { optionText: "A stack", optionTag: "C" },
                { optionText: "A hash map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why are segment trees preferred over Fenwick trees for certain problems?",
            options: [
                { optionText: "Segment trees can handle a wider variety of queries, like min/max", optionTag: "A" },
                { optionText: "Fenwick trees are slower", optionTag: "B" },
                { optionText: "Fenwick trees cannot handle sum queries", optionTag: "C" },
                { optionText: "Segment trees use less memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you calculate the left child index of a node at index i in an array-based segment tree?",
            options: [
                { optionText: "2 * i + 1", optionTag: "A" },
                { optionText: "2 * i", optionTag: "B" },
                { optionText: "i + 1", optionTag: "C" },
                { optionText: "i / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens to the size of the segment tree array if n is not a power of two?",
            options: [
                { optionText: "It is rounded up to the next power of two and array size ~ 4*n", optionTag: "A" },
                { optionText: "Array size stays n", optionTag: "B" },
                { optionText: "Array size is n log n", optionTag: "C" },
                { optionText: "Array size is always 2*n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which technique helps reduce the number of nodes visited in a query on a segment tree?",
            options: [
                { optionText: "Pruning irrelevant branches", optionTag: "A" },
                { optionText: "Linear search", optionTag: "B" },
                { optionText: "Recursion elimination", optionTag: "C" },
                { optionText: "Sorting nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
