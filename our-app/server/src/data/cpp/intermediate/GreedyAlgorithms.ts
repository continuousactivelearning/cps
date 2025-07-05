import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Greedy Algorithms - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "cpp",
    description: "This quiz evaluates your intermediate-level understanding of Greedy Algorithms in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "GreedyAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the core principle behind greedy algorithms?",
            options: [
                { optionText: "Making the locally optimal choice at each step", optionTag: "A" },
                { optionText: "Exploring all possibilities", optionTag: "B" },
                { optionText: "Backtracking from wrong decisions", optionTag: "C" },
                { optionText: "Dividing the problem recursively", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems can be solved by a greedy algorithm?",
            options: [
                { optionText: "Activity selection problem", optionTag: "A" },
                { optionText: "Subset sum problem", optionTag: "B" },
                { optionText: "0/1 Knapsack problem", optionTag: "C" },
                { optionText: "TSP (Traveling Salesman Problem)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Greedy algorithms do not always provide:",
            options: [
                { optionText: "Globally optimal solution", optionTag: "A" },
                { optionText: "Fast computation", optionTag: "B" },
                { optionText: "Correct output for some cases", optionTag: "C" },
                { optionText: "Good approximation", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used in greedy algorithms like Dijkstra’s?",
            options: [
                { optionText: "Priority Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Set", optionTag: "C" },
                { optionText: "List", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is solved by greedy approach?",
            options: [
                { optionText: "Fractional Knapsack", optionTag: "A" },
                { optionText: "Longest common subsequence", optionTag: "B" },
                { optionText: "0/1 Knapsack", optionTag: "C" },
                { optionText: "Matrix chain multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Huffman coding is based on:",
            options: [
                { optionText: "Greedy strategy", optionTag: "A" },
                { optionText: "Backtracking", optionTag: "B" },
                { optionText: "Divide and conquer", optionTag: "C" },
                { optionText: "Dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a property of greedy algorithms?",
            options: [
                { optionText: "Greedy choice property", optionTag: "A" },
                { optionText: "Overlapping subproblems", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Memoization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In greedy algorithms, decisions are made based on:",
            options: [
                { optionText: "Local optimality", optionTag: "A" },
                { optionText: "Global knowledge", optionTag: "B" },
                { optionText: "Entire problem tree", optionTag: "C" },
                { optionText: "All solutions compared", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which sorting order is used in Fractional Knapsack?",
            options: [
                { optionText: "Descending by value/weight ratio", optionTag: "A" },
                { optionText: "Ascending by weight", optionTag: "B" },
                { optionText: "Descending by value", optionTag: "C" },
                { optionText: "Random", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the greedy Activity Selection algorithm (after sorting)?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true for Prim’s algorithm?",
            options: [
                { optionText: "It follows a greedy approach", optionTag: "A" },
                { optionText: "It is a divide and conquer algorithm", optionTag: "B" },
                { optionText: "It uses recursion", optionTag: "C" },
                { optionText: "It is a backtracking algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In greedy algorithms, choices are:",
            options: [
                { optionText: "Irrevocable", optionTag: "A" },
                { optionText: "Reversible", optionTag: "B" },
                { optionText: "Recursive", optionTag: "C" },
                { optionText: "Based on future choices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the output of a greedy algorithm for coin change problem not always correct?",
            options: [
                { optionText: "If denominations are not canonical", optionTag: "A" },
                { optionText: "If input is sorted", optionTag: "B" },
                { optionText: "If coins are all equal", optionTag: "C" },
                { optionText: "If only one coin is used", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following uses a greedy algorithm?",
            options: [
                { optionText: "Kruskal’s Algorithm", optionTag: "A" },
                { optionText: "Bellman-Ford", optionTag: "B" },
                { optionText: "Floyd-Warshall", optionTag: "C" },
                { optionText: "Topological Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What must hold for a greedy algorithm to give optimal result?",
            options: [
                { optionText: "Greedy choice property and optimal substructure", optionTag: "A" },
                { optionText: "Subproblem independence", optionTag: "B" },
                { optionText: "Recursive state transitions", optionTag: "C" },
                { optionText: "Backtracking tree", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the first step in a greedy algorithm?",
            options: [
                { optionText: "Sort or prioritize choices", optionTag: "A" },
                { optionText: "Explore the entire search space", optionTag: "B" },
                { optionText: "Recursively build tree", optionTag: "C" },
                { optionText: "Store subproblem states", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following algorithms uses greedy strategy in MST?",
            options: [
                { optionText: "Prim’s and Kruskal’s", optionTag: "A" },
                { optionText: "Dijkstra only", optionTag: "B" },
                { optionText: "Bellman-Ford", optionTag: "C" },
                { optionText: "Floyd-Warshall", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why are greedy algorithms faster than dynamic programming?",
            options: [
                { optionText: "They don’t store intermediate results", optionTag: "A" },
                { optionText: "They use recursion", optionTag: "B" },
                { optionText: "They always explore all possibilities", optionTag: "C" },
                { optionText: "They backtrack on wrong paths", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What makes a problem suitable for greedy algorithms?",
            options: [
                { optionText: "Local choice leads to global solution", optionTag: "A" },
                { optionText: "All subproblems are dependent", optionTag: "B" },
                { optionText: "Backtracking is easy", optionTag: "C" },
                { optionText: "Large number of choices", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of Kruskal’s algorithm?",
            options: [
                { optionText: "O(E log E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E + V)", optionTag: "C" },
                { optionText: "O(log V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
