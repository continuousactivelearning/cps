import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUserGraduate, FaBookOpen, FaClipboardList, FaCogs, FaSignOutAlt, FaChartBar, FaUserCircle, FaProjectDiagram, FaPlusCircle, FaHistory } from 'react-icons/fa';
import ReactFlow, { Background, Controls, MiniMap } from 'react-flow-renderer';
import { motion, Variants } from 'framer-motion';
import WaterRippleBackground from '../components/WaterRippleBackground';
import { BookOpen, HelpCircle, Trash2, Play, FileText } from "lucide-react";
import Modal from 'react-modal';

const navItems = [
  { label: 'Dashboard', icon: <FaChartBar />, path: '/instructor-dashboard' },
  { label: 'Students', icon: <FaUserGraduate />, path: '/instructor/students' },
  { label: 'Content', icon: <FaBookOpen />, path: '/instructor/content' },
  { label: 'Assessments', icon: <FaClipboardList />, path: '/instructor/assessment-tracking' },
  { label: 'Audit Logs', icon: <FaHistory />, path: '/instructor/audit-logs' },
  { label: 'Profile', icon: <FaUserCircle />, path: '/instructor/profile' },
];

const cardVariants: Variants = {
  rest: { y: 0, boxShadow: "0 2px 12px 0 rgba(59,130,246,0.06)", scale: 1 },
  hover: { y: -10, boxShadow: "0 12px 40px 0 rgba(99,102,241,0.22)", scale: 1.05, transition: { type: "spring", stiffness: 180, damping: 16 } }
};

const InstructorDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({ students: 0, topics: 0, assessments: 0 });
  const [recent, setRecent] = useState<any[]>([]);
  const [auditLogs, setAuditLogs] = useState<any[]>([]);
  const [recentAssessments, setRecentAssessments] = useState<any[]>([]);
  const [recentTopics, setRecentTopics] = useState<any[]>([]);
  const [queries, setQueries] = useState<any[]>([]);
  const [queryModal, setQueryModal] = useState<{ open: boolean, query: any }>({ open: false, query: null });
  const [queryStatus, setQueryStatus] = useState('');
  const [queryResponse, setQueryResponse] = useState('');
  const [queryMsg, setQueryMsg] = useState('');
  const [queryPanelOpen, setQueryPanelOpen] = useState(false);
  const [queryToastMsg, setQueryToastMsg] = useState('');
  const [queryToastType, setQueryToastType] = useState<'success' | 'error'>('success');

  const fetchQueries = async () => {
    try {
      const token = localStorage.getItem('instructorToken');
      const res = await axios.get('/api/query', { headers: { Authorization: `Bearer ${token}` } });
      setQueries(res.data);
    } catch {}
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('instructorToken');
      if (!token) {
        navigate('/instructor-login');
        return;
      }
      try {
        const res = await axios.get('/api/instructor/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err: any) {
        setError('Failed to load profile. Please login again.');
        localStorage.removeItem('instructorToken');
        setTimeout(() => navigate('/instructor-login'), 1500);
      }
      setLoading(false);
    };

    const fetchDashboard = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('instructorToken');
        const res = await axios.get('/api/instructor/dashboard-stats', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats({
          students: res.data.studentsCount,
          topics: res.data.topicsCount,
          assessments: res.data.assessmentsCount,
        });
        setAuditLogs(res.data.auditLogs || []);
        setRecentAssessments(res.data.recentAssessments || []);
        setRecentTopics(res.data.recentTopics || []);
      } catch {
        setError('Failed to load dashboard data.');
      }
      setLoading(false);
    };

    fetchProfile();
    fetchDashboard();
    fetchQueries();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('instructorToken');
    navigate('/', { replace: true });
  };

  const openQueryModal = (q: any) => {
    setQueryModal({ open: true, query: q });
    setQueryStatus(q.status);
    setQueryResponse(q.response || '');
    setQueryMsg('');
  };

  const closeQueryModal = () => {
    setQueryModal({ open: false, query: null });
    setQueryStatus('');
    setQueryResponse('');
    setQueryMsg('');
  };

  const handleStatusChange = async () => {
    try {
      const token = localStorage.getItem('instructorToken');
      await axios.post(`/api/query/${queryModal.query._id}/status`, { status: queryStatus }, { headers: { Authorization: `Bearer ${token}` } });
      setQueryToastMsg('Status updated.');
      setQueryToastType('success');
      fetchQueries();
      closeQueryModal();
      setTimeout(() => setQueryToastMsg(''), 2000);
    } catch { setQueryToastMsg('Failed to update status.'); setQueryToastType('error'); setTimeout(() => setQueryToastMsg(''), 2000); }
  };

  const handleResponse = async () => {
    try {
      const token = localStorage.getItem('instructorToken');
      await axios.post(`/api/query/${queryModal.query._id}/respond`, { response: queryResponse }, { headers: { Authorization: `Bearer ${token}` } });
      setQueryToastMsg('Response sent.');
      setQueryToastType('success');
      fetchQueries();
      closeQueryModal();
      setTimeout(() => setQueryToastMsg(''), 2000);
    } catch { setQueryToastMsg('Failed to send response.'); setQueryToastType('error'); setTimeout(() => setQueryToastMsg(''), 2000); }
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (error) return <div className="flex items-center justify-center min-h-screen text-red-600">{error}</div>;

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
                <div className="text-2xl font-bold text-white drop-shadow-[0_0_12px_#60a5fa]">Welcome, {profile?.name}</div>
                <div className="text-md text-blue-200">Speciality: {profile?.speciality}</div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <button
                className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold px-6 py-2 rounded-full shadow-lg hover:scale-105 hover:brightness-110 transition"
                onClick={() => navigate('/instructor/content')}
              >
                <FaPlusCircle className="inline mr-2" /> New Topic
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 text-white font-bold px-4 py-2 rounded-full shadow hover:bg-red-600 transition"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </header>
          {/* Dashboard Content */}
          <section className="flex-1 p-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Analytics Cards */}
            <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <FaUserGraduate className="text-3xl text-purple-400 mb-2 drop-shadow-lg" />,
                  value: stats.students,
                  label: 'Students Managed',
                  subtitle: '+5 this week',
                  link: '/instructor/students',
                  tooltip: 'Total number of students you are managing.'
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-blue-400 mb-2 drop-shadow-lg" />,
                  value: stats.topics,
                  label: 'Topics Created',
                  subtitle: '+2 this week',
                  link: '/instructor/content',
                  tooltip: 'Total topics you have created and published.'
                },
                {
                  icon: <FaClipboardList className="text-3xl text-teal-400 mb-2 drop-shadow-lg" />,
                  value: stats.assessments,
                  label: 'Assessments Generated',
                  subtitle: '+3 this week',
                  link: '/instructor/assessment-tracking',
                  tooltip: 'Total assessments you have generated for your students.'
                }
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  variants={cardVariants}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                  className="relative bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-indigo-900/80 backdrop-blur-xl rounded-full shadow-xl p-8 flex flex-col items-center border border-blue-400/30 group hover:scale-105 transition-transform duration-200 min-h-[180px]"
                  style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)' }}
                >
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-xs text-white bg-gray-900/90 rounded-lg px-3 py-1 shadow-lg border border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {card.tooltip}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    {card.icon}
                    <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 animate-pulse drop-shadow-[0_0_8px_#60a5fa]">
                      {card.value.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-blue-100 font-semibold text-lg drop-shadow mb-1 tracking-wide">{card.label}</div>
                  <div className="text-xs text-blue-300 mb-2">{card.subtitle}</div>
                  <a href={card.link} className="text-xs text-blue-400 underline hover:text-blue-200 transition">View Details</a>
                </motion.div>
              ))}
            </div>
            {/* Dependency Map & Recent Activity */}
            <div className="col-span-1 md:col-span-1 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 flex flex-col border border-gray-200/40 dark:border-gray-700/60"
              >
                <div className="flex items-center gap-2 mb-2">
                  <FaHistory className="text-xl text-blue-400" />
                  <span className="font-bold text-lg text-white">Recent Activity</span>
                </div>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {auditLogs.map((log, i) => (
                    <li key={i} className="py-2 text-white/90 flex flex-col gap-1">
                      <span className="font-semibold">{log.action}</span>
                      <span className="text-xs text-blue-200">{log.instructorName} ({log.instructorEmail}) • {new Date(log.timestamp).toLocaleString()}</span>
                      {log.details && <span className="text-xs text-blue-100">{typeof log.details === 'object' ? JSON.stringify(log.details) : log.details}</span>}
                    </li>
                  ))}
                  {recentAssessments.map((a, i) => (
                    <li key={'assess' + i} className="py-2 text-white/90 flex flex-col gap-1">
                      <span className="font-semibold">Assessment: {a.topic}</span>
                      <span className="text-xs text-blue-200">{new Date(a.createdAt).toLocaleString()}</span>
                    </li>
                  ))}
                  {recentTopics.map((t, i) => (
                    <li key={'topic' + i} className="py-2 text-white/90 flex flex-col gap-1">
                      <span className="font-semibold">New Topic: {t.topic}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>
          {/* Floating Student Queries Button */}
          <motion.button
            drag
            dragConstraints={{ left: 0, right: window.innerWidth - 80, top: 0, bottom: window.innerHeight - 80 }}
            initial={{ scale: 1, y: 0 }}
            whileHover={{ scale: 1.1, y: -6 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setQueryPanelOpen(true)}
            className="fixed bottom-24 right-8 z-50 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-0 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-3xl font-bold hover:scale-110 transition-all duration-200 cursor-pointer border-4 border-white/30"
            title="Student Queries"
            aria-label="Student Queries"
          >
            <HelpCircle className="w-8 h-8 animate-pulse" />
            {queries.some(q => q.status === 'open' || q.status === 'under_progress') && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">!</span>
            )}
          </motion.button>
          {/* Student Queries Panel (sub-window) */}
          {queryPanelOpen && (
            <div className="fixed top-0 right-0 h-full w-full sm:w-[400px] z-[9999] bg-white dark:bg-gray-900 shadow-2xl border-l border-gray-200 dark:border-gray-700 flex flex-col transition-all duration-300 animate-slide-in-right">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-blue-500 to-indigo-500">
                <div className="text-lg font-bold text-white flex items-center gap-2"><HelpCircle className="w-6 h-6" /> Student Queries</div>
                <button onClick={() => setQueryPanelOpen(false)} className="text-white text-2xl font-bold hover:scale-110 transition">&times;</button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {queries.map(q => (
                  <div key={q._id} className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 border border-gray-200/40 dark:border-gray-700/60 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div className="flex-1">
                      <div className="text-gray-900 dark:text-white font-semibold mb-1 flex items-center gap-2">
                        {q.content}
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-bold ${q.status === 'open' ? 'bg-blue-100 text-blue-700' : q.status === 'under_progress' ? 'bg-yellow-100 text-yellow-700' : q.status === 'solved' ? 'bg-green-100 text-green-700' : q.status === 'irrelevant' ? 'bg-gray-200 text-gray-700' : 'bg-gray-100 text-gray-700'}`}>{q.status.replace('_', ' ')}</span>
                      </div>
                      <div className="text-xs text-gray-500 mb-1">From: {q.studentId?.profile?.name} ({q.studentId?.email})</div>
                      <div className="flex gap-2 flex-wrap mb-1">
                        {q.attachments?.map((a: any, i: number) => (
                          a.type.startsWith('image') ? (
                            <a key={i} href={a.url} target="_blank" rel="noopener noreferrer" className="inline-block w-12 h-12 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
                              <img src={a.url} alt="attachment" className="object-cover w-full h-full" />
                            </a>
                          ) : a.type.startsWith('video') ? (
                            <a key={i} href={a.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 underline"><Play className="w-5 h-5" />Video</a>
                          ) : (
                            <a key={i} href={a.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 underline"><FileText className="w-5 h-5" />PDF</a>
                          )
                        ))}
                      </div>
                      <div className="text-xs text-gray-500 mb-1 flex items-center gap-2">
                        Status: <span className="font-bold">{q.status.replace('_', ' ')}</span>
                        {q.response && <span className="text-green-700">Response: {q.response}</span>}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 md:ml-4">
                      <button onClick={() => openQueryModal(q)} className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition">Manage</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Query Modal */}
          {queryPanelOpen && (
            <Modal isOpen={queryModal.open} onRequestClose={closeQueryModal} ariaHideApp={false} className="fixed inset-0 flex items-center justify-center z-[99999]" overlayClassName="fixed inset-0 bg-black/40 z-[99998]">
              <div className="bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl p-8 w-full max-w-lg relative backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/60 z-[99999]">
                <button className="absolute top-2 right-4 text-2xl text-white" onClick={closeQueryModal}>&times;</button>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">Manage Query</div>
                <div className="mb-2">{queryModal.query?.content}</div>
                <div className="mb-2 text-xs text-gray-500">From: {queryModal.query?.studentId?.profile?.name} ({queryModal.query?.studentId?.email})</div>
                <div className="flex gap-2 flex-wrap mb-2">
                  {queryModal.query?.attachments?.map((a: any, i: number) => (
                    a.type.startsWith('image') ? (
                      <a key={i} href={a.url} target="_blank" rel="noopener noreferrer" className="inline-block w-12 h-12 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-700">
                        <img src={a.url} alt="attachment" className="object-cover w-full h-full" />
                      </a>
                    ) : a.type.startsWith('video') ? (
                      <a key={i} href={a.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 underline"><Play className="w-5 h-5" />Video</a>
                    ) : (
                      <a key={i} href={a.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-600 underline"><FileText className="w-5 h-5" />PDF</a>
                    )
                  ))}
                </div>
                <div className="mb-2">
                  <label className="block text-xs font-semibold mb-1">Status</label>
                  <select value={queryStatus} onChange={e => setQueryStatus(e.target.value)} className="input w-full">
                    <option value="open">Open</option>
                    <option value="under_progress">Under Progress</option>
                    <option value="solved">Solved</option>
                    <option value="irrelevant">Irrelevant</option>
                  </select>
                  <button onClick={handleStatusChange} className="bg-blue-200 text-blue-900 px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition mt-2">Update Status</button>
                </div>
                <div className="mb-2">
                  <label className="block text-xs font-semibold mb-1">Response</label>
                  <textarea value={queryResponse} onChange={e => setQueryResponse(e.target.value)} className="input w-full min-h-[60px]" />
                  <button onClick={handleResponse} className="bg-blue-200 text-blue-900 px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition mt-2">Send Response</button>
                </div>
                {queryMsg && <div className="text-blue-600 font-medium mt-2">{queryMsg}</div>}
              </div>
            </Modal>
          )}
          {/* Query Toast Notification */}
          {queryPanelOpen && queryToastMsg && (
            <div className={`fixed top-4 right-8 z-[10000] px-6 py-3 rounded-xl shadow-lg font-bold text-white ${queryToastType === 'success' ? 'bg-green-600' : 'bg-red-600'}`}>{queryToastMsg}</div>
          )}
        </main>
      </div>
    </div>
  );
};

export default InstructorDashboard;