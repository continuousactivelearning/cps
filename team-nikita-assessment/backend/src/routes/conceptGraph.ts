//Author:Yeddula Pushkala       Date:13-06-25
import express from 'express';
import { getPrerequisites } from '../services/prereqService'; // Your existing service

const router = express.Router();
router.get('/prerequisites/:topic', async (req, res) => {
  try {
    const { topic } = req.params;
    const prereqs = getPrerequisites(topic);
    res.json({ prerequisites: prereqs });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch prerequisites' });
  }
});

router.get('/explain/:prerequisite/:target', (req, res) => {
  // Add your explanation logic here
});

export default router;
