// Developed by Manjistha Bidkar
// Developer-only script: Extracts and prints raw transcript from a YouTube video for manual verification

import { processTranscript } from '../services/transcriptService';

/**
 * Developer utility: View the transcript text extracted from a YouTube video
 */
async function main() {
  const urls = process.argv.slice(2);
  if (!urls.length) {
    console.error('Provide at least one YouTube video URL.');
    return;
  }

  for (const url of urls) {
    const videoId = url.match(/[?&]v=([^&#]+)/)?.[1];
    if (!videoId) {
      console.warn('Could not extract video ID from: ${url}');
      continue;
    }

    try {
      console.log('Fetching transcript for: ${videoId}');
      const transcript = await processTranscript(videoId);
      if (!transcript.trim()) {
        console.warn('Transcript for ${videoId} is empty or unavailable.');
      } else {
        console.log('\n Transcript for ${videoId}:\n');
        console.log(transcript);
      }
    } catch (e) {
      console.error('Error while extracting transcript for ${videoId}:', e);
    }
  }
}

main();
