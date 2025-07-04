import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Greedy Algorithms - Intermediate Quiz",
    quizLevel: "intermediate",
    lang: "javascript",
    description: "This quiz tests your intermediate knowledge of Greedy Algorithms in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "GreedyAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following problems can be solved using a greedy algorithm?",
            options: [
                { optionText: "Activity selection", optionTag: "A" },
                { optionText: "Knapsack (0/1)", optionTag: "B" },
                { optionText: "Longest common subsequence", optionTag: "C" },
                { optionText: "Matrix chain multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the key idea behind greedy algorithms?",
            options: [
                { optionText: "Make the locally optimal choice at each step", optionTag: "A" },
                { optionText: "Divide and conquer", optionTag: "B" },
                { optionText: "Recursion and memoization", optionTag: "C" },
                { optionText: "Backtracking from the end", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which greedy algorithm is used to find Minimum Spanning Tree?",
            options: [
                { optionText: "Prim’s algorithm", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Bellman-Ford", optionTag: "C" },
                { optionText: "Topological sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the fractional knapsack problem, which strategy is used?",
            options: [
                { optionText: "Select items by value/weight ratio", optionTag: "A" },
                { optionText: "Choose heaviest items first", optionTag: "B" },
                { optionText: "Choose items with least weight", optionTag: "C" },
                { optionText: "Use dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is **not** suitable for greedy approach?",
            options: [
                { optionText: "0/1 Knapsack", optionTag: "A" },
                { optionText: "Fractional Knapsack", optionTag: "B" },
                { optionText: "Huffman encoding", optionTag: "C" },
                { optionText: "Activity selection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Kruskal’s algorithm using union-find?",
            options: [
                { optionText: "O(E log E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E + V)", optionTag: "C" },
                { optionText: "O(log E)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the greedy choice for the Activity Selection Problem?",
            options: [
                { optionText: "Choose the activity with earliest finish time", optionTag: "A" },
                { optionText: "Choose the activity with latest start time", optionTag: "B" },
                { optionText: "Choose the activity with longest duration", optionTag: "C" },
                { optionText: "Choose activity with smallest ID", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is used in Prim's algorithm?",
            options: [
                { optionText: "Priority Queue (Min Heap)", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Hash Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is solved optimally using Huffman coding?",
            options: [
                { optionText: "Data compression", optionTag: "A" },
                { optionText: "Pathfinding", optionTag: "B" },
                { optionText: "Sorting", optionTag: "C" },
                { optionText: "Scheduling", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems **doesn't** always yield optimal solution with a greedy approach?",
            options: [
                { optionText: "Coin change (non-standard denominations)", optionTag: "A" },
                { optionText: "Fractional knapsack", optionTag: "B" },
                { optionText: "Activity selection", optionTag: "C" },
                { optionText: "Huffman encoding", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In greedy algorithms, solutions are built:",
            options: [
                { optionText: "Step by step", optionTag: "A" },
                { optionText: "Using divide and conquer", optionTag: "B" },
                { optionText: "From bottom-up", optionTag: "C" },
                { optionText: "From memoization table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which is a greedy method for job sequencing with deadlines?",
            options: [
                { optionText: "Schedule highest profit jobs first", optionTag: "A" },
                { optionText: "Schedule shortest jobs first", optionTag: "B" },
                { optionText: "Schedule random jobs", optionTag: "C" },
                { optionText: "Schedule latest jobs first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Greedy algorithms guarantee an optimal solution when:",
            options: [
                { optionText: "Problem has greedy-choice and optimal substructure properties", optionTag: "A" },
                { optionText: "Problem is NP-Hard", optionTag: "B" },
                { optionText: "Only one choice exists", optionTag: "C" },
                { optionText: "There are no constraints", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does the greedy approach **not** generally use?",
            options: [
                { optionText: "Recursion with backtracking", optionTag: "A" },
                { optionText: "Local optimization", optionTag: "B" },
                { optionText: "Sorting", optionTag: "C" },
                { optionText: "Priority queues", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these algorithms is not greedy?",
            options: [
                { optionText: "Floyd-Warshall", optionTag: "A" },
                { optionText: "Prim’s", optionTag: "B" },
                { optionText: "Kruskal’s", optionTag: "C" },
                { optionText: "Huffman coding", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these involves finding minimal cost to connect components?",
            options: [
                { optionText: "Minimum Spanning Tree", optionTag: "A" },
                { optionText: "Bipartite matching", optionTag: "B" },
                { optionText: "Topological sort", optionTag: "C" },
                { optionText: "DFS traversal", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Greedy approach fails when:",
            options: [
                { optionText: "Making local optimal choice does not lead to global optimum", optionTag: "A" },
                { optionText: "The input is sorted", optionTag: "B" },
                { optionText: "There are loops", optionTag: "C" },
                { optionText: "The problem is recursive", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Huffman tree is constructed using which technique?",
            options: [
                { optionText: "Priority Queue with Min Heap", optionTag: "A" },
                { optionText: "DFS", optionTag: "B" },
                { optionText: "Stack", optionTag: "C" },
                { optionText: "Linked List", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property ensures greedy algorithm correctness?",
            options: [
                { optionText: "Greedy choice property", optionTag: "A" },
                { optionText: "Memoization", optionTag: "B" },
                { optionText: "Sorting order", optionTag: "C" },
                { optionText: "No loops", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "When applying greedy strategy, you:",
            options: [
                { optionText: "Choose best possible option at each step", optionTag: "A" },
                { optionText: "Backtrack after every step", optionTag: "B" },
                { optionText: "Explore all paths", optionTag: "C" },
                { optionText: "Build from base case", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
