// Update Question interface and questions array to match Quiz model
export interface Question {
  questionText: string;
  options: { optionText: string; optionTag: 'A' | 'B' | 'C' | 'D' }[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  language: string;
  difficulty: string;
  score: number;
}

export const questions: Question[] = [
  // Easy C++ Questions
  {
    questionText: "What is the time complexity of accessing an element in an array by index?",
    options: [
      { optionText: "O(1)", optionTag: "A" },
      { optionText: "O(n)", optionTag: "B" },
      { optionText: "O(log n)", optionTag: "C" },
      { optionText: "O(n²)", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "Array access by index is constant time O(1) as we can directly calculate the memory address.",
    language: "C++",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "Which data structure follows LIFO (Last In First Out) principle?",
    options: [
      { optionText: "Queue", optionTag: "A" },
      { optionText: "Stack", optionTag: "B" },
      { optionText: "Array", optionTag: "C" },
      { optionText: "Linked List", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "Stack follows LIFO principle where the last element added is the first one to be removed.",
    language: "C++",
    difficulty: "easy",
    score: 1
  },
{
questionText:"What is the correct file extension for C++ source files?",
options:[
  { optionText: ".cp", optionTag: "A" },
  { optionText: ".cpp", optionTag: "B" },
  { optionText: ".c++", optionTag: "C" },
  { optionText: ".ccp", optionTag: "D" }
],
correctOption: 'C',
explanation:"cpp is the standard extension for C++ files",
language:"C++",
difficulty:"easy",
score: 1},
{
    questionText: "Which operator is used to access members of a class using a pointer?",
    options: [
      { optionText: ".", optionTag: "A" },
      { optionText: "->", optionTag: "B" },
      { optionText: "::", optionTag: "C" },
      { optionText: "&", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "'->' is used to access members of a class or struct via a pointer.",
    language: "C++",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "Which of the following is used to output data to the console in C++?",
    options: [
      { optionText: "cout <<", optionTag: "A" },
      { optionText: "print()", optionTag: "B" },
      { optionText: "echo", optionTag: "C" },
      { optionText: "Console.WriteLine()", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "'cout <<' is used with the iostream library to display output.",
    language: "C++",
    difficulty: "easy",
    score: 1
  },

{
  questionText: "Which operator is used to allocate memory dynamically in C++?",
  options: [
    { optionText: "malloc", optionTag: "A" },
    { optionText: "allocate", optionTag: "B" },
    { optionText: "new", optionTag: "C" },
    { optionText: "calloc", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "`new` is the correct C++ operator for dynamic memory allocation.",
  language: "C++",
  difficulty: "easy",
  score: 1
},
{
  questionText: "What is the output of: `std::cout << 5 / 2;`?",
  options: [
    { optionText: "2.5", optionTag: "A" },
    { optionText: "2", optionTag: "B" },
    { optionText: "2.0", optionTag: "C" },
    { optionText: "Compiler Error", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "Both operands are integers, so integer division yields 2.",
  language: "C++",
  difficulty: "easy",
  score: 1
},
{
  questionText: "Which of the following is not a basic data type in C++?",
  options: [
    { optionText: "int", optionTag: "A" },
    { optionText: "bool", optionTag: "B" },
    { optionText: "float", optionTag: "C" },
    { optionText: "byte", optionTag: "D" }
  ],
  correctOption: 'D',
  explanation: "`byte` is not a built-in basic data type in standard C++.",
  language: "C++",
  difficulty: "easy",
  score: 1
},
{
  questionText: "Which header file is needed for input/output operations in C++?",
  options: [
    { optionText: "iostream", optionTag: "A" },
    { optionText: "stdio.h", optionTag: "B" },
    { optionText: "fstream", optionTag: "C" },
    { optionText: "input.h", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "`iostream` is used for standard I/O in C++.",
  language: "C++",
  difficulty: "easy",
  score: 1
},
{
  questionText: "Which keyword is used to define a constant in C++?",
  options: [
    { optionText: "final", optionTag: "A" },
    { optionText: "const", optionTag: "B" },
    { optionText: "define", optionTag: "C" },
    { optionText: "static", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "`const` is used in C++ to declare constant values.",
  language: "C++",
  difficulty: "easy",
  score: 1
},

  // Intermediate C++ Questions

{
  questionText: "What will be the output?\n\nint a = 3;\nint b = 2;\nstd::cout << a++ * ++b;",
  options: [
    { optionText: "6", optionTag: "A" },
    { optionText: "9", optionTag: "B" },
    { optionText: "8", optionTag: "C" },
    { optionText: "Error", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "`a++` is 3 (post-increment), `++b` is 3, so 3 * 3 = 9. Then a becomes 4.",
  language: "C++",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "Which STL container does not allow duplicate keys?",
  options: [
    { optionText: "set", optionTag: "A" },
    { optionText: "vector", optionTag: "B" },
    { optionText: "map", optionTag: "C" },
    { optionText: "multiset", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "`set` stores unique elements in sorted order and doesn't allow duplicates.",
  language: "C++",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "Which of the following is used to define a class template in C++?",
  options: [
    { optionText: "template<>", optionTag: "A" },
    { optionText: "template<class T>", optionTag: "B" },
    { optionText: "class template", optionTag: "C" },
    { optionText: "template()", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "`template<class T>` defines a class template.",
  language: "C++",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "Which access specifier allows access to class members only from the same class?",
  options: [
    { optionText: "public", optionTag: "A" },
    { optionText: "private", optionTag: "B" },
    { optionText: "protected", optionTag: "C" },
    { optionText: "global", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "`private` members are accessible only within the same class.",
  language: "C++",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "Which concept allows functions to have the same name with different parameters?",
  options: [
    { optionText: "Inheritance", optionTag: "A" },
    { optionText: "Overloading", optionTag: "B" },
    { optionText: "Encapsulation", optionTag: "C" },
    { optionText: "Abstraction", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "Function overloading allows multiple functions with the same name but different parameter types.",
  language: "C++",
  difficulty: "intermediate",
  score: 1
},

  {
    questionText: "What is the output of: `sizeof(char)` on most systems?",
    options: [
      { optionText: "1", optionTag: "A" },
      { optionText: "2", optionTag: "B" },
      { optionText: "4", optionTag: "C" },
      { optionText: "8", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "The size of a char is 1 byte on almost all platforms.",
    language: "C++",
    difficulty: "intermediate",
    score: 1
  },
  {
    questionText: "Which of the following best describes a constructor?",
    options: [
      { optionText: "A function that destroys an object", optionTag: "A" },
      { optionText: "A function that initializes an object", optionTag: "B" },
      { optionText: "A function that copies objects", optionTag: "C" },
      { optionText: "A static method", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "Constructors initialize new objects when they are created.",
    language: "C++",
    difficulty: "intermediate",
    score: 1
  },
  {
    questionText: "What is the difference between `++i` and `i++`?",
    options: [
      { optionText: "++i returns the new value, i++ returns the original value", optionTag: "A" },
      { optionText: "They are always the same", optionTag: "B" },
      { optionText: "++i is slower", optionTag: "C" },
      { optionText: "i++ modifies i, ++i does not", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "`++i` increments before returning, `i++` returns then increments.",
    language: "C++",
    difficulty: "intermediate",
    score: 1
  },
  {
    questionText: "Which STL container provides fast search, insert and delete operations?",
    options: [
      { optionText: "vector", optionTag: "A" },
      { optionText: "set", optionTag: "B" },
      { optionText: "list", optionTag: "C" },
      { optionText: "queue", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "`set` in C++ is usually implemented as a balanced BST (like red-black tree).",
    language: "C++",
    difficulty: "intermediate",
    score: 1
  },
  {
      questionText: "What does the 'new' keyword do in C++?",
      options: [
        { optionText: "Defines a variable", optionTag: "A" },
        { optionText: "Deletes memory", optionTag: "B" },
        { optionText: "Dynamically allocates memory", optionTag: "C" },
        { optionText: "Initializes a function", optionTag: "D" }
      ],
      correctOption: 'C',
      explanation: "`new` dynamically allocates memory for an object or variable.",
      language: "C++",
      difficulty: "intermediate",
      score: 1
    },

  // Hard C++ Questions
{
  questionText: "What is the time complexity of inserting an element at the beginning of a std::vector?",
  options: [
    { optionText: "O(1)", optionTag: "A" },
    { optionText: "O(log n)", optionTag: "B" },
    { optionText: "O(n)", optionTag: "C" },
    { optionText: "O(n log n)", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "Inserting at the beginning of a vector requires shifting all elements, which is O(n).",
  language: "C++",
  difficulty: "hard",
  score: 1
},
{
  questionText: "What is the primary use of a virtual destructor in C++?",
  options: [
    { optionText: "To override destructors", optionTag: "A" },
    { optionText: "To avoid memory leaks in polymorphic base classes", optionTag: "B" },
    { optionText: "To implement templates", optionTag: "C" },
    { optionText: "To enforce inheritance", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "A virtual destructor ensures the derived class's destructor is called, preventing memory leaks.",
  language: "C++",
  difficulty: "hard",
  score: 1
},
{
  questionText: "Which features are supported by C++?",
  options: [
    { optionText: "Multiple Inheritance", optionTag: "A" },
    { optionText: "Garbage Collection", optionTag: "B" },
    { optionText: "Templates", optionTag: "C" },
    { optionText: "Operator Overloading", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "C++ supports multiple inheritance, templates, and operator overloading. Garbage collection is not built-in.",
  language: "C++",
  difficulty: "hard",
  score: 1
},
{
  questionText: "Which data structure is best suited for implementing a LRU (Least Recently Used) cache?",
  options: [
    { optionText: "Queue", optionTag: "A" },
    { optionText: "Stack", optionTag: "B" },
    { optionText: "HashMap + Doubly Linked List", optionTag: "C" },
    { optionText: "Set", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "LRU Cache is efficiently implemented using a HashMap for O(1) access and a doubly linked list for ordering.",
  language: "C++",
  difficulty: "hard",
  score: 1
},
  {
    questionText: "Which feature of C++ allows the same function to behave differently based on input?",
    options: [
      { optionText: "Inheritance", optionTag: "A" },
      { optionText: "Polymorphism", optionTag: "B" },
      { optionText: "Encapsulation", optionTag: "C" },
      { optionText: "Abstraction", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "Polymorphism enables different behavior for functions depending on the input types.",
    language: "C++",
    difficulty: "hard",
    score: 1
  },
  {
      questionText: "What is a virtual function in C++?",
      options: [
        { optionText: "A function declared in a base class that can be overridden", optionTag: "A" },
        { optionText: "A function that runs in the background", optionTag: "B" },
        { optionText: "A function without a body", optionTag: "C" },
        { optionText: "A static method", optionTag: "D" }
      ],
      correctOption: 'A',
      explanation: "Virtual functions support runtime polymorphism and can be overridden in derived classes.",
      language: "C++",
      difficulty: "hard",
      score: 1
    },
  {
    questionText: "Which C++ feature allows you to use the same operator on different types?",
    options: [
      { optionText: "Function overloading", optionTag: "A" },
      { optionText: "Operator overloading", optionTag: "B" },
      { optionText: "Templates", optionTag: "C" },
      { optionText: "Inheritance", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "Operator overloading allows operators to work with user-defined types.",
    language: "C++",
    difficulty: "hard",
    score: 1
  },
  {
      questionText: "What is the purpose of `std::move` in C++?",
      options: [
        { optionText: "To delete an object", optionTag: "A" },
        { optionText: "To copy an object", optionTag: "B" },
        { optionText: "To perform a deep copy", optionTag: "C" },
        { optionText: "To enable move semantics", optionTag: "D" }
      ],
      correctOption: 'D',
      explanation: "`std::move` allows efficient transfer of resources from one object to another.",
      language: "C++",
      difficulty: "hard",
      score: 1
    },
  {
    questionText: "Which smart pointer releases the managed object when it goes out of scope?",
    options: [
      { optionText: "shared_ptr", optionTag: "A" },
      { optionText: "auto_ptr", optionTag: "B" },
      { optionText: "unique_ptr", optionTag: "C" },
      { optionText: "raw pointer", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "`unique_ptr` ensures a single owner and automatically releases memory when out of scope.",
    language: "C++",
    difficulty: "hard",
    score: 1
  },
   // Easy Java Questions
{
  questionText: "Which keyword is used to create a class in Java?",
  options: [
    { optionText: "define", optionTag: "A" },
    { optionText: "struct", optionTag: "B" },
    { optionText: "class", optionTag: "C" },
    { optionText: "create", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "`class` is the correct keyword to define a class in Java.",
  language: "Java",
  difficulty: "easy",
  score: 1
},
{
  questionText: "Which method is the entry point for a Java application?",
  options: [
    { optionText: "start()", optionTag: "A" },
    { optionText: "run()", optionTag: "B" },
    { optionText: "main()", optionTag: "C" },
    { optionText: "init()", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "`main()` is the standard entry point for Java applications.",
  language: "Java",
  difficulty: "easy",
  score: 1
},
{
  questionText: "Which of these is not a primitive data type in Java?",
  options: [
    { optionText: "int", optionTag: "A" },
    { optionText: "float", optionTag: "B" },
    { optionText: "boolean", optionTag: "C" },
    { optionText: "String", optionTag: "D" }
  ],
  correctOption: 'D',
  explanation: "`String` is a class in Java, not a primitive data type.",
  language: "Java",
  difficulty: "easy",
  score: 1
},
{
  questionText: "Which symbol is used to access a method or property of an object in Java?",
  options: [
    { optionText: ".", optionTag: "A" },
    { optionText: "::", optionTag: "B" },
    { optionText: "->", optionTag: "C" },
    { optionText: ":", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "The dot (`.`) operator is used to access members of an object.",
  language: "Java",
  difficulty: "easy",
  score: 1
},
{
  questionText: "Which Java collection allows duplicate elements?",
  options: [
    { optionText: "Set", optionTag: "A" },
    { optionText: "List", optionTag: "B" },
    { optionText: "Map", optionTag: "C" },
    { optionText: "HashSet", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "`List` allows duplicate elements. `Set` and `HashSet` do not.",
  language: "Java",
  difficulty: "easy",
  score: 1
},
  {
    questionText: "Which keyword is used to define a class in Java?",
    options: [
      { optionText: "class", optionTag: "A" },
      { optionText: "Class", optionTag: "B" },
      { optionText: "struct", optionTag: "C" },
      { optionText: "define", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "In Java, the `class` keyword is used to define a class.",
    language: "Java",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "Which of the following is the correct way to start the main method in Java?",
    options: [
      { optionText: "public static void main(String[] args)", optionTag: "A" },
      { optionText: "public void main(String[] args)", optionTag: "B" },
      { optionText: "static void main(String args)", optionTag: "C" },
      { optionText: "void main()", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "`public static void main(String[] args)` is the standard Java entry point.",
    language: "Java",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "Which data type is used to store true or false values in Java?",
    options: [
      { optionText: "bit", optionTag: "A" },
      { optionText: "bool", optionTag: "B" },
      { optionText: "boolean", optionTag: "C" },
      { optionText: "truth", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "The `boolean` type is used to store true or false values in Java.",
    language: "Java",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "How do you declare a constant in Java?",
    options: [
      { optionText: "const int x = 10;", optionTag: "A" },
      { optionText: "final int x = 10;", optionTag: "B" },
      { optionText: "int const x = 10;", optionTag: "C" },
      { optionText: "int x := 10;", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "`final` is used in Java to declare constants.",
    language: "Java",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "Which symbol is used to import a package in Java?",
    options: [
      { optionText: "import", optionTag: "A" },
      { optionText: "include", optionTag: "B" },
      { optionText: "#import", optionTag: "C" },
      { optionText: "use", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "The `import` keyword is used to include packages in Java.",
    language: "Java",
    difficulty: "easy",
    score: 1
  },


  // Intermediate Java Questions
  {
    questionText: "What is the size of an `int` in Java?",
    options: [
      { optionText: "2 bytes", optionTag: "A" },
      { optionText: "4 bytes", optionTag: "B" },
      { optionText: "8 bytes", optionTag: "C" },
      { optionText: "Depends on system", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "In Java, an `int` is always 4 bytes regardless of platform.",
    language: "Java",
    difficulty: "intermediate",
    score: 1
  },
  {
    questionText: "Which Java keyword is used to inherit a class?",
    options: [
      { optionText: "inherits", optionTag: "A" },
      { optionText: "extends", optionTag: "B" },
      { optionText: "implements", optionTag: "C" },
      { optionText: "derives", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "The `extends` keyword is used to inherit from a superclass in Java.",
    language: "Java",
    difficulty: "intermediate",
    score: 1
  },
  {
    questionText: "Which collection allows unique elements and maintains insertion order?",
    options: [
      { optionText: "ArrayList", optionTag: "A" },
      { optionText: "HashSet", optionTag: "B" },
      { optionText: "LinkedHashSet", optionTag: "C" },
      { optionText: "TreeSet", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "`LinkedHashSet` maintains insertion order and does not allow duplicates.",
    language: "Java",
    difficulty: "intermediate",
    score: 1
  },
  {
    questionText: "What is method overloading in Java?",
    options: [
      { optionText: "Defining multiple methods with the same name but different parameters", optionTag: "A" },
      { optionText: "Using the same method in multiple classes", optionTag: "B" },
      { optionText: "Overriding a method in a subclass", optionTag: "C" },
      { optionText: "Calling a method from another class", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "Method overloading allows defining multiple methods with the same name but different signatures.",
    language: "Java",
    difficulty: "intermediate",
    score: 1
  },
  {
    questionText: "What is the default value of a boolean variable in Java?",
    options: [
      { optionText: "true", optionTag: "A" },
      { optionText: "false", optionTag: "B" },
      { optionText: "0", optionTag: "C" },
      { optionText: "null", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "Boolean instance variables default to `false` in Java.",
    language: "Java",
    difficulty: "intermediate",
    score: 1
  },
{
  questionText: "What will be the output of the following code?\n\nint x = 5;\nSystem.out.println(x++);",
  options: [
    { optionText: "5", optionTag: "A" },
    { optionText: "6", optionTag: "B" },
    { optionText: "Error", optionTag: "C" },
    { optionText: "Undefined", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "`x++` is post-increment, so it prints 5, then increments to 6.",
  language: "Java",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "Which interface must a class implement to be sorted by `Collections.sort()` by default?",
  options: [
    { optionText: "Comparator", optionTag: "A" },
    { optionText: "Cloneable", optionTag: "B" },
    { optionText: "Comparable", optionTag: "C" },
    { optionText: "Serializable", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "The `Comparable` interface defines natural ordering via `compareTo()`.",
  language: "Java",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "Which of the following is true about abstract classes in Java?",
  options: [
    { optionText: "They can be instantiated directly", optionTag: "A" },
    { optionText: "They must contain only abstract methods", optionTag: "B" },
    { optionText: "They can have both abstract and non-abstract methods", optionTag: "C" },
    { optionText: "They cannot have constructors", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "Abstract classes can have both abstract and concrete methods.",
  language: "Java",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "Which collection is best suited for LIFO (Last-In-First-Out)?",
  options: [
    { optionText: "Queue", optionTag: "A" },
    { optionText: "Deque", optionTag: "B" },
    { optionText: "Stack", optionTag: "C" },
    { optionText: "LinkedList", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "`Stack` is designed for LIFO access in Java.",
  language: "Java",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "Which exception is thrown when you try to access an array with an invalid index?",
  options: [
    { optionText: "NullPointerException", optionTag: "A" },
    { optionText: "IndexOutOfBoundsException", optionTag: "B" },
    { optionText: "IllegalArgumentException", optionTag: "C" },
    { optionText: "ClassCastException", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "`IndexOutOfBoundsException` occurs when accessing illegal array indices.",
  language: "Java",
  difficulty: "intermediate",
  score: 1
},
  // Hard Java Questions
{
  questionText: "Which of the following are valid Java access modifiers?",
  options: [
    { optionText: "public", optionTag: "A" },
    { optionText: "protected", optionTag: "B" },
    { optionText: "sealed", optionTag: "C" },
    { optionText: "private", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "`public`, `protected`, and `private` are valid. `sealed` exists only in Java 15+ for sealed classes.",
  language: "Java",
  difficulty: "hard",
  score: 1
},
{
  questionText: "What is the time complexity of inserting an element into a `HashMap`?",
  options: [
    { optionText: "O(1)", optionTag: "A" },
    { optionText: "O(n)", optionTag: "B" },
    { optionText: "O(log n)", optionTag: "C" },
    { optionText: "O(n log n)", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "Inserting into a `HashMap` is O(1) on average, assuming low collisions.",
  language: "Java",
  difficulty: "hard",
  score: 1
},
{
  questionText: "Which of the following statements about Java threads is true?",
  options: [
    { optionText: "A thread can be restarted after it completes", optionTag: "A" },
    { optionText: "The `start()` method runs the thread", optionTag: "B" },
    { optionText: "`run()` starts a new thread", optionTag: "C" },
    { optionText: "`Thread` is an interface", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "`start()` creates a new thread. `run()` just runs in the current thread.",
  language: "Java",
  difficulty: "hard",
  score: 1
},
{
  questionText: "Which of the following Java collections are synchronized?",
  options: [
    { optionText: "Vector", optionTag: "A" },
    { optionText: "ArrayList", optionTag: "B" },
    { optionText: "Hashtable", optionTag: "C" },
    { optionText: "HashMap", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "`Vector` and `Hashtable` are synchronized. `ArrayList` and `HashMap` are not by default.",
  language: "Java",
  difficulty: "hard",
  score: 1
},
{
  questionText: "Which Java keyword is used to prevent method overriding?",
  options: [
    { optionText: "static", optionTag: "A" },
    { optionText: "const", optionTag: "B" },
    { optionText: "final", optionTag: "C" },
    { optionText: "sealed", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "`final` prevents method overriding.",
  language: "Java",
  difficulty: "hard",
  score: 1
},
  {
    questionText: "Which of the following is not a valid Java memory area?",
    options: [
      { optionText: "Heap", optionTag: "A" },
      { optionText: "Stack", optionTag: "B" },
      { optionText: "Code", optionTag: "C" },
      { optionText: "RAM", optionTag: "D" }
    ],
    correctOption: 'D',
    explanation: "`RAM` is hardware, not a JVM memory area like Heap, Stack, or Code.",
    language: "Java",
    difficulty: "difficult",
    score: 1
  },
  {
    questionText: "What does the `finalize()` method do in Java?",
    options: [
      { optionText: "Manually frees memory", optionTag: "A" },
      { optionText: "Used to define constants", optionTag: "B" },
      { optionText: "Is called before garbage collection", optionTag: "C" },
      { optionText: "Initializes an object", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "`finalize()` is called by the garbage collector before destroying an object.",
    language: "Java",
    difficulty: "difficult",
    score: 1
  },
  {
    questionText: "Which feature in Java allows multiple methods with the same name in a class hierarchy?",
    options: [
      { optionText: "Inheritance", optionTag: "A" },
      { optionText: "Method overloading", optionTag: "B" },
      { optionText: "Method overriding", optionTag: "C" },
      { optionText: "Encapsulation", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "Method overriding enables a subclass to provide a specific implementation of a method.",
    language: "Java",
    difficulty: "difficult",
    score: 1
  },
  {
    questionText: "Which exception is thrown when dividing an integer by zero in Java?",
    options: [
      { optionText: "ArithmeticException", optionTag: "A" },
      { optionText: "NumberFormatException", optionTag: "B" },
      { optionText: "IllegalArgumentException", optionTag: "C" },
      { optionText: "NullPointerException", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "`ArithmeticException` is thrown for divide-by-zero errors with integers.",
    language: "Java",
    difficulty: "difficult",
    score: 1
  },
  {
    questionText: "Which interface must be implemented to create a custom thread in Java?",
    options: [
      { optionText: "Runnable", optionTag: "A" },
      { optionText: "Callable", optionTag: "B" },
      { optionText: "Threadable", optionTag: "C" },
      { optionText: "Executor", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "To create a custom thread, implement the `Runnable` interface and define `run()`.",
    language: "Java",
    difficulty: "difficult",
    score: 1
  },

    
  // Easy JavaScript Questions
{
  questionText: "Which keyword is used to declare a variable in JavaScript?",
  options: [
    { optionText: "int", optionTag: "A" },
    { optionText: "let", optionTag: "B" },
    { optionText: "define", optionTag: "C" },
    { optionText: "varname", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "`let` is one of the modern ways to declare a variable in JavaScript.",
  language: "JavaScript",
  difficulty: "easy",
  score: 1
},
{
  questionText: "What will `typeof null` return in JavaScript?",
  options: [
    { optionText: "null", optionTag: "A" },
    { optionText: "undefined", optionTag: "B" },
    { optionText: "object", optionTag: "C" },
    { optionText: "number", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "`typeof null` returns `'object'` due to a long-standing bug in JavaScript.",
  language: "JavaScript",
  difficulty: "easy",
  score: 1
},
{
  questionText: "Which of these is a correct way to write a function in JavaScript?",
  options: [
    { optionText: "function myFunc[] {}", optionTag: "A" },
    { optionText: "func myFunc() {}", optionTag: "B" },
    { optionText: "function myFunc() {}", optionTag: "C" },
    { optionText: "define function()", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "`function myFunc() {}` is the correct syntax.",
  language: "JavaScript",
  difficulty: "easy",
  score: 1
},
{
  questionText: "Which of the following is used to create an array in JavaScript?",
  options: [
    { optionText: "{}", optionTag: "A" },
    { optionText: "[]", optionTag: "B" },
    { optionText: "<>", optionTag: "C" },
    { optionText: "array()", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "Square brackets `[]` are used to create arrays in JavaScript.",
  language: "JavaScript",
  difficulty: "easy",
  score: 1
},
{
  questionText: "Which method adds an element to the end of a JavaScript array?",
  options: [
    { optionText: "add()", optionTag: "A" },
    { optionText: "append()", optionTag: "B" },
    { optionText: "push()", optionTag: "C" },
    { optionText: "insert()", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "`push()` appends one or more elements to the end of the array.",
  language: "JavaScript",
  difficulty: "easy",
  score: 1
},
  {
    questionText: "Which keyword is used to declare a variable in JavaScript?",
    options: [
      { optionText: "var", optionTag: "A" },
      { optionText: "let", optionTag: "B" },
      { optionText: "const", optionTag: "C" },
      { optionText: "All of the above", optionTag: "D" }
    ],
    correctOption: 'D',
    explanation: "`var`, `let`, and `const` are all used to declare variables in JavaScript.",
    language: "JavaScript",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "What is the output of `typeof null` in JavaScript?",
    options: [
      { optionText: "null", optionTag: "A" },
      { optionText: "object", optionTag: "B" },
      { optionText: "undefined", optionTag: "C" },
      { optionText: "string", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "`typeof null` returns 'object' due to a legacy bug in JavaScript.",
    language: "JavaScript",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "Which symbol is used for single-line comments in JavaScript?",
    options: [
      { optionText: "//", optionTag: "A" },
      { optionText: "/*", optionTag: "B" },
      { optionText: "#", optionTag: "C" },
      { optionText: "--", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "`//` is used to create single-line comments in JavaScript.",
    language: "JavaScript",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "Which method converts a JSON string into a JavaScript object?",
    options: [
      { optionText: "JSON.stringify()", optionTag: "A" },
      { optionText: "JSON.parse()", optionTag: "B" },
      { optionText: "parseJSON()", optionTag: "C" },
      { optionText: "toObject()", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "`JSON.parse()` is used to parse a JSON string into an object.",
    language: "JavaScript",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "Which of the following is a primitive data type in JavaScript?",
    options: [
      { optionText: "Object", optionTag: "A" },
      { optionText: "Function", optionTag: "B" },
      { optionText: "Boolean", optionTag: "C" },
      { optionText: "Array", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "`Boolean` is a primitive data type in JavaScript.",
    language: "JavaScript",
    difficulty: "easy",
    score: 1
  },

  // Intermediate JavaScript Questions
  {
    questionText: "What is a closure in JavaScript?",
    options: [
      { optionText: "A function inside an object", optionTag: "A" },
      { optionText: "An object inside a function", optionTag: "B" },
      { optionText: "A function having access to its outer function scope", optionTag: "C" },
      { optionText: "A function with private variables", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "A closure gives a function access to variables from an enclosing scope.",
    language: "JavaScript",
    difficulty: "intermediate",
    score: 1
  },
  {
      questionText: "What is the purpose of the `bind()` method in JavaScript?",
      options: [
        { optionText: "To execute a function", optionTag: "A" },
        { optionText: "To create a new function with a specific `this` value", optionTag: "B" },
        { optionText: "To copy an object", optionTag: "C" },
        { optionText: "To delay a function", optionTag: "D" }
      ],
      correctOption: 'B',
      explanation: "`bind()` creates a new function with a specified `this` value.",
      language: "JavaScript",
      difficulty: "intermediate",
      score: 1
    },
  {
      questionText: "Which of the following is true about `==` and `===`?",
      options: [
        { optionText: "`==` compares value and type, `===` compares only value", optionTag: "A" },
        { optionText: "`==` compares only value, `===` compares value and type", optionTag: "B" },
        { optionText: "They are interchangeable", optionTag: "C" },
        { optionText: "Both are strict equality", optionTag: "D" }
      ],
      correctOption: 'B',
      explanation: "`==` allows type coercion, while `===` checks for both type and value.",
      language: "JavaScript",
      difficulty: "intermediate",
      score: 1
    },
  {
    questionText: "What is the result of `[1,2,3] + [4,5,6]` in JavaScript?",
    options: [
      { optionText: "[1,2,3,4,5,6]", optionTag: "A" },
      { optionText: "Error", optionTag: "B" },
      { optionText: "NaN", optionTag: "C" },
      { optionText: "1,2,34,5,6", optionTag: "D" }
    ],
    correctOption: 'D',
    explanation: "Array addition coerces both arrays to strings, resulting in `'1,2,34,5,6'`.",
    language: "JavaScript",
    difficulty: "intermediate",
    score: 1
  },
  {
    questionText: "What will `console.log(typeof NaN)` output?",
    options: [
      { optionText: "number", optionTag: "A" },
      { optionText: "NaN", optionTag: "B" },
      { optionText: "undefined", optionTag: "C" },
      { optionText: "object", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "`NaN` stands for Not-a-Number, but its type is still `number` in JavaScript.",
    language: "JavaScript",
    difficulty: "intermediate",
    score: 1
  },

{
  questionText: "What will be the output of `console.log(0.1 + 0.2 === 0.3);`?",
  options: [
    { optionText: "true", optionTag: "A" },
    { optionText: "false", optionTag: "B" },
    { optionText: "undefined", optionTag: "C" },
    { optionText: "error", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "`0.1 + 0.2` results in a floating-point rounding issue, so it's not exactly `0.3`.",
  language: "JavaScript",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "What does the `map()` function do in JavaScript arrays?",
  options: [
    { optionText: "Modifies the array in-place", optionTag: "A" },
    { optionText: "Returns a new array with modified values", optionTag: "B" },
    { optionText: "Deletes elements", optionTag: "C" },
    { optionText: "Sorts the array", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "`map()` creates a new array by applying a function to each element.",
  language: "JavaScript",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "What is the difference between `==` and `===` in JavaScript?",
  options: [
    { optionText: "Both are the same", optionTag: "A" },
    { optionText: "`==` is strict", optionTag: "B" },
    { optionText: "`===` allows type coercion", optionTag: "C" },
    { optionText: "`==` does type coercion, `===` does not", optionTag: "D" }
  ],
  correctOption: 'D',
  explanation: "`==` performs type coercion, while `===` checks both value and type.",
  language: "JavaScript",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "Which object method is used to merge two or more objects?",
  options: [
    { optionText: "Object.merge()", optionTag: "A" },
    { optionText: "Object.combine()", optionTag: "B" },
    { optionText: "Object.assign()", optionTag: "C" },
    { optionText: "Object.append()", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "`Object.assign()` is used to copy values from one or more source objects to a target object.",
  language: "JavaScript",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "What is a closure in JavaScript?",
  options: [
    { optionText: "A block scope", optionTag: "A" },
    { optionText: "A function having access to variables in its lexical scope", optionTag: "B" },
    { optionText: "An error handling block", optionTag: "C" },
    { optionText: "A type of loop", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "A closure is a function that remembers its lexical scope even when executed outside of it.",
  language: "JavaScript",
  difficulty: "intermediate",
  score: 1
},

  // Hard JavaScript Questions
{
  questionText: "Which of the following are JavaScript data types?",
  options: [
    { optionText: "Symbol", optionTag: "A" },
    { optionText: "Set", optionTag: "B" },
    { optionText: "String", optionTag: "C" },
    { optionText: "Undefined", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "`Symbol`, `String`, and `Undefined` are data types. `Set` is a built-in object, not a primitive type.",
  language: "JavaScript",
  difficulty: "hard",
  score: 1
},
{
  questionText: "What is the output of the following?\n\nconsole.log([] + []);",
  options: [
    { optionText: "[]", optionTag: "A" },
    { optionText: "0", optionTag: "B" },
    { optionText: "undefined", optionTag: "C" },
    { optionText: '"" (empty string)', optionTag: "D" }
  ],
  correctOption: 'D',
  explanation: "In JavaScript, `[] + []` results in an empty string due to type coercion.",
  language: "JavaScript",
  difficulty: "hard",
  score: 1
},
{
  questionText: "Which of the following best describes event delegation in JavaScript?",
  options: [
    { optionText: "Binding event listeners to every child element", optionTag: "A" },
    { optionText: "Using a parent to handle events for current and future children", optionTag: "B" },
    { optionText: "Using inline event handlers", optionTag: "C" },
    { optionText: "Creating events manually", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "Event delegation uses a parent element to listen for events on its children.",
  language: "JavaScript",
  difficulty: "hard",
  score: 1
},
{
  questionText: "Which built-in JavaScript function is used to serialize an object to a string?",
  options: [
    { optionText: "JSON.stringify()", optionTag: "A" },
    { optionText: "Object.toString()", optionTag: "B" },
    { optionText: "String()", optionTag: "C" },
    { optionText: "serialize()", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "`JSON.stringify()` converts an object into a JSON string.",
  language: "JavaScript",
  difficulty: "hard",
  score: 1
},
{
  questionText: "Which of the following can create an infinite loop if not handled properly?",
  options: [
    { optionText: "while(true)", optionTag: "A" },
    { optionText: "for(;;)", optionTag: "B" },
    { optionText: "do...while(false)", optionTag: "C" },
    { optionText: "setInterval()", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "`while(true)`, `for(;;)`, and `setInterval()` without clear exit conditions can cause infinite loops.",
  language: "JavaScript",
  difficulty: "hard",
  score: 1
},
  {
    questionText: "Which of the following best describes the event loop in JavaScript?",
    options: [
      { optionText: "A function that handles events", optionTag: "A" },
      { optionText: "A queue of event handlers", optionTag: "B" },
      { optionText: "A concurrency model handling asynchronous tasks via the call stack and task queue", optionTag: "C" },
      { optionText: "A loop that repeats user events", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "The event loop allows non-blocking asynchronous operations by using the call stack and queue.",
    language: "JavaScript",
    difficulty: "difficult",
    score: 1
  },
  {
    questionText: "What is the output of `let a = (1, 2, 3); console.log(a);`?",
    options: [
      { optionText: "1", optionTag: "A" },
      { optionText: "2", optionTag: "B" },
      { optionText: "3", optionTag: "C" },
      { optionText: "undefined", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "The comma operator evaluates all expressions and returns the last one, so `a = 3`.",
    language: "JavaScript",
    difficulty: "difficult",
    score: 1
  },
  {
    questionText: "What does the `Object.freeze()` method do?",
    options: [
      { optionText: "Makes an object immutable", optionTag: "A" },
      { optionText: "Freezes the properties temporarily", optionTag: "B" },
      { optionText: "Allows shallow copy", optionTag: "C" },
      { optionText: "Disables function calls", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "`Object.freeze()` prevents modification of existing properties and addition of new ones.",
    language: "JavaScript",
    difficulty: "difficult",
    score: 1
  },
  {
    questionText: "Which of the following is NOT a valid way to create an object in JavaScript?",
    options: [
      { optionText: "`Object.create(null)`", optionTag: "A" },
      { optionText: "`{}`", optionTag: "B" },
      { optionText: "`new Object()`", optionTag: "C" },
      { optionText: "`Object()`", optionTag: "D" }
    ],
    correctOption: 'D',
    explanation: "`Object()` as a standalone function is valid but not a constructor for object creation.",
    language: "JavaScript",
    difficulty: "difficult",
    score: 1
  },
  {
    questionText: "How are promises executed in the JavaScript event loop?",
    options: [
      { optionText: "In the call stack", optionTag: "A" },
      { optionText: "In the task queue", optionTag: "B" },
      { optionText: "In the microtask queue after the current stack", optionTag: "C" },
      { optionText: "In parallel with the stack", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "Promises are handled in the microtask queue which runs after the current call stack is empty.",
    language: "JavaScript",
    difficulty: "difficult",
    score: 1
  },

 
  // Easy Python Questions
{
  questionText: "Which keyword is used to define a function in Python?",
  options: [
    { optionText: "function", optionTag: "A" },
    { optionText: "fun", optionTag: "B" },
    { optionText: "def", optionTag: "C" },
    { optionText: "define", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "`def` is the correct keyword to define a function in Python.",
  language: "Python",
  difficulty: "easy",
  score: 1
},
{
  questionText: "How do you insert comments in Python code?",
  options: [
    { optionText: "// This is a comment", optionTag: "A" },
    { optionText: "# This is a comment", optionTag: "B" },
    { optionText: "/* comment */", optionTag: "C" },
    { optionText: "-- comment", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "`#` is used to write single-line comments in Python.",
  language: "Python",
  difficulty: "easy",
  score: 1
},
{
  questionText: "What is the output of `print(type([]))`?",
  options: [
    { optionText: "<class 'list'>", optionTag: "A" },
    { optionText: "<type 'list'>", optionTag: "B" },
    { optionText: "list", optionTag: "C" },
    { optionText: "array", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "`[]` represents a list, so `type([])` is `<class 'list'>`.",
  language: "Python",
  difficulty: "easy",
  score: 1
},
{
  questionText: "Which of the following is not a valid Python data type?",
  options: [
    { optionText: "int", optionTag: "A" },
    { optionText: "float", optionTag: "B" },
    { optionText: "char", optionTag: "C" },
    { optionText: "dict", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "Python does not have a `char` type; it uses strings even for single characters.",
  language: "Python",
  difficulty: "easy",
  score: 1
},
{
  questionText: "Which method is used to add an element to a list in Python?",
  options: [
    { optionText: "add()", optionTag: "A" },
    { optionText: "append()", optionTag: "B" },
    { optionText: "insert()", optionTag: "C" },
    { optionText: "push()", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "`append()` is used to add an element to the end of a list.",
  language: "Python",
  difficulty: "easy",
  score: 1
},
  {
    questionText: "Which of the following is the correct way to define a function in Python?",
    options: [
      { optionText: "function myFunc():", optionTag: "A" },
      { optionText: "def myFunc():", optionTag: "B" },
      { optionText: "define myFunc():", optionTag: "C" },
      { optionText: "func myFunc():", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "In Python, functions are defined using the `def` keyword.",
    language: "Python",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "What is the output of `len([1, 2, 3])`?",
    options: [
      { optionText: "2", optionTag: "A" },
      { optionText: "3", optionTag: "B" },
      { optionText: "0", optionTag: "C" },
      { optionText: "None", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "The `len()` function returns the number of items in the list, which is 3.",
    language: "Python",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "Which of these is a valid Python variable name?",
    options: [
      { optionText: "2nd_value", optionTag: "A" },
      { optionText: "_value", optionTag: "B" },
      { optionText: "value-name", optionTag: "C" },
      { optionText: "class", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "Variable names can start with an underscore but not with a digit or reserved keyword.",
    language: "Python",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "How do you write a comment in Python?",
    options: [
      { optionText: "// comment", optionTag: "A" },
      { optionText: "/* comment */", optionTag: "B" },
      { optionText: "# comment", optionTag: "C" },
      { optionText: "-- comment", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "In Python, comments start with a `#` symbol.",
    language: "Python",
    difficulty: "easy",
    score: 1
  },
  {
    questionText: "What is the output of `type(5.0)`?",
    options: [
      { optionText: "<class 'float'>", optionTag: "A" },
      { optionText: "<class 'int'>", optionTag: "B" },
      { optionText: "<class 'double'>", optionTag: "C" },
      { optionText: "<class 'number'>", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "`5.0` is a floating-point number, so its type is `<class 'float'>`.",
    language: "Python",
    difficulty: "easy",
    score: 1
  },

  // Intermediate Python Questions
{
  questionText: "Which of the following data structures does not allow duplicate elements?",
  options: [
    { optionText: "List", optionTag: "A" },
    { optionText: "Dictionary", optionTag: "B" },
    { optionText: "Set", optionTag: "C" },
    { optionText: "Tuple", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "Sets in Python are unordered and do not allow duplicate elements.",
  language: "Python",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "What will be the output of the following code?\n\nx = [1, 2, 3]\nprint(x[::-1])",
  options: [
    { optionText: "[1, 2, 3]", optionTag: "A" },
    { optionText: "[3, 2, 1]", optionTag: "B" },
    { optionText: "Error", optionTag: "C" },
    { optionText: "[2, 3, 1]", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "`[::-1]` reverses the list.",
  language: "Python",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "Which of the following is used to iterate over a dictionary's keys and values?",
  options: [
    { optionText: "items()", optionTag: "A" },
    { optionText: "keys()", optionTag: "B" },
    { optionText: "values()", optionTag: "C" },
    { optionText: "enumerate()", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "`items()` returns both keys and values in a dictionary.",
  language: "Python",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "Which built-in function can be used to sort a list in Python without modifying the original?",
  options: [
    { optionText: "sort()", optionTag: "A" },
    { optionText: "order()", optionTag: "B" },
    { optionText: "sorted()", optionTag: "C" },
    { optionText: "arrange()", optionTag: "D" }
  ],
  correctOption: 'C',
  explanation: "`sorted()` returns a sorted list without modifying the original.",
  language: "Python",
  difficulty: "intermediate",
  score: 1
},
{
  questionText: "What will be the output?\n\ndef f(x=[]):\n  x.append(1)\n  return x\n\nprint(f())\nprint(f())",
  options: [
    { optionText: "[1], [1]", optionTag: "A" },
    { optionText: "[1], [1, 1]", optionTag: "B" },
    { optionText: "[1, 1], [1, 1]", optionTag: "C" },
    { optionText: "Error", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "Default mutable arguments retain changes across calls; `x` becomes `[1]`, then `[1, 1]`.",
  language: "Python",
  difficulty: "intermediate",
  score: 1
},

  {
    questionText: "Which collection type does not allow duplicate elements?",
    options: [
      { optionText: "List", optionTag: "A" },
      { optionText: "Tuple", optionTag: "B" },
      { optionText: "Set", optionTag: "C" },
      { optionText: "Dictionary", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "Sets in Python automatically eliminate duplicates.",
    language: "Python",
    difficulty: "intermediate",
    score: 1
  },
  {
    questionText: "What will `print(''.join(['a', 'b', 'c']))` output?",
    options: [
      { optionText: "a b c", optionTag: "A" },
      { optionText: "abc", optionTag: "B" },
      { optionText: "['a','b','c']", optionTag: "C" },
      { optionText: "None", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "`join()` concatenates a list of strings into a single string.",
    language: "Python",
    difficulty: "intermediate",
    score: 1
  },
  {
    questionText: "What is the result of `bool([])` in Python?",
    options: [
      { optionText: "True", optionTag: "A" },
      { optionText: "False", optionTag: "B" },
      { optionText: "Error", optionTag: "C" },
      { optionText: "None", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "Empty collections like `[]`, `{}`, `''` return `False` in boolean context.",
    language: "Python",
    difficulty: "intermediate",
    score: 1
  },
  {
    questionText: "How do you catch exceptions in Python?",
    options: [
      { optionText: "try/catch", optionTag: "A" },
      { optionText: "try/except", optionTag: "B" },
      { optionText: "try/catch/finally", optionTag: "C" },
      { optionText: "try/handle", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "`try/except` is the correct syntax for handling exceptions in Python.",
    language: "Python",
    difficulty: "intermediate",
    score: 1
  },
  {
    questionText: "Which method is used to add an item to a list?",
    options: [
      { optionText: ".add()", optionTag: "A" },
      { optionText: ".insert()", optionTag: "B" },
      { optionText: ".append()", optionTag: "C" },
      { optionText: ".extend()", optionTag: "D" }
    ],
    correctOption: 'C',
    explanation: "`append()` adds a single element to the end of a list.",
    language: "Python",
    difficulty: "intermediate",
    score: 1
  },

  // Hard Python Questions
{
  questionText: "Which of the following Python data structures are mutable?",
  options: [
    { optionText: "List", optionTag: "A" },
    { optionText: "Tuple", optionTag: "B" },
    { optionText: "Dictionary", optionTag: "C" },
    { optionText: "Set", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "`List`, `Dictionary`, and `Set` are mutable. `Tuple` is immutable.",
  language: "Python",
  difficulty: "hard",
  score: 1
},
{
  questionText: "What is the time complexity of inserting an element into a Python set?",
  options: [
    { optionText: "O(1)", optionTag: "A" },
    { optionText: "O(n)", optionTag: "B" },
    { optionText: "O(log n)", optionTag: "C" },
    { optionText: "O(n log n)", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "Inserting into a set is O(1) on average due to hash-based implementation.",
  language: "Python",
  difficulty: "hard",
  score: 1
},
{
  questionText: "What will be the output?\n\na = (1, 2, 3)\na[0] = 10",
  options: [
    { optionText: "(10, 2, 3)", optionTag: "A" },
    { optionText: "Error", optionTag: "B" },
    { optionText: "[10, 2, 3]", optionTag: "C" },
    { optionText: "None", optionTag: "D" }
  ],
  correctOption: 'B',
  explanation: "Tuples are immutable. You cannot assign to individual elements.",
  language: "Python",
  difficulty: "hard",
  score: 1
},
{
  questionText: "Which of the following features describe Python generators?",
  options: [
    { optionText: "Yield values one at a time", optionTag: "A" },
    { optionText: "Consume less memory", optionTag: "B" },
    { optionText: "Are functions with `return`", optionTag: "C" },
    { optionText: "Support lazy evaluation", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "Generators yield one value at a time using `yield`, are memory efficient, and use lazy evaluation.",
  language: "Python",
  difficulty: "hard",
  score: 1
},
{
  questionText: "Which module is used to implement priority queues in Python?",
  options: [
    { optionText: "heapq", optionTag: "A" },
    { optionText: "queue", optionTag: "B" },
    { optionText: "stack", optionTag: "C" },
    { optionText: "bisect", optionTag: "D" }
  ],
  correctOption: 'A',
  explanation: "`heapq` is used to implement heaps and priority queues in Python.",
  language: "Python",
  difficulty: "hard",
  score: 1
},
  {
    questionText: "What will be the output of the following code?\n\n```python\nx = [1, 2, 3]\ny = x\nx.append(4)\nprint(y)\n```",
    options: [
      { optionText: "[1, 2, 3]", optionTag: "A" },
      { optionText: "[1, 2, 3, 4]", optionTag: "B" },
      { optionText: "[4]", optionTag: "C" },
      { optionText: "Error", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "`x` and `y` point to the same list, so modifying `x` also affects `y`.",
    language: "Python",
    difficulty: "difficult",
    score: 1
  },
  {
    questionText: "What is the output of `bool('False')`?",
    options: [
      { optionText: "False", optionTag: "A" },
      { optionText: "True", optionTag: "B" },
      { optionText: "None", optionTag: "C" },
      { optionText: "Error", optionTag: "D" }
    ],
    correctOption: 'B',
    explanation: "Non-empty strings evaluate to `True` regardless of content.",
    language: "Python",
       difficulty: "difficult",
    score: 1
  },
  {
      questionText: "What is a Python decorator?",
      options: [
        { optionText: "A type of loop", optionTag: "A" },
        { optionText: "A design pattern for UI", optionTag: "B" },
        { optionText: "A function that modifies another function", optionTag: "C" },
        { optionText: "A comment style", optionTag: "D" }
      ],
      correctOption: 'C',
      explanation: "A decorator is a function that takes another function and extends its behavior.",
      language: "Python",
      difficulty: "difficult",
      score: 1
    },
  {
    questionText: "Which of the following best describes Python's GIL (Global Interpreter Lock)?",
    options: [
      { optionText: "Prevents race conditions in multi-threaded code", optionTag: "A" },
      { optionText: "Allows true parallel threading", optionTag: "B" },
      { optionText: "Only applies to Python 2", optionTag: "C" },
      { optionText: "Locks global variables during execution", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "GIL prevents true multi-threading by allowing only one thread at a time in the interpreter.",
    language: "Python",
    difficulty: "difficult",
    score: 1
  },
  {
    questionText: "Which of the following is a correct way to create a generator?",
    options: [
      { optionText: "`yield` inside a function", optionTag: "A" },
      { optionText: "`return` a list", optionTag: "B" },
      { optionText: "Using list comprehension", optionTag: "C" },
      { optionText: "Calling `iter()` on a function", optionTag: "D" }
    ],
    correctOption: 'A',
    explanation: "Generators are created using the `yield` keyword inside functions.",
    language: "Python",
    difficulty: "difficult",
    score: 1
  },
     {
    questionText: "What does the @staticmethod decorator do in Python?",
options: [
  { optionText: "Makes a function a class method", optionTag: "A" },
  { optionText: "Allows the function to modify class state", optionTag: "B" },
  { optionText: "Makes the function static, not requiring self or cls", optionTag: "C" },
  { optionText: "Prevents the method from being inherited", optionTag: "D" }
],
    correctOption: 'C',
    explanation: "@staticmethod defines a method that doesn't access class (cls) or instance (self) data. It behaves like a regular function within the class.",
    language: "Python",
    difficulty: "difficult",
    score: 1
  },
{
    questionText: "Which of the following statements is true about Python's Global Interpreter Lock (GIL",
options: [
  { optionText: "It allows true parallel execution of threads", optionTag: "A" },
  { optionText: "It prevents memory leaks in Python programs", optionTag: "B" },
  { optionText: "It limits execution to one thread at a time in a single process", optionTag: "C" },
  { optionText: "It is removed when using multiprocessing", optionTag: "D" }
],
    correctOption: 'C',
    explanation: "The GIL ensures that only one thread executes Python bytecode at a time, even on multi-core systems. For parallelism, use multiprocessing instead.",
    language: "Python",
    difficulty: "difficult",
    score: 1
  }
];

/**
 * Utility function for seeding or testing only.
 * Do NOT use this function to serve questions directly to the frontend in production.
 * Always store questions in the database and serve via backend API.
 */
/*export const getQuestionsByLanguageAndDifficulty = (
  language: string,
  difficulty: string,
  count: number = 5
): Question[] => {
  const filtered = questions.filter(
    q =>
      q.language.toLowerCase() === language.toLowerCase() &&
      q.difficulty.toLowerCase() === difficulty.toLowerCase()
  );

  const shuffled = filtered.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};*/