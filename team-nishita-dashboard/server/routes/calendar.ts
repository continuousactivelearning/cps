import { Router, Request, Response, NextFunction } from 'express';
import { User } from '../models/user.js';
import { jwtMiddleware } from '../middleware/jwt';
import { requireRole } from '../middleware/roleMiddleware.js'
import { timeStamp } from 'console';

export const calendarRouter = Router();
calendarRouter.use(jwtMiddleware);
calendarRouter.use(requireRole('user'));
calendarRouter.get('/current-month', jwtMiddleware, requireRole('user'), async (req: Request, res: Response, next: NextFunction) => {
  try {
    const username = req.user?.username;
    if (!username) {
      res.status(400).json({
        message: 'Username not found in token'
      })
      return;
    }
    const user = await User.findOne({ username }).select('loginDays loginStreak username');
    if (!user) {
      res.status(404).json({
        message: 'User not found'
      })
      return;
    }
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const currentMonthLoginDays = user.loginDays?.filter(date => {
      const loginDate = new Date(date);
      return loginDate.getMonth() === currentMonth && loginDate.getFullYear() === currentYear;
    }).map(date => ({
      date: new Date(date).toISOString().split('T')[0],
      day: new Date(date).getDate()
    })) || [];

    console.log('kaleshi calenda', JSON.stringify({
      username: user.username,
      loginStreak: user.loginStreak || 0,
      currentMonth: currentMonth,
      currentYear: currentYear,
      loginDays: currentMonthLoginDays,
      totalDaysThisMonth: currentMonthLoginDays.length
    })
    )
    res.status(200).json({
      username: user.username,
      loginStreak: user.loginStreak || 0,
      currentMonth: currentMonth,
      currentYear: currentYear,
      loginDays: currentMonthLoginDays,
      totalDaysThisMonth: currentMonthLoginDays.length
    })
  } catch (err) { next(err) }
})
