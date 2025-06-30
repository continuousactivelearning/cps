// Developed by Manjistha Bidkar
// Utility to download YouTube subtitles using yt-dlp
// 1. Attempts to download English subtitles (auto-generated or manual)
// 2. If not available, downloads subtitles in the best available language
// 3. Returns the path to the saved .vtt file and detected language code

import execa = require("execa");
import * as fs from 'fs';
import * as path from 'path';

export interface SubtitleDownloadResult {
  filePath: string;
  langCode: string;
}

export async function downloadSubtitles(videoId: string, outputDir: string): Promise<SubtitleDownloadResult> {
  const baseUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const output = path.join(outputDir, `${videoId}.%(ext)s`);

  // Try English first
  try {
    await execa('yt-dlp', [
      '--write-auto-sub',
      '--write-sub',
      '--sub-lang', 'en',
      '--skip-download',
      '-o', output,
      baseUrl,
    ]);
    const enVtt = fs.readdirSync(outputDir).find(f => f.startsWith(videoId) && f.endsWith('.en.vtt'));
    if (enVtt) {
      return { filePath: path.join(outputDir, enVtt), langCode: 'en' };
    }
  } catch {
    // Fail silently and fallback below
  }

  // If English not found, fallback to any available language
  try {
    await execa('yt-dlp', [
      '--write-auto-sub',
      '--write-sub',
      '--sub-lang', 'best',
      '--skip-download',
      '-o', output,
      baseUrl,
    ]);

    const fallback = fs.readdirSync(outputDir).find(f => f.startsWith(videoId) && f.endsWith('.vtt'));
    if (fallback) {
      const langMatch = fallback.match(/\.(\w+)\.vtt$/);
      const detectedLang = langMatch?.[1] ?? 'unknown';
      return { filePath: path.join(outputDir, fallback), langCode: detectedLang };
    }
  } catch (error) {
    console.error(`Failed to download subtitles for ${videoId}:`, error);
  }

  throw new Error(`No subtitles found for video: ${videoId}`);
}
