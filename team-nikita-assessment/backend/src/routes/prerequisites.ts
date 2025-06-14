//Author:Yeddula Pushkala      Date:13-06-25
import express, { Request, Response } from 'express';
import { getPrerequisites } from '../services/prereqService';

const router = express.Router();

router.get<{ topic: string }>('/:topic', async (req, res) => {
    try {
        const { topic } = req.params;
        
        if (!topic.trim()) {
            res.status(400).json({ 
                error: 'Topic parameter required',
                suggestion: 'Provide a valid ML concept'
            });
            return;
        }

        const prereqs = getPrerequisites(topic);
        
        if (prereqs.length > 0) {
            res.json({ topic, prerequisites: prereqs, count: prereqs.length });
        } else {
            res.status(404).json({ 
                error: `"${topic}" not found`,
                suggestion: 'Try: Linear Regression, Neural Networks, or Decision Trees'
            });
        }

    } catch (error) {
        console.error(`[Prerequisites Error] ${new Date().toISOString()}`, error);
        res.status(500).json({ 
            error: 'Internal server error',
            reference: `ERR_${Date.now()}`
        });
    }
});

export default router;
