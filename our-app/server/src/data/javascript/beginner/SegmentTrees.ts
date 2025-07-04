import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Segment Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your beginner-level understanding of Segment Trees in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "SegmentTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the main purpose of a Segment Tree?",
            options: [
                { optionText: "To perform range queries efficiently", optionTag: "A" },
                { optionText: "To store sorted data", optionTag: "B" },
                { optionText: "To search elements", optionTag: "C" },
                { optionText: "To implement hash maps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of building a Segment Tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following operations can Segment Trees perform efficiently?",
            options: [
                { optionText: "Range Sum Query", optionTag: "A" },
                { optionText: "Sorting", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Breadth First Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is used to implement a Segment Tree?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Hash Table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many nodes are there in a Segment Tree built for an array of size n?",
            options: [
                { optionText: "Approximately 2n", optionTag: "A" },
                { optionText: "Exactly n", optionTag: "B" },
                { optionText: "Exactly 2n", optionTag: "C" },
                { optionText: "Exactly log n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of range query in Segment Tree?",
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
            questionText: "Which traversal is typically used to build a Segment Tree?",
            options: [
                { optionText: "Post-order", optionTag: "A" },
                { optionText: "Pre-order", optionTag: "B" },
                { optionText: "In-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is stored in each node of a Segment Tree?",
            options: [
                { optionText: "Aggregate result of a range", optionTag: "A" },
                { optionText: "Index value", optionTag: "B" },
                { optionText: "Only one element", optionTag: "C" },
                { optionText: "Pointer to parent", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem can be solved using a Segment Tree?",
            options: [
                { optionText: "Range minimum query", optionTag: "A" },
                { optionText: "Breadth First Traversal", optionTag: "B" },
                { optionText: "Depth First Traversal", optionTag: "C" },
                { optionText: "Graph coloring", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case for building a Segment Tree node?",
            options: [
                { optionText: "When start == end", optionTag: "A" },
                { optionText: "When left > right", optionTag: "B" },
                { optionText: "When array is empty", optionTag: "C" },
                { optionText: "When array is sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the structure of a Segment Tree?",
            options: [
                { optionText: "Binary Tree", optionTag: "A" },
                { optionText: "Ternary Tree", optionTag: "B" },
                { optionText: "Linked List", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does Segment Tree update an element?",
            options: [
                { optionText: "Recursively updates affected nodes", optionTag: "A" },
                { optionText: "Updates only root node", optionTag: "B" },
                { optionText: "Appends new value", optionTag: "C" },
                { optionText: "Removes and inserts again", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of Segment Tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "In JavaScript, which type is used to store the Segment Tree?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Object", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is fast using Segment Trees?",
            options: [
                { optionText: "Range sum", optionTag: "A" },
                { optionText: "Element sorting", optionTag: "B" },
                { optionText: "Array rotation", optionTag: "C" },
                { optionText: "Element deletion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why use Segment Trees?",
            options: [
                { optionText: "To reduce time complexity of range queries", optionTag: "A" },
                { optionText: "To increase recursion", optionTag: "B" },
                { optionText: "To visualize graphs", optionTag: "C" },
                { optionText: "To implement stacks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript method is useful for range operations?",
            options: [
                { optionText: "slice()", optionTag: "A" },
                { optionText: "concat()", optionTag: "B" },
                { optionText: "pop()", optionTag: "C" },
                { optionText: "push()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of point update in Segment Tree?",
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
            questionText: "What kind of problem is NOT suited for Segment Trees?",
            options: [
                { optionText: "Sorting elements", optionTag: "A" },
                { optionText: "Range queries", optionTag: "B" },
                { optionText: "Finding prefix sum", optionTag: "C" },
                { optionText: "Updating individual elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which programming pattern is used to implement Segment Trees?",
            options: [
                { optionText: "Divide and Conquer", optionTag: "A" },
                { optionText: "Backtracking", optionTag: "B" },
                { optionText: "Greedy", optionTag: "C" },
                { optionText: "Dynamic Programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
