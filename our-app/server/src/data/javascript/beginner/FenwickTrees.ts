import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Fenwick Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "javascript",
    description: "This quiz tests your basic understanding of Fenwick Trees (Binary Indexed Trees) in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "FenwickTrees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is another name for a Fenwick Tree?",
            options: [
                { optionText: "Binary Indexed Tree", optionTag: "A" },
                { optionText: "Segment Tree", optionTag: "B" },
                { optionText: "Balanced Tree", optionTag: "C" },
                { optionText: "Prefix Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What operation is Fenwick Tree mainly used for?",
            options: [
                { optionText: "Prefix sum queries and updates", optionTag: "A" },
                { optionText: "Sorting elements", optionTag: "B" },
                { optionText: "Binary search", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity for updating a value in a Fenwick Tree?",
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
            questionText: "Which data structure is used in Fenwick Tree?",
            options: [
                { optionText: "Array", optionTag: "A" },
                { optionText: "Object", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these problems can be solved using a Fenwick Tree?",
            options: [
                { optionText: "Range sum query", optionTag: "A" },
                { optionText: "Graph coloring", optionTag: "B" },
                { optionText: "Cycle detection", optionTag: "C" },
                { optionText: "Shortest path", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the minimum index for a Fenwick Tree array?",
            options: [
                { optionText: "1", optionTag: "A" },
                { optionText: "0", optionTag: "B" },
                { optionText: "-1", optionTag: "C" },
                { optionText: "Depends on size", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you move to the parent in a Fenwick Tree?",
            options: [
                { optionText: "i - (i & -i)", optionTag: "A" },
                { optionText: "i + 1", optionTag: "B" },
                { optionText: "i * 2", optionTag: "C" },
                { optionText: "i / 2", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which bitwise operation is central to Fenwick Trees?",
            options: [
                { optionText: "& (bitwise AND)", optionTag: "A" },
                { optionText: "| (bitwise OR)", optionTag: "B" },
                { optionText: "^ (bitwise XOR)", optionTag: "C" },
                { optionText: "~ (bitwise NOT)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity for a prefix sum query in a Fenwick Tree?",
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
            questionText: "Can Fenwick Tree handle range minimum queries efficiently?",
            options: [
                { optionText: "No", optionTag: "A" },
                { optionText: "Yes", optionTag: "B" },
                { optionText: "Only for sorted arrays", optionTag: "C" },
                { optionText: "Only for max queries", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main limitation of a Fenwick Tree?",
            options: [
                { optionText: "Cannot handle range updates efficiently", optionTag: "A" },
                { optionText: "Consumes too much memory", optionTag: "B" },
                { optionText: "Only works on strings", optionTag: "C" },
                { optionText: "Cannot be implemented in JavaScript", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is the Fenwick Tree suitable for dynamic arrays?",
            options: [
                { optionText: "No, array size is fixed at initialization", optionTag: "A" },
                { optionText: "Yes, it grows automatically", optionTag: "B" },
                { optionText: "Yes, using push and pop", optionTag: "C" },
                { optionText: "Yes, with a doubly linked list", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What kind of problems require prefix sum queries?",
            options: [
                { optionText: "Counting subarrays with sum constraints", optionTag: "A" },
                { optionText: "Searching in BST", optionTag: "B" },
                { optionText: "String reversal", optionTag: "C" },
                { optionText: "Graph DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if you use index 0 in a 1-based Fenwick Tree?",
            options: [
                { optionText: "It leads to undefined behavior", optionTag: "A" },
                { optionText: "It returns correct value", optionTag: "B" },
                { optionText: "It updates last element", optionTag: "C" },
                { optionText: "It works as prefix sum", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you move to the next index in update?",
            options: [
                { optionText: "i + (i & -i)", optionTag: "A" },
                { optionText: "i - 1", optionTag: "B" },
                { optionText: "i / 2", optionTag: "C" },
                { optionText: "i * i", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is it easy to convert prefix sum array to Fenwick Tree?",
            options: [
                { optionText: "Yes, by using updates for each prefix value", optionTag: "A" },
                { optionText: "No, they are unrelated", optionTag: "B" },
                { optionText: "Only in C++", optionTag: "C" },
                { optionText: "Only with graph data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial value of Fenwick Tree array?",
            options: [
                { optionText: "All zeros", optionTag: "A" },
                { optionText: "Random values", optionTag: "B" },
                { optionText: "All ones", optionTag: "C" },
                { optionText: "Infinity", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT true about Fenwick Tree?",
            options: [
                { optionText: "It supports both updates and queries in log n time", optionTag: "A" },
                { optionText: "It is space-efficient", optionTag: "B" },
                { optionText: "It can be used for prefix XOR", optionTag: "C" },
                { optionText: "It can handle range minimum queries", optionTag: "D" }
            ],
            correctOption: "D",
            score: 1
        },
        {
            questionText: "How many operations are needed to construct Fenwick Tree from an array?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which condition is true for Fenwick Tree index movement?",
            options: [
                { optionText: "Use i & -i for index jump", optionTag: "A" },
                { optionText: "Always increment by 1", optionTag: "B" },
                { optionText: "Always decrement by 1", optionTag: "C" },
                { optionText: "No index jump used", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
