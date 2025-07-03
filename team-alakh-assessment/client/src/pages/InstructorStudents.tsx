import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import { FaUserGraduate, FaBookOpen, FaClipboardList, FaCogs, FaSignOutAlt, FaChartBar, FaUserCircle, FaProjectDiagram, FaPlusCircle, FaHistory } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import WaterRippleBackground from '../components/WaterRippleBackground';
import { BookOpen, Search, Sparkles } from 'lucide-react';
import { APIURL } from '../services/api';
//completed the student check page
const navItems = [
  { label: 'Dashboard', icon: <FaChartBar />, path: '/instructor-dashboard' },
  { label: 'Students', icon: <FaUserGraduate />, path: '/instructor/students' },
  { label: 'Content', icon: <FaBookOpen />, path: '/instructor/content' },
  { label: 'Assessments', icon: <FaClipboardList />, path: '/instructor-dashboard#assessments' },
  { label: 'Audit Logs', icon: <FaHistory />, path: '/instructor/audit-logs' },
  { label: 'Profile', icon: <FaUserCircle />, path: '/instructor/profile' },
];

interface Student {
  _id: string;
  email: string;
  profile: { name: string; picture?: string };
  achievements: string[];
  passedArray: string[];
}

const cardVariants: Variants = {
  rest: { y: 0, boxShadow: "0 2px 12px 0 rgba(59,130,246,0.06)", scale: 1 },
  hover: { y: -10, boxShadow: "0 12px 40px 0 rgba(99,102,241,0.22)", scale: 1.05, transition: { type: "spring", stiffness: 180, damping: 16 } }
};

