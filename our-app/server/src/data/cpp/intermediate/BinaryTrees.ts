import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Binary Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz evaluates your intermediate understanding of Binary Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinaryTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a full binary tree?",
            options: [
                { optionText: "Each node has 0 or 2 children", optionTag: "A" },
                { optionText: "All levels are completely filled", optionTag: "B" },
                { optionText: "Each node has exactly 1 child", optionTag: "C" },
                { optionText: "Root node has only left child", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal prints nodes in left-root-right order?",
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
            questionText: "What is the maximum number of nodes at level `l` of a binary tree?",
            options: [
                { optionText: "2^l", optionTag: "A" },
                { optionText: "l", optionTag: "B" },
                { optionText: "l^2", optionTag: "C" },
                { optionText: "2^(l-1)", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which of the following data structures is best for level order traversal?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Linked List", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many null pointers are there in a binary tree with n nodes?",
            options: [
                { optionText: "n+1", optionTag: "A" },
                { optionText: "n-1", optionTag: "B" },
                { optionText: "2n", optionTag: "C" },
                { optionText: "n", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the maximum height of a binary tree with `n` nodes?",
            options: [
                { optionText: "n", optionTag: "A" },
                { optionText: "log₂(n)", optionTag: "B" },
                { optionText: "√n", optionTag: "C" },
                { optionText: "n/2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal order is used to reconstruct a binary tree from inorder and preorder?",
            options: [
                { optionText: "Preorder and inorder", optionTag: "A" },
                { optionText: "Postorder and inorder", optionTag: "B" },
                { optionText: "Inorder and level order", optionTag: "C" },
                { optionText: "Only preorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a complete binary tree?",
            options: [
                { optionText: "All levels except possibly last are full", optionTag: "A" },
                { optionText: "Only left children are present", optionTag: "B" },
                { optionText: "All nodes have two children", optionTag: "C" },
                { optionText: "Rightmost node is always filled", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node is visited first in postorder traversal?",
            options: [
                { optionText: "Left child", optionTag: "A" },
                { optionText: "Right child", optionTag: "B" },
                { optionText: "Root", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which binary tree traversal is used to evaluate expressions?",
            options: [
                { optionText: "Postorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm can be used to calculate height of a binary tree?",
            options: [
                { optionText: "DFS (recursively)", optionTag: "A" },
                { optionText: "BFS only", optionTag: "B" },
                { optionText: "Sorting", optionTag: "C" },
                { optionText: "Greedy traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a binary tree, number of leaf nodes is always:",
            options: [
                { optionText: "One more than number of nodes with two children", optionTag: "A" },
                { optionText: "Equal to number of internal nodes", optionTag: "B" },
                { optionText: "Twice the height", optionTag: "C" },
                { optionText: "Half of total nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition indicates a binary tree is skewed?",
            options: [
                { optionText: "All nodes have only left or only right child", optionTag: "A" },
                { optionText: "Each node has 2 children", optionTag: "B" },
                { optionText: "All levels filled", optionTag: "C" },
                { optionText: "Inorder traversal is same as level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal order is root-left-right?",
            options: [
                { optionText: "Preorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Breadth-first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a perfect binary tree?",
            options: [
                { optionText: "All internal nodes have 2 children and all leaves are at same level", optionTag: "A" },
                { optionText: "All leaves are at different levels", optionTag: "B" },
                { optionText: "All nodes have at most 1 child", optionTag: "C" },
                { optionText: "There is only one leaf node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal uses recursion naturally?",
            options: [
                { optionText: "Inorder", optionTag: "A" },
                { optionText: "Level order", optionTag: "B" },
                { optionText: "Stack order", optionTag: "C" },
                { optionText: "Iterative search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "To count total nodes in binary tree, use:",
            options: [
                { optionText: "1 + count(left) + count(right)", optionTag: "A" },
                { optionText: "count(left) - count(right)", optionTag: "B" },
                { optionText: "level order", optionTag: "C" },
                { optionText: "stack.size()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used for serialization of a tree?",
            options: [
                { optionText: "Level order", optionTag: "A" },
                { optionText: "Postorder", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Depth First Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to calculate number of leaf nodes?",
            options: [
                { optionText: "Check if node has no children and count recursively", optionTag: "A" },
                { optionText: "Count null pointers", optionTag: "B" },
                { optionText: "Use inorder traversal", optionTag: "C" },
                { optionText: "Count nodes at level 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node is visited first in level-order traversal?",
            options: [
                { optionText: "Root node", optionTag: "A" },
                { optionText: "Left child", optionTag: "B" },
                { optionText: "Right child", optionTag: "C" },
                { optionText: "Deepest node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
