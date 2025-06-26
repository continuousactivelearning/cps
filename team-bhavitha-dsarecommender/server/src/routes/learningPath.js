"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/learningPath.ts
const express_1 = __importDefault(require("express"));
const shortestPath_1 = require("../utils/shortestPath");
const router = express_1.default.Router();
router.post("/learning-path", (req, res) => {
    const { start, end } = req.body;
    if (!start || !end) {
        res.status(400).json({ error: "Missing start or end concept" });
        return;
    }
    const path = (0, shortestPath_1.findShortestPath)(start, end);
    if (!path) {
        res.status(404).json({ error: "No path found between concepts" });
        return;
    }
    res.json({ path });
    return;
});
exports.default = router;
