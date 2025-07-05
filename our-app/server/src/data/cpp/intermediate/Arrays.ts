import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "C++ Arrays - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "cpp",
  description: "This quiz evaluates intermediate knowledge of array operations and algorithms in C++.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Arrays"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "How can you reverse an array in C++ without using any library?",
      options: [
        { optionText: "Using a loop and swapping elements", optionTag: "A" },
        { optionText: "Using array.reverse()", optionTag: "B" },
        { optionText: "Using copy() method", optionTag: "C" },
        { optionText: "You cannot reverse without a library", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which algorithm can be used to sort an array in C++?",
      options: [
        { optionText: "std::sort()", optionTag: "A" },
        { optionText: "Arrays.sort()", optionTag: "B" },
        { optionText: "sortArray()", optionTag: "C" },
        { optionText: "sort()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of linear search in an unsorted array?",
      options: [
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(log n)", optionTag: "C" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `sizeof(arr)/sizeof(arr[0])` give in a static array?",
      options: [
        { optionText: "Total number of elements", optionTag: "A" },
        { optionText: "Size of one element", optionTag: "B" },
        { optionText: "Length of each element", optionTag: "C" },
        { optionText: "Index of last element", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you access an out-of-bound index in C++ array?",
      options: [
        { optionText: "Undefined behavior", optionTag: "A" },
        { optionText: "Compilation error", optionTag: "B" },
        { optionText: "It throws exception", optionTag: "C" },
        { optionText: "Returns 0", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which header is required for `std::sort()`?",
      options: [
        { optionText: "<algorithm>", optionTag: "A" },
        { optionText: "<sorting>", optionTag: "B" },
        { optionText: "<utility>", optionTag: "C" },
        { optionText: "<array>", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which loop is most efficient for iterating fixed-size arrays?",
      options: [
        { optionText: "for loop", optionTag: "A" },
        { optionText: "while loop", optionTag: "B" },
        { optionText: "do-while loop", optionTag: "C" },
        { optionText: "goto loop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How do you dynamically allocate an array in C++?",
      options: [
        { optionText: "int* arr = new int[size];", optionTag: "A" },
        { optionText: "int arr = new int[size];", optionTag: "B" },
        { optionText: "arr = malloc(size);", optionTag: "C" },
        { optionText: "new arr[size];", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following sorts the array in descending order using std::sort?",
      options: [
        { optionText: "std::sort(arr, arr+n, std::greater<int>())", optionTag: "A" },
        { optionText: "sort(arr, desc)", optionTag: "B" },
        { optionText: "sort(arr, n, decreasing)", optionTag: "C" },
        { optionText: "sort(arr, arr+n, >)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does `std::fill()` do?",
      options: [
        { optionText: "Fills array with a value", optionTag: "A" },
        { optionText: "Deletes all values", optionTag: "B" },
        { optionText: "Sorts the array", optionTag: "C" },
        { optionText: "Reverses the array", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which STL container is closest to a dynamic array?",
      options: [
        { optionText: "vector", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "queue", optionTag: "C" },
        { optionText: "map", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which function finds max element in a C++ array?",
      options: [
        { optionText: "std::max_element()", optionTag: "A" },
        { optionText: "max()", optionTag: "B" },
        { optionText: "find_max()", optionTag: "C" },
        { optionText: "array.max()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following returns a pointer to the first array element?",
      options: [
        { optionText: "arr", optionTag: "A" },
        { optionText: "&arr[0]", optionTag: "B" },
        { optionText: "*arr", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "How can you remove duplicates from a sorted array in C++?",
      options: [
        { optionText: "Using std::unique()", optionTag: "A" },
        { optionText: "Using remove()", optionTag: "B" },
        { optionText: "Using delete()", optionTag: "C" },
        { optionText: "Using pop()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is the time complexity of binary search in sorted array?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is true for 2D arrays?",
      options: [
        { optionText: "They are arrays of arrays", optionTag: "A" },
        { optionText: "They are flat structures", optionTag: "B" },
        { optionText: "They can't be created in C++", optionTag: "C" },
        { optionText: "They use triple indexing", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which STL algorithm counts occurrences of value in array?",
      options: [
        { optionText: "std::count()", optionTag: "A" },
        { optionText: "countValue()", optionTag: "B" },
        { optionText: "findValue()", optionTag: "C" },
        { optionText: "getCount()", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which loop is best suited for accessing both index and value in C++?",
      options: [
        { optionText: "for loop with index", optionTag: "A" },
        { optionText: "for-each loop", optionTag: "B" },
        { optionText: "while loop", optionTag: "C" },
        { optionText: "goto loop", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the `new` keyword do in array allocation?",
      options: [
        { optionText: "Allocates memory on heap", optionTag: "A" },
        { optionText: "Creates global array", optionTag: "B" },
        { optionText: "Creates array at compile time", optionTag: "C" },
        { optionText: "Frees memory", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What must be done to avoid memory leak in dynamic arrays?",
      options: [
        { optionText: "Use delete[]", optionTag: "A" },
        { optionText: "Use free()", optionTag: "B" },
        { optionText: "Use pop_back()", optionTag: "C" },
        { optionText: "No need to delete", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    }
  ]
};

export default quizData;