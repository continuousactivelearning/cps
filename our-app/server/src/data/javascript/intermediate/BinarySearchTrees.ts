import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Binary Search Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz evaluates your intermediate knowledge of Binary Search Trees (BSTs) using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BinarySearchTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What property defines a Binary Search Tree?",
            options: [
                { optionText: "Left child < parent < right child", optionTag: "A" },
                { optionText: "Left child > parent > right child", optionTag: "B" },
                { optionText: "Only root node has children", optionTag: "C" },
                { optionText: "All nodes are equal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the average-case time complexity of search in a BST?",
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
            questionText: "Which traversal of a BST gives sorted output?",
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
            questionText: "In a BST, where would a smaller value than root be inserted?",
            options: [
                { optionText: "Left subtree", optionTag: "A" },
                { optionText: "Right subtree", optionTag: "B" },
                { optionText: "At the root", optionTag: "C" },
                { optionText: "Nowhere", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to delete a node with two children?",
            options: [
                { optionText: "Replace with in-order successor or predecessor", optionTag: "A" },
                { optionText: "Remove root only", optionTag: "B" },
                { optionText: "Delete entire tree", optionTag: "C" },
                { optionText: "Replace with maximum node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a skewed BST with N nodes?",
            options: [
                { optionText: "N", optionTag: "A" },
                { optionText: "log N", optionTag: "B" },
                { optionText: "N/2", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation takes O(N) in the worst case in BST?",
            options: [
                { optionText: "Search, Insert, Delete", optionTag: "A" },
                { optionText: "Only Search", optionTag: "B" },
                { optionText: "Only Delete", optionTag: "C" },
                { optionText: "Only Insert", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many children can a node have in a BST?",
            options: [
                { optionText: "0, 1 or 2", optionTag: "A" },
                { optionText: "Only 2", optionTag: "B" },
                { optionText: "Only 1", optionTag: "C" },
                { optionText: "Only 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is typically used to implement recursion in BST?",
            options: [
                { optionText: "Call stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is returned when searching a BST and the key does not exist?",
            options: [
                { optionText: "null or undefined", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "false", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is best to copy a BST?",
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
            questionText: "What is the space complexity of recursive traversal of a BST?",
            options: [
                { optionText: "O(H), where H is the height", optionTag: "A" },
                { optionText: "O(N^2)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(N log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of data cannot be stored in a BST?",
            options: [
                { optionText: "BST can store any comparable data", optionTag: "A" },
                { optionText: "Only numbers", optionTag: "B" },
                { optionText: "Only strings", optionTag: "C" },
                { optionText: "Only objects", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following creates an unbalanced BST?",
            options: [
                { optionText: "Inserting sorted data", optionTag: "A" },
                { optionText: "Inserting random data", optionTag: "B" },
                { optionText: "Inserting in reverse", optionTag: "C" },
                { optionText: "Inserting unique data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you convert a BST to a sorted array?",
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
            questionText: "What happens when you insert duplicate keys in a BST?",
            options: [
                { optionText: "Depends on implementation", optionTag: "A" },
                { optionText: "It always replaces existing", optionTag: "B" },
                { optionText: "It is ignored", optionTag: "C" },
                { optionText: "It creates cycle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is minimum element found in a BST?",
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
            questionText: "In JavaScript, how do you represent a node in BST?",
            options: [
                { optionText: "As an object with value, left and right properties", optionTag: "A" },
                { optionText: "As a string", optionTag: "B" },
                { optionText: "As a single number", optionTag: "C" },
                { optionText: "As an array", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many BSTs can be made with 3 distinct nodes?",
            options: [
                { optionText: "5", optionTag: "A" },
                { optionText: "6", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of BST traversal is used to evaluate expression trees?",
            options: [
                { optionText: "Post-order", optionTag: "A" },
                { optionText: "Pre-order", optionTag: "B" },
                { optionText: "In-order", optionTag: "C" },
                { optionText: "Level-order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
