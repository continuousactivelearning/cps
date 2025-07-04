// src/data/java/beginner/binarytrees.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Binary Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz evaluates your basic understanding of Binary Trees in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Binary Trees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a Binary Tree?",
            options: [
                { optionText: "A tree with nodes that have at most two children", optionTag: "A" },
                { optionText: "A tree with nodes that have three children", optionTag: "B" },
                { optionText: "A tree with only left children", optionTag: "C" },
                { optionText: "A tree with only right children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of nodes at level l in a binary tree?",
            options: [
                { optionText: "2^(l-1)", optionTag: "A" },
                { optionText: "2^l", optionTag: "B" },
                { optionText: "l^2", optionTag: "C" },
                { optionText: "l", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal visits nodes in the order: left, root, right?",
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
            questionText: "In a binary tree, which node is called a leaf?",
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
            questionText: "Which traversal is used for printing the tree level by level?",
            options: [
                { optionText: "Level Order", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Inorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is used for level order traversal?",
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
            questionText: "How many children can each node in a binary tree have?",
            options: [
                { optionText: "0, 1 or 2", optionTag: "A" },
                { optionText: "Exactly 2", optionTag: "B" },
                { optionText: "1 or 2", optionTag: "C" },
                { optionText: "Any number", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is not a valid traversal for a binary tree?",
            options: [
                { optionText: "Inorder", optionTag: "A" },
                { optionText: "Middleorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Postorder", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "What is the time complexity of traversing a binary tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the number of nodes in a full binary tree of height h?",
            options: [
                { optionText: "2^h - 1", optionTag: "A" },
                { optionText: "2^h", optionTag: "B" },
                { optionText: "h^2", optionTag: "C" },
                { optionText: "h", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a complete binary tree?",
            options: [
                { optionText: "All levels filled except possibly the last", optionTag: "A" },
                { optionText: "All nodes have exactly two children", optionTag: "B" },
                { optionText: "Only left children are present", optionTag: "C" },
                { optionText: "All levels are half-filled", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following trees has all nodes with two children?",
            options: [
                { optionText: "Full Binary Tree", optionTag: "A" },
                { optionText: "Complete Binary Tree", optionTag: "B" },
                { optionText: "Skewed Tree", optionTag: "C" },
                { optionText: "Binary Search Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of nodes in a binary tree of height h?",
            options: [
                { optionText: "h + 1", optionTag: "A" },
                { optionText: "h", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "2^h", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal method is best to create a copy of a binary tree?",
            options: [
                { optionText: "Preorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the parent node of a left or right child called?",
            options: [
                { optionText: "Root", optionTag: "A" },
                { optionText: "Parent", optionTag: "B" },
                { optionText: "Ancestor", optionTag: "C" },
                { optionText: "Node", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which property must a binary tree have to be a BST?",
            options: [
                { optionText: "Left < Root < Right", optionTag: "A" },
                { optionText: "Left > Root > Right", optionTag: "B" },
                { optionText: "Left = Right", optionTag: "C" },
                { optionText: "Root < Left", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node is called an ancestor?",
            options: [
                { optionText: "Any node on the path from root to a node", optionTag: "A" },
                { optionText: "Sibling node", optionTag: "B" },
                { optionText: "Leaf node", optionTag: "C" },
                { optionText: "Root node only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node is the last visited in postorder traversal?",
            options: [
                { optionText: "Root node", optionTag: "A" },
                { optionText: "Leaf node", optionTag: "B" },
                { optionText: "Left child", optionTag: "C" },
                { optionText: "Right child", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many null pointers are there in a binary tree with n nodes?",
            options: [
                { optionText: "n + 1", optionTag: "A" },
                { optionText: "n - 1", optionTag: "B" },
                { optionText: "n", optionTag: "C" },
                { optionText: "2n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal can be used to evaluate an expression tree?",
            options: [
                { optionText: "Postorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Level Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;