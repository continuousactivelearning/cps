export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  language: string;
  difficulty: string;
}


export const questions: Question[] = [
  // Easy C++ Questions
  {
    id: 1,
    question: "What is the time complexity of accessing an element in an array by index?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n²)"],
    correctAnswer: 0,
    explanation: "Array access by index is constant time O(1) as we can directly calculate the memory address.",
    language: "C++",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "Which data structure follows LIFO (Last In First Out) principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: 1,
    explanation: "Stack follows LIFO principle where the last element added is the first one to be removed.",
    language: "C++",
    difficulty: "easy"
  },
{
id:3,
question:"What is the correct file extension for C++ source files?",
options:[".cp",".cpp",".c++",".ccp"],
correctAnswer:2,
explanation:"cpp is the standard extension for C++ files",
language:"C++",
difficulty:"easy"},
{
    id: 4,
    question: "Which operator is used to access members of a class using a pointer?",
    options: [".", "->", "::", "&"],
    correctAnswer: 1,
    explanation: "'->' is used to access members of a class or struct via a pointer.",
    language: "C++",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "Which of the following is used to output data to the console in C++?",
    options: ["cout <<", "print()", "echo", "Console.WriteLine()"],
    correctAnswer: 0,
    explanation: "'cout <<' is used with the iostream library to display output.",
    language: "C++",
    difficulty: "easy"
  },

{
  id: 6,
  question: "Which operator is used to allocate memory dynamically in C++?",
  options: ["malloc", "allocate", "new", "calloc"],
  correctAnswer: 2,
  explanation: "`new` is the correct C++ operator for dynamic memory allocation.",
  language: "C++",
  difficulty: "easy"
},
{
  id: 7,
  question: "What is the output of: `std::cout << 5 / 2;`?",
  options: ["2.5", "2", "2.0", "Compiler Error"],
  correctAnswer: 1,
  explanation: "Both operands are integers, so integer division yields 2.",
  language: "C++",
  difficulty: "easy"
},
{
  id: 8,
  question: "Which of the following is not a basic data type in C++?",
  options: ["int", "bool", "float", "byte"],
  correctAnswer: 3,
  explanation: "`byte` is not a built-in basic data type in standard C++.",
  language: "C++",
  difficulty: "easy"
},
{
  id: 9,
  question: "Which header file is needed for input/output operations in C++?",
  options: ["iostream", "stdio.h", "fstream", "input.h"],
  correctAnswer: 0,
  explanation: "`iostream` is used for standard I/O in C++.",
  language: "C++",
  difficulty: "easy"
},
{
  id: 10,
  question: "Which keyword is used to define a constant in C++?",
  options: ["final", "const", "define", "static"],
  correctAnswer: 1,
  explanation: "`const` is used in C++ to declare constant values.",
  language: "C++",
  difficulty: "easy"
},

  // Intermediate C++ Questions

