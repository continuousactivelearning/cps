import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Pointers - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "This quiz evaluates your advanced understanding of memory referencing, object manipulation, and Java's reference semantics.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Pointers"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "How are pointers implemented in Java?",
      options: [
        { optionText: "Through memory address manipulation", optionTag: "A" },
        { optionText: "Via references to objects", optionTag: "B" },
        { optionText: "Direct pointer variables like in C++", optionTag: "C" },
        { optionText: "Java does not support referencing", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens when you assign one object reference to another in Java?",
      options: [
        { optionText: "A deep copy is created", optionTag: "A" },
        { optionText: "A new object is instantiated", optionTag: "B" },
        { optionText: "Both references point to the same object", optionTag: "C" },
        { optionText: "Memory is freed automatically", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is Java’s equivalent of a pointer dereference?",
      options: [
        { optionText: "Using the '->' operator", optionTag: "A" },
        { optionText: "Using the '*' operator", optionTag: "B" },
        { optionText: "Accessing methods or fields through a reference", optionTag: "C" },
        { optionText: "Memory manipulation using malloc()", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Why doesn't Java allow pointer arithmetic?",
      options: [
        { optionText: "To avoid syntax errors", optionTag: "A" },
        { optionText: "For platform independence and safety", optionTag: "B" },
        { optionText: "It increases performance", optionTag: "C" },
        { optionText: "Pointers are faster", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these is true regarding null references in Java?",
      options: [
        { optionText: "You can access members of a null reference", optionTag: "A" },
        { optionText: "null references are automatically reinitialized", optionTag: "B" },
        { optionText: "Dereferencing null throws NullPointerException", optionTag: "C" },
        { optionText: "null references are type safe", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which JVM component is responsible for resolving object references?",
      options: [
        { optionText: "JIT Compiler", optionTag: "A" },
        { optionText: "Class Loader", optionTag: "B" },
        { optionText: "Heap Manager", optionTag: "C" },
        { optionText: "Reference Handler", optionTag: "D" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Can we manipulate memory directly in Java like in C using pointers?",
      options: [
        { optionText: "Yes, using pointer class", optionTag: "A" },
        { optionText: "Yes, through JNI (native code)", optionTag: "B" },
        { optionText: "Yes, Java supports unsafe operations", optionTag: "C" },
        { optionText: "No, Java doesn’t allow this", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the impact of assigning null to a reference?",
      options: [
        { optionText: "Deletes the object", optionTag: "A" },
        { optionText: "Marks object for GC if no references remain", optionTag: "B" },
        { optionText: "Frees heap memory instantly", optionTag: "C" },
        { optionText: "Invokes destructor", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "How are arrays treated in terms of references?",
      options: [
        { optionText: "Arrays are value types", optionTag: "A" },
        { optionText: "Arrays are primitive types", optionTag: "B" },
        { optionText: "Arrays are reference types", optionTag: "C" },
        { optionText: "Arrays are compiled separately", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What happens if a final reference variable is assigned to a new object?",
      options: [
        { optionText: "Compile-time error", optionTag: "A" },
        { optionText: "Runtime exception", optionTag: "B" },
        { optionText: "Object is copied", optionTag: "C" },
        { optionText: "Allowed only in constructor", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is passed when an object is sent to a method in Java?",
      options: [
        { optionText: "A copy of the object", optionTag: "A" },
        { optionText: "A pointer to the object", optionTag: "B" },
        { optionText: "The object's reference", optionTag: "C" },
        { optionText: "A clone of the object", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which keyword in Java restricts reassigning of references?",
      options: [
        { optionText: "static", optionTag: "A" },
        { optionText: "const", optionTag: "B" },
        { optionText: "final", optionTag: "C" },
        { optionText: "sealed", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What does the '==' operator compare for object references?",
      options: [
        { optionText: "Memory contents", optionTag: "A" },
        { optionText: "Reference address", optionTag: "B" },
        { optionText: "Hash codes", optionTag: "C" },
        { optionText: "Field-by-field values", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the primary reason pointers were excluded from Java?",
      options: [
        { optionText: "To simplify syntax", optionTag: "A" },
        { optionText: "To avoid memory leaks and pointer errors", optionTag: "B" },
        { optionText: "To speed up compilation", optionTag: "C" },
        { optionText: "To ensure OS independence", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which class in Java can simulate pointer-like behavior using memory allocation?",
      options: [
        { optionText: "ByteArrayOutputStream", optionTag: "A" },
        { optionText: "Unsafe", optionTag: "B" },
        { optionText: "RandomAccessFile", optionTag: "C" },
        { optionText: "ObjectInputStream", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which Java feature allows native code execution with real pointers?",
      options: [
        { optionText: "JNI", optionTag: "A" },
        { optionText: "JVM Hotspot", optionTag: "B" },
        { optionText: "JRE", optionTag: "C" },
        { optionText: "JDK compiler", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What kind of memory is allocated to object references?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Heap", optionTag: "B" },
        { optionText: "Register", optionTag: "C" },
        { optionText: "Static", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens if you use a reference before assigning a value?",
      options: [
        { optionText: "Segmentation fault", optionTag: "A" },
        { optionText: "ReferenceException", optionTag: "B" },
        { optionText: "Compilation error", optionTag: "C" },
        { optionText: "Garbage collection", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which structure stores object references in Java?",
      options: [
        { optionText: "Stack", optionTag: "A" },
        { optionText: "Heap", optionTag: "B" },
        { optionText: "Constant pool", optionTag: "C" },
        { optionText: "Thread register", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is 'aliasing' in reference context?",
      options: [
        { optionText: "Reference points to multiple objects", optionTag: "A" },
        { optionText: "Multiple references point to the same object", optionTag: "B" },
        { optionText: "Recursive reference loop", optionTag: "C" },
        { optionText: "Cross-class memory access", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;