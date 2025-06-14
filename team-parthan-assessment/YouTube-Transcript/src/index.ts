// Developed by Manjistha Bidkar
// This script automatically fetches English auto-generated subtitles (if available)
// from a YouTube video using `yt-dlp`, and parses the `.vtt` file to extract readable transcript text.

import { processTranscript } from './services/transcriptService';

async function main() {
  const urls = process.argv.slice(2); // Accept multiple YouTube URLs as CLI arguments
  if (!urls.length) {
    console.error('❌ Provide at least one YouTube video URL.');
    return;
  }

  for (const url of urls) {
    const videoId = url.match(/[?&]v=([^&#]+)/)?.[1];
    if (!videoId) {
      console.warn(`⚠️ Could not extract video ID from: ${url}`);
      continue;
    }

    try {
      console.log(`📡 Processing: ${videoId}`);
      const transcript = await processTranscript(videoId);
      console.log(`\n✅ Transcript for ${videoId}:\n${transcript}\n`);
    } catch (e) {
      console.error(`❌ Error for ${videoId}:`, e);
    }
  }
}

main();
