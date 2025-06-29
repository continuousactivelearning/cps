import express from 'express';

const router = express.Router();

// GET /api/home - Frontend rendering
router.get('/home', (req, res) => {
    res.json({
        message: 'Home page data',
        features: [
            'Interactive quizzes',
            'Progress tracking',
            'Personalized recommendations',
            'Multiple difficulty levels'
        ]
    });
});

export default router; 