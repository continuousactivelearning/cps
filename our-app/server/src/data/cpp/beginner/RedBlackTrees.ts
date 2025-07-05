import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Red-Black Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Red-Black Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "RedBlackTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What type of data structure is a Red-Black Tree?",
            options: [
                { optionText: "Self-balancing Binary Search Tree", optionTag: "A" },
                { optionText: "Hash Table", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a property of Red-Black Trees?",
            options: [
                { optionText: "Every node is either red or black", optionTag: "A" },
                { optionText: "All nodes are red", optionTag: "B" },
                { optionText: "Only leaf nodes are black", optionTag: "C" },
                { optionText: "Every node must be black", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What color is the root node in a Red-Black Tree?",
            options: [
                { optionText: "Always black", optionTag: "A" },
                { optionText: "Always red", optionTag: "B" },
                { optionText: "Can be any color", optionTag: "C" },
                { optionText: "Depends on the key", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum height of a Red-Black Tree with n nodes?",
            options: [
                { optionText: "2 * log₂(n + 1)", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "log₂(n)", optionTag: "C" },
                { optionText: "√n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations may cause re-balancing in a Red-Black Tree?",
            options: [
                { optionText: "Insertion", optionTag: "A" },
                { optionText: "Deletion", optionTag: "B" },
                { optionText: "Both A and B", optionTag: "C" },
                { optionText: "Traversal", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which rotation(s) are used to fix Red-Black Tree violations?",
            options: [
                { optionText: "Left and Right Rotations", optionTag: "A" },
                { optionText: "Only Left Rotation", optionTag: "B" },
                { optionText: "Only Right Rotation", optionTag: "C" },
                { optionText: "No rotations are needed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a property of Red-Black Trees?",
            options: [
                { optionText: "Every red node must have two red children", optionTag: "A" },
                { optionText: "The root is black", optionTag: "B" },
                { optionText: "Every path from root to leaf must have the same number of black nodes", optionTag: "C" },
                { optionText: "No two red nodes can be adjacent", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Red-Black Tree is a type of:",
            options: [
                { optionText: "Balanced Binary Search Tree", optionTag: "A" },
                { optionText: "AVL Tree", optionTag: "B" },
                { optionText: "Binary Heap", optionTag: "C" },
                { optionText: "Binary Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What color are the NIL leaves in a Red-Black Tree?",
            options: [
                { optionText: "Black", optionTag: "A" },
                { optionText: "Red", optionTag: "B" },
                { optionText: "Depends on context", optionTag: "C" },
                { optionText: "White", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many children can a red node have in a valid Red-Black Tree?",
            options: [
                { optionText: "Only black children", optionTag: "A" },
                { optionText: "Only red children", optionTag: "B" },
                { optionText: "Any color children", optionTag: "C" },
                { optionText: "No children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of insertion in a Red-Black Tree?",
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
            questionText: "Which of the following is a valid use-case for Red-Black Trees?",
            options: [
                { optionText: "Implementing associative containers (like maps and sets)", optionTag: "A" },
                { optionText: "Shortest path finding", optionTag: "B" },
                { optionText: "Memory management", optionTag: "C" },
                { optionText: "Hashing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when two red nodes appear consecutively in Red-Black Tree after insertion?",
            options: [
                { optionText: "Violation must be fixed using rotation and recoloring", optionTag: "A" },
                { optionText: "Tree remains valid", optionTag: "B" },
                { optionText: "Tree is rebuilt completely", optionTag: "C" },
                { optionText: "All nodes are recolored to black", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL container uses Red-Black Tree internally?",
            options: [
                { optionText: "std::map", optionTag: "A" },
                { optionText: "std::vector", optionTag: "B" },
                { optionText: "std::unordered_map", optionTag: "C" },
                { optionText: "std::stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a Red-Black Tree, a black height of a node is:",
            options: [
                { optionText: "Number of black nodes from root to leaf", optionTag: "A" },
                { optionText: "Height of the tree", optionTag: "B" },
                { optionText: "Number of red nodes below it", optionTag: "C" },
                { optionText: "Total number of nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If a red node has a red child, what type of violation occurs?",
            options: [
                { optionText: "Red-Red violation", optionTag: "A" },
                { optionText: "Black height violation", optionTag: "B" },
                { optionText: "Balance violation", optionTag: "C" },
                { optionText: "Height overflow", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function is usually used to restore Red-Black Tree after insertion?",
            options: [
                { optionText: "FixInsert()", optionTag: "A" },
                { optionText: "FixTree()", optionTag: "B" },
                { optionText: "InsertFixup()", optionTag: "C" },
                { optionText: "Balance()", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which of these is true for a Red-Black Tree of n nodes?",
            options: [
                { optionText: "Height is O(log n)", optionTag: "A" },
                { optionText: "Height is O(n)", optionTag: "B" },
                { optionText: "Height is O(n^2)", optionTag: "C" },
                { optionText: "Height is constant", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "The Red-Black Tree ensures balance by:",
            options: [
                { optionText: "Maintaining color and height properties", optionTag: "A" },
                { optionText: "Using hash codes", optionTag: "B" },
                { optionText: "Using BFS", optionTag: "C" },
                { optionText: "Using pre-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens after deletion in Red-Black Tree?",
            options: [
                { optionText: "Tree may need to be rebalanced using rotations and recoloring", optionTag: "A" },
                { optionText: "Tree remains unchanged", optionTag: "B" },
                { optionText: "Root becomes red", optionTag: "C" },
                { optionText: "All leaves are recolored red", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
