import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "C++ Backtracking - Beginner Quiz",
    quizLevel: "beginner",
    lang: "cpp",
    description: "This quiz tests your basic understanding of backtracking algorithms in C++.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Backtracking"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is backtracking?",
            options: [
                { optionText: "A technique to find all solutions by exploring all paths", optionTag: "A" },
                { optionText: "A sorting algorithm", optionTag: "B" },
                { optionText: "A graph traversal technique", optionTag: "C" },
                { optionText: "A type of dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these problems is commonly solved using backtracking?",
            options: [
                { optionText: "N-Queens Problem", optionTag: "A" },
                { optionText: "Bubble Sort", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Selection Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the basic idea behind backtracking?",
            options: [
                { optionText: "Try all possibilities and undo if needed", optionTag: "A" },
                { optionText: "Store subproblem results", optionTag: "B" },
                { optionText: "Sort and divide", optionTag: "C" },
                { optionText: "Use recursion with greedy approach", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is most useful in implementing backtracking?",
            options: [
                { optionText: "Stack", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Array", optionTag: "C" },
                { optionText: "Hash Map", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of approach does backtracking use?",
            options: [
                { optionText: "Depth First Search", optionTag: "A" },
                { optionText: "Breadth First Search", optionTag: "B" },
                { optionText: "Level Order Traversal", optionTag: "C" },
                { optionText: "Topological Sorting", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In backtracking, what happens when a condition fails?",
            options: [
                { optionText: "Backtrack to previous decision point", optionTag: "A" },
                { optionText: "Stop the program", optionTag: "B" },
                { optionText: "Restart the recursion", optionTag: "C" },
                { optionText: "Switch to dynamic programming", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of backtracking?",
            options: [
                { optionText: "Exponential", optionTag: "A" },
                { optionText: "Linear", optionTag: "B" },
                { optionText: "Logarithmic", optionTag: "C" },
                { optionText: "Constant", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of these is an example of backtracking?",
            options: [
                { optionText: "Solving Sudoku", optionTag: "A" },
                { optionText: "Mergesort", optionTag: "B" },
                { optionText: "Dijkstra's Algorithm", optionTag: "C" },
                { optionText: "Binary Search Tree Insertion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking is often implemented using which C++ feature?",
            options: [
                { optionText: "Recursion", optionTag: "A" },
                { optionText: "Iterators", optionTag: "B" },
                { optionText: "Classes", optionTag: "C" },
                { optionText: "Templates", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What makes a solution valid in backtracking?",
            options: [
                { optionText: "It satisfies the problem constraints", optionTag: "A" },
                { optionText: "It runs faster", optionTag: "B" },
                { optionText: "It uses fewer lines of code", optionTag: "C" },
                { optionText: "It uses more memory", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does pruning mean in backtracking?",
            options: [
                { optionText: "Avoiding paths that can't lead to a solution", optionTag: "A" },
                { optionText: "Stopping after first solution", optionTag: "B" },
                { optionText: "Deleting tree nodes", optionTag: "C" },
                { optionText: "Sorting inputs first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In which problem would backtracking not be useful?",
            options: [
                { optionText: "Sorting an array", optionTag: "A" },
                { optionText: "Solving N-Queens", optionTag: "B" },
                { optionText: "Finding all permutations", optionTag: "C" },
                { optionText: "Solving mazes", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does backtracking differ from brute force?",
            options: [
                { optionText: "Backtracking eliminates invalid options early", optionTag: "A" },
                { optionText: "Brute force is faster", optionTag: "B" },
                { optionText: "Backtracking checks all possibilities", optionTag: "C" },
                { optionText: "They are exactly the same", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is typically used to represent a state in backtracking?",
            options: [
                { optionText: "A partially constructed solution", optionTag: "A" },
                { optionText: "A final result", optionTag: "B" },
                { optionText: "A pointer", optionTag: "C" },
                { optionText: "A file stream", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which algorithm uses backtracking to generate all subsets?",
            options: [
                { optionText: "Power Set", optionTag: "A" },
                { optionText: "Quick Sort", optionTag: "B" },
                { optionText: "Binary Search", optionTag: "C" },
                { optionText: "Kruskal’s Algorithm", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What type of search is used in backtracking?",
            options: [
                { optionText: "Depth-first search", optionTag: "A" },
                { optionText: "Breadth-first search", optionTag: "B" },
                { optionText: "Randomized search", optionTag: "C" },
                { optionText: "Linear search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a drawback of backtracking?",
            options: [
                { optionText: "May have exponential time complexity", optionTag: "A" },
                { optionText: "Can only solve sorting problems", optionTag: "B" },
                { optionText: "Requires hash tables", optionTag: "C" },
                { optionText: "Works only for linear data", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is a classic backtracking problem?",
            options: [
                { optionText: "Rat in a Maze", optionTag: "A" },
                { optionText: "Merge Sort", optionTag: "B" },
                { optionText: "Insertion Sort", optionTag: "C" },
                { optionText: "Heap Sort", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the purpose of recursion in backtracking?",
            options: [
                { optionText: "Explore all possible solutions step-by-step", optionTag: "A" },
                { optionText: "Create loops", optionTag: "B" },
                { optionText: "Sort arrays", optionTag: "C" },
                { optionText: "Allocate memory dynamically", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "How does backtracking optimize search?",
            options: [
                { optionText: "By pruning invalid paths early", optionTag: "A" },
                { optionText: "By running parallel threads", optionTag: "B" },
                { optionText: "By avoiding recursion", optionTag: "C" },
                { optionText: "By sorting the input", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
