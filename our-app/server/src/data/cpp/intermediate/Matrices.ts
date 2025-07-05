import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Matrices - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "cpp",
  description: "This quiz evaluates your intermediate understanding of matrix operations in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Matrices"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the time complexity of matrix multiplication for two n x n matrices?",
      options: [
        { optionText: "O(n^3)", optionTag: "A" },
        { optionText: "O(n^2)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true about transpose of a matrix?",
      options: [
        { optionText: "Rows become columns and columns become rows", optionTag: "A" },
        { optionText: "Only diagonal elements change", optionTag: "B" },
        { optionText: "Matrix is reversed", optionTag: "C" },
        { optionText: "Transpose is undefined for square matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the identity matrix?",
      options: [
        { optionText: "A square matrix with 1s on the diagonal and 0s elsewhere", optionTag: "A" },
        { optionText: "All elements are 1", optionTag: "B" },
        { optionText: "All elements are 0", optionTag: "C" },
        { optionText: "A matrix with negative diagonal", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which matrix has all elements zero?",
      options: [
        { optionText: "Zero matrix", optionTag: "A" },
        { optionText: "Null matrix", optionTag: "B" },
        { optionText: "Unit matrix", optionTag: "C" },
        { optionText: "Both A and B", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which condition must be met to add two matrices?",
      options: [
        { optionText: "Same number of rows and columns", optionTag: "A" },
        { optionText: "Same number of columns only", optionTag: "B" },
        { optionText: "Same number of rows only", optionTag: "C" },
        { optionText: "Same total elements", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of multiplying a matrix with an identity matrix?",
      options: [
        { optionText: "Same matrix", optionTag: "A" },
        { optionText: "Zero matrix", optionTag: "B" },
        { optionText: "Transpose", optionTag: "C" },
        { optionText: "Inverse", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How can a 2D array be declared in C++ for matrix?",
      options: [
        { optionText: "int matrix[10][10];", optionTag: "A" },
        { optionText: "int matrix(10,10);", optionTag: "B" },
        { optionText: "int matrix[10];", optionTag: "C" },
        { optionText: "matrix<int> m;", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does determinant of a matrix represent?",
      options: [
        { optionText: "Scaling factor of transformation", optionTag: "A" },
        { optionText: "Sum of rows", optionTag: "B" },
        { optionText: "Trace of matrix", optionTag: "C" },
        { optionText: "Number of rows", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is required to compute matrix inverse?",
      options: [
        { optionText: "Matrix should be square and determinant ≠ 0", optionTag: "A" },
        { optionText: "Matrix should be diagonal", optionTag: "B" },
        { optionText: "Matrix should have all 0s", optionTag: "C" },
        { optionText: "Matrix must be rectangular", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is a sparse matrix?",
      options: [
        { optionText: "Matrix with mostly zero elements", optionTag: "A" },
        { optionText: "Matrix with all 1s", optionTag: "B" },
        { optionText: "Matrix with even number of rows", optionTag: "C" },
        { optionText: "Matrix with undefined values", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },

    {
      questionText: "Which STL container can be used for dynamic matrix representation?",
      options: [
        { optionText: "vector<vector<int>>", optionTag: "A" },
        { optionText: "map<int>", optionTag: "B" },
        { optionText: "list<int>", optionTag: "C" },
        { optionText: "set<int>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you calculate the trace of a square matrix?",
      options: [
        { optionText: "Sum of diagonal elements", optionTag: "A" },
        { optionText: "Product of diagonal elements", optionTag: "B" },
        { optionText: "Sum of all elements", optionTag: "C" },
        { optionText: "Difference between max and min element", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is efficient for sparse matrix multiplication?",
      options: [
        { optionText: "Compressed Sparse Row", optionTag: "A" },
        { optionText: "Naive multiplication", optionTag: "B" },
        { optionText: "Merge sort", optionTag: "C" },
        { optionText: "Strassen’s Algorithm", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What will be the shape of result matrix when a 2x3 matrix is multiplied with 3x4?",
      options: [
        { optionText: "2x4", optionTag: "A" },
        { optionText: "3x3", optionTag: "B" },
        { optionText: "3x4", optionTag: "C" },
        { optionText: "4x3", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function is typically used to swap rows in a matrix during Gaussian elimination?",
      options: [
        { optionText: "swap()", optionTag: "A" },
        { optionText: "rotate()", optionTag: "B" },
        { optionText: "sort()", optionTag: "C" },
        { optionText: "reverse()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which matrix is symmetric?",
      options: [
        { optionText: "matrix[i][j] == matrix[j][i]", optionTag: "A" },
        { optionText: "All elements are same", optionTag: "B" },
        { optionText: "Only diagonal is non-zero", optionTag: "C" },
        { optionText: "Upper triangle is zero", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "In matrix chain multiplication, what is the goal?",
      options: [
        { optionText: "Minimize the number of multiplications", optionTag: "A" },
        { optionText: "Maximize result matrix", optionTag: "B" },
        { optionText: "Transpose matrix", optionTag: "C" },
        { optionText: "Convert to identity matrix", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which matrix operation requires matrices of same dimensions?",
      options: [
        { optionText: "Addition", optionTag: "A" },
        { optionText: "Multiplication", optionTag: "B" },
        { optionText: "Transpose", optionTag: "C" },
        { optionText: "Determinant", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to access the 2nd row and 3rd column element in a 2D array?",
      options: [
        { optionText: "arr[1][2]", optionTag: "A" },
        { optionText: "arr[2][3]", optionTag: "B" },
        { optionText: "arr[2][1]", optionTag: "C" },
        { optionText: "arr[3][2]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;