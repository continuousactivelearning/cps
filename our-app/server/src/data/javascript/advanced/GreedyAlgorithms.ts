import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Greedy Algorithms - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz evaluates your advanced knowledge of Greedy Algorithms in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "GreedyAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following problems is best solved using a greedy approach?",
            options: [
                { optionText: "Activity Selection Problem", optionTag: "A" },
                { optionText: "Fibonacci Sequence", optionTag: "B" },
                { optionText: "Matrix Chain Multiplication", optionTag: "C" },
                { optionText: "Tower of Hanoi", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the main strategy used in greedy algorithms?",
            options: [
                { optionText: "Choosing the best local option at each step", optionTag: "A" },
                { optionText: "Exploring all paths recursively", optionTag: "B" },
                { optionText: "Memoizing past results", optionTag: "C" },
                { optionText: "Random selection of paths", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is a correct greedy solution for the Fractional Knapsack problem?",
            options: [
                { optionText: "Select items by highest value/weight ratio", optionTag: "A" },
                { optionText: "Select items in given input order", optionTag: "B" },
                { optionText: "Select items with highest weight first", optionTag: "C" },
                { optionText: "Select items with lowest value first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why doesn't the greedy solution work for 0/1 Knapsack problem?",
            options: [
                { optionText: "It doesn't consider future consequences", optionTag: "A" },
                { optionText: "It always gives the wrong answer", optionTag: "B" },
                { optionText: "Greedy solution is slow", optionTag: "C" },
                { optionText: "0/1 Knapsack is solved by DFS only", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, what structure is best for implementing a greedy algorithm like Huffman coding?",
            options: [
                { optionText: "PriorityQueue using a Min-Heap", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm uses greedy technique to construct a Minimum Spanning Tree?",
            options: [
                { optionText: "Prim's Algorithm", optionTag: "A" },
                { optionText: "Floyd-Warshall", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "Tarjan's Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the greedy coin change algorithm, when does it fail to give an optimal solution?",
            options: [
                { optionText: "When coin denominations are not canonical", optionTag: "A" },
                { optionText: "When coins are unlimited", optionTag: "B" },
                { optionText: "When coins are sorted", optionTag: "C" },
                { optionText: "It always gives optimal solution", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a greedy algorithm?",
            options: [
                { optionText: "Dijkstra’s Algorithm with negative weights", optionTag: "A" },
                { optionText: "Kruskal’s Algorithm", optionTag: "B" },
                { optionText: "Prim’s Algorithm", optionTag: "C" },
                { optionText: "Activity Selection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which greedy algorithm is used to construct optimal prefix codes?",
            options: [
                { optionText: "Huffman Encoding", optionTag: "A" },
                { optionText: "Prim’s Algorithm", optionTag: "B" },
                { optionText: "DFS Encoding", optionTag: "C" },
                { optionText: "Greedy Merge Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is a key requirement for a problem to be solved using a greedy approach?",
            options: [
                { optionText: "Greedy choice property and optimal substructure", optionTag: "A" },
                { optionText: "Only greedy choice property", optionTag: "B" },
                { optionText: "Only optimal substructure", optionTag: "C" },
                { optionText: "DFS tree traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What happens if a greedy algorithm makes a locally optimal choice?",
            options: [
                { optionText: "It may or may not lead to a globally optimal solution", optionTag: "A" },
                { optionText: "It always gives the worst result", optionTag: "B" },
                { optionText: "It guarantees global optimality", optionTag: "C" },
                { optionText: "It must be converted to DP", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What sorting is typically done before applying greedy algorithms?",
            options: [
                { optionText: "Descending by profit/value", optionTag: "A" },
                { optionText: "Ascending by input index", optionTag: "B" },
                { optionText: "Random shuffle", optionTag: "C" },
                { optionText: "Alphabetical", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure can improve greedy algorithm efficiency in graph problems?",
            options: [
                { optionText: "Min Heap (Priority Queue)", optionTag: "A" },
                { optionText: "Deque", optionTag: "B" },
                { optionText: "HashMap", optionTag: "C" },
                { optionText: "Stack", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why are greedy algorithms easier to implement than DP?",
            options: [
                { optionText: "They avoid recursion and memoization", optionTag: "A" },
                { optionText: "They always use brute force", optionTag: "B" },
                { optionText: "They store all results", optionTag: "C" },
                { optionText: "They rely on recursion trees", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the greedy choice made in Prim’s algorithm?",
            options: [
                { optionText: "Select minimum weight edge to grow MST", optionTag: "A" },
                { optionText: "Select maximum degree node", optionTag: "B" },
                { optionText: "Select node with max distance", optionTag: "C" },
                { optionText: "Select unvisited edge", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which scenario may lead greedy algorithms to fail?",
            options: [
                { optionText: "When local choices do not lead to global optimum", optionTag: "A" },
                { optionText: "When the input is sorted", optionTag: "B" },
                { optionText: "When recursion is used", optionTag: "C" },
                { optionText: "When greedy choice is same as brute force", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript feature can help implement a Min Heap for greedy algorithms?",
            options: [
                { optionText: "Custom class with comparator", optionTag: "A" },
                { optionText: "Set()", optionTag: "B" },
                { optionText: "WeakMap()", optionTag: "C" },
                { optionText: "Promise.all()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In interval scheduling using greedy, what is the typical sorting criteria?",
            options: [
                { optionText: "By earliest finish time", optionTag: "A" },
                { optionText: "By latest start time", optionTag: "B" },
                { optionText: "By highest duration", optionTag: "C" },
                { optionText: "By index order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Greedy algorithms are suitable for which type of optimization problems?",
            options: [
                { optionText: "Where local optimum leads to global optimum", optionTag: "A" },
                { optionText: "Only recursive problems", optionTag: "B" },
                { optionText: "All dynamic programming problems", optionTag: "C" },
                { optionText: "Problems with non-deterministic inputs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
