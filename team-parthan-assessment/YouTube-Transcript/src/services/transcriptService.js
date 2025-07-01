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
exports.processTranscript = processTranscript;
// Main service to process a YouTube video's transcript
// 1. Downloads subtitles (tries English first, then best available language)
// 2. Parses and cleans the .vtt subtitle file
// 3. Translates to English if necessary
// 4. Deletes temporary files before returning cleaned transcript
const downloader_1 = require("../utils/downloader");
const parser_1 = require("../utils/parser");
const translate_1 = require("../utils/translate");
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
async function processTranscript(videoId) {
    const tempDir = path.resolve('./temp_subtitles');
    await fs.ensureDir(tempDir);
    try {
        // Step 1: Download subtitles (.vtt file) to tempDir
        const { filePath, langCode } = await (0, downloader_1.downloadSubtitles)(videoId, tempDir); // ✅ destructure object
        // Step 2: Parse and clean transcript text from .vtt file
        const rawTranscript = await (0, parser_1.parseVttFile)(filePath);
        // Step 3: If not in English, translate to English
        // Detect language based on langCode 
        const isEnglish = langCode === 'en';
        let finalTranscript = rawTranscript;
        if (!isEnglish) {
            console.log('Translating non-English subtitles to English...');
            finalTranscript = await (0, translate_1.translateToEnglish)(rawTranscript);
        }
        return finalTranscript;
    }
    catch (err) {
        console.error(`Error processing transcript for ${videoId}:`, err);
        return '';
    }
    finally {
        // Step 4: Clean up temporary subtitle files
        await fs.remove(tempDir);
    }
}
