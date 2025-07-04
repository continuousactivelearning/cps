import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Python Pointers - Advanced Quiz",
  quizLevel: "advanced",
  lang: "python",
  description: "Test your understanding of pointers and references in Python-like contexts.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Pointers",
  },
  quizScore: 20,
  questions: [
    {
      questionText: "How are variables passed to functions in Python?",
      options: [
        { optionText: "By value", optionTag: "A" },
        { optionText: "By reference", optionTag: "B" },
        { optionText: "By object reference", optionTag: "C" },
        { optionText: "By pointer", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "Which Python built-in type is mutable?",
      options: [
        { optionText: "int", optionTag: "A" },
        { optionText: "str", optionTag: "B" },
        { optionText: "tuple", optionTag: "C" },
        { optionText: "list", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "What does the id() function return?",
      options: [
        { optionText: "Memory location of a variable", optionTag: "A" },
        { optionText: "Type of a variable", optionTag: "B" },
        { optionText: "Value of a variable", optionTag: "C" },
        { optionText: "Size of a variable", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is a common consequence of aliasing in Python?",
      options: [
        { optionText: "Segmentation fault", optionTag: "A" },
        { optionText: "Memory leak", optionTag: "B" },
        { optionText: "Unintended side effects", optionTag: "C" },
        { optionText: "Compilation error", optionTag: "D" },
      ],
      correctOption: "C",
      score: 1,
    },
    {
      questionText: "How can you copy a list without referencing the original list?",
      options: [
        { optionText: "Using list.copy()", optionTag: "A" },
        { optionText: "Using = operator", optionTag: "B" },
        { optionText: "By id()", optionTag: "C" },
        { optionText: "By referencing", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which module is used for deep copy in Python?",
      options: [
        { optionText: "copy", optionTag: "A" },
        { optionText: "os", optionTag: "B" },
        { optionText: "sys", optionTag: "C" },
        { optionText: "collections", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which method creates a shallow copy of a list?",
      options: [
        { optionText: "list.copy()", optionTag: "A" },
        { optionText: "deepcopy()", optionTag: "B" },
        { optionText: "list.clone()", optionTag: "C" },
        { optionText: "list.clear()", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What happens when two variables reference the same list and one modifies it?",
      options: [
        { optionText: "The other variable sees the change", optionTag: "A" },
        { optionText: "Both variables get deleted", optionTag: "B" },
        { optionText: "Nothing happens", optionTag: "C" },
        { optionText: "An error occurs", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following will NOT result in aliasing?",
      options: [
        { optionText: "list1 = list2", optionTag: "A" },
        { optionText: "list1 = list2.copy()", optionTag: "B" },
        { optionText: "list1 = list2[:]", optionTag: "C" },
        { optionText: "list1 = copy.deepcopy(list2)", optionTag: "D" },
      ],
      correctOption: "B",
      score: 1,
    },
    {
      questionText: "What will `id(list1) == id(list2)` return if list1 and list2 point to the same list?",
      options: [
        { optionText: "True", optionTag: "A" },
        { optionText: "False", optionTag: "B" },
        { optionText: "None", optionTag: "C" },
        { optionText: "Error", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which concept in Python resembles pointer behavior in C?",
      options: [
        { optionText: "References", optionTag: "A" },
        { optionText: "Generators", optionTag: "B" },
        { optionText: "Iterators", optionTag: "C" },
        { optionText: "Decorators", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is the output of: `a = [1,2]; b = a; b.append(3); print(a)`?",
      options: [
        { optionText: "[1, 2, 3]", optionTag: "A" },
        { optionText: "[1, 2]", optionTag: "B" },
        { optionText: "[3]", optionTag: "C" },
        { optionText: "Error", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What does `del a` do in Python?",
      options: [
        { optionText: "Deletes reference to object", optionTag: "A" },
        { optionText: "Deletes the object permanently", optionTag: "B" },
        { optionText: "Deletes memory", optionTag: "C" },
        { optionText: "Resets the variable", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "What is aliasing in Python?",
      options: [
        { optionText: "Two names pointing to same object", optionTag: "A" },
        { optionText: "Copying list with copy()", optionTag: "B" },
        { optionText: "List slicing", optionTag: "C" },
        { optionText: "Creating tuple", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following creates a new reference?",
      options: [
        { optionText: "b = a", optionTag: "A" },
        { optionText: "b = a.copy()", optionTag: "B" },
        { optionText: "b = a[:]", optionTag: "C" },
        { optionText: "All of the above", optionTag: "D" },
      ],
      correctOption: "D",
      score: 1,
    },
    {
      questionText: "How do you import deepcopy?",
      options: [
        { optionText: "from copy import deepcopy", optionTag: "A" },
        { optionText: "import deepcopy", optionTag: "B" },
        { optionText: "from deepcopy import copy", optionTag: "C" },
        { optionText: "import copy.deep", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which will cause changes in both variables?",
      options: [
        { optionText: "list1 = list2", optionTag: "A" },
        { optionText: "list1 = list2.copy()", optionTag: "B" },
        { optionText: "list1 = copy.deepcopy(list2)", optionTag: "C" },
        { optionText: "list1 = list2[:]", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which concept avoids shared reference issues?",
      options: [
        { optionText: "Deep Copy", optionTag: "A" },
        { optionText: "Shallow Copy", optionTag: "B" },
        { optionText: "Aliasing", optionTag: "C" },
        { optionText: "Pointer Swapping", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which of the following is immutable?",
      options: [
        { optionText: "tuple", optionTag: "A" },
        { optionText: "list", optionTag: "B" },
        { optionText: "dict", optionTag: "C" },
        { optionText: "set", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    },
    {
      questionText: "Which function compares memory locations?",
      options: [
        { optionText: "is", optionTag: "A" },
        { optionText: "==", optionTag: "B" },
        { optionText: "cmp()", optionTag: "C" },
        { optionText: "equals()", optionTag: "D" },
      ],
      correctOption: "A",
      score: 1,
    }
  ]
};

export default quizData;