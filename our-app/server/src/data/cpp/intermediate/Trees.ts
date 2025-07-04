import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate understanding of tree data structures in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Trees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the maximum number of nodes in a binary tree of height h?",
            options: [
                { optionText: "2^(h+1) - 1", optionTag: "A" },
                { optionText: "2h", optionTag: "B" },
                { optionText: "2^(h-1)", optionTag: "C" },
                { optionText: "h^2", optionTag: "D" }
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
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of searching a value in a balanced binary search tree?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a binary tree, what is the maximum number of leaf nodes?",
            options: [
                { optionText: "2^h", optionTag: "A" },
                { optionText: "h", optionTag: "B" },
                { optionText: "n", optionTag: "C" },
                { optionText: "2h", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a tree traversal method?",
            options: [
                { optionText: "Diagonal traversal", optionTag: "A" },
                { optionText: "Preorder traversal", optionTag: "B" },
                { optionText: "Inorder traversal", optionTag: "C" },
                { optionText: "Postorder traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following binary trees is always balanced?",
            options: [
                { optionText: "AVL Tree", optionTag: "A" },
                { optionText: "Skewed Tree", optionTag: "B" },
                { optionText: "Binary Search Tree", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a tree, which node has no parent?",
            options: [
                { optionText: "Root", optionTag: "A" },
                { optionText: "Leaf", optionTag: "B" },
                { optionText: "Child", optionTag: "C" },
                { optionText: "Internal node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a single-node tree?",
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
            questionText: "Which tree has each level fully filled except possibly the last?",
            options: [
                { optionText: "Complete Binary Tree", optionTag: "A" },
                { optionText: "Skewed Tree", optionTag: "B" },
                { optionText: "AVL Tree", optionTag: "C" },
                { optionText: "Binary Search Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following trees can be used to implement priority queues?",
            options: [
                { optionText: "Heap", optionTag: "A" },
                { optionText: "BST", optionTag: "B" },
                { optionText: "AVL Tree", optionTag: "C" },
                { optionText: "B Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is useful for expression trees?",
            options: [
                { optionText: "Postorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Level-order", optionTag: "C" },
                { optionText: "Preorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal method is best for copying a binary tree?",
            options: [
                { optionText: "Preorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the balance factor in an AVL Tree?",
            options: [
                { optionText: "Height of left - height of right subtree", optionTag: "A" },
                { optionText: "Left child count", optionTag: "B" },
                { optionText: "Difference in number of nodes", optionTag: "C" },
                { optionText: "Sum of subtree heights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property does a BST follow?",
            options: [
                { optionText: "Left < Root < Right", optionTag: "A" },
                { optionText: "Left > Root > Right", optionTag: "B" },
                { optionText: "Root > Right", optionTag: "C" },
                { optionText: "Right < Left", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum height of a binary tree with n nodes?",
            options: [
                { optionText: "⌊log₂n⌋", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "n-1", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which tree traversal uses a queue?",
            options: [
                { optionText: "Level-order", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Preorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal order is used to create a BST from sorted data?",
            options: [
                { optionText: "Inorder", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of children a binary tree node can have?",
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
            questionText: "In binary trees, a node with no children is called?",
            options: [
                { optionText: "Leaf node", optionTag: "A" },
                { optionText: "Root node", optionTag: "B" },
                { optionText: "Intermediate node", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following statements is true about trees?",
            options: [
                { optionText: "There is one and only one path between any two nodes", optionTag: "A" },
                { optionText: "Multiple paths between nodes", optionTag: "B" },
                { optionText: "May contain cycles", optionTag: "C" },
                { optionText: "Nodes may have more than one parent", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
