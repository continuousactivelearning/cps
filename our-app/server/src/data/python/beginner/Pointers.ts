import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Pointers - Beginner Quiz",
  quizLevel: "beginner",
  lang: "python",
  description: "This quiz tests your understanding of reference and object memory behavior in Python.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Pointers"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "In Python, variables are:",
      options: [
        { optionText: "References to objects", optionTag: "A" },
        { optionText: "Fixed memory locations", optionTag: "B" },
        { optionText: "Pointers like in C", optionTag: "C" },
        { optionText: "Direct values", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does the 'id()' function return in Python?",
      options: [
        { optionText: "Data type of variable", optionTag: "C" },
        { optionText: "Value of variable", optionTag: "B" },
        { optionText: "Memory address of object", optionTag: "A" },
        { optionText: "Object name", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which statement about Python variables is true?",
      options: [
        { optionText: "They store memory addresses", optionTag: "D" },
        { optionText: "They are pointers like in C++", optionTag: "C" },
        { optionText: "They are fixed types", optionTag: "B" },
        { optionText: "They refer to objects", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which keyword is used to create a copy of an object in Python?",
      options: [
        { optionText: "clone()", optionTag: "B" },
        { optionText: "copy", optionTag: "D" },
        { optionText: "new", optionTag: "C" },
        { optionText: "ref", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Assignment in Python creates:",
      options: [
        { optionText: "A new copy", optionTag: "C" },
        { optionText: "A reference", optionTag: "B" },
        { optionText: "A memory block", optionTag: "D" },
        { optionText: "A new pointer", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which module provides shallow and deep copy tools?",
      options: [
        { optionText: "copy", optionTag: "A" },
        { optionText: "heapq", optionTag: "D" },
        { optionText: "os", optionTag: "C" },
        { optionText: "mem", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Deep copy creates:",
      options: [
        { optionText: "New object and references", optionTag: "D" },
        { optionText: "Same object", optionTag: "A" },
        { optionText: "Only new reference", optionTag: "B" },
        { optionText: "Shared object", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which is a mutable type in Python?",
      options: [
        { optionText: "tuple", optionTag: "B" },
        { optionText: "str", optionTag: "D" },
        { optionText: "list", optionTag: "C" },
        { optionText: "int", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens if you modify a list referenced by two variables?",
      options: [
        { optionText: "Both change", optionTag: "C" },
        { optionText: "Error occurs", optionTag: "D" },
        { optionText: "Only one changes", optionTag: "B" },
        { optionText: "None change", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How do you prevent side effects when copying lists?",
      options: [
        { optionText: "Use deep copy", optionTag: "A" },
        { optionText: "Assign directly", optionTag: "D" },
        { optionText: "Use shallow reference", optionTag: "C" },
        { optionText: "Use global keyword", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does 'is' operator check?",
      options: [
        { optionText: "Value equality", optionTag: "B" },
        { optionText: "Object identity", optionTag: "D" },
        { optionText: "Type check", optionTag: "C" },
        { optionText: "Existence", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which returns True? a = [1]; b = a",
      options: [
        { optionText: "a == b", optionTag: "A" },
        { optionText: "id(a) != id(b)", optionTag: "B" },
        { optionText: "a is not b", optionTag: "C" },
        { optionText: "a != b", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is a shallow copy?",
      options: [
        { optionText: "copy.copy()", optionTag: "C" },
        { optionText: "deepcopy()", optionTag: "B" },
        { optionText: "list()", optionTag: "A" },
        { optionText: "clone()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does the 'is not' operator do?",
      options: [
        { optionText: "Checks identity inequality", optionTag: "B" },
        { optionText: "Compares values", optionTag: "D" },
        { optionText: "Checks null", optionTag: "C" },
        { optionText: "Compares references", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Mutable types in Python include:",
      options: [
        { optionText: "dict", optionTag: "A" },
        { optionText: "int", optionTag: "B" },
        { optionText: "str", optionTag: "C" },
        { optionText: "tuple", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What does id(x) == id(y) imply?",
      options: [
        { optionText: "x and y are same object", optionTag: "D" },
        { optionText: "x and y are equal in value", optionTag: "B" },
        { optionText: "x and y are different", optionTag: "C" },
        { optionText: "They are different types", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does copy.deepcopy() do?",
      options: [
        { optionText: "Clones all objects recursively", optionTag: "C" },
        { optionText: "Copies only references", optionTag: "D" },
        { optionText: "Makes one level copy", optionTag: "A" },
        { optionText: "Duplicates object identity", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which gives different IDs?",
      options: [
        { optionText: "list1 = [1]; list2 = list1[:]", optionTag: "A" },
        { optionText: "list1 = [1]; list2 = list1", optionTag: "B" },
        { optionText: "list1 = list(); list2 = list1", optionTag: "D" },
        { optionText: "list1 = []; list2 = list1", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "All variables in Python are:",
      options: [
        { optionText: "Object references", optionTag: "B" },
        { optionText: "Pointers", optionTag: "C" },
        { optionText: "Memory addresses", optionTag: "A" },
        { optionText: "Copy values", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens on reassigning a list?",
      options: [
        { optionText: "New object created", optionTag: "C" },
        { optionText: "Old object mutated", optionTag: "A" },
        { optionText: "Error raised", optionTag: "D" },
        { optionText: "Nothing happens", optionTag: "B" }
      ],
      correctOption: "C",
      score: 1
    }
  ]
};

export default quizData;