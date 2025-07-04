import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaUserGraduate, FaBookOpen, FaClipboardList, FaCogs, FaSignOutAlt, FaChartBar, FaUserCircle, FaProjectDiagram, FaPlusCircle, FaHistory } from 'react-icons/fa';
import { motion, Variants } from 'framer-motion';
import WaterRippleBackground from '../components/WaterRippleBackground';
import { BookOpen } from "lucide-react";
import { APIURL } from '../services/api';

const navItems = [
  { label: 'Dashboard', icon: <FaChartBar />, path: '/instructor-dashboard' },
  { label: 'Students', icon: <FaUserGraduate />, path: '/instructor/students' },
  { label: 'Content', icon: <FaBookOpen />, path: '/instructor/content' },
  { label: 'Assessments', icon: <FaClipboardList />, path: '/instructor-dashboard#assessments' },
  { label: 'Audit Logs', icon: <FaHistory />, path: '/instructor/audit-logs' },
  { label: 'Profile', icon: <FaUserCircle />, path: '/instructor/profile' },
];

const cardVariants: Variants = {
  rest: { y: 0, boxShadow: "0 2px 12px 0 rgba(59,130,246,0.06)", scale: 1 },
  hover: { y: -10, boxShadow: "0 12px 40px 0 rgba(99,102,241,0.22)", scale: 1.05, transition: { type: "spring", stiffness: 180, damping: 16 } }
};

const InstructorProfile: React.FC = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    speciality: '',
    degrees: '',
    experience: '',
    picture: '',
    bio: '',
  });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('instructorToken');
        const res = await axios.get(`${APIURL}/api/instructor/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
        setForm({
          name: res.data.name || '',
          speciality: res.data.speciality || '',
          degrees: res.data.degrees || '',
          experience: res.data.experience?.toString() || '',
          picture: res.data.profile?.picture || '',
          bio: res.data.profile?.bio || '',
        });
      } catch {
        setError('Failed to load profile.');
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMsg('');
    try {
      const token = localStorage.getItem('instructorToken');
      await axios.put(`${APIURL}/api/instructor/me`, {
        name: form.name,
        speciality: form.speciality,
        degrees: form.degrees,
        experience: Number(form.experience),
        profile: { picture: form.picture, bio: form.bio },
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMsg('Profile updated.');
    } catch {
      setMsg('Failed to update profile.');
    }
    setSaving(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('instructorToken');
    navigate('/', { replace: true });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setForm(f => ({ ...f, picture: ev.target?.result as string }));
      setMsg('Photo ready!');
    };
    reader.onerror = () => setMsg('Failed to read file.');
    reader.readAsDataURL(file);
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
                src={form.picture || profile?.profile?.picture || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(profile?.name || 'Instructor')}
                alt="avatar"
                className="w-14 h-14 rounded-full border-4 border-white shadow"
              />
              <div>
                <div className="text-2xl font-bold text-white drop-shadow-[0_0_12px_#60a5fa]">Profile</div>
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
              className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 max-w-lg mx-auto flex flex-col gap-4 border border-gray-200/40 dark:border-gray-700/60"
            >
              {loading ? (
                <div className="flex items-center justify-center min-h-[200px]">Loading...</div>
              ) : error ? (
                <div className="flex items-center justify-center min-h-[200px] text-red-600">{error}</div>
              ) : (
                <form onSubmit={handleSave} className="flex flex-col gap-4">
                  <div className="flex flex-col items-center mb-4">
                    {form.picture && <img src={form.picture} alt="pic" className="w-20 h-20 rounded-full object-cover mb-2" />}
                    <input name="picture" value={form.picture} onChange={handleChange} placeholder="Profile Picture URL" className="input w-full" />
                    <input type="file" accept="image/*" onChange={handleFileChange} className="input w-full mt-2" />
                  </div>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" className="input w-full" />
                  <input name="speciality" value={form.speciality} onChange={handleChange} required placeholder="Speciality" className="input w-full" />
                  <input name="degrees" value={form.degrees} onChange={handleChange} required placeholder="Degrees/Qualifications" className="input w-full" />
                  <input name="experience" value={form.experience} onChange={handleChange} required type="number" min={0} placeholder="Years of Experience" className="input w-full" />
                  <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Short Bio" className="input w-full" />
                  <button type="submit" className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-xl font-semibold shadow hover:scale-105 transition w-full" disabled={saving}>{saving ? 'Saving...' : 'Save Profile'}</button>
                  {msg && <div className="mt-3 text-center text-blue-600">{msg}</div>}
                </form>
              )}
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default InstructorProfile; 