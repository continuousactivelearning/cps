// Deveploed by Manjistha Bidkar
import express, { Request } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs-extra';
import { config } from '../config';
import { auth, AuthRequest } from '../middlewares/authMiddleware';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Authenticated upload route for cookies
router.post(
  '/',
  auth,
  upload.single('cookie'),
  async (req: AuthRequest & { file?: Express.Multer.File }, res: express.Response): Promise<void> => {
    try {
      if (!req.file || !req.userId) {
        res.status(400).send('No file or user.');
        return;
      }

      const userCookiesDir = path.join(process.cwd(), 'cookies');
      if (!fs.existsSync(userCookiesDir)) {
        fs.mkdirSync(userCookiesDir);
      }

      const targetPath = path.join(userCookiesDir, `${req.userId}.txt`);
      await fs.move(req.file.path, targetPath, { overwrite: true });

      res.send('Cookies file uploaded for user: ' + req.userId);
    } catch (error) {
      res.status(500).send('Server error during upload.');
    }
  }
);

export default router;
