import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Fenwick Trees - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of Fenwick Trees (Binary Indexed Trees) in C++.",
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
                { optionText: "AVL Tree", optionTag: "C" },
                { optionText: "Heap Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of queries does a Fenwick Tree support efficiently?",
            options: [
                { optionText: "Prefix sum queries", optionTag: "A" },
                { optionText: "Maximum queries", optionTag: "B" },
                { optionText: "Minimum queries", optionTag: "C" },
                { optionText: "Median queries", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of a prefix sum query in a Fenwick Tree?",
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
            questionText: "What is the main advantage of using a Fenwick Tree?",
            options: [
                { optionText: "Efficient updates and queries in logarithmic time", optionTag: "A" },
                { optionText: "Simpler code than arrays", optionTag: "B" },
                { optionText: "Faster than segment tree", optionTag: "C" },
                { optionText: "Uses no memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which operation is used in Fenwick Tree updates?",
            options: [
                { optionText: "Adding the least significant bit (LSB)", optionTag: "A" },
                { optionText: "Dividing index by 2", optionTag: "B" },
                { optionText: "Multiplying index by 2", optionTag: "C" },
                { optionText: "Removing the most significant bit", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the expression `index += index & -index` do in a Fenwick Tree?",
            options: [
                { optionText: "Moves to the next responsible node", optionTag: "A" },
                { optionText: "Finds the parent node", optionTag: "B" },
                { optionText: "Adds the index to itself", optionTag: "C" },
                { optionText: "Sets the index to zero", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the size of the internal array used in a Fenwick Tree for n elements?",
            options: [
                { optionText: "n + 1", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "n - 1", optionTag: "C" },
                { optionText: "2n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following operations is NOT efficiently supported by a Fenwick Tree?",
            options: [
                { optionText: "Range minimum query", optionTag: "A" },
                { optionText: "Prefix sum query", optionTag: "B" },
                { optionText: "Point update", optionTag: "C" },
                { optionText: "Prefix sum update", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data type is usually used to implement a Fenwick Tree in C++?",
            options: [
                { optionText: "vector<int>", optionTag: "A" },
                { optionText: "map<int, int>", optionTag: "B" },
                { optionText: "set<int>", optionTag: "C" },
                { optionText: "stack<int>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the typical space complexity of a Fenwick Tree?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(log n)", optionTag: "B" },
                { optionText: "O(1)", optionTag: "C" },
                { optionText: "O(n^2)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the least significant bit (LSB) of a number obtained?",
            options: [
                { optionText: "x & -x", optionTag: "A" },
                { optionText: "x | x", optionTag: "B" },
                { optionText: "x ^ x", optionTag: "C" },
                { optionText: "x + x", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a Fenwick Tree store in its nodes?",
            options: [
                { optionText: "Partial sums of ranges", optionTag: "A" },
                { optionText: "Maximum values", optionTag: "B" },
                { optionText: "Indexes only", optionTag: "C" },
                { optionText: "Characters", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can a Fenwick Tree be used for range updates and point queries?",
            options: [
                { optionText: "Yes, with modifications", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only for sorted data", optionTag: "C" },
                { optionText: "Only for trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the initial value of all elements in a newly created Fenwick Tree?",
            options: [
                { optionText: "0", optionTag: "A" },
                { optionText: "1", optionTag: "B" },
                { optionText: "undefined", optionTag: "C" },
                { optionText: "-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a valid application of Fenwick Tree?",
            options: [
                { optionText: "Inversion count in an array", optionTag: "A" },
                { optionText: "Finding GCD", optionTag: "B" },
                { optionText: "Sorting a list", optionTag: "C" },
                { optionText: "Building binary trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is a Fenwick Tree updated after changing an element?",
            options: [
                { optionText: "Propagate changes using index += index & -index", optionTag: "A" },
                { optionText: "Rebuild the tree", optionTag: "B" },
                { optionText: "Use divide and conquer", optionTag: "C" },
                { optionText: "Use DFS", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can Fenwick Tree handle negative numbers?",
            options: [
                { optionText: "Yes", optionTag: "A" },
                { optionText: "No", optionTag: "B" },
                { optionText: "Only if all values are same", optionTag: "C" },
                { optionText: "Only if sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main limitation of Fenwick Trees compared to Segment Trees?",
            options: [
                { optionText: "Can't support all range queries like min/max", optionTag: "A" },
                { optionText: "Takes more space", optionTag: "B" },
                { optionText: "Slower queries", optionTag: "C" },
                { optionText: "Uses recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Can you use a Fenwick Tree in competitive programming?",
            options: [
                { optionText: "Yes, very commonly", optionTag: "A" },
                { optionText: "No, it is too slow", optionTag: "B" },
                { optionText: "Only for string problems", optionTag: "C" },
                { optionText: "Only for trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a key operation in a Fenwick Tree?",
            options: [
                { optionText: "Lowbit operation", optionTag: "A" },
                { optionText: "Merge operation", optionTag: "B" },
                { optionText: "Divide and conquer", optionTag: "C" },
                { optionText: "DFS traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
