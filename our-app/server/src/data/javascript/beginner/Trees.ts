import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic understanding of Tree data structures in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Trees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a tree in data structures?",
            options: [
                { optionText: "A hierarchical data structure", optionTag: "A" },
                { optionText: "A linear data structure", optionTag: "B" },
                { optionText: "A sorting algorithm", optionTag: "C" },
                { optionText: "A type of loop", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the root of a tree?",
            options: [
                { optionText: "The topmost node", optionTag: "A" },
                { optionText: "The bottom node", optionTag: "B" },
                { optionText: "A leaf node", optionTag: "C" },
                { optionText: "A null node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a leaf node?",
            options: [
                { optionText: "A node with no children", optionTag: "A" },
                { optionText: "The root node", optionTag: "B" },
                { optionText: "A node with one child", optionTag: "C" },
                { optionText: "A node with two parents", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal visits nodes in the order: left, root, right?",
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
            questionText: "Which data structure is used for Level-order traversal?",
            options: [
                { optionText: "Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Linked List", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a tree with only root node?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is true for binary trees?",
            options: [
                { optionText: "Each node has at most two children", optionTag: "A" },
                { optionText: "Each node has exactly two children", optionTag: "B" },
                { optionText: "Every node has one child", optionTag: "C" },
                { optionText: "Nodes cannot have children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many children can a node in a general tree have?",
            options: [
                { optionText: "Any number", optionTag: "A" },
                { optionText: "At most two", optionTag: "B" },
                { optionText: "Exactly three", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal visits root, left, right?",
            options: [
                { optionText: "Preorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Reverse Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript structure can represent a tree node?",
            options: [
                { optionText: "An object with left and right properties", optionTag: "A" },
                { optionText: "An array of size 2", optionTag: "B" },
                { optionText: "A number", optionTag: "C" },
                { optionText: "A string", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of traversing a binary tree?",
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
            questionText: "What type of recursion is used in tree traversals?",
            options: [
                { optionText: "Depth-first", optionTag: "A" },
                { optionText: "Tail-recursion", optionTag: "B" },
                { optionText: "Breadth-first", optionTag: "C" },
                { optionText: "Mutual recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the degree of a node?",
            options: [
                { optionText: "Number of children", optionTag: "A" },
                { optionText: "Number of parents", optionTag: "B" },
                { optionText: "Depth level", optionTag: "C" },
                { optionText: "Height of tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the depth of the root node?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What traversal visits left, right, root?",
            options: [
                { optionText: "Postorder", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Breadth-first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What defines a complete binary tree?",
            options: [
                { optionText: "All levels are filled except possibly the last", optionTag: "A" },
                { optionText: "All nodes have two children", optionTag: "B" },
                { optionText: "All nodes are leaf", optionTag: "C" },
                { optionText: "It has only one node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is used to insert a node into a binary tree?",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "for loop", optionTag: "B" },
                { optionText: "Math.random()", optionTag: "C" },
                { optionText: "Array.push()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a tree?",
            options: [
                { optionText: "A graph with cycles", optionTag: "A" },
                { optionText: "A binary search tree", optionTag: "B" },
                { optionText: "A DOM structure", optionTag: "C" },
                { optionText: "A heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the branching factor of a binary tree?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "Varies", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a balanced tree?",
            options: [
                { optionText: "A tree where the height difference of subtrees is minimal", optionTag: "A" },
                { optionText: "A tree with one child per node", optionTag: "B" },
                { optionText: "A tree with odd number of nodes", optionTag: "C" },
                { optionText: "A tree with duplicate values", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
