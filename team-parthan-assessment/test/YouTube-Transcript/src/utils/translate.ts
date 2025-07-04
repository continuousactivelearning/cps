// Developed by Manjistha Bidkar
// Translation utility using `google-translate-api-x`
// 1. Splits long transcript into ~2000 character chunks
// 2. Detects language from the first chunk
// 3. Skips translation if already English
// 4. Otherwise, translates each chunk and returns combined result

import translate from 'google-translate-api-x';

/**
 * Breaks a long transcript into smaller chunks (default ~2000 chars),
 * ensuring not to split mid-sentence if possible.
 */
export function splitIntoChunks(text: string, maxLength = 2000): string[] {
  const chunks: string[] = [];
  let start = 0;

  while (start < text.length) {
    let end = start + maxLength;

    // Avoid cutting mid-sentence
    if (end < text.length) {
      const lastPunctuation = text.lastIndexOf('.', end);
      if (lastPunctuation > start) {
        end = lastPunctuation + 1;
      }
    }

    chunks.push(text.slice(start, end).trim());
    start = end;
  }

  return chunks;
}

/**
 * Translates the transcript to English, unless it's already in English.
 * Uses Google Translate API (free community wrapper).
 * @param text Raw or parsed transcript
 * @returns English-translated text
 */
export async function translateToEnglish(text: string): Promise<string> {
  const chunks = splitIntoChunks(text);

  if (chunks.length === 0) return '';

  try {
    // Detect language from first chunk
    const detection = await translate(chunks[0], { to: 'en' });
    const detectedLang = detection.from.language.iso;

    if (detectedLang === 'en') {
      console.log('Text is already in English. Skipping translation.');
      return text;
    }

    console.log(`Detected language: ${detectedLang}. Translating to English...`);
  } catch (err) {
    console.warn('Language detection failed. Proceeding with translation.');
  }

  const translatedChunks: string[] = [];
  for (const chunk of chunks) {
    try {
      const res = await translate(chunk, { to: 'en' });
      translatedChunks.push(res.text);
    } catch (error) {
      console.error('Error translating chunk:', error);
      translatedChunks.push('[Translation failed for this chunk]');
    }
  }

  return translatedChunks.join(' ');
}
