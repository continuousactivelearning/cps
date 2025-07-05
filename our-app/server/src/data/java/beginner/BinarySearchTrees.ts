// src/data/java/beginner/binarysearchtrees.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Binary Search Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your foundational understanding of Binary Search Trees (BSTs) in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Binary Search Trees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the key property of a Binary Search Tree?",
            options: [
                { optionText: "Left subtree has smaller values, right has larger", optionTag: "A" },
                { optionText: "All nodes have equal value", optionTag: "B" },
                { optionText: "Left subtree has larger values", optionTag: "C" },
                { optionText: "No specific structure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of searching in a balanced BST?",
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
            questionText: "Which traversal gives sorted order in BST?",
            options: [
                { optionText: "Inorder", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In BST, where is the smallest element located?",
            options: [
                { optionText: "Leftmost node", optionTag: "A" },
                { optionText: "Rightmost node", optionTag: "B" },
                { optionText: "Root node", optionTag: "C" },
                { optionText: "Leaf node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In BST, what happens if you insert a duplicate key?",
            options: [
                { optionText: "Depends on implementation", optionTag: "A" },
                { optionText: "It is always added to left", optionTag: "B" },
                { optionText: "It replaces existing", optionTag: "C" },
                { optionText: "It is ignored", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the average-case time for inserting a node in a BST?",
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
            questionText: "Which of these BST operations takes O(n) in the worst case?",
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
            questionText: "Which node replaces the deleted node with two children in a BST?",
            options: [
                { optionText: "Inorder successor or predecessor", optionTag: "A" },
                { optionText: "Any leaf node", optionTag: "B" },
                { optionText: "Root", optionTag: "C" },
                { optionText: "Left child", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these trees is always balanced?",
            options: [
                { optionText: "AVL Tree", optionTag: "A" },
                { optionText: "BST", optionTag: "B" },
                { optionText: "Complete Binary Tree", optionTag: "C" },
                { optionText: "Full Binary Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if BST becomes skewed?",
            options: [
                { optionText: "Time complexity becomes O(n)", optionTag: "A" },
                { optionText: "Time complexity improves", optionTag: "B" },
                { optionText: "Tree height decreases", optionTag: "C" },
                { optionText: "Insertion becomes impossible", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to delete all nodes in a BST?",
            options: [
                { optionText: "Postorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Level Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node is returned in findMin() in BST?",
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
            questionText: "Which condition helps find maximum node in BST?",
            options: [
                { optionText: "Traverse right until null", optionTag: "A" },
                { optionText: "Traverse left until null", optionTag: "B" },
                { optionText: "Traverse root node only", optionTag: "C" },
                { optionText: "Traverse in level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In BST, where can duplicate values be inserted typically?",
            options: [
                { optionText: "Right subtree", optionTag: "A" },
                { optionText: "Left subtree", optionTag: "B" },
                { optionText: "Either subtree", optionTag: "C" },
                { optionText: "Not allowed", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What does inOrderTraversal of BST provide?",
            options: [
                { optionText: "Sorted order", optionTag: "A" },
                { optionText: "Reverse order", optionTag: "B" },
                { optionText: "No order", optionTag: "C" },
                { optionText: "Postorder", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which BST operation may not require recursion?",
            options: [
                { optionText: "Insertion", optionTag: "A" },
                { optionText: "Search", optionTag: "B" },
                { optionText: "Traversal", optionTag: "C" },
                { optionText: "All can be iterative", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which of the following is true for BST?",
            options: [
                { optionText: "All left subtree values < root", optionTag: "A" },
                { optionText: "All right subtree values < root", optionTag: "B" },
                { optionText: "Left and right subtrees are equal", optionTag: "C" },
                { optionText: "Root is always 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "BST is a subtype of which tree?",
            options: [
                { optionText: "Binary Tree", optionTag: "A" },
                { optionText: "Heap", optionTag: "B" },
                { optionText: "Graph", optionTag: "C" },
                { optionText: "AVL Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case is worst-case insertion in BST?",
            options: [
                { optionText: "Skewed tree", optionTag: "A" },
                { optionText: "Balanced tree", optionTag: "B" },
                { optionText: "Full tree", optionTag: "C" },
                { optionText: "Perfect tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which key is used to split BST during deletion?",
            options: [
                { optionText: "Inorder successor/predecessor", optionTag: "A" },
                { optionText: "Any random key", optionTag: "B" },
                { optionText: "Root key", optionTag: "C" },
                { optionText: "Leaf node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;