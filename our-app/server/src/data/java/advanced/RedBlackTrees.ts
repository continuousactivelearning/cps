import { QuizDocument } from "../../../interfaces/Document_Interfaces";
import mongoose from "mongoose";

const quizData: Partial<QuizDocument> = {
  title: "Java Red-Black Trees - Advanced Quiz",
  quizLevel: "advanced",
  lang: "java",
  description: "Test your advanced understanding of Red-Black Trees and their balancing rules in Java.",
  topic: {
    courseID: new mongoose.Types.ObjectId(),
    courseName: "Red-Black Trees"
  },
  quizScore: 20,
  questions: [
    {
      questionText: "Which of the following is NOT a property of Red-Black Trees?",
      options: [
        { optionText: "Every node is either red or black", optionTag: "A" },
        { optionText: "Root is always red", optionTag: "B" },
        { optionText: "Every leaf (NIL) is black", optionTag: "C" },
        { optionText: "Red node cannot have a red child", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What is the maximum height of a Red-Black Tree with n nodes?",
      options: [
        { optionText: "2 log(n+1)", optionTag: "A" },
        { optionText: "log n", optionTag: "B" },
        { optionText: "n", optionTag: "C" },
        { optionText: "√n", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "What color is a newly inserted node in Red-Black Tree?",
      options: [
        { optionText: "Black", optionTag: "C" },
        { optionText: "White", optionTag: "D" },
        { optionText: "Red", optionTag: "A" },
        { optionText: "Grey", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which case requires recoloring only (no rotations) in Red-Black Tree insertion?",
      options: [
        { optionText: "Uncle is red", optionTag: "D" },
        { optionText: "Uncle is black", optionTag: "B" },
        { optionText: "Uncle is null", optionTag: "C" },
        { optionText: "Uncle is root", optionTag: "A" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "What does the 'black-height' of a node mean?",
      options: [
        { optionText: "Longest path to root", optionTag: "C" },
        { optionText: "Number of black nodes from node to root", optionTag: "B" },
        { optionText: "Sum of all red nodes to leaves", optionTag: "D" },
        { optionText: "Depth of red nodes", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which rotation may be needed when left child of right child is red?",
      options: [
        { optionText: "Right Rotation", optionTag: "C" },
        { optionText: "Left Rotation", optionTag: "D" },
        { optionText: "Right-Left Rotation", optionTag: "A" },
        { optionText: "Left-Right Rotation", optionTag: "B" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which property ensures balancing in Red-Black Trees?",
      options: [
        { optionText: "Red node can’t have red child", optionTag: "D" },
        { optionText: "Black nodes on each path must be same", optionTag: "C" },
        { optionText: "Root must be black", optionTag: "B" },
        { optionText: "All are required", optionTag: "A" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Time complexity of insertion in Red-Black Tree is:",
      options: [
        { optionText: "O(log n)", optionTag: "B" },
        { optionText: "O(n)", optionTag: "A" },
        { optionText: "O(n log n)", optionTag: "D" },
        { optionText: "O(1)", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "What happens if both parent and uncle are red during insertion?",
      options: [
        { optionText: "Only recoloring", optionTag: "A" },
        { optionText: "Rotation and recoloring", optionTag: "D" },
        { optionText: "No changes", optionTag: "B" },
        { optionText: "Swap nodes", optionTag: "C" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many NIL nodes are in a Red-Black Tree with n internal nodes?",
      options: [
        { optionText: "n", optionTag: "C" },
        { optionText: "2n", optionTag: "D" },
        { optionText: "n+1", optionTag: "B" },
        { optionText: "n-1", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which rule prevents the Red-Black Tree from becoming a linked list?",
      options: [
        { optionText: "Red-Black rule", optionTag: "C" },
        { optionText: "No double red", optionTag: "D" },
        { optionText: "Black root", optionTag: "A" },
        { optionText: "Black-height consistency", optionTag: "B" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Which case requires both rotation and recoloring in deletion?",
      options: [
        { optionText: "Double black with red sibling", optionTag: "C" },
        { optionText: "Sibling is black with black children", optionTag: "D" },
        { optionText: "Sibling is red", optionTag: "B" },
        { optionText: "Uncle is black", optionTag: "A" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Can Red-Black Tree become completely unbalanced?",
      options: [
        { optionText: "Yes", optionTag: "B" },
        { optionText: "Only on insertion", optionTag: "C" },
        { optionText: "No", optionTag: "A" },
        { optionText: "Depends on implementation", optionTag: "D" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Minimum number of nodes in Red-Black Tree of height h is:",
      options: [
        { optionText: "2^(h/2)", optionTag: "A" },
        { optionText: "h", optionTag: "C" },
        { optionText: "h^2", optionTag: "B" },
        { optionText: "log h", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "How many children does a red node have at most?",
      options: [
        { optionText: "0", optionTag: "D" },
        { optionText: "1", optionTag: "B" },
        { optionText: "2", optionTag: "A" },
        { optionText: "Can’t have red children", optionTag: "C" }
      ],
      correctOption: "C",
      score: 1
    },
    {
      questionText: "Which property must be re-evaluated after rotation?",
      options: [
        { optionText: "Node value", optionTag: "A" },
        { optionText: "Balance factor", optionTag: "D" },
        { optionText: "Coloring and black height", optionTag: "B" },
        { optionText: "Heap order", optionTag: "C" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which node is replaced in Red-Black Tree deletion?",
      options: [
        { optionText: "In-order predecessor", optionTag: "A" },
        { optionText: "In-order successor", optionTag: "B" },
        { optionText: "Any random child", optionTag: "C" },
        { optionText: "Root", optionTag: "D" }
      ],
      correctOption: "B",
      score: 1
    },
    {
      questionText: "Which is better for frequent insertions and deletions?",
      options: [
        { optionText: "Red-Black Tree", optionTag: "D" },
        { optionText: "AVL Tree", optionTag: "B" },
        { optionText: "BST", optionTag: "A" },
        { optionText: "Heap", optionTag: "C" }
      ],
      correctOption: "D",
      score: 1
    },
    {
      questionText: "Can the Red-Black Tree be used as a Map in Java?",
      options: [
        { optionText: "Yes, via TreeMap", optionTag: "A" },
        { optionText: "No", optionTag: "B" },
        { optionText: "Only in C++", optionTag: "C" },
        { optionText: "Only via HashMap", optionTag: "D" }
      ],
      correctOption: "A",
      score: 1
    },
    {
      questionText: "Which is true about TreeMap in Java?",
      options: [
        { optionText: "Uses AVL Tree", optionTag: "C" },
        { optionText: "Unordered", optionTag: "D" },
        { optionText: "Implemented using Red-Black Tree", optionTag: "B" },
        { optionText: "Uses hash function", optionTag: "A" }
      ],
      correctOption: "B",
      score: 1
    }
  ]
};

export default quizData;