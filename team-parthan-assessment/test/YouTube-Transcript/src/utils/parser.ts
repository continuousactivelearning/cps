// Developed by Manjistha Bidkar
// This module parses a .vtt subtitle file and returns cleaned text for processing

import * as fs from 'fs-extra';
import * as path from 'path';
import * as readline from 'readline';

/**
 * Parses a VTT subtitle file and returns a cleaned string of transcript
 * @param subtitleFile Full path to .vtt file
 * @returns Combined cleaned transcript text
 */
export async function parseVttFile(subtitleFile: string): Promise<string> {
  const filePath = path.resolve(subtitleFile);
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  const content: string[] = [];
  let lastLine = '';

  for await (const line of rl) {
    const cleanLine = line
      .trim()
      .replace(/<[^>]*>/g, '')      // Remove tags like <c>
      .replace(/&nbsp;/g, ' ')      // Replace HTML space
      .replace(/\s+/g, ' ');        // Normalize spacing

    // Skip metadata and duplicate lines
    if (
      cleanLine === '' ||
      cleanLine.startsWith('WEBVTT') ||
      /^\d{2}:\d{2}/.test(cleanLine) ||
      cleanLine === lastLine
    ) continue;

    content.push(cleanLine);
    lastLine = cleanLine;
  }

  return content.join(' ').replace(/\s+/g, ' ').trim();
}
