// backend/controllers/userController.ts
import { Request, Response } from 'express';
import User from '../models/User';

export const updateUserOnboarding = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, userInfo, knownConcepts } = req.body;

    if (!email || !userInfo || !knownConcepts) {
      console.warn('❗ Missing required fields in onboarding submission');
      res.status(400).json({ message: 'Missing required fields: email, userInfo, or knownConcepts' });
      return;
    }

    const updatedUser = await User.findOneAndUpdate(
      { email },
      {
        $set: {
          userInfo,
          knownConcepts,
          updatedAt: new Date(),
        },
      },
      { new: true }
    );

    if (!updatedUser) {
      console.warn(`❗ User not found with email: ${email}`);
      res.status(404).json({ message: 'User not found' });
      return;
    }

    console.log(`✅ Onboarding data updated for user: ${email}`);
    res.status(200).json({ message: 'Onboarding data saved successfully', user: updatedUser });
  } catch (error) {
    console.error('❌ Error saving onboarding data:', error);
    res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : 'Unknown error' });
  }
};
