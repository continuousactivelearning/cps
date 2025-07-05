import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Backtracking - Advanced Quiz",
    quizLevel: "advanced",
    lang: "cpp",
    description: "This quiz tests your advanced knowledge of Backtracking algorithms in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Backtracking"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "Which of the following is the primary approach used in backtracking algorithms?",
            options: [
                { optionText: "Recursive exploration with pruning", optionTag: "A" },
                { optionText: "Divide and conquer", optionTag: "B" },
                { optionText: "Greedy selection", optionTag: "C" },
                { optionText: "Dynamic programming memoization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the N-Queens problem, how many queens must be placed on an N×N board so that no two attack each other?",
            options: [
                { optionText: "N", optionTag: "A" },
                { optionText: "2N", optionTag: "B" },
                { optionText: "N/2", optionTag: "C" },
                { optionText: "N-1", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of the N-Queens problem using backtracking?",
            options: [
                { optionText: "O(N!)", optionTag: "A" },
                { optionText: "O(N^2)", optionTag: "B" },
                { optionText: "O(2^N)", optionTag: "C" },
                { optionText: "O(N log N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems is NOT typically solved using backtracking?",
            options: [
                { optionText: "Shortest path in a graph", optionTag: "A" },
                { optionText: "Sudoku", optionTag: "B" },
                { optionText: "N-Queens", optionTag: "C" },
                { optionText: "Knight's Tour", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What condition must be checked before placing a queen in the N-Queens backtracking solution?",
            options: [
                { optionText: "Column, left diagonal, and right diagonal", optionTag: "A" },
                { optionText: "Only column", optionTag: "B" },
                { optionText: "Only row", optionTag: "C" },
                { optionText: "Only diagonals", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which statement best describes the backtracking approach?",
            options: [
                { optionText: "Explore all options and discard invalid ones", optionTag: "A" },
                { optionText: "Pick the best option at each step", optionTag: "B" },
                { optionText: "Split the problem recursively", optionTag: "C" },
                { optionText: "Store solutions to subproblems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the context of backtracking, what does 'pruning' mean?",
            options: [
                { optionText: "Eliminating choices that cannot lead to a solution", optionTag: "A" },
                { optionText: "Cutting the recursion tree to half", optionTag: "B" },
                { optionText: "Sorting the possibilities first", optionTag: "C" },
                { optionText: "Using hash maps to store paths", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which C++ STL container is best suited for tracking visited paths in backtracking?",
            options: [
                { optionText: "vector", optionTag: "A" },
                { optionText: "set", optionTag: "B" },
                { optionText: "queue", optionTag: "C" },
                { optionText: "stack", optionTag: "D" }
            ],
            correctOption: "B",
            score: 1
        },
        {
            questionText: "In the Subset Sum problem using backtracking, when can a solution be abandoned?",
            options: [
                { optionText: "When the current sum exceeds the target", optionTag: "A" },
                { optionText: "When all elements are used", optionTag: "B" },
                { optionText: "When sum equals target", optionTag: "C" },
                { optionText: "Never", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is NOT a key part of a backtracking function?",
            options: [
                { optionText: "Base case", optionTag: "A" },
                { optionText: "Recursive call", optionTag: "B" },
                { optionText: "Memoization table", optionTag: "C" },
                { optionText: "Undo move (backtrack step)", optionTag: "D" }
            ],
            correctOption: "C",
            score: 1
        },
        {
            questionText: "Which backtracking problem requires placing integers in a grid so that constraints on rows, columns, and boxes are satisfied?",
            options: [
                { optionText: "Sudoku", optionTag: "A" },
                { optionText: "Maze solving", optionTag: "B" },
                { optionText: "Palindrome Partitioning", optionTag: "C" },
                { optionText: "N-Queens", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In backtracking, the state space tree is used to:",
            options: [
                { optionText: "Represent all possible paths to explore", optionTag: "A" },
                { optionText: "Sort the solutions", optionTag: "B" },
                { optionText: "Store input", optionTag: "C" },
                { optionText: "Track visited memory blocks", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the primary benefit of backtracking compared to brute-force approaches?",
            options: [
                { optionText: "Reduces the number of states explored", optionTag: "A" },
                { optionText: "Guarantees optimality", optionTag: "B" },
                { optionText: "Doesn't use recursion", optionTag: "C" },
                { optionText: "Works faster on all inputs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these problems is solved using backtracking and involves all possible partitions of a string into palindromes?",
            options: [
                { optionText: "Palindrome Partitioning", optionTag: "A" },
                { optionText: "Longest Palindromic Substring", optionTag: "B" },
                { optionText: "Manacher's Algorithm", optionTag: "C" },
                { optionText: "KMP Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How is 'backtracking' different from 'depth-first search'?",
            options: [
                { optionText: "Backtracking undoes choices upon reaching a dead end", optionTag: "A" },
                { optionText: "DFS is iterative", optionTag: "B" },
                { optionText: "Backtracking uses stacks", optionTag: "C" },
                { optionText: "They are exactly the same", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is heavily used in backtracking algorithms?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Graph", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does backtracking handle invalid paths?",
            options: [
                { optionText: "Backtracks to previous decision point", optionTag: "A" },
                { optionText: "Terminates the program", optionTag: "B" },
                { optionText: "Skips recursion entirely", optionTag: "C" },
                { optionText: "Stores them as fallback", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which principle is used by backtracking algorithms?",
            options: [
                { optionText: "Try and reject", optionTag: "A" },
                { optionText: "Select and memorize", optionTag: "B" },
                { optionText: "Divide and optimize", optionTag: "C" },
                { optionText: "Search and hash", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these C++ STL utilities is helpful for generating permutations for backtracking?",
            options: [
                { optionText: "std::next_permutation", optionTag: "A" },
                { optionText: "std::sort", optionTag: "B" },
                { optionText: "std::accumulate", optionTag: "C" },
                { optionText: "std::find_if", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
