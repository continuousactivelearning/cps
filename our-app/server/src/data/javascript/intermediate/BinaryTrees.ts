import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Binary Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz evaluates your intermediate understanding of Binary Trees using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinaryTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following is true for a binary tree?",
            options: [
                { optionText: "Each node has at most two children", optionTag: "A" },
                { optionText: "Each node has exactly two children", optionTag: "B" },
                { optionText: "Each node has at most one child", optionTag: "C" },
                { optionText: "Each node must have two children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal visits nodes in Left -> Root -> Right order?",
            options: [
                { optionText: "In-order", optionTag: "A" },
                { optionText: "Pre-order", optionTag: "B" },
                { optionText: "Post-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is used in level-order traversal of binary tree?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a binary tree with 1 node?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal of binary tree is used for copying the tree?",
            options: [
                { optionText: "Pre-order", optionTag: "A" },
                { optionText: "In-order", optionTag: "B" },
                { optionText: "Post-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many null pointers does a binary tree with N nodes have?",
            options: [
                { optionText: "N + 1", optionTag: "A" },
                { optionText: "N - 1", optionTag: "B" },
                { optionText: "2N", optionTag: "C" },
                { optionText: "N", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true for a full binary tree?",
            options: [
                { optionText: "All nodes have 0 or 2 children", optionTag: "A" },
                { optionText: "All nodes have exactly one child", optionTag: "B" },
                { optionText: "All levels are completely filled", optionTag: "C" },
                { optionText: "Leaf nodes are always at same depth", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a leaf node?",
            options: [
                { optionText: "Node with no children", optionTag: "A" },
                { optionText: "Node with one child", optionTag: "B" },
                { optionText: "Node with two children", optionTag: "C" },
                { optionText: "Root node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations is recursive in binary tree?",
            options: [
                { optionText: "Traversal", optionTag: "A" },
                { optionText: "Insertion", optionTag: "B" },
                { optionText: "Deletion", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "How is a binary tree represented in JavaScript?",
            options: [
                { optionText: "Node objects with left and right pointers", optionTag: "A" },
                { optionText: "Flat array", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "HashMap only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of nodes at level l in a binary tree?",
            options: [
                { optionText: "2^l", optionTag: "A" },
                { optionText: "l^2", optionTag: "B" },
                { optionText: "2l", optionTag: "C" },
                { optionText: "l", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following traversal results in postfix notation?",
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
            questionText: "Which traversal is used to construct a binary tree uniquely?",
            options: [
                { optionText: "In-order and Pre-order", optionTag: "A" },
                { optionText: "Post-order only", optionTag: "B" },
                { optionText: "In-order only", optionTag: "C" },
                { optionText: "Pre-order only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which binary tree property helps check if tree is balanced?",
            options: [
                { optionText: "Height of left and right subtree differ by at most 1", optionTag: "A" },
                { optionText: "All levels must be filled", optionTag: "B" },
                { optionText: "All nodes are leaves", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Time complexity of finding height of binary tree is?",
            options: [
                { optionText: "O(N)", optionTag: "A" },
                { optionText: "O(log N)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(N^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is useful to serialize a tree?",
            options: [
                { optionText: "Level-order", optionTag: "A" },
                { optionText: "Post-order", optionTag: "B" },
                { optionText: "In-order", optionTag: "C" },
                { optionText: "Pre-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you find the depth of a binary tree?",
            options: [
                { optionText: "Using recursion comparing left and right subtree heights", optionTag: "A" },
                { optionText: "Count leaf nodes", optionTag: "B" },
                { optionText: "Count internal nodes", optionTag: "C" },
                { optionText: "Add all node values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which tree has all levels completely filled except possibly the last?",
            options: [
                { optionText: "Complete binary tree", optionTag: "A" },
                { optionText: "Full binary tree", optionTag: "B" },
                { optionText: "Balanced binary tree", optionTag: "C" },
                { optionText: "Skewed binary tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the total number of binary trees possible with 3 nodes?",
            options: [
                { optionText: "5", optionTag: "A" },
                { optionText: "3", optionTag: "B" },
                { optionText: "7", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property helps identify skewed binary tree?",
            options: [
                { optionText: "All nodes have only left or only right child", optionTag: "A" },
                { optionText: "All nodes have 2 children", optionTag: "B" },
                { optionText: "Leaf nodes are at different levels", optionTag: "C" },
                { optionText: "Tree is always balanced", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
