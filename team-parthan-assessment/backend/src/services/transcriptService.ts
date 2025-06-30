// Developed by Manjistha Bidkar

// Main service to process a YouTube video's transcript
// 1. Downloads subtitles (tries English first, then best available language)
// 2. Parses and cleans the .vtt subtitle file
// 3. Translates to English if necessary
// 4. Deletes temporary files before returning cleaned transcript

import { downloadSubtitles } from './downloader';
import { parseVttFile } from './parser';
import { translateToEnglish } from './translate';
import * as fs from 'fs-extra';
import * as path from 'path';

export async function processTranscript(url: string, videoId: string): Promise<string> {
  const tempDir = path.resolve('./temp_subtitles');
  await fs.ensureDir(tempDir);

  try {
     // Step 1: Download subtitles (.vtt file) to tempDir
    const { filePath, langCode } = await downloadSubtitles(videoId, tempDir); // ✅ destructure object
    
    // Step 2: Parse and clean transcript text from .vtt file
    const rawTranscript = await parseVttFile(filePath);

    // Step 3: If not in English, translate to English
    // Detect language based on langCode 
    const isEnglish = langCode === 'en';

    let finalTranscript = rawTranscript;
    if (!isEnglish) {
      console.log('Translating non-English subtitles to English...');
      finalTranscript = await translateToEnglish(rawTranscript);
    }

    return finalTranscript;
  } catch (err) {
    console.error(`Error processing transcript for ${videoId}:`, err);
    return '';
  } finally {
     // Step 4: Clean up temporary subtitle files
    await fs.remove(tempDir);
  }
}
