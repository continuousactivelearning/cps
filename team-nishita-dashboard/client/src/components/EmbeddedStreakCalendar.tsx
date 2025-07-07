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

  const isLoginDay = (day: number) => {
    return calendarData?.loginDays.some(loginDay => loginDay.day === day) || false;
  };

  const renderCalendarDays = () => {
    if (!calendarData) return [];

    const daysInMonth = getDaysInMonth(calendarData.currentMonth, calendarData.currentYear);
    const firstDay = getFirstDayOfMonth(calendarData.currentMonth, calendarData.currentYear);
    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isActive = isLoginDay(day);
      const isToday = new Date().getDate() === day &&
        new Date().getMonth() === calendarData.currentMonth &&
        new Date().getFullYear() === calendarData.currentYear;

      days.push(
        <div
          key={day}
          className={`calendar-day ${isActive ? 'active' : ''} ${isToday ? 'today' : ''}`}
        >
          {day}
          {isActive && <div className="login-indicator"></div>}
        </div>
      );
    }

    return days;
  };

  if (loading) return <div>Loading calendar...</div>;
  if (!calendarData) return <div>Calendar unavailable.</div>;

  return (
    <div className="calendar-wrapper">
      <div className="calendar-grid">
        <div className="calendar-weekdays">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="weekday">{day}</div>
          ))}
        </div>
        <div className="calendar-days">
          {renderCalendarDays()}
        </div>
      </div>
    </div>
  );
};

export default EmbeddedStreakCalendar;
