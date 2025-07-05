#!/usr/bin/env node
/**
 * Setup script for TypeScript chat system migration
 * Run this to ensure all required files and directories are in place
 */

import fs from 'fs/promises';
import path from 'path';

const REQUIRED_DIRECTORIES = [
  'queryHandling',
  'queryHandling/static',
  'queryHandling/static/graph',
  'queryHandling/dynamic',
  'queryHandling/nlp'
];

const REQUIRED_FILES = [
  {
    path: 'queryHandling/learning_sessions.json',
    content: '{}'
  },
  {
    path: 'queryHandling/unknown_queries.json',
    content: '{"queries":[]}'
  }
];

const SAMPLE_ENV = `# DSA Learning Chat System Environment Variables

# API Keys (Optional - fallbacks available)
GROQ_API_KEY=your_groq_api_key_here
YOUTUBE_API_KEY=your_youtube_api_key_here

# Server Configuration
PORT=5000
NODE_ENV=development

# Database (for existing auth system)
MONGODB_URI=mongodb://localhost:27017/dsa-learning
DATABASE_NAME=dsa-learning

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173

# JWT Secret (for existing auth)
JWT_SECRET=your_jwt_secret_here
`;

const SAMPLE_GRAPH_DATA = {
  "nodes": [
    {
      "id": "array_1",
      "name": "Arrays",
      "type": "topic",
      "keywords": ["array", "list", "index", "element"]
    },
    {
      "id": "array_basics",
      "name": "Array Basics",
      "type": "subtopic", 
      "parent_topic": "array_1",
      "keywords": ["array basics", "indexing", "access"]
    },
    {
      "id": "linkedlist_1",
      "name": "Linked Lists",
      "type": "topic",
      "keywords": ["linked list", "node", "pointer", "reference"]
    },
    {
      "id": "stack_1", 
      "name": "Stack",
      "type": "topic",
      "keywords": ["stack", "lifo", "push", "pop"]
    },
    {
      "id": "queue_1",
      "name": "Queue", 
      "type": "topic",
      "keywords": ["queue", "fifo", "enqueue", "dequeue"]
    },
    {
      "id": "tree_1",
      "name": "Binary Trees",
      "type": "topic", 
      "keywords": ["tree", "binary tree", "node", "root", "leaf"]
    }
  ],
  "edges": [
    {
      "source": "array_1",
      "target": "linkedlist_1",
      "type": "prerequisite"
    },
    {
      "source": "array_1", 
      "target": "stack_1",
      "type": "prerequisite"
    },
    {
      "source": "array_1",
      "target": "queue_1", 
      "type": "prerequisite"
    },
    {
      "source": "linkedlist_1",
      "target": "tree_1",
      "type": "prerequisite"
    }
  ]
};

async function createDirectories() {
  console.log('📁 Creating required directories...');
  
  for (const dir of REQUIRED_DIRECTORIES) {
    try {
      await fs.mkdir(dir, { recursive: true });
      console.log(`  ✅ Created: ${dir}`);
    } catch (error) {
      console.log(`  ℹ️  Already exists: ${dir}`);
    }
  }
}

async function createRequiredFiles() {
  console.log('\n📄 Creating required files...');
  
  for (const file of REQUIRED_FILES) {
    try {
      await fs.access(file.path);
      console.log(`  ℹ️  Already exists: ${file.path}`);
    } catch {
      await fs.writeFile(file.path, file.content);
      console.log(`  ✅ Created: ${file.path}`);
    }
  }
}

async function createSampleFiles() {
  console.log('\n📝 Creating sample files...');
  
  // Create sample .env if it doesn't exist
  try {
    await fs.access('.env');
    console.log('  ℹ️  .env already exists');
  } catch {
    await fs.writeFile('.env', SAMPLE_ENV);
    console.log('  ✅ Created: .env (sample configuration)');
  }
  
  // Create sample graph data if it doesn't exist
  const graphDataPath = 'queryHandling/static/graph/graph_data.json';
  try {
    await fs.access(graphDataPath);
    console.log('  ℹ️  graph_data.json already exists');
  } catch {
    await fs.writeFile(graphDataPath, JSON.stringify(SAMPLE_GRAPH_DATA, null, 2));
    console.log('  ✅ Created: queryHandling/static/graph/graph_data.json (sample data)');
  }
}

async function checkDependencies() {
  console.log('\n📦 Checking dependencies...');
  
  try {
    const packageJson = await fs.readFile('package.json', 'utf-8');
    const pkg = JSON.parse(packageJson);
    
    const requiredDeps = ['express', 'axios', 'dotenv', 'cors'];
    const missingDeps = requiredDeps.filter(dep => 
      !pkg.dependencies?.[dep] && !pkg.devDependencies?.[dep]
    );
    
    if (missingDeps.length > 0) {
      console.log(`  ⚠️  Missing dependencies: ${missingDeps.join(', ')}`);
      console.log('     Run: npm install ' + missingDeps.join(' '));
    } else {
      console.log('  ✅ All required dependencies are installed');
    }
    
  } catch (error) {
    console.log('  ⚠️  Could not read package.json');
  }
}

async function printNextSteps() {
  console.log('\n🚀 Setup Complete! Next Steps:');
  console.log('=' .repeat(50));
  console.log('1. Update your .env file with real API keys:');
  console.log('   - GROQ_API_KEY (for AI responses)');
  console.log('   - YOUTUBE_API_KEY (for video recommendations)');
  console.log('');
  console.log('2. If you have existing graph data, replace:');
  console.log('   queryHandling/static/graph/graph_data.json');
  console.log('');
  console.log('3. Start the development server:');
  console.log('   npm run dev');
  console.log('');
  console.log('4. Test the chat API:');
  console.log('   POST http://localhost:5000/api/chat');
  console.log('   Body: {"message": "I want to learn about arrays"}');
  console.log('');
  console.log('5. The TypeScript system will automatically replace');
  console.log('   your Python chat handler with enhanced functionality!');
  console.log('=' .repeat(50));
}

async function main() {
  console.log('🔧 DSA Learning Chat System - TypeScript Migration Setup');
  console.log('=' .repeat(60));
  
  try {
    await createDirectories();
    await createRequiredFiles();
    await createSampleFiles();
    await checkDependencies();
    await printNextSteps();
    
  } catch (error) {
    console.error('\n❌ Setup failed:', error);
    process.exit(1);
  }
}

// Run setup if this script is executed directly
if (require.main === module) {
  main();
}

export { main as setupTypeScriptChat };
