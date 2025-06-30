"use strict";
// Developed by Manjistha Bidkar
// This module parses a .vtt subtitle file and returns cleaned text for processing
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
exports.parseVttFile = parseVttFile;
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
const readline = __importStar(require("readline"));
/**
 * Parses a VTT subtitle file and returns a cleaned string of transcript
 * @param subtitleFile Full path to .vtt file
 * @returns Combined cleaned transcript text
 */
async function parseVttFile(subtitleFile) {
    const filePath = path.resolve(subtitleFile);
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });
    const content = [];
    let lastLine = '';
    for await (const line of rl) {
        const cleanLine = line
            .trim()
            .replace(/<[^>]*>/g, '') // Remove tags like <c>
            .replace(/&nbsp;/g, ' ') // Replace HTML space
            .replace(/\s+/g, ' '); // Normalize spacing
        // Skip metadata and duplicate lines
        if (cleanLine === '' ||
            cleanLine.startsWith('WEBVTT') ||
            /^\d{2}:\d{2}/.test(cleanLine) ||
            cleanLine === lastLine)
            continue;
        content.push(cleanLine);
        lastLine = cleanLine;
    }
    return content.join(' ').replace(/\s+/g, ' ').trim();
}
