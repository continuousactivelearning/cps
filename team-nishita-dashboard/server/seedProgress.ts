import mongoose from 'mongoose';
import { User } from './models/user';
import { UserProgress } from './models/UserProgress';

const MONGO_URI = 'mongodb://127.0.0.1:27017/test';

async function seed() {
  await mongoose.connect(MONGO_URI);

  // Find the user with username 'e'
  const user = await User.findOne({ username: 'e' });
  console.log('Seeding for user:', user);
  if (!user) {
    console.log('No user found with username "e". Please register this user first.');
    process.exit(1);
  }

  // Insert dummy progress for the last 7 days
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    await UserProgress.create({
      userId: user._id,
      lessonsCompleted: Math.floor(Math.random() * 3) + 1,
      quizzesTaken: Math.floor(Math.random() * 2),
      studyTime: Math.floor(Math.random() * 60) + 20,
      pointsEarned: Math.floor(Math.random() * 50) + 10,
      isCheckedIn: true,
      date,
    });
  }

  // Optionally update user streak and points
  user.currentStreak = 5;
  user.loginStreak = 7;
  user.totalPoints = 300;
  await user.save();

  console.log('Dummy progress data seeded!');
  process.exit(0);
}

seed(); 