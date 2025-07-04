import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript AVL Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This advanced quiz tests your understanding of AVL Trees, including rotations, balancing conditions, insertion, deletion, and edge cases using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "AVLTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the balance factor of a node in an AVL tree?",
            options: [
                { optionText: "Height(left subtree) - Height(right subtree)", optionTag: "A" },
                { optionText: "Height(right subtree) - Height(left subtree)", optionTag: "B" },
                { optionText: "Number of children", optionTag: "C" },
                { optionText: "Depth of node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the valid range for the balance factor in an AVL tree?",
            options: [
                { optionText: "-1, 0, or 1", optionTag: "A" },
                { optionText: "0 to 2", optionTag: "B" },
                { optionText: "Any non-negative number", optionTag: "C" },
                { optionText: "-2 to 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which rotation is required when a left-left imbalance occurs?",
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
            questionText: "Which rotation is required for a left-right imbalance?",
            options: [
                { optionText: "Left-Right Rotation", optionTag: "A" },
                { optionText: "Right Rotation", optionTag: "B" },
                { optionText: "Left Rotation", optionTag: "C" },
                { optionText: "Right-Left Rotation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following AVL tree operations may require rebalancing?",
            options: [
                { optionText: "Insertion and deletion", optionTag: "A" },
                { optionText: "Search only", optionTag: "B" },
                { optionText: "Traversal", optionTag: "C" },
                { optionText: "Min/Max retrieval", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity for insertion in an AVL Tree?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if the balance factor of a node becomes 2?",
            options: [
                { optionText: "Tree is left-heavy and requires rotation", optionTag: "A" },
                { optionText: "Tree is perfectly balanced", optionTag: "B" },
                { optionText: "No rotation needed", optionTag: "C" },
                { optionText: "Node is deleted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What are the total number of rotations required after insertion in the worst case?",
            options: [
                { optionText: "O(1)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition triggers a right-left rotation in an AVL tree?",
            options: [
                { optionText: "Right-left imbalance", optionTag: "A" },
                { optionText: "Left-left imbalance", optionTag: "B" },
                { optionText: "Left-right imbalance", optionTag: "C" },
                { optionText: "Perfect balance", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "After inserting nodes in strictly increasing order, the AVL tree performs:",
            options: [
                { optionText: "Left rotations", optionTag: "A" },
                { optionText: "Right rotations", optionTag: "B" },
                { optionText: "No rotations", optionTag: "C" },
                { optionText: "Right-left rotations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript class method would you use to recursively calculate height of a node?",
            options: [
                { optionText: "A method that returns 1 + max(leftHeight, rightHeight)", optionTag: "A" },
                { optionText: "A method that returns node.val", optionTag: "B" },
                { optionText: "A method that returns left + right", optionTag: "C" },
                { optionText: "A method that returns Math.min(left, right)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT true about AVL trees?",
            options: [
                { optionText: "They maintain balance after every insertion and deletion", optionTag: "A" },
                { optionText: "They allow duplicate keys", optionTag: "B" },
                { optionText: "They perform rotations to restore balance", optionTag: "C" },
                { optionText: "They are height-balanced binary search trees", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "In an AVL tree, how is balance maintained after deleting a node?",
            options: [
                { optionText: "By checking and rotating unbalanced nodes", optionTag: "A" },
                { optionText: "No action is taken", optionTag: "B" },
                { optionText: "Tree is rebuilt from scratch", optionTag: "C" },
                { optionText: "Inserting the deleted value back", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is best to verify if AVL tree maintains BST property?",
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
            questionText: "AVL trees guarantee which height complexity?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(n log n)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many types of rotations are used in AVL trees?",
            options: [
                { optionText: "4", optionTag: "A" },
                { optionText: "2", optionTag: "B" },
                { optionText: "6", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which AVL operation can cause a cascading imbalance?",
            options: [
                { optionText: "Deletion", optionTag: "A" },
                { optionText: "Search", optionTag: "B" },
                { optionText: "Min value retrieval", optionTag: "C" },
                { optionText: "In-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if an AVL Tree is not balanced after an insertion?",
            options: [
                { optionText: "A rotation restores balance", optionTag: "A" },
                { optionText: "Tree is left unchanged", optionTag: "B" },
                { optionText: "Node is deleted", optionTag: "C" },
                { optionText: "Balance factor is ignored", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property distinguishes AVL trees from standard binary search trees?",
            options: [
                { optionText: "Automatic height balancing", optionTag: "A" },
                { optionText: "No duplicate values", optionTag: "B" },
                { optionText: "Faster search than BST", optionTag: "C" },
                { optionText: "O(1) insertion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
