import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Greedy Algorithms - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced understanding of Greedy Algorithms in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "GreedyAlgorithms"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "In the activity selection problem, what is the greedy choice made?",
            options: [
                { optionText: "Choose activity with earliest finish time", optionTag: "A" },
                { optionText: "Choose activity with shortest duration", optionTag: "B" },
                { optionText: "Choose activity with latest start time", optionTag: "C" },
                { optionText: "Choose activity with minimum start time", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm uses the greedy technique to construct a Minimum Spanning Tree?",
            options: [
                { optionText: "Prim’s and Kruskal’s", optionTag: "A" },
                { optionText: "Dijkstra’s", optionTag: "B" },
                { optionText: "Floyd-Warshall", optionTag: "C" },
                { optionText: "Tarjan’s", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why does greedy algorithm fail for the 0/1 Knapsack problem?",
            options: [
                { optionText: "It doesn't consider future consequences", optionTag: "A" },
                { optionText: "It’s too slow", optionTag: "B" },
                { optionText: "It requires sorting", optionTag: "C" },
                { optionText: "It can't handle weights", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Huffman coding is based on which algorithmic paradigm?",
            options: [
                { optionText: "Greedy", optionTag: "A" },
                { optionText: "Divide and conquer", optionTag: "B" },
                { optionText: "Backtracking", optionTag: "C" },
                { optionText: "Dynamic Programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used in Huffman coding?",
            options: [
                { optionText: "Priority Queue", optionTag: "A" },
                { optionText: "Stack", optionTag: "B" },
                { optionText: "Queue", optionTag: "C" },
                { optionText: "Set", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the Fractional Knapsack problem, what greedy criterion is used?",
            options: [
                { optionText: "Value/weight ratio", optionTag: "A" },
                { optionText: "Minimum weight", optionTag: "B" },
                { optionText: "Maximum value", optionTag: "C" },
                { optionText: "Maximum weight", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of Kruskal’s algorithm using union-find?",
            options: [
                { optionText: "O(E log E)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(V log V)", optionTag: "C" },
                { optionText: "O(E + V)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which greedy algorithm is used to find shortest paths in graphs with non-negative weights?",
            options: [
                { optionText: "Dijkstra’s algorithm", optionTag: "A" },
                { optionText: "Bellman-Ford algorithm", optionTag: "B" },
                { optionText: "Floyd-Warshall algorithm", optionTag: "C" },
                { optionText: "Prim’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the greedy step in the coin change problem (with standard denominations)?",
            options: [
                { optionText: "Choose the largest coin ≤ remaining amount", optionTag: "A" },
                { optionText: "Choose the smallest coin", optionTag: "B" },
                { optionText: "Choose the median coin", optionTag: "C" },
                { optionText: "Choose the next coin randomly", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true about greedy algorithms?",
            options: [
                { optionText: "Greedy algorithms may not give optimal solution", optionTag: "A" },
                { optionText: "Greedy algorithms always give optimal solution", optionTag: "B" },
                { optionText: "Greedy algorithms are slower than brute-force", optionTag: "C" },
                { optionText: "Greedy algorithms use recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the primary requirement for a problem to be solved by greedy approach?",
            options: [
                { optionText: "Greedy-choice property and optimal substructure", optionTag: "A" },
                { optionText: "Only optimal substructure", optionTag: "B" },
                { optionText: "Only greedy-choice property", optionTag: "C" },
                { optionText: "Divide and conquer property", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which graph algorithm uses a min-heap to select the next minimum edge?",
            options: [
                { optionText: "Prim’s algorithm", optionTag: "A" },
                { optionText: "Kruskal’s algorithm", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "Tarjan’s algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Why does greedy algorithm work for scheduling problems like job sequencing with deadlines?",
            options: [
                { optionText: "It always makes locally optimal choices", optionTag: "A" },
                { optionText: "It exhausts all combinations", optionTag: "B" },
                { optionText: "It stores all states", optionTag: "C" },
                { optionText: "It prioritizes early jobs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm solves the Minimum Number of Platforms problem optimally using greedy method?",
            options: [
                { optionText: "Sorting and two-pointer technique", optionTag: "A" },
                { optionText: "BFS", optionTag: "B" },
                { optionText: "DFS", optionTag: "C" },
                { optionText: "DP with memoization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT solved optimally by greedy approach?",
            options: [
                { optionText: "0/1 Knapsack problem", optionTag: "A" },
                { optionText: "Fractional Knapsack", optionTag: "B" },
                { optionText: "Huffman coding", optionTag: "C" },
                { optionText: "Activity selection", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is the coin change problem affected by arbitrary denominations?",
            options: [
                { optionText: "Greedy may not produce optimal result", optionTag: "A" },
                { optionText: "Greedy always produces optimal result", optionTag: "B" },
                { optionText: "It is solved using divide and conquer", optionTag: "C" },
                { optionText: "It becomes easier", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of Dijkstra’s algorithm with min-heap?",
            options: [
                { optionText: "O((V + E) log V)", optionTag: "A" },
                { optionText: "O(V^2)", optionTag: "B" },
                { optionText: "O(E^2)", optionTag: "C" },
                { optionText: "O(VE)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is required for Huffman coding?",
            options: [
                { optionText: "Frequency of characters", optionTag: "A" },
                { optionText: "Character encoding", optionTag: "B" },
                { optionText: "String length", optionTag: "C" },
                { optionText: "Lexicographic order", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which greedy algorithm uses disjoint set data structure?",
            options: [
                { optionText: "Kruskal’s algorithm", optionTag: "A" },
                { optionText: "Prim’s algorithm", optionTag: "B" },
                { optionText: "Bellman-Ford", optionTag: "C" },
                { optionText: "Dijkstra’s", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the time complexity of the activity selection problem (after sorting)?",
            options: [
                { optionText: "O(n)", optionTag: "A" },
                { optionText: "O(n log n)", optionTag: "B" },
                { optionText: "O(n^2)", optionTag: "C" },
                { optionText: "O(log n)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
