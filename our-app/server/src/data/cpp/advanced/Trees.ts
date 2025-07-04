import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of Tree data structures in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Trees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the time complexity of finding the lowest common ancestor (LCA) in a binary tree using binary lifting?",
            options: [
                { optionText: "O(log N)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(N log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal method is best suited for deleting a binary tree?",
            options: [
                { optionText: "Postorder", optionTag: "A" },
                { optionText: "Preorder", optionTag: "B" },
                { optionText: "Inorder", optionTag: "C" },
                { optionText: "Level order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many distinct binary trees can be made with n nodes?",
            options: [
                { optionText: "Catalan number Cn = (2n)!/(n+1)!n!", optionTag: "A" },
                { optionText: "n!", optionTag: "B" },
                { optionText: "2^n", optionTag: "C" },
                { optionText: "n^2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which tree traversal results in a sorted sequence for a binary search tree?",
            options: [
                { optionText: "Inorder traversal", optionTag: "A" },
                { optionText: "Preorder traversal", optionTag: "B" },
                { optionText: "Postorder traversal", optionTag: "C" },
                { optionText: "Level-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property must a balanced binary tree satisfy?",
            options: [
                { optionText: "Height difference of left and right subtrees is at most 1", optionTag: "A" },
                { optionText: "All nodes have two children", optionTag: "B" },
                { optionText: "Left subtree has more nodes than right", optionTag: "C" },
                { optionText: "Root node is always the median", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is not a self-balancing binary search tree?",
            options: [
                { optionText: "Heap", optionTag: "A" },
                { optionText: "AVL Tree", optionTag: "B" },
                { optionText: "Red-Black Tree", optionTag: "C" },
                { optionText: "Splay Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many leaf nodes are there in a full binary tree with n internal nodes?",
            options: [
                { optionText: "n + 1", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "2n", optionTag: "C" },
                { optionText: "2n - 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of constructing a segment tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "Which is the correct method to mirror a binary tree?",
            options: [
                { optionText: "Swap left and right child recursively", optionTag: "A" },
                { optionText: "Traverse in-order and reverse", optionTag: "B" },
                { optionText: "Change data of each node", optionTag: "C" },
                { optionText: "Delete right subtree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which tree is suitable for implementing interval trees?",
            options: [
                { optionText: "Augmented AVL tree", optionTag: "A" },
                { optionText: "Binary Heap", optionTag: "B" },
                { optionText: "B-Tree", optionTag: "C" },
                { optionText: "Trie", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the height of a complete binary tree with n nodes?",
            options: [
                { optionText: "floor(log₂(n))", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "n/2", optionTag: "C" },
                { optionText: "log(n!)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal is used to serialize a binary tree?",
            options: [
                { optionText: "Preorder with null markers", optionTag: "A" },
                { optionText: "Inorder", optionTag: "B" },
                { optionText: "Postorder", optionTag: "C" },
                { optionText: "Level order only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which method is used to check if two trees are identical?",
            options: [
                { optionText: "Recursive comparison of all nodes", optionTag: "A" },
                { optionText: "Checking root node data", optionTag: "B" },
                { optionText: "Comparing number of nodes", optionTag: "C" },
                { optionText: "Traversing only one tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal method is used in expression tree evaluation?",
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
            questionText: "How can we construct a tree from inorder and preorder traversals?",
            options: [
                { optionText: "Recursive partition using preorder and index map of inorder", optionTag: "A" },
                { optionText: "Sort preorder", optionTag: "B" },
                { optionText: "Sort inorder", optionTag: "C" },
                { optionText: "Reverse both traversals", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can detect cycles in a tree?",
            options: [
                { optionText: "DFS with visited tracking", optionTag: "A" },
                { optionText: "BFS only", optionTag: "B" },
                { optionText: "Level order traversal", optionTag: "C" },
                { optionText: "Postorder traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure helps with finding diameter of a tree?",
            options: [
                { optionText: "DFS with depth tracking", optionTag: "A" },
                { optionText: "Min heap", optionTag: "B" },
                { optionText: "AVL tree", optionTag: "C" },
                { optionText: "Stack only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a tree different from a graph?",
            options: [
                { optionText: "Tree has no cycles and is connected", optionTag: "A" },
                { optionText: "Tree has cycles", optionTag: "B" },
                { optionText: "Tree may be disconnected", optionTag: "C" },
                { optionText: "Tree always has directed edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation has the worst-case time complexity of O(n) in an unbalanced BST?",
            options: [
                { optionText: "Search", optionTag: "A" },
                { optionText: "Insert", optionTag: "B" },
                { optionText: "Delete", optionTag: "C" },
                { optionText: "All of the above", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "Which technique is used for finding diameter of tree in linear time?",
            options: [
                { optionText: "Two DFS traversals", optionTag: "A" },
                { optionText: "Inorder traversal", optionTag: "B" },
                { optionText: "Topological sort", optionTag: "C" },
                { optionText: "Breadth-first search only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