{
  id: 11,
  question: "What will be the output?\n\nint a = 3;\nint b = 2;\nstd::cout << a++ * ++b;",
  options: ["6", "9", "8", "Error"],
  correctAnswer: 2,
  explanation: "`a++` is 3 (post-increment), `++b` is 3, so 3 * 3 = 9. Then a becomes 4.",
  language: "C++",
  difficulty: "intermediate"
},
{
  id: 12,
  question: "Which STL container does not allow duplicate keys?",
  options: ["set", "vector", "map", "multiset"],
  correctAnswer: 0,
  explanation: "`set` stores unique elements in sorted order and doesn't allow duplicates.",
  language: "C++",
  difficulty: "intermediate"
},
{
  id: 13,
  question: "Which of the following is used to define a class template in C++?",
  options: ["template<>", "template<class T>", "class template", "template()"],
  correctAnswer: 1,
  explanation: "`template<class T>` defines a class template.",
  language: "C++",
  difficulty: "intermediate"
},
{
  id: 14,
  question: "Which access specifier allows access to class members only from the same class?",
  options: ["public", "private", "protected", "global"],
  correctAnswer: 1,
  explanation: "`private` members are accessible only within the same class.",
  language: "C++",
  difficulty: "intermediate"
},
{
  id: 15,
  question: "Which concept allows functions to have the same name with different parameters?",
  options: ["Inheritance", "Overloading", "Encapsulation", "Abstraction"],
  correctAnswer: 1,
  explanation: "Function overloading allows multiple functions with the same name but different parameter types.",
  language: "C++",
  difficulty: "intermediate"
},

  {
    id: 16,
    question: "What is the output of: `sizeof(char)` on most systems?",
    options: ["1", "2", "4", "8"],
    correctAnswer: 0,
    explanation: "The size of a char is 1 byte on almost all platforms.",
    language: "C++",
    difficulty: "intermediate"
  },
  {
    id: 17,
    question: "Which of the following best describes a constructor?",
    options: [
      "A function that destroys an object",
      "A function that initializes an object",
      "A function that copies objects",
      "A static method"
    ],
    correctAnswer: 1,
    explanation: "Constructors initialize new objects when they are created.",
    language: "C++",
    difficulty: "intermediate"
  },
  {
    id: 8,
    question: "What is the difference between `++i` and `i++`?",
    options: [
      "`++i` returns the new value, `i++` returns the original value",
      "They are always the same",
      "`++i` is slower",
      "`i++` modifies `i`, `++i` does not"
    ],
    correctAnswer: 0,
    explanation: "`++i` increments before returning, `i++` returns then increments.",
    language: "C++",
    difficulty: "intermediate"
  },
  {
    id: 19,
    question: "Which STL container provides fast search, insert and delete operations?",
    options: ["vector", "set", "list", "queue"],
    correctAnswer: 1,
    explanation: "`set` in C++ is usually implemented as a balanced BST (like red-black tree).",
    language: "C++",
    difficulty: "intermediate"
  },
  {
    id: 20,
    question: "What does the 'new' keyword do in C++?",
    options: [
      "Defines a variable",
      "Deletes memory",
      "Dynamically allocates memory",
      "Initializes a function"
    ],
    correctAnswer: 2,
    explanation: "`new` dynamically allocates memory for an object or variable.",
    language: "C++",
    difficulty: "intermediate"
  },

  // Hard C++ Questions
{
  id: 51,
  question: "Which of the following best describes the RAII (Resource Acquisition Is Initialization) principle in C++?",
  options: [
    "Resources must be allocated before main()",
    "Resources are freed manually using free()",
    "Object lifetime is tied to resource lifetime",
    "Pointers are required for all resources"
  ],
  correctAnswer: 2,
  explanation: "RAII ensures that resource allocation and deallocation are tied to object lifetime, helping manage memory automatically.",
  language: "C++",
  difficulty: "hard"
},
{
  id: 22,
  question: "What is the time complexity of inserting an element at the beginning of a std::vector?",
  options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
  correctAnswer: 2,
  explanation: "Inserting at the beginning of a vector requires shifting all elements, which is O(n).",
  language: "C++",
  difficulty: "hard"
},
{
  id: 23,
  question: "What is the primary use of a virtual destructor in C++?",
  options: ["To override destructors", "To avoid memory leaks in polymorphic base classes", "To implement templates", "To enforce inheritance"],
  correctAnswer: 1,
  explanation: "A virtual destructor ensures the derived class's destructor is called, preventing memory leaks.",
  language: "C++",
  difficulty: "hard"
},
// Multiple correct options
{
  id: 24,
  question: "What is the purpose of the `std::move()` function in C++?",
  options: [
    "To copy objects from one location to another",
    "To prevent a variable from being copied",
    "To convert an lvalue into an rvalue reference",
    "To delete an object from memory"
  ],
  correctAnswer: 2,
  explanation: "`std::move()` is used to cast an lvalue to an rvalue reference, enabling move semantics for optimization.",
  language: "C++",
  difficulty: "hard"
},
{
  id: 25,
  question: "Which data structure is best suited for implementing a LRU (Least Recently Used) cache?",
  options: ["Queue", "Stack", "HashMap + Doubly Linked List", "Set"],
  correctAnswer: 2,
  explanation: "LRU Cache is efficiently implemented using a HashMap for O(1) access and a doubly linked list for ordering.",
  language: "C++",
  difficulty: "hard"
},
  {
    id: 26,
    question: "Which feature of C++ allows the same function to behave differently based on input?",
    options: ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    correctAnswer: 1,
    explanation: "Polymorphism enables different behavior for functions depending on the input types.",
    language: "C++",
    difficulty: "difficult"
  },
  {
    id: 27,
    question: "What is a virtual function in C++?",
    options: [
      "A function declared in a base class that can be overridden",
      "A function that runs in the background",
      "A function without a body",
      "A static method"
    ],
    correctAnswer: 0,
    explanation: "Virtual functions support runtime polymorphism and can be overridden in derived classes.",
    language: "C++",
    difficulty: "difficult"
  },
  {
    id: 28,
    question: "Which C++ feature allows you to use the same operator on different types?",
    options: ["Function overloading", "Operator overloading", "Templates", "Inheritance"],
    correctAnswer: 1,
    explanation: "Operator overloading allows operators to work with user-defined types.",
    language: "C++",
    difficulty: "difficult"
  },
  {
    id: 29,
    question: "What is the purpose of `std::move` in C++?",
    options: [
      "To delete an object",
      "To copy an object",
      "To perform a deep copy",
      "To enable move semantics"
    ],
    correctAnswer: 3,
    explanation: "`std::move` allows efficient transfer of resources from one object to another.",
    language: "C++",
    difficulty: "difficult"
  },
  {
    id: 30,
    question: "Which smart pointer releases the managed object when it goes out of scope?",
    options: ["shared_ptr", "auto_ptr", "unique_ptr", "raw pointer"],
    correctAnswer: 2,
    explanation: "`unique_ptr` ensures a single owner and automatically releases memory when out of scope.",
    language: "C++",
    difficulty: "difficult"
  },
   // Easy Java Questions
{
  id: 31,
  question: "Which keyword is used to create a class in Java?",
  options: ["define", "struct", "class", "create"],
  correctAnswer: 2,
  explanation: "`class` is the correct keyword to define a class in Java.",
  language: "Java",
  difficulty: "easy"
},
{
  id: 32,
  question: "Which method is the entry point for a Java application?",
  options: ["start()", "run()", "main()", "init()"],
  correctAnswer: 2,
  explanation: "`main()` is the standard entry point for Java applications.",
  language: "Java",
  difficulty: "easy"
},
{
  id: 33,
  question: "Which of these is not a primitive data type in Java?",
  options: ["int", "float", "boolean", "String"],
  correctAnswer: 3,
  explanation: "`String` is a class in Java, not a primitive data type.",
  language: "Java",
  difficulty: "easy"
},
{
  id: 34,
  question: "Which symbol is used to access a method or property of an object in Java?",
  options: [".", "::", "->", ":"],
  correctAnswer: 0,
  explanation: "The dot (`.`) operator is used to access members of an object.",
  language: "Java",
  difficulty: "easy"
},
{
  id: 35,
  question: "Which Java collection allows duplicate elements?",
  options: ["Set", "List", "Map", "HashSet"],
  correctAnswer: 1,
  explanation: "`List` allows duplicate elements. `Set` and `HashSet` do not.",
  language: "Java",
  difficulty: "easy"
},
  {
    id: 36,
    question: "Which keyword is used to define a class in Java?",
    options: ["class", "Class", "struct", "define"],
    correctAnswer: 0,
    explanation: "In Java, the `class` keyword is used to define a class.",
    language: "Java",
    difficulty: "easy"
  },
  {
    id: 37,
    question: "Which of the following is the correct way to start the main method in Java?",
    options: [
      "public static void main(String[] args)",
      "public void main(String[] args)",
      "static void main(String args)",
      "void main()"
    ],
    correctAnswer: 0,
    explanation: "`public static void main(String[] args)` is the standard Java entry point.",
    language: "Java",
    difficulty: "easy"
  },
  {
    id: 38,
    question: "Which data type is used to store true or false values in Java?",
    options: ["bit", "bool", "boolean", "truth"],
    correctAnswer: 2,
    explanation: "The `boolean` type is used to store true or false values in Java.",
    language: "Java",
    difficulty: "easy"
  },
  {
    id: 39,
    question: "How do you declare a constant in Java?",
    options: ["const int x = 10;", "final int x = 10;", "int const x = 10;", "int x := 10;"],
    correctAnswer: 1,
    explanation: "`final` is used in Java to declare constants.",
    language: "Java",
    difficulty: "easy"
  },
  {
    id: 40,
    question: "Which symbol is used to import a package in Java?",
    options: ["import", "include", "#import", "use"],
    correctAnswer: 0,
    explanation: "The `import` keyword is used to include packages in Java.",
    language: "Java",
    difficulty: "easy"
  },


  // Intermediate Java Questions
  {
    id: 41,
    question: "What is the size of an `int` in Java?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on system"],
    correctAnswer: 1,
    explanation: "In Java, an `int` is always 4 bytes regardless of platform.",
    language: "Java",
    difficulty: "intermediate"
  },
  {
    id: 42,
    question: "Which Java keyword is used to inherit a class?",
    options: ["inherits", "extends", "implements", "derives"],
    correctAnswer: 1,
    explanation: "The `extends` keyword is used to inherit from a superclass in Java.",
    language: "Java",
    difficulty: "intermediate"
  },
  {
    id: 43,
    question: "Which collection allows unique elements and maintains insertion order?",
    options: ["ArrayList", "HashSet", "LinkedHashSet", "TreeSet"],
    correctAnswer: 2,
    explanation: "`LinkedHashSet` maintains insertion order and does not allow duplicates.",
    language: "Java",
    difficulty: "intermediate"
  },
  {
    id: 44,
    question: "What is method overloading in Java?",
    options: [
      "Defining multiple methods with the same name but different parameters",
      "Using the same method in multiple classes",
      "Overriding a method in a subclass",
      "Calling a method from another class"
    ],
    correctAnswer: 0,
    explanation: "Method overloading allows defining multiple methods with the same name but different signatures.",
    language: "Java",
    difficulty: "intermediate"
  },
  {
    id: 45,
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "0", "null"],
    correctAnswer: 1,
    explanation: "Boolean instance variables default to `false` in Java.",
    language: "Java",
    difficulty: "intermediate"
  },
{
  id: 50,
  question: "What will be the output of the following code?\n\nint x = 5;\nSystem.out.println(x++);",
  options: ["5", "6", "Error", "Undefined"],
  correctAnswer: 0,
  explanation: "`x++` is post-increment, so it prints 5, then increments to 6.",
  language: "Java",
  difficulty: "intermediate"
},
{
  id: 46,
  question: "Which interface must a class implement to be sorted by `Collections.sort()` by default?",
  options: ["Comparator", "Cloneable", "Comparable", "Serializable"],
  correctAnswer: 2,
  explanation: "The `Comparable` interface defines natural ordering via `compareTo()`.",
  language: "Java",
  difficulty: "intermediate"
},
{
  id: 47,
  question: "Which of the following is true about abstract classes in Java?",
  options: ["They can be instantiated directly", "They must contain only abstract methods", "They can have both abstract and non-abstract methods", "They cannot have constructors"],
  correctAnswer: 2,
  explanation: "Abstract classes can have both abstract and concrete methods.",
  language: "Java",
  difficulty: "intermediate"
},
{
  id: 48,
  question: "Which collection is best suited for LIFO (Last-In-First-Out)?",
  options: ["Queue", "Deque", "Stack", "LinkedList"],
  correctAnswer: 2,
  explanation: "`Stack` is designed for LIFO access in Java.",
  language: "Java",
  difficulty: "intermediate"
},
{
  id: 49,
  question: "Which exception is thrown when you try to access an array with an invalid index?",
  options: ["NullPointerException", "IndexOutOfBoundsException", "IllegalArgumentException", "ClassCastException"],
  correctAnswer: 1,
  explanation: "`IndexOutOfBoundsException` occurs when accessing illegal array indices.",
  language: "Java",
  difficulty: "intermediate"
},
  // Hard Java Questions
{
  id: 51,
  question: "Which of the following best describes the purpose of the `volatile` keyword in Java?",
  options: [
    "It makes variables immutable",
    "It prevents variable reassignment",
    "It ensures visibility of changes to variables across threads",
    "It locks the variable for synchronized access"
  ],
  correctAnswer: 2,
  explanation: "`volatile` ensures that updates to a variable are always visible to other threads, avoiding cached/stale values.",
  language: "Java",
  difficulty: "hard"
},
{
  id: 55,
  question: "What is the time complexity of inserting an element into a `HashMap`?",
  options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
  correctAnswer: 0,
  explanation: "Inserting into a `HashMap` is O(1) on average, assuming low collisions.",
  language: "Java",
  difficulty: "hard"
},
{
  id: 52,
  question: "Which of the following statements about Java threads is true?",
  options: ["A thread can be restarted after it completes", "The `start()` method runs the thread", "`run()` starts a new thread", "`Thread` is an interface"],
  correctAnswer: 1,
  explanation: "`start()` creates a new thread. `run()` just runs in the current thread.",
  language: "Java",
  difficulty: "hard"
},
{
  id: 53,
  question: "Which data structure in Java is best suited for implementing a recursive algorithm with backtracking, such as solving a maze or Sudoku?",
  options: ["Queue", "Stack", "LinkedList", "HashMap"],
  correctAnswer: 1,
  explanation: "A `Stack` is the most suitable structure for backtracking algorithms, as it follows LIFO, mimicking the recursive call stack.",
  language: "Java",
  difficulty: "hard"
},
{
  id: 54,
  question: "Which Java keyword is used to prevent method overriding?",
  options: ["static", "const", "final", "sealed"],
  correctAnswer: 2,
  explanation: "`final` prevents method overriding.",
  language: "Java",
  difficulty: "hard"
},
  {
    id: 56,
    question: "Which of the following is not a valid Java memory area?",
    options: ["Heap", "Stack", "Code", "RAM"],
    correctAnswer: 3,
    explanation: "`RAM` is hardware, not a JVM memory area like Heap, Stack, or Code.",
    language: "Java",
    difficulty: "difficult"
  },
  {
    id: 57,
    question: "What does the `finalize()` method do in Java?",
    options: [
      "Manually frees memory",
      "Used to define constants",
      "Is called before garbage collection",
      "Initializes an object"
    ],
    correctAnswer: 2,
    explanation: "`finalize()` is called by the garbage collector before destroying an object.",
    language: "Java",
    difficulty: "difficult"
  },
  {
    id: 58,
    question: "Which feature in Java allows multiple methods with the same name in a class hierarchy?",
    options: ["Inheritance", "Method overloading", "Method overriding", "Encapsulation"],
    correctAnswer: 2,
    explanation: "Method overriding enables a subclass to provide a specific implementation of a method.",
    language: "Java",
    difficulty: "difficult"
  },
  {
    id: 59,
    question: "Which exception is thrown when dividing an integer by zero in Java?",
    options: ["ArithmeticException", "NumberFormatException", "IllegalArgumentException", "NullPointerException"],
    correctAnswer: 0,
    explanation: "`ArithmeticException` is thrown for divide-by-zero errors with integers.",
    language: "Java",
    difficulty: "difficult"
  },
  {
    id: 60,
    question: "Which interface must be implemented to create a custom thread in Java?",
    options: ["Runnable", "Callable", "Threadable", "Executor"],
    correctAnswer: 0,
    explanation: "To create a custom thread, implement the `Runnable` interface and define `run()`.",
    language: "Java",
    difficulty: "difficult"
  },

    
  // Easy JavaScript Questions
{
  id: 61,
  question: "Which keyword is used to declare a variable in JavaScript?",
  options: ["int", "let", "define", "varname"],
  correctAnswer: 1,
  explanation: "`let` is one of the modern ways to declare a variable in JavaScript.",
  language: "JavaScript",
  difficulty: "easy"
},
{
  id: 62,
  question: "What will `typeof null` return in JavaScript?",
  options: ["null", "undefined", "object", "number"],
  correctAnswer: 2,
  explanation: "`typeof null` returns `'object'` due to a long-standing bug in JavaScript.",
  language: "JavaScript",
  difficulty: "easy"
},
{
  id: 63,
  question: "Which of these is a correct way to write a function in JavaScript?",
  options: ["function myFunc[] {}", "func myFunc() {}", "function myFunc() {}", "define function()"],
  correctAnswer: 2,
  explanation: "`function myFunc() {}` is the correct syntax.",
  language: "JavaScript",
  difficulty: "easy"
},
{
  id: 64,
  question: "Which of the following is used to create an array in JavaScript?",
  options: ["{}", "[]", "<>", "array()"],
  correctAnswer: 1,
  explanation: "Square brackets `[]` are used to create arrays in JavaScript.",
  language: "JavaScript",
  difficulty: "easy"
},
{
  id: 65,
  question: "Which method adds an element to the end of a JavaScript array?",
  options: ["add()", "append()", "push()", "insert()"],
  correctAnswer: 2,
  explanation: "`push()` appends one or more elements to the end of an array.",
  language: "JavaScript",
  difficulty: "easy"
},
  {
    id:66 ,
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "All of the above"],
    correctAnswer: 3,
    explanation: "`var`, `let`, and `const` are all used to declare variables in JavaScript.",
    language: "JavaScript",
    difficulty: "easy"
  },
  {
    id: 67,
    question: "What is the output of `typeof null` in JavaScript?",
    options: ["null", "object", "undefined", "string"],
    correctAnswer: 1,
    explanation: "`typeof null` returns 'object' due to a legacy bug in JavaScript.",
    language: "JavaScript",
    difficulty: "easy"
  },
  {
    id: 68,
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "--"],
    correctAnswer: 0,
    explanation: "`//` is used to create single-line comments in JavaScript.",
    language: "JavaScript",
    difficulty: "easy"
  },
  {
    id: 69,
    question: "Which method converts a JSON string into a JavaScript object?",
    options: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "toObject()"],
    correctAnswer: 1,
    explanation: "`JSON.parse()` is used to parse a JSON string into an object.",
    language: "JavaScript",
    difficulty: "easy"
  },
  {
    id: 70,
    question: "Which of the following is a primitive data type in JavaScript?",
    options: ["Object", "Function", "Boolean", "Array"],
    correctAnswer: 2,
    explanation: "`Boolean` is a primitive data type in JavaScript.",
    language: "JavaScript",
    difficulty: "easy"
  },

  // Intermediate JavaScript Questions
  {
    id: 71,
    question: "What is a closure in JavaScript?",
    options: [
      "A function inside an object",
      "An object inside a function",
      "A function having access to its outer function scope",
      "A function with private variables"
    ],
    correctAnswer: 2,
    explanation: "A closure gives a function access to variables from an enclosing scope.",
    language: "JavaScript",
    difficulty: "intermediate"
  },
  {
    id: 72,
    question: "What is the purpose of the `bind()` method in JavaScript?",
    options: [
      "To execute a function",
      "To create a new function with a specific `this` value",
      "To copy an object",
      "To delay a function"
    ],
    correctAnswer: 1,
    explanation: "`bind()` creates a new function with a specified `this` value.",
    language: "JavaScript",
    difficulty: "intermediate"
  },
  {
    id: 73,
    question: "Which of the following is true about `==` and `===`?",
    options: [
      "`==` compares value and type, `===` compares only value",
      "`==` compares only value, `===` compares value and type",
      "They are interchangeable",
      "Both are strict equality"
    ],
    correctAnswer: 1,
    explanation: "`==` allows type coercion, while `===` checks for both type and value.",
    language: "JavaScript",
    difficulty: "intermediate"
  },
  {
    id: 74,
    question: "What is the result of `[1,2,3] + [4,5,6]` in JavaScript?",
    options: ["[1,2,3,4,5,6]", "Error", "NaN", "1,2,34,5,6"],
    correctAnswer: 3,
    explanation: "Array addition coerces both arrays to strings, resulting in `'1,2,34,5,6'`.",
    language: "JavaScript",
    difficulty: "intermediate"
  },
  {
    id: 75,
    question: "What will `console.log(typeof NaN)` output?",
    options: ["number", "NaN", "undefined", "object"],
    correctAnswer: 0,
    explanation: "`NaN` stands for Not-a-Number, but its type is still `number` in JavaScript.",
    language: "JavaScript",
    difficulty: "intermediate"
  },

