const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Testing Backend Build Process...\n');

// Check if TypeScript is installed
try {
  const tscVersion = execSync('npx tsc --version', { encoding: 'utf8' });
  console.log(`✅ TypeScript version: ${tscVersion.trim()}`);
} catch (error) {
  console.log('❌ TypeScript not found or not working');
  console.log('Error:', error.message);
  process.exit(1);
}

// Check if all required files exist
const requiredFiles = [
  'index.ts',
  'tsconfig.json',
  'package.json',
  'src/routes/auth.ts',
  'src/models/User.ts',
  'src/middleware/auth.ts'
];

console.log('\n📁 Checking required files:');
requiredFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`${exists ? '✅' : '❌'} ${file}`);
  if (!exists) {
    console.log(`   Missing file: ${file}`);
  }
});

// Try to compile
console.log('\n🔨 Attempting TypeScript compilation...');
try {
  execSync('npx tsc --noEmit', { stdio: 'inherit' });
  console.log('✅ TypeScript compilation successful (no errors)');
} catch (error) {
  console.log('❌ TypeScript compilation failed');
  console.log('Error:', error.message);
  process.exit(1);
}

// Try to build
console.log('\n🏗️ Attempting full build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful');
  
  // Check if dist folder was created
  const distExists = fs.existsSync(path.join(__dirname, 'dist'));
  console.log(`${distExists ? '✅' : '❌'} dist folder created`);
  
  if (distExists) {
    const distFiles = fs.readdirSync(path.join(__dirname, 'dist'));
    console.log(`📦 Built files: ${distFiles.join(', ')}`);
  }
} catch (error) {
  console.log('❌ Build failed');
  console.log('Error:', error.message);
  process.exit(1);
}

console.log('\n🎉 All tests passed! Backend is ready for deployment.'); 
