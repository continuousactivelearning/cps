import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import WaterRippleBackground from "../components/WaterRippleBackground";
import { APIURL } from "../services/api";

// Animated Counter Component (copied from HomePage)
const AnimatedCounter: React.FC<{ value: number; duration?: number }> = ({ value, duration = 2 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * value);
      setDisplayValue(currentValue);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value, duration]);
  return <span>{displayValue.toLocaleString()}</span>;
};

const InstructorGreeting: React.FC = () => {
  const [stats, setStats] = useState({ students: 0, instructors: 0, topics: 0 });
  const heroControls = useAnimation();
  useEffect(() => {
    heroControls.start({
      y: [0, -10, 0, 10, 0],
      rotate: [0, 1.5, 0, -1.5, 0],
      transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
    });
    const fetchStats = async () => {
      try {
        const res = await fetch(`${APIURL}/api/instructor/public-stats`);
        const data = await res.json();
        setStats({
          students: data.studentsCount || 0,
          instructors: data.instructorsCount || 0,
          topics: data.topicsCount || 0
        });
      } catch {
        setStats({ students: 0, instructors: 0, topics: 0 });
      }
    };
    fetchStats();
  }, [heroControls]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      <WaterRippleBackground />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={heroControls}
          className="text-7xl md:text-8xl font-black mb-8 tracking-tight text-white text-center drop-shadow-[0_0_48px_#fff]"
          style={{ letterSpacing: "-0.03em", textShadow: '0 0 48px #fff, 0 0 32px #60a5fa, 0 2px 8px #000, 0 1px 2px #000', filter: 'drop-shadow(0 0 32px #fff) drop-shadow(0 0 12px #60a5fa)' }}
        >
          PreAssess
          <span className="inline-block align-middle ml-4 animate-pulse" style={{ fontSize: 48, color: '#fff', textShadow: '0 0 24px #fff, 0 0 32px #60a5fa' }}>✦</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-white mb-8 max-w-2xl mx-auto text-center"
        >
          Welcome, Instructor! Join PreAssess to manage students, create content, and track analytics with powerful tools.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="flex"
            style={{ borderRadius: 16, overflow: "hidden" }}
          >
            <Link
              to="/instructor-register"
              className="px-8 py-4 text-lg font-semibold flex items-center justify-center gap-2 shadow-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl"
              style={{ width: 220, textAlign: "center", willChange: "transform, box-shadow, background, border, filter" }}
            >
              Join Now
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="flex"
            style={{ borderRadius: 16, overflow: "hidden" }}
          >
            <Link
              to="/instructor-login"
              className="px-8 py-4 text-lg font-semibold flex items-center justify-center gap-2 shadow-lg bg-white/80 text-blue-700 rounded-xl"
              style={{ width: 220, textAlign: "center", willChange: "transform, box-shadow, background, border, filter" }}
            >
              Login
            </Link>
          </motion.div>
        </motion.div>
        {/* Stats Section */}
        <section className="bg-white/70 dark:bg-gray-800/80 py-12 px-6 rounded-2xl shadow-xl backdrop-blur-md w-full max-w-2xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                <AnimatedCounter value={stats.instructors} duration={2.5} />+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Expert Instructors</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                <AnimatedCounter value={stats.students} duration={2.5} />+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Active Students</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                <AnimatedCounter value={stats.topics} duration={2.5} />+
              </div>
              <div className="text-gray-600 dark:text-gray-300">Topics Available</div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InstructorGreeting;