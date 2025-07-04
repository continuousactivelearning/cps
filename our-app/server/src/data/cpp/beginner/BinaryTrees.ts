import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Binary Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Binary Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinaryTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "In a binary tree, each node has at most how many children?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "Unlimited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal visits the root node before its subtrees?",
            options: [
                { optionText: "Preorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal method is Left-Root-Right?",
            options: [
                { optionText: "Inorder", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Reverse order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal prints all nodes of a binary tree level by level?",
            options: [
                { optionText: "Level order", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Postorder", optionTag: "D" }
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
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of nodes in a binary tree of height h?",
            options: [
                { optionText: "2^h - 1", optionTag: "A" },
                { optionText: "h", optionTag: "B" },
                { optionText: "2h", optionTag: "C" },
                { optionText: "h^2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "A full binary tree has:",
            options: [
                { optionText: "Every node with 0 or 2 children", optionTag: "A" },
                { optionText: "Every node with 2 children", optionTag: "B" },
                { optionText: "All nodes are leaves", optionTag: "C" },
                { optionText: "No childless nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a tree with only the root node?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "Depends on depth", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is used in recursive traversal?",
            options: [
                { optionText: "Function calls (stack)", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "A binary tree with n nodes has how many edges?",
            options: [
                { optionText: "n - 1", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "2n", optionTag: "C" },
                { optionText: "n + 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following defines a leaf node?",
            options: [
                { optionText: "Node with no children", optionTag: "A" },
                { optionText: "Node with only one child", optionTag: "B" },
                { optionText: "Node with two children", optionTag: "C" },
                { optionText: "The root node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal gives sorted output in a BST?",
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
            questionText: "Which of the following is not a type of binary tree?",
            options: [
                { optionText: "Skewed tree", optionTag: "A" },
                { optionText: "Balanced tree", optionTag: "B" },
                { optionText: "Hash tree", optionTag: "C" },
                { optionText: "Complete binary tree", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the degree of a leaf node?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
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
                { optionText: "Last child", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following represents the preorder traversal?",
            options: [
                { optionText: "Root → Left → Right", optionTag: "A" },
                { optionText: "Left → Root → Right", optionTag: "B" },
                { optionText: "Left → Right → Root", optionTag: "C" },
                { optionText: "Right → Left → Root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a complete binary tree, all levels except possibly the last are:",
            options: [
                { optionText: "Completely filled", optionTag: "A" },
                { optionText: "Half filled", optionTag: "B" },
                { optionText: "Unbalanced", optionTag: "C" },
                { optionText: "Empty", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL container is best for level-order traversal?",
            options: [
                { optionText: "queue", optionTag: "A" },
                { optionText: "stack", optionTag: "B" },
                { optionText: "list", optionTag: "C" },
                { optionText: "set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the inorder traversal of a BST return?",
            options: [
                { optionText: "Sorted values", optionTag: "A" },
                { optionText: "Unordered values", optionTag: "B" },
                { optionText: "Reverse values", optionTag: "C" },
                { optionText: "Level-wise values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many null pointers does a binary tree with n nodes have?",
            options: [
                { optionText: "n + 1", optionTag: "A" },
                { optionText: "n - 1", optionTag: "B" },
                { optionText: "2n", optionTag: "C" },
                { optionText: "n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
