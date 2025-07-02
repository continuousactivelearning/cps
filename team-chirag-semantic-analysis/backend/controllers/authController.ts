// backend/controllers/authController.ts
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import { getGoogleUser } from '../services/googleAuthService';

export const googleAuthHandler = async (req: Request, res: Response): Promise<void> => {
  const { idToken, accessToken } = req.query;

  if (!idToken || !accessToken) {
    res.status(400).send('Missing idToken or accessToken');
    return;
  }

  try {
    const googleUser = await getGoogleUser(idToken as string, accessToken as string);

    if (!googleUser.verified_email) {
      res.status(403).send('Google account not verified');
      return;
    }

    let user = await User.findOne({ email: googleUser.email });
    if (!user) {
      user = await User.create({
        name: googleUser.name,
        email: googleUser.email,
        avatar: googleUser.picture,
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: '7d',
    });

    const html = `
      <html>
        <body>
          <script>
            window.opener.postMessage(${JSON.stringify({ token, user })}, "http://localhost:5173");
            window.close();
          </script>
        </body>
      </html>
    `;

    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Authentication failed');
  }
};
