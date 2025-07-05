// src/data/java/beginner/trees.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your fundamental understanding of Trees in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Trees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a tree in data structures?",
            options: [
                { optionText: "A linear data structure", optionTag: "A" },
                { optionText: "A hierarchical data structure", optionTag: "B" },
                { optionText: "A hashing structure", optionTag: "C" },
                { optionText: "A graph with cycles", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the root of a tree?",
            options: [
                { optionText: "The topmost node", optionTag: "A" },
                { optionText: "A leaf node", optionTag: "B" },
                { optionText: "A middle node", optionTag: "C" },
                { optionText: "A node with two children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node has no children?",
            options: [
                { optionText: "Root node", optionTag: "A" },
                { optionText: "Internal node", optionTag: "B" },
                { optionText: "Leaf node", optionTag: "C" },
                { optionText: "Sub-root", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the height of a tree?",
            options: [
                { optionText: "Total number of nodes", optionTag: "A" },
                { optionText: "Number of children", optionTag: "B" },
                { optionText: "Length of the longest path from root to leaf", optionTag: "C" },
                { optionText: "Number of leaf nodes", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is a binary tree?",
            options: [
                { optionText: "Each node has at most two children", optionTag: "A" },
                { optionText: "Each node has at least two children", optionTag: "B" },
                { optionText: "Each node has exactly three children", optionTag: "C" },
                { optionText: "Each node has infinite children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Java, how do we define a TreeNode class?",
            options: [
                { optionText: "class TreeNode { int data; TreeNode left, right; }", optionTag: "A" },
                { optionText: "class Node { int data; Node next; }", optionTag: "B" },
                { optionText: "class Tree { int[] arr; }", optionTag: "C" },
                { optionText: "class TreeNode { int data; int left, right; }", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal visits the root first, then left and right subtree?",
            options: [
                { optionText: "Inorder", optionTag: "A" },
                { optionText: "Postorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Level order", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the time complexity to search in a balanced binary tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which traversal uses a queue?",
            options: [
                { optionText: "Inorder", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level Order", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a tree traversal method?",
            options: [
                { optionText: "Inorder", optionTag: "A" },
                { optionText: "Outorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Preorder", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the degree of a node?",
            options: [
                { optionText: "The number of children a node has", optionTag: "A" },
                { optionText: "The number of ancestors", optionTag: "B" },
                { optionText: "The node level", optionTag: "C" },
                { optionText: "The number of leaf nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to get sorted order of BST?",
            options: [
                { optionText: "Preorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Levelorder", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the maximum number of nodes at level 'l' of a binary tree?",
            options: [
                { optionText: "2^l", optionTag: "A" },
                { optionText: "2^(l-1)", optionTag: "B" },
                { optionText: "l", optionTag: "C" },
                { optionText: "2*l", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which of the following is true for binary trees?",
            options: [
                { optionText: "At most 2 children per node", optionTag: "A" },
                { optionText: "At least 2 children per node", optionTag: "B" },
                { optionText: "Exactly 2 children per node", optionTag: "C" },
                { optionText: "Only one child per node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the parent of a node?",
            options: [
                { optionText: "A node that points to the current node", optionTag: "A" },
                { optionText: "The root", optionTag: "B" },
                { optionText: "A leaf node", optionTag: "C" },
                { optionText: "A sibling node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What do we call a node that has both left and right children?",
            options: [
                { optionText: "Leaf", optionTag: "A" },
                { optionText: "Full node", optionTag: "B" },
                { optionText: "Partial node", optionTag: "C" },
                { optionText: "Branch node", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is a subtree?",
            options: [
                { optionText: "A child of a node", optionTag: "A" },
                { optionText: "Any node’s descendants", optionTag: "B" },
                { optionText: "A node and its children forming a smaller tree", optionTag: "C" },
                { optionText: "A rootless tree", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which traversal technique visits left subtree, root, then right subtree?",
            options: [
                { optionText: "Inorder", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which tree type has all leaves at the same level?",
            options: [
                { optionText: "Skewed Tree", optionTag: "A" },
                { optionText: "Complete Binary Tree", optionTag: "B" },
                { optionText: "Perfect Binary Tree", optionTag: "C" },
                { optionText: "Full Binary Tree", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which algorithm is used to visit nodes in level order?",
            options: [
                { optionText: "DFS", optionTag: "A" },
                { optionText: "Backtracking", optionTag: "B" },
                { optionText: "BFS", optionTag: "C" },
                { optionText: "Inorder", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        }
    ]
};

export default quizData;