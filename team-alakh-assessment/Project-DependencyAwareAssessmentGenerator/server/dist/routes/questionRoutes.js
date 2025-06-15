"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// done by pavithra
const express_1 = __importDefault(require("express"));
const questionGencontroller_1 = require("../controllers/questionGencontroller");
const router = express_1.default.Router();
router.post("/generate-questions", questionGencontroller_1.generateQuestionBank);
exports.default = router;
