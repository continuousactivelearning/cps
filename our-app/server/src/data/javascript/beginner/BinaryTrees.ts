import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Binary Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your understanding of Binary Trees in JavaScript at a beginner level.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinaryTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a binary tree?",
            options: [
                { optionText: "A tree where each node has at most two children", optionTag: "A" },
                { optionText: "A tree with only one child per node", optionTag: "B" },
                { optionText: "A tree where nodes have unlimited children", optionTag: "C" },
                { optionText: "A tree with numeric values only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a valid traversal of a binary tree?",
            options: [
                { optionText: "In-order", optionTag: "A" },
                { optionText: "Circular", optionTag: "B" },
                { optionText: "Diagonal", optionTag: "C" },
                { optionText: "Spiral", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal visits the root first?",
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
            questionText: "How many children can a node have in a binary tree?",
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
            questionText: "Which traversal visits all nodes at each level before going to the next?",
            options: [
                { optionText: "Level-order", optionTag: "A" },
                { optionText: "In-order", optionTag: "B" },
                { optionText: "Post-order", optionTag: "C" },
                { optionText: "Pre-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data structure is commonly used in level-order traversal?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used for depth-first traversal?",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Hash map", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "A node with no children is called?",
            options: [
                { optionText: "Leaf node", optionTag: "A" },
                { optionText: "Root node", optionTag: "B" },
                { optionText: "Parent node", optionTag: "C" },
                { optionText: "Null node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the root of a binary tree?",
            options: [
                { optionText: "Topmost node", optionTag: "A" },
                { optionText: "Leftmost node", optionTag: "B" },
                { optionText: "Rightmost node", optionTag: "C" },
                { optionText: "Any node with two children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a complete binary tree?",
            options: [
                { optionText: "All levels are filled except possibly the last, which is filled left to right", optionTag: "A" },
                { optionText: "Only root exists", optionTag: "B" },
                { optionText: "Every node has 2 children", optionTag: "C" },
                { optionText: "Every node has 1 child", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a binary tree represented in code?",
            options: [
                { optionText: "Node objects with left and right pointers", optionTag: "A" },
                { optionText: "Single array", optionTag: "B" },
                { optionText: "Object only", optionTag: "C" },
                { optionText: "Hash table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal visits left subtree, then root, then right subtree?",
            options: [
                { optionText: "In-order", optionTag: "A" },
                { optionText: "Post-order", optionTag: "B" },
                { optionText: "Pre-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is typically used to implement tree traversal?",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Sorting", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
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
                { optionText: "2^h", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node has no parent in a binary tree?",
            options: [
                { optionText: "Root node", optionTag: "A" },
                { optionText: "Leaf node", optionTag: "B" },
                { optionText: "Child node", optionTag: "C" },
                { optionText: "Middle node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not a type of tree traversal?",
            options: [
                { optionText: "Backward traversal", optionTag: "A" },
                { optionText: "In-order traversal", optionTag: "B" },
                { optionText: "Post-order traversal", optionTag: "C" },
                { optionText: "Pre-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a binary tree, what does 'height' mean?",
            options: [
                { optionText: "Longest path from root to leaf", optionTag: "A" },
                { optionText: "Total number of nodes", optionTag: "B" },
                { optionText: "Number of left children", optionTag: "C" },
                { optionText: "Sum of all values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following nodes must a binary tree have?",
            options: [
                { optionText: "Root", optionTag: "A" },
                { optionText: "Left child", optionTag: "B" },
                { optionText: "Right child", optionTag: "C" },
                { optionText: "Leaf", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many null links are in a binary tree with n nodes?",
            options: [
                { optionText: "n+1", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "2n", optionTag: "C" },
                { optionText: "2n-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the minimum number of nodes in a binary tree of height h?",
            options: [
                { optionText: "h+1", optionTag: "A" },
                { optionText: "2^h", optionTag: "B" },
                { optionText: "h", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
