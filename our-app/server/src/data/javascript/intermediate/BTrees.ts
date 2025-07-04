import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript B-Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz evaluates your intermediate knowledge of B-Trees using JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "BTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the minimum degree (t) of a B-Tree?",
            options: [
                { optionText: "The minimum number of children an internal node must have", optionTag: "A" },
                { optionText: "The maximum number of keys a node can have", optionTag: "B" },
                { optionText: "The number of root nodes", optionTag: "C" },
                { optionText: "The number of leaf nodes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the maximum number of children a B-Tree node with t = 3 can have?",
            options: [
                { optionText: "6", optionTag: "A" },
                { optionText: "3", optionTag: "B" },
                { optionText: "2", optionTag: "C" },
                { optionText: "4", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a B-Tree, what is the maximum number of keys a node can have for degree t?",
            options: [
                { optionText: "2t - 1", optionTag: "A" },
                { optionText: "t - 1", optionTag: "B" },
                { optionText: "t", optionTag: "C" },
                { optionText: "t + 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a property of B-Trees?",
            options: [
                { optionText: "All leaves are at the same level", optionTag: "A" },
                { optionText: "Keys are stored in sorted order", optionTag: "B" },
                { optionText: "Binary tree structure", optionTag: "C" },
                { optionText: "Every internal node has at most 2t children", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Why are B-Trees preferred in databases?",
            options: [
                { optionText: "Minimizes disk reads by reducing height", optionTag: "A" },
                { optionText: "They are binary trees", optionTag: "B" },
                { optionText: "They are implemented in JavaScript", optionTag: "C" },
                { optionText: "They are always balanced", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of search operation in B-Tree of height h?",
            options: [
                { optionText: "O(h)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log h)", optionTag: "C" },
                { optionText: "O(1)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What operation is performed when a node in B-Tree becomes full?",
            options: [
                { optionText: "Split", optionTag: "A" },
                { optionText: "Merge", optionTag: "B" },
                { optionText: "Shift", optionTag: "C" },
                { optionText: "Resize", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a B-Tree, during deletion, what operation might be required?",
            options: [
                { optionText: "Merge two nodes", optionTag: "A" },
                { optionText: "Copy entire tree", optionTag: "B" },
                { optionText: "Insert root", optionTag: "C" },
                { optionText: "Sort children", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which traversal method is used to print all elements of a B-Tree in sorted order?",
            options: [
                { optionText: "In-order traversal", optionTag: "A" },
                { optionText: "Post-order traversal", optionTag: "B" },
                { optionText: "Pre-order traversal", optionTag: "C" },
                { optionText: "Level-order traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following statements about B-Trees is true?",
            options: [
                { optionText: "They are balanced multi-way search trees", optionTag: "A" },
                { optionText: "They are skewed trees", optionTag: "B" },
                { optionText: "They only store integers", optionTag: "C" },
                { optionText: "They are only used in JavaScript", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a B-Tree, what is the minimum number of keys in a non-root node?",
            options: [
                { optionText: "t - 1", optionTag: "A" },
                { optionText: "t", optionTag: "B" },
                { optionText: "2t - 1", optionTag: "C" },
                { optionText: "0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What ensures that B-Trees are always balanced?",
            options: [
                { optionText: "All leaves at same level", optionTag: "A" },
                { optionText: "Height is recalculated", optionTag: "B" },
                { optionText: "All nodes are filled", optionTag: "C" },
                { optionText: "Left and right subtrees are same", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which node type may have fewer keys than others in a B-Tree?",
            options: [
                { optionText: "Root node", optionTag: "A" },
                { optionText: "Internal node", optionTag: "B" },
                { optionText: "Leaf node", optionTag: "C" },
                { optionText: "Child node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript structure is ideal for storing a B-Tree node?",
            options: [
                { optionText: "Object with key array and child array", optionTag: "A" },
                { optionText: "Flat array", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "String", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following data structures is most similar to B-Trees?",
            options: [
                { optionText: "2-3 Trees", optionTag: "A" },
                { optionText: "Binary Heap", optionTag: "B" },
                { optionText: "Hash Table", optionTag: "C" },
                { optionText: "Linked List", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why are B-Trees better than BSTs for disk storage?",
            options: [
                { optionText: "Fewer disk reads due to lower height", optionTag: "A" },
                { optionText: "They require more memory", optionTag: "B" },
                { optionText: "They are simpler to implement", optionTag: "C" },
                { optionText: "They are slower", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When inserting into a B-Tree and the root is full, what happens?",
            options: [
                { optionText: "It is split and new root is created", optionTag: "A" },
                { optionText: "Insertion fails", optionTag: "B" },
                { optionText: "Tree is reset", optionTag: "C" },
                { optionText: "No change", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is an advantage of B-Trees?",
            options: [
                { optionText: "Reduced tree height and disk I/O", optionTag: "A" },
                { optionText: "Only used for integers", optionTag: "B" },
                { optionText: "Same as binary tree", optionTag: "C" },
                { optionText: "Requires no sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation requires rebalancing a B-Tree?",
            options: [
                { optionText: "Insertion or deletion", optionTag: "A" },
                { optionText: "Traversal", optionTag: "B" },
                { optionText: "Sorting", optionTag: "C" },
                { optionText: "Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a B-Tree, what is the best-case time complexity for search?",
            options: [
                { optionText: "O(log N)", optionTag: "A" },
                { optionText: "O(N)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(N log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
