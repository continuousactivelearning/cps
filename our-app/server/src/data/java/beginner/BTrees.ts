// src/data/java/beginner/b_trees.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java B-Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz assesses basic knowledge of B-Trees in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "B-Trees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a B-Tree commonly used for?",
            options: [
                { optionText: "Database indexing", optionTag: "A" },
                { optionText: "Network routing", optionTag: "B" },
                { optionText: "Graph traversal", optionTag: "C" },
                { optionText: "Sorting data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "B-Tree is a generalization of which data structure?",
            options: [
                { optionText: "Binary Search Tree", optionTag: "A" },
                { optionText: "Heap", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of children for a B-Tree node of order m?",
            options: [
                { optionText: "ceil(m/2)", optionTag: "A" },
                { optionText: "m", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about B-Trees?",
            options: [
                { optionText: "All leaves are at the same level", optionTag: "A" },
                { optionText: "All nodes have the same number of keys", optionTag: "B" },
                { optionText: "All internal nodes are leaf nodes", optionTag: "C" },
                { optionText: "Height is always 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What triggers a split in a B-Tree node?",
            options: [
                { optionText: "When it has more than maximum allowed keys", optionTag: "A" },
                { optionText: "When it becomes empty", optionTag: "B" },
                { optionText: "When it's the root node", optionTag: "C" },
                { optionText: "When it's a leaf", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens during insertion in a full B-Tree node?",
            options: [
                { optionText: "It is split into two nodes", optionTag: "A" },
                { optionText: "The node is deleted", optionTag: "B" },
                { optionText: "An error is thrown", optionTag: "C" },
                { optionText: "Nothing happens", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many keys can a node in a B-Tree of order m have?",
            options: [
                { optionText: "m - 1", optionTag: "A" },
                { optionText: "m", optionTag: "B" },
                { optionText: "m + 1", optionTag: "C" },
                { optionText: "2m", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of traversal gives sorted keys in a B-Tree?",
            options: [
                { optionText: "Inorder", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a key feature of B-Trees?",
            options: [
                { optionText: "Balanced multi-way tree", optionTag: "A" },
                { optionText: "Binary tree", optionTag: "B" },
                { optionText: "Unbalanced tree", optionTag: "C" },
                { optionText: "Stack-based tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which one is better suited for disk-based storage?",
            options: [
                { optionText: "B-Trees", optionTag: "A" },
                { optionText: "Binary Trees", optionTag: "B" },
                { optionText: "AVL Trees", optionTag: "C" },
                { optionText: "Red-Black Trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a B-Tree of order 4, what is the minimum number of children for an internal node?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "4", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is true about deletion in B-Trees?",
            options: [
                { optionText: "Underflow may lead to merging", optionTag: "A" },
                { optionText: "Always removes root", optionTag: "B" },
                { optionText: "Always decreases height", optionTag: "C" },
                { optionText: "Not allowed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of tree is a B-Tree?",
            options: [
                { optionText: "Self-balancing multi-way tree", optionTag: "A" },
                { optionText: "Unbalanced binary tree", optionTag: "B" },
                { optionText: "Graph", optionTag: "C" },
                { optionText: "Tries", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a key property of B-Trees?",
            options: [
                { optionText: "All leaves are at the same level", optionTag: "A" },
                { optionText: "Leaves can have different depths", optionTag: "B" },
                { optionText: "Binary branching", optionTag: "C" },
                { optionText: "No children allowed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why are B-Trees good for database systems?",
            options: [
                { optionText: "Reduce disk access", optionTag: "A" },
                { optionText: "Reduce memory usage", optionTag: "B" },
                { optionText: "Simple structure", optionTag: "C" },
                { optionText: "Small height", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node splits during overflow in B-Tree insertion?",
            options: [
                { optionText: "The full node", optionTag: "A" },
                { optionText: "The root", optionTag: "B" },
                { optionText: "Any leaf node", optionTag: "C" },
                { optionText: "The parent node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "B-Tree is also known as:",
            options: [
                { optionText: "Balanced M-way Tree", optionTag: "A" },
                { optionText: "Multi-Stack Tree", optionTag: "B" },
                { optionText: "Balanced Graph Tree", optionTag: "C" },
                { optionText: "Balanced Queue Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these can have the most number of children?",
            options: [
                { optionText: "Root node", optionTag: "A" },
                { optionText: "Internal node", optionTag: "B" },
                { optionText: "Leaf node", optionTag: "C" },
                { optionText: "All are same", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a search operation in B-Trees?",
            options: [
                { optionText: "Traverse nodes left to right", optionTag: "A" },
                { optionText: "Use priority queues", optionTag: "B" },
                { optionText: "Heapify nodes", optionTag: "C" },
                { optionText: "Merge subtrees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a B-Tree with few levels and large branching factor?",
            options: [
                { optionText: "Low", optionTag: "A" },
                { optionText: "Very high", optionTag: "B" },
                { optionText: "Constant", optionTag: "C" },
                { optionText: "Depends on memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;