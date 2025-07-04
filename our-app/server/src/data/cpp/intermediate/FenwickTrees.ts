import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Fenwick Trees - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz evaluates your intermediate understanding of Fenwick Trees (Binary Indexed Trees) in C++.",
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
                { optionText: "Trie", optionTag: "C" },
                { optionText: "AVL Tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main use of a Fenwick Tree?",
            options: [
                { optionText: "Range sum queries and point updates", optionTag: "A" },
                { optionText: "Graph traversal", optionTag: "B" },
                { optionText: "Path compression", optionTag: "C" },
                { optionText: "Shortest path finding", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity for point updates in a Fenwick Tree?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the next index to update found in a Fenwick Tree?",
            options: [
                { optionText: "index += index & -index", optionTag: "A" },
                { optionText: "index++", optionTag: "B" },
                { optionText: "index /= 2", optionTag: "C" },
                { optionText: "index = index | 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What operation retrieves prefix sums in Fenwick Trees?",
            options: [
                { optionText: "sum(index)", optionTag: "A" },
                { optionText: "update(index)", optionTag: "B" },
                { optionText: "clear(index)", optionTag: "C" },
                { optionText: "build(index)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these structures is typically more space efficient?",
            options: [
                { optionText: "Fenwick Tree", optionTag: "A" },
                { optionText: "Segment Tree", optionTag: "B" },
                { optionText: "AVL Tree", optionTag: "C" },
                { optionText: "Trie", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity for building a Fenwick Tree?",
            options: [
                { optionText: "O(n log n)", optionTag: "A" },
                { optionText: "O(n^2)", optionTag: "B" },
                { optionText: "O(log n)", optionTag: "C" },
                { optionText: "O(n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following best describes the structure of a Fenwick Tree?",
            options: [
                { optionText: "An implicit binary tree in an array", optionTag: "A" },
                { optionText: "A linked list", optionTag: "B" },
                { optionText: "A balanced BST", optionTag: "C" },
                { optionText: "A min-heap", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In Fenwick Tree, how do you find the parent index during prefix sum?",
            options: [
                { optionText: "index -= index & -index", optionTag: "A" },
                { optionText: "index--", optionTag: "B" },
                { optionText: "index /= 2", optionTag: "C" },
                { optionText: "index = index ^ 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is not a valid use-case for Fenwick Tree?",
            options: [
                { optionText: "Range minimum queries", optionTag: "A" },
                { optionText: "Prefix sum queries", optionTag: "B" },
                { optionText: "Inversion count", optionTag: "C" },
                { optionText: "Frequency table operations", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the size of the internal array in a Fenwick Tree for n elements?",
            options: [
                { optionText: "n + 1", optionTag: "A" },
                { optionText: "n", optionTag: "B" },
                { optionText: "2n", optionTag: "C" },
                { optionText: "log n", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How do you initialize a Fenwick Tree?",
            options: [
                { optionText: "Set all tree elements to 0", optionTag: "A" },
                { optionText: "Assign each value to its index", optionTag: "B" },
                { optionText: "Build a BST from input", optionTag: "C" },
                { optionText: "Use heapify", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is faster for both range sum and range update?",
            options: [
                { optionText: "Segment Tree", optionTag: "A" },
                { optionText: "Fenwick Tree", optionTag: "B" },
                { optionText: "Trie", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which update is **not** supported directly by basic Fenwick Tree?",
            options: [
                { optionText: "Range update", optionTag: "A" },
                { optionText: "Point update", optionTag: "B" },
                { optionText: "Prefix sum query", optionTag: "C" },
                { optionText: "Single value retrieval", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which function is often implemented recursively in Segment Trees but not in Fenwick Trees?",
            options: [
                { optionText: "Build", optionTag: "A" },
                { optionText: "Sum", optionTag: "B" },
                { optionText: "Update", optionTag: "C" },
                { optionText: "Traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Fenwick Tree is particularly suited for which kind of problems?",
            options: [
                { optionText: "Prefix sum and frequency count problems", optionTag: "A" },
                { optionText: "Graph traversal", optionTag: "B" },
                { optionText: "Finding MST", optionTag: "C" },
                { optionText: "DFS problems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ container is best for implementing Fenwick Tree?",
            options: [
                { optionText: "vector<int>", optionTag: "A" },
                { optionText: "unordered_map<int>", optionTag: "B" },
                { optionText: "set<int>", optionTag: "C" },
                { optionText: "queue<int>", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the best-case time complexity for a query in Fenwick Tree?",
            options: [
                { optionText: "O(log n)", optionTag: "A" },
                { optionText: "O(1)", optionTag: "B" },
                { optionText: "O(n)", optionTag: "C" },
                { optionText: "O(n log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which bitwise operation is core to Fenwick Tree functionality?",
            options: [
                { optionText: "& (AND)", optionTag: "A" },
                { optionText: "| (OR)", optionTag: "B" },
                { optionText: "^ (XOR)", optionTag: "C" },
                { optionText: "~ (NOT)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following describes `lowbit(i)` in BIT?",
            options: [
                { optionText: "i & -i", optionTag: "A" },
                { optionText: "i ^ i", optionTag: "B" },
                { optionText: "i | 1", optionTag: "C" },
                { optionText: "i >> 1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
