// Developed by Manjistha Bidkar
import { execa } from 'execa';

// Downloads English auto-generated subtitles from YouTube using yt-dlp
export async function downloadSubtitles(videoId: string): Promise<void> {
  try {
    await execa('yt-dlp', [
      '--write-auto-sub',
      '--sub-lang', 'en',
      '--skip-download',
      '-o', `${videoId}.%(ext)s`,
      `https://www.youtube.com/watch?v=${videoId}`
    ]);
  } catch (error) {
    throw new Error(`yt-dlp failed: ${(error as Error).message}`);
  }
}
