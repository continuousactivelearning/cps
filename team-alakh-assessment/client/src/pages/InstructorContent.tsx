import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import { FaUserGraduate, FaBookOpen, FaClipboardList, FaCogs, FaSignOutAlt, FaChartBar, FaUserCircle, FaProjectDiagram, FaPlusCircle, FaHistory } from 'react-icons/fa';
import { BookOpen } from "lucide-react";
import { motion, Variants } from 'framer-motion';
import WaterRippleBackground from '../components/WaterRippleBackground';
import { APIURL } from '../services/api';

const navItems = [
  { label: 'Dashboard', icon: <FaChartBar />, path: '/instructor-dashboard' },
  { label: 'Students', icon: <FaUserGraduate />, path: '/instructor/students' },
  { label: 'Content', icon: <FaBookOpen />, path: '/instructor/content' },
  { label: 'Assessments', icon: <FaClipboardList />, path: '/instructor-dashboard#assessments' },
  { label: 'Audit Logs', icon: <FaHistory />, path: '/instructor/audit-logs' },
  { label: 'Profile', icon: <FaUserCircle />, path: '/instructor/profile' },
];

interface Topic {
  _id: string;
  topic: string;
  prerequisites: string[];
}

const cardVariants: Variants = {
  rest: { y: 0, boxShadow: "0 2px 12px 0 rgba(59,130,246,0.06)", scale: 1 },
  hover: { y: -10, boxShadow: "0 12px 40px 0 rgba(99,102,241,0.22)", scale: 1.05, transition: { type: "spring", stiffness: 180, damping: 16 } }
};

