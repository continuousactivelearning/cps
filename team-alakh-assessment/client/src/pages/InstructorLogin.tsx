import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import WaterRippleBackground from "../components/WaterRippleBackground";

const InstructorLogin: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('https://assessment-o61q.onrender.com/api/instructor/login', form);
      localStorage.setItem('instructorToken', res.data.token);
      navigate('/instructor-dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <WaterRippleBackground />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 w-full max-w-md border border-gray-200/60 dark:border-gray-700 flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-white mb-8 text-center drop-shadow-[0_0_24px_#60a5fa]">Instructor Login</h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="input" />
            <input name="password" value={form.password} onChange={handleChange} required type="password" placeholder="Password" className="input" />
            <button type="submit" disabled={loading} className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold text-lg shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200">
              {loading ? 'Logging in...' : 'Login as Instructor'}
            </button>
            {error && <div className="text-red-600 text-center font-medium mt-2">{error}</div>}
          </form>
          <p className="mt-6 text-white/80 text-center">Don't have an account? <Link to="/instructor-register" className="underline text-blue-200 hover:text-blue-400">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default InstructorLogin; 