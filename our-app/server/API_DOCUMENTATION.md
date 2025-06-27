# API Documentation

## Base URL
`http://localhost:3000/api`

## Authentication Endpoints
- `POST /login` - User login
- `POST /signup` - User registration

## Home Endpoints
- `GET /home` - Get landing page data

## User Endpoints
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create new user
- `PUT /users/:id` - Update user
- `DELETE /users/:id` - Delete user

## Course Endpoints

### Basic CRUD Operations
- `GET /courses` - Get all courses
- `GET /courses/:id` - Get course by ID
- `POST /courses` - Create new course
- `PUT /courses/:id` - Update course
- `DELETE /courses/:id` - Delete course

### Advanced Querying Endpoints

#### Search Courses
- `GET /courses/search` - Advanced search with query parameters
  - Query Parameters:
    - `q` (optional): Text search term
    - `level` (optional): Filter by level (beginner, intermediate, advanced)
    - `prerequisite` (optional): Filter by prerequisite
    - `limit` (optional): Number of results per page (default: 20)
    - `page` (optional): Page number (default: 1)
  
  Example: `GET /courses/search?q=javascript&level=beginner&limit=10&page=1`

#### Get Courses by Difficulty Range
- `GET /courses/difficulty-range` - Get courses within a difficulty range
  - Query Parameters:
    - `minLevel` (optional): Minimum level (beginner, intermediate, advanced)
    - `maxLevel` (optional): Maximum level (beginner, intermediate, advanced)
  
  Example: `GET /courses/difficulty-range?minLevel=beginner&maxLevel=intermediate`

#### Get Courses by Title
- `GET /courses/title/:title` - Get courses by title (case-insensitive search)
  
  Example: `GET /courses/title/javascript`

#### Get Courses by Level
- `GET /courses/level/:level` - Get courses by difficulty level
  - Valid levels: `beginner`, `intermediate`, `advanced`
  
  Example: `GET /courses/level/beginner`

#### Get Courses by Prerequisite
- `GET /courses/prerequisite/:prerequisite` - Get courses by prerequisite (case-insensitive search)
  
  Example: `GET /courses/prerequisite/javascript`

#### Combined Filters

##### Get Courses by Title and Level
- `GET /courses/title/:title/level/:level` - Get courses by title and level
  
  Example: `GET /courses/title/javascript/level/beginner`

##### Get Courses by Level and Prerequisite
- `GET /courses/level/:level/prerequisite/:prerequisite` - Get courses by level and prerequisite
  
  Example: `GET /courses/level/intermediate/prerequisite/javascript`

##### Get Courses by Title, Level and Prerequisite
- `GET /courses/title/:title/level/:level/prerequisite/:prerequisite` - Get courses by title, level and prerequisite
  
  Example: `GET /courses/title/javascript/level/beginner/prerequisite/html`

## Quiz Endpoints

### Basic CRUD Operations
- `GET /quizzes` - Get all quizzes
- `GET /quizzes/:id` - Get quiz by ID
- `POST /quizzes` - Create new quiz
- `PUT /quizzes/:id` - Update quiz
- `DELETE /quizzes/:id` - Delete quiz

### Advanced Querying Endpoints

#### Search Quizzes
- `GET /quizzes/search` - Advanced search with query parameters
  - Query Parameters:
    - `q` (optional): Text search term
    - `language` (optional): Filter by programming language (cpp, python, javascript, java)
    - `level` (optional): Filter by level (beginner, intermediate, advanced)
    - `topic` (optional): Filter by topic/course name
    - `limit` (optional): Number of results per page (default: 20)
    - `page` (optional): Page number (default: 1)
  
  Example: `GET /quizzes/search?q=arrays&language=java&level=beginner&limit=10&page=1`

#### Get Quizzes by Language
- `GET /quizzes/language/:language` - Get quizzes by programming language
  - Valid languages: `cpp`, `python`, `javascript`, `java`
  
  Example: `GET /quizzes/language/java`

#### Get Quizzes by Level
- `GET /quizzes/level/:level` - Get quizzes by difficulty level
  - Valid levels: `beginner`, `intermediate`, `advanced`
  
  Example: `GET /quizzes/level/beginner`

#### Get Quizzes by Topic
- `GET /quizzes/topic/:topic` - Get quizzes by topic/course name (case-insensitive search)
  
  Example: `GET /quizzes/topic/arrays`

#### Combined Filters

##### Get Quizzes by Language and Level
- `GET /quizzes/language/:language/level/:level` - Get quizzes by language and level
  
  Example: `GET /quizzes/language/java/level/beginner`

##### Get Quizzes by Language and Topic
- `GET /quizzes/language/:language/topic/:topic` - Get quizzes by language and topic
  
  Example: `GET /quizzes/language/java/topic/arrays`

##### Get Quizzes by Level and Topic
- `GET /quizzes/level/:level/topic/:topic` - Get quizzes by level and topic
  
  Example: `GET /quizzes/level/beginner/topic/arrays`

##### Get Quizzes by Language, Level and Topic
- `GET /quizzes/language/:language/level/:level/topic/:topic` - Get quizzes by language, level and topic
  
  Example: `GET /quizzes/language/java/level/beginner/topic/arrays`

## Custom Quiz Endpoints
- `GET /custom-quizzes` - Get all custom quizzes
- `GET /custom-quizzes/:id` - Get custom quiz by ID
- `POST /custom-quizzes` - Create new custom quiz
- `PUT /custom-quizzes/:id` - Update custom quiz
- `DELETE /custom-quizzes/:id` - Delete custom quiz

## Response Formats

### Success Response
```json
{
  "data": [...],
  "count": 5,
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

### Error Response
```json
{
  "error": "Error message",
  "details": "Additional error details"
}
```

### Validation Error Response
```json
{
  "error": "Invalid level",
  "validLevels": ["beginner", "intermediate", "advanced"]
}
```

## Data Models

### Course Model
```json
{
  "_id": "ObjectId",
  "title": "String",
  "description": "String",
  "level": "beginner|intermediate|advanced",
  "prerequisites": ["String"],
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

### Quiz Model
```json
{
  "_id": "ObjectId",
  "title": "String",
  "level": "beginner|intermediate|advanced",
  "language": "cpp|python|javascript|java",
  "description": "String",
  "topic": {
    "courseID": "ObjectId",
    "courseName": "String"
  },
  "questions": [
    {
      "questionText": "String",
      "options": [
        {
          "optionText": "String",
          "optionTag": "A|B|C|D"
        }
      ],
      "correctOption": "A|B|C|D",
      "score": "Number"
    }
  ],
  "quizScore": "Number",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## Usage Examples

### Finding Beginner Java Quizzes
```bash
curl "http://localhost:3000/api/quizzes/language/java/level/beginner"
```

### Searching for JavaScript Courses
```bash
curl "http://localhost:3000/api/courses/search?q=javascript&level=beginner"
```

### Getting Courses in Difficulty Range
```bash
curl "http://localhost:3000/api/courses/difficulty-range?minLevel=beginner&maxLevel=intermediate"
```

### Finding Array-related Quizzes
```bash
curl "http://localhost:3000/api/quizzes/topic/arrays"
```

### Advanced Quiz Search
```bash
curl "http://localhost:3000/api/quizzes/search?language=java&level=intermediate&topic=linkedlists&limit=5"
``` 