"use strict";
// Developed by Manjistha Bidkar
// Utility to download YouTube subtitles using yt-dlp
// 1. Attempts to download English subtitles (auto-generated or manual)
// 2. If not available, downloads subtitles in the best available language
// 3. Returns the path to the saved .vtt file and detected language code
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
exports.downloadSubtitles = downloadSubtitles;
const execa_1 = require("execa");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
async function downloadSubtitles(videoId, outputDir) {
    const baseUrl = `https://www.youtube.com/watch?v=${videoId}`;
    const output = path.join(outputDir, `${videoId}.%(ext)s`);
    // Try English first
    try {
        await (0, execa_1.execa)('yt-dlp', [
            '--write-auto-sub',
            '--write-sub',
            '--sub-lang', 'en',
            '--skip-download',
            '-o', output,
            baseUrl,
        ]);
        const enVtt = fs.readdirSync(outputDir).find(f => f.startsWith(videoId) && f.endsWith('.en.vtt'));
        if (enVtt) {
            return { filePath: path.join(outputDir, enVtt), langCode: 'en' };
        }
    }
    catch {
        // Fail silently and fallback below
    }
    // If English not found, fallback to any available language
    try {
        await (0, execa_1.execa)('yt-dlp', [
            '--write-auto-sub',
            '--write-sub',
            '--sub-lang', 'best',
            '--skip-download',
            '-o', output,
            baseUrl,
        ]);
        const fallback = fs.readdirSync(outputDir).find(f => f.startsWith(videoId) && f.endsWith('.vtt'));
        if (fallback) {
            const langMatch = fallback.match(/\.(\w+)\.vtt$/);
            const detectedLang = langMatch?.[1] ?? 'unknown';
            return { filePath: path.join(outputDir, fallback), langCode: detectedLang };
        }
    }
    catch (error) {
        console.error(`Failed to download subtitles for ${videoId}:`, error);
    }
    throw new Error(`No subtitles found for video: ${videoId}`);
}
