import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Red-Black Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate knowledge of Red-Black Trees in JavaScript, including properties, rotations, and insertion/deletion balancing.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "RedBlackTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What type of binary tree is a Red-Black Tree?",
            options: [
                { optionText: "Self-balancing binary search tree", optionTag: "A" },
                { optionText: "Complete binary tree", optionTag: "B" },
                { optionText: "Min-heap", optionTag: "C" },
                { optionText: "Max-heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What are the two colors used in Red-Black Trees?",
            options: [
                { optionText: "Red and Black", optionTag: "A" },
                { optionText: "Red and Blue", optionTag: "B" },
                { optionText: "Black and Green", optionTag: "C" },
                { optionText: "Red and White", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What color is the root node in a Red-Black Tree?",
            options: [
                { optionText: "Always black", optionTag: "A" },
                { optionText: "Always red", optionTag: "B" },
                { optionText: "Can be red or black", optionTag: "C" },
                { optionText: "Depends on height", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a red node has a red child?",
            options: [
                { optionText: "Red-Black Tree property is violated", optionTag: "A" },
                { optionText: "Nothing happens", optionTag: "B" },
                { optionText: "Tree is deleted", optionTag: "C" },
                { optionText: "It becomes a black node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation requires rebalancing in a Red-Black Tree?",
            options: [
                { optionText: "Insertion and deletion", optionTag: "A" },
                { optionText: "Traversal", optionTag: "B" },
                { optionText: "Searching", optionTag: "C" },
                { optionText: "Height check", optionTag: "D" }
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
            questionText: "Which of the following is a property of Red-Black Trees?",
            options: [
                { optionText: "Every path from root to a null node has same number of black nodes", optionTag: "A" },
                { optionText: "All red nodes are leaves", optionTag: "B" },
                { optionText: "Black nodes can have red children only", optionTag: "C" },
                { optionText: "Red nodes can have black children only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of rotations are used in Red-Black Tree balancing?",
            options: [
                { optionText: "Left and Right rotations", optionTag: "A" },
                { optionText: "Top and Bottom rotations", optionTag: "B" },
                { optionText: "In-order and Pre-order rotations", optionTag: "C" },
                { optionText: "AVL Rotations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case causes a left rotation during insertion in a Red-Black Tree?",
            options: [
                { optionText: "When right child is red and left child is black", optionTag: "A" },
                { optionText: "When left child is red and right child is red", optionTag: "B" },
                { optionText: "When parent is red", optionTag: "C" },
                { optionText: "When root is red", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum height of a Red-Black Tree with n nodes?",
            options: [
                { optionText: "2 * log(n + 1)", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "log n", optionTag: "C" },
                { optionText: "n / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are red-black trees different from AVL trees?",
            options: [
                { optionText: "Red-black trees are less strictly balanced", optionTag: "A" },
                { optionText: "Red-black trees are more balanced", optionTag: "B" },
                { optionText: "AVL trees do not rotate", optionTag: "C" },
                { optionText: "AVL trees use colors", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the color of a newly inserted node in Red-Black Tree?",
            options: [
                { optionText: "Red", optionTag: "A" },
                { optionText: "Black", optionTag: "B" },
                { optionText: "Alternates randomly", optionTag: "C" },
                { optionText: "Depends on parent", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these violates the Red-Black Tree properties?",
            options: [
                { optionText: "Two consecutive red nodes", optionTag: "A" },
                { optionText: "Black root", optionTag: "B" },
                { optionText: "Null children as black", optionTag: "C" },
                { optionText: "Different black heights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method fixes the tree after insertion?",
            options: [
                { optionText: "Recoloring and rotations", optionTag: "A" },
                { optionText: "Traversal", optionTag: "B" },
                { optionText: "Heapify", optionTag: "C" },
                { optionText: "Bubble-up", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What color is a leaf (null) node considered in Red-Black Trees?",
            options: [
                { optionText: "Black", optionTag: "A" },
                { optionText: "Red", optionTag: "B" },
                { optionText: "Undefined", optionTag: "C" },
                { optionText: "Gray", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why are Red-Black Trees used in many libraries?",
            options: [
                { optionText: "They offer guaranteed log(n) time operations", optionTag: "A" },
                { optionText: "They are easier to implement", optionTag: "B" },
                { optionText: "They don’t require rotations", optionTag: "C" },
                { optionText: "They use less memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens during deletion fixup in Red-Black Trees?",
            options: [
                { optionText: "Rebalancing and recoloring", optionTag: "A" },
                { optionText: "Immediate deletion only", optionTag: "B" },
                { optionText: "Convert to AVL tree", optionTag: "C" },
                { optionText: "Nothing special", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is **not** a Red-Black Tree rule?",
            options: [
                { optionText: "All paths from root to null contain same number of red nodes", optionTag: "A" },
                { optionText: "Root is always black", optionTag: "B" },
                { optionText: "Red nodes cannot have red children", optionTag: "C" },
                { optionText: "Leaves are considered black", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the color of sibling used in fixup cases for deletion?",
            options: [
                { optionText: "Red or black depending on situation", optionTag: "A" },
                { optionText: "Always black", optionTag: "B" },
                { optionText: "Always red", optionTag: "C" },
                { optionText: "Always gray", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Red-Black Trees, the number of black nodes from root to leaf is called:",
            options: [
                { optionText: "Black height", optionTag: "A" },
                { optionText: "Tree depth", optionTag: "B" },
                { optionText: "Red length", optionTag: "C" },
                { optionText: "Color factor", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
