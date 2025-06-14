/*import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [missingPrereqs, setMissingPrereqs] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleTopicSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMissingPrereqs([]);

    try {
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` };

      const prereqRes = await api.get(`/api/prerequisite/${topic}`, { headers });
      const prereqs: string[] = prereqRes.data.prerequisites || [];

      const userRes = await api.get(`/api/user/passed`, { headers });
      const passed: string[] = userRes.data.passed || [];

      const missing = prereqs.filter((pr) => !passed.includes(pr));

      if (missing.length === 0) {
        navigate(`/learn/${encodeURIComponent(topic)}`);
      } else {
        setMissingPrereqs(missing);
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong while processing your request.');
    }

    setLoading(false);
  };

   const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">What do you want to study today?</h1>
      <form onSubmit={handleTopicSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          className="w-full border px-3 py-2 rounded shadow"
          placeholder="Enter a topic (e.g., Binary Trees)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Checking...' : 'Start'}
        </button>
      </form>
      <button
  onClick={handleLogout}
  className="mt-4 bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700"
>
  Logout
</button>


      {error && <p className="text-red-600">{error}</p>}

      {missingPrereqs.length > 0 && (
        <div className="bg-yellow-100 border border-yellow-400 p-4 rounded mt-4">
          <p className="font-medium">You need to complete these prerequisite topics first:</p>
          <ul className="list-disc list-inside mt-2">
            {missingPrereqs.map((prereq) => (
              <li key={prereq}>{prereq}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
*/
import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [missingPrereqs, setMissingPrereqs] = useState<string[]>([]);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserEmail = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        const headers = { Authorization: `Bearer ${token}` };
        const res = await api.get('/api/user/passed', { headers });
        setUserEmail(res.data.email || null);
      } catch (err) {
        console.error('Error fetching user email:', err);
      }
    };

    fetchUserEmail();
  }, []);

  const handleTopicSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMissingPrereqs([]);

    try {
      const token = localStorage.getItem('token');
      const headers = { Authorization: `Bearer ${token}` };

      const prereqRes = await api.get(`/api/prerequisite/${topic}`, { headers });
      const prereqs: string[] = prereqRes.data.prerequisites || [];

      const userRes = await api.get(`/api/user/passed`, { headers });
      const passed: string[] = userRes.data.passed || [];

      const missing = prereqs.filter((pr) => !passed.includes(pr));

      if (missing.length === 0) {
        navigate(`/learn/${encodeURIComponent(topic)}`);
      } else {
        setMissingPrereqs(missing);
      }
    } catch (err) {
      console.error(err);
      setError('Something went wrong while processing your request.');
    }

    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-semibold mb-2">What do you want to study today?</h1>

      {userEmail && (
        <p className="text-green-700 font-medium mb-4">Logged in as: {userEmail}</p>
      )}

      <form onSubmit={handleTopicSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          className="w-full border px-3 py-2 rounded shadow"
          placeholder="Enter a topic (e.g., Binary Trees)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Checking...' : 'Start'}
        </button>
      </form>

      <button
        onClick={handleLogout}
        className="mt-4 bg-red-600 text-white px-4 py-2 rounded shadow hover:bg-red-700"
      >
        Logout
      </button>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {missingPrereqs.length > 0 && (
        <div className="bg-yellow-100 border border-yellow-400 p-4 rounded mt-4">
          <p className="font-medium mb-2">You need to complete these prerequisite topics first:</p>
          <ul className="space-y-3">
            {missingPrereqs.map((prereq) => (
              <li
                key={prereq}
                className="flex justify-between items-center bg-white p-3 rounded shadow"
              >
                <span className="font-medium">{prereq}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/learn/${encodeURIComponent(prereq)}`)}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                  >
                    Learn
                  </button>
                  <button
                    onClick={() => navigate(`/quiz/${encodeURIComponent(prereq)}`)}
                    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                  >
                    Take Quiz
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
