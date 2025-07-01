import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Step0_ChooseLanguage from '../components/InitialSetup/Step0_ChooseLanguage';
import Step1_BasicQuizStart from '../components/InitialSetup/Step1_BasicQuizStart';
import Step2_Assessment from '../components/InitialSetup/Step2_Assessment';


interface Quiz {
  quizId: string;
  userScore: number;
  userAnswers: string[];
}

interface Course {
  courseId: string;
  courseName: string;
  status: 'completed' | 'enrolled' | 'in-progress';
  result: number;
}

interface UserDashboard {
  _id: string;
  name: string;
  email: string;
  role: string;
  lang: string;
  quizzes: any[];
  customQuizzes: any[];
  courses: any[];
  createdAt: string;
  updatedAt: string;
}

const InitialSetup: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [dashboard, setDashboard] = useState<UserDashboard | null>(null);
  const [language, setLanguage] = useState<string>('');
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId') || '';

  useEffect(() => {
    // Use axios instead of fetch for consistency
    const fetchUserData = async () => {
      try {
        const res = await axios.get(`/api/users/${userId}`);
        const data: UserDashboard = res.data;
        
        setDashboard(data);
        if (data.lang) setLanguage(data.lang);
        
        // Updated logic for new schema - check all three levels are completed
        const basicQuizDone = data.quizzes && data.lang && (() => {
          const completedLevels = data.quizzes
            .filter((q) => {
              if (!q.quizId || typeof q.quizId !== 'object') return false;
              const level = (q.quizId as any).level;
              const topic = (q.quizId as any).topic;
              const language = (q.quizId as any).language;
              return (
                language?.toLowerCase() === data.lang?.toLowerCase() &&
                (level === 'beginner' || level === 'intermediate' || level === 'advanced') &&
                (topic?.courseName === 'basic' || !topic || Object.keys(topic).length === 0)
              );
            })
            .map((q: any) => (q.quizId as any).level);
          
          // Check if all three levels are completed
          const requiredLevels = ['beginner', 'intermediate', 'advanced'];
          return requiredLevels.every(level => completedLevels.includes(level));
        })();
        
        const assessmentDone = data.courses && data.courses.length > 0 && data.lang;
        const customQuizDone = data.customQuizzes && data.lang && (() => {
          const completedLevels = data.customQuizzes
            .filter((q) => {
              if (!q.quizId || typeof q.quizId !== 'object') return false;
              const level = (q.quizId as any).level;
              return level === 'beginner' || level === 'intermediate' || level === 'advanced';
            })
            .map((q: any) => (q.quizId as any).level);
          
          // Check if all three levels are completed
          const requiredLevels = ['beginner', 'intermediate', 'advanced'];
          return requiredLevels.every(level => completedLevels.includes(level));
        })();
        
        const pathChosen = data.courses && data.courses.filter(c => c.status === 'in-progress').length > 0;

        if (!data.lang) setStep(0);
        else if (!basicQuizDone) setStep(1);
        else if (!assessmentDone) setStep(2);
        else if (!customQuizDone) setStep(3);
        else if (!pathChosen) setStep(4);
        else setStep(5);
      } catch (error) {
        console.error('Error fetching user data:', error);
        // If there's an error, start from language selection
        setStep(0);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const goNext = () => setStep((prev) => prev + 1);

  return (
    <div className=" d-flex flex-column align-items-center justify-content-center min-vh-100">
      <div className="container mt-5 d-flex flex-column align-items-center justify-content-center">
        {/* STEP INDICATOR */}
        <div className="d-flex justify-content-center mb-4">
          {['Lang', 'Basic', 'Assess', 'Custom', 'Path', 'Done'].map((label, index) => (
            <div
              key={index}
              className={`mx-1 px-3 py-2 rounded-pill ${
                index === step
                  ? 'bg-primary text-white'
                  : index < step
                  ? 'bg-success text-white'
                  : 'bg-light text-muted border'
              }`}
              style={{ minWidth: '60px', textAlign: 'center', fontWeight: 'bold' }}
            >
              {index + 1}
            </div>
          ))}
        </div>

        {/* STEP CONTENT */}
        <div className="d-flex card shadow p-4 mb-5 rounded justify-content-center align-items-center">
          {step === 0 && (
            <Step0_ChooseLanguage
              onSelect={async (lang) => {
                setLanguage(lang);
                try {
                  // Use axios instead of fetch for consistency
                  await axios.put(`/api/users/${userId}`, { lang: lang });
                  goNext();
                } catch (error) {
                  console.error('Error saving language:', error);
                  // Still proceed to next step even if there's an error
                  goNext();
                }
              }}
            />
          )}
          {step === 1 && <Step1_BasicQuizStart userId={userId} language={language} onNext={goNext} />}
          {step === 2 && <Step2_Assessment userId={userId} language={language} onNext={goNext} />}
          
        </div>
      </div>
    </div>
  );
};

export default InitialSetup;