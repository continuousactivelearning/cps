// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// type LearningPathWeek = {
//   week: number;
//   tasks: string[];
// };

// type Props = {
//   topic: string;
//   scorePercentage: number;
//   onBack: () => void;
// };

// const LearningPathPage: React.FC<Props> = ({ topic, scorePercentage, onBack }) => {
//   const [weeksInput, setWeeksInput] = useState('');
//   const [learningPath, setLearningPath] = useState<LearningPathWeek[] | null>(null);
//   const [learningPathLoading, setLearningPathLoading] = useState(false);
//   const [showForm, setShowForm] = useState(true);

//   const handleLearningPathSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const weeks = parseInt(weeksInput, 10);
//     if (isNaN(weeks) || weeks < 1 || weeks > 52) {
//       alert('Please enter a valid number of weeks (1-52).');
//       return;
//     }

//     setLearningPathLoading(true);
//     try {
//       const res = await axios.post('http://localhost:5000/api/learning-path', {
//         topic,
//         scorePercentage,
//         weeks,
//       });
//       setLearningPath(res.data.learningPath);
//       setShowForm(false);
//     } catch (err) {
//       console.error('Error fetching learning path:', err);
//       alert('Failed to generate learning path. Please try again.');
//     } finally {
//       setLearningPathLoading(false);
//     }
//   };

//   return (
//     <div style={{
//       minHeight: '100vh',
//       background: 'linear-gradient(to right, #f3f4f6, #e0e7ff)',
//       padding: '20px',
//     }}>
//       <header style={{
//         backgroundColor: '#4f46e5',
//         color: '#fff',
//         padding: '24px 32px',
//         borderRadius: '12px',
//         marginBottom: '30px',
//         textAlign: 'center',
//       }}>
//         <h1 style={{ fontSize: '32px', margin: 0 }}>📚 Learning Path</h1>
//         <p style={{ marginTop: '8px', fontSize: '16px', opacity: 0.9 }}>
//           Personalized learning journey for {topic}
//         </p>
//       </header>

//       <div style={{
//         maxWidth: '100%',
//         margin: '0 auto',
//         backgroundColor: '#fff',
//         borderRadius: '16px',
//         padding: '40px',
//         boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//       }}>
//         <div style={{ marginBottom: '30px', textAlign: 'center' }}>
//           <h2 style={{ fontSize: '28px', marginBottom: '10px', color: '#1f2937' }}>
//             🎉 Congratulations on completing the quiz!
//           </h2>
//           <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '20px' }}>
//             You scored <strong style={{ color: '#10b981' }}>{scorePercentage}%</strong> on the {topic} prerequisites quiz.
//           </p>
//           <button
//             onClick={onBack}
//             style={{
//               padding: '10px 20px',
//               backgroundColor: '#6b7280',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               cursor: 'pointer',
//               fontSize: '16px',
//             }}
//           >
//             ← Back to Quiz
//           </button>
//         </div>

//         {showForm && (
//           <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//             <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#1f2937' }}>
//               📅 Plan Your Learning Journey
//             </h3>
//             <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '30px' }}>
//               How many weeks are you willing to dedicate to mastering {topic}?
//             </p>
//             <form onSubmit={handleLearningPathSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
//               <input
//                 type="number"
//                 value={weeksInput}
//                 onChange={(e) => setWeeksInput(e.target.value)}
//                 placeholder="Enter number of weeks (1-52)"
//                 min="1"
//                 max="52"
//                 style={{
//                   padding: '15px',
//                   width: '100%',
//                   marginBottom: '20px',
//                   border: '2px solid #6366f1',
//                   borderRadius: '8px',
//                   fontSize: '16px',
//                   outline: 'none',
//                 }}
//                 required
//               />
//               <button
//                 type="submit"
//                 style={{
//                   padding: '15px 30px',
//                   backgroundColor: '#10b981',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '8px',
//                   cursor: learningPathLoading ? 'not-allowed' : 'pointer',
//                   opacity: learningPathLoading ? 0.5 : 1,
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                 }}
//                 disabled={learningPathLoading}
//               >
//                 {learningPathLoading ? 'Generating...' : 'Generate Learning Path'}
//               </button>
//             </form>
//           </div>
//         )}

//         {learningPath && (
//           <div style={{ width: '100%' }}>
//             <h2 style={{
//               fontSize: '32px',
//               marginBottom: '40px',
//               textAlign: 'center',
//               fontWeight: 'bold',
//               color: '#1f2937',
//             }}>
//               <span style={{ color: '#4f46e5' }}>Learning Path for</span>{' '}
//               <span style={{
//                 color: '#10b981',
//                 backgroundColor: '#fef3c7',
//                 padding: '4px 12px',
//                 borderRadius: '8px',
//               }}>
//                 {topic}
//               </span>
//             </h2>
            
//             <div className="roadway" style={{
//               position: 'relative',
//               paddingLeft: '40px',
//               paddingRight: '20px',
//               width: '100%',
//             }}>
//               {learningPath.map((week, index) => (
//                 <div key={week.week} className="roadway-item" style={{
//                   marginBottom: '30px',
//                   position: 'relative',
//                   padding: '20px',
//                   background: '#e0f2fe',
//                   border: '2px solid #3b82f6',
//                   borderRadius: '12px',
//                   color: '#1e40af',
//                   boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//                   animation: `fadeIn 0.5s ease-in-out ${index * 0.2}s forwards`,
//                   opacity: '0',
//                   width: '100%',
//                   boxSizing: 'border-box',
//                 }}>
//                   <h3 style={{
//                     fontSize: '24px',
//                     fontWeight: '600',
//                     marginBottom: '15px',
//                     color: '#1f2937',
//                   }}>
//                     Week {week.week}
//                   </h3>
//                   <ul style={{
//                     paddingLeft: '20px',
//                     lineHeight: '1.8',
//                     listStyleType: 'disc',
//                     color: '#374151',
//                     fontSize: '16px',
//                   }}>
//                     {week.tasks.map((task, i) => (
//                       <li key={i} style={{ marginBottom: '8px' }}>
//                         {task}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       <style>{`
//         .roadway::before {
//           content: '';
//           position: absolute;
//           left: 20px;
//           top: 0;
//           bottom: 0;
//           width: 4px;
//           background: linear-gradient(to bottom, #6366f1, #10b981);
//           border-radius: 2px;
//         }
//         .roadway-item::before {
//           content: '';
//           position: absolute;
//           left: -20px;
//           top: 25px;
//           width: 12px;
//           height: 12px;
//           background-color: #10b981;
//           border-radius: 50%;
//           border: 2px solid #e0f2fe;
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LearningPathPage; 
