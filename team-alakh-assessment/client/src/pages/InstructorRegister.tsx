import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import WaterRippleBackground from "../components/WaterRippleBackground";
import { APIURL } from '../services/api';
const InstructorRegister: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    speciality: '',
    degrees: '',
    experience: '',
    picture: '',
    bio: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [uploading, setUploading] = useState(false);
  const [uploadMsg, setUploadMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    try {
      await axios.post(`${APIURL}/api/instructor/register`, {
        ...form,
        experience: Number(form.experience),
      });
      setSuccess('Registration successful! Redirecting to login...');
      setTimeout(() => navigate('/instructor-login'), 1500);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed.');
    }
    setLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setForm(f => ({ ...f, picture: ev.target?.result as string }));
      setUploadMsg('Photo ready!');
    };
    reader.onerror = () => setUploadMsg('Failed to read file.');
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <WaterRippleBackground />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-md border border-gray-200/60 dark:border-gray-700 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-white mb-8 text-center drop-shadow-[0_0_24px_#60a5fa]">Instructor Register</h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Full Name" className="input" />
            <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="input" />
            <input name="password" value={form.password} onChange={handleChange} required type="password" placeholder="Password" className="input" />
            <input name="speciality" value={form.speciality} onChange={handleChange} required placeholder="Speciality (e.g. Data Structures)" className="input" />
            <input name="degrees" value={form.degrees} onChange={handleChange} required placeholder="Degrees/Qualifications" className="input" />
            <input name="experience" value={form.experience} onChange={handleChange} required type="number" min={0} placeholder="Years of Experience" className="input" />
            {/* Profile photo upload */}
            <div className="flex flex-col items-center mb-2">
              {form.picture && <img src={form.picture} alt="pic" className="w-20 h-20 rounded-full object-cover mb-2" />}
              <input type="file" accept="image/*" onChange={handleFileChange} className="input w-full mt-2" />
              {uploadMsg && <div className="text-blue-600 font-medium mt-1">{uploadMsg}</div>}
            </div>
            <textarea name="bio" value={form.bio} onChange={handleChange} placeholder="Short Bio (optional)" className="input" />
            <button type="submit" disabled={loading} className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200">
              {loading ? 'Registering...' : 'Register as Instructor'}
            </button>
            {error && <div className="text-red-600 text-center font-medium mt-2">{error}</div>}
            {success && <div className="text-green-600 text-center font-medium mt-2">{success}</div>}
          </form>
          <p className="mt-6 text-white/80 text-center">Already have an account? <Link to="/instructor-login" className="underline text-blue-200 hover:text-blue-400">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default InstructorRegister; 