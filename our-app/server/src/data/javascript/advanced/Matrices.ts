import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "JavaScript Matrices - Advanced Quiz",
  quizLevel: "advanced",
  lang: "javascript",
  description: "This quiz tests your advanced understanding of matrix operations, algorithms, and implementation in JavaScript.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Matrices"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following represents a 2D matrix in JavaScript?",
      options: [
        { optionText: "An array of arrays", optionTag: "A" },
        { optionText: "An object of arrays", optionTag: "B" },
        { optionText: "A string", optionTag: "C" },
        { optionText: "Single array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you access the element at 2nd row and 3rd column in a matrix `mat`?",
      options: [
        { optionText: "mat[1][2]", optionTag: "A" },
        { optionText: "mat[2][3]", optionTag: "B" },
        { optionText: "mat[3][2]", optionTag: "C" },
        { optionText: "mat[2,3]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of matrix multiplication for two n x n matrices (naive approach)?",
      options: [
        { optionText: "O(n^3)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method can flatten a 2D matrix into a 1D array in JavaScript?",
      options: [
        { optionText: "matrix.flat()", optionTag: "A" },
        { optionText: "matrix.join()", optionTag: "B" },
        { optionText: "matrix.slice()", optionTag: "C" },
        { optionText: "matrix.concat()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following checks if a matrix is square?",
      options: [
        { optionText: "rows === columns", optionTag: "A" },
        { optionText: "matrix.length === matrix[0].length", optionTag: "B" },
        { optionText: "matrix === matrix.T", optionTag: "C" },
        { optionText: "matrix.length == 2", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which algorithm is typically used for matrix chain multiplication optimization?",
      options: [
        { optionText: "Dynamic Programming", optionTag: "A" },
        { optionText: "Greedy Algorithm", optionTag: "B" },
        { optionText: "DFS", optionTag: "C" },
        { optionText: "BFS", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you transpose a matrix in JavaScript?",
      options: [
        { optionText: "Switch rows and columns", optionTag: "A" },
        { optionText: "Reverse each row", optionTag: "B" },
        { optionText: "Flatten then split", optionTag: "C" },
        { optionText: "Use matrix.sort()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the value of diagonal sum in a 3x3 identity matrix?",
      options: [
        { optionText: "3", optionTag: "A" },
        { optionText: "0", optionTag: "B" },
        { optionText: "9", optionTag: "C" },
        { optionText: "1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these represents a sparse matrix?",
      options: [
        { optionText: "Most elements are zero", optionTag: "A" },
        { optionText: "All elements are one", optionTag: "B" },
        { optionText: "Matrix of strings", optionTag: "C" },
        { optionText: "Random values", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to rotate a square matrix 90 degrees clockwise?",
      options: [
        { optionText: "Transpose and reverse rows", optionTag: "A" },
        { optionText: "Reverse and transpose", optionTag: "B" },
        { optionText: "Sort the matrix", optionTag: "C" },
        { optionText: "Swap corners", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    // 10 more
    {
      questionText: "Which matrix algorithm is used in graph shortest path problems?",
      options: [
        { optionText: "Floyd-Warshall", optionTag: "A" },
        { optionText: "Merge Sort", optionTag: "B" },
        { optionText: "Quick Sort", optionTag: "C" },
        { optionText: "Binary Search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the determinant of a 2x2 matrix [ [a, b], [c, d] ] equal?",
      options: [
        { optionText: "ad - bc", optionTag: "A" },
        { optionText: "ab + cd", optionTag: "B" },
        { optionText: "ac - bd", optionTag: "C" },
        { optionText: "ad + bc", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does LU decomposition do in matrix algebra?",
      options: [
        { optionText: "Splits a matrix into lower and upper triangular matrices", optionTag: "A" },
        { optionText: "Sorts the matrix", optionTag: "B" },
        { optionText: "Finds diagonal", optionTag: "C" },
        { optionText: "Calculates inverse", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the identity matrix property?",
      options: [
        { optionText: "A * I = A", optionTag: "A" },
        { optionText: "A + I = 0", optionTag: "B" },
        { optionText: "A - I = A", optionTag: "C" },
        { optionText: "A / I = 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you check if a matrix is symmetric?",
      options: [
        { optionText: "matrix === transpose(matrix)", optionTag: "A" },
        { optionText: "matrix.length == 0", optionTag: "B" },
        { optionText: "All elements same", optionTag: "C" },
        { optionText: "matrix is upper-triangular", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method returns the total number of rows in a matrix `mat`?",
      options: [
        { optionText: "mat.length", optionTag: "A" },
        { optionText: "mat.rows()", optionTag: "B" },
        { optionText: "mat.count()", optionTag: "C" },
        { optionText: "mat.length()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is used to store sparse matrices efficiently?",
      options: [
        { optionText: "List of non-zero values", optionTag: "A" },
        { optionText: "Full 2D array", optionTag: "B" },
        { optionText: "Nested objects", optionTag: "C" },
        { optionText: "Array of NaN", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation is invalid for matrices?",
      options: [
        { optionText: "Addition of different dimension matrices", optionTag: "A" },
        { optionText: "Matrix multiplication", optionTag: "B" },
        { optionText: "Scalar multiplication", optionTag: "C" },
        { optionText: "Transpose", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which library is often used in JavaScript for matrix computation?",
      options: [
        { optionText: "math.js", optionTag: "A" },
        { optionText: "React.js", optionTag: "B" },
        { optionText: "Express.js", optionTag: "C" },
        { optionText: "Lodash", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In matrix multiplication, if A is 2x3 and B is 3x2, the result is:",
      options: [
        { optionText: "2x2", optionTag: "A" },
        { optionText: "3x3", optionTag: "B" },
        { optionText: "2x3", optionTag: "C" },
        { optionText: "3x2", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;