// Developed by Manjistha Bidkar
import { downloadSubtitles } from '../utils/downloader';
import { parseVtt } from '../utils/parser';

export async function processTranscript(videoId: string) {
  await downloadSubtitles(videoId);
  return await parseVtt(videoId);
}
