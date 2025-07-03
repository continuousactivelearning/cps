import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
  session: false
}));

router.get('/google/callback', passport.authenticate('google', {
  session: false,
  failureRedirect: 'http://localhost:5173/login',
}), (req, res) => {
  const user = req.user as any;
  const token = user.token;

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
});

export default router;
