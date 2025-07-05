import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript AVL Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic understanding of AVL Trees in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "AVLTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What does AVL stand for in AVL Trees?",
            options: [
                { optionText: "Adelson-Velsky and Landis", optionTag: "A" },
                { optionText: "Automatic Variable List", optionTag: "B" },
                { optionText: "Array Vector List", optionTag: "C" },
                { optionText: "Advanced Vector Lookup", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the primary feature of an AVL Tree?",
            options: [
                { optionText: "Self-balancing", optionTag: "A" },
                { optionText: "Sorted keys only", optionTag: "B" },
                { optionText: "Binary search only", optionTag: "C" },
                { optionText: "Constant height", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum balance factor for a node in an AVL tree?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the balance factor of a node in an AVL tree?",
            options: [
                { optionText: "Height of left subtree - height of right subtree", optionTag: "A" },
                { optionText: "Height of right subtree - height of left subtree", optionTag: "B" },
                { optionText: "Number of children", optionTag: "C" },
                { optionText: "Sum of node values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation is used when a node is inserted into the left subtree of the left child?",
            options: [
                { optionText: "Right rotation", optionTag: "A" },
                { optionText: "Left rotation", optionTag: "B" },
                { optionText: "Left-Right rotation", optionTag: "C" },
                { optionText: "Right-Left rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case requires a left-right rotation?",
            options: [
                { optionText: "Node inserted into left subtree of right child", optionTag: "A" },
                { optionText: "Node inserted into left subtree of left child", optionTag: "B" },
                { optionText: "Node inserted into right subtree of right child", optionTag: "C" },
                { optionText: "Node inserted into right subtree of left child", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these operations can unbalance an AVL tree?",
            options: [
                { optionText: "Insertion", optionTag: "A" },
                { optionText: "Search", optionTag: "B" },
                { optionText: "Traversal", optionTag: "C" },
                { optionText: "Printing", optionTag: "D" }
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
            questionText: "Which traversal gives the nodes in sorted order for an AVL tree?",
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
            questionText: "What is the height of an AVL tree with only one node?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many children can a node in AVL tree have at most?",
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
            questionText: "AVL tree is a type of what kind of tree?",
            options: [
                { optionText: "Binary Search Tree", optionTag: "A" },
                { optionText: "B-Tree", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Trie", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "After inserting a node in AVL tree, which operation is used to restore balance?",
            options: [
                { optionText: "Rotation", optionTag: "A" },
                { optionText: "Deletion", optionTag: "B" },
                { optionText: "Insertion", optionTag: "C" },
                { optionText: "Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a valid JavaScript structure for representing a node in AVL Tree?",
            options: [
                { optionText: "{ value, left, right, height }", optionTag: "A" },
                { optionText: "[ value, left, right, height ]", optionTag: "B" },
                { optionText: "value: left-right-height", optionTag: "C" },
                { optionText: "node(value, height)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In an AVL tree, when is a left-right rotation needed?",
            options: [
                { optionText: "Left-heavy subtree with right-heavy child", optionTag: "A" },
                { optionText: "Right-heavy subtree with right-heavy child", optionTag: "B" },
                { optionText: "Balanced tree", optionTag: "C" },
                { optionText: "Unchanged tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these ensures AVL tree stays balanced?",
            options: [
                { optionText: "Checking and updating height on each insertion/deletion", optionTag: "A" },
                { optionText: "Only inserting nodes", optionTag: "B" },
                { optionText: "Skipping balance check", optionTag: "C" },
                { optionText: "Using hash maps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity of an AVL Tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation is applied in right-left case?",
            options: [
                { optionText: "Right-Left Rotation", optionTag: "A" },
                { optionText: "Left-Right Rotation", optionTag: "B" },
                { optionText: "Single Left Rotation", optionTag: "C" },
                { optionText: "No rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "AVL Trees maintain balance after which operations?",
            options: [
                { optionText: "Insertion and Deletion", optionTag: "A" },
                { optionText: "Traversal", optionTag: "B" },
                { optionText: "Search", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is typically used to insert nodes in AVL Tree in JS?",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "While loop only", optionTag: "B" },
                { optionText: "Switch-case", optionTag: "C" },
                { optionText: "Prompt()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