const InstructorContent: React.FC = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [editTopic, setEditTopic] = useState<Topic | null>(null);
  const [form, setForm] = useState({ topic: '', prerequisites: '' });
  const [formLoading, setFormLoading] = useState(false);
  const [formMsg, setFormMsg] = useState('');
  const [materialModalOpen, setMaterialModalOpen] = useState(false);
  const [materialEditMode, setMaterialEditMode] = useState<'edit' | 'add' | null>(null);
  const [materialTopic, setMaterialTopic] = useState('');
  const [modules, setModules] = useState<any[]>([]);
  const [materialMsg, setMaterialMsg] = useState('');
  const [materialLoading, setMaterialLoading] = useState(false);

  useEffect(() => {
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

  const fetchTopics = async () => {
    setLoading(true);
    setError('');
    try {
      const token = localStorage.getItem('instructorToken');
      const res = await axios.get(`${APIURL}/api/instructor/topics`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTopics(res.data);
    } catch {
      setError('Failed to load topics.');
    }
    setLoading(false);
  };

  useEffect(() => { fetchTopics(); }, []);

  const openAdd = () => {
    setEditTopic(null);
    setForm({ topic: '', prerequisites: '' });
    setModalOpen(true);
    setFormMsg('');
  };
  const openEdit = (t: Topic) => {
    setEditTopic(t);
    setForm({ topic: t.topic, prerequisites: t.prerequisites.join(', ') });
    setModalOpen(true);
    setFormMsg('');
  };
  const closeModal = () => {
    setModalOpen(false);
    setEditTopic(null);
    setForm({ topic: '', prerequisites: '' });
    setFormMsg('');
  };
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormLoading(true);
    setFormMsg('');
    try {
      const token = localStorage.getItem('instructorToken');
      const prereqArr = form.prerequisites.split(',').map(s => s.trim()).filter(Boolean);
      if (editTopic) {
        await axios.put(`${APIURL}/api/instructor/topics/${editTopic._id}`, {
          topic: form.topic,
          prerequisites: prereqArr,
        }, { headers: { Authorization: `Bearer ${token}` } });
        setFormMsg('Topic updated.');
      } else {
        await axios.post(`${APIURL}/api/instructor/topics`, {
          topic: form.topic,
          prerequisites: prereqArr,
        }, { headers: { Authorization: `Bearer ${token}` } });
        setFormMsg('Topic added.');
      }
      await fetchTopics();
      await logAudit('Edit Topic', { topic: form.topic, prerequisites: prereqArr });
      setTimeout(closeModal, 1000);
    } catch (err: any) {
      setFormMsg(err.response?.data?.message || 'Failed to save topic.');
    }
    setFormLoading(false);
  };
  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this topic?')) return;
    setFormLoading(true);
    setFormMsg('');
    try {
      const token = localStorage.getItem('instructorToken');
      await axios.delete(`${APIURL}/api/instructor/topics/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFormMsg('Topic deleted.');
      await fetchTopics();
      await logAudit('Delete Topic', { topicId: id });
    } catch (err: any) {
      setFormMsg(err.response?.data?.message || 'Failed to delete topic.');
    }
    setFormLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('instructorToken');
    navigate('/', { replace: true });
  };

  const logAudit = async (action: string, details: any) => {
    try {
      const token = localStorage.getItem('instructorToken');
      await axios.post(`${APIURL}/api/instructor/audit-log`, { action, details }, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch {
      setFormMsg('Audit log failed.');
    }
  };

  const openEditMaterial = async (topic: string) => {
    setMaterialEditMode('edit');
    setMaterialTopic(topic);
    setMaterialMsg('');
    setMaterialLoading(true);
    try {
      const token = localStorage.getItem('instructorToken');
      const res = await axios.get(`${APIURL}/api/learn/instructor/${encodeURIComponent(topic)}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setModules(res.data.modules);
      setMaterialModalOpen(true);
    } catch (err: any) {
      setMaterialMsg(err.response?.data?.message || 'Failed to fetch material.');
      setModules([]);
      setMaterialModalOpen(true);
    }
    setMaterialLoading(false);
  };
  const openAddMaterial = () => {
    setMaterialEditMode('add');
    setMaterialTopic('');
    setModules([{ id: '', title: '', content: '', duration: '', type: 'text' }]);
    setMaterialMsg('');
    setMaterialModalOpen(true);
  };
  const closeMaterialModal = () => {
    setMaterialModalOpen(false);
    setMaterialEditMode(null);
    setMaterialTopic('');
    setModules([]);
    setMaterialMsg('');
  };
  const handleModuleChange = (i: number, field: string, value: string) => {
    setModules(mods => mods.map((m, idx) => idx === i ? { ...m, [field]: value } : m));
  };
  const handleAddModule = () => {
    setModules(mods => [...mods, { id: '', title: '', content: '', duration: '', type: 'text' }]);
  };
  const handleRemoveModule = (i: number) => {
    setModules(mods => mods.filter((_, idx) => idx !== i));
  };
  const handleSaveMaterial = async () => {
    setMaterialLoading(true);
    setMaterialMsg('');
    try {
      const token = localStorage.getItem('instructorToken');
      if (materialEditMode === 'edit') {
        await axios.put(`${APIURL}/api/learn/instructor/${encodeURIComponent(materialTopic)}`, { modules }, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMaterialMsg('Material updated.');
      } else {
        await axios.post(`${APIURL}/api/learn/instructor`, { topic: materialTopic, modules }, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMaterialMsg('Material created.');
      }
      setTimeout(() => { closeMaterialModal(); fetchTopics(); }, 1000);
    } catch (err: any) {
      setMaterialMsg(err.response?.data?.message || 'Failed to save material.');
    }
    setMaterialLoading(false);
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
                <div className="text-2xl font-bold text-white drop-shadow-[0_0_12px_#60a5fa]">Content Management</div>
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
              className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 mb-8 border border-gray-200/40 dark:border-gray-700/60"
            >
              <div className="mb-4 flex justify-end gap-2">
                <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-xl font-semibold shadow hover:scale-105 transition" onClick={openAdd}>Add Topic</button>
                <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-2 rounded-xl font-semibold shadow hover:scale-105 transition" onClick={openAddMaterial}>Add Material</button>
              </div>
              {loading ? (
                <div className="flex items-center justify-center min-h-[200px]">Loading...</div>
              ) : error ? (
                <div className="flex items-center justify-center min-h-[200px] text-red-600">{error}</div>
              ) : (
                <table className="w-full text-left">
                  <thead>
                    <tr>
                      <th className="py-2 text-white">Topic</th>
                      <th className="py-2 text-white">Prerequisites</th>
                      <th className="py-2 text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topics.map(t => (
                      <motion.tr
                        key={t._id}
                        variants={cardVariants}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="border-t border-gray-200 dark:border-gray-700"
                      >
                        <td className="py-2 text-white/90">{t.topic}</td>
                        <td className="py-2 text-white/90">{t.prerequisites.join(', ')}</td>
                        <td className="py-2 text-white/90">
                          <button onClick={() => openEdit(t)} className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition mr-2">Edit</button>
                          <button onClick={() => handleDelete(t._id)} className="bg-red-500 text-white px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition">Delete</button>
                          <button onClick={() => openEditMaterial(t.topic)} className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition ml-2">Edit Material</button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              )}
            </motion.div>
            {/* Modal for add/edit topic (glassmorphism) */}
            <Modal isOpen={modalOpen} onRequestClose={closeModal} ariaHideApp={false} className="fixed inset-0 flex items-center justify-center z-[9999]" overlayClassName="fixed inset-0 bg-black/40 z-[9998]">
              <div className="bg-white/80 dark:bg-gray-900/90 rounded-2xl shadow-2xl p-8 w-full max-w-lg relative backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/60 z-[9999]">
                <button className="absolute top-2 right-4 text-2xl text-white" onClick={closeModal}>&times;</button>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input name="topic" value={form.topic} onChange={handleFormChange} required placeholder="Topic" className="input w-full" />
                  <input name="prerequisites" value={form.prerequisites} onChange={handleFormChange} placeholder="Prerequisites (comma separated)" className="input w-full" />
                  <div className="flex gap-2 mt-2">
                    <button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-xl font-semibold shadow hover:scale-105 transition" disabled={formLoading}>{formLoading ? 'Saving...' : editTopic ? 'Update' : 'Add'}</button>
                    {editTopic && <button type="button" onClick={closeModal} className="bg-red-500 text-white px-6 py-2 rounded-xl font-semibold shadow hover:scale-105 transition">Cancel</button>}
                  </div>
                  {formMsg && <div className="text-blue-600 font-medium mt-2">{formMsg}</div>}
                </form>
              </div>
            </Modal>
            {/* Modal for editing/adding material */}
            <Modal isOpen={materialModalOpen} onRequestClose={closeMaterialModal} ariaHideApp={false} className="fixed inset-0 flex items-center justify-center z-[9999]" overlayClassName="fixed inset-0 bg-black/40 z-[9998]">
              <div className="bg-white/80 dark:bg-gray-900/90 rounded-2xl shadow-2xl p-8 w-full max-w-2xl relative backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/60 z-[9999] max-h-[90vh] overflow-y-auto">
                <button className="absolute top-2 right-4 text-2xl text-white" onClick={closeMaterialModal}>&times;</button>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">{materialEditMode === 'edit' ? `Edit Material for "${materialTopic}"` : 'Add New Material'}</div>
                {materialEditMode === 'add' && (
                  <input value={materialTopic} onChange={e => setMaterialTopic(e.target.value)} placeholder="Topic" className="input w-full mb-2" />
                )}
                {modules.map((mod, i) => (
                  <div key={i} className="mb-4 p-4 rounded-xl bg-white/90 dark:bg-gray-800/90 border border-gray-200/40 dark:border-gray-700/60">
                    <div className="flex gap-2 mb-2">
                      <input value={mod.title} onChange={e => handleModuleChange(i, 'title', e.target.value)} placeholder="Module Title" className="input flex-1" />
                      <input value={mod.duration} onChange={e => handleModuleChange(i, 'duration', e.target.value)} placeholder="Duration (e.g. 15 min)" className="input w-32" />
                      <select value={mod.type} onChange={e => handleModuleChange(i, 'type', e.target.value)} className="input w-32">
                        <option value="text">Text</option>
                        <option value="video">Video</option>
                        <option value="interactive">Interactive</option>
                      </select>
                    </div>
                    <textarea value={mod.content} onChange={e => handleModuleChange(i, 'content', e.target.value)} placeholder="Learning Content" className="input w-full min-h-[80px]" />
                    <div className="flex justify-end mt-2">
                      {modules.length > 1 && <button type="button" onClick={() => handleRemoveModule(i)} className="text-red-500 text-xs font-semibold">Remove</button>}
                    </div>
                  </div>
                ))}
                <button type="button" onClick={handleAddModule} className="bg-blue-200 text-blue-900 px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition mb-2">Add Module</button>
                <button onClick={handleSaveMaterial} className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-xl font-semibold shadow hover:scale-105 transition w-full mt-2" disabled={materialLoading}>{materialLoading ? 'Saving...' : materialEditMode === 'edit' ? 'Update Material' : 'Create Material'}</button>
                {materialMsg && <div className="mt-3 text-center text-blue-600">{materialMsg}</div>}
              </div>
            </Modal>
          </section>
        </main>
      </div>
    </div>
  );
};

export default InstructorContent; 