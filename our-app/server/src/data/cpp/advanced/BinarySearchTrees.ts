import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Binary Search Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of Binary Search Trees (BSTs) in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinarySearchTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of searching in a balanced Binary Search Tree?",
            options: [
                { optionText: "O(log N)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(N^2)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal of a BST gives nodes in ascending order?",
            options: [
                { optionText: "Inorder traversal", optionTag: "A" },
                { optionText: "Preorder traversal", optionTag: "B" },
                { optionText: "Postorder traversal", optionTag: "C" },
                { optionText: "Level-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition must hold true for every node in a BST?",
            options: [
                { optionText: "Left < Node < Right", optionTag: "A" },
                { optionText: "Left >= Node >= Right", optionTag: "B" },
                { optionText: "Node < Left < Right", optionTag: "C" },
                { optionText: "Right < Node < Left", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node replaces a deleted node with two children in BST?",
            options: [
                { optionText: "Inorder successor or predecessor", optionTag: "A" },
                { optionText: "Root", optionTag: "B" },
                { optionText: "Leaf node", optionTag: "C" },
                { optionText: "Node with maximum height", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In BST, where will the smallest element always be located?",
            options: [
                { optionText: "Leftmost node", optionTag: "A" },
                { optionText: "Rightmost node", optionTag: "B" },
                { optionText: "Root", optionTag: "C" },
                { optionText: "Middle node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity for inserting into a skewed BST?",
            options: [
                { optionText: "O(N)", optionTag: "A" },
                { optionText: "O(log N)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(N log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function is most crucial when balancing a BST manually?",
            options: [
                { optionText: "Rotations", optionTag: "A" },
                { optionText: "Depth traversal", optionTag: "B" },
                { optionText: "Counting nodes", optionTag: "C" },
                { optionText: "Swapping values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is used to build a height-balanced BST from a sorted array?",
            options: [
                { optionText: "Divide and conquer", optionTag: "A" },
                { optionText: "Greedy", optionTag: "B" },
                { optionText: "Dynamic programming", optionTag: "C" },
                { optionText: "Backtracking", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a BST, if a node has only one child, which case is it for deletion?",
            options: [
                { optionText: "Single child case", optionTag: "A" },
                { optionText: "Leaf node case", optionTag: "B" },
                { optionText: "Double child case", optionTag: "C" },
                { optionText: "Root case", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following ensures the uniqueness of elements in a BST?",
            options: [
                { optionText: "No duplicate insertions", optionTag: "A" },
                { optionText: "Use of AVL tree", optionTag: "B" },
                { optionText: "Rebalancing", optionTag: "C" },
                { optionText: "Sorting before insertion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node is used in BST deletion if the right child exists?",
            options: [
                { optionText: "Inorder successor", optionTag: "A" },
                { optionText: "Inorder predecessor", optionTag: "B" },
                { optionText: "Root", optionTag: "C" },
                { optionText: "Leaf node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these operations can be optimized with BSTs?",
            options: [
                { optionText: "Search, insert, delete", optionTag: "A" },
                { optionText: "Only search", optionTag: "B" },
                { optionText: "Only insert", optionTag: "C" },
                { optionText: "Sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a balanced BST different from a normal BST?",
            options: [
                { optionText: "Height difference between subtrees is limited", optionTag: "A" },
                { optionText: "It allows duplicates", optionTag: "B" },
                { optionText: "It has only left children", optionTag: "C" },
                { optionText: "It has only right children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to clone a BST?",
            options: [
                { optionText: "Preorder traversal", optionTag: "A" },
                { optionText: "Inorder traversal", optionTag: "B" },
                { optionText: "Postorder traversal", optionTag: "C" },
                { optionText: "Level-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which BST variant guarantees O(log N) for all operations?",
            options: [
                { optionText: "AVL Tree", optionTag: "A" },
                { optionText: "Skewed BST", optionTag: "B" },
                { optionText: "Random BST", optionTag: "C" },
                { optionText: "Threaded BST", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When is the height of a BST minimum?",
            options: [
                { optionText: "When the tree is balanced", optionTag: "A" },
                { optionText: "When all elements are inserted in order", optionTag: "B" },
                { optionText: "When it is skewed", optionTag: "C" },
                { optionText: "When duplicates are allowed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity for searching in BST?",
            options: [
                { optionText: "O(h)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(N)", optionTag: "C" },
                { optionText: "O(log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the inorder successor of the largest node in a BST?",
            options: [
                { optionText: "NULL", optionTag: "A" },
                { optionText: "Root node", optionTag: "B" },
                { optionText: "Itself", optionTag: "C" },
                { optionText: "Leftmost child", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which BST operation is hardest to implement?",
            options: [
                { optionText: "Deletion", optionTag: "A" },
                { optionText: "Insertion", optionTag: "B" },
                { optionText: "Traversal", optionTag: "C" },
                { optionText: "Searching", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many BSTs can be formed with N distinct keys?",
            options: [
                { optionText: "Catalan number C(N)", optionTag: "A" },
                { optionText: "N!", optionTag: "B" },
                { optionText: "2^N", optionTag: "C" },
                { optionText: "N^2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
