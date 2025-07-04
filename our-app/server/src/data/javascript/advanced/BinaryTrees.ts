import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Binary Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz evaluates your advanced understanding of Binary Trees in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinaryTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the maximum number of nodes in a binary tree of height h?",
            options: [
                { optionText: "2^h - 1", optionTag: "A" },
                { optionText: "2h", optionTag: "B" },
                { optionText: "h^2", optionTag: "C" },
                { optionText: "h - 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of finding height in a binary tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal order is used to recreate a binary tree from inorder and preorder?",
            options: [
                { optionText: "Inorder and Preorder", optionTag: "A" },
                { optionText: "Postorder and Inorder", optionTag: "B" },
                { optionText: "Preorder and Postorder", optionTag: "C" },
                { optionText: "Inorder and Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a complete binary tree, what is the height in terms of number of nodes n?",
            options: [
                { optionText: "floor(log2(n))", optionTag: "A" },
                { optionText: "n/2", optionTag: "B" },
                { optionText: "n", optionTag: "C" },
                { optionText: "sqrt(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a binary tree represented in JavaScript?",
            options: [
                { optionText: "Using objects with left and right properties", optionTag: "A" },
                { optionText: "Using arrays only", optionTag: "B" },
                { optionText: "Using maps", optionTag: "C" },
                { optionText: "Using strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about postorder traversal?",
            options: [
                { optionText: "It visits left, right, then root", optionTag: "A" },
                { optionText: "It visits root, left, right", optionTag: "B" },
                { optionText: "It visits right, root, left", optionTag: "C" },
                { optionText: "It visits root, right, left", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition identifies a leaf node in a binary tree?",
            options: [
                { optionText: "Both left and right are null", optionTag: "A" },
                { optionText: "Left is null only", optionTag: "B" },
                { optionText: "Right is null only", optionTag: "C" },
                { optionText: "Node has at least one child", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What’s the space complexity of DFS on a skewed binary tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is not a valid traversal for binary trees?",
            options: [
                { optionText: "Diagonal traversal", optionTag: "A" },
                { optionText: "Inorder traversal", optionTag: "B" },
                { optionText: "Postorder traversal", optionTag: "C" },
                { optionText: "Preorder traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of nodes in a binary tree of height h?",
            options: [
                { optionText: "h + 1", optionTag: "A" },
                { optionText: "2^h", optionTag: "B" },
                { optionText: "2^(h-1)", optionTag: "C" },
                { optionText: "h", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used in breadth-first traversal of binary trees?",
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
            questionText: "How many binary trees can be created with n distinct nodes?",
            options: [
                { optionText: "Catalan number Cn = (2n)! / (n+1)!n!", optionTag: "A" },
                { optionText: "n!", optionTag: "B" },
                { optionText: "2^n", optionTag: "C" },
                { optionText: "n^2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to serialize a binary tree?",
            options: [
                { optionText: "Preorder with null markers", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder only", optionTag: "C" },
                { optionText: "Level-order without nulls", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best approach to check if two binary trees are identical?",
            options: [
                { optionText: "Recursively compare structure and values", optionTag: "A" },
                { optionText: "Compare leaf nodes", optionTag: "B" },
                { optionText: "Only compare root nodes", optionTag: "C" },
                { optionText: "Compare depth only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of binary tree has all leaf nodes at the same level?",
            options: [
                { optionText: "Perfect Binary Tree", optionTag: "A" },
                { optionText: "Skewed Tree", optionTag: "B" },
                { optionText: "Sparse Tree", optionTag: "C" },
                { optionText: "Complete Binary Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What traversal order would you use to convert a binary tree into a doubly linked list?",
            options: [
                { optionText: "Inorder traversal", optionTag: "A" },
                { optionText: "Postorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following allows Morris Traversal?",
            options: [
                { optionText: "Inorder traversal without stack/recursion", optionTag: "A" },
                { optionText: "Postorder using stack", optionTag: "B" },
                { optionText: "Level-order with queue", optionTag: "C" },
                { optionText: "DFS with parent pointers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is best suited for expression trees?",
            options: [
                { optionText: "Postorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the relation between inorder and preorder to form a binary tree?",
            options: [
                { optionText: "Unique binary tree can be constructed", optionTag: "A" },
                { optionText: "Multiple trees always possible", optionTag: "B" },
                { optionText: "Only BST can be made", optionTag: "C" },
                { optionText: "Tree cannot be made", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you check if a binary tree is height-balanced?",
            options: [
                { optionText: "Height of left and right subtree differs by at most 1", optionTag: "A" },
                { optionText: "Number of nodes in both subtrees are equal", optionTag: "B" },
                { optionText: "Inorder and preorder match", optionTag: "C" },
                { optionText: "All nodes are leaf nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
