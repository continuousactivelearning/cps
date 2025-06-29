# API Documentation

## Overview
This document provides comprehensive documentation for the Learning Platform API, a RESTful backend service built with Node.js, Express, TypeScript, and MongoDB.

**Base URL**: `http://localhost:3000`

## Table of Contents
1. [Authentication](#authentication)
2. [Users](#users)
3. [Courses](#courses)
4. [Quizzes](#quizzes)
5. [Custom Quizzes](#custom-quizzes)
6. [Home](#home)
7. [Error Handling](#error-handling)
8. [Data Models](#data-models)

---

## Authentication

### Login
**POST** `/api/login`

Authenticate a user with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "user@example.com",
  "role": "user",
  "lang": "java",
  "quizzes": [],
  "customQuizzes": [],
  "courses": [],
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Error Responses:**
- `400` - Missing email or password
- `401` - Invalid credentials

### Signup
**POST** `/api/signup`

Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "user@example.com",
  "role": "user",
  "lang": "java",
  "quizzes": [],
  "customQuizzes": [],
  "courses": [],
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Error Responses:**
- `400` - Missing required fields or user already exists

---

## Users

### Get All Users
**GET** `/api/users`

Retrieve all users (admin only).

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "user@example.com",
    "role": "user",
    "lang": "java",
    "quizzes": [],
    "customQuizzes": [],
    "courses": [],
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### Get User by ID
**GET** `/api/users/:id`

Retrieve a specific user by ID.

**Response (200):**
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "user@example.com",
  "role": "user",
  "lang": "java",
  "quizzes": [],
  "customQuizzes": [],
  "courses": [],
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

### Create User
**POST** `/api/users`

Create a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "password123",
  "lang": "java"
}
```

### Update User
**PUT** `/api/users/:id`

Update an existing user.

**Request Body:**
```json
{
  "name": "John Doe Updated",
  "lang": "python"
}
```

### Delete User
**DELETE** `/api/users/:id`

Delete a user account.

### Get User Dashboard
**GET** `/api/users/:id/dashboard`

Get user dashboard with progress and statistics.

**Response (200):**
```json
{
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "user@example.com"
  },
  "stats": {
    "totalQuizzes": 5,
    "completedQuizzes": 3,
    "averageScore": 85,
    "enrolledCourses": 2,
    "completedCourses": 1
  },
  "recentActivity": []
}
```

### Get Quiz by Level
**GET** `/api/users/:id/quiz/:level/questions`

Get quiz questions for a specific level.

**Response (200):**
```json
{
  "quiz": {
    "_id": "507f1f77bcf86cd799439012",
    "title": "Java Beginner Quiz",
    "quizLevel": "beginner",
    "lang": "java",
    "questions": [
      {
        "questionText": "What is Java?",
        "options": [
          {"optionText": "Programming Language", "optionTag": "A"},
          {"optionText": "Database", "optionTag": "B"},
          {"optionText": "Operating System", "optionTag": "C"},
          {"optionText": "Web Browser", "optionTag": "D"}
        ],
        "correctOption": "A",
        "score": 1
      }
    ]
  }
}
```

### Submit Quiz by Level
**POST** `/api/users/:id/quiz/:level/submit`

Submit answers for a level-based quiz.

**Request Body:**
```json
{
  "answers": ["A", "B", "C", "D"]
}
```

**Response (200):**
```json
{
  "score": 85,
  "totalQuestions": 4,
  "correctAnswers": 3,
  "feedback": "Great job! You're making good progress."
}
```

### Review Quiz by Level
**GET** `/api/users/:id/quiz/:level/review`

Get detailed review of a completed quiz.

**Response (200):**
```json
{
  "quiz": {
    "title": "Java Beginner Quiz",
    "userScore": 85,
    "totalScore": 100,
    "questions": [
      {
        "questionText": "What is Java?",
        "userAnswer": "A",
        "correctAnswer": "A",
        "isCorrect": true
      }
    ]
  }
}
```

### Create Assessment
**POST** `/api/users/:id/assessment`

Create a personalized assessment for the user.

**Request Body:**
```json
{
  "lang": "java",
  "level": "beginner",
  "topics": ["arrays", "strings"]
}
```

### Get Questions by Language, Level, and Topic
**GET** `/api/users/:id/:lang/:quizLevel/:topic/questions`

Get quiz questions filtered by language, level, and topic.

### Submit Answers
**POST** `/api/users/:id/:lang/:quizLevel/:topic/submit`

Submit answers for a specific quiz.

**Request Body:**
```json
{
  "answers": ["A", "B", "C", "D"]
}
```

### Review Quiz
**GET** `/api/users/:id/:lang/:quizLevel/:topic/review`

Get detailed review of a completed quiz.

---

## Courses

### Get All Courses
**GET** `/api/courses`

Retrieve all available courses.

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439013",
    "courseName": "Java Fundamentals",
    "description": "Learn the basics of Java programming",
    "level": "beginner",
    "prerequisites": [],
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### Get Course by ID
**GET** `/api/courses/:id`

Retrieve a specific course by ID.

### Create Course
**POST** `/api/courses`

Create a new course.

**Request Body:**
```json
{
  "courseName": "Advanced Java",
  "description": "Advanced Java programming concepts",
  "level": "advanced",
  "prerequisites": ["Java Fundamentals"]
}
```

### Update Course
**PUT** `/api/courses/:id`

Update an existing course.

### Delete Course
**DELETE** `/api/courses/:id`

Delete a course.

### Advanced Course Search

#### Search Courses
**GET** `/api/courses/search`

Search courses with multiple filters.

**Query Parameters:**
- `q` - Search term (searches courseName and description)
- `level` - Difficulty level (beginner, intermediate, advanced)
- `prerequisite` - Required prerequisite

**Example:**
```
GET /api/courses/search?q=java&level=beginner&prerequisite=javascript
```

#### Get Courses by Difficulty Range
**GET** `/api/courses/difficulty-range`

Get courses within a difficulty range.

**Query Parameters:**
- `minLevel` - Minimum level (beginner, intermediate, advanced)
- `maxLevel` - Maximum level (beginner, intermediate, advanced)

**Example:**
```
GET /api/courses/difficulty-range?minLevel=beginner&maxLevel=intermediate
```

#### Get Courses by Course Name
**GET** `/api/courses/courseName/:courseName`

Get all courses with a specific name.

#### Get Courses by Level
**GET** `/api/courses/level/:level`

Get all courses of a specific difficulty level.

#### Get Courses by Prerequisite
**GET** `/api/courses/prerequisite/:prerequisite`

Get all courses that require a specific prerequisite.

#### Get Courses by Course Name and Level
**GET** `/api/courses/courseName/:courseName/level/:level`

Get courses filtered by both name and level.

#### Get Courses by Level and Prerequisite
**GET** `/api/courses/level/:level/prerequisite/:prerequisite`

Get courses filtered by both level and prerequisite.

#### Get Courses by Course Name, Level, and Prerequisite
**GET** `/api/courses/courseName/:courseName/level/:level/prerequisite/:prerequisite`

Get courses filtered by name, level, and prerequisite.

### Debug Courses
**GET** `/api/courses/debug`

Debug endpoint to check database state and course data.

---

## Quizzes

### Get All Quizzes
**GET** `/api/quizzes`

Retrieve all available quizzes.

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439014",
    "title": "Java Arrays Quiz",
    "quizLevel": "beginner",
    "lang": "java",
    "description": "Test your knowledge of Java arrays",
    "topic": {
      "courseID": "507f1f77bcf86cd799439013",
      "courseName": "Java Fundamentals"
    },
    "questions": [
      {
        "questionText": "How do you declare an array in Java?",
        "options": [
          {"optionText": "int[] arr;", "optionTag": "A"},
          {"optionText": "array arr;", "optionTag": "B"},
          {"optionText": "int arr[];", "optionTag": "C"},
          {"optionText": "Both A and C", "optionTag": "D"}
        ],
        "correctOption": "D",
        "score": 1
      }
    ],
    "quizScore": 10,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### Get Quiz by ID
**GET** `/api/quizzes/:id`

Retrieve a specific quiz by ID.

### Create Quiz
**POST** `/api/quizzes`

Create a new quiz.

**Request Body:**
```json
{
  "title": "Python Lists Quiz",
  "quizLevel": "intermediate",
  "lang": "python",
  "description": "Test your knowledge of Python lists",
  "topic": {
    "courseID": "507f1f77bcf86cd799439013",
    "courseName": "Python Fundamentals"
  },
  "questions": [
    {
      "questionText": "How do you add an element to a list?",
      "options": [
        {"optionText": "list.add()", "optionTag": "A"},
        {"optionText": "list.append()", "optionTag": "B"},
        {"optionText": "list.insert()", "optionTag": "C"},
        {"optionText": "Both B and C", "optionTag": "D"}
      ],
      "correctOption": "D",
      "score": 1
    }
  ]
}
```

### Update Quiz
**PUT** `/api/quizzes/:id`

Update an existing quiz.

### Delete Quiz
**DELETE** `/api/quizzes/:id`

Delete a quiz.

### Advanced Quiz Search

#### Search Quizzes
**GET** `/api/quizzes/search`

Search quizzes with multiple filters.

**Query Parameters:**
- `q` - Search term (searches title and description)
- `lang` - Programming language (cpp, python, javascript, java)
- `level` - Difficulty level (beginner, intermediate, advanced)
- `topic` - Topic/course name

**Example:**
```
GET /api/quizzes/search?q=arrays&lang=java&level=beginner&topic=arrays
```

#### Get Quizzes by Language
**GET** `/api/quizzes/lang/:lang`

Get all quizzes for a specific programming language.

#### Get Quizzes by Level
**GET** `/api/quizzes/level/:level`

Get all quizzes of a specific difficulty level.

#### Get Quizzes by Topic
**GET** `/api/quizzes/topic/:topic`

Get all quizzes for a specific topic/course.

#### Get Quizzes by Language and Level
**GET** `/api/quizzes/lang/:lang/level/:level`

Get quizzes filtered by both language and level.

#### Get Quizzes by Language and Topic
**GET** `/api/quizzes/lang/:lang/topic/:topic`

Get quizzes filtered by both language and topic.

#### Get Quizzes by Level and Topic
**GET** `/api/quizzes/level/:level/topic/:topic`

Get quizzes filtered by both level and topic.

#### Get Quizzes by Language, Level, and Topic
**GET** `/api/quizzes/lang/:lang/level/:level/topic/:topic`

Get quizzes filtered by language, level, and topic.

### Debug Quizzes
**GET** `/api/quizzes/debug`

Debug endpoint to check database state and quiz data.

---

## Custom Quizzes

### Get All Custom Quizzes
**GET** `/api/custom-quizzes`

Retrieve all custom quizzes.

**Response (200):**
```json
[
  {
    "_id": "507f1f77bcf86cd799439015",
    "title": "Custom JavaScript Quiz",
    "description": "A custom quiz for JavaScript",
    "lang": "javascript",
    "quizLevel": "intermediate",
    "customQuestions": [
      {
        "questionText": "What is closure in JavaScript?",
        "options": [
          {"optionText": "A function", "optionTag": "A"},
          {"optionText": "A variable", "optionTag": "B"},
          {"optionText": "A scope", "optionTag": "C"},
          {"optionText": "A method", "optionTag": "D"}
        ],
        "correctOption": "A",
        "score": 1,
        "topic": {
          "courseID": "507f1f77bcf86cd799439013",
          "courseName": "JavaScript Fundamentals"
        }
      }
    ],
    "quizScore": 5,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### Get Custom Quiz by ID
**GET** `/api/custom-quizzes/:id`

Retrieve a specific custom quiz by ID.

### Create Custom Quiz
**POST** `/api/custom-quizzes`

Create a new custom quiz.

**Request Body:**
```json
{
  "title": "Custom Python Quiz",
  "description": "A custom quiz for Python",
  "lang": "python",
  "quizLevel": "advanced",
  "customQuestions": [
    {
      "questionText": "What is a decorator in Python?",
      "options": [
        {"optionText": "A function", "optionTag": "A"},
        {"optionText": "A class", "optionTag": "B"},
        {"optionText": "A module", "optionTag": "C"},
        {"optionText": "A package", "optionTag": "D"}
      ],
      "correctOption": "A",
      "score": 1,
      "topic": {
        "courseID": "507f1f77bcf86cd799439013",
        "courseName": "Python Advanced"
      }
    }
  ]
}
```

### Update Custom Quiz
**PUT** `/api/custom-quizzes/:id`

Update an existing custom quiz.

### Delete Custom Quiz
**DELETE** `/api/custom-quizzes/:id`

Delete a custom quiz.

---

## Home

### Get Home Page Data
**GET** `/api/home`

Get landing page data and features.

**Response (200):**
```json
{
  "message": "Home page data",
  "features": [
    "Interactive quizzes",
    "Progress tracking",
    "Personalized recommendations",
    "Multiple difficulty levels"
  ]
}
```

---

## Error Handling

### Standard Error Response Format
```json
{
  "error": "Error type",
  "message": "Detailed error message",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Common HTTP Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `500` - Internal Server Error

### 404 Route Not Found
When accessing an undefined route, the API returns:
```json
{
  "error": "Route not found",
  "message": "The requested route /api/invalid does not exist",
  "availableEndpoints": {
    "auth": "/api/login, /api/signup",
    "home": "/api/home",
    "users": "/api/users/*",
    "courses": "/api/courses/*",
    "quizzes": "/api/quizzes/*",
    "customQuizzes": "/api/custom-quizzes/*"
  }
}
```

---

## Data Models

### User Model
```typescript
interface User {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin';
  lang: 'cpp' | 'python' | 'javascript' | 'java';
  quizzes: QuizInfo[];
  customQuizzes: QuizInfo[];
  courses: CourseInfo[];
  createdAt: Date;
  updatedAt: Date;
}

interface QuizInfo {
  quizId: ObjectId;
  userScore: number;
  userAnswers: ('A' | 'B' | 'C' | 'D')[];
}

interface CourseInfo {
  courseId: ObjectId;
  courseName: string;
  status: 'enrolled' | 'completed' | 'in-progress';
  result: number;
}
```

### Course Model
```typescript
interface Course {
  _id: ObjectId;
  courseName: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  prerequisites: string[];
  createdAt: Date;
  updatedAt: Date;
}
```

### Quiz Model
```typescript
interface Quiz {
  _id: ObjectId;
  title: string;
  quizLevel: 'beginner' | 'intermediate' | 'advanced';
  lang: 'cpp' | 'python' | 'javascript' | 'java';
  description?: string;
  topic: {
    courseID: ObjectId;
    courseName: string;
  };
  questions: Question[];
  quizScore: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Question {
  questionText: string;
  options: Option[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  score: number;
}

interface Option {
  optionText: string;
  optionTag: 'A' | 'B' | 'C' | 'D';
}
```

### Custom Quiz Model
```typescript
interface CustomQuiz {
  _id: ObjectId;
  title: string;
  description?: string;
  lang: 'cpp' | 'python' | 'javascript' | 'java';
  quizLevel: 'beginner' | 'intermediate' | 'advanced';
  customQuestions: CustomQuestion[];
  quizScore: number;
  createdAt: Date;
  updatedAt: Date;
}

interface CustomQuestion {
  questionText: string;
  options: Option[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  score: number;
  topic: {
    courseID: ObjectId;
    courseName: string;
  };
}
```

---

## Development

### Running the Server
```bash
# Development mode
npm run dev

# Production mode
npm run build
npm start
```

### Database Seeding
```bash
# Seed the database with sample data
npm run seed

# Delete all data
npm run delete-data
```

### Environment Variables
- `PORT` - Server port (default: 3000)
- `MONGODB_URI` - MongoDB connection string (default: mongodb://localhost:27017/our-app-db) 