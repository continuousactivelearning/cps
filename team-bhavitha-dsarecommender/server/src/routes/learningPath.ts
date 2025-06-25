// src/routes/learningPath.ts
import express,{Request, Response} from "express";
import { findShortestPath } from "../utils/shortestPath";

const router = express.Router();

router.post("/learning-path", (req: Request, res: Response): void => {
  const { start, end } = req.body;

  if (!start || !end) {
    res.status(400).json({ error: "Missing start or end concept" });
    return;
  }

  const path = findShortestPath(start, end);

  if (!path) {
    res.status(404).json({ error: "No path found between concepts" });
    return;
  }

  res.json({ path });
  return;
});

export default router;
