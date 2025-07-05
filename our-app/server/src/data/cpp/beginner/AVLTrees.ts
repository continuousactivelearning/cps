import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ AVL Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of AVL Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "AVLTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is an AVL Tree?",
            options: [
                { optionText: "A self-balancing binary search tree", optionTag: "A" },
                { optionText: "A graph", optionTag: "B" },
                { optionText: "A hash table", optionTag: "C" },
                { optionText: "A doubly linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the 'AVL' in AVL Tree stand for?",
            options: [
                { optionText: "Adelson-Velsky and Landis", optionTag: "A" },
                { optionText: "Array Vector List", optionTag: "B" },
                { optionText: "Advanced Vector Locator", optionTag: "C" },
                { optionText: "Automated Variable Loader", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the balance factor in an AVL tree node?",
            options: [
                { optionText: "Height(left subtree) - Height(right subtree)", optionTag: "A" },
                { optionText: "Right subtree height", optionTag: "B" },
                { optionText: "Sum of subtree heights", optionTag: "C" },
                { optionText: "Number of children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the range of valid balance factors in an AVL tree?",
            options: [
                { optionText: "-1 to +1", optionTag: "A" },
                { optionText: "-2 to +2", optionTag: "B" },
                { optionText: "0 to +1", optionTag: "C" },
                { optionText: "Any integer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation is performed when a node is inserted into the left subtree of the left child?",
            options: [
                { optionText: "Right Rotation", optionTag: "A" },
                { optionText: "Left Rotation", optionTag: "B" },
                { optionText: "Left-Right Rotation", optionTag: "C" },
                { optionText: "Right-Left Rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation is required for a Left-Right imbalance?",
            options: [
                { optionText: "Left Rotation followed by Right Rotation", optionTag: "A" },
                { optionText: "Right Rotation followed by Left Rotation", optionTag: "B" },
                { optionText: "Right Rotation only", optionTag: "C" },
                { optionText: "Left Rotation only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of insertion in an AVL tree?",
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
            questionText: "What is the maximum height difference allowed in AVL subtrees?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "No limit", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What rotation is required for a Right-Right case in AVL?",
            options: [
                { optionText: "Left Rotation", optionTag: "A" },
                { optionText: "Right Rotation", optionTag: "B" },
                { optionText: "Left-Right Rotation", optionTag: "C" },
                { optionText: "Right-Left Rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation can cause AVL imbalance?",
            options: [
                { optionText: "Insertion or Deletion", optionTag: "A" },
                { optionText: "Traversal", optionTag: "B" },
                { optionText: "Search", optionTag: "C" },
                { optionText: "Print", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of searching in an AVL tree?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many types of rotations exist in AVL Trees?",
            options: [
                { optionText: "4", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "1", optionTag: "C" },
                { optionText: "5", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of deleting a node in an AVL tree?",
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
            questionText: "Is an AVL tree always a Binary Search Tree?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if balanced", optionTag: "C" },
                { optionText: "Only after rotations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the balance factor of a leaf node in AVL?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "Depends on tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can AVL Trees have duplicate values?",
            options: [
                { optionText: "No, they cannot", optionTag: "A" },
                { optionText: "Yes, always", optionTag: "B" },
                { optionText: "Only in left subtree", optionTag: "C" },
                { optionText: "Only in right subtree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of nodes in an AVL tree of height h?",
            options: [
                { optionText: "F(h+2) - 1", optionTag: "A" },
                { optionText: "2^h", optionTag: "B" },
                { optionText: "h", optionTag: "C" },
                { optionText: "h^2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not a type of AVL rotation?",
            options: [
                { optionText: "Right-Right-Left", optionTag: "A" },
                { optionText: "Left-Left", optionTag: "B" },
                { optionText: "Left-Right", optionTag: "C" },
                { optionText: "Right-Left", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data is required to compute the balance factor?",
            options: [
                { optionText: "Height of left and right child", optionTag: "A" },
                { optionText: "Value of parent node", optionTag: "B" },
                { optionText: "Number of siblings", optionTag: "C" },
                { optionText: "Depth of tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is height defined in an AVL Tree node?",
            options: [
                { optionText: "Number of edges on the longest path to a leaf", optionTag: "A" },
                { optionText: "Number of child nodes", optionTag: "B" },
                { optionText: "Depth of node", optionTag: "C" },
                { optionText: "Number of rotations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
