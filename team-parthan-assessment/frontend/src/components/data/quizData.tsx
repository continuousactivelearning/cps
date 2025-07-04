export const TOPIC_QUIZ_DATA = {
  'arrays': {
    questions: [
      {
        id: '1',
        question: 'What is the time complexity of accessing an element in an array by index?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correctAnswer: 0,
        explanation: 'Array elements can be accessed directly using their index in constant time O(1).'
      },
      {
        id: '2',
        question: 'Which operation has O(n) time complexity in the worst case for arrays?',
        options: ['Access', 'Search (unsorted)', 'Insert at end', 'Delete at end'],
        correctAnswer: 1,
        explanation: 'Searching in an unsorted array requires checking each element, giving O(n) time complexity.'
      },
      {
        id: '3',
        question: 'What happens when you try to access an array index that is out of bounds in most programming languages?',
        options: ['Returns null', 'Returns 0', 'Throws an error/exception', 'Returns the last element'],
        correctAnswer: 2,
        explanation: 'Most programming languages throw an error or exception when accessing out-of-bounds array indices.'
      },
      {
        id: '4',
        question: 'Which of the following is true about dynamic arrays (like ArrayList in Java)?',
        options: ['Fixed size', 'Can grow/shrink during runtime', 'Always sorted', 'Only stores integers'],
        correctAnswer: 1,
        explanation: 'Dynamic arrays can resize themselves during runtime as elements are added or removed.'
      },
      {
        id: '5',
        question: 'What is the space complexity of an array storing n elements?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correctAnswer: 2,
        explanation: 'An array storing n elements requires O(n) space, proportional to the number of elements.'
      }
    ]
  },
  'strings': {
    questions: [
      {
        id: '1',
        question: 'What is the time complexity of string concatenation in most programming languages?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correctAnswer: 2,
        explanation: 'String concatenation typically requires O(n) time as it needs to copy all characters to a new string.'
      },
      {
        id: '2',
        question: 'Which algorithm is commonly used for pattern matching in strings?',
        options: ['Binary Search', 'KMP Algorithm', 'Quick Sort', 'Dijkstra'],
        correctAnswer: 1,
        explanation: 'KMP (Knuth-Morris-Pratt) algorithm is specifically designed for efficient pattern matching in strings.'
      },
      {
        id: '3',
        question: 'What is a palindrome?',
        options: ['A string with only vowels', 'A string that reads the same forwards and backwards', 'A string with equal consonants and vowels', 'A string with no repeated characters'],
        correctAnswer: 1,
        explanation: 'A palindrome is a string that reads the same when reversed, like "racecar" or "level".'
      },
      {
        id: '4',
        question: 'Which data structure is most efficient for checking if a string is a palindrome?',
        options: ['Array', 'Stack', 'Queue', 'Two pointers'],
        correctAnswer: 3,
        explanation: 'Two pointers (one from start, one from end) provide the most efficient O(n/2) solution for palindrome checking.'
      },
      {
        id: '5',  
        question: 'What is the time complexity of finding the length of a string?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'Depends on implementation'],
        correctAnswer: 3,
        explanation: 'String length complexity depends on implementation - O(1) if stored, O(n) if calculated by traversing.'
      }
    ]
  },
  'linked-lists': {
    questions: [
      {
        id: '1',
        question: 'What is the time complexity of inserting an element at the beginning of a linked list?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correctAnswer: 0,
        explanation: 'Inserting at the beginning of a linked list only requires updating a few pointers, taking O(1) time.'
      },
      {
        id: '2',
        question: 'What is the main advantage of linked lists over arrays?',
        options: ['Faster access', 'Less memory usage', 'Dynamic size', 'Better cache locality'],
        correctAnswer: 2,
        explanation: 'Linked lists can grow or shrink dynamically during runtime, unlike fixed-size arrays.'
      },
      {
        id: '3',
        question: 'How do you detect a cycle in a linked list efficiently?',
        options: ['Use extra space to store visited nodes', 'Floyd\'s Cycle Detection (Tortoise and Hare)', 'Sort the list first', 'Use recursion'],
        correctAnswer: 1,
        explanation: 'Floyd\'s Cycle Detection algorithm uses two pointers moving at different speeds to detect cycles in O(1) space.'
      },
      {
        id: '4',
        question: 'What is the time complexity of searching for an element in a linked list?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correctAnswer: 2,
        explanation: 'Searching in a linked list requires traversing from the head, giving O(n) time complexity in worst case.'
      },
      {
        id: '5',
        question: 'Which operation is more efficient in linked lists compared to arrays?',
        options: ['Random access', 'Binary search', 'Insertion/deletion at arbitrary position', 'Memory usage'],
        correctAnswer: 2,
        explanation: 'Insertion and deletion at arbitrary positions are more efficient in linked lists (O(1) if position known) vs arrays (O(n)).'
      }
    ]
  },
  'stacks': {
    questions: [
      {
        id: '1',
        question: 'What principle does a stack follow?',
        options: ['FIFO', 'LIFO', 'Random Access', 'Priority Based'],
        correctAnswer: 1,
        explanation: 'Stack follows LIFO (Last In, First Out) principle - the last element added is the first one removed.'
      },
      {
        id: '2',
        question: 'Which of these applications commonly uses stacks?',
        options: ['BFS traversal', 'Function call management', 'Process scheduling', 'Database indexing'],
        correctAnswer: 1,
        explanation: 'Function calls use stacks to manage return addresses and local variables (call stack).'
      },
      {
        id: '3',
        question: 'What happens when you try to pop from an empty stack?',
        options: ['Returns null', 'Returns 0', 'Stack underflow error', 'Creates a new element'],
        correctAnswer: 2,
        explanation: 'Attempting to pop from an empty stack results in a stack underflow error or exception.'
      },
      {
        id: '4',
        question: 'Which operation is NOT a standard stack operation?',
        options: ['Push', 'Pop', 'Peek/Top', 'Sort'],
        correctAnswer: 3,
        explanation: 'Sort is not a standard stack operation. Standard operations are push, pop, peek/top, and isEmpty.'
      },
      {
        id: '5',
        question: 'What is the time complexity of all basic stack operations?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correctAnswer: 0,
        explanation: 'All basic stack operations (push, pop, peek) can be performed in constant O(1) time.'
      }
    ]
  },
  'queues': {
    questions: [
      {
        id: '1',
        question: 'What principle does a queue follow?',
        options: ['LIFO', 'FIFO', 'Random Access', 'Priority Based'],
        correctAnswer: 1,
        explanation: 'Queue follows FIFO (First In, First Out) principle - the first element added is the first one removed.'
      },
      {
        id: '2',
        question: 'In a circular queue, what advantage does it have over a linear queue?',
        options: ['Faster operations', 'Better space utilization', 'Easier implementation', 'Supports priority'],
        correctAnswer: 1,
        explanation: 'Circular queues reuse empty spaces, providing better space utilization compared to linear queues.'
      },
      {
        id: '3',
        question: 'Which traversal algorithm uses queues?',
        options: ['DFS', 'BFS', 'Inorder', 'Preorder'],
        correctAnswer: 1,
        explanation: 'BFS (Breadth-First Search) uses queues to process nodes level by level.'
      },
      {
        id: '4',
        question: 'What is a priority queue?',
        options: ['A queue with faster operations', 'A queue where elements have priorities', 'A queue with fixed size', 'A queue with no duplicates'],
        correctAnswer: 1,
        explanation: 'A priority queue is a data structure where each element has a priority, and elements are served based on priority.'
      },
      {
        id: '5',
        question: 'What happens when you try to enqueue to a full queue (in fixed-size implementation)?',
        options: ['Overwrites oldest element', 'Queue overflow error', 'Automatically resizes', 'Ignores the operation'],
        correctAnswer: 1,
        explanation: 'In fixed-size queue implementations, trying to enqueue to a full queue results in queue overflow error.'
      }
    ]
  },
  'trees': {
    questions: [
      {
        id: '1',
        question: 'What is the maximum number of nodes at level k in a binary tree?',
        options: ['k', '2^k', '2^(k-1)', '2^(k+1)'],
        correctAnswer: 1,
        explanation: 'At level k (starting from 0), a binary tree can have at most 2^k nodes.'
      },
      {
        id: '2',
        question: 'In a complete binary tree with n nodes, what is the height?',
        options: ['log₂(n)', '⌊log₂(n)⌋', '⌈log₂(n+1)⌉ - 1', 'n'],
        correctAnswer: 2,
        explanation: 'The height of a complete binary tree with n nodes is ⌈log₂(n+1)⌉ - 1.'
      },
      {
        id: '3',
        question: 'Which traversal visits nodes in ascending order for a Binary Search Tree?',
        options: ['Preorder', 'Inorder', 'Postorder', 'Level-order'],
        correctAnswer: 1,
        explanation: 'Inorder traversal of a BST visits nodes in ascending order (left → root → right).'
      },
      {
        id: '4',
        question: 'What is the worst-case time complexity for search in a BST?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correctAnswer: 2,
        explanation: 'In worst case (skewed tree), BST search degrades to O(n) time complexity.'
      },
      {
        id: '5',
        question: 'Which property must hold for every node in a Binary Search Tree?',
        options: ['Left child < Node < Right child', 'Node has exactly 2 children', 'Tree is balanced', 'All leaves at same level'],
        correctAnswer: 0,
        explanation: 'In BST, for every node, all values in left subtree < node value < all values in right subtree.'
      }
    ]
  },
  'recursion': {
    questions: [
      {
        id: '1',
        question: 'What are the two essential components of recursion?',
        options: ['Loop and condition', 'Base case and recursive case', 'Input and output', 'Function and variable'],
        correctAnswer: 1,
        explanation: 'Recursion requires a base case (stopping condition) and recursive case (function calling itself).'
      },
      {
        id: '2',
        question: 'What happens if a recursive function lacks a proper base case?',
        options: ['Compilation error', 'Runtime error', 'Stack overflow', 'Infinite loop'],
        correctAnswer: 2,
        explanation: 'Without a proper base case, recursive calls continue indefinitely, leading to stack overflow.'
      },
      {
        id: '3',
        question: 'Which data structure is implicitly used in recursion?',
        options: ['Array', 'Queue', 'Stack', 'Tree'],
        correctAnswer: 2,
        explanation: 'Recursion uses the call stack to store function calls and their local variables.'
      },
      {
        id: '4',
        question: 'What is tail recursion?',
        options: ['Recursion at the end of program', 'Recursive call is the last operation', 'Recursion with multiple base cases', 'Recursion using loops'],
        correctAnswer: 1,
        explanation: 'Tail recursion occurs when the recursive call is the last operation in the function.'
      },
      {
        id: '5',
        question: 'Which approach can optimize recursive solutions with overlapping subproblems?',
        options: ['Iteration', 'Memoization', 'Divide and conquer', 'Greedy method'],
        correctAnswer: 1,
        explanation: 'Memoization stores results of subproblems to avoid redundant calculations in recursive solutions.'
      }
    ]
  },
  'sorting': {
    questions: [
      {
        id: '1',
        question: 'Which sorting algorithm has the best average-case time complexity?',
        options: ['Bubble Sort', 'Selection Sort', 'Merge Sort', 'Insertion Sort'],
        correctAnswer: 2,
        explanation: 'Merge Sort has O(n log n) time complexity in all cases (best, average, worst).'
      },
      {
        id: '2',
        question: 'Which sorting algorithm is stable?',
        options: ['Quick Sort', 'Heap Sort', 'Selection Sort', 'Merge Sort'],
        correctAnswer: 3,
        explanation: 'Merge Sort is stable - it preserves the relative order of equal elements.'
      },
      {
        id: '3',
        question: 'What is the space complexity of Quick Sort?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correctAnswer: 1,
        explanation: 'Quick Sort has O(log n) space complexity due to recursive calls on the call stack.'
      },
      {
        id: '4',
        question: 'Which sorting algorithm performs best on nearly sorted arrays?',
        options: ['Quick Sort', 'Merge Sort', 'Insertion Sort', 'Heap Sort'],
        correctAnswer: 2,
        explanation: 'Insertion Sort performs very well (nearly O(n)) on already sorted or nearly sorted arrays.'
      },
      {
        id: '5',
        question: 'What is the worst-case time complexity of Quick Sort?',
        options: ['O(n log n)', 'O(n²)', 'O(n)', 'O(log n)'],
        correctAnswer: 1,
        explanation: 'Quick Sort has O(n²) worst-case time complexity when pivot is always the smallest or largest element.'
      }
    ]
  }
};