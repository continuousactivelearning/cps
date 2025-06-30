"use strict";
// Developed by Manjistha Bidkar
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const downloader_1 = require("./utils/downloader");
const parser_1 = require("./utils/parser");
const translate_1 = require("./utils/translate");
// Topic extraction from Excel
const matchTopics_1 = require("./utils/matchTopics");
const path = __importStar(require("path"));
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
        if (!videoId)
            throw new Error('Invalid YouTube URL');
        // Step 1: Download subtitles (.vtt) and detect language
        const { filePath, langCode } = await (0, downloader_1.downloadSubtitles)(videoId, 'downloads');
        // Step 2: Parse and clean subtitle file into raw transcript text
        const transcriptText = await (0, parser_1.parseVttFile)(filePath);
        // Step 3: Translate transcript if it's not in English
        const translatedText = await (0, translate_1.translateToEnglish)(transcriptText);
        // Step 4: Load list of concepts from DSA_Concept_Graph.xlsx
        const excelPath = path.resolve('DSA_Concept_Graph.xlsx');
        const concepts = (0, matchTopics_1.loadConceptsFromExcel)(excelPath);
        // Step 5: Identify matched concepts in the transcript
        const matchedConcepts = (0, matchTopics_1.identifyConcepts)(translatedText, concepts);
        // Step 6: Output results
        console.log('\n===== Matched Topics =====');
        if (matchedConcepts.length > 0) {
            matchedConcepts.forEach(topic => console.log('🔹', topic));
        }
        else {
            console.log(' No concepts matched.');
        }
    }
    catch (err) {
        console.error(' Error during processing:', err);
    }
}
main();
