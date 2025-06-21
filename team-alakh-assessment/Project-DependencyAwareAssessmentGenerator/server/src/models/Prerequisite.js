"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var prereqSchema = new mongoose_1.default.Schema({
    topic: { type: String, required: true, unique: true },
    prerequisites: { type: [String], required: true },
});
exports.default = mongoose_1.default.model('Prerequisite', prereqSchema);
