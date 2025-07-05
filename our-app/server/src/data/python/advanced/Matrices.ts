import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Matrices - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "This quiz assesses advanced matrix operations including rotation, transpose, search algorithms, and performance in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Matrices"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which Python library is best suited for high-performance matrix computations?",
      options: [
        { optionText: "NumPy", optionTag: "A" },
        { optionText: "Pandas", optionTag: "B" },
        { optionText: "Matplotlib", optionTag: "C" },
        { optionText: "Tkinter", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of rotating an NxN matrix 90 degrees in-place?",
      options: [
        { optionText: "O(N^2)", optionTag: "A" },
        { optionText: "O(N)", optionTag: "B" },
        { optionText: "O(log N)", optionTag: "C" },
        { optionText: "O(N^3)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which operation results in converting rows to columns in a matrix?",
      options: [
        { optionText: "Transpose", optionTag: "A" },
        { optionText: "Inverse", optionTag: "B" },
        { optionText: "Determinant", optionTag: "C" },
        { optionText: "Diagonalization", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which NumPy function is used to multiply two matrices?",
      options: [
        { optionText: "dot()", optionTag: "A" },
        { optionText: "multiply()", optionTag: "B" },
        { optionText: "add()", optionTag: "C" },
        { optionText: "product()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to find the inverse of a matrix in Python using NumPy?",
      options: [
        { optionText: "np.linalg.inv()", optionTag: "A" },
        { optionText: "np.inv()", optionTag: "B" },
        { optionText: "np.inverse()", optionTag: "C" },
        { optionText: "np.matInverse()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which condition must be true to calculate the inverse of a matrix?",
      options: [
        { optionText: "Matrix must be square and non-singular", optionTag: "A" },
        { optionText: "Matrix must be triangular", optionTag: "B" },
        { optionText: "All elements must be positive", optionTag: "C" },
        { optionText: "Matrix should be symmetric", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of multiplying a matrix with its inverse?",
      options: [
        { optionText: "Identity matrix", optionTag: "A" },
        { optionText: "Zero matrix", optionTag: "B" },
        { optionText: "Transpose matrix", optionTag: "C" },
        { optionText: "None of the above", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method is used to flatten a 2D NumPy array?",
      options: [
        { optionText: "flatten()", optionTag: "A" },
        { optionText: "reshape(1, -1)", optionTag: "B" },
        { optionText: "ravel()", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How can you access the diagonal elements of a NumPy matrix?",
      options: [
        { optionText: "np.diag()", optionTag: "A" },
        { optionText: "np.diagonal()", optionTag: "B" },
        { optionText: "matrix.diag()", optionTag: "C" },
        { optionText: "np.extract_diag()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm is best for searching in a sorted 2D matrix?",
      options: [
        { optionText: "Staircase search", optionTag: "A" },
        { optionText: "Linear search", optionTag: "B" },
        { optionText: "DFS", optionTag: "C" },
        { optionText: "Binary search", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the shape of a NumPy array created using np.zeros((3, 4))?",
      options: [
        { optionText: "(3, 4)", optionTag: "A" },
        { optionText: "(4, 3)", optionTag: "B" },
        { optionText: "(1, 3, 4)", optionTag: "C" },
        { optionText: "3x4x1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function can be used to compute the rank of a matrix in NumPy?",
      options: [
        { optionText: "np.linalg.matrix_rank()", optionTag: "A" },
        { optionText: "np.rank()", optionTag: "B" },
        { optionText: "np.matrix.rank()", optionTag: "C" },
        { optionText: "np.linalg.rank()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is true about sparse matrices?",
      options: [
        { optionText: "Contain mostly zero values", optionTag: "A" },
        { optionText: "Require more memory", optionTag: "B" },
        { optionText: "Are dense", optionTag: "C" },
        { optionText: "Cannot be used in Python", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which library helps manage sparse matrix representations?",
      options: [
        { optionText: "SciPy", optionTag: "A" },
        { optionText: "NumPy", optionTag: "B" },
        { optionText: "Matplotlib", optionTag: "C" },
        { optionText: "Pandas", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function gives you the transpose of a NumPy matrix?",
      options: [
        { optionText: "matrix.T", optionTag: "A" },
        { optionText: "transpose(matrix)", optionTag: "B" },
        { optionText: "matrix.transpose()", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which operation returns the determinant of a matrix?",
      options: [
        { optionText: "np.linalg.det()", optionTag: "A" },
        { optionText: "np.det()", optionTag: "B" },
        { optionText: "np.determinant()", optionTag: "C" },
        { optionText: "matrix.det()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How to create an identity matrix in Python using NumPy?",
      options: [
        { optionText: "np.identity()", optionTag: "A" },
        { optionText: "np.eye()", optionTag: "B" },
        { optionText: "np.ones()", optionTag: "C" },
        { optionText: "np.zeros()", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which function adds two NumPy matrices element-wise?",
      options: [
        { optionText: "np.add()", optionTag: "A" },
        { optionText: "+", optionTag: "B" },
        { optionText: "np.sum()", optionTag: "C" },
        { optionText: "np.element_add()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the shape of a matrix after using reshape(2, 3)?",
      options: [
        { optionText: "2 rows and 3 columns", optionTag: "A" },
        { optionText: "3 rows and 2 columns", optionTag: "B" },
        { optionText: "1D array of length 6", optionTag: "C" },
        { optionText: "Matrix of 6x1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;