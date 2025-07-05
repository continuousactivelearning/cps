import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ B-Trees - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz assesses your advanced understanding of B-Trees in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the minimum number of keys in a B-Tree of order t and height h?",
            options: [
                { optionText: "2t^(h-1) - 1", optionTag: "A" },
                { optionText: "t^(h+1) - 1", optionTag: "B" },
                { optionText: "2^h - 1", optionTag: "C" },
                { optionText: "t^h", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a B-Tree of minimum degree t, what is the maximum number of children a node can have?",
            options: [
                { optionText: "2t", optionTag: "A" },
                { optionText: "t", optionTag: "B" },
                { optionText: "2t + 1", optionTag: "C" },
                { optionText: "t + 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about B-Trees?",
            options: [
                { optionText: "All leaves appear at the same level", optionTag: "A" },
                { optionText: "They are binary trees", optionTag: "B" },
                { optionText: "Each node has at most two children", optionTag: "C" },
                { optionText: "They are used for depth-first traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation may cause node splitting in B-Trees?",
            options: [
                { optionText: "Insertion", optionTag: "A" },
                { optionText: "Deletion", optionTag: "B" },
                { optionText: "Search", optionTag: "C" },
                { optionText: "Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of search operation in a B-Tree of height h?",
            options: [
                { optionText: "O(h)", optionTag: "A" },
                { optionText: "O(log h)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(h^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property makes B-Trees suitable for databases and filesystems?",
            options: [
                { optionText: "Balanced structure and reduced disk I/O", optionTag: "A" },
                { optionText: "Binary search efficiency", optionTag: "B" },
                { optionText: "Small height", optionTag: "C" },
                { optionText: "Heap memory allocation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "During insertion, where is the new key first added in a B-Tree?",
            options: [
                { optionText: "Leaf node", optionTag: "A" },
                { optionText: "Root node", optionTag: "B" },
                { optionText: "Middle node", optionTag: "C" },
                { optionText: "Random node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when the root of a B-Tree splits?",
            options: [
                { optionText: "Tree height increases by one", optionTag: "A" },
                { optionText: "Tree height decreases", optionTag: "B" },
                { optionText: "New root has fewer children", optionTag: "C" },
                { optionText: "Leaf nodes change level", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In deletion, if a node has fewer than t-1 keys, what operation is performed?",
            options: [
                { optionText: "Merging or borrowing", optionTag: "A" },
                { optionText: "Rotation", optionTag: "B" },
                { optionText: "Balancing", optionTag: "C" },
                { optionText: "Push-up", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following traversal orders gives sorted keys from a B-Tree?",
            options: [
                { optionText: "Inorder traversal", optionTag: "A" },
                { optionText: "Preorder traversal", optionTag: "B" },
                { optionText: "Postorder traversal", optionTag: "C" },
                { optionText: "Level order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How many keys can a node in a B-Tree of degree t hold at most?",
            options: [
                { optionText: "2t - 1", optionTag: "A" },
                { optionText: "t - 1", optionTag: "B" },
                { optionText: "2t", optionTag: "C" },
                { optionText: "t + 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is least expensive in a B-Tree?",
            options: [
                { optionText: "Search", optionTag: "A" },
                { optionText: "Insert", optionTag: "B" },
                { optionText: "Delete", optionTag: "C" },
                { optionText: "Split", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which statement is false about B-Trees?",
            options: [
                { optionText: "They are binary search trees", optionTag: "A" },
                { optionText: "They are height-balanced", optionTag: "B" },
                { optionText: "They are multiway search trees", optionTag: "C" },
                { optionText: "They reduce disk access", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition triggers a merge during B-Tree deletion?",
            options: [
                { optionText: "Two siblings have minimum keys", optionTag: "A" },
                { optionText: "Node has maximum keys", optionTag: "B" },
                { optionText: "All leaf nodes are full", optionTag: "C" },
                { optionText: "Parent has more children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a B+ Tree?",
            options: [
                { optionText: "A variation of B-Tree with data stored in leaves", optionTag: "A" },
                { optionText: "Binary tree with linked lists", optionTag: "B" },
                { optionText: "B-Tree with duplicate keys", optionTag: "C" },
                { optionText: "Binary search tree with more than two children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a B-Tree, which node types store actual records in B+ Tree?",
            options: [
                { optionText: "Leaf nodes", optionTag: "A" },
                { optionText: "Internal nodes", optionTag: "B" },
                { optionText: "Root node only", optionTag: "C" },
                { optionText: "All nodes equally", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is optimized for range queries?",
            options: [
                { optionText: "B+ Tree", optionTag: "A" },
                { optionText: "B-Tree", optionTag: "B" },
                { optionText: "Binary Search Tree", optionTag: "C" },
                { optionText: "AVL Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are sibling nodes linked in a B+ Tree?",
            options: [
                { optionText: "Using leaf pointers", optionTag: "A" },
                { optionText: "Using root references", optionTag: "B" },
                { optionText: "Using internal node mapping", optionTag: "C" },
                { optionText: "Using parent-child swaps", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is B+ Tree preferred for database indexing?",
            options: [
                { optionText: "All data is at leaves allowing fast range scan", optionTag: "A" },
                { optionText: "Fewer levels in the tree", optionTag: "B" },
                { optionText: "More balanced structure", optionTag: "C" },
                { optionText: "Supports recursion easily", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which component determines the fan-out in B-Trees?",
            options: [
                { optionText: "Block size", optionTag: "A" },
                { optionText: "Node height", optionTag: "B" },
                { optionText: "Leaf order", optionTag: "C" },
                { optionText: "Search keys", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
