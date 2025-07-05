import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Binary Search Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic knowledge of Binary Search Trees (BSTs) in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinarySearchTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What defines a Binary Search Tree (BST)?",
            options: [
                { optionText: "Left < Root < Right", optionTag: "A" },
                { optionText: "Left > Root < Right", optionTag: "B" },
                { optionText: "Left = Right = Root", optionTag: "C" },
                { optionText: "Root < Left < Right", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal gives the sorted order of elements in a BST?",
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
            questionText: "What is the time complexity for searching in a balanced BST?",
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
            questionText: "Which operation is faster in a balanced BST compared to an unbalanced one?",
            options: [
                { optionText: "Search", optionTag: "A" },
                { optionText: "Insert", optionTag: "B" },
                { optionText: "Delete", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "In BST, where would the smallest element be found?",
            options: [
                { optionText: "Leftmost node", optionTag: "A" },
                { optionText: "Rightmost node", optionTag: "B" },
                { optionText: "Root", optionTag: "C" },
                { optionText: "Any leaf node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Where is the largest element in a BST located?",
            options: [
                { optionText: "Rightmost node", optionTag: "A" },
                { optionText: "Leftmost node", optionTag: "B" },
                { optionText: "Root", optionTag: "C" },
                { optionText: "Leaf node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition is used to insert a new node in a BST?",
            options: [
                { optionText: "Less goes left, greater goes right", optionTag: "A" },
                { optionText: "Greater goes left, less goes right", optionTag: "B" },
                { optionText: "Always insert to left", optionTag: "C" },
                { optionText: "Insert randomly", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ structure is best for defining a BST node?",
            options: [
                { optionText: "struct Node { int data; Node *left, *right; };", optionTag: "A" },
                { optionText: "struct Tree { int node; Tree pointer; };", optionTag: "B" },
                { optionText: "int node[];", optionTag: "C" },
                { optionText: "class TreeNode { float val; };", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What will an inorder traversal of the following BST return?\n\n      10\n     /  \\\n    5    15",
            options: [
                { optionText: "5 10 15", optionTag: "A" },
                { optionText: "10 5 15", optionTag: "B" },
                { optionText: "15 10 5", optionTag: "C" },
                { optionText: "5 15 10", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you delete a leaf node in a BST?",
            options: [
                { optionText: "Remove directly", optionTag: "A" },
                { optionText: "Replace with root", optionTag: "B" },
                { optionText: "Swap with left child", optionTag: "C" },
                { optionText: "It cannot be deleted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about BSTs?",
            options: [
                { optionText: "They do not allow duplicate values", optionTag: "A" },
                { optionText: "They always have 2 children", optionTag: "B" },
                { optionText: "Only integers are allowed", optionTag: "C" },
                { optionText: "They must be complete trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if we insert elements in sorted order into a BST?",
            options: [
                { optionText: "It becomes skewed", optionTag: "A" },
                { optionText: "It becomes balanced", optionTag: "B" },
                { optionText: "It forms a heap", optionTag: "C" },
                { optionText: "Nothing changes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal should you use to copy a BST?",
            options: [
                { optionText: "Preorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a balanced BST?",
            options: [
                { optionText: "AVL Tree", optionTag: "A" },
                { optionText: "Skewed Tree", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Threaded Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of searching in a BST?",
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
            questionText: "What is the best-case time complexity of insertion in a BST?",
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
            questionText: "Which traversal is not typically used with BSTs?",
            options: [
                { optionText: "Reverse order", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Postorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many children can each node have in a BST?",
            options: [
                { optionText: "At most 2", optionTag: "A" },
                { optionText: "Only 1", optionTag: "B" },
                { optionText: "Exactly 2", optionTag: "C" },
                { optionText: "Unlimited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition breaks the BST property?",
            options: [
                { optionText: "Inserting a node where left child > parent", optionTag: "A" },
                { optionText: "Right child > parent", optionTag: "B" },
                { optionText: "Left child < parent", optionTag: "C" },
                { optionText: "All leaf nodes are at same level", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of nodes in a BST of height h?",
            options: [
                { optionText: "h + 1", optionTag: "A" },
                { optionText: "2^h", optionTag: "B" },
                { optionText: "log h", optionTag: "C" },
                { optionText: "h * 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
    