import execa from 'execa';
import * as fs from 'fs';
import * as path from 'path';

export interface SubtitleDownloadResult {
  filePath: string;
  langCode: string;
}

export async function downloadSubtitles(videoId: string, outputDir: string): Promise<SubtitleDownloadResult> {
  const baseUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const output = path.join(outputDir, `${videoId}.%(ext)s`).replace(/\\/g, '/');


  // Try downloading English subtitles first
  try {
    await execa('python', [
    '-m', 'yt_dlp',
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
    console.warn(`[WARN] English subtitle file not found for ${videoId}`);
  } catch (e) {
    console.warn(`[WARN] Failed to download English subtitles for ${videoId}`);
  }

  // Fallback: download all subtitles and pick the first available
  try {
    await execa('yt-dlp', [
      '--write-auto-sub',
      '--write-sub',
      '--all-subs',
      '--skip-download',
      '-o', output,
      baseUrl,
    ]);

    const fallback = fs.readdirSync(outputDir).find(f =>
  f.startsWith(videoId) && f.endsWith('.vtt')
);

    if (fallback) {
      const langMatch = fallback.match(/\.(\w+)\.vtt$/);
const detectedLang = langMatch?.[1] ?? 'unknown';

      return { filePath: path.join(outputDir, fallback), langCode: detectedLang };
    }
  } catch (error) {
    console.error(`[ERROR] yt-dlp failed for ${videoId}:`, error);
  }

  throw new Error(`No subtitles found for video: ${videoId}`);
}
