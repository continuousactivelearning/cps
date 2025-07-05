/**
 * Environment configuration and validation utilities
 */

import dotenv from 'dotenv';
import path from 'path';

// Load environment variables
dotenv.config();

export interface AppConfig {
  port: number;
  nodeEnv: string;
  groqApiKey: string;
  youtubeApiKey: string;
  frontendUrl: string;
}

/**
 * Get and validate application configuration
 */
export const getConfig = (): AppConfig => {
  const config: AppConfig = {
    port: parseInt(process.env.PORT || '3001', 10),
    nodeEnv: process.env.NODE_ENV || 'development',
    groqApiKey: process.env.GROQ_API_KEY || '',
    youtubeApiKey: process.env.YOUTUBE_API_KEY || '',
    frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000'
  };

  // Validation
  if (isNaN(config.port) || config.port < 1 || config.port > 65535) {
    throw new Error('Invalid PORT environment variable');
  }

  // Warnings for missing optional API keys
  if (!config.groqApiKey) {
    console.warn('⚠️  GROQ_API_KEY not found. AI responses will use fallback mode.');
  }

  if (!config.youtubeApiKey) {
    console.warn('⚠️  YOUTUBE_API_KEY not found. Video recommendations will use mock data.');
  }

  return config;
};

/**
 * Get file paths for the application
 */
export const getFilePaths = () => {
  const rootDir = path.join(__dirname, '..');
  
  return {
    root: rootDir,
    frontend: path.join(rootDir, '..', 'frontend'),
    frontendPublic: path.join(rootDir, '..', 'frontend', 'public'),
    queryHandling: path.join(rootDir, 'queryHandling'),
    graphData: path.join(rootDir, 'queryHandling', 'static', 'graph', 'graph_data.json'),
    learningSessions: path.join(rootDir, 'queryHandling', 'learning_sessions.json'),
    unknownQueries: path.join(rootDir, 'queryHandling', 'unknown_queries.json')
  };
};

/**
 * Check if required files exist
 */
export const validateFileSystem = async (): Promise<void> => {
  const fs = await import('fs/promises');
  const paths = getFilePaths();

  try {
    // Check if graph data exists
    await fs.access(paths.graphData);
    console.log('✅ Graph data file found');
  } catch {
    console.warn('⚠️  Graph data file not found at:', paths.graphData);
    console.warn('   Some features may not work properly until this file is provided.');
  }

  try {
    // Check if frontend public directory exists
    await fs.access(paths.frontendPublic);
    console.log('✅ Frontend public directory found');
  } catch {
    console.warn('⚠️  Frontend public directory not found at:', paths.frontendPublic);
    console.warn('   User profile loading may not work properly.');
  }

  // Create missing directories and files
  try {
    await fs.mkdir(path.dirname(paths.learningSessions), { recursive: true });
    
    // Create empty learning sessions file if it doesn't exist
    try {
      await fs.access(paths.learningSessions);
    } catch {
      await fs.writeFile(paths.learningSessions, '{}');
      console.log('✅ Created learning sessions file');
    }

    // Create empty unknown queries file if it doesn't exist
    try {
      await fs.access(paths.unknownQueries);
    } catch {
      await fs.writeFile(paths.unknownQueries, '{"queries":[]}');
      console.log('✅ Created unknown queries file');
    }

  } catch (error) {
    console.error('❌ Error setting up file system:', error);
  }
};

/**
 * Print startup information
 */
export const printStartupInfo = (config: AppConfig): void => {
  console.log('\n🚀 DSA Learning Chat System - TypeScript Backend');
  console.log('================================================');
  console.log(`Environment: ${config.nodeEnv}`);
  console.log(`Port: ${config.port}`);
  console.log(`Groq API: ${config.groqApiKey ? '✅ Configured' : '❌ Not configured (fallback mode)'}`);
  console.log(`YouTube API: ${config.youtubeApiKey ? '✅ Configured' : '❌ Not configured (mock mode)'}`);
  console.log(`Frontend URL: ${config.frontendUrl}`);
  console.log('================================================\n');
};

/**
 * Initialize the application environment
 */
export const initializeEnvironment = async (): Promise<AppConfig> => {
  console.log('🔧 Initializing application environment...\n');
  
  // Get and validate configuration
  const config = getConfig();
  
  // Validate file system
  await validateFileSystem();
  
  // Print startup information
  printStartupInfo(config);
  
  return config;
};
