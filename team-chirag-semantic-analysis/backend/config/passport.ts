import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import User from '../models/User';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID!,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  callbackURL: process.env.GOOGLE_REDIRECT_URI!,
},
  async (accessToken, refreshToken, profile, done) => {
    try {
      const { id, displayName, emails, photos } = profile;
      const email = emails?.[0].value;

      let user = await User.findOne({ email });

      if (!user) {
        user = await User.create({
          name: displayName,
          email,
          avatar: photos?.[0].value,
        });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
        expiresIn: '7d',
      });

      return done(null, { ...user.toObject(), token });
    } catch (error) {
      return done(error);
    }
  }
));

export default passport;
