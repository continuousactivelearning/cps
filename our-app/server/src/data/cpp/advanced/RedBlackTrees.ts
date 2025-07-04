import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Red-Black Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of Red-Black Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "RedBlackTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following is a property of Red-Black Trees?",
            options: [
                { optionText: "The root is always black", optionTag: "A" },
                { optionText: "The root is always red", optionTag: "B" },
                { optionText: "Leaves are always red", optionTag: "C" },
                { optionText: "All nodes must be black", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum height of a Red-Black Tree with n nodes?",
            options: [
                { optionText: "2 * log₂(n + 1)", optionTag: "A" },
                { optionText: "log₂(n)", optionTag: "B" },
                { optionText: "n", optionTag: "C" },
                { optionText: "√n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What color are the leaf nodes (NIL) in a Red-Black Tree?",
            options: [
                { optionText: "Black", optionTag: "A" },
                { optionText: "Red", optionTag: "B" },
                { optionText: "White", optionTag: "C" },
                { optionText: "Grey", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation is used to fix Red-Black Tree violations after insertion?",
            options: [
                { optionText: "Left and Right rotations", optionTag: "A" },
                { optionText: "Only Left rotations", optionTag: "B" },
                { optionText: "Only Right rotations", optionTag: "C" },
                { optionText: "Double rotations only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many colors are used in Red-Black Trees?",
            options: [
                { optionText: "2", optionTag: "A" },
                { optionText: "3", optionTag: "B" },
                { optionText: "4", optionTag: "C" },
                { optionText: "Unlimited", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations can cause a violation in Red-Black Tree properties?",
            options: [
                { optionText: "Insertion", optionTag: "A" },
                { optionText: "Search", optionTag: "B" },
                { optionText: "Traversal", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a Red-Black Tree, no path from a node to its descendant leaves contains more than how many black nodes?",
            options: [
                { optionText: "Different number of black nodes is not allowed", optionTag: "A" },
                { optionText: "Exactly one black node", optionTag: "B" },
                { optionText: "All paths must be of different lengths", optionTag: "C" },
                { optionText: "No restrictions on black nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity for insertion in a Red-Black Tree?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(log log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the color of a newly inserted node in a Red-Black Tree?",
            options: [
                { optionText: "Red", optionTag: "A" },
                { optionText: "Black", optionTag: "B" },
                { optionText: "Gray", optionTag: "C" },
                { optionText: "White", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which violation occurs if a red node has a red child?",
            options: [
                { optionText: "Red-Red Violation", optionTag: "A" },
                { optionText: "Black Height Violation", optionTag: "B" },
                { optionText: "Left-Leaning Violation", optionTag: "C" },
                { optionText: "Duplicate Key Violation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following trees can become a Red-Black Tree with rotations and recoloring?",
            options: [
                { optionText: "Binary Search Tree", optionTag: "A" },
                { optionText: "AVL Tree", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Trie", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the black height of a Red-Black Tree?",
            options: [
                { optionText: "Number of black nodes from root to a leaf", optionTag: "A" },
                { optionText: "Total number of nodes", optionTag: "B" },
                { optionText: "Height of left subtree", optionTag: "C" },
                { optionText: "Maximum height of red nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of deletion in a Red-Black Tree?",
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
            questionText: "What happens when a red node is inserted with a red parent?",
            options: [
                { optionText: "Rotations and/or recoloring needed", optionTag: "A" },
                { optionText: "Tree becomes AVL", optionTag: "B" },
                { optionText: "Tree becomes invalid permanently", optionTag: "C" },
                { optionText: "Nothing changes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can a Red-Black Tree be perfectly balanced?",
            options: [
                { optionText: "No, but it’s approximately balanced", optionTag: "A" },
                { optionText: "Yes, always", optionTag: "B" },
                { optionText: "Only during insertion", optionTag: "C" },
                { optionText: "Only during deletion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Red-Black Tree terminology, what is the 'uncle' of a node?",
            options: [
                { optionText: "Sibling of the node's parent", optionTag: "A" },
                { optionText: "Parent of the node", optionTag: "B" },
                { optionText: "Sibling of the node", optionTag: "C" },
                { optionText: "Parent of the root", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations does not affect Red-Black Tree properties?",
            options: [
                { optionText: "Searching", optionTag: "A" },
                { optionText: "Insertion", optionTag: "B" },
                { optionText: "Deletion", optionTag: "C" },
                { optionText: "Rotations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a valid reason for a tree not being Red-Black?",
            options: [
                { optionText: "Two red nodes in a row", optionTag: "A" },
                { optionText: "Black root node", optionTag: "B" },
                { optionText: "Black height consistency", optionTag: "C" },
                { optionText: "Leaves being black", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case requires both rotation and recoloring during fix-up?",
            options: [
                { optionText: "Red parent and red uncle", optionTag: "A" },
                { optionText: "Black parent and red uncle", optionTag: "B" },
                { optionText: "Red parent and black uncle", optionTag: "C" },
                { optionText: "Black parent and black uncle", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many children can a red node have?",
            options: [
                { optionText: "Only black children", optionTag: "A" },
                { optionText: "Only red children", optionTag: "B" },
                { optionText: "No children allowed", optionTag: "C" },
                { optionText: "Any colored children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
