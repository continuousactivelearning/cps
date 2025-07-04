import type { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
    title: "JavaScript Backtracking - Advanced Quiz",
    quizLevel: "advanced",
    lang: "javascript",
    description: "This quiz tests your advanced understanding of Backtracking in JavaScript.",
    topic: {
        courseID: new mongoose.Types.ObjectId(),
        courseName: "Backtracking"
    },
    quizScore: 20,
    questions: [
        {
            questionText: "What is the primary concept behind backtracking?",
            options: [
                { optionText: "Exploring all possibilities recursively and undoing invalid choices", optionTag: "A" },
                { optionText: "Greedy selection of optimal choices", optionTag: "B" },
                { optionText: "Divide and conquer", optionTag: "C" },
                { optionText: "Sorting and merging", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which data structure is commonly used with backtracking?",
            options: [
                { optionText: "Stack (implicit via recursion)", optionTag: "A" },
                { optionText: "Queue", optionTag: "B" },
                { optionText: "Heap", optionTag: "C" },
                { optionText: "Hash table", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In the N-Queens problem, what does backtracking help us avoid?",
            options: [
                { optionText: "Placing two queens in the same row, column, or diagonal", optionTag: "A" },
                { optionText: "Sorting the board", optionTag: "B" },
                { optionText: "Counting total queens", optionTag: "C" },
                { optionText: "Generating random board", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does a backtracking function typically return?",
            options: [
                { optionText: "Boolean indicating a valid solution found", optionTag: "A" },
                { optionText: "Sorted array", optionTag: "B" },
                { optionText: "Merged result", optionTag: "C" },
                { optionText: "Heap structure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following problems is *not* typically solved using backtracking?",
            options: [
                { optionText: "Fibonacci number calculation", optionTag: "A" },
                { optionText: "Sudoku solver", optionTag: "B" },
                { optionText: "N-Queens", optionTag: "C" },
                { optionText: "Word Search", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What optimization can avoid unnecessary recursive calls in backtracking?",
            options: [
                { optionText: "Pruning", optionTag: "A" },
                { optionText: "Randomization", optionTag: "B" },
                { optionText: "Sorting", optionTag: "C" },
                { optionText: "Memoization", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In backtracking, when is a solution path abandoned?",
            options: [
                { optionText: "When it violates constraints", optionTag: "A" },
                { optionText: "When the sum is positive", optionTag: "B" },
                { optionText: "When a for-loop ends", optionTag: "C" },
                { optionText: "When the list is sorted", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which JavaScript feature naturally supports backtracking via recursion?",
            options: [
                { optionText: "Function call stack", optionTag: "A" },
                { optionText: "Web Workers", optionTag: "B" },
                { optionText: "Event loop", optionTag: "C" },
                { optionText: "setTimeout()", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the base case in a backtracking solution?",
            options: [
                { optionText: "A condition that indicates a complete or invalid solution", optionTag: "A" },
                { optionText: "An infinite loop", optionTag: "B" },
                { optionText: "When no recursive calls remain", optionTag: "C" },
                { optionText: "When a stack is full", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which property must be maintained for safe pruning?",
            options: [
                { optionText: "Partial solutions must be verifiable", optionTag: "A" },
                { optionText: "Sorted input", optionTag: "B" },
                { optionText: "Input size must be constant", optionTag: "C" },
                { optionText: "Flat structure", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "In JavaScript, what happens if a recursive backtracking call stack becomes too deep?",
            options: [
                { optionText: "RangeError: Maximum call stack size exceeded", optionTag: "A" },
                { optionText: "SyntaxError", optionTag: "B" },
                { optionText: "NaN", optionTag: "C" },
                { optionText: "Segmentation fault", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What does `path.pop()` typically represent in a backtracking algorithm?",
            options: [
                { optionText: "Undoing a decision", optionTag: "A" },
                { optionText: "Storing the current answer", optionTag: "B" },
                { optionText: "Starting a new path", optionTag: "C" },
                { optionText: "Resetting recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which problem is classically solved by backtracking?",
            options: [
                { optionText: "Rat in a maze", optionTag: "A" },
                { optionText: "Linear search", optionTag: "B" },
                { optionText: "Quick sort", optionTag: "C" },
                { optionText: "Matrix multiplication", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What is the worst-case time complexity of N-Queens using backtracking?",
            options: [
                { optionText: "O(N!)", optionTag: "A" },
                { optionText: "O(N^2)", optionTag: "B" },
                { optionText: "O(log N)", optionTag: "C" },
                { optionText: "O(N)", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Backtracking is most suitable for which kind of problems?",
            options: [
                { optionText: "Constraint satisfaction problems", optionTag: "A" },
                { optionText: "Sorting problems", optionTag: "B" },
                { optionText: "String manipulation", optionTag: "C" },
                { optionText: "Searching problems", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is key to early stopping in backtracking?",
            options: [
                { optionText: "Validating constraints before proceeding", optionTag: "A" },
                { optionText: "Sorting input", optionTag: "B" },
                { optionText: "Limiting array length", optionTag: "C" },
                { optionText: "Using try-catch", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following is true for backtracking algorithms?",
            options: [
                { optionText: "They explore all branches of a decision tree", optionTag: "A" },
                { optionText: "They always find global optimum", optionTag: "B" },
                { optionText: "They use dynamic programming", optionTag: "C" },
                { optionText: "They avoid recursion", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What causes exponential time complexity in backtracking?",
            options: [
                { optionText: "Large branching factor", optionTag: "A" },
                { optionText: "Constant input size", optionTag: "B" },
                { optionText: "Greedy decisions", optionTag: "C" },
                { optionText: "Sorted inputs", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "Which of the following can improve backtracking efficiency?",
            options: [
                { optionText: "Constraint propagation", optionTag: "A" },
                { optionText: "Brute force", optionTag: "B" },
                { optionText: "Breadth-first search", optionTag: "C" },
                { optionText: "Linked lists", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        },
        {
            questionText: "What makes backtracking different from brute force?",
            options: [
                { optionText: "Backtracking eliminates invalid partial solutions early", optionTag: "A" },
                { optionText: "Backtracking explores all solutions", optionTag: "B" },
                { optionText: "Backtracking is iterative", optionTag: "C" },
                { optionText: "Backtracking sorts first", optionTag: "D" }
            ],
            correctOption: "A",
            score: 1
        }
    ]
};

export default quizData;
