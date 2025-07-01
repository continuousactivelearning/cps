// Developed by Manjistha Bidkar

import { downloadSubtitles } from './utils/downloader';
import { parseVttFile } from './utils/parser';
import { translateToEnglish } from './utils/translate';

// Topic extraction from Excel
//import { loadConceptsFromExcel, identifyConcepts } from './utils/matchTopics';

import * as path from 'path';

async function main() {
  const videoUrl = process.argv[2];

  if (!videoUrl) {
    console.error(' Please provide a YouTube video URL as an argument.');
    process.exit(1);
  }

  try {
    console.log(` Extracting transcript from: ${videoUrl}`);
    
    // Extract video ID from YouTube URL
    const videoId = new URL(videoUrl).searchParams.get("v");
    if (!videoId) throw new Error('Invalid YouTube URL');

    // Step 1: Download subtitles (.vtt) and detect language
    const { filePath, langCode } = await downloadSubtitles(videoId, 'downloads');

    // Step 2: Parse and clean subtitle file into raw transcript text
    const transcriptText = await parseVttFile(filePath);

    // Step 3: Translate transcript if it's not in English
    const translatedText = await translateToEnglish(transcriptText);
    console.log(`\n✅ Transcript (Language: ${langCode}):\n${translatedText}\n`);

    // Step 4: Load list of concepts from DSA_Concept_Graph.xlsx
    // const excelPath = path.resolve('DSA_Concept_Graph.xlsx');
    // const concepts = loadConceptsFromExcel(excelPath);

    // // Step 5: Identify matched concepts in the transcript
    // const matchedConcepts = identifyConcepts(translatedText, concepts);

    // // Step 6: Output results
    // console.log('\n===== Matched Topics =====');
    // if (matchedConcepts.length > 0) {
    //   matchedConcepts.forEach(topic => console.log('🔹', topic));
    // } else {
    //   console.log(' No concepts matched.');
    // }

  } catch (err) {
    console.error(' Error during processing:', err);
  }
}

main();
