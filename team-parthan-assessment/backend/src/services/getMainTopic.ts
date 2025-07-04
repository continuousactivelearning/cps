import { dsaConcepts } from "../concept-graph/conceptList";
import {extractTextFromPDF} from "./pdfExtractor"
import {identifyConcepts} from "./matchTopics"
import {processTranscript} from "./transcriptService"
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import dayjs from 'dayjs';
import { extractTextFromImage } from "./ocr";
import { preprocessImage } from "./preprocess";


function extractVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === 'youtu.be') {
      return parsed.pathname.slice(1);
    } else if (parsed.searchParams.has('v')) {
      return parsed.searchParams.get('v');
    } else {
      return null;
    }
  } catch {
    return null;
  }
}



export default async function getMainTopic(
  inputData: string,typeOfInput: string 
) 

{

  let conceptsList = [];

    for (let concept of dsaConcepts) {
      
      conceptsList.push(concept.toLowerCase());

    }
  if (typeOfInput == 'youtube') {
    // Call transcript + topic extractor logic
    const videoId = extractVideoId(inputData);
    if (!videoId) {
      console.warn(`⚠️ Could not extract video ID from: ${inputData}`);
      
    }

    try {
      console.log(`📡 Processing: ${videoId}`);
      if(videoId)
      {

      const transcript = await processTranscript(videoId);
      //console.log(`\n✅ Transcript :\n${transcript}\n`);
      const matchedConcepts = identifyConcepts(transcript, conceptsList);
      return matchedConcepts;
      }
    } catch (e) {
      console.error(`❌ Error for ${videoId}:`, e);
    }
  }
    
  
  if (typeOfInput === 'pdf' ) {
    //console.log("pdf");
    const text = await extractTextFromPDF(inputData);

    
    

    //console.log(text);
    const matchedConcepts = identifyConcepts(text, conceptsList);
    //console.log(dsaConcepts)
    //console.log(matchedConcepts);
    // Extract text then topic from file
    return matchedConcepts; // placeholder
  }

  if (typeOfInput === 'image') {
    // Directory to store uploaded and processed images
const IMAGE_DIR = path.join('/tmp', 'images');
if (!fs.existsSync(IMAGE_DIR)) fs.mkdirSync(IMAGE_DIR);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, IMAGE_DIR),
  filename: (req, file, cb) => {
    const timestamp = dayjs().format('YYYYMMDD-HHmmss-SSS');
    const ext = path.extname(file.originalname);
    cb(null, `upload-${timestamp}${ext}`);
  }
});

// Multer setup for file upload
const upload = multer({ dest: IMAGE_DIR });

// Text cleanup function
function cleanText(text: string): string {
  return text
    .replace(/[^\x20-\x7E\n]/g, '')     // Remove non-ASCII
    .replace(/[^\w\s\n]/g, '')          // Remove punctuation
    .replace(/\b\w{1,2}\b/g, '')        // Remove very short words like "j", "oo" if needed
    .replace(/\s{2,}/g, ' ')            // Collapse extra spaces
    .replace(/\n+/g, ' ')               // Remove all newlines
    .toLowerCase()
    .trim();
  }

  try {
    

    const originalPath = inputData;
    const timestamp = dayjs().format('YYYYMMDD-HHmmss-SSS');
    const processedPath = path.join(IMAGE_DIR, `processed-${timestamp}.jpg`);


    // Initial scan to detect mode
    const { text: initialText, mode } = await extractTextFromImage(originalPath);

    // Preprocess based on mode
    await preprocessImage(originalPath, processedPath, mode);

    // Final OCR
    const { text: finalText } = await extractTextFromImage(processedPath);

    // Clean text
    const cleanedText = cleanText(finalText);

    // Cleanup
    fs.unlink(originalPath, (err) => {
      if (err) console.error(`Error deleting original file: ${originalPath}`, err);
    });
    fs.unlink(processedPath, (err) => {
      if (err) console.error(`Error deleting processed file: ${processedPath}`, err);
    });

    const matchedConcepts = identifyConcepts(cleanedText, conceptsList);
    return matchedConcepts; 
  } catch (err) {
    console.error('OCR error:', err);
    
  }

  }

}
