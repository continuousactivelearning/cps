import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Binary Search Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This advanced quiz tests your knowledge of Binary Search Trees in JavaScript, including implementation, traversal, deletion, and edge cases.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinarySearchTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of searching an element in a balanced BST?",
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
            questionText: "Which traversal of a BST gives nodes in sorted order?",
            options: [
                { optionText: "Inorder", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about BSTs?",
            options: [
                { optionText: "Left child < Node < Right child", optionTag: "A" },
                { optionText: "Left child > Node > Right child", optionTag: "B" },
                { optionText: "Only left subtree is sorted", optionTag: "C" },
                { optionText: "BSTs allow duplicate keys without rules", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript data structure is best suited to implement a BST?",
            options: [
                { optionText: "Class-based nodes with left and right pointers", optionTag: "A" },
                { optionText: "Array", optionTag: "B" },
                { optionText: "Object with key-values", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a BST with only right children and n nodes?",
            options: [
                { optionText: "n - 1", optionTag: "A" },
                { optionText: "log n", optionTag: "B" },
                { optionText: "n", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you delete a node with two children in BST?",
            options: [
                { optionText: "Replace with inorder successor or predecessor", optionTag: "A" },
                { optionText: "Delete both children", optionTag: "B" },
                { optionText: "Replace with leaf node", optionTag: "C" },
                { optionText: "Replace with root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of inserting into a skewed BST?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these trees can be used to keep a BST balanced?",
            options: [
                { optionText: "AVL Tree", optionTag: "A" },
                { optionText: "Heap", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When inserting a node into BST, what determines the direction of insertion?",
            options: [
                { optionText: "Value comparison with current node", optionTag: "A" },
                { optionText: "Node height", optionTag: "B" },
                { optionText: "Leaf status", optionTag: "C" },
                { optionText: "Tree depth", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can BSTs store duplicate values?",
            options: [
                { optionText: "Yes, but with rules (e.g., right subtree)", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if balanced", optionTag: "C" },
                { optionText: "Only with AVL trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used in BST for copying a tree?",
            options: [
                { optionText: "Preorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to delete a tree?",
            options: [
                { optionText: "Postorder", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Reverse level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition violates a BST property?",
            options: [
                { optionText: "Left child has a greater value than the parent", optionTag: "A" },
                { optionText: "Right child has a greater value than the parent", optionTag: "B" },
                { optionText: "Leaf node with no children", optionTag: "C" },
                { optionText: "Root with two children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the inorder predecessor of a node?",
            options: [
                { optionText: "Rightmost node in left subtree", optionTag: "A" },
                { optionText: "Leftmost node in right subtree", optionTag: "B" },
                { optionText: "Parent node", optionTag: "C" },
                { optionText: "Child node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How can you count total nodes in a BST recursively?",
            options: [
                { optionText: "return 1 + count(left) + count(right);", optionTag: "A" },
                { optionText: "return left + right;", optionTag: "B" },
                { optionText: "return size * 2;", optionTag: "C" },
                { optionText: "return null;", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is the most expensive in an unbalanced BST?",
            options: [
                { optionText: "Search", optionTag: "A" },
                { optionText: "Insert", optionTag: "B" },
                { optionText: "Delete", optionTag: "C" },
                { optionText: "Traversal", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What happens if you insert sorted values into a BST?",
            options: [
                { optionText: "It becomes skewed and behaves like a linked list", optionTag: "A" },
                { optionText: "It becomes a heap", optionTag: "B" },
                { optionText: "It stays balanced", optionTag: "C" },
                { optionText: "It throws an error", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure can convert a BST to a sorted array?",
            options: [
                { optionText: "Inorder traversal + Array", optionTag: "A" },
                { optionText: "Stack only", optionTag: "B" },
                { optionText: "Preorder traversal", optionTag: "C" },
                { optionText: "HashMap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In BST, where is the maximum element located?",
            options: [
                { optionText: "Rightmost node", optionTag: "A" },
                { optionText: "Leftmost node", optionTag: "B" },
                { optionText: "Root", optionTag: "C" },
                { optionText: "Center", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best-case time complexity for BST insert?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
