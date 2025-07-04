import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Trees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a binary tree?",
            options: [
                { optionText: "A tree where each node has at most 2 children", optionTag: "A" },
                { optionText: "A tree with exactly 2 levels", optionTag: "B" },
                { optionText: "A tree where each node has exactly 2 children", optionTag: "C" },
                { optionText: "A tree that is binary search tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal method visits nodes in Left-Root-Right order?",
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
            questionText: "What is the time complexity of searching in a balanced binary search tree?",
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
            questionText: "What is the maximum number of nodes in a binary tree of height h?",
            options: [
                { optionText: "2^h - 1", optionTag: "A" },
                { optionText: "h", optionTag: "B" },
                { optionText: "h^2", optionTag: "C" },
                { optionText: "2h", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is most suitable to implement a binary tree?",
            options: [
                { optionText: "Linked structure", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the root of a tree?",
            options: [
                { optionText: "The topmost node", optionTag: "A" },
                { optionText: "Any leaf node", optionTag: "B" },
                { optionText: "The node with two children", optionTag: "C" },
                { optionText: "A node without a parent", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used in Depth-First Search?",
            options: [
                { optionText: "Inorder", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What does a leaf node in a tree represent?",
            options: [
                { optionText: "A node with no children", optionTag: "A" },
                { optionText: "A node with one child", optionTag: "B" },
                { optionText: "The root node", optionTag: "C" },
                { optionText: "A node with two children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal visits nodes level by level?",
            options: [
                { optionText: "Level order", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Preorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is true about Binary Search Trees?",
            options: [
                { optionText: "Left child < root < right child", optionTag: "A" },
                { optionText: "Right child < root < left child", optionTag: "B" },
                { optionText: "Root < all children", optionTag: "C" },
                { optionText: "No ordering between nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a tree with a single node?",
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
            questionText: "Which of the following is not a tree traversal method?",
            options: [
                { optionText: "Uporder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Postorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which traversal is the root visited last?",
            options: [
                { optionText: "Postorder", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which tree is always balanced?",
            options: [
                { optionText: "AVL Tree", optionTag: "A" },
                { optionText: "Binary Tree", optionTag: "B" },
                { optionText: "General Tree", optionTag: "C" },
                { optionText: "Threaded Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these trees has nodes with at most 2 children?",
            options: [
                { optionText: "Binary Tree", optionTag: "A" },
                { optionText: "Ternary Tree", optionTag: "B" },
                { optionText: "N-ary Tree", optionTag: "C" },
                { optionText: "Quad Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which standard C++ library is useful for using queues in level order traversal?",
            options: [
                { optionText: "<queue>", optionTag: "A" },
                { optionText: "<stack>", optionTag: "B" },
                { optionText: "<list>", optionTag: "C" },
                { optionText: "<map>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is used to store parent-child relationships in a binary tree?",
            options: [
                { optionText: "Node with left and right pointers", optionTag: "A" },
                { optionText: "Single pointer", optionTag: "B" },
                { optionText: "Double pointer", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is the best traversal to print a binary search tree in sorted order?",
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
            questionText: "Which node does a recursive tree traversal function first operate on?",
            options: [
                { optionText: "Root", optionTag: "A" },
                { optionText: "Leftmost leaf", optionTag: "B" },
                { optionText: "Rightmost leaf", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function signature is appropriate for a binary tree node in C++?",
            options: [
                { optionText: "struct Node { int data; Node* left; Node* right; };", optionTag: "A" },
                { optionText: "class Node { int data; float child; };", optionTag: "B" },
                { optionText: "int Node() { return 0; }", optionTag: "C" },
                { optionText: "Node dataNode;", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
