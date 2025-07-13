// Developed by Manjistha Bidkar
import execa from 'execa';
import * as fs from 'fs';
import * as path from 'path';
import { config } from '../config';
import { getRandomUserAgent } from './userAgents';

export interface SubtitleDownloadResult {
  filePath: string;
  langCode: string;
}

export async function downloadSubtitles(
  videoId: string,
  outputDir: string,
  userId: string 
): Promise<SubtitleDownloadResult> {
  const baseUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const output = path.join(outputDir, `${videoId}.%(ext)s`);

  const userCookiePath = path.join(process.cwd(), 'cookies', `${userId}.txt`);
  const cookiesFile = fs.existsSync(userCookiePath) ? userCookiePath : config.COOKIES_PATH;

  console.log(`[DEBUG] videoId: ${videoId}`);
  console.log(`[DEBUG] cookies path used: ${cookiesFile}`);
  console.log(`[DEBUG] output template: ${output}`);
  console.log(`[DEBUG] outputDir exists: ${fs.existsSync(outputDir)}`);
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
    console.log(`[INFO] Created output directory: ${outputDir}`);
  }
  console.log("Files in outputDir:", fs.readdirSync(outputDir));


  const buildCommonArgs = (): string[] => {
    const userAgent = getRandomUserAgent();
    const args = [
      '--cookies', cookiesFile,
      '--user-agent', userAgent,
      '--no-check-certificate',
      '--write-auto-sub',
      '--write-sub',
      '--skip-download',
      '-o', output,
      baseUrl,
    ];
    if (config.PROXY) {
      args.unshift('--proxy', config.PROXY);
    }
    return args;
  };

  const tryDownload = async (lang: string, maxRetries = 3): Promise<string | null> => {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        const ytDlpBinary = process.platform === 'win32'
  ? path.resolve(__dirname, '../../bin/yt-dlp.exe')
  : path.resolve(__dirname, '../../bin/yt-dlp');

await execa(ytDlpBinary, ['--sub-lang', lang, ...buildCommonArgs()]);
console.log(`[INFO] Running yt-dlp [${lang}] (attempt ${attempt}): ${ytDlpBinary}`);


        const match = lang === 'en' ? '.en.vtt' : '.vtt';
        const subtitleFile = fs
          .readdirSync(outputDir)
          .find(f => f.startsWith(videoId) && f.endsWith(match));

        if (subtitleFile) {
          console.log(`[SUCCESS] Found subtitle file: ${subtitleFile}`);
          return subtitleFile;
        } else {
          console.warn(`[WARN] Subtitle file not found after yt-dlp ran for lang=${lang}`);
        }
      } catch (err: any) {
        console.warn(`[ERROR] yt-dlp failed on attempt ${attempt} for lang=${lang}: ${err.message}`);
        if (attempt === maxRetries) {
          throw new Error(`Failed to download subtitles after ${maxRetries} attempts: ${err.message}`);
        }
        console.warn(`[Retry ${attempt}] Failed to download ${lang} subtitles for ${videoId}. Retrying...`);
        await new Promise(res => setTimeout(res, 2000));
      }
    }
    return null;
  };

  const enSubtitle = await tryDownload('en');
  if (enSubtitle) {
    return { filePath: path.join(outputDir, enSubtitle), langCode: 'en' };
  }

  console.log(`[INFO] English subtitles not found. Trying fallback language...`);
  const fallbackSubtitle = await tryDownload('best');
  if (fallbackSubtitle) {
    const langMatch = fallbackSubtitle.match(/\.(\w+)\.vtt$/);
    const detectedLang = langMatch?.[1] ?? 'unknown';
    return { filePath: path.join(outputDir, fallbackSubtitle), langCode: detectedLang };
  }

  //throw new Error(`No subtitles found for video: ${videoId}`);
  //console.error(`[FATAL] No subtitles found. Files present: ${finalFiles.join(', ')}`);
  //throw new Error(`No subtitles found for video: ${videoId}. Tried files: ${fs.readdirSync(outputDir).join(', ')}`);
const finalFiles = fs.readdirSync(outputDir);
console.error(`[FATAL] No subtitles found. Files present: ${finalFiles.join(', ')}`);
throw new Error(`No subtitles found for video: ${videoId}. Tried files: ${finalFiles.join(', ')}`);

}
