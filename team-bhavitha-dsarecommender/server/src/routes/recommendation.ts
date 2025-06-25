import express from "express";
import { findShortestPath } from "../utils/shortestPath";

const router = express.Router();

router.post("/", (req, res) => {
  const { start, end } = req.body;

  if (!start || !end) {
    res.status(400).json({ error: "Start and end topics are required" });
    return;
  }

  const path = findShortestPath(start, end);

  if (!path) {
    res.status(404).json({ error: "No path found" });
    return;
  }

  res.json({ path });
});

export default router;
