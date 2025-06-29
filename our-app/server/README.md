# Server - Database Management Scripts

This server includes consolidated database management scripts for easy data manipulation.

## Scripts

### 1. Delete Data Script (`deleteAllData.ts`)

Deletes data from the database with selective options.

**Usage:**
```bash
# Delete all data (default)
npm run delete-data

# Delete specific data types
npm run delete-data -- --quiz
npm run delete-data -- --user
npm run delete-data -- --course
npm run delete-data -- --custom-quiz

# Delete multiple types
npm run delete-data -- --quiz --user
npm run delete-data -- --all
```

**Options:**
- `--all`: Delete all data (default if no options provided)
- `--quiz`: Delete only quizzes
- `--user`: Delete only users
- `--course`: Delete only courses
- `--custom-quiz`: Delete only custom quizzes

### 2. Seed Data Script (`seed.ts`)

Seeds data into the database with selective options.

**Usage:**
```bash
# Seed all data (default)
npm run seed

# Seed specific data types
npm run seed -- --quiz
npm run seed -- --user
npm run seed -- --course

# Seed multiple types
npm run seed -- --quiz --user
npm run seed -- --all
```

**Options:**
- `--all`: Seed all data (default if no options provided)
- `--quiz`: Seed only quizzes (beginner, intermediate, advanced)
- `--user`: Seed only users
- `--course`: Seed only courses

## Typical Workflow

1. **Delete existing data:**
   ```bash
   npm run delete-data -- --all
   ```

2. **Seed fresh data:**
   ```bash
   npm run seed -- --all
   ```

3. **Update only quizzes:**
   ```bash
   npm run delete-data -- --quiz
   npm run seed -- --quiz
   ```

## Data Structure

- **Courses**: Data structures and algorithms courses with prerequisites
- **Users**: Sample users with quiz history and course progress
- **Quizzes**: Java quizzes organized by difficulty (beginner, intermediate, advanced)
- **Custom Quizzes**: User-created quizzes

## Notes

- Scripts automatically connect to MongoDB using `MONGODB_URI` environment variable
- Default database: `mongodb://localhost:27017/our-app-db`
- All scripts handle connection management automatically
- No delete operations are performed during seeding (separation of concerns)