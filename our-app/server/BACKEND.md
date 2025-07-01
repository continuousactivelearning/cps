# Backend Documentation

## Overview
This document provides comprehensive documentation for the Learning Platform Backend, a Node.js/Express/TypeScript application with MongoDB database. The backend serves as a RESTful API for a learning management system that supports interactive quizzes, course management, and user progress tracking.

## Table of Contents
1. [Architecture](#architecture)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Database Design](#database-design)
5. [API Architecture](#api-architecture)
6. [Authentication & Security](#authentication--security)
7. [Data Models](#data-models)
8. [Controllers](#controllers)
9. [Routes](#routes)
10. [Middleware](#middleware)
11. [Database Operations](#database-operations)
12. [Error Handling](#error-handling)
13. [Development Setup](#development-setup)
14. [Deployment](#deployment)
15. [Performance Optimizations](#performance-optimizations)

---

## Architecture

### System Architecture
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   MongoDB       │
│   (Client)      │◄──►│   (Express)     │◄──►│   Database      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │   Controllers   │
                       └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │   Models        │
                       └─────────────────┘
                              │
                              ▼
                       ┌─────────────────┐
                       │ Recommendation  │
                       │    Engine       │
                       └─────────────────┘
```

### Application Flow
1. **Request Handling**: Express.js receives HTTP requests
2. **Route Matching**: Routes direct requests to appropriate controllers
3. **Business Logic**: Controllers handle request processing
4. **Data Access**: Models interact with MongoDB database
5. **Recommendation Engine**: Generates personalized learning paths
6. **Response**: JSON responses sent back to client

---

## Technology Stack

### Core Technologies
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: bcryptjs for password hashing

### Development Tools
- **Package Manager**: npm
- **Development Server**: nodemon
- **TypeScript Compiler**: tsc
- **Build Tool**: tsx for development

### Dependencies
```json
{
  "express": "^4.21.2",
  "mongoose": "^8.16.0",
  "bcryptjs": "^2.4.3",
  "cors": "^2.8.5",
  "typescript": "^5.8.3"
}
```

---

## Project Structure

```
server/
├── src/
│   ├── app.ts                 # Express application setup
│   ├── server.ts              # Server entry point
│   ├── main/                  # Core business logic
│   │   ├── graphBuilder.ts    # Prerequisite graph builder
│   │   └── recommendationPath.ts # Learning path generator
│   ├── controllers/           # Request handlers
│   │   ├── authController.ts
│   │   ├── courseController.ts
│   │   ├── customQuizController.ts
│   │   ├── homeController.ts
│   │   ├── quizController.ts
│   │   ├── userController.ts
│   │   └── userDashboardController.ts
│   ├── models/                # Database models
│   │   ├── Course.ts
│   │   ├── CustomQuiz.ts
│   │   ├── Quiz.ts
│   │   └── User.ts
│   ├── routes/                # API route definitions
│   │   ├── authRoutes.ts
│   │   ├── courseRoutes.ts
│   │   ├── customQuizRoutes.ts
│   │   ├── homeRoutes.ts
│   │   ├── quizRoutes.ts
│   │   └── userRoutes.ts
│   ├── interfaces/            # TypeScript interfaces
│   │   ├── Basic.ts
│   │   └── Document_Interfaces.ts
│   ├── types/                 # Custom type definitions
│   │   └── customTypes.ts
│   ├── data/                  # Static data and seed files
│   │   ├── coursesData.ts
│   │   ├── userData.ts
│   │   └── java/              # Java-specific quiz data
│   └── scripts/               # Database scripts
│       ├── seed.ts
│       ├── seedCourses.ts
│       ├── seedUsers.ts
│       └── deleteAllData.ts
├── package.json
├── tsconfig.node.json
└── API_DOCUMENTATION.md
```

---

## Database Design

### Database: MongoDB
- **Database Name**: `our-app-db`
- **Connection**: MongoDB Atlas or local MongoDB instance
- **ODM**: Mongoose for schema validation and query building

### Collections
1. **users** - User accounts and profiles
2. **courses** - Course catalog and metadata
3. **quizzes** - Standard quiz content
4. **customquizzes** - User-generated custom quizzes

### Schema Design Principles
- **Embedded Documents**: Related data embedded for performance
- **Indexing**: Strategic indexes for common query patterns
- **Validation**: Mongoose schema validation for data integrity
- **Timestamps**: Automatic creation and update timestamps

---

## API Architecture

### RESTful Design
- **Base URL**: `/api`
- **HTTP Methods**: GET, POST, PUT, DELETE
- **Response Format**: JSON
- **Status Codes**: Standard HTTP status codes

### Route Structure
```
/api
├── /login                    # Authentication
├── /signup                   # User registration
├── /home                     # Landing page data
├── /users                    # User management
│   ├── /:id/dashboard        # User dashboard
│   ├── /:id/recommend-path   # Learning path
│   ├── /:id/update-user-courses # Update user courses (status param)
│   ├── /:id/custom-quiz      # Create custom quiz
│   ├── /:id/custom-quizzes   # Get all user custom quizzes
│   ├── /:id/custom-quiz/:customQuizId # Get custom quiz by ID
│   ├── /:id/custom-quiz/:customQuizId/submit # Submit custom quiz answers
│   ├── /:id/quiz/:level/questions # Level-based quizzes
│   └── ... (other quiz endpoints)
├── /courses                  # Course management
├── /quizzes                  # Quiz management
└── /custom-quizzes           # (Admin/Global custom quiz management)
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

### User Dashboard Controller
- **getUserDashboard()**: User progress and statistics (now includes `recommendations.path` with the recommended learning path if available)

#### Example User Dashboard API Response
```json
{
  "userInfo": { ... },
  "statistics": { ... },
  "courseProgress": { ... },
  "recentActivity": { ... },
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
- The `recommendations.path` field contains the recommended learning path for the user, including the target and the ordered list of prerequisite courses. If no path is available, this field will be `null`.

---

## Controllers

### Authentication Controller
- **login()**: User authentication with email/password
- **signup()**: New user registration with password hashing

### User Controller
- **CRUD Operations**: Create, read, update, delete users
- **User Management**: Profile management and user data

### User Dashboard Controller
- **getUserDashboard()**: User progress and statistics
- **getQuestions()**: Retrieve quiz questions
- **submitAnswers()**: Process quiz submissions
- **reviewQuiz()**: Quiz review and feedback
- **createAssessment()**: Personalized assessments
- **getRecommendedPathForUser()**: Generate personalized learning path
- **updateUserCourses()**: Update user's courses with status
- **createCustomQuizForUser()**: Create and save custom quiz for user
- **getUserCustomQuizzes()**: Get all custom quizzes for a user
- **getCustomQuizById()**: Get a specific custom quiz by ID
- **submitCustomQuizAnswers()**: Submit answers for a custom quiz

### Course Controller
- **CRUD Operations**: Course management
- **Advanced Search**: Multi-parameter course search
- **Filtering**: Level, prerequisite, and name-based filtering
- **Debug Endpoints**: Database state verification

### Quiz Controller
- **CRUD Operations**: Quiz management
- **Advanced Search**: Multi-parameter quiz search
- **Filtering**: Language, level, and topic-based filtering
- **Debug Endpoints**: Database state verification

### Custom Quiz Controller
- **CRUD Operations**: Custom quiz management (admin/global)
- **User-generated Content**: Custom quiz creation and management (via userDashboardController)

---

## Routes

### Route Organization
Routes are organized by resource type and follow RESTful conventions:

1. **Authentication Routes** (`/api`)
   - POST `/login` - User login
   - POST `/signup` - User registration

2. **User Routes** (`/api/users`)
   - Basic CRUD operations
   - Dashboard and quiz-specific endpoints
   - Assessment and progress tracking
   - Custom quiz creation, retrieval, and submission
   - User course update with status

3. **Course Routes** (`/api/courses`)
   - Basic CRUD operations
   - Advanced search and filtering
   - Debug endpoints

4. **Quiz Routes** (`/api/quizzes`)
   - Basic CRUD operations
   - Advanced search and filtering
   - Debug endpoints

5. **Custom Quiz Routes** (`/api/custom-quizzes`)
   - Basic CRUD operations for custom quizzes (admin/global)

### Route Parameters
- **Path Parameters**: Resource identifiers (`:id`, `:level`, `:lang`)
- **Query Parameters**: Search and filter options
- **Request Body**: Data for POST/PUT operations

---

## Middleware

### Built-in Middleware
- **express.json()**: JSON body parsing
- **express.urlencoded()**: URL-encoded body parsing
- **cors()**: Cross-origin resource sharing

### Custom Middleware
- **Error Handling**: Global error handler
- **404 Handler**: Route not found handler
- **Request Validation**: Input validation middleware

---

## Database Operations

### Mongoose Features
- **Schema Validation**: Automatic data validation
- **Indexing**: Performance optimization
- **Population**: Related document queries
- **Aggregation**: Complex data queries

### Query Patterns
```typescript
// Find with filters
const courses = await Course.find({ level: 'beginner' });

// Find with multiple filters
const quizzes = await Quiz.find({
  lang: 'java',
  quizLevel: 'intermediate',
  'topic.courseName': 'Arrays'
});

// Text search
const results = await Course.find({
  $text: { $search: 'java programming' }
});

// Aggregation
const stats = await User.aggregate([
  { $match: { role: 'user' } },
  { $group: { _id: null, totalUsers: { $sum: 1 } } }
]);
```

### Indexing Strategy
- **Single Field Indexes**: Common query fields
- **Compound Indexes**: Multi-field queries
- **Text Indexes**: Full-text search
- **Array Indexes**: Array field queries

---

## Error Handling

### Error Types
1. **Validation Errors**: Invalid input data
2. **Authentication Errors**: Invalid credentials
3. **Authorization Errors**: Insufficient permissions
4. **Not Found Errors**: Resource not found
5. **Database Errors**: Database operation failures
6. **Server Errors**: Internal server errors

### Error Response Format
```json
{
  "error": "Error type",
  "message": "Detailed error message",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### Global Error Handler
- **Catch-all**: Handles unhandled errors
- **Logging**: Error logging for debugging
- **Client-safe**: Sanitized error messages

---

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn package manager

### Installation
```bash
# Clone repository
git clone <repository-url>
cd server

# Install dependencies
npm install

# Environment setup
cp .env.example .env
# Edit .env with your configuration

# Database setup
npm run seed

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run seed         # Seed database with sample data
npm run delete-data  # Clear all database data
npm run lint         # Run ESLint
npm run tsc          # TypeScript compilation check
```

### Environment Variables
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/our-app-db
NODE_ENV=development
```

---

## Deployment

### Production Build
```bash
# Build the application
npm run build

# Start production server
npm start
```

### Environment Configuration
- **Production Database**: MongoDB Atlas or production MongoDB
- **Environment Variables**: Production-specific configuration
- **Security**: HTTPS, environment variables, secure headers

### Deployment Options
1. **Heroku**: Cloud platform deployment
2. **AWS**: EC2 or Lambda deployment
3. **Docker**: Containerized deployment
4. **Vercel**: Serverless deployment

---

## Performance Optimizations

### Database Optimizations
- **Indexing**: Strategic database indexes
- **Query Optimization**: Efficient query patterns
- **Connection Pooling**: MongoDB connection management
- **Caching**: Redis caching for frequently accessed data

### Application Optimizations
- **Compression**: Response compression
- **Rate Limiting**: API rate limiting
- **Pagination**: Large dataset pagination
- **Lazy Loading**: On-demand data loading

### Monitoring
- **Logging**: Application and error logging
- **Metrics**: Performance metrics collection
- **Health Checks**: Application health monitoring
- **Error Tracking**: Error monitoring and alerting

---

## Best Practices

### Code Organization
- **Separation of Concerns**: Controllers, models, routes separation
- **Type Safety**: TypeScript for type checking
- **Error Handling**: Comprehensive error handling
- **Validation**: Input validation and sanitization

### Security
- **Password Hashing**: Secure password storage
- **Input Validation**: Request data validation
- **CORS Configuration**: Proper CORS setup
- **Error Sanitization**: Safe error messages

### Performance
- **Database Indexing**: Optimized query performance
- **Connection Management**: Efficient database connections
- **Response Optimization**: Minimized response payloads
- **Caching Strategy**: Appropriate caching implementation

---

## Troubleshooting

### Common Issues
1. **Database Connection**: MongoDB connection issues
2. **Port Conflicts**: Port already in use
3. **TypeScript Errors**: Compilation issues
4. **Dependency Issues**: Package installation problems

### Debug Tools
- **Debug Endpoints**: `/api/courses/debug`, `/api/quizzes/debug`
- **Logging**: Console and file logging
- **Database Tools**: MongoDB Compass, mongo shell
- **API Testing**: Postman, curl, or similar tools

### Support
For additional support and documentation, refer to:
- [API Documentation](./API_DOCUMENTATION.md)
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## Recommendation Engine

### Overview
The recommendation engine generates personalized learning paths based on:
- User's completed courses
- Course prerequisites
- Target course/topic

### Components

#### Graph Builder (`graphBuilder.ts`)
- Builds a prerequisite graph from the Course collection
- Represents courses as nodes and prerequisites as edges
- Uses MongoDB aggregation for efficient graph construction

#### Path Generator (`recommendationPath.ts`)
- Implements topological sorting with randomization
- Ensures prerequisites are learned in correct order
- Removes already completed courses from the path
- Places target course at the end of the path

### Algorithm
1. **Graph Construction**
   - Fetch all courses and their prerequisites
   - Build an adjacency list representation
   - Cache graph for performance

2. **Path Generation**
   - Collect all prerequisites for target course
   - Remove completed courses
   - Perform randomized topological sort
   - Append target course to path

3. **Path Storage**
   - Save generated path in user document
   - Track target course and prerequisites
   - Update when user completes courses

### Example Usage
```typescript
// Generate path
const path = await getRecommendedPath(
  ["Arrays", "Strings"],  // completed courses
  "Binary Search Trees"   // target course
);

// Result
[
  "Recursion",
  "Trees",
  "Binary Trees",
  "Binary Search Trees"
]
``` 