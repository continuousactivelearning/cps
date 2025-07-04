// src/data/java/beginner/disjoint_set_union.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Disjoint Set Union - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz tests your knowledge of the basics of the Disjoint Set Union (Union-Find) data structure in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Disjoint Set Union"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the purpose of the Disjoint Set Union (DSU)?",
            options: [
                { optionText: "To manage partitioned sets and check if two elements are in the same set", optionTag: "A" },
                { optionText: "To store key-value pairs", optionTag: "B" },
                { optionText: "To implement stacks", optionTag: "C" },
                { optionText: "To sort arrays", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which two primary operations are performed in DSU?",
            options: [
                { optionText: "Find and Union", optionTag: "A" },
                { optionText: "Push and Pop", optionTag: "B" },
                { optionText: "Insert and Delete", optionTag: "C" },
                { optionText: "Traverse and Reverse", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the 'find' operation do in DSU?",
            options: [
                { optionText: "Returns the representative (root) of a set", optionTag: "A" },
                { optionText: "Adds a new element", optionTag: "B" },
                { optionText: "Sorts the elements", optionTag: "C" },
                { optionText: "Removes an element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is path compression used for in DSU?",
            options: [
                { optionText: "To flatten the tree and speed up find operations", optionTag: "A" },
                { optionText: "To compress strings", optionTag: "B" },
                { optionText: "To remove cycles", optionTag: "C" },
                { optionText: "To insert elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is union by rank in DSU?",
            options: [
                { optionText: "Merges two trees based on their height", optionTag: "A" },
                { optionText: "Inserts elements at specific positions", optionTag: "B" },
                { optionText: "Sorts elements in a tree", optionTag: "C" },
                { optionText: "Reverses the sets", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity for a single find or union operation in DSU with optimizations?",
            options: [
                { optionText: "O(α(n))", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem can be solved using DSU?",
            options: [
                { optionText: "Detecting cycles in an undirected graph", optionTag: "A" },
                { optionText: "Searching in a sorted array", optionTag: "B" },
                { optionText: "Counting characters in a string", optionTag: "C" },
                { optionText: "Sorting numbers", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How are sets typically represented in DSU?",
            options: [
                { optionText: "As trees", optionTag: "A" },
                { optionText: "As arrays", optionTag: "B" },
                { optionText: "As strings", optionTag: "C" },
                { optionText: "As graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is usually used to implement DSU?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Deque", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is the best description of DSU?",
            options: [
                { optionText: "A structure to manage disjoint sets efficiently", optionTag: "A" },
                { optionText: "A type of balanced tree", optionTag: "B" },
                { optionText: "A sorting algorithm", optionTag: "C" },
                { optionText: "A stack implementation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm commonly uses DSU?",
            options: [
                { optionText: "Kruskal's Algorithm", optionTag: "A" },
                { optionText: "Binary Search", optionTag: "B" },
                { optionText: "Merge Sort", optionTag: "C" },
                { optionText: "Depth-First Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which value indicates that an element is the root in a parent array?",
            options: [
                { optionText: "It is its own parent", optionTag: "A" },
                { optionText: "It has a null value", optionTag: "B" },
                { optionText: "It points to -1", optionTag: "C" },
                { optionText: "It points to 0", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does path compression affect DSU?",
            options: [
                { optionText: "Reduces the time complexity of future operations", optionTag: "A" },
                { optionText: "Increases memory usage significantly", optionTag: "B" },
                { optionText: "Removes elements from the set", optionTag: "C" },
                { optionText: "Sorts elements", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is DSU suitable for dynamic connectivity problems?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in C++", optionTag: "C" },
                { optionText: "Only with graphs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What data is typically stored in the DSU structure?",
            options: [
                { optionText: "Parent and rank arrays", optionTag: "A" },
                { optionText: "Only key-value pairs", optionTag: "B" },
                { optionText: "Child pointers", optionTag: "C" },
                { optionText: "Graph edges", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java data type can represent DSU parent array?",
            options: [
                { optionText: "int[]", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "String[]", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In union by rank, what does rank represent?",
            options: [
                { optionText: "Tree height or size", optionTag: "A" },
                { optionText: "Node value", optionTag: "B" },
                { optionText: "Position in array", optionTag: "C" },
                { optionText: "Index of element", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why is DSU considered efficient?",
            options: [
                { optionText: "Due to nearly constant time operations with optimizations", optionTag: "A" },
                { optionText: "Due to sorting", optionTag: "B" },
                { optionText: "Because it uses recursion", optionTag: "C" },
                { optionText: "Because it uses linked lists", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is NOT a typical application of DSU?",
            options: [
                { optionText: "Finding shortest path", optionTag: "A" },
                { optionText: "Connected components", optionTag: "B" },
                { optionText: "Cycle detection", optionTag: "C" },
                { optionText: "Network connectivity", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which structure is built upon DSU in Kruskal's algorithm?",
            options: [
                { optionText: "Minimum Spanning Tree", optionTag: "A" },
                { optionText: "Heap", optionTag: "B" },
                { optionText: "Max Heap", optionTag: "C" },
                { optionText: "Priority Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;