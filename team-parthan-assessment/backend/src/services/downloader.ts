import execa from 'execa';
import * as fs from 'fs';
import * as path from 'path';

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

  // Hardcoded cookies.txt path
  const cookiesFile = path.resolve(__dirname, 'cookies.txt'); // Adjust path if cookies.txt is elsewhere

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // Common yt-dlp arguments
  const commonArgs = [
    '--cookies', cookiesFile,
    '--proxy', 'scraperapi:7c98f3382f2b5c0fc248ac58a2ee9d91@proxy-server.scraperapi.com:8001',
    '--write-auto-sub',
    '--write-sub',
    '--skip-download',
    '-o', output,
    baseUrl,
  ];


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
    console.log(error);
  }

  throw new Error(`No subtitles found for video: ${videoId}`);
}
