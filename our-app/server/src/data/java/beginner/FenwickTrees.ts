// src/data/java/beginner/fenwick_trees.ts

import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "Java Fenwick Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "java",
    description: "This quiz covers the basics of Fenwick Trees (Binary Indexed Trees) in Java.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Fenwick Trees"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is another name for Fenwick Tree?",
            options: [
                { optionText: "Binary Indexed Tree", optionTag: "A" },
                { optionText: "Prefix Tree", optionTag: "B" },
                { optionText: "Segment Tree", optionTag: "C" },
                { optionText: "AVL Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What operation does a Fenwick Tree perform efficiently?",
            options: [
                { optionText: "Range sum query and point updates", optionTag: "A" },
                { optionText: "Sorting elements", optionTag: "B" },
                { optionText: "Linked list traversal", optionTag: "C" },
                { optionText: "Graph traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of a point update in Fenwick Tree?",
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
            questionText: "Which bit operation is commonly used in Fenwick Trees?",
            options: [
                { optionText: "Lowest set bit", optionTag: "A" },
                { optionText: "Bitwise OR", optionTag: "B" },
                { optionText: "Bitwise NOT", optionTag: "C" },
                { optionText: "Bit shift left", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the parent of a node found in a Fenwick Tree?",
            options: [
                { optionText: "By subtracting the LSB", optionTag: "A" },
                { optionText: "By adding one", optionTag: "B" },
                { optionText: "By doubling the index", optionTag: "C" },
                { optionText: "By halving the index", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of data can be handled by Fenwick Trees?",
            options: [
                { optionText: "Numeric", optionTag: "A" },
                { optionText: "String only", optionTag: "B" },
                { optionText: "Graph edges", optionTag: "C" },
                { optionText: "Non-primitive types", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which Java data type is commonly used for Fenwick Tree arrays?",
            options: [
                { optionText: "int[]", optionTag: "A" },
                { optionText: "List", optionTag: "B" },
                { optionText: "HashMap", optionTag: "C" },
                { optionText: "Queue", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Fenwick Tree is most effective for what kind of queries?",
            options: [
                { optionText: "Prefix sum", optionTag: "A" },
                { optionText: "Median", optionTag: "B" },
                { optionText: "Sorting", optionTag: "C" },
                { optionText: "Minimum value", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about Fenwick Tree?",
            options: [
                { optionText: "It uses O(n) space", optionTag: "A" },
                { optionText: "It uses O(n log n) space", optionTag: "B" },
                { optionText: "It requires a tree node structure", optionTag: "C" },
                { optionText: "It cannot be used in Java", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Fenwick Tree performs updates and queries in:",
            options: [
                { optionText: "Logarithmic time", optionTag: "A" },
                { optionText: "Linear time", optionTag: "B" },
                { optionText: "Constant time", optionTag: "C" },
                { optionText: "Quadratic time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which mathematical concept is important for Fenwick Trees?",
            options: [
                { optionText: "Binary representation", optionTag: "A" },
                { optionText: "Probability", optionTag: "B" },
                { optionText: "Geometry", optionTag: "C" },
                { optionText: "Algebraic topology", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Is it possible to extend Fenwick Tree for range updates?",
            options: [
                { optionText: "Yes, with some modifications", optionTag: "A" },
                { optionText: "No, never", optionTag: "B" },
                { optionText: "Only in C++", optionTag: "C" },
                { optionText: "Only in Python", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Fenwick Tree indexes are typically:",
            options: [
                { optionText: "1-based", optionTag: "A" },
                { optionText: "0-based", optionTag: "B" },
                { optionText: "Negative", optionTag: "C" },
                { optionText: "Random", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which array position is not updated in BIT?",
            options: [
                { optionText: "Index 0", optionTag: "A" },
                { optionText: "Index 1", optionTag: "B" },
                { optionText: "Last index", optionTag: "C" },
                { optionText: "Middle index", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Fenwick Tree be used for 2D data?",
            options: [
                { optionText: "Yes, with 2D arrays", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only in Python", optionTag: "C" },
                { optionText: "Only in JavaScript", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In a Fenwick Tree, how do you get the parent of index i?",
            options: [
                { optionText: "i - (i & -i)", optionTag: "A" },
                { optionText: "i + 1", optionTag: "B" },
                { optionText: "i / 2", optionTag: "C" },
                { optionText: "i - 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What should be done before using Fenwick Tree?",
            options: [
                { optionText: "Initialize all elements to zero", optionTag: "A" },
                { optionText: "Sort the array", optionTag: "B" },
                { optionText: "Convert to prefix sum", optionTag: "C" },
                { optionText: "Use hash table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main advantage of BIT over Segment Tree?",
            options: [
                { optionText: "Simpler and uses less space", optionTag: "A" },
                { optionText: "Handles more operations", optionTag: "B" },
                { optionText: "Faster in all cases", optionTag: "C" },
                { optionText: "Works with strings", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if we use 0-based indexing in BIT without change?",
            options: [
                { optionText: "Incorrect results", optionTag: "A" },
                { optionText: "Faster execution", optionTag: "B" },
                { optionText: "Better performance", optionTag: "C" },
                { optionText: "Proper functionality", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Fenwick Tree can be implemented with which technique?",
            options: [
                { optionText: "Recursion and bit manipulation", optionTag: "A" },
                { optionText: "Backtracking", optionTag: "B" },
                { optionText: "Greedy", optionTag: "C" },
                { optionText: "Divide and conquer", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;