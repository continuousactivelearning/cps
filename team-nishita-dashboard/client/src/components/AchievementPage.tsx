import React, { useEffect, useState } from 'react';
import { getAchievements } from '../api/api';
import EmbeddedStreakCalendar from '../components/EmbeddedStreakCalendar';
import BadgesGrid from '../components/BadgesGrid';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import Confetti from 'react-confetti'; // Import Confetti here
import './AchievementPage.css';

const AchievementPage: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [newBadge, setNewBadge] = useState<any>(null);
  const [showPoints, setShowPoints] = useState(false);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await getAchievements();
        console.log('✅ Received achievement data:', response.data);
        setData(response.data);

        const newUnlocked = response.data.unlockedBadges?.find((badge: any) => badge.justUnlocked);
        if (newUnlocked) {
          setNewBadge(newUnlocked);
          setShowPoints(true);
          // Hide points after animation (4s)
          setTimeout(() => setShowPoints(false), 4000);
        }
      } catch (error) {
        console.error('Error fetching achievement data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) return <div className="text-center">Loading...</div>;
  if (!data) return <div className="text-center">No data available</div>;

  return (
    <Layout>
      <div className="achievement-page">
        {/* Top Stats */}
        <div className="top-section">
          <div className="stat-card streak">
            <h3>🔥 Current Streak</h3>
            <p>{data.currentStreak} Days</p>
          </div>
          <div className="stat-card higheststreak">
            <h3>🏁 Highest Streak</h3>
            <p>{data.highestStreak} Days</p>
          </div>
          <div className="stat-card active-days">
            <h3>📅 Days Active</h3>
            <p>{data.totalActiveDays}</p>
          </div>
          <div className="stat-card points">
            <h3>🎯 Total Points</h3>
            <p>{data.totalPoints}</p>
          </div>
          <div className="stat-card level">
            <h3>🏆 Level</h3>
            <p>{data.level}</p>
          </div>
        </div>

        {/* Animate new badge */}
        <AnimatePresence>
          {newBadge && (
            <motion.div
              key="new-badge"
              className="badge-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNewBadge(null)}
            >
              <motion.div
                className="badge-popup"
                initial={{ scale: 0.5, rotate: 0 }}
                animate={{ scale: 1.2, rotate: 360 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img src={newBadge.imageUrl} alt={newBadge.name} />
                <h3>New Badge Unlocked!</h3>
                <p>{newBadge.name}</p>
              </motion.div>

              {/* Confetti on popup */}
              <Confetti
                width={300}
                height={300}
                recycle={false}
                numberOfPieces={150}
                className="confetti-container"
              />

              {/* Points earned animation */}
              <AnimatePresence>
                {showPoints && (
                  <motion.div
                    className="points-earned"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1 }}
                  >
                    +{newBadge.pointsAwarded} Points Earned!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Calendar + Badges */}
        <div className="main-content">
          <div className="calendar-section">
            <h2>📅 July 2025</h2>
            <EmbeddedStreakCalendar />
          </div>

          <div className="badge-section">
            <h2>🏅 Badges</h2>
            <BadgesGrid unlocked={data.unlockedBadges} locked={data.lockedBadges} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AchievementPage;
