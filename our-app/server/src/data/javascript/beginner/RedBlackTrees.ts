import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Red-Black Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your beginner-level understanding of Red-Black Trees in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "RedBlackTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What type of data structure is a Red-Black Tree?",
            options: [
                { optionText: "Self-balancing binary search tree", optionTag: "A" },
                { optionText: "Hash table", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many colors can a node in a Red-Black Tree have?",
            options: [
                { optionText: "Two", optionTag: "A" },
                { optionText: "Three", optionTag: "B" },
                { optionText: "Four", optionTag: "C" },
                { optionText: "Unlimited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What are the valid colors in a Red-Black Tree?",
            options: [
                { optionText: "Red and Black", optionTag: "A" },
                { optionText: "Red and Green", optionTag: "B" },
                { optionText: "Black and Blue", optionTag: "C" },
                { optionText: "White and Red", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the color of the root in a Red-Black Tree?",
            options: [
                { optionText: "Always black", optionTag: "A" },
                { optionText: "Always red", optionTag: "B" },
                { optionText: "Can be any color", optionTag: "C" },
                { optionText: "Depends on insertion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property is NOT true for Red-Black Trees?",
            options: [
                { optionText: "Every red node must have two red children", optionTag: "A" },
                { optionText: "The root is always black", optionTag: "B" },
                { optionText: "All paths from a node to descendant leaves contain the same number of black nodes", optionTag: "C" },
                { optionText: "New nodes are inserted as red", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of searching in a Red-Black Tree?",
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
            questionText: "Why are Red-Black Trees used?",
            options: [
                { optionText: "To ensure balanced height", optionTag: "A" },
                { optionText: "To sort arrays", optionTag: "B" },
                { optionText: "To reduce recursion", optionTag: "C" },
                { optionText: "To compress data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When inserting into a Red-Black Tree, what color is the new node?",
            options: [
                { optionText: "Red", optionTag: "A" },
                { optionText: "Black", optionTag: "B" },
                { optionText: "White", optionTag: "C" },
                { optionText: "Green", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What operation may be needed after insertion in Red-Black Trees?",
            options: [
                { optionText: "Rotation", optionTag: "A" },
                { optionText: "Heapify", optionTag: "B" },
                { optionText: "Hashing", optionTag: "C" },
                { optionText: "Partitioning", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a type of rotation in Red-Black Trees?",
            options: [
                { optionText: "Left rotation", optionTag: "A" },
                { optionText: "Diagonal rotation", optionTag: "B" },
                { optionText: "Spiral rotation", optionTag: "C" },
                { optionText: "Square rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What causes a double rotation in a Red-Black Tree?",
            options: [
                { optionText: "Violation involving red child and red grandchild", optionTag: "A" },
                { optionText: "Node is black", optionTag: "B" },
                { optionText: "Tree is empty", optionTag: "C" },
                { optionText: "Duplicate key", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many children can a node have in a Red-Black Tree?",
            options: [
                { optionText: "At most 2", optionTag: "A" },
                { optionText: "At most 3", optionTag: "B" },
                { optionText: "Unlimited", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which color is not allowed to have a red child?",
            options: [
                { optionText: "Red", optionTag: "A" },
                { optionText: "Black", optionTag: "B" },
                { optionText: "Root", optionTag: "C" },
                { optionText: "Leaf", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations may cause recoloring?",
            options: [
                { optionText: "Insert", optionTag: "A" },
                { optionText: "Display", optionTag: "B" },
                { optionText: "Print", optionTag: "C" },
                { optionText: "Input", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Red-Black Tree, what does black height mean?",
            options: [
                { optionText: "Number of black nodes from root to leaf", optionTag: "A" },
                { optionText: "Number of red nodes in the tree", optionTag: "B" },
                { optionText: "Total height", optionTag: "C" },
                { optionText: "Depth of root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can a Red-Black Tree be perfectly balanced?",
            options: [
                { optionText: "No, but it remains approximately balanced", optionTag: "A" },
                { optionText: "Yes, always", optionTag: "B" },
                { optionText: "Never", optionTag: "C" },
                { optionText: "Only for odd number of nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the leaf node in a Red-Black Tree?",
            options: [
                { optionText: "A null (NIL) node", optionTag: "A" },
                { optionText: "A red-colored node", optionTag: "B" },
                { optionText: "The last non-leaf node", optionTag: "C" },
                { optionText: "The node with highest value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are Red-Black Trees implemented in JavaScript?",
            options: [
                { optionText: "Using classes and pointers (references)", optionTag: "A" },
                { optionText: "Using arrays only", optionTag: "B" },
                { optionText: "Using for loops", optionTag: "C" },
                { optionText: "Using JSON directly", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of insertion in a Red-Black Tree?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the benefit of Red-Black Tree over unbalanced BST?",
            options: [
                { optionText: "Guaranteed log(n) operations", optionTag: "A" },
                { optionText: "Easier insertion logic", optionTag: "B" },
                { optionText: "Requires no memory", optionTag: "C" },
                { optionText: "Uses arrays internally", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
