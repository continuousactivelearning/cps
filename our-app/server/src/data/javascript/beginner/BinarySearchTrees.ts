import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Binary Search Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz evaluates your beginner-level understanding of Binary Search Trees (BST) in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinarySearchTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a Binary Search Tree (BST)?",
            options: [
                { optionText: "A binary tree where each node has at most two children and the left child is less than the parent and the right child is greater", optionTag: "A" },
                { optionText: "A tree where nodes have random values", optionTag: "B" },
                { optionText: "A tree where all values are equal", optionTag: "C" },
                { optionText: "A binary tree with only left children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In BST, where is the smallest element found?",
            options: [
                { optionText: "In the leftmost node", optionTag: "A" },
                { optionText: "In the rightmost node", optionTag: "B" },
                { optionText: "At the root", optionTag: "C" },
                { optionText: "At the bottom right", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal method returns BST elements in sorted order?",
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
            questionText: "What is the time complexity to search an element in a balanced BST?",
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
            questionText: "Which property makes BST efficient for searching?",
            options: [
                { optionText: "Ordered structure", optionTag: "A" },
                { optionText: "Random shape", optionTag: "B" },
                { optionText: "No children allowed", optionTag: "C" },
                { optionText: "Only even values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when you insert a duplicate value in BST?",
            options: [
                { optionText: "Depends on the implementation", optionTag: "A" },
                { optionText: "It replaces the existing node", optionTag: "B" },
                { optionText: "It always goes to the right", optionTag: "C" },
                { optionText: "It creates a new root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of children a BST node can have?",
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
            questionText: "What is the height of a BST with only one node?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true for a BST?",
            options: [
                { optionText: "All left child values are less than the parent", optionTag: "A" },
                { optionText: "All right child values are less than the parent", optionTag: "B" },
                { optionText: "All children are greater than root", optionTag: "C" },
                { optionText: "All nodes must be even", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is best suited to implement a BST?",
            options: [
                { optionText: "Object with left and right properties", optionTag: "A" },
                { optionText: "Array only", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a leaf node in BST?",
            options: [
                { optionText: "A node with no children", optionTag: "A" },
                { optionText: "The root node", optionTag: "B" },
                { optionText: "A node with one child", optionTag: "C" },
                { optionText: "A node with both children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a correct recursive condition for BST insertion?",
            options: [
                { optionText: "If value < node.val then insert in left", optionTag: "A" },
                { optionText: "If value < node.val then insert in right", optionTag: "B" },
                { optionText: "Always insert at root", optionTag: "C" },
                { optionText: "Insert randomly", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What traversal should be used to clone a BST?",
            options: [
                { optionText: "Pre-order", optionTag: "A" },
                { optionText: "In-order", optionTag: "B" },
                { optionText: "Post-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you remove a node with two children in BST?",
            options: [
                { optionText: "Replace with in-order successor or predecessor", optionTag: "A" },
                { optionText: "Delete both children", optionTag: "B" },
                { optionText: "Replace with root", optionTag: "C" },
                { optionText: "Make it the new root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case leads to worst-case search time in BST?",
            options: [
                { optionText: "When BST is skewed", optionTag: "A" },
                { optionText: "When BST is full", optionTag: "B" },
                { optionText: "When all values are even", optionTag: "C" },
                { optionText: "When root has two children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best case time complexity for search in BST?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can BST be implemented using classes in JavaScript?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in ES5", optionTag: "C" },
                { optionText: "Only using array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens in in-order traversal of BST?",
            options: [
                { optionText: "Left -> Root -> Right", optionTag: "A" },
                { optionText: "Root -> Left -> Right", optionTag: "B" },
                { optionText: "Right -> Root -> Left", optionTag: "C" },
                { optionText: "Right -> Left -> Root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the space complexity for BST search?",
            options: [
                { optionText: "O(h)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the root node contain in a BST?",
            options: [
                { optionText: "The first inserted value", optionTag: "A" },
                { optionText: "The smallest value", optionTag: "B" },
                { optionText: "The largest value", optionTag: "C" },
                { optionText: "Always 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