const InstructorStudents: React.FC = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState<Student | null>(null);
  const [detail, setDetail] = useState<any>(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState('');
  const [actionMsg, setActionMsg] = useState('');
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    localStorage.removeItem('token'); // Remove user token on instructor page
    const fetchProfile = async () => {
      const token = localStorage.getItem('instructorToken');
      if (!token) {
        navigate('/instructor-login');
        return;
      }
      try {
        const res = await axios.get(`${APIURL}/api/instructor/me`, {
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

  const fetchStudents = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('instructorToken');
      const res = await axios.get(`${APIURL}/api/instructor/students`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setStudents(res.data);
    } catch (err: any) {
      setError('Failed to load students.');
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const filtered = students.filter(s =>
    (s.profile?.name || '').toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase())
  );

  const openDetail = async (id: string) => {
    setDetailLoading(true);
    setDetailError('');
    setActionMsg('');
    try {
      const token = localStorage.getItem('instructorToken');
      const res = await axios.get(`${APIURL}/api/instructor/students/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDetail(res.data);
      setSelected(students.find(s => s._id === id) || null);
    } catch (err) {
      setDetailError('Failed to load student details.');
    }
    setDetailLoading(false);
  };

  const logAudit = async (action: string, details: any) => {
    try {
      const token = localStorage.getItem('instructorToken');
      await axios.post(`${APIURL}/api/instructor/audit-log`, { action, details }, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch {
      setActionMsg('Audit log failed.');
    }
  };

  const handleFlag = async () => {
    if (!detail) return;
    setActionMsg('');
    setDetailLoading(true);
    try {
      const token = localStorage.getItem('instructorToken');
      await axios.post(`${APIURL}/api/instructor/students/${detail._id}/flag`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setActionMsg('Student flagged.');
      await openDetail(detail._id);
      await fetchStudents();
      await logAudit('Flag Student', { studentId: detail._id });
    } catch (err: any) {
      setActionMsg(err.response?.data?.message || 'Failed to flag student.');
    }
    setDetailLoading(false);
  };
  const handleDeactivate = async () => {
    if (!detail) return;
    setActionMsg('');
    setDetailLoading(true);
    try {
      const token = localStorage.getItem('instructorToken');
      await axios.post(`${APIURL}/api/instructor/students/${detail._id}/deactivate`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setActionMsg('Student deactivated.');
      await openDetail(detail._id);
      await fetchStudents();
      await logAudit('Deactivate Student', { studentId: detail._id });
    } catch (err: any) {
      setActionMsg(err.response?.data?.message || 'Failed to deactivate student.');
    }
    setDetailLoading(false);
  };
  const handleReactivate = async () => {
    if (!detail) return;
    setActionMsg('');
    setDetailLoading(true);
    try {
      const token = localStorage.getItem('instructorToken');
      await axios.post(`${APIURL}/api/instructor/students/${detail._id}/reactivate`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setActionMsg('Student reactivated.');
      await openDetail(detail._id);
      await fetchStudents();
      await logAudit('Reactivate Student', { studentId: detail._id });
    } catch (err: any) {
      setActionMsg(err.response?.data?.message || 'Failed to reactivate student.');
    }
    setDetailLoading(false);
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    try {
      const token = localStorage.getItem('instructorToken');
      const formData = new FormData();
      formData.append('file', e.target.files[0]);
      const res = await axios.post(`${APIURL}/api/instructor/students/import`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setActionMsg(res.data.message || 'Import complete.');
    } catch {
      setActionMsg('Import failed.');
    }
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

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
                <div className="text-2xl font-bold text-white drop-shadow-[0_0_12px_#60a5fa]">Student Management</div>
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
            {/* Add search, import/export, and student list in glassmorphism cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 mb-8 border border-gray-200/40 dark:border-gray-700/60"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Search students..."
                  className="input flex-1"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <label className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition cursor-pointer">
                  Import CSV
                  <input type="file" accept=".csv" ref={fileInputRef} onChange={handleImport} className="hidden" />
                </label>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200/40 dark:border-gray-700/60"
            >
              {loading ? (
                <div className="flex items-center justify-center min-h-[200px]">Loading...</div>
              ) : error ? (
                <div className="flex items-center justify-center min-h-[200px] text-red-600">{error}</div>
              ) : (
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="py-2 text-white">Name</th>
                      <th className="py-2 text-white">Email</th>
                      <th className="py-2 text-white">Achievements</th>
                      <th className="py-2 text-white">Mastered Topics</th>
                      <th className="py-2 text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map(s => (
                      <motion.tr
                        key={s._id}
                        variants={cardVariants}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="border-t border-gray-200 dark:border-gray-700"
                      >
                        <td className="py-2 text-white/90">{s.profile?.name}</td>
                        <td className="py-2 text-white/90">{s.email}</td>
                        <td className="py-2 text-white/90">{s.achievements.length}</td>
                        <td className="py-2 text-white/90">{s.passedArray.length}</td>
                        <td className="py-2 text-white/90">
                          <button onClick={() => openDetail(s._id)} className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition">View</button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              )}
            </motion.div>
            {/* Student detail modal (glassmorphism) */}
            <Modal isOpen={!!selected} onRequestClose={() => { setSelected(null); setDetail(null); }} ariaHideApp={false} className="fixed inset-0 flex items-center justify-center z-[9999]" overlayClassName="fixed inset-0 bg-black/40 z-[9998]">
              <div className="bg-white/80 dark:bg-gray-900/90 rounded-2xl shadow-2xl w-full max-w-lg relative backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/60 z-[9999] max-h-[90vh] overflow-y-auto p-8 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 dark:scrollbar-thumb-blue-700">
                <button className="absolute top-2 right-4 text-2xl text-white" onClick={() => { setSelected(null); setDetail(null); }}>&times;</button>
                {detailLoading ? (
                  <div>Loading...</div>
                ) : detailError ? (
                  <div className="text-red-600">{detailError}</div>
                ) : detail ? (
                  <>
                    <div className="flex items-center gap-4 mb-4">
                      {detail.profile?.picture && <img src={detail.profile.picture} alt="pic" className="w-16 h-16 rounded-full object-cover" />}
                      <div>
                        <div className="text-xl font-bold text-white">{detail.profile?.name || 'No Name'}</div>
                        <div className="text-blue-200">{detail.email}</div>
                        {detail.flagged && <span className="text-yellow-400 font-semibold ml-2">Flagged</span>}
                        {detail.deactivated && <span className="text-red-400 font-semibold ml-2">Deactivated</span>}
                      </div>
                    </div>
                    {/* Professional horizontal stats bar */}
                    <div className="flex flex-row gap-4 mb-6 justify-between">
                      <div className="flex-1 bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-indigo-900/80 rounded-full shadow-lg px-6 py-4 flex flex-col items-center border border-blue-400/30 min-w-[120px]">
                        <BookOpen className="w-6 h-6 text-blue-400 mb-1" />
                        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 drop-shadow-[0_0_8px_#60a5fa]">{(detail.passedArray?.length || 0).toLocaleString()}</span>
                        <span className="text-xs text-blue-100 font-semibold mt-1">Topics Mastered</span>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-gray-900/80 via-teal-900/60 to-blue-900/80 rounded-full shadow-lg px-6 py-4 flex flex-col items-center border border-teal-400/30 min-w-[120px]">
                        <FaClipboardList className="w-6 h-6 text-teal-400 mb-1" />
                        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_8px_#60a5fa]">{(detail.assessmentsAttempted || 0).toLocaleString()}</span>
                        <span className="text-xs text-teal-100 font-semibold mt-1">Assessments Attempted</span>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-indigo-900/80 rounded-full shadow-lg px-6 py-4 flex flex-col items-center border border-purple-400/30 min-w-[120px]">
                        <Sparkles className="w-6 h-6 text-purple-400 mb-1" />
                        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-indigo-400 drop-shadow-[0_0_8px_#60a5fa]">{(detail.achievements?.length || 0).toLocaleString()}</span>
                        <span className="text-xs text-purple-100 font-semibold mt-1">Achievements</span>
                      </div>
                    </div>
                    <hr className="border-t border-blue-900/30 mb-6" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 border border-blue-200/40 dark:border-blue-700/60 shadow">
                        <div className="font-semibold text-blue-700 mb-2 flex items-center gap-2"><BookOpen className="w-5 h-5" /> Mastered Topics</div>
                        <div className="flex flex-wrap gap-2">
                          {(detail.passedArray || []).map((topic: string, i: number) => (
                            <span key={i} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold shadow">{topic}</span>
                          ))}
                          {(!detail.passedArray || detail.passedArray.length === 0) && <span className="text-gray-400">None</span>}
                        </div>
                      </div>
                      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 border border-purple-200/40 dark:border-purple-700/60 shadow">
                        <div className="font-semibold text-purple-700 mb-2 flex items-center gap-2"><Search className="w-5 h-5" /> Search History</div>
                        <div className="max-h-24 overflow-y-auto flex flex-col gap-1">
                          {(detail.searchHistory || []).map((s: string, i: number) => (
                            <span key={i} className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded text-xs font-semibold">{s}</span>
                          ))}
                          {(!detail.searchHistory || detail.searchHistory.length === 0) && <span className="text-gray-400">No search history</span>}
                        </div>
                      </div>
                      <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 border border-indigo-200/40 dark:border-indigo-700/60 shadow col-span-2">
                        <div className="font-semibold text-indigo-700 mb-3 flex items-center gap-2">
                          <FaClipboardList className="w-5 h-5" /> Assessment History
                        </div>

                        <div className="overflow-x-auto">
                          <div className="flex gap-4 w-max pb-2">
                            {(detail.assessmentHist || []).length > 0 ? (
                              detail.assessmentHist.map((a: any, i: number) => (
                                <div
                                  key={i}
                                  className="min-w-[220px] bg-indigo-100 text-indigo-900 px-4 py-3 rounded-xl shadow-md flex-shrink-0 border border-indigo-300"
                                >
                                  <div className="font-bold mb-1">{a.topic}</div>
                                  <div className="text-sm mb-1">Score: <b>{a.score}</b></div>
                                  <div className={`text-sm mb-1 font-semibold ${a.passed ? 'text-green-600' : 'text-red-600'}`}>
                                    {a.passed ? '✅ Passed' : '❌ Failed'}
                                  </div>
                                  <div className="text-xs text-gray-600">
                                    {new Date(a.createdAt).toLocaleString()}
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="text-gray-400">No assessments found</div>
                            )}
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="flex gap-2 mt-4">
                      {!detail.flagged && <button onClick={handleFlag} className="bg-yellow-400 text-white px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition">Flag</button>}
                      {!detail.deactivated && <button onClick={handleDeactivate} className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition">Deactivate</button>}
                      {detail.deactivated && <button onClick={handleReactivate} className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition">Reactivate</button>}
                    </div>
                    {actionMsg && <div className="text-blue-600 font-medium mt-2">{actionMsg}</div>}
                  </>
                ) : null}
              </div>
            </Modal>
          </section>
        </main>
      </div>
      <div className="mt-8 p-4 bg-gray-100 text-xs rounded-xl">
        <div><b>Debug:</b></div>
        <div>instructorToken: <span className="break-all">{localStorage.getItem('instructorToken') || 'none'}</span></div>
        <div>user token: <span className="break-all">{localStorage.getItem('token') || 'none'}</span></div>
      </div>
    </div>
  );
};

export default InstructorStudents; 