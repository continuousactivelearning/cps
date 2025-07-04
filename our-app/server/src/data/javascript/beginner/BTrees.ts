import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript B-Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your beginner-level understanding of B-Trees in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a B-Tree?",
            options: [
                { optionText: "A self-balancing search tree where nodes can have more than two children", optionTag: "A" },
                { optionText: "A binary tree with exactly 2 children", optionTag: "B" },
                { optionText: "A tree with only one node", optionTag: "C" },
                { optionText: "A linear data structure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "B-Trees are primarily used in which application?",
            options: [
                { optionText: "Databases and file systems", optionTag: "A" },
                { optionText: "Game development", optionTag: "B" },
                { optionText: "Web design", optionTag: "C" },
                { optionText: "Cryptography", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of children a non-root B-Tree node can have?",
            options: [
                { optionText: "t", optionTag: "A" },
                { optionText: "2t", optionTag: "B" },
                { optionText: "t - 1", optionTag: "C" },
                { optionText: "2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is 't' in a B-Tree?",
            options: [
                { optionText: "Minimum degree", optionTag: "A" },
                { optionText: "Maximum depth", optionTag: "B" },
                { optionText: "Tree height", optionTag: "C" },
                { optionText: "Number of children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property does a B-Tree satisfy?",
            options: [
                { optionText: "Sorted keys in all nodes", optionTag: "A" },
                { optionText: "All nodes have exactly one child", optionTag: "B" },
                { optionText: "Only root has keys", optionTag: "C" },
                { optionText: "All leaves must have one key", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of search in a B-Tree?",
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
            questionText: "Which of these is NOT true about B-Trees?",
            options: [
                { optionText: "They are binary trees", optionTag: "A" },
                { optionText: "They are balanced", optionTag: "B" },
                { optionText: "Used in databases", optionTag: "C" },
                { optionText: "Nodes can have multiple keys", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens during insertion in a full B-Tree node?",
            options: [
                { optionText: "The node is split", optionTag: "A" },
                { optionText: "The node is deleted", optionTag: "B" },
                { optionText: "The tree is rebuilt", optionTag: "C" },
                { optionText: "The key is ignored", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What are the leaves in a B-Tree?",
            options: [
                { optionText: "Nodes with no children", optionTag: "A" },
                { optionText: "Nodes with max children", optionTag: "B" },
                { optionText: "Root nodes", optionTag: "C" },
                { optionText: "Middle nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is commonly used in B-Trees?",
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
            questionText: "B-Trees are designed to minimize...",
            options: [
                { optionText: "Disk access", optionTag: "A" },
                { optionText: "Heap size", optionTag: "B" },
                { optionText: "Stack depth", optionTag: "C" },
                { optionText: "CPU usage", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are keys stored in B-Tree nodes?",
            options: [
                { optionText: "In sorted order", optionTag: "A" },
                { optionText: "Randomly", optionTag: "B" },
                { optionText: "Descending order", optionTag: "C" },
                { optionText: "With gaps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of children a B-Tree node can have?",
            options: [
                { optionText: "2t", optionTag: "A" },
                { optionText: "t", optionTag: "B" },
                { optionText: "t+1", optionTag: "C" },
                { optionText: "t-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why are B-Trees used in databases?",
            options: [
                { optionText: "Efficient search and updates on disk-based systems", optionTag: "A" },
                { optionText: "They are faster than RAM", optionTag: "B" },
                { optionText: "They work well with strings", optionTag: "C" },
                { optionText: "They need no memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is height of B-Tree related to its performance?",
            options: [
                { optionText: "Lower height leads to better performance", optionTag: "A" },
                { optionText: "Higher height leads to better performance", optionTag: "B" },
                { optionText: "Height doesn’t matter", optionTag: "C" },
                { optionText: "It depends on programming language", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can B-Trees have duplicate keys?",
            options: [
                { optionText: "Depends on implementation", optionTag: "A" },
                { optionText: "Never", optionTag: "B" },
                { optionText: "Always", optionTag: "C" },
                { optionText: "Only in leaf nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens to tree height on inserting a key into full root?",
            options: [
                { optionText: "Height increases by 1", optionTag: "A" },
                { optionText: "Height decreases", optionTag: "B" },
                { optionText: "Height remains same", optionTag: "C" },
                { optionText: "Tree is deleted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node in B-Tree might have fewer keys than the others?",
            options: [
                { optionText: "Root", optionTag: "A" },
                { optionText: "Leaves", optionTag: "B" },
                { optionText: "Middle nodes", optionTag: "C" },
                { optionText: "Rightmost node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is deletion handled in B-Trees?",
            options: [
                { optionText: "Keys are borrowed or merged to maintain balance", optionTag: "A" },
                { optionText: "Simply delete and ignore balance", optionTag: "B" },
                { optionText: "Rebuild the whole tree", optionTag: "C" },
                { optionText: "Swap with root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "B-Trees are a generalization of which tree?",
            options: [
                { optionText: "Binary Search Tree", optionTag: "A" },
                { optionText: "Heap", optionTag: "B" },
                { optionText: "AVL Tree", optionTag: "C" },
                { optionText: "Trie", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
