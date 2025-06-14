// Developed by Manjistha Bidkar
import * as fs from 'fs-extra';
import * as path from 'path';
import * as readline from 'readline';

// Parses the .vtt file and returns only human-readable lines (ignores timestamps, metadata)
export async function parseVtt(videoId: string): Promise<string> {
  const subtitlePath = path.resolve(`${videoId}.en.vtt`);

  if (!fs.existsSync(subtitlePath)) {
    throw new Error(`Subtitle file not found: ${subtitlePath}`);
  }

  const lines: string[] = [];
  const fileStream = fs.createReadStream(subtitlePath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (
      line.trim() === '' ||
      line.startsWith('WEBVTT') ||
      /^\d{2}:\d{2}/.test(line) ||
      line.includes('align:') ||
      line.includes('<c>')
    ) {
      continue;
    }
    lines.push(line.trim());
  }

  return lines.join(' ');
}
