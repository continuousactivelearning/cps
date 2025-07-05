// Developed by Manjistha Bidkar
// Utility to download YouTube subtitles using yt-dlp
// 1. Attempts to download English subtitles (auto-generated or manual)
// 2. If not available, downloads subtitles in the best available language
// 3. Returns the path to the saved .vtt file and detected language code

import execa from 'execa';
import * as fs from 'fs';
import * as path from 'path';

export interface SubtitleDownloadResult {
  filePath: string;
  langCode: string;
}

export async function downloadSubtitles(videoId: string, outputDir: string): Promise<SubtitleDownloadResult> {
  const baseUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const output = path.join(outputDir, `${videoId}.%(ext)s`);

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const commonArgs = [
    '--write-auto-sub',
    '--write-sub',
    '--skip-download',
    '--user-agent', 'Mozilla/5.0',
    '-o', output,
    baseUrl,
  ];

  // Try English first
  try {
    await execa('yt-dlp', [
      '--sub-lang', 'en',
      ...commonArgs,
    ]);

    const enVtt = fs.readdirSync(outputDir).find(f => f.startsWith(videoId) && f.endsWith('.en.vtt'));
    if (enVtt) {
      return { filePath: path.join(outputDir, enVtt), langCode: 'en' };
    }
  } catch (err) {
    console.warn(`English subtitles not found for ${videoId}. Falling back to other languages.`);
  }

  // Fallback to any available subtitle language
  try {
    await execa('yt-dlp', [
      '--sub-lang', 'best',
      ...commonArgs,
    ]);

    const fallback = fs.readdirSync(outputDir).find(f => f.startsWith(videoId) && f.endsWith('.vtt'));
    if (fallback) {
      const langMatch = fallback.match(/\.(\w+)\.vtt$/);
      const detectedLang = langMatch?.[1] ?? 'unknown';
      return { filePath: path.join(outputDir, fallback), langCode: detectedLang };
    }
  } catch (error) {
    console.error(`Failed to download any subtitles for ${videoId}:`, error);
  }

  throw new Error(`No subtitles found for video: ${videoId}`);
}
