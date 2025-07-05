// src/data/java/beginner/avl_trees.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java AVL Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz evaluates your basic understanding of AVL Trees and their operations.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "AVLTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is an AVL Tree?",
            options: [
                { optionText: "Self-balancing binary search tree", optionTag: "A" },
                { optionText: "Unordered binary tree", optionTag: "B" },
                { optionText: "Heap data structure", optionTag: "C" },
                { optionText: "Undirected graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Who invented the AVL Tree?",
            options: [
                { optionText: "Adelson-Velsky and Landis", optionTag: "A" },
                { optionText: "Dijkstra", optionTag: "B" },
                { optionText: "Donald Knuth", optionTag: "C" },
                { optionText: "Robert Tarjan", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the balance factor of a node in an AVL Tree?",
            options: [
                { optionText: "Height(left subtree) - Height(right subtree)", optionTag: "A" },
                { optionText: "Left child - Right child", optionTag: "B" },
                { optionText: "Node value", optionTag: "C" },
                { optionText: "Number of leaves", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the allowed range of balance factor in AVL Trees?",
            options: [
                { optionText: "-1, 0, 1", optionTag: "A" },
                { optionText: "-2 to 2", optionTag: "B" },
                { optionText: "-3 to 3", optionTag: "C" },
                { optionText: "Any value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation can cause imbalance in an AVL Tree?",
            options: [
                { optionText: "Insertion", optionTag: "A" },
                { optionText: "Search", optionTag: "B" },
                { optionText: "Traversal", optionTag: "C" },
                { optionText: "Printing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation is used when left subtree of left child is unbalanced?",
            options: [
                { optionText: "Right rotation", optionTag: "A" },
                { optionText: "Left rotation", optionTag: "B" },
                { optionText: "Left-right rotation", optionTag: "C" },
                { optionText: "Right-left rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of rotation is used for Left-Right imbalance?",
            options: [
                { optionText: "Left-Right Rotation", optionTag: "A" },
                { optionText: "Right Rotation", optionTag: "B" },
                { optionText: "Left Rotation", optionTag: "C" },
                { optionText: "Right-Left Rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "AVL Trees maintain which property?",
            options: [
                { optionText: "Height balance", optionTag: "A" },
                { optionText: "Maximum number of children", optionTag: "B" },
                { optionText: "Heap order", optionTag: "C" },
                { optionText: "Circular references", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal gives sorted order in AVL Tree?",
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
            questionText: "Which operation is used to rebalance the AVL tree?",
            options: [
                { optionText: "Rotation", optionTag: "A" },
                { optionText: "Swap", optionTag: "B" },
                { optionText: "Merge", optionTag: "C" },
                { optionText: "Shift", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height complexity of an AVL tree?",
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
            questionText: "What is the time complexity of insertion in AVL Tree?",
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
            questionText: "Which of the following is not a valid AVL Tree rotation?",
            options: [
                { optionText: "Left-Left", optionTag: "A" },
                { optionText: "Right-Right", optionTag: "B" },
                { optionText: "Left-Right", optionTag: "C" },
                { optionText: "Right-Left-Right", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What does AVL stand for?",
            options: [
                { optionText: "Adelson-Velsky and Landis", optionTag: "A" },
                { optionText: "Array View Layer", optionTag: "B" },
                { optionText: "AVL Leaf Node", optionTag: "C" },
                { optionText: "Algorithmic Visual Layout", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which case is double rotation needed?",
            options: [
                { optionText: "Left-Right or Right-Left", optionTag: "A" },
                { optionText: "Left-Left only", optionTag: "B" },
                { optionText: "Right-Right only", optionTag: "C" },
                { optionText: "Root rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is most used to check balance factor?",
            options: [
                { optionText: "Postorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Level order", optionTag: "C" },
                { optionText: "Preorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when AVL Tree becomes unbalanced?",
            options: [
                { optionText: "It rebalances using rotations", optionTag: "A" },
                { optionText: "It becomes binary tree", optionTag: "B" },
                { optionText: "It discards elements", optionTag: "C" },
                { optionText: "It stops working", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case needs left rotation?",
            options: [
                { optionText: "Right-Right", optionTag: "A" },
                { optionText: "Left-Left", optionTag: "B" },
                { optionText: "Left-Right", optionTag: "C" },
                { optionText: "Right-Left", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "AVL Trees are preferred over Binary Search Trees when:",
            options: [
                { optionText: "We need fast insertion and lookup", optionTag: "A" },
                { optionText: "Data is static", optionTag: "B" },
                { optionText: "Small data sets", optionTag: "C" },
                { optionText: "Heap properties are needed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which field is added to every node in AVL Tree?",
            options: [
                { optionText: "Height", optionTag: "A" },
                { optionText: "Color", optionTag: "B" },
                { optionText: "Weight", optionTag: "C" },
                { optionText: "Level", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;