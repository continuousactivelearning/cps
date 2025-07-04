import { User } from '../models/user';
export async function updateStreak(username: string): Promise<number> {
  const user = await User.findOne({ username });
  if (!user) {
    throw new Error('no such user found');
  }
  const today = new Date();
  const localToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  // today.setHours(0, 0, 0, 0);
  const lastLogin = user.lastLogin ? new Date(user.lastLogin) : null;
  let normLastLogin = null;
  if (lastLogin) {
    normLastLogin = new Date(lastLogin.getFullYear(), lastLogin.getMonth(), lastLogin.getDate());
  }

  if (normLastLogin && normLastLogin.getTime() === localToday.getTime()) {
    return user.loginStreak;
  }

  const yesterday = new Date(localToday);
  yesterday.setDate(today.getDate() - 1);

  if (normLastLogin && normLastLogin.getTime() === yesterday.getTime()) {
    user.loginStreak += 1;
  } else {
    user.loginStreak = 1;
  }
  const todayExists = user.loginDays?.some(date => {
    const existingDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return existingDate.getTime() === localToday.getTime();
  });
  if (!todayExists) {
    if (!user.loginDays) {
      user.loginDays = [];
    }
    user.loginDays.push(localToday);
  }
  user.lastLogin = localToday;
  await user.save();
  return user.loginStreak;
}