{
  id: 76,
  question: "What will be the output of `console.log(0.1 + 0.2 === 0.3);`?",
  options: ["true", "false", "undefined", "error"],
  correctAnswer: 1,
  explanation: "`0.1 + 0.2` results in a floating-point rounding issue, so it's not exactly `0.3`.",
  language: "JavaScript",
  difficulty: "intermediate"
},
{
  id: 77,
  question: "What does the `map()` function do in JavaScript arrays?",
  options: ["Modifies the array in-place", "Returns a new array with modified values", "Deletes elements", "Sorts the array"],
  correctAnswer: 1,
  explanation: "`map()` creates a new array by applying a function to each element.",
  language: "JavaScript",
  difficulty: "intermediate"
},
{
  id: 78,
  question: "What is the difference between `==` and `===` in JavaScript?",
  options: ["Both are the same", "`==` is strict", "`===` allows type coercion", "`==` does type coercion, `===` does not"],
  correctAnswer: 3,
  explanation: "`==` performs type coercion, while `===` checks both value and type.",
  language: "JavaScript",
  difficulty: "intermediate"
},
{
  id: 79,
  question: "Which object method is used to merge two or more objects?",
  options: ["Object.merge()", "Object.combine()", "Object.assign()", "Object.append()"],
  correctAnswer: 2,
  explanation: "`Object.assign()` is used to copy values from one or more source objects to a target object.",
  language: "JavaScript",
  difficulty: "intermediate"
},
{
  id: 80,
  question: "What is a closure in JavaScript?",
  options: ["A block scope", "A function having access to variables in its lexical scope", "An error handling block", "A type of loop"],
  correctAnswer: 1,
  explanation: "A closure is a function that remembers its lexical scope even when executed outside of it.",
  language: "JavaScript",
  difficulty: "intermediate"
},

  // Hard JavaScript Questions
{
  id: 81,
  question: "Which of the following best describes the purpose of `Object.freeze()` in JavaScript?",
  options: [
    "Prevents adding new properties but allows editing existing ones",
    "Locks object so no changes (add/update/delete) are allowed",
    "Only prevents deletion of properties",
    "Makes properties read-only but allows reconfiguration"
  ],
  correctAnswer: 1,
  explanation: "`Object.freeze()` makes an object completely immutable—no additions, deletions, or changes allowed.",
  language: "JavaScript",
  difficulty: "hard"
},
{
  id: 82,
  question: "What is the output of the following?\n\nconsole.log([] + []);",
  options: ["[]", "0", "undefined", '"" (empty string)'],
  correctAnswer: 3,
  explanation: "In JavaScript, `[] + []` results in an empty string due to type coercion.",
  language: "JavaScript",
  difficulty: "hard"
},
{
  id: 83,
  question: "Which of the following best describes event delegation in JavaScript?",
  options: [
    "Binding event listeners to every child element",
    "Using a parent to handle events for current and future children",
    "Using inline event handlers",
    "Creating events manually"
  ],
  correctAnswer: 1,
  explanation: "Event delegation uses a parent element to listen for events on its children.",
  language: "JavaScript",
  difficulty: "hard"
},
{
  id: 84,
  question: "Which built-in JavaScript function is used to serialize an object to a string?",
  options: ["JSON.stringify()", "Object.toString()", "String()", "serialize()"],
  correctAnswer: 0,
  explanation: "`JSON.stringify()` converts an object into a JSON string.",
  language: "JavaScript",
  difficulty: "hard"
},
// Multiple correct options
{
  id: 85,
  question: "What is the output of the following code?\n\nlet a = [1, 2, 3];\nlet b = a;\nb.push(4);\nconsole.log(a);",
  options: [
    "[1, 2, 3]",
    "[1, 2, 3, 4]",
    "[4, 1, 2, 3]",
    "undefined"
  ],
  correctAnswer: 1,
  explanation: "`a` and `b` both reference the same array in memory, so changes via `b` affect `a`.",
  language: "JavaScript",
  difficulty: "hard"
},
  {
    id: 86,
    question: "Which of the following best describes the event loop in JavaScript?",
    options: [
      "A function that handles events",
      "A queue of event handlers",
      "A concurrency model handling asynchronous tasks via the call stack and task queue",
      "A loop that repeats user events"
    ],
    correctAnswer: 2,
    explanation: "The event loop allows non-blocking asynchronous operations by using the call stack and queue.",
    language: "JavaScript",
    difficulty: "difficult"
  },
  {
    id: 87,
    question: "What is the output of `let a = (1, 2, 3); console.log(a);`?",
    options: ["1", "2", "3", "undefined"],
    correctAnswer: 2,
    explanation: "The comma operator evaluates all expressions and returns the last one, so `a = 3`.",
    language: "JavaScript",
    difficulty: "difficult"
  },
  {
    id: 88,
    question: "What does the `Object.freeze()` method do?",
    options: [
      "Makes an object immutable",
      "Freezes the properties temporarily",
      "Allows shallow copy",
      "Disables function calls"
    ],
    correctAnswer: 0,
    explanation: "`Object.freeze()` prevents modification of existing properties and addition of new ones.",
    language: "JavaScript",
    difficulty: "difficult"
  },
  {
    id: 89,
    question: "Which of the following is NOT a valid way to create an object in JavaScript?",
    options: [
      "`Object.create(null)`",
      "`{}`",
      "`new Object()`",
      "`Object()`"
    ],
    correctAnswer: 3,
    explanation: "`Object()` as a standalone function is valid but not a constructor for object creation.",
    language: "JavaScript",
    difficulty: "difficult"
  },
  {
    id: 90,
    question: "How are promises executed in the JavaScript event loop?",
    options: [
      "In the call stack",
      "In the task queue",
      "In the microtask queue after the current stack",
      "In parallel with the stack"
    ],
    correctAnswer: 2,
    explanation: "Promises are handled in the microtask queue which runs after the current call stack is empty.",
    language: "JavaScript",
    difficulty: "difficult"
  },

 
  // Easy Python Questions
{
  id: 91,
  question: "Which keyword is used to define a function in Python?",
  options: ["function", "fun", "def", "define"],
  correctAnswer: 2,
  explanation: "`def` is the correct keyword to define a function in Python.",
  language: "Python",
  difficulty: "easy"
},
{
  id: 92,
  question: "How do you insert comments in Python code?",
  options: ["// This is a comment", "# This is a comment", "/* comment */", "-- comment"],
  correctAnswer: 1,
  explanation: "`#` is used to write single-line comments in Python.",
  language: "Python",
  difficulty: "easy"
},
{
  id: 93,
  question: "What is the output of `print(type([]))`?",
  options: ["<class 'list'>", "<type 'list'>", "list", "array"],
  correctAnswer: 0,
  explanation: "`[]` represents a list, so `type([])` is `<class 'list'>`.",
  language: "Python",
  difficulty: "easy"
},
{
  id: 94,
  question: "Which of the following is not a valid Python data type?",
  options: ["int", "float", "char", "dict"],
  correctAnswer: 2,
  explanation: "Python does not have a `char` type; it uses strings even for single characters.",
  language: "Python",
  difficulty: "easy"
},
{
  id: 95,
  question: "Which method is used to add an element to a list in Python?",
  options: ["add()", "append()", "insert()", "push()"],
  correctAnswer: 1,
  explanation: "`append()` is used to add an element to the end of a list.",
  language: "Python",
  difficulty: "easy"
},
  {
    id: 96,
    question: "Which of the following is the correct way to define a function in Python?",
    options: ["function myFunc():", "def myFunc():", "define myFunc():", "func myFunc():"],
    correctAnswer: 1,
    explanation: "In Python, functions are defined using the `def` keyword.",
    language: "Python",
    difficulty: "easy"
  },
  {
    id: 97,
    question: "What is the output of `len([1, 2, 3])`?",
    options: ["2", "3", "0", "None"],
    correctAnswer: 1,
    explanation: "The `len()` function returns the number of items in the list, which is 3.",
    language: "Python",
    difficulty: "easy"
  },
  {
    id: 98,
    question: "Which of these is a valid Python variable name?",
    options: ["2nd_value", "_value", "value-name", "class"],
    correctAnswer: 1,
    explanation: "Variable names can start with an underscore but not with a digit or reserved keyword.",
    language: "Python",
    difficulty: "easy"
  },
  {
    id: 99,
    question: "How do you write a comment in Python?",
    options: ["// comment", "/* comment */", "# comment", "-- comment"],
    correctAnswer: 2,
    explanation: "In Python, comments start with a `#` symbol.",
    language: "Python",
    difficulty: "easy"
  },
  {
    id: 100,
    question: "What is the output of `type(5.0)`?",
    options: ["<class 'float'>", "<class 'int'>", "<class 'double'>", "<class 'number'>"],
    correctAnswer: 0,
    explanation: "`5.0` is a floating-point number, so its type is `<class 'float'>`.",
    language: "Python",
    difficulty: "easy"
  },

  // Intermediate Python Questions
{
  id: 101,
  question: "Which of the following data structures does not allow duplicate elements?",
  options: ["List", "Dictionary", "Set", "Tuple"],
  correctAnswer: 2,
  explanation: "Sets in Python are unordered and do not allow duplicate elements.",
  language: "Python",
  difficulty: "intermediate"
},
{
  id: 102,
  question: "What will be the output of the following code?\n\nx = [1, 2, 3]\nprint(x[::-1])",
  options: ["[1, 2, 3]", "[3, 2, 1]", "Error", "[2, 3, 1]"],
  correctAnswer: 1,
  explanation: "`[::-1]` reverses the list.",
  language: "Python",
  difficulty: "intermediate"
},
{
  id: 103,
  question: "Which of the following is used to iterate over a dictionary's keys and values?",
  options: ["items()", "keys()", "values()", "enumerate()"],
  correctAnswer: 0,
  explanation: "`items()` returns both keys and values in a dictionary.",
  language: "Python",
  difficulty: "intermediate"
},
{
  id: 104,
  question: "Which built-in function can be used to sort a list in Python without modifying the original?",
  options: ["sort()", "order()", "sorted()", "arrange()"],
  correctAnswer: 2,
  explanation: "`sorted()` returns a sorted list without modifying the original.",
  language: "Python",
  difficulty: "intermediate"
},
{
  id: 105,
  question: "What will be the output?\n\ndef f(x=[]):\n  x.append(1)\n  return x\n\nprint(f())\nprint(f())",
  options: ["[1], [1]", "[1], [1, 1]", "[1, 1], [1, 1]", "Error"],
  correctAnswer: 1,
  explanation: "Default mutable arguments retain changes across calls; `x` becomes `[1]`, then `[1, 1]`.",
  language: "Python",
  difficulty: "intermediate"
},

  {
    id: 106,
    question: "Which collection type does not allow duplicate elements?",
    options: ["List", "Tuple", "Set", "Dictionary"],
    correctAnswer: 2,
    explanation: "Sets in Python automatically eliminate duplicates.",
    language: "Python",
    difficulty: "intermediate"
  },
  {
    id: 107,
    question: "What will `print(''.join(['a', 'b', 'c']))` output?",
    options: ["a b c", "abc", "['a','b','c']", "None"],
    correctAnswer: 1,
    explanation: "`join()` concatenates a list of strings into a single string.",
    language: "Python",
    difficulty: "intermediate"
  },
  {
    id: 108,
    question: "What is the result of `bool([])` in Python?",
    options: ["True", "False", "Error", "None"],
    correctAnswer: 1,
    explanation: "Empty collections like `[]`, `{}`, `''` return `False` in boolean context.",
    language: "Python",
    difficulty: "intermediate"
  },
  {
    id: 109,
    question: "How do you catch exceptions in Python?",
    options: ["try/catch", "try/except", "try/catch/finally", "try/handle"],
    correctAnswer: 1,
    explanation: "`try/except` is the correct syntax for handling exceptions in Python.",
    language: "Python",
    difficulty: "intermediate"
  },
  {
    id: 110,
    question: "Which method is used to add an item to a list?",
    options: [".add()", ".insert()", ".append()", ".extend()"],
    correctAnswer: 2,
    explanation: "`append()` adds a single element to the end of a list.",
    language: "Python",
    difficulty: "intermediate"
  },

  // Hard Python Questions
{
  id: 111,
  question: "What will be the output of the following code?\n\ndef func(val, lst=[]):\n    lst.append(val)\n    return lst\n\nprint(func(1))\nprint(func(2))",
  options: [
    "[1], [2]",
    "[1], [1, 2]",
    "[2], [2]",
    "Error"
  ],
  correctAnswer: 1,
  explanation: "The default list `lst=[]` is mutable and shared between calls, so values accumulate: `[1]`, then `[1, 2]`.",
  language: "Python",
  difficulty: "hard"
},
{
  id: 112,
  question: "What is the time complexity of inserting an element into a Python set?",
  options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
  correctAnswer: 0,
  explanation: "Inserting into a set is O(1) on average due to hash-based implementation.",
  language: "Python",
  difficulty: "hard"
},
{
  id: 113,
  question: "What will be the output?\n\na = (1, 2, 3)\na[0] = 10",
  options: ["(10, 2, 3)", "Error", "[10, 2, 3]", "None"],
  correctAnswer: 1,
  explanation: "Tuples are immutable. You cannot assign to individual elements.",
  language: "Python",
  difficulty: "hard"
},
{
  id: 114,
  question: "Which of the following statements about Python's Global Interpreter Lock (GIL) is true?",
  options: [
    "It allows true parallel execution of threads on multi-core CPUs",
    "It prevents multiple processes from running simultaneously",
    "It allows only one thread to execute Python bytecode at a time",
    "It is used to manage memory leaks in Python"
  ],
  correctAnswer: 2,
  explanation: "The GIL allows only one thread to execute Python bytecode at a time, even on multi-core systems, limiting true parallelism in multi-threaded Python programs.",
  language: "Python",
  difficulty: "hard"
},
{
  id: 115,
  question: "Which module is used to implement priority queues in Python?",
  options: ["heapq", "queue", "stack", "bisect"],
  correctAnswer: 0,
  explanation: "`heapq` is used to implement heaps and priority queues in Python.",
  language: "Python",
  difficulty: "hard"
},
  {
    id: 116,
    question: "What will be the output of the following code?\n\n```python\nx = [1, 2, 3]\ny = x\nx.append(4)\nprint(y)\n```",
    options: ["[1, 2, 3]", "[1, 2, 3, 4]", "[4]", "Error"],
    correctAnswer: 1,
    explanation: "`x` and `y` point to the same list, so modifying `x` also affects `y`.",
    language: "Python",
    difficulty: "difficult"
  },
  {
    id: 117,
    question: "What is the output of `bool('False')`?",
    options: ["False", "True", "None", "Error"],
    correctAnswer: 1,
    explanation: "Non-empty strings evaluate to `True` regardless of content.",
    language: "Python",
    difficulty: "difficult"
  },
  {
    id: 118,
    question: "What is a Python decorator?",
    options: [
      "A type of loop",
      "A design pattern for UI",
      "A function that modifies another function",
      "A comment style"
    ],
    correctAnswer: 2,
    explanation: "A decorator is a function that takes another function and extends its behavior.",
    language: "Python",
    difficulty: "difficult"
  },
  {
    id: 119,
    question: "Which of the following best describes Python's GIL (Global Interpreter Lock)?",
    options: [
      "Prevents race conditions in multi-threaded code",
      "Allows true parallel threading",
      "Only applies to Python 2",
      "Locks global variables during execution"
    ],
    correctAnswer: 0,
    explanation: "GIL prevents true multi-threading by allowing only one thread at a time in the interpreter.",
    language: "Python",
    difficulty: "difficult"
  },
  {
    id: 120,
    question: "Which of the following is a correct way to create a generator?",
    options: [
      "`yield` inside a function",
      "`return` a list",
      "Using list comprehension",
      "Calling `iter()` on a function"
    ],
    correctAnswer: 0,
    explanation: "Generators are created using the `yield` keyword inside functions.",
    language: "Python",
    difficulty: "difficult"
  },
     {
    id: 121,
    question: "What does the @staticmethod decorator do in Python?",
    options: [
    " Makes a function a class method",
 "Allows the function to modify class state",
"Makes the function static, not requiring self or cls",
 "Prevents the method from being inherited"
    ],
    correctAnswer: 2,
    explanation: "@staticmethod defines a method that doesn't access class (cls) or instance (self) data. It behaves like a regular function within the class.",
    language: "Python",
    difficulty: "difficult"
  },
{
    id: 122,
    question: "Which of the following statements is true about Python's Global Interpreter Lock (GIL",
    options: ["It allows true parallel execution of threads",
 "It prevents memory leaks in Python programs",
 "It limits execution to one thread at a time in a single process",
 "It is removed when using multiprocessing"
    ],
    correctAnswer: 2,
    explanation: "The GIL ensures that only one thread executes Python bytecode at a time, even on multi-core systems. For parallelism, use multiprocessing instead.",
    language: "Python",
    difficulty: "difficult"
  }
];

export const getQuestionsByLanguageAndDifficulty = (
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
};