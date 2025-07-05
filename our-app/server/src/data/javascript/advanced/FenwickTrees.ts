import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Fenwick Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz challenges your advanced knowledge of Fenwick Trees (Binary Indexed Trees) in JavaScript, including construction, updates, queries, and applications.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "FenwickTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is another name for a Fenwick Tree?",
            options: [
                { optionText: "Binary Indexed Tree", optionTag: "A" },
                { optionText: "Segment Tree", optionTag: "B" },
                { optionText: "AVL Tree", optionTag: "C" },
                { optionText: "Prefix Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation does a Fenwick Tree optimize?",
            options: [
                { optionText: "Range sum query and point update", optionTag: "A" },
                { optionText: "Full array sort", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Linked list traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of a Fenwick Tree query?",
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
            questionText: "Which bitwise operation is essential for Fenwick Tree index manipulation?",
            options: [
                { optionText: "i & -i", optionTag: "A" },
                { optionText: "i ^ i", optionTag: "B" },
                { optionText: "i | i", optionTag: "C" },
                { optionText: "i << 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a Fenwick Tree typically stored in JavaScript?",
            options: [
                { optionText: "1-based indexed array", optionTag: "A" },
                { optionText: "Linked list", optionTag: "B" },
                { optionText: "Object with keys", optionTag: "C" },
                { optionText: "2D matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the formula to move to parent in a Fenwick Tree?",
            options: [
                { optionText: "i -= i & -i", optionTag: "A" },
                { optionText: "i += i & -i", optionTag: "B" },
                { optionText: "i = i >> 1", optionTag: "C" },
                { optionText: "i = i * 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you move to the next responsible node for update?",
            options: [
                { optionText: "i += i & -i", optionTag: "A" },
                { optionText: "i -= i & -i", optionTag: "B" },
                { optionText: "i = i >> 1", optionTag: "C" },
                { optionText: "i = i * 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Fenwick Tree is NOT suitable for which type of queries?",
            options: [
                { optionText: "Range updates", optionTag: "A" },
                { optionText: "Prefix sums", optionTag: "B" },
                { optionText: "Point updates", optionTag: "C" },
                { optionText: "Single index query", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What must you do before querying a Fenwick Tree?",
            options: [
                { optionText: "Build the tree from the array", optionTag: "A" },
                { optionText: "Sort the array", optionTag: "B" },
                { optionText: "Rotate the tree", optionTag: "C" },
                { optionText: "Reverse the array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the space complexity of a Fenwick Tree?",
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
            questionText: "To construct a Fenwick Tree, how many elements need to be initialized?",
            options: [
                { optionText: "n + 1 elements (1-based indexing)", optionTag: "A" },
                { optionText: "n elements", optionTag: "B" },
                { optionText: "2n elements", optionTag: "C" },
                { optionText: "n * log n elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can a Fenwick Tree be used for RMQ (Range Min Query)?",
            options: [
                { optionText: "No, it only supports sum operations", optionTag: "A" },
                { optionText: "Yes, directly", optionTag: "B" },
                { optionText: "Only if combined with Segment Tree", optionTag: "C" },
                { optionText: "Yes, using max heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to compute prefix sum up to index `i` in Fenwick Tree?",
            options: [
                { optionText: "Keep subtracting i & -i from i while accumulating tree[i]", optionTag: "A" },
                { optionText: "Loop through array till index i", optionTag: "B" },
                { optionText: "Use divide and conquer", optionTag: "C" },
                { optionText: "Use a stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is better for range updates: Fenwick Tree or Segment Tree?",
            options: [
                { optionText: "Segment Tree", optionTag: "A" },
                { optionText: "Fenwick Tree", optionTag: "B" },
                { optionText: "Both are equal", optionTag: "C" },
                { optionText: "Depends on input size", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript structure is best for Fenwick Tree?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Map", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Object", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Fenwick Tree avoid overlapping sums?",
            options: [
                { optionText: "Using unique ranges per node", optionTag: "A" },
                { optionText: "Using recursion stack", optionTag: "B" },
                { optionText: "Using queue rotation", optionTag: "C" },
                { optionText: "Using modulo hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Fenwick Tree be generalized to 2D?",
            options: [
                { optionText: "Yes, using nested loops and matrix", optionTag: "A" },
                { optionText: "No, it is 1D only", optionTag: "B" },
                { optionText: "Yes, with binary search trees", optionTag: "C" },
                { optionText: "Only with Segment Trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which query is NOT efficient with Fenwick Tree?",
            options: [
                { optionText: "Range minimum query", optionTag: "A" },
                { optionText: "Prefix sum", optionTag: "B" },
                { optionText: "Point update", optionTag: "C" },
                { optionText: "Partial range sum", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a Fenwick Tree, what’s the use of least significant bit (LSB)?",
            options: [
                { optionText: "To determine parent and update range", optionTag: "A" },
                { optionText: "To sort the array", optionTag: "B" },
                { optionText: "To generate random numbers", optionTag: "C" },
                { optionText: "To convert to Segment Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
