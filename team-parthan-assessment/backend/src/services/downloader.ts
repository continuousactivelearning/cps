// Developed by Manjistha Bidkar
import { execa } from 'execa';
import * as fs from 'fs';
import * as path from 'path';
import { config } from '../config';

export interface SubtitleDownloadResult {
  filePath: string;
  langCode: string;
}

export async function downloadSubtitles(
  videoId: string,
  outputDir: string,
): Promise<SubtitleDownloadResult> {
  const baseUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const output = path.join(outputDir, `${videoId}.%(ext)s`);

  const cookiesFile = config.COOKIES_PATH;

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Common yt-dlp arguments
  const commonArgs = [
    '--cookies', cookiesFile,
    '--no-check-certificate',
    '--write-auto-sub',
    '--write-sub',
    '--skip-download',
    '-o', output,
    baseUrl,
  ];

  if (config.PROXY) {
    commonArgs.unshift('--proxy', config.PROXY);
  }

  // Try downloading English subtitles first
  try {
    await execa('yt-dlp', ['--sub-lang', 'en', ...commonArgs]);

    const enVtt = fs.readdirSync(outputDir).find(f => f.startsWith(videoId) && f.endsWith('.en.vtt'));
    if (enVtt) {
      return { filePath: path.join(outputDir, enVtt), langCode: 'en' };
    }
  } catch (err) {
    console.warn(`English subtitles not found for ${videoId}. Falling back to best available language.`);
  }

  // Fallback to best available language
  try {
    await execa('yt-dlp', ['--sub-lang', 'best', ...commonArgs]);

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
