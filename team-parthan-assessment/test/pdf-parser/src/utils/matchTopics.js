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
exports.loadConceptsFromExcel = loadConceptsFromExcel;
exports.identifyConcepts = identifyConcepts;
const XLSX = __importStar(require("xlsx"));
// Load concepts (topics) from the Excel file
function loadConceptsFromExcel(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheet = workbook.Sheets['DSA_Concept_Graph'];
    const data = XLSX.utils.sheet_to_json(sheet);
    return data
        .map(row => { var _a; return (_a = row.Concept) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase(); })
        .filter((v) => !!v);
}
// Identify which concepts are present in the extracted PDF text
function identifyConcepts(text, concepts) {
    const lowerText = text.toLowerCase();
    return concepts.filter(concept => lowerText.includes(concept));
}
//# sourceMappingURL=matchTopics.js.map