import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUserGraduate, FaBookOpen, FaClipboardList, FaCogs, FaSignOutAlt, FaChartBar, FaUserCircle, FaHistory } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import WaterRippleBackground from '../components/WaterRippleBackground';
import { BookOpen } from "lucide-react";

const navItems = [
  { label: 'Dashboard', icon: <FaChartBar />, path: '/instructor-dashboard' },
  { label: 'Students', icon: <FaUserGraduate />, path: '/instructor/students' },
  { label: 'Content', icon: <FaBookOpen />, path: '/instructor/content' },
  { label: 'Assessments', icon: <FaClipboardList />, path: '/instructor-dashboard#assessments' },
  { label: 'Audit Logs', icon: <FaHistory />, path: '/instructor/audit-logs' },
  { label: 'Profile', icon: <FaUserCircle />, path: '/instructor/profile' },
];

interface AuditLog {
  instructorName: string;
  instructorEmail: string;
  action: string;
  timestamp: string;
  details: any;
}

const cardVariants: Variants = {
  rest: { y: 0, boxShadow: "0 2px 12px 0 rgba(59,130,246,0.06)", scale: 1 },
  hover: { y: -10, boxShadow: "0 12px 40px 0 rgba(99,102,241,0.22)", scale: 1.05, transition: { type: "spring", stiffness: 180, damping: 16 } }
};

const InstructorAuditLogs: React.FC = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [logs, setLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('instructorToken');
      if (!token) {
        navigate('/instructor-login');
        return;
      }
      try {
        const res = await axios.get('https://assessment-o61q.onrender.com/api/instructor/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err: any) {
        setError('Failed to load profile. Please login again.');
        localStorage.removeItem('instructorToken');
        setTimeout(() => navigate('/instructor-login'), 1500);
      }
    };
    fetchProfile();
  }, [navigate]);

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('instructorToken');
        const res = await axios.get('https://assessment-o61q.onrender.com/api/instructor/audit-logs', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setLogs(res.data);
      } catch {
        setError('Failed to load audit logs.');
      }
      setLoading(false);
    };
    fetchLogs();
  }, []);

  const filtered = logs.filter(l =>
    l.instructorName.toLowerCase().includes(filter.toLowerCase()) ||
    l.instructorEmail.toLowerCase().includes(filter.toLowerCase()) ||
    l.action.toLowerCase().includes(filter.toLowerCase())
  );

  const handleLogout = () => {
    localStorage.removeItem('instructorToken');
    navigate('/', { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <WaterRippleBackground />
      <div className="flex flex-1 min-h-screen relative z-10">
        {/* Sidebar */}
        <aside className="w-64 bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl flex flex-col py-8 px-4 min-h-screen border-r border-gray-200/40 dark:border-gray-700/60">
          <div className="flex items-center gap-3 mb-10 relative">
            <motion.div
              className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg"
              initial={{ y: 0 }}
              animate={{ y: [0, -3, 0, 3, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <BookOpen className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-xl font-bold text-white relative">
              PreAssess
              <motion.div
                className="absolute left-0 right-0 -bottom-1 h-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-70"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
                style={{ originX: 0 }}
              />
            </span>
          </div>
          <nav className="flex-1 flex flex-col gap-2">
            {navItems.map(item => (
              <button
                key={item.label}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-white/90 dark:text-white/90 hover:bg-blue-500/20 dark:hover:bg-blue-900/40 transition"
                onClick={() => navigate(item.path)}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </nav>
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium bg-red-500/90 text-white shadow hover:bg-red-600/90 mt-8 transition"
          >
            <FaSignOutAlt /> Logout
          </button>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col min-h-screen">
          {/* Header */}
          <header className="flex items-center justify-between px-10 py-6 bg-white/60 dark:bg-gray-900/70 backdrop-blur-xl rounded-b-3xl shadow-lg border-b border-gray-200/40 dark:border-gray-700/60">
            <div className="flex items-center gap-4">
              <img
                src={profile?.profile?.picture || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(profile?.name || 'Instructor')}
                alt="avatar"
                className="w-14 h-14 rounded-full border-4 border-white shadow"
              />
              <div>
                <div className="text-2xl font-bold text-white drop-shadow-[0_0_12px_#60a5fa]">Audit Logs</div>
                <div className="text-md text-blue-200">Welcome, {profile?.name}</div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 text-white font-bold px-4 py-2 rounded-full shadow hover:bg-red-600 transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </header>
          {/* Main Section */}
          <section className="flex-1 p-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 min-h-[200px] border border-gray-200/40 dark:border-gray-700/60"
            >
              <input
                type="text"
                placeholder="Filter by instructor or action..."
                className="input mb-4 w-full max-w-md"
                value={filter}
                onChange={e => setFilter(e.target.value)}
              />
              {loading ? (
                <div className="flex items-center justify-center min-h-[200px]">Loading...</div>
              ) : error ? (
                <div className="flex items-center justify-center min-h-[200px] text-red-600">{error}</div>
              ) : (
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="py-2 text-white">Instructor</th>
                      <th className="py-2 text-white">Action</th>
                      <th className="py-2 text-white">Timestamp</th>
                      <th className="py-2 text-white">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((l, i) => (
                      <motion.tr
                        key={i}
                        variants={cardVariants}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="border-t border-gray-200 dark:border-gray-700"
                      >
                        <td className="py-2 text-white/90">{l.instructorName} <span className="text-xs text-blue-200">({l.instructorEmail})</span></td>
                        <td className="py-2 text-white/90">{l.action}</td>
                        <td className="py-2 text-white/90">{new Date(l.timestamp).toLocaleString()}</td>
                        <td className="py-2 text-white/90 text-xs break-all">{typeof l.details === 'object' ? JSON.stringify(l.details) : l.details}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              )}
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default InstructorAuditLogs; 