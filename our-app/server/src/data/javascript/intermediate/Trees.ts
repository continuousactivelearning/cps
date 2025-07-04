import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate knowledge of Tree data structures in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Trees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which traversal method visits nodes in the order: left, root, right?",
            options: [
                { optionText: "In-order", optionTag: "A" },
                { optionText: "Pre-order", optionTag: "B" },
                { optionText: "Post-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of inserting a node in a Binary Search Tree (average case)?",
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
            questionText: "Which property holds true for a Binary Search Tree?",
            options: [
                { optionText: "Left subtree values < root < right subtree values", optionTag: "A" },
                { optionText: "Left subtree values > root > right subtree values", optionTag: "B" },
                { optionText: "Only left subtree contains values", optionTag: "C" },
                { optionText: "All values are equal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does level-order traversal use internally?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Recursion only", optionTag: "C" },
                { optionText: "Hash map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal visits nodes in root, left, right order?",
            options: [
                { optionText: "Pre-order", optionTag: "A" },
                { optionText: "Post-order", optionTag: "B" },
                { optionText: "In-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a complete binary tree with n nodes?",
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
            questionText: "Which tree guarantees balance after every insertion or deletion?",
            options: [
                { optionText: "AVL Tree", optionTag: "A" },
                { optionText: "Binary Tree", optionTag: "B" },
                { optionText: "Trie", optionTag: "C" },
                { optionText: "B Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a Trie store?",
            options: [
                { optionText: "Strings/prefixes", optionTag: "A" },
                { optionText: "Numbers only", optionTag: "B" },
                { optionText: "Binary numbers only", optionTag: "C" },
                { optionText: "Nodes in postorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which tree is used to implement a priority queue?",
            options: [
                { optionText: "Heap", optionTag: "A" },
                { optionText: "Trie", optionTag: "B" },
                { optionText: "BST", optionTag: "C" },
                { optionText: "Segment Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many children can a binary tree node have?",
            options: [
                { optionText: "0, 1, or 2", optionTag: "A" },
                { optionText: "Only 2", optionTag: "B" },
                { optionText: "Only 1", optionTag: "C" },
                { optionText: "3 or more", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation has O(log n) time in balanced BSTs?",
            options: [
                { optionText: "Insert, Delete, Search", optionTag: "A" },
                { optionText: "Traversal", optionTag: "B" },
                { optionText: "Display", optionTag: "C" },
                { optionText: "Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of nodes in a binary tree of height h?",
            options: [
                { optionText: "2^h - 1", optionTag: "A" },
                { optionText: "2h", optionTag: "B" },
                { optionText: "h^2", optionTag: "C" },
                { optionText: "h!", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property is true for full binary trees?",
            options: [
                { optionText: "All nodes have 0 or 2 children", optionTag: "A" },
                { optionText: "All nodes have 1 child", optionTag: "B" },
                { optionText: "All levels are full", optionTag: "C" },
                { optionText: "Only one node at each level", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of tree traversal is used to evaluate expressions?",
            options: [
                { optionText: "Post-order", optionTag: "A" },
                { optionText: "Pre-order", optionTag: "B" },
                { optionText: "In-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which tree is used in implementing autocomplete features?",
            options: [
                { optionText: "Trie", optionTag: "A" },
                { optionText: "AVL Tree", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "BST", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of nodes in a complete binary tree of height h?",
            options: [
                { optionText: "h", optionTag: "A" },
                { optionText: "2^h", optionTag: "B" },
                { optionText: "2^(h-1)", optionTag: "C" },
                { optionText: "h!", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used in breadth-first search?",
            options: [
                { optionText: "Level-order", optionTag: "A" },
                { optionText: "In-order", optionTag: "B" },
                { optionText: "Pre-order", optionTag: "C" },
                { optionText: "Post-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used to check if two trees are identical?",
            options: [
                { optionText: "Recursive traversal and comparison", optionTag: "A" },
                { optionText: "Hashing node values", optionTag: "B" },
                { optionText: "In-order printing", optionTag: "C" },
                { optionText: "Heapify", optionTag: "D" }
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
                { optionText: "Depends on traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which tree can store intervals and allow querying of overlaps?",
            options: [
                { optionText: "Interval Tree", optionTag: "A" },
                { optionText: "AVL Tree", optionTag: "B" },
                { optionText: "Trie", optionTag: "C" },
                { optionText: "B Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
