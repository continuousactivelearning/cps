import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Segment Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate understanding of Segment Trees in JavaScript, including construction, range queries, and updates.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SegmentTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a Segment Tree primarily used for?",
            options: [
                { optionText: "Range queries and updates", optionTag: "A" },
                { optionText: "Sorting arrays", optionTag: "B" },
                { optionText: "Graph traversal", optionTag: "C" },
                { optionText: "Dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of querying a Segment Tree?",
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
            questionText: "What is the time complexity of building a Segment Tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the Segment Tree stored in memory?",
            options: [
                { optionText: "As an array", optionTag: "A" },
                { optionText: "As a graph", optionTag: "B" },
                { optionText: "As a linked list", optionTag: "C" },
                { optionText: "As a matrix", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What value is typically stored at the root of a Segment Tree?",
            options: [
                { optionText: "Aggregate of the entire array", optionTag: "A" },
                { optionText: "First array element", optionTag: "B" },
                { optionText: "Last array element", optionTag: "C" },
                { optionText: "Index of max value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript structure can represent a Segment Tree efficiently?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Map", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical space complexity of a Segment Tree?",
            options: [
                { optionText: "O(4n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score:1
        },
        {
            questionText: "Which of these operations can Segment Trees support?",
            options: [
                { optionText: "Range sum", optionTag: "A" },
                { optionText: "Range minimum", optionTag: "B" },
                { optionText: "Range maximum", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the base case in Segment Tree recursion?",
            options: [
                { optionText: "When low == high", optionTag: "A" },
                { optionText: "When low > high", optionTag: "B" },
                { optionText: "When mid == 0", optionTag: "C" },
                { optionText: "When root == null", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens during a range update in a Segment Tree?",
            options: [
                { optionText: "Only affected nodes are updated", optionTag: "A" },
                { optionText: "Whole tree is rebuilt", optionTag: "B" },
                { optionText: "Tree is reset", optionTag: "C" },
                { optionText: "No update is needed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these Segment Tree queries has O(log n) time?",
            options: [
                { optionText: "Range sum", optionTag: "A" },
                { optionText: "Range min", optionTag: "B" },
                { optionText: "Range max", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What is the purpose of lazy propagation in Segment Trees?",
            options: [
                { optionText: "To optimize range updates", optionTag: "A" },
                { optionText: "To slow down queries", optionTag: "B" },
                { optionText: "To delete elements", optionTag: "C" },
                { optionText: "To increase height", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many nodes are there in a Segment Tree for an array of size n?",
            options: [
                { optionText: "At most 4 * n", optionTag: "A" },
                { optionText: "Exactly n", optionTag: "B" },
                { optionText: "2 * n", optionTag: "C" },
                { optionText: "n log n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about internal Segment Tree nodes?",
            options: [
                { optionText: "They represent range aggregates", optionTag: "A" },
                { optionText: "They store index positions", optionTag: "B" },
                { optionText: "They store nulls", optionTag: "C" },
                { optionText: "They point to array elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to build Segment Trees?",
            options: [
                { optionText: "Post-order", optionTag: "A" },
                { optionText: "Pre-order", optionTag: "B" },
                { optionText: "In-order", optionTag: "C" },
                { optionText: "Breadth-first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Segment Trees handle dynamic insertions?",
            options: [
                { optionText: "No, fixed size is assumed", optionTag: "A" },
                { optionText: "Yes, easily", optionTag: "B" },
                { optionText: "Only in JavaScript", optionTag: "C" },
                { optionText: "Only if n is prime", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of data can be processed using Segment Trees?",
            options: [
                { optionText: "Numeric arrays", optionTag: "A" },
                { optionText: "Boolean arrays", optionTag: "B" },
                { optionText: "String ranges (lengths, counts)", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "How are left and right child indices calculated in array representation?",
            options: [
                { optionText: "Left: 2*i + 1, Right: 2*i + 2", optionTag: "A" },
                { optionText: "Left: i+1, Right: i+2", optionTag: "B" },
                { optionText: "Left: i-1, Right: i+1", optionTag: "C" },
                { optionText: "Left: i*2, Right: i*2+1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is a Segment Tree not suitable?",
            options: [
                { optionText: "When frequent insertions/deletions are needed", optionTag: "A" },
                { optionText: "For fixed-range updates", optionTag: "B" },
                { optionText: "For static array range queries", optionTag: "C" },
                { optionText: "For maximum subarray queries", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of tree is Segment Tree closely related to?",
            options: [
                { optionText: "Binary Tree", optionTag: "A" },
                { optionText: "AVL Tree", optionTag: "B" },
                { optionText: "Red-Black Tree", optionTag: "C" },
                { optionText: "B Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
