#!/usr/bin/env node

// Simple startup script for Render deployment
console.log('🚀 Starting SSMP Backend Server...');
console.log('📁 Current directory:', process.cwd());
console.log('🔧 Node version:', process.version);
console.log('🌍 Environment:', process.env.NODE_ENV || 'development');
console.log('📡 Port:', process.env.PORT || '5000');

// Check if dist directory exists
const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.js');

if (!fs.existsSync(distPath)) {
  console.error('❌ dist directory not found. Running build...');
  const { execSync } = require('child_process');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build completed');
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

if (!fs.existsSync(indexPath)) {
  console.error('❌ dist/index.js not found after build');
  process.exit(1);
}

console.log('✅ Starting server from dist/index.js');

// Start the actual server
require('./dist/index.js');
