// Developed by Manjistha Bidkar
// Utility function to clean OCR-extracted text for accurate topic matching

/**
 * Cleans the input OCR text by:
 * - Removing non-ASCII characters
 * - Removing punctuation
 * - Removing very short words (1–2 letters)
 * - Collapsing extra whitespace and newlines
 * - Converting to lowercase
 */
export function cleanText(text: string): string {
  return text
    .replace(/[^\x20-\x7E\n]/g, '')     // Remove non-ASCII
    .replace(/[^\w\s\n]/g, '')          // Remove punctuation
    .replace(/\b\w{1,2}\b/g, '')        // Remove very short words
    .replace(/\s{2,}/g, ' ')            // Collapse extra spaces
    .replace(/\n+/g, ' ')               // Remove newlines
    .toLowerCase()
    .trim();
}
