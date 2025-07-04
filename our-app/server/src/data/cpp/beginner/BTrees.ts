import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ B-Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of B-Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a B-Tree?",
            options: [
                { optionText: "A self-balancing search tree for large data blocks", optionTag: "A" },
                { optionText: "A binary tree with extra height", optionTag: "B" },
                { optionText: "A tree with only left children", optionTag: "C" },
                { optionText: "A circular linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of keys a B-Tree of order m can have in a non-root node?",
            options: [
                { optionText: "⌈m/2⌉ - 1", optionTag: "A" },
                { optionText: "m", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "m - 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a B-Tree of order m, what is the maximum number of children a node can have?",
            options: [
                { optionText: "m", optionTag: "A" },
                { optionText: "m - 1", optionTag: "B" },
                { optionText: "m + 1", optionTag: "C" },
                { optionText: "2m", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when a B-Tree node becomes full?",
            options: [
                { optionText: "It is split into two nodes", optionTag: "A" },
                { optionText: "The tree is rebalanced using rotations", optionTag: "B" },
                { optionText: "The keys are removed", optionTag: "C" },
                { optionText: "The tree becomes binary", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is optimized for disk-based storage?",
            options: [
                { optionText: "B-Tree", optionTag: "A" },
                { optionText: "Binary Search Tree", optionTag: "B" },
                { optionText: "AVL Tree", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why are B-Trees better than binary trees for databases?",
            options: [
                { optionText: "They reduce disk access", optionTag: "A" },
                { optionText: "They use less memory", optionTag: "B" },
                { optionText: "They are easier to implement", optionTag: "C" },
                { optionText: "They do not require sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height complexity of a B-Tree?",
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
            questionText: "B-Trees are generalizations of which structure?",
            options: [
                { optionText: "Binary Search Trees", optionTag: "A" },
                { optionText: "Stacks", optionTag: "B" },
                { optionText: "Heaps", optionTag: "C" },
                { optionText: "Graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a B-Tree of order m, what is the maximum number of keys a node can have?",
            options: [
                { optionText: "m - 1", optionTag: "A" },
                { optionText: "m", optionTag: "B" },
                { optionText: "2m - 1", optionTag: "C" },
                { optionText: "⌈m/2⌉", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of children for a non-root node in a B-Tree of order m?",
            options: [
                { optionText: "⌈m/2⌉", optionTag: "A" },
                { optionText: "m", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "m/2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation may trigger a node split in a B-Tree?",
            options: [
                { optionText: "Insertion", optionTag: "A" },
                { optionText: "Search", optionTag: "B" },
                { optionText: "Traversal", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens during node split in B-Tree?",
            options: [
                { optionText: "Middle key is promoted", optionTag: "A" },
                { optionText: "All keys are duplicated", optionTag: "B" },
                { optionText: "Node is deleted", optionTag: "C" },
                { optionText: "Nothing happens", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Where is the promoted key placed after splitting a B-Tree node?",
            options: [
                { optionText: "Parent node", optionTag: "A" },
                { optionText: "Left child", optionTag: "B" },
                { optionText: "Right child", optionTag: "C" },
                { optionText: "Root only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is best suited for printing B-Tree keys in order?",
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
            questionText: "What causes a B-Tree to grow in height?",
            options: [
                { optionText: "Root node split", optionTag: "A" },
                { optionText: "Leaf node deletion", optionTag: "B" },
                { optionText: "Traversal", optionTag: "C" },
                { optionText: "Search failure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition makes a B-Tree balanced?",
            options: [
                { optionText: "All leaves are at the same level", optionTag: "A" },
                { optionText: "All nodes have same number of children", optionTag: "B" },
                { optionText: "Root has max keys", optionTag: "C" },
                { optionText: "Keys are all even numbers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about leaf nodes in a B-Tree?",
            options: [
                { optionText: "They appear at the same level", optionTag: "A" },
                { optionText: "They may appear at different levels", optionTag: "B" },
                { optionText: "They do not contain keys", optionTag: "C" },
                { optionText: "They are not connected to the tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which application commonly uses B-Trees?",
            options: [
                { optionText: "Databases", optionTag: "A" },
                { optionText: "Video Games", optionTag: "B" },
                { optionText: "Machine Learning", optionTag: "C" },
                { optionText: "Networking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a B-Tree, what operation is expensive compared to search?",
            options: [
                { optionText: "Insertion and deletion", optionTag: "A" },
                { optionText: "Search", optionTag: "B" },
                { optionText: "Traversal", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
