import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Disjoint Set Union - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your beginner-level understanding of the Disjoint Set Union (DSU) data structure in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "DisjointSetUnion"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is a Disjoint Set Union (DSU)?",
            options: [
                { optionText: "A data structure to keep track of elements in separate sets", optionTag: "A" },
                { optionText: "A sorting algorithm", optionTag: "B" },
                { optionText: "A type of stack", optionTag: "C" },
                { optionText: "A graph traversal method", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which two operations are primarily supported by DSU?",
            options: [
                { optionText: "Find and Union", optionTag: "A" },
                { optionText: "Push and Pop", optionTag: "B" },
                { optionText: "Insert and Delete", optionTag: "C" },
                { optionText: "Sort and Merge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the 'find' operation in DSU do?",
            options: [
                { optionText: "Finds the representative (or root) of a set", optionTag: "A" },
                { optionText: "Finds the minimum element", optionTag: "B" },
                { optionText: "Finds the maximum element", optionTag: "C" },
                { optionText: "Finds the number of elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the purpose of the 'union' operation?",
            options: [
                { optionText: "Merges two sets", optionTag: "A" },
                { optionText: "Adds new element", optionTag: "B" },
                { optionText: "Removes duplicates", optionTag: "C" },
                { optionText: "Splits a set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What optimization reduces the height of trees in DSU?",
            options: [
                { optionText: "Path compression", optionTag: "A" },
                { optionText: "Sorting", optionTag: "B" },
                { optionText: "Loop unrolling", optionTag: "C" },
                { optionText: "Memoization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which optimization keeps trees balanced in DSU?",
            options: [
                { optionText: "Union by rank", optionTag: "A" },
                { optionText: "Hashing", optionTag: "B" },
                { optionText: "Binary lifting", optionTag: "C" },
                { optionText: "Greedy selection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical time complexity for DSU operations with path compression and union by rank?",
            options: [
                { optionText: "O(α(N))", optionTag: "A" },
                { optionText: "O(N log N)", optionTag: "B" },
                { optionText: "O(N^2)", optionTag: "C" },
                { optionText: "O(log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In DSU, what does each element initially point to?",
            options: [
                { optionText: "Itself", optionTag: "A" },
                { optionText: "Root node", optionTag: "B" },
                { optionText: "Null", optionTag: "C" },
                { optionText: "Infinity", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When are two elements in the same set?",
            options: [
                { optionText: "When their roots are the same", optionTag: "A" },
                { optionText: "When they are adjacent", optionTag: "B" },
                { optionText: "When they have equal value", optionTag: "C" },
                { optionText: "When one is parent of the other", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial rank of all elements in DSU?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "N", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which application uses DSU?",
            options: [
                { optionText: "Kruskal’s Algorithm", optionTag: "A" },
                { optionText: "Dijkstra’s Algorithm", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Binary Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a DSU structure typically stored in JavaScript?",
            options: [
                { optionText: "As an array or object", optionTag: "A" },
                { optionText: "As a string", optionTag: "B" },
                { optionText: "As a Map only", optionTag: "C" },
                { optionText: "As a stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation helps flatten the tree structure?",
            options: [
                { optionText: "Path compression", optionTag: "A" },
                { optionText: "Tree rotation", optionTag: "B" },
                { optionText: "Insertion sort", optionTag: "C" },
                { optionText: "Divide and conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the parent array in DSU represent?",
            options: [
                { optionText: "Parent of each element", optionTag: "A" },
                { optionText: "Height of the tree", optionTag: "B" },
                { optionText: "Root node only", optionTag: "C" },
                { optionText: "Child of each node", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be done during a union operation?",
            options: [
                { optionText: "Set the root of one set to the root of another", optionTag: "A" },
                { optionText: "Swap all elements", optionTag: "B" },
                { optionText: "Push both to stack", optionTag: "C" },
                { optionText: "Sort elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case in the find operation?",
            options: [
                { optionText: "Element is its own parent", optionTag: "A" },
                { optionText: "Parent is null", optionTag: "B" },
                { optionText: "Tree is balanced", optionTag: "C" },
                { optionText: "Rank is 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is DSU called 'disjoint'?",
            options: [
                { optionText: "Because sets do not overlap", optionTag: "A" },
                { optionText: "Because it uses pointers", optionTag: "B" },
                { optionText: "Because it removes elements", optionTag: "C" },
                { optionText: "Because it compresses data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens when union is called on two same sets?",
            options: [
                { optionText: "No change", optionTag: "A" },
                { optionText: "Throws error", optionTag: "B" },
                { optionText: "Merges again", optionTag: "C" },
                { optionText: "All elements removed", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is DSU useful for cycle detection in graphs?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in trees", optionTag: "C" },
                { optionText: "Only in arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a union by rank, how is parent updated?",
            options: [
                { optionText: "Lower rank tree is attached to higher rank tree", optionTag: "A" },
                { optionText: "Higher to lower always", optionTag: "B" },
                { optionText: "Randomly", optionTag: "C" },
                { optionText: "By value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
