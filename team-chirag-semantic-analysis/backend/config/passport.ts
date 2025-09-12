import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User';

dotenv.config();

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;

if (!googleClientId || !googleClientSecret) {
  throw new Error('Missing Google OAuth environment variables');
}

passport.use(new GoogleStrategy(
  {
    clientID: googleClientId,
    clientSecret: googleClientSecret,
    callbackURL: "http://localhost:5000/auth/google/callback",
    passReqToCallback: true
  },
  async (
    req: Express.Request,
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: (error: any, user?: any) => void
  ) => {
    try {
      const { id, displayName, emails, photos } = profile;
      const email = emails?.[0].value;

      let user = await User.findOne({ email });
      let isFirstTime = false;

      if (!user) {
        user = await User.create({
          googleId: id,
          name: displayName,
          email,
          avatar: photos?.[0].value,
        });
        isFirstTime = true;
      } else {
        // Check if user has completed onboarding (has userInfo and knownConcepts)
        isFirstTime = !user.userInfo || !user.knownConcepts || !user.knownConcepts.topics || user.knownConcepts.topics.length === 0;
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
        expiresIn: '7d',
      });

      return done(null, { ...user.toObject(), token, isFirstTime });
    } catch (error) {
      console.error("Google OAuth error:", error);
      return done(error, undefined);
    }
  }
));

export default passport;
