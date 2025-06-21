import express from 'express';
import { details, uploadPhoto,updateDetails, updateStreak } from '../controllers/userDetailsController';
import { auth } from '../middlewares/authMiddleware';
const router= express.Router();

// router.get("/", auth, (req, res) => {
//       res.json((req as any).user); // or cast to AuthRequest if needed
// });

router.get("/", auth, details);
router.post('/upload-photo',auth,uploadPhoto);
router.post('/update',auth,updateDetails);
router.get('/streak',auth,updateStreak)

export default router;