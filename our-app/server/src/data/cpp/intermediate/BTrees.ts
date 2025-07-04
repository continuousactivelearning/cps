import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ B-Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz assesses your intermediate understanding of B-Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a B-Tree primarily used for?",
            options: [
                { optionText: "Efficient storage and retrieval on disk", optionTag: "A" },
                { optionText: "Fast recursion", optionTag: "B" },
                { optionText: "Binary operations", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is generalized by B-Trees?",
            options: [
                { optionText: "Binary Search Tree", optionTag: "A" },
                { optionText: "AVL Tree", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Hash Table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property is NOT true for a B-Tree of order m?",
            options: [
                { optionText: "Every node has at most m children", optionTag: "A" },
                { optionText: "All leaves appear on the same level", optionTag: "B" },
                { optionText: "Internal nodes have at least ceil(m/2) children", optionTag: "C" },
                { optionText: "Root must have exactly m children", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "What happens when a B-Tree node becomes full during insertion?",
            options: [
                { optionText: "It is split and the median is pushed up", optionTag: "A" },
                { optionText: "It is ignored", optionTag: "B" },
                { optionText: "Insertion is stopped", optionTag: "C" },
                { optionText: "The whole tree is rebuilt", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of search in a B-Tree of height h and order m?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(h)", optionTag: "B" },
                { optionText: "O(m)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "In a B-Tree of order 4, what is the maximum number of keys in a node?",
            options: [
                { optionText: "3", optionTag: "A" },
                { optionText: "4", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following traversal is typically used in B-Trees?",
            options: [
                { optionText: "Inorder traversal", optionTag: "A" },
                { optionText: "Postorder traversal", optionTag: "B" },
                { optionText: "Preorder traversal", optionTag: "C" },
                { optionText: "Any DFS traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is true about leaves in a B-Tree?",
            options: [
                { optionText: "They are always at the same depth", optionTag: "A" },
                { optionText: "They contain only one key", optionTag: "B" },
                { optionText: "They are root nodes", optionTag: "C" },
                { optionText: "They are unordered", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which B-Tree operation might involve merging?",
            options: [
                { optionText: "Deletion", optionTag: "A" },
                { optionText: "Insertion", optionTag: "B" },
                { optionText: "Traversal", optionTag: "C" },
                { optionText: "Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition may trigger node splitting in B-Trees?",
            options: [
                { optionText: "Node has m-1 keys", optionTag: "A" },
                { optionText: "Node has m keys", optionTag: "B" },
                { optionText: "Node has only 1 key", optionTag: "C" },
                { optionText: "All children are full", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "A B-Tree of height h and order m has a maximum of how many keys?",
            options: [
                { optionText: "(m^h) - 1", optionTag: "A" },
                { optionText: "(h^m) - 1", optionTag: "B" },
                { optionText: "m^h", optionTag: "C" },
                { optionText: "h * m", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a B-Tree different from a BST?",
            options: [
                { optionText: "B-Tree has multiple keys per node", optionTag: "A" },
                { optionText: "B-Tree has only 2 children", optionTag: "B" },
                { optionText: "BST is for disk-based storage", optionTag: "C" },
                { optionText: "BST has balanced leaf levels", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum number of children for a non-root internal node?",
            options: [
                { optionText: "ceil(m/2)", optionTag: "A" },
                { optionText: "m", optionTag: "B" },
                { optionText: "m - 1", optionTag: "C" },
                { optionText: "2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "B-Trees are particularly useful in:",
            options: [
                { optionText: "Databases and filesystems", optionTag: "A" },
                { optionText: "Sorting algorithms", optionTag: "B" },
                { optionText: "Hashing", optionTag: "C" },
                { optionText: "Heap memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm is most similar to searching in a B-Tree?",
            options: [
                { optionText: "Binary Search", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Breadth First Search", optionTag: "C" },
                { optionText: "Linear Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many comparisons are needed in worst case for a node with m keys?",
            options: [
                { optionText: "m", optionTag: "A" },
                { optionText: "log m", optionTag: "B" },
                { optionText: "m/2", optionTag: "C" },
                { optionText: "2m", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which type of node may have less than ceil(m/2) children in a B-Tree?",
            options: [
                { optionText: "Root node", optionTag: "A" },
                { optionText: "Leaf node", optionTag: "B" },
                { optionText: "Internal node", optionTag: "C" },
                { optionText: "All nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "If a B-Tree node has 4 children, how many keys does it have?",
            options: [
                { optionText: "3", optionTag: "A" },
                { optionText: "4", optionTag: "B" },
                { optionText: "5", optionTag: "C" },
                { optionText: "2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum height of a B-Tree with n keys and minimum degree t?",
            options: [
                { optionText: "O(logₜ n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(t)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following ensures the B-Tree remains balanced?",
            options: [
                { optionText: "Node splitting and merging", optionTag: "A" },
                { optionText: "DFS traversal", optionTag: "B" },
                { optionText: "Greedy insertion", optionTag: "C" },
                { optionText: "Stack balancing", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
