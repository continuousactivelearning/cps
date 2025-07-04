import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Red-Black Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz tests your intermediate knowledge of Red-Black Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "RedBlackTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following is a property of a Red-Black Tree?",
            options: [
                { optionText: "Every node is either red or black", optionTag: "A" },
                { optionText: "Every node is black", optionTag: "B" },
                { optionText: "Only leaf nodes are black", optionTag: "C" },
                { optionText: "Every node is red", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the color of the root node in a Red-Black Tree?",
            options: [
                { optionText: "Always black", optionTag: "A" },
                { optionText: "Always red", optionTag: "B" },
                { optionText: "Can be either", optionTag: "C" },
                { optionText: "None of the above", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal ensures the Red-Black Tree remains balanced?",
            options: [
                { optionText: "No traversal does that directly", optionTag: "A" },
                { optionText: "In-order traversal", optionTag: "B" },
                { optionText: "Pre-order traversal", optionTag: "C" },
                { optionText: "Post-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of insertion in Red-Black Tree?",
            options: [
                { optionText: "O(log N)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(N log N)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when both child nodes of a red node are red?",
            options: [
                { optionText: "Recoloring or rotations are performed", optionTag: "A" },
                { optionText: "Tree becomes invalid", optionTag: "B" },
                { optionText: "No changes are needed", optionTag: "C" },
                { optionText: "Leaf nodes are removed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations maintain Red-Black properties?",
            options: [
                { optionText: "Insertion and Deletion", optionTag: "A" },
                { optionText: "Only Insertion", optionTag: "B" },
                { optionText: "Only Search", optionTag: "C" },
                { optionText: "Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum height of a Red-Black Tree with N nodes?",
            options: [
                { optionText: "2*log(N + 1)", optionTag: "A" },
                { optionText: "log N", optionTag: "B" },
                { optionText: "N", optionTag: "C" },
                { optionText: "sqrt(N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What color are the leaves (NIL nodes) in Red-Black Trees?",
            options: [
                { optionText: "Black", optionTag: "A" },
                { optionText: "Red", optionTag: "B" },
                { optionText: "Depends on height", optionTag: "C" },
                { optionText: "Can be any color", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation is used when fixing a right-leaning red link?",
            options: [
                { optionText: "Left rotation", optionTag: "A" },
                { optionText: "Right rotation", optionTag: "B" },
                { optionText: "Double rotation", optionTag: "C" },
                { optionText: "Color flip", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many red links can be in a path from root to leaf?",
            options: [
                { optionText: "At most half of the black height", optionTag: "A" },
                { optionText: "Same as black height", optionTag: "B" },
                { optionText: "Always even", optionTag: "C" },
                { optionText: "Equal to number of nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which violation does left-leaning red-black tree avoid?",
            options: [
                { optionText: "Right-leaning red links", optionTag: "A" },
                { optionText: "Black height imbalance", optionTag: "B" },
                { optionText: "Red parent with red child", optionTag: "C" },
                { optionText: "Duplicate keys", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which color flip is performed when both children are red?",
            options: [
                { optionText: "Parent becomes red, children black", optionTag: "A" },
                { optionText: "Parent becomes black, children red", optionTag: "B" },
                { optionText: "Only right child becomes black", optionTag: "C" },
                { optionText: "Only left child becomes red", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal gives sorted keys in Red-Black Tree?",
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
            questionText: "What is the main advantage of Red-Black Tree over AVL Tree?",
            options: [
                { optionText: "Faster insertion and deletion", optionTag: "A" },
                { optionText: "More balanced", optionTag: "B" },
                { optionText: "Simpler structure", optionTag: "C" },
                { optionText: "Smaller memory footprint", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the black-height of a Red-Black Tree?",
            options: [
                { optionText: "Number of black nodes from root to a leaf", optionTag: "A" },
                { optionText: "Number of nodes in left subtree", optionTag: "B" },
                { optionText: "Number of red nodes in a path", optionTag: "C" },
                { optionText: "Height of right subtree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation may violate Red-Black Tree properties?",
            options: [
                { optionText: "Insertion or Deletion", optionTag: "A" },
                { optionText: "Search", optionTag: "B" },
                { optionText: "Traversal", optionTag: "C" },
                { optionText: "Access", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why are Red-Black Trees used in STL (e.g. map/set)?",
            options: [
                { optionText: "Logarithmic time complexity for operations", optionTag: "A" },
                { optionText: "Constant time complexity", optionTag: "B" },
                { optionText: "Used for sorting only", optionTag: "C" },
                { optionText: "Better than hash tables", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Red-Black Trees, what is the color of newly inserted nodes?",
            options: [
                { optionText: "Red", optionTag: "A" },
                { optionText: "Black", optionTag: "B" },
                { optionText: "Depends on position", optionTag: "C" },
                { optionText: "Random", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a valid Red-Black Tree property?",
            options: [
                { optionText: "No two red nodes appear consecutively", optionTag: "A" },
                { optionText: "Every leaf is red", optionTag: "B" },
                { optionText: "Every black node has a red child", optionTag: "C" },
                { optionText: "Height must be even", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which case causes a double rotation in Red-Black Tree insertion?",
            options: [
                { optionText: "Red node inserted in zig-zag pattern", optionTag: "A" },
                { optionText: "Black node inserted at root", optionTag: "B" },
                { optionText: "All children black", optionTag: "C" },
                { optionText: "Root is already black", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
