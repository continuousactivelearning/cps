// src/data/java/beginner/segment_trees.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Segment Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz evaluates basic understanding of Segment Trees in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Segment Trees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a Segment Tree used for?",
            options: [
                { optionText: "Efficient range queries and updates", optionTag: "A" },
                { optionText: "Sorting data", optionTag: "B" },
                { optionText: "Storing graphs", optionTag: "C" },
                { optionText: "Traversing trees", optionTag: "D" }
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
            questionText: "What is the time complexity of a range query in a Segment Tree?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a valid Segment Tree use case?",
            options: [
                { optionText: "Finding sum of elements in a range", optionTag: "A" },
                { optionText: "Storing a linked list", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Traversing graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of tree is a Segment Tree?",
            options: [
                { optionText: "Binary Tree", optionTag: "A" },
                { optionText: "Ternary Tree", optionTag: "B" },
                { optionText: "AVL Tree", optionTag: "C" },
                { optionText: "Red-Black Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Each leaf node of a Segment Tree stores:",
            options: [
                { optionText: "A single array element", optionTag: "A" },
                { optionText: "Sum of all elements", optionTag: "B" },
                { optionText: "Range of indices", optionTag: "C" },
                { optionText: "Nothing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What operation does a Segment Tree support efficiently?",
            options: [
                { optionText: "Range minimum/maximum", optionTag: "A" },
                { optionText: "Push and pop", optionTag: "B" },
                { optionText: "Level-order traversal", optionTag: "C" },
                { optionText: "Depth-first traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many nodes does a Segment Tree for n elements have?",
            options: [
                { optionText: "Less than 4n", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "2n", optionTag: "C" },
                { optionText: "n log n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the root of the Segment Tree responsible for?",
            options: [
                { optionText: "Whole array range", optionTag: "A" },
                { optionText: "First element", optionTag: "B" },
                { optionText: "Middle element", optionTag: "C" },
                { optionText: "Last element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is typically used to update Segment Tree?",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "Iteration", optionTag: "B" },
                { optionText: "Memoization", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Segment Tree is better than prefix sum array because it supports:",
            options: [
                { optionText: "Both updates and queries", optionTag: "A" },
                { optionText: "Only queries", optionTag: "B" },
                { optionText: "Only insertions", optionTag: "C" },
                { optionText: "Only deletions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java structure is suitable for Segment Tree?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "HashMap", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Segment Trees are mostly used in:",
            options: [
                { optionText: "Competitive programming", optionTag: "A" },
                { optionText: "Web development", optionTag: "B" },
                { optionText: "Database design", optionTag: "C" },
                { optionText: "Mobile apps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Segment Trees be used for non-numeric data?",
            options: [
                { optionText: "Yes, if associative function exists", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only for integers", optionTag: "C" },
                { optionText: "Only for strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are internal nodes in Segment Tree calculated?",
            options: [
                { optionText: "By combining children node values", optionTag: "A" },
                { optionText: "By skipping leaf nodes", optionTag: "B" },
                { optionText: "By random generation", optionTag: "C" },
                { optionText: "By scanning input", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a benefit of Segment Tree?",
            options: [
                { optionText: "Fast updates and queries", optionTag: "A" },
                { optionText: "Easy to implement", optionTag: "B" },
                { optionText: "Low memory usage", optionTag: "C" },
                { optionText: "Suitable for all data types", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is performed bottom-up in Segment Tree?",
            options: [
                { optionText: "Build operation", optionTag: "A" },
                { optionText: "Insert operation", optionTag: "B" },
                { optionText: "Delete operation", optionTag: "C" },
                { optionText: "Traverse operation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node represents the smallest range in Segment Tree?",
            options: [
                { optionText: "Leaf node", optionTag: "A" },
                { optionText: "Root node", optionTag: "B" },
                { optionText: "Middle node", optionTag: "C" },
                { optionText: "Child node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of function is needed to support Segment Tree queries?",
            options: [
                { optionText: "Associative function", optionTag: "A" },
                { optionText: "Commutative function", optionTag: "B" },
                { optionText: "Recursive function", optionTag: "C" },
                { optionText: "Iterative function", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which range type is used in Segment Tree nodes?",
            options: [
                { optionText: "Inclusive range", optionTag: "A" },
                { optionText: "Exclusive range", optionTag: "B" },
                { optionText: "Negative range", optionTag: "C" },
                { optionText: "Open range", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;