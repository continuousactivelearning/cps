import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ AVL Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate-level understanding of AVL Trees in C++.",
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
                { optionText: "A hash table", optionTag: "B" },
                { optionText: "A graph", optionTag: "C" },
                { optionText: "A tree with all leaf nodes at same level", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Who invented the AVL Tree?",
            options: [
                { optionText: "Adelson-Velsky and Landis", optionTag: "A" },
                { optionText: "Alan Turing", optionTag: "B" },
                { optionText: "Donald Knuth", optionTag: "C" },
                { optionText: "Robert Tarjan", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the balance factor of a node in an AVL tree?",
            options: [
                { optionText: "Height of left subtree - height of right subtree", optionTag: "A" },
                { optionText: "Sum of heights of left and right subtrees", optionTag: "B" },
                { optionText: "Difference in number of nodes", optionTag: "C" },
                { optionText: "Total number of child nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the allowed range of balance factor values in AVL trees?",
            options: [
                { optionText: "-1, 0, 1", optionTag: "A" },
                { optionText: "0, 1, 2", optionTag: "B" },
                { optionText: "-2 to 2", optionTag: "C" },
                { optionText: "-3 to 3", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation is required when a left-left imbalance is detected?",
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
            questionText: "Which rotation is needed for a right-right imbalance?",
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
            questionText: "What type of rotation is required for a left-right imbalance?",
            options: [
                { optionText: "Left Rotation followed by Right Rotation", optionTag: "A" },
                { optionText: "Right Rotation only", optionTag: "B" },
                { optionText: "No rotation", optionTag: "C" },
                { optionText: "Left Rotation only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations can cause imbalance in AVL tree?",
            options: [
                { optionText: "Insertion", optionTag: "A" },
                { optionText: "Deletion", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "Search", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity for insertion in AVL trees?",
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
            questionText: "After deletion in AVL, how many nodes may need rebalancing?",
            options: [
                { optionText: "All ancestors of deleted node", optionTag: "A" },
                { optionText: "Only the deleted node", optionTag: "B" },
                { optionText: "Only one node", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ structure is best suited for implementing an AVL Tree?",
            options: [
                { optionText: "Class with left, right pointers and height", optionTag: "A" },
                { optionText: "Vector", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of an AVL tree with 7 nodes in the worst case?",
            options: [
                { optionText: "3", optionTag: "A" },
                { optionText: "7", optionTag: "B" },
                { optionText: "log2(7)", optionTag: "C" },
                { optionText: "5", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following traversal is used to print elements in sorted order?",
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
            questionText: "Which property is violated in a non-AVL balanced BST?",
            options: [
                { optionText: "Balance factor", optionTag: "A" },
                { optionText: "Binary search tree property", optionTag: "B" },
                { optionText: "Parent-child pointer relation", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation fixes the Right-Left imbalance?",
            options: [
                { optionText: "Right Rotation followed by Left Rotation", optionTag: "A" },
                { optionText: "Left Rotation only", optionTag: "B" },
                { optionText: "Right Rotation only", optionTag: "C" },
                { optionText: "No rotation needed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many different rotation types exist in AVL trees?",
            options: [
                { optionText: "4", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about AVL tree height?",
            options: [
                { optionText: "log(n) where n is number of nodes", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "constant", optionTag: "C" },
                { optionText: "log(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case does NOT need rotation in AVL?",
            options: [
                { optionText: "Balance factor = 0", optionTag: "A" },
                { optionText: "Balance factor = 2", optionTag: "B" },
                { optionText: "Balance factor = -2", optionTag: "C" },
                { optionText: "Left-right imbalance", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the height of a leaf node in AVL tree defined?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "Depends on depth", optionTag: "C" },
                { optionText: "-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of searching in an AVL Tree?",
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
