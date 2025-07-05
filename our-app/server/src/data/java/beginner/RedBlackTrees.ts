// src/data/java/beginner/red_black_trees.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Red-Black Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz evaluates your understanding of Red-Black Tree fundamentals.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "RedBlackTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What type of tree is a Red-Black Tree?",
            options: [
                { optionText: "Self-balancing binary search tree", optionTag: "A" },
                { optionText: "Heap", optionTag: "B" },
                { optionText: "Trie", optionTag: "C" },
                { optionText: "Segment Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What are the possible colors of a node in a Red-Black Tree?",
            options: [
                { optionText: "Red or Black", optionTag: "A" },
                { optionText: "Blue or Green", optionTag: "B" },
                { optionText: "Only Black", optionTag: "C" },
                { optionText: "Red or White", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the color of the root node in a Red-Black Tree?",
            options: [
                { optionText: "Always Black", optionTag: "A" },
                { optionText: "Always Red", optionTag: "B" },
                { optionText: "Alternates", optionTag: "C" },
                { optionText: "Undefined", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum height of a Red-Black Tree with n nodes?",
            options: [
                { optionText: "2 * log(n + 1)", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "log(n)", optionTag: "C" },
                { optionText: "n/2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when two red nodes appear consecutively?",
            options: [
                { optionText: "Tree violates Red-Black property", optionTag: "A" },
                { optionText: "Tree becomes invalid", optionTag: "B" },
                { optionText: "Tree is balanced", optionTag: "C" },
                { optionText: "Nothing happens", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation is used to fix Red-Black Tree violation?",
            options: [
                { optionText: "Left or Right Rotation", optionTag: "A" },
                { optionText: "Swap", optionTag: "B" },
                { optionText: "Mirror", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What ensures balanced height in Red-Black Trees?",
            options: [
                { optionText: "Coloring and Rotations", optionTag: "A" },
                { optionText: "Heap Property", optionTag: "B" },
                { optionText: "Fixed tree size", optionTag: "C" },
                { optionText: "Depth limit", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal of Red-Black Tree gives sorted values?",
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
            questionText: "Which of the following is not a Red-Black Tree rule?",
            options: [
                { optionText: "Every red node must have black children", optionTag: "A" },
                { optionText: "Root is red", optionTag: "B" },
                { optionText: "Leaf nodes are black", optionTag: "C" },
                { optionText: "All paths from a node to its descendant leaves must have same number of black nodes", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Red-Black Trees are a type of:",
            options: [
                { optionText: "Balanced Binary Search Tree", optionTag: "A" },
                { optionText: "Unbalanced Binary Tree", optionTag: "B" },
                { optionText: "Heap Tree", optionTag: "C" },
                { optionText: "Tries", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What color are the NIL (null) leaves in a Red-Black Tree?",
            options: [
                { optionText: "Black", optionTag: "A" },
                { optionText: "Red", optionTag: "B" },
                { optionText: "None", optionTag: "C" },
                { optionText: "White", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many red nodes can a Red-Black Tree have?",
            options: [
                { optionText: "Depends on structure", optionTag: "A" },
                { optionText: "Equal to black nodes", optionTag: "B" },
                { optionText: "Always half of total nodes", optionTag: "C" },
                { optionText: "One", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation might need recoloring?",
            options: [
                { optionText: "Insertion", optionTag: "A" },
                { optionText: "Search", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Level Order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which one is more balanced: AVL or Red-Black Tree?",
            options: [
                { optionText: "AVL Tree", optionTag: "A" },
                { optionText: "Red-Black Tree", optionTag: "B" },
                { optionText: "Both are equal", optionTag: "C" },
                { optionText: "None", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which one is faster for insertion?",
            options: [
                { optionText: "Red-Black Tree", optionTag: "A" },
                { optionText: "AVL Tree", optionTag: "B" },
                { optionText: "Both are same", optionTag: "C" },
                { optionText: "B-Trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node property does Red-Black Tree maintain for balancing?",
            options: [
                { optionText: "Color", optionTag: "A" },
                { optionText: "Weight", optionTag: "B" },
                { optionText: "Size", optionTag: "C" },
                { optionText: "Priority", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Red-Black Trees are used in which Java collection?",
            options: [
                { optionText: "TreeMap", optionTag: "A" },
                { optionText: "HashMap", optionTag: "B" },
                { optionText: "LinkedList", optionTag: "C" },
                { optionText: "ArrayList", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT true for Red-Black Trees?",
            options: [
                { optionText: "They are always balanced", optionTag: "A" },
                { optionText: "Each node is red or black", optionTag: "B" },
                { optionText: "NIL leaves are black", optionTag: "C" },
                { optionText: "Two red nodes can be adjacent", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "In Red-Black Tree, root must always be:",
            options: [
                { optionText: "Black", optionTag: "A" },
                { optionText: "Red", optionTag: "B" },
                { optionText: "Green", optionTag: "C" },
                { optionText: "Colorless", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Insertion in Red-Black Tree may lead to:",
            options: [
                { optionText: "Rotation and Recoloring", optionTag: "A" },
                { optionText: "Deletion", optionTag: "B" },
                { optionText: "Traversal", optionTag: "C" },
                { optionText: "Balancing in AVL", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;