# Difficulty-Based Quiz Seeding Scripts

This directory contains comprehensive seeding scripts for all programming languages and difficulty levels. All scripts ensure that course names match the filenames in the data directories.

## Overview

The seeding system supports 4 programming languages:
- **Java** (`java`)
- **C++** (`cpp`) 
- **JavaScript** (`javascript`)
- **Python** (`python`)

Each language has 3 difficulty levels:
- **Beginner** (`beginner`)
- **Intermediate** (`intermediate`)
- **Advanced** (`advanced`)

## Available Scripts

### Individual Language Scripts

#### Java
- `seedJavaBeginnerQuizzes.ts` - Seeds all beginner Java quizzes
- `seedJavaIntermediateQuizzes.ts` - Seeds all intermediate Java quizzes  
- `seedJavaAdvancedQuizzes.ts` - Seeds all advanced Java quizzes

#### C++
- `seedCppBeginnerQuizzes.ts` - Seeds all beginner C++ quizzes
- `seedCppIntermediateQuizzes.ts` - Seeds all intermediate C++ quizzes
- `seedCppAdvancedQuizzes.ts` - Seeds all advanced C++ quizzes

#### JavaScript
- `seedJavaScriptBeginnerQuizzes.ts` - Seeds all beginner JavaScript quizzes
- `seedJavaScriptIntermediateQuizzes.ts` - Seeds all intermediate JavaScript quizzes
- `seedJavaScriptAdvancedQuizzes.ts` - Seeds all advanced JavaScript quizzes

#### Python
- `seedPythonBeginnerQuizzes.ts` - Seeds all beginner Python quizzes
- `seedPythonIntermediateQuizzes.ts` - Seeds all intermediate Python quizzes
- `seedPythonAdvancedQuizzes.ts` - Seeds all advanced Python quizzes

### Master Scripts

#### `seedAllQuizzes.ts`
A comprehensive script that can seed quizzes for specific languages and difficulty levels.

## Usage

### Using Individual Scripts

```bash
# Seed all Java quizzes (all difficulties)
npm run seed:java

# Seed specific difficulty for Java
npm run seed:java:beginner
npm run seed:java:intermediate
npm run seed:java:advanced
```

### Using the Master Script

```bash
# Seed all quizzes for all languages and difficulties
npx ts-node src/scripts/difficulty-based/seedAllQuizzes.ts

# Seed specific languages
npx ts-node src/scripts/difficulty-based/seedAllQuizzes.ts --lang=java --lang=cpp

# Seed specific difficulties
npx ts-node src/scripts/difficulty-based/seedAllQuizzes.ts --difficulty=beginner --difficulty=intermediate

# Clear existing quizzes before seeding
npx ts-node src/scripts/difficulty-based/seedAllQuizzes.ts --clear

# Combine options
npx ts-node src/scripts/difficulty-based/seedAllQuizzes.ts --lang=java --difficulty=advanced --clear
```

### Using the Main Seed Script

```bash
# Seed everything (courses, users, all quizzes)
npx ts-node src/scripts/seed.ts --all

# Seed only quizzes
npx ts-node src/scripts/seed.ts --quiz

# Seed specific components
npx ts-node src/scripts/seed.ts --course --user --quiz
```

## Course Coverage

Each script includes all available topics:

### Beginner Topics
- Arrays, Recursion, ComplexityAnalysis, LinkedLists, Stacks, Queues, Strings, Pointers, Matrices

### Intermediate Topics  
- All beginner topics + HashTables, Trees, BinaryTrees, BinarySearchTrees, Heaps, Graphs, SortingAlgorithms, SearchingAlgorithms, BFS, DFS, DivideAndConquer, GreedyAlgorithms, BinarySearch, TwoPointers, SlidingWindow, BinaryOperations

### Advanced Topics
- All intermediate topics + Backtracking, DynamicProgramming, DijkstrasAlgorithm, BellmanFordAlgorithm, FloydWarshallAlgorithm, PrimsAlgorithm, KruskalsAlgorithm, TopologicalSort, AVLTrees, RedBlackTrees, BTrees, Tries, SegmentTrees, FenwickTrees, DisjointSetUnion, SuffixArraysTrees

## Data Structure

Each quiz file follows this structure:
```typescript
{
  title: string;
  quizLevel: "beginner" | "intermediate" | "advanced";
  lang: "java" | "cpp" | "javascript" | "python";
  description: string;
  questions: Question[];
  quizScore: number;
}
```

## Validation

All scripts include validation to ensure:
1. Course names match exactly with filenames in data directories
2. All required courses exist in the database before seeding
3. Proper error handling for missing courses or data
4. Consistent quiz structure across all languages and difficulties

## File Naming Convention

All quiz files follow the naming convention:
```
src/data/{language}/{difficulty}/{TopicName}.ts
```

Where:
- `{language}` is one of: `java`, `cpp`, `javascript`, `python`
- `{difficulty}` is one of: `beginner`, `intermediate`, `advanced`  
- `{TopicName}` matches exactly with the `courseName` in `coursesData.ts`

## Error Handling

Scripts include comprehensive error handling:
- Missing course validation
- Database connection errors
- Import errors for missing quiz files
- Graceful skipping of failed quiz insertions
- Detailed logging for debugging

## Performance

- Scripts use `insertMany()` for efficient bulk insertion
- Database connections are properly managed
- Memory usage is optimized for large datasets
- Progress logging helps monitor seeding progress

## Troubleshooting

### Common Issues

1. **Missing Course Error**: Ensure courses are seeded before running quiz scripts
2. **Import Error**: Check that all quiz files exist in the correct directories
3. **Database Connection**: Verify MongoDB is running and accessible
4. **File Naming**: Ensure quiz filenames match course names exactly

### Debug Commands

```bash
# Check database connection
npx ts-node src/scripts/seed.ts --course

# Verify course names
npx ts-node -e "console.log(require('./src/data/coursesData').coursesData.map(c => c.courseName))"

# Test specific language
npx ts-node src/scripts/difficulty-based/seedAllQuizzes.ts --lang=java --difficulty=beginner
```

## Maintenance

When adding new topics:
1. Add the course to `coursesData.ts`
2. Create quiz files in all language/difficulty directories
3. Update the seeding scripts to include the new topic
4. Test with a small subset before running full seeding

## Notes

- All scripts ignore the `temp` directory as requested
- Course names are validated against the actual filenames in the advanced directory
- The system supports easy extension to new languages or difficulty levels
- Scripts are designed to be idempotent (safe to run multiple times) 