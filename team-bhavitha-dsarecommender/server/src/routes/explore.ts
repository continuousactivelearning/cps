// routes/explore.ts
import express from "express";
import Concept from "../models/concepts"; // Your Mongoose model

const router = express.Router();

// GET /api/explore/:topic
router.get("/:topic", async (req, res) => {
  const { topic } = req.params;

  try {
    const concept = await Concept.findOne({ name: new RegExp(`^${topic}$`, "i") });

    if (!concept) {
      res.status(404).json({ error: "Concept not found" });
      return;
    }

    res.json(concept);
  } catch (err) {
    console.error("Explore route error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
