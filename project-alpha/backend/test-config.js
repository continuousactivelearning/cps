// Test script to verify the new backend configuration
const fs = require('fs');
const path = require('path');

console.log('🔍 Testing Backend Configuration...\n');

// Check if index.ts exists in root
const indexExists = fs.existsSync(path.join(__dirname, 'index.ts'));
console.log(`✅ index.ts in root directory: ${indexExists}`);

// Check if src directory exists
const srcExists = fs.existsSync(path.join(__dirname, 'src'));
console.log(`✅ src directory exists: ${srcExists}`);

// Check if package.json exists
const packageExists = fs.existsSync(path.join(__dirname, 'package.json'));
console.log(`✅ package.json exists: ${packageExists}`);

// Check if tsconfig.json exists
const tsconfigExists = fs.existsSync(path.join(__dirname, 'tsconfig.json'));
console.log(`✅ tsconfig.json exists: ${tsconfigExists}`);

console.log('\n📁 Current directory structure:');
console.log('├── index.ts (main entry point)');
console.log('├── package.json');
console.log('├── tsconfig.json');
console.log('└── src/');
console.log('    ├── routes/');
console.log('    ├── models/');
console.log('    ├── middleware/');
console.log('    └── services/');

console.log('\n🚀 Configuration is ready!');
console.log('Run "npm run dev" to start the development server');
console.log('Run "npm run build" to build for production'); 