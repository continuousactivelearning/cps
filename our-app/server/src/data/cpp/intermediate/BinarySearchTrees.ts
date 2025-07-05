import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Binary Search Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz evaluates your intermediate knowledge of Binary Search Trees (BSTs) in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinarySearchTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the key property of a Binary Search Tree (BST)?",
            options: [
                { optionText: "Left subtree contains smaller values, right contains greater", optionTag: "A" },
                { optionText: "Left subtree contains larger values", optionTag: "B" },
                { optionText: "Root contains largest value", optionTag: "C" },
                { optionText: "All nodes contain the same value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal of a BST results in sorted order?",
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
            questionText: "What is the time complexity of searching in a balanced BST?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity for insertion in an unbalanced BST?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node is removed when deleting a node with two children in a BST?",
            options: [
                { optionText: "Inorder successor or predecessor", optionTag: "A" },
                { optionText: "Left child only", optionTag: "B" },
                { optionText: "Right child only", optionTag: "C" },
                { optionText: "Root always", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function helps find the smallest value in BST?",
            options: [
                { optionText: "Go left until NULL", optionTag: "A" },
                { optionText: "Go right until NULL", optionTag: "B" },
                { optionText: "Traverse inorder", optionTag: "C" },
                { optionText: "Use a queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What traversal order is used to copy a BST into another BST?",
            options: [
                { optionText: "Preorder", optionTag: "A" },
                { optionText: "Postorder", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Level Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of tree can a BST degenerate into?",
            options: [
                { optionText: "Linked list", optionTag: "A" },
                { optionText: "Heap", optionTag: "B" },
                { optionText: "Balanced tree", optionTag: "C" },
                { optionText: "Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ structure is ideal to represent a BST node?",
            options: [
                { optionText: "struct with value, left and right pointers", optionTag: "A" },
                { optionText: "Only value field", optionTag: "B" },
                { optionText: "Array of values", optionTag: "C" },
                { optionText: "Linked list node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "To find the height of a BST, we compute:",
            options: [
                { optionText: "1 + max(height of left, height of right)", optionTag: "A" },
                { optionText: "Number of nodes", optionTag: "B" },
                { optionText: "Inorder length", optionTag: "C" },
                { optionText: "Level count", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about BST?",
            options: [
                { optionText: "Allows duplicate values (with some policies)", optionTag: "A" },
                { optionText: "Does not allow insertion", optionTag: "B" },
                { optionText: "Always balanced", optionTag: "C" },
                { optionText: "Used for queues", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation takes O(n) in skewed BST?",
            options: [
                { optionText: "Search", optionTag: "A" },
                { optionText: "Access root", optionTag: "B" },
                { optionText: "Check height", optionTag: "C" },
                { optionText: "Create node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is true for balanced BST?",
            options: [
                { optionText: "Height is approximately log₂(n)", optionTag: "A" },
                { optionText: "Height is always constant", optionTag: "B" },
                { optionText: "Search is O(n)", optionTag: "C" },
                { optionText: "Insertions are not allowed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is deletion different in BST when node has only one child?",
            options: [
                { optionText: "Child replaces the node directly", optionTag: "A" },
                { optionText: "Delete child too", optionTag: "B" },
                { optionText: "Both children must be null", optionTag: "C" },
                { optionText: "Swap with root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is typically used for inserting into BST?",
            options: [
                { optionText: "Recursive traversal to correct position", optionTag: "A" },
                { optionText: "Inorder traversal and insert", optionTag: "B" },
                { optionText: "Sorting and inserting", optionTag: "C" },
                { optionText: "DFS with stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many comparisons in worst case to search in BST of n nodes?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure supports fast insertion and deletion like BST?",
            options: [
                { optionText: "AVL Tree", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can a BST have duplicate keys?",
            options: [
                { optionText: "Yes, if allowed by the implementation", optionTag: "A" },
                { optionText: "No, never", optionTag: "B" },
                { optionText: "Only for right child", optionTag: "C" },
                { optionText: "Only for left child", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the parent-child relationship in BST?",
            options: [
                { optionText: "Parent is always greater than left and less than right", optionTag: "A" },
                { optionText: "Parent is less than all children", optionTag: "B" },
                { optionText: "Parent is greater than all children", optionTag: "C" },
                { optionText: "Parent and children have same values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can help avoid skewness in BST?",
            options: [
                { optionText: "Self-balancing trees like AVL", optionTag: "A" },
                { optionText: "Always insert at root", optionTag: "B" },
                { optionText: "Use hash map instead", optionTag: "C" },
                { optionText: "Random insertions", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
