import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { BookOpen, FileText, CheckCircle, XCircle } from 'lucide-react';
import { FaUserGraduate } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import WaterRippleBackground from '../components/WaterRippleBackground';

const PAGE_SIZE = 20;

const InstructorAssessmentTracking: React.FC = () => {
  const [search, setSearch] = useState('');
  const [debounced, setDebounced] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState<any>({ results: [], total: 0, page: 1, limit: PAGE_SIZE });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebounced(search), 400);
    return () => clearTimeout(t);
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const token = localStorage.getItem('instructorToken');
        const res = await axios.get('https://assessment-o61q.onrender.com/api/instructor/assessment-histories', {
          params: { q: debounced, page, limit: PAGE_SIZE },
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data);
      } catch (err: any) {
        setError('Failed to load assessment histories.');
      }
      setLoading(false);
    };
    fetchData();
  }, [debounced, page]);

  const openModal = (assessment: any) => {
    setSelected(assessment);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelected(null);
  };
  

  return (
    <div className="min-h-screen flex flex-col relative">
      <WaterRippleBackground />
      <div className="flex flex-1 min-h-screen relative z-10">
        {/* Sidebar */}
        <aside className="w-64 bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl shadow-2xl flex flex-col py-8 px-4 min-h-screen border-r border-gray-200/40 dark:border-gray-700/60">
          <div className="flex items-center gap-3 mb-10 relative">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white relative">PreAssess</span>
          </div>
          <nav className="flex-1 flex flex-col gap-2">
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-white/90 dark:text-white/90 hover:bg-blue-500/20 dark:hover:bg-blue-900/40 transition" onClick={() => navigate('/instructor-dashboard')}><FaUserGraduate /> Dashboard</button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-white/90 dark:text-white/90 hover:bg-blue-500/20 dark:hover:bg-blue-900/40 transition" onClick={() => navigate('/instructor/students')}><FaUserGraduate /> Students</button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-white/90 dark:text-white/90 hover:bg-blue-500/20 dark:hover:bg-blue-900/40 transition" onClick={() => navigate('/instructor/content')}><BookOpen /> Content</button>
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium text-white/90 dark:text-white/90 hover:bg-blue-500/20 dark:hover:bg-blue-900/40 transition" onClick={() => navigate('/instructor/assessment-tracking')}><FileText /> Assessment Tracking</button>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 flex flex-col min-h-screen">
          <header className="flex items-center justify-between px-10 py-6 bg-white/60 dark:bg-gray-900/70 backdrop-blur-xl rounded-b-3xl shadow-lg border-b border-gray-200/40 dark:border-gray-700/60">
            <div className="text-2xl font-bold text-white drop-shadow-[0_0_12px_#60a5fa]">Assessment Tracking</div>
            <div className="flex gap-4 items-center">
              <input
                type="text"
                placeholder="Search by email or name..."
                className="input px-4 py-2 rounded-lg border border-blue-200 focus:border-blue-400 outline-none bg-white/80 dark:bg-gray-800/80 text-gray-900 dark:text-white"
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
                style={{ minWidth: 260 }}
              />
            </div>
          </header>
          <section className="flex-1 p-10">
            <div className="bg-white/70 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-200/40 dark:border-gray-700/60">
              {loading ? (
                <div className="flex items-center justify-center min-h-[200px]">Loading...</div>
              ) : error ? (
                <div className="flex items-center justify-center min-h-[200px] text-red-600">{error}</div>
              ) : data.results.length === 0 ? (
                <div className="flex items-center justify-center min-h-[200px] text-blue-400">No assessment histories found.</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr>
                        <th className="py-2 text-white">User Name</th>
                        <th className="py-2 text-white">Email</th>
                        <th className="py-2 text-white">Topic</th>
                        <th className="py-2 text-white">Score</th>
                        <th className="py-2 text-white">Passed</th>
                        <th className="py-2 text-white">Date</th>
                        <th className="py-2 text-white">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.results.map((row: any) => (
                        <tr key={row._id} className="border-t border-gray-200 dark:border-gray-700">
                          <td className="py-2 text-white/90">{row.userName || <span className="text-gray-400">N/A</span>}</td>
                          <td className="py-2 text-white/90">{row.userEmail}</td>
                          <td className="py-2 text-white/90">{row.topic}</td>
                          <td className="py-2 text-white/90">{row.score ?? '-'}</td>
                          <td className="py-2 text-white/90">{row.passed ? <CheckCircle className="inline w-5 h-5 text-green-400" /> : <XCircle className="inline w-5 h-5 text-red-400" />}</td>
                          <td className="py-2 text-white/90">{new Date(row.createdAt).toLocaleString()}</td>
                          <td className="py-2 text-white/90">
                            <button onClick={() => openModal(row.assessment)} className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-lg font-semibold shadow hover:scale-105 transition">View Details</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* Pagination */}
                  <div className="flex justify-between items-center mt-6">
                    <span className="text-blue-200 text-sm">Page {data.page} of {Math.ceil(data.total / data.limit)}</span>
                    <div className="flex gap-2">
                      <button disabled={data.page === 1} onClick={() => setPage(p => Math.max(1, p - 1))} className="px-3 py-1 rounded bg-blue-500/80 text-white font-bold disabled:opacity-40">Prev</button>
                      <button disabled={data.page === Math.ceil(data.total / data.limit)} onClick={() => setPage(p => Math.min(Math.ceil(data.total / data.limit), p + 1))} className="px-3 py-1 rounded bg-blue-500/80 text-white font-bold disabled:opacity-40">Next</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Assessment Details Modal */}
            <Modal isOpen={modalOpen} onRequestClose={closeModal} ariaHideApp={false} className="fixed inset-0 flex items-center justify-center z-[9999]" overlayClassName="fixed inset-0 bg-black/40 z-[9998]">
              <div className="bg-white/90 dark:bg-gray-900/90 rounded-2xl shadow-2xl p-8 w-full max-w-2xl relative backdrop-blur-xl border border-gray-200/40 dark:border-gray-700/60 z-[9999]">
                <button className="absolute top-2 right-4 text-2xl text-white" onClick={closeModal}>&times;</button>
                {selected ? (
                  <>
                    <div className="mb-4">
                      <div className="text-xl font-bold text-blue-700 mb-1">Assessment Details</div>
                      <div className="text-blue-200">User: {selected.userEmail}</div>
                      <div className="text-blue-200">Topic: {selected.topic}</div>
                      <div className="text-blue-200">Score: {selected.score ?? '-'}</div>
                      <div className="text-blue-200">Passed: {selected.passed ? 'Yes' : 'No'}</div>
                      <div className="text-blue-200">Date: {new Date(selected.createdAt).toLocaleString()}</div>
                    </div>
                    <div className="mb-2 font-semibold text-blue-400">Questions & Answers</div>
                    <div className="max-h-96 overflow-y-auto space-y-4">
                      {selected.questions.map((q: any, idx: number) => (
                        <div key={idx} className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 border border-blue-200/40 dark:border-blue-700/60 shadow">
                          <div className="font-bold text-blue-700 mb-1">Q{idx + 1}: {q.question}</div>
                          <div className="mb-1">
                            <span className="font-semibold text-blue-400">Options:</span>
                            <ul className="list-disc ml-6">
                              {q.options.map((opt: string, i: number) => (
                                <li key={i} className={i === q.correct ? 'text-green-600 font-bold' : ''}>{opt}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-1">
                            <span className="font-semibold text-blue-400">User Answer:</span> {typeof selected.userAnswers[idx] === 'number' ? q.options[selected.userAnswers[idx]] : <span className="text-gray-400">No answer</span>}
                          </div>
                          <div>
                            <span className="font-semibold text-blue-400">Correct Answer:</span> {q.options[q.correct]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </div>
            </Modal>
          </section>
        </main>
      </div>
    </div>
  );
};

export default InstructorAssessmentTracking; 