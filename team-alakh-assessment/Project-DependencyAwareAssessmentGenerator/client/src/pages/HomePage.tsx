import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmail = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await api.get('/api/user/passed', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserEmail(res.data.email || null);
      } catch (err) {
        console.error('Could not fetch user email', err);
      }
    };

    fetchEmail();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <h1 className="text-4xl font-bold text-blue-800 mb-6">
        Welcome to Dependency-Aware Assessment Generator
      </h1>

      {userEmail && (
        <p className="text-green-700 font-semibold mb-4">
          Logged in as: {userEmail}
        </p>
      )}

      <p className="text-lg text-gray-700 mb-8">Ready to take the test?</p>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => navigate('/register')}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow"
        >
          It’s my first time here… Register me
        </button>
        <button
          onClick={() => navigate('/login')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded shadow"
        >
          Already registered? Take me to the test
        </button>
      </div>
    </div>
  );
};

export default HomePage;
