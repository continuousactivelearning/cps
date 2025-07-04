import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Arrays - Advanced Quiz",
  quizLevel: "advanced",
  lang: "cpp",
  description: "This quiz evaluates advanced knowledge of arrays, pointer manipulation, memory handling, and multidimensional array operations in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Arrays"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following correctly accesses the second row, third column of a 2D array `int arr[3][4]`?",
      options: [
        { optionText: "arr[1][2]", optionTag: "A" },
        { optionText: "arr[2][3]", optionTag: "B" },
        { optionText: "arr[3][2]", optionTag: "C" },
        { optionText: "arr[2][1]", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the output of `sizeof(arr)/sizeof(arr[0])` where arr is `int arr[5] = {1,2,3,4,5}`?",
      options: [
        { optionText: "5", optionTag: "A" },
        { optionText: "4", optionTag: "B" },
        { optionText: "20", optionTag: "C" },
        { optionText: "Undefined", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these correctly passes an array to a function by reference?",
      options: [
        { optionText: "void func(int (&arr)[5])", optionTag: "A" },
        { optionText: "void func(int *arr[5])", optionTag: "B" },
        { optionText: "void func(int arr)", optionTag: "C" },
        { optionText: "void func(int arr&[5])", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which C++ STL container is best for dynamic arrays with automatic resizing?",
      options: [
        { optionText: "std::vector", optionTag: "A" },
        { optionText: "std::array", optionTag: "B" },
        { optionText: "std::deque", optionTag: "C" },
        { optionText: "std::list", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `int* ptr = arr` mean if `arr` is an array?",
      options: [
        { optionText: "ptr points to the first element of arr", optionTag: "A" },
        { optionText: "ptr copies all elements of arr", optionTag: "B" },
        { optionText: "ptr is an array", optionTag: "C" },
        { optionText: "ptr is null", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following prevents buffer overflow in C++ arrays?",
      options: [
        { optionText: "std::array and bounds-checked access", optionTag: "A" },
        { optionText: "Dynamic allocation", optionTag: "B" },
        { optionText: "Raw arrays", optionTag: "C" },
        { optionText: "Manual indexing", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the result of accessing arr[-1]?",
      options: [
        { optionText: "Undefined behavior", optionTag: "A" },
        { optionText: "Returns first element", optionTag: "B" },
        { optionText: "Segmentation fault always", optionTag: "C" },
        { optionText: "Compiles but throws exception", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How are multidimensional arrays stored in memory?",
      options: [
        { optionText: "Row-major order", optionTag: "A" },
        { optionText: "Column-major order", optionTag: "B" },
        { optionText: "Linked list format", optionTag: "C" },
        { optionText: "Tree-like structure", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function sorts arrays in C++ STL?",
      options: [
        { optionText: "std::sort()", optionTag: "A" },
        { optionText: "std::qsort()", optionTag: "B" },
        { optionText: "sortArray()", optionTag: "C" },
        { optionText: "array.sort()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the correct syntax to declare a pointer to a 2D array?",
      options: [
        { optionText: "int (*ptr)[4];", optionTag: "A" },
        { optionText: "int *ptr[4];", optionTag: "B" },
        { optionText: "int ptr[4][];", optionTag: "C" },
        { optionText: "int &ptr[4];", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which STL container provides constant time random access?",
      options: [
        { optionText: "std::vector", optionTag: "A" },
        { optionText: "std::list", optionTag: "B" },
        { optionText: "std::deque", optionTag: "C" },
        { optionText: "std::map", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which keyword is used to define compile-time fixed arrays?",
      options: [
        { optionText: "constexpr", optionTag: "A" },
        { optionText: "static", optionTag: "B" },
        { optionText: "auto", optionTag: "C" },
        { optionText: "consteval", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which method removes all elements from a std::vector?",
      options: [
        { optionText: "clear()", optionTag: "A" },
        { optionText: "eraseAll()", optionTag: "B" },
        { optionText: "remove()", optionTag: "C" },
        { optionText: "pop_all()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function returns the number of elements in a std::array?",
      options: [
        { optionText: "size()", optionTag: "A" },
        { optionText: "length()", optionTag: "B" },
        { optionText: "count()", optionTag: "C" },
        { optionText: "capacity()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you reverse a std::vector in-place?",
      options: [
        { optionText: "std::reverse(vec.begin(), vec.end())", optionTag: "A" },
        { optionText: "vec.reverse()", optionTag: "B" },
        { optionText: "reverse(vec)", optionTag: "C" },
        { optionText: "vec.flip()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following statements is true for std::array?",
      options: [
        { optionText: "It is a wrapper around static C-style arrays", optionTag: "A" },
        { optionText: "It supports dynamic resizing", optionTag: "B" },
        { optionText: "It is always heap-allocated", optionTag: "C" },
        { optionText: "It does not support iterators", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which loop construct can traverse array elements using iterators?",
      options: [
        { optionText: "range-based for loop", optionTag: "A" },
        { optionText: "while loop", optionTag: "B" },
        { optionText: "do-while loop", optionTag: "C" },
        { optionText: "Only for loop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the use of `std::begin()` and `std::end()` for arrays?",
      options: [
        { optionText: "To get iterators to first and last+1 elements", optionTag: "A" },
        { optionText: "To delete an array", optionTag: "B" },
        { optionText: "To resize arrays", optionTag: "C" },
        { optionText: "To convert arrays to vectors", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of these best prevents out-of-bounds access in arrays?",
      options: [
        { optionText: "Bounds-checked access using at()", optionTag: "A" },
        { optionText: "Raw array access", optionTag: "B" },
        { optionText: "Manual pointer arithmetic", optionTag: "C" },
        { optionText: "Dynamic cast", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;