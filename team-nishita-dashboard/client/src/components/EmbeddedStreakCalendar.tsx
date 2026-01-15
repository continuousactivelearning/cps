import React, { useState, useEffect } from 'react';
import { getCurrentMonthCalendar } from '../api/api';
import './AchievementPage.css';

interface CalendarData {
  username: string;
  loginStreak: number;
  currentMonth: number;
  currentYear: number;
  loginDays: Array<{
    date: string;
    day: number;
    hoursSpent: number;
  }>;
  totalDaysThisMonth: number;
}

const EmbeddedStreakCalendar: React.FC = () => {
  const [calendarData, setCalendarData] = useState<CalendarData | null>(null);
  const [loading, setLoading] = useState(true);

  // const monthNames = [
  //   'January', 'February', 'March', 'April', 'May', 'June',
  //   'July', 'August', 'September', 'October', 'November', 'December'
  // ];

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        setLoading(true);
        const response = await getCurrentMonthCalendar();
        setCalendarData(response.data);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCalendarData();
  }, []);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  // const isLoginDay = (day: number) => {
  //   return calendarData?.loginDays.some(loginDay => loginDay.day === day) || false;
  // };

  const dummyCalendarData: CalendarData = {
    username: 'Demo User',
    loginStreak: 3,
    currentMonth: new Date().getMonth(),
    currentYear: new Date().getFullYear(),
    loginDays: [
      { date: '', day: 4, hoursSpent: 0 },
      { date: '', day: 5, hoursSpent: 0 },
      { date: '', day: 6, hoursSpent: 0 },
    ],
    totalDaysThisMonth: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate(),
  };

  if (loading) return <div>Loading calendar...</div>;

  // Use dummy data if real data is missing
  const dataToShow = calendarData || dummyCalendarData;

  // Helper to get streak days (consecutive up to today)
  const getStreakDays = (loginDaysArr: { day: number }[], month: number, year: number) => {
    if (!loginDaysArr || loginDaysArr.length === 0) return [];
    // Sort days ascending
    const days = loginDaysArr.map(d => d.day).sort((a, b) => a - b);
    const today = new Date();
    const streak = [];
    for (let i = days.length - 1; i >= 0; i--) {
      if (
        days[i] === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        streak.push(days[i]);
        // Go backwards for consecutive days
        let prev = days[i] - 1;
        for (let j = i - 1; j >= 0; j--) {
          if (days[j] === prev) {
            streak.push(days[j]);
            prev--;
          } else {
            break;
          }
        }
        break;
      }
    }
    return streak;
  };

  const streakDays = getStreakDays(dataToShow.loginDays, dataToShow.currentMonth, dataToShow.currentYear);

  // Helper to get color based on hours spent
  const getStreakColor = (hours: number) => {
    if (hours >= 4) return '#f59e42'; // deep gold/orange
    if (hours >= 2) return '#fbbf24'; // gold
    if (hours >= 1) return '#fde68a'; // light gold
    return '#fef9c3'; // very light yellow
  };

  return (
    <div className="calendar-wrapper">
      <div className="calendar-grid">
        <div className="calendar-weekdays">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>
        <div className="calendar-days">
          {/* Use dataToShow for rendering days */}
          {(() => {
            const daysInMonth = getDaysInMonth(dataToShow.currentMonth, dataToShow.currentYear);
            const firstDay = getFirstDayOfMonth(dataToShow.currentMonth, dataToShow.currentYear);
            const days = [];
            for (let i = 0; i < firstDay; i++) {
              days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
            }
            for (let day = 1; day <= daysInMonth; day++) {
              const loginDay = dataToShow.loginDays.find(loginDay => loginDay.day === day);
              const isActive = !!loginDay;
              const isStreak = streakDays.includes(day);
              const isToday = new Date().getDate() === day &&
                new Date().getMonth() === dataToShow.currentMonth &&
                new Date().getFullYear() === dataToShow.currentYear;
              let streakStyle = {};
              if (isStreak && loginDay && typeof loginDay.hoursSpent === 'number') {
                streakStyle = { background: getStreakColor(loginDay.hoursSpent) };
              }
              days.push(
                <div
                  key={day}
                  className={`calendar-day${isActive ? ' active' : ''}${isStreak ? ' streak-day' : ''}${isToday ? ' today' : ''}`}
                  style={streakStyle}
                >
                  {day}
                  {isActive && <div className="login-indicator"></div>}
                </div>
              );
            }
            return days;
          })()}
        </div>
      </div>
    </div>
  );
};

export default EmbeddedStreakCalendar;
