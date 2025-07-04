import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Binary Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of Binary Trees in C++.",
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
                { optionText: "h", optionTag: "B" },
                { optionText: "log₂(h)", optionTag: "C" },
                { optionText: "h^2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to create a copy of a binary tree?",
            options: [
                { optionText: "Preorder traversal", optionTag: "A" },
                { optionText: "Inorder traversal", optionTag: "B" },
                { optionText: "Postorder traversal", optionTag: "C" },
                { optionText: "Level order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of recursive postorder traversal?",
            options: [
                { optionText: "O(h)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition defines a full binary tree?",
            options: [
                { optionText: "Every node has 0 or 2 children", optionTag: "A" },
                { optionText: "Every node has at most 2 children", optionTag: "B" },
                { optionText: "Every internal node has exactly 1 child", optionTag: "C" },
                { optionText: "All nodes are leaf nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to check if a binary tree is height-balanced?",
            options: [
                { optionText: "Check left and right subtree heights at each node", optionTag: "A" },
                { optionText: "Check leaf node depth only", optionTag: "B" },
                { optionText: "Use level order only", optionTag: "C" },
                { optionText: "Compare root to leaf path lengths", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm efficiently finds the diameter of a binary tree?",
            options: [
                { optionText: "Postorder traversal with height tracking", optionTag: "A" },
                { optionText: "Level order traversal", optionTag: "B" },
                { optionText: "Inorder traversal with height", optionTag: "C" },
                { optionText: "DFS with memoization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of constructing a binary tree from inorder and preorder traversals?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Morris traversal, what space complexity is achieved?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which approach finds the Lowest Common Ancestor in a binary tree?",
            options: [
                { optionText: "Recursive DFS", optionTag: "A" },
                { optionText: "Inorder traversal", optionTag: "B" },
                { optionText: "BFS with hashmap", optionTag: "C" },
                { optionText: "Binary search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which structure is typically used to implement iterative inorder traversal?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Deque", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal would you use to serialize a binary tree?",
            options: [
                { optionText: "Preorder traversal with NULL markers", optionTag: "A" },
                { optionText: "Inorder only", optionTag: "B" },
                { optionText: "Postorder without NULLs", optionTag: "C" },
                { optionText: "Level order with no NULLs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "For a complete binary tree with n nodes, what is the height?",
            options: [
                { optionText: "floor(log₂(n))", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "2n", optionTag: "C" },
                { optionText: "sqrt(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal helps to identify if a binary tree is a BST?",
            options: [
                { optionText: "Inorder traversal gives sorted sequence", optionTag: "A" },
                { optionText: "Preorder must be decreasing", optionTag: "B" },
                { optionText: "Postorder must be random", optionTag: "C" },
                { optionText: "Level order is always sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many null pointers are there in a binary tree with n nodes?",
            options: [
                { optionText: "n+1", optionTag: "A" },
                { optionText: "2n", optionTag: "B" },
                { optionText: "n-1", optionTag: "C" },
                { optionText: "n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the number of leaf nodes in a full binary tree equal to?",
            options: [
                { optionText: "(n + 1)/2", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "2n", optionTag: "C" },
                { optionText: "log₂(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How to mirror a binary tree?",
            options: [
                { optionText: "Swap left and right subtrees recursively", optionTag: "A" },
                { optionText: "Sort the tree", optionTag: "B" },
                { optionText: "Remove all leaves", optionTag: "C" },
                { optionText: "Reverse inorder traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is a binary tree called degenerate?",
            options: [
                { optionText: "Each parent has only one child", optionTag: "A" },
                { optionText: "All nodes have two children", optionTag: "B" },
                { optionText: "It has no leaf nodes", optionTag: "C" },
                { optionText: "All nodes are root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is optimal for calculating maximum path sum in a binary tree?",
            options: [
                { optionText: "Postorder traversal with return of max path sum", optionTag: "A" },
                { optionText: "Inorder traversal with sum calculation", optionTag: "B" },
                { optionText: "DFS using queue", optionTag: "C" },
                { optionText: "Breadth-first with map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which tree representation is most compact for sparse binary trees?",
            options: [
                { optionText: "Linked representation", optionTag: "A" },
                { optionText: "Array representation", optionTag: "B" },
                { optionText: "Matrix form", optionTag: "C" },
                { optionText: "Hashmap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition leads to maximum height in binary tree?",
            options: [
                { optionText: "Each node has only one child", optionTag: "A" },
                { optionText: "Complete binary tree", optionTag: "B" },
                { optionText: "Balanced binary tree", optionTag: "C" },
                { optionText: "Perfect binary tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
