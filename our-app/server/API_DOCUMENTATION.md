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

### Get User by ID
**GET** `/api/users/:id`

Retrieve a specific user by ID.

### Create User
**POST** `/api/users`

Create a new user.

### Update User
**PUT** `/api/users/:id`

Update an existing user.

### Delete User
**DELETE** `/api/users/:id`

Delete a user account.

### Get User Dashboard
**GET** `/api/users/:id/dashboard`

Get user dashboard with progress and statistics.

**Response Example (200):**
```json
{
  "userInfo": {
    "name": "John Doe",
    "email": "user@example.com",
    "preferredLanguage": "java",
    "currentLevel": "intermediate",
    "memberSince": "2024-01-01T00:00:00.000Z"
  },
  "statistics": {
    "totalQuizzesTaken": 12,
    "totalCustomQuizzes": 3,
    "totalCoursesEnrolled": 5,
    "averageScore": 78.5,
    "averageCustomQuizScore": 82.0,
    "totalScore": 942
  },
  "courseProgress": {
    "completed": 2,
    "inProgress": 1,
    "enrolled": 2,
    "courses": [
      { "courseName": "Arrays", "status": "completed", "result": 95 },
      { "courseName": "Strings", "status": "in-progress", "result": 60 }
    ]
  },
  "recentActivity": {
    "recentQuizzes": [
      { "quizId": "...", "score": 80, "submittedAt": null }
    ],
    "recentCustomQuizzes": [
      { "quizId": "...", "score": 90, "submittedAt": "2024-06-01T12:00:00.000Z" }
    ]
  },
  "recommendations": {
    "suggestedLevel": "intermediate",
    "suggestedTopics": ["Trees", "Graphs"],
    "nextSteps": ["Take advanced quizzes", "Complete in-progress courses"],
    "path": {
      "target": "Binary Search Trees",
      "path": ["Recursion", "Trees", "Binary Trees", "Binary Search Trees"]
    }
  }
}
```

**Note:**
- The `recommendations.path` field contains the recommended learning path for the user, including the target and the ordered list of prerequisite courses. If no path is available, this field will be `null`.

### Get Recommended Learning Path
**GET** `/api/users/:id/recommend-path`

Get a personalized learning path to reach a target course/topic.

**Query Parameters:**
- `target` (required) - The target course/topic name

### Update User Courses
**POST** `/api/users/:id/update-user-courses`

Update the list of courses for a user with a specific status.

**Query Parameters:**
- `status` (optional) - Course status: `completed`, `enrolled`, or `in-progress` (default: `enrolled`)

**Request Body:**
```json
{
  "completedCourses": ["Arrays", "Strings", "Pointers"]
}
```

**Response (200):**
```json
{
  "message": "Courses updated with status: enrolled",
  "courses": [
    {
      "courseId": "607f1f77bcf86cd799439022",
      "courseName": "Arrays",
      "status": "enrolled",
      "result": 0
    }
  ],
  "updatedCount": 3
}
```

**Error Responses:**
- `400` - Invalid request body format or invalid status
- `404` - User not found

### Create Custom Quiz for User
**POST** `/api/users/:id/custom-quiz`

Create a custom quiz for a user based on their enrolled courses.

**Query Parameters:**
- `lang` (required) - Programming language: `cpp`, `python`, `javascript`, `java`
- `level` (required) - Quiz level: `beginner`, `intermediate`, `advanced`
- `totalQuestions` (optional) - Total number of questions (default: 15)
- `questionsPerTopic` (optional) - Number of questions per topic

**Response (200):**
```json
{
  "customQuiz": {
    "_id": "507f1f77bcf86cd799439015",
    "title": "Custom Quiz - beginner java",
    "description": "Custom quiz for John Doe based on enrolled courses",
    "lang": "java",
    "quizLevel": "beginner",
    "customQuestions": [ ... ],
    "quizScore": 0,
    "userId": "507f1f77bcf86cd799439011",
    "isSubmitted": false,
    "userScore": 0,
    "userAnswers": [],
    "submittedAt": null,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "quizInfo": {
    "totalQuestions": 20,
    "totalScore": 20,
    "topics": ["Arrays", "Strings", "Linked Lists"],
    "enrolledCourses": ["Arrays", "Strings", "Linked Lists"],
    "language": "java",
    "level": "beginner"
  },
  "message": "Custom quiz created and saved successfully"
}
```

**Error Responses:**
- `400` - Missing required parameters or invalid values
- `404` - User not found or no quizzes available

### Get User Custom Quizzes
**GET** `/api/users/:id/custom-quizzes`

Get all custom quizzes created by a user.

### Get Custom Quiz by ID
**GET** `/api/users/:id/custom-quiz/:customQuizId`

Get a specific custom quiz by ID.

### Submit Custom Quiz Answers
**POST** `/api/users/:id/custom-quiz/:customQuizId/submit`

Submit answers for a custom quiz.

**Request Body:**
```json
{
  "answers": ["A", "B", "C", "D", ...]
}
```

**Response (200):**
```json
{
  "customQuizInfo": {
    "title": "Custom Quiz - beginner java",
    "language": "java",
    "level": "beginner",
    "totalQuestions": 15
  },
  "results": {
    "score": 85,
    "correctAnswers": 12,
    "totalQuestions": 15,
    "percentage": 80.0,
    "grade": "B"
  },
  "questionDetails": [ ... ],
  "message": "Custom quiz submitted successfully"
}
```

**Error Responses:**
- `400` - Missing answers array or quiz already submitted
- `403` - Access denied (quiz doesn't belong to user)
- `404` - User or custom quiz not found

---

## Courses

### Get All Courses
**GET** `/api/courses`

Retrieve all available courses.

### Get Course by ID
**GET** `/api/courses/:id`

Retrieve a specific course by ID.

### Create Course
**POST** `/api/courses`

Create a new course.

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

### Get Quiz by ID
**GET** `/api/quizzes/:id`

Retrieve a specific quiz by ID.

### Create Quiz
**POST** `/api/quizzes`

Create a new quiz.

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

## Home

### Get Home Page Data
**GET** `/api/home`

Get landing page data and features.

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
  customQuizzes: CustomQuizInfo[];
  courses: CourseInfo[];
  recommendedPath?: {
    target: string;
    path: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

interface QuizInfo {
  quizId: ObjectId;
  userScore: number;
  userAnswers: ('A' | 'B' | 'C' | 'D')[];
}

interface CustomQuizInfo {
  quizId: ObjectId;
  userScore: number;
  userAnswers: ('A' | 'B' | 'C' | 'D')[];
  submittedAt: Date;
}

interface CourseInfo {
  courseId: ObjectId;
  courseName: string;
  status: 'enrolled' | 'completed' | 'in-progress';
  result: number;
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
  userId: ObjectId;
  isSubmitted: boolean;
  userScore: number;
  userAnswers: ('A' | 'B' | 'C' | 'D')[];
  submittedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface CustomQuestion {
  questionText: string;
  options: Option[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  score: number;
  topic: {
    courseID: ObjectId | null;
    courseName: string;
  };
}

interface Option {
  optionText: string;
  optionTag: 'A' | 'B' | 'C' | 'D';
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