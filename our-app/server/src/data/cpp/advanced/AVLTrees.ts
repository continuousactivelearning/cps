import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ AVL Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of AVL Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "AVLTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the maximum allowed difference between the heights of left and right subtrees in an AVL tree?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "0", optionTag: "C" },
                { optionText: "Unbounded", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation is applied when a node is inserted into the right subtree of the left child?",
            options: [
                { optionText: "Left-Right (LR) Rotation", optionTag: "A" },
                { optionText: "Right-Left (RL) Rotation", optionTag: "B" },
                { optionText: "Left-Left (LL) Rotation", optionTag: "C" },
                { optionText: "Right-Right (RR) Rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity for insertion in an AVL tree?",
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
            questionText: "Which of the following traversals is used to check if a tree is AVL balanced?",
            options: [
                { optionText: "Postorder", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Preorder", optionTag: "C" },
                { optionText: "Level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many types of rotations exist in AVL trees?",
            options: [
                { optionText: "4", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "3", optionTag: "C" },
                { optionText: "5", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following rotation combinations is equivalent to a single rotation?",
            options: [
                { optionText: "LL and RR", optionTag: "A" },
                { optionText: "LR and RL", optionTag: "B" },
                { optionText: "RR and LR", optionTag: "C" },
                { optionText: "LL and RL", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the balance factor of a node in AVL tree defined as?",
            options: [
                { optionText: "Height(left subtree) - Height(right subtree)", optionTag: "A" },
                { optionText: "Height(right subtree) - Height(left subtree)", optionTag: "B" },
                { optionText: "Sum of all heights", optionTag: "C" },
                { optionText: "Absolute difference of subtree heights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum height of an AVL tree with n nodes?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(√n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What rotation is performed when an insertion occurs in the left subtree of the left child?",
            options: [
                { optionText: "Left-Left (LL) Rotation", optionTag: "A" },
                { optionText: "Left-Right (LR) Rotation", optionTag: "B" },
                { optionText: "Right-Right (RR) Rotation", optionTag: "C" },
                { optionText: "Right-Left (RL) Rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation resolves an imbalance caused by insertion in the right subtree of the right child?",
            options: [
                { optionText: "Right-Right (RR) Rotation", optionTag: "A" },
                { optionText: "Left-Left (LL) Rotation", optionTag: "B" },
                { optionText: "Right-Left (RL) Rotation", optionTag: "C" },
                { optionText: "Left-Right (LR) Rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition must be met after insertion to trigger rebalancing in an AVL tree?",
            options: [
                { optionText: "Balance factor becomes less than -1 or more than 1", optionTag: "A" },
                { optionText: "Height of tree increases", optionTag: "B" },
                { optionText: "Node value exceeds parent", optionTag: "C" },
                { optionText: "Duplicates inserted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ operation is best used for recursive AVL tree insertion?",
            options: [
                { optionText: "Smart pointers", optionTag: "A" },
                { optionText: "Static arrays", optionTag: "B" },
                { optionText: "Bit manipulation", optionTag: "C" },
                { optionText: "Templates", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation(s) may be needed after deletion in AVL trees?",
            options: [
                { optionText: "LL, LR, RR, RL", optionTag: "A" },
                { optionText: "Only RR and LL", optionTag: "B" },
                { optionText: "Only RL and LR", optionTag: "C" },
                { optionText: "Only one rotation type", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In an AVL tree, when will a node require double rotation?",
            options: [
                { optionText: "When the child and grandchild are on opposite sides", optionTag: "A" },
                { optionText: "When both subtrees are empty", optionTag: "B" },
                { optionText: "When both subtrees are equal", optionTag: "C" },
                { optionText: "When the balance factor is 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is balance restored after deletion from AVL trees?",
            options: [
                { optionText: "By re-evaluating balance factors and applying rotations", optionTag: "A" },
                { optionText: "By re-adding the deleted node", optionTag: "B" },
                { optionText: "By re-building entire tree", optionTag: "C" },
                { optionText: "It cannot be restored", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of nodes in an AVL tree of height h?",
            options: [
                { optionText: "Fibonacci(h+2) - 1", optionTag: "A" },
                { optionText: "2^h", optionTag: "B" },
                { optionText: "h", optionTag: "C" },
                { optionText: "log(h)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is used to maintain height information in AVL tree nodes?",
            options: [
                { optionText: "Augmented node structure with height field", optionTag: "A" },
                { optionText: "Array index", optionTag: "B" },
                { optionText: "Parent pointer only", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the balance factor of a perfectly balanced AVL node?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is AVL tree considered better than unbalanced BST?",
            options: [
                { optionText: "Guaranteed logarithmic height", optionTag: "A" },
                { optionText: "Easy to implement", optionTag: "B" },
                { optionText: "Faster than all other trees", optionTag: "C" },
                { optionText: "No duplicates allowed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum height of an AVL tree with n nodes?",
            options: [
                { optionText: "⌊log₂(n + 1)⌋", optionTag: "A" },
                { optionText: "n / 2", optionTag: "B" },
                { optionText: "√n", optionTag: "C" },
                { optionText: "n - 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }

    ]
};

export default quizData;
