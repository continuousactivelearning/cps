import { dsaConcepts } from "../concept-graph/conceptList";
import {extractTextFromPDF} from "./pdfExtractor"
import {identifyConcepts} from "./matchTopics"
import {processTranscript} from "./transcriptService"
import multer from 'multer';
import path from 'path';
import fs from 'fs-extra';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

import { extractTextFromImage } from "./ocr";
import { preprocessImage } from "./preprocess";
import { cleanText } from "./textCleaner";
import { config } from "../config";


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
  inputData: string, typeOfInput: string, userId?: string
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

      const transcript = await processTranscript(videoId, userId!);
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
//     // Directory to store uploaded and processed images
// const IMAGE_DIR = path.join('/tmp', 'images');
// if (!fs.existsSync(IMAGE_DIR)) fs.mkdirSync(IMAGE_DIR);

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, IMAGE_DIR),
//   filename: (req, file, cb) => {
//     const timestamp = dayjs().format('YYYYMMDD-HHmmss-SSS');
//     const ext = path.extname(file.originalname);
//     cb(null, `upload-${timestamp}${ext}`);
//   }
// });

// // Multer setup for file upload
// const upload = multer({ dest: IMAGE_DIR });

// // Text cleanup function
// function cleanText(text: string): string {
//   return text
//     .replace(/[^\x20-\x7E\n]/g, '')     // Remove non-ASCII
//     .replace(/[^\w\s\n]/g, '')          // Remove punctuation
//     .replace(/\b\w{1,2}\b/g, '')        // Remove very short words like "j", "oo" if needed
//     .replace(/\s{2,}/g, ' ')            // Collapse extra spaces
//     .replace(/\n+/g, ' ')               // Remove all newlines
//     .toLowerCase()
//     .trim();
//   }

//   try {
    

//     const originalPath = inputData;
//     const timestamp = dayjs().format('YYYYMMDD-HHmmss-SSS');
//     const processedPath = path.join(IMAGE_DIR, `processed-${timestamp}.jpg`);


//     // Initial scan to detect mode
//     const { text: initialText, mode } = await extractTextFromImage(originalPath);

//     // Preprocess based on mode
//     await preprocessImage(originalPath, processedPath, mode);

//     // Final OCR
//     const { text: finalText } = await extractTextFromImage(processedPath);

//     // Clean text
//     const cleanedText = cleanText(finalText);

//     // Cleanup
//     fs.unlink(originalPath, (err) => {
//       if (err) console.error(`Error deleting original file: ${originalPath}`, err);
//     });
//     fs.unlink(processedPath, (err) => {
//       if (err) console.error(`Error deleting processed file: ${processedPath}`, err);
//     });

//     const matchedConcepts = identifyConcepts(cleanedText, conceptsList);
//     return matchedConcepts; 
//   } catch (err) {
//     console.error('OCR error:', err);
    
//   }

const IMAGE_DIR = config.IMAGE_DIR;


// Ensure directories exist
fs.ensureDirSync(IMAGE_DIR);


// Multer config with timestamp + UUID for safe multi-user upload
const storage = multer.diskStorage({
  destination: (_, __, cb) => cb(null, IMAGE_DIR),
  filename: (_, file, cb) => {
    const timestamp = dayjs().format('YYYYMMDD-HHmmss-SSS');
    const uniqueId = uuidv4();
    const ext = path.extname(file.originalname);
    cb(null, `upload-${timestamp}-${uniqueId}${ext}`);
  }
});

const upload = multer({ storage });


 try {
    if (inputData) {
      
      return '';
    }

    const originalPath = inputData;
    const processedPath = path.join(IMAGE_DIR, `processed-${Date.now()}.jpg`);

    console.log(`[UPLOAD] Processing ${originalPath}`);

    const { text: initialText, mode } = await extractTextFromImage(originalPath);
    await preprocessImage(originalPath, processedPath, mode);

    const { text: finalText } = await extractTextFromImage(processedPath);
    const cleaned = cleanText(finalText);
    const topics = identifyConcepts(cleaned, conceptsList);

    await fs.remove(originalPath);
    await fs.remove(processedPath);

    return topics;
  } catch (err) {
    console.error('OCR error:', err);
    
  }



   }

}
