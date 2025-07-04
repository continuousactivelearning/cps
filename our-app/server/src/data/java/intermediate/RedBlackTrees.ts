import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Red-Black Trees - Intermediate Quiz",
  quizLevel: "intermediate",
  lang: "java",
  description: "Assess your understanding of Red-Black Trees, their rules, and operations.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Red-Black Trees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "What is the maximum height of a Red-Black Tree with n nodes?",
      options: [
        { optionText: "2*log(n + 1)", optionTag: "B" },
        { optionText: "log(n)", optionTag: "A" },
        { optionText: "n", optionTag: "C" },
        { optionText: "sqrt(n)", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is a key property of Red-Black Trees?",
      options: [
        { optionText: "Every path from root to NULL has same number of black nodes", optionTag: "D" },
        { optionText: "All nodes are red", optionTag: "A" },
        { optionText: "Left subtree always taller", optionTag: "B" },
        { optionText: "Red nodes can have red children", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which color must the root of a Red-Black Tree always be?",
      options: [
        { optionText: "Black", optionTag: "A" },
        { optionText: "Red", optionTag: "C" },
        { optionText: "Alternate colors", optionTag: "D" },
        { optionText: "White", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which of the following is NOT a rule of Red-Black Trees?",
      options: [
        { optionText: "Red node must have red parent", optionTag: "C" },
        { optionText: "Every leaf is black", optionTag: "A" },
        { optionText: "Root is black", optionTag: "B" },
        { optionText: "Newly inserted node is red", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What kind of tree is a Red-Black Tree?",
      options: [
        { optionText: "Self-balancing binary search tree", optionTag: "B" },
        { optionText: "Non-binary tree", optionTag: "A" },
        { optionText: "Min-heap", optionTag: "C" },
        { optionText: "Graph", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which operation can cause rebalancing in a Red-Black Tree?",
      options: [
        { optionText: "Insertion", optionTag: "C" },
        { optionText: "Traversal", optionTag: "A" },
        { optionText: "Reading", optionTag: "B" },
        { optionText: "Searching", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How are Red-Black Trees related to AVL Trees?",
      options: [
        { optionText: "Both are balanced BSTs", optionTag: "D" },
        { optionText: "Red-Black Trees are more strictly balanced", optionTag: "A" },
        { optionText: "AVL Trees are faster for insertion", optionTag: "B" },
        { optionText: "AVL Trees use colors", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What is the time complexity of insert operation in Red-Black Tree?",
      options: [
        { optionText: "O(log n)", optionTag: "A" },
        { optionText: "O(n)", optionTag: "C" },
        { optionText: "O(1)", optionTag: "B" },
        { optionText: "O(n log n)", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What is used to maintain balance in a Red-Black Tree?",
      options: [
        { optionText: "Coloring and rotations", optionTag: "B" },
        { optionText: "Hashing", optionTag: "A" },
        { optionText: "Binary flags", optionTag: "C" },
        { optionText: "Stack", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which color node can have both red and black children?",
      options: [
        { optionText: "Black", optionTag: "D" },
        { optionText: "Red", optionTag: "B" },
        { optionText: "White", optionTag: "A" },
        { optionText: "Any color", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which operation is used after insertion to fix Red-Black Tree?",
      options: [
        { optionText: "Recoloring and rotations", optionTag: "C" },
        { optionText: "Complete rebuild", optionTag: "B" },
        { optionText: "Conversion to AVL", optionTag: "A" },
        { optionText: "Depth rebalancing", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "What is the minimum height of a Red-Black Tree with 7 nodes?",
      options: [
        { optionText: "2", optionTag: "A" },
        { optionText: "7", optionTag: "C" },
        { optionText: "3", optionTag: "B" },
        { optionText: "1", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What happens when a red node has a red child?",
      options: [
        { optionText: "Tree violates Red-Black property", optionTag: "C" },
        { optionText: "Nothing", optionTag: "A" },
        { optionText: "Becomes black", optionTag: "B" },
        { optionText: "Tree is removed", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "How are new nodes inserted in a Red-Black Tree?",
      options: [
        { optionText: "As red", optionTag: "B" },
        { optionText: "As black", optionTag: "A" },
        { optionText: "Depends on position", optionTag: "C" },
        { optionText: "Randomly colored", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which of these guarantees tree height balance in Red-Black Trees?",
      options: [
        { optionText: "Black height consistency", optionTag: "D" },
        { optionText: "AVL factor", optionTag: "A" },
        { optionText: "Node numbering", optionTag: "B" },
        { optionText: "Node weights", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which color has no constraint on children’s color?",
      options: [
        { optionText: "Black", optionTag: "A" },
        { optionText: "Red", optionTag: "B" },
        { optionText: "Both", optionTag: "C" },
        { optionText: "None", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Red-Black Tree deletion may cause:",
      options: [
        { optionText: "Double black node issue", optionTag: "C" },
        { optionText: "Rotation always", optionTag: "A" },
        { optionText: "Red leaf creation", optionTag: "B" },
        { optionText: "Illegal coloring", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Red-Black Trees can be used in which application?",
      options: [
        { optionText: "Databases and memory managers", optionTag: "D" },
        { optionText: "Web browsers only", optionTag: "A" },
        { optionText: "Machine learning", optionTag: "C" },
        { optionText: "Only on sorted data", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which condition holds true for every Red-Black Tree?",
      options: [
        { optionText: "Every path to leaf has same number of black nodes", optionTag: "A" },
        { optionText: "Red root", optionTag: "C" },
        { optionText: "Odd number of nodes", optionTag: "B" },
        { optionText: "All leaf nodes are red", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "A Red-Black Tree can degrade to:",
      options: [
        { optionText: "Logarithmic height", optionTag: "B" },
        { optionText: "Linked list", optionTag: "A" },
        { optionText: "Array", optionTag: "C" },
        { optionText: "Circular queue", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;