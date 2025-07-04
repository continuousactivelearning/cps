import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript AVL Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate knowledge of AVL Trees in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "AVLTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the key property that distinguishes an AVL tree from a regular binary search tree?",
            options: [
                { optionText: "It is height-balanced", optionTag: "A" },
                { optionText: "It contains only even numbers", optionTag: "B" },
                { optionText: "It allows duplicate values", optionTag: "C" },
                { optionText: "It is a complete tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum allowed difference in height between the left and right subtrees in an AVL tree?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "Unlimited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation is used to balance an AVL tree when a left-left imbalance occurs?",
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
            questionText: "Which rotation is used for a right-right imbalance?",
            options: [
                { optionText: "Left Rotation", optionTag: "A" },
                { optionText: "Right Rotation", optionTag: "B" },
                { optionText: "Right-Left Rotation", optionTag: "C" },
                { optionText: "Left-Right Rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is balance factor of a node calculated in AVL trees?",
            options: [
                { optionText: "Height(left subtree) - Height(right subtree)", optionTag: "A" },
                { optionText: "Left child - Right child", optionTag: "B" },
                { optionText: "Depth of left subtree + depth of right", optionTag: "C" },
                { optionText: "Number of nodes in subtree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to validate the structure of AVL tree as BST?",
            options: [
                { optionText: "In-order traversal", optionTag: "A" },
                { optionText: "Pre-order traversal", optionTag: "B" },
                { optionText: "Post-order traversal", optionTag: "C" },
                { optionText: "Level-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In AVL trees, after insertion, when are rotations performed?",
            options: [
                { optionText: "When balance factor exceeds ±1", optionTag: "A" },
                { optionText: "After each insertion regardless of balance", optionTag: "B" },
                { optionText: "Only at root", optionTag: "C" },
                { optionText: "At every alternate level", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which combination of rotations is applied for Left-Right imbalance?",
            options: [
                { optionText: "Left Rotation followed by Right Rotation", optionTag: "A" },
                { optionText: "Right Rotation followed by Left Rotation", optionTag: "B" },
                { optionText: "Two Right Rotations", optionTag: "C" },
                { optionText: "Two Left Rotations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity for insertion in an AVL Tree?",
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
            questionText: "Which of the following is NOT true about AVL trees?",
            options: [
                { optionText: "It guarantees O(log n) search time", optionTag: "A" },
                { optionText: "It can degenerate into a linked list", optionTag: "B" },
                { optionText: "Rotations keep it balanced", optionTag: "C" },
                { optionText: "It is a type of self-balancing BST", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "In JavaScript, how can you represent a node in an AVL tree?",
            options: [
                { optionText: "Using an object with left, right, height, and value", optionTag: "A" },
                { optionText: "Using a string", optionTag: "B" },
                { optionText: "Using a number array", optionTag: "C" },
                { optionText: "Using only height and value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property must be updated during AVL rotations?",
            options: [
                { optionText: "Height", optionTag: "A" },
                { optionText: "Balance factor", optionTag: "B" },
                { optionText: "Value", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "After multiple insertions in AVL, balance factor of a node can be:",
            options: [
                { optionText: "-1, 0, or 1", optionTag: "A" },
                { optionText: "-2 to +2", optionTag: "B" },
                { optionText: "Only 0", optionTag: "C" },
                { optionText: "-3 to +3", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When does a double rotation become necessary in AVL?",
            options: [
                { optionText: "When subtree is inserted at inner child", optionTag: "A" },
                { optionText: "When node is added at leaf", optionTag: "B" },
                { optionText: "When root becomes unbalanced", optionTag: "C" },
                { optionText: "Never", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of an AVL tree with n nodes in worst case?",
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
            questionText: "AVL tree is also known as:",
            options: [
                { optionText: "Height-balanced binary search tree", optionTag: "A" },
                { optionText: "Weight-balanced tree", optionTag: "B" },
                { optionText: "Complete binary tree", optionTag: "C" },
                { optionText: "Min heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "The worst-case time complexity of deletion in AVL tree is:",
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
            questionText: "Which operation is typically more expensive in AVL trees compared to BST?",
            options: [
                { optionText: "Insertion and deletion", optionTag: "A" },
                { optionText: "Traversal", optionTag: "B" },
                { optionText: "Search", optionTag: "C" },
                { optionText: "Access by index", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "AVL trees were invented by:",
            options: [
                { optionText: "Adelson-Velsky and Landis", optionTag: "A" },
                { optionText: "Alan Turing", optionTag: "B" },
                { optionText: "Charles Babbage", optionTag: "C" },
                { optionText: "Robert Tarjan", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
