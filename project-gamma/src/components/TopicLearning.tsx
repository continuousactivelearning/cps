import React, { useState } from 'react';
import { Topic, Problem } from '../types';
import { mockProblems } from '../data/mockData';
import { 
  ArrowLeft, 
  Play, 
  CheckCircle, 
  Clock, 
  Target, 
  Lightbulb,
  Code,
  TestTube,
  BookOpen
} from 'lucide-react';

interface TopicLearningProps {
  topic: Topic;
  onBack: () => void;
  onTakeExam: () => void;
}

export const TopicLearning: React.FC<TopicLearningProps> = ({ 
  topic, 
  onBack, 
  onTakeExam 
}) => {
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);
  const [showHints, setShowHints] = useState(false);
  const [code, setCode] = useState('');

  const problems = mockProblems.filter(p => 
    p.category.toLowerCase().includes(topic.name.toLowerCase().split(' ')[0])
  );

  const handleRunCode = () => {
    // Simulate code execution
    alert('Code executed successfully! All test cases passed.');
  };

  const handleSubmitSolution = () => {
    // Simulate solution submission
    alert('Solution submitted! You earned 10 XP.');
  };

  if (selectedProblem) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm border-b border-gray-200 p-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSelectedProblem(null)}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Problems</span>
              </button>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{selectedProblem.title}</h1>
                <div className="flex items-center space-x-2 mt-1">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    selectedProblem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                    selectedProblem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {selectedProblem.difficulty}
                  </span>
                  <span className="text-sm text-gray-600">{selectedProblem.category}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Problem Description */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Problem Description</h2>
                <p className="text-gray-700 leading-relaxed mb-4">{selectedProblem.description}</p>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Example:</h3>
                  {selectedProblem.testCases.map((testCase, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4">
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium text-gray-700">Input: </span>
                          <code className="text-sm bg-gray-200 px-2 py-1 rounded">{testCase.input}</code>
                        </div>
                        <div>
                          <span className="font-medium text-gray-700">Output: </span>
                          <code className="text-sm bg-gray-200 px-2 py-1 rounded">{testCase.expectedOutput}</code>
                        </div>
                        {testCase.explanation && (
                          <div>
                            <span className="font-medium text-gray-700">Explanation: </span>
                            <span className="text-gray-600">{testCase.explanation}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">Hints</h3>
                    <button 
                      onClick={() => setShowHints(!showHints)}
                      className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Lightbulb className="w-4 h-4" />
                      <span>{showHints ? 'Hide' : 'Show'} Hints</span>
                    </button>
                  </div>
                  {showHints && (
                    <div className="space-y-2">
                      {selectedProblem.hints.map((hint, index) => (
                        <div key={index} className="bg-blue-50 border-l-4 border-blue-400 p-3">
                          <p className="text-blue-800 text-sm">{hint}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Code Editor */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-gray-900">Code Editor</h2>
                    <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm">
                      <option>JavaScript</option>
                      <option>Python</option>
                      <option>Java</option>
                      <option>C++</option>
                    </select>
                  </div>
                </div>
                <div className="p-4">
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="// Write your solution here..."
                    className="w-full h-64 font-mono text-sm border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="p-4 border-t border-gray-200 flex space-x-3">
                  <button 
                    onClick={handleRunCode}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <TestTube className="w-4 h-4" />
                    <span>Run Code</span>
                  </button>
                  <button 
                    onClick={handleSubmitSolution}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4" />
                    <span>Submit</span>
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-3">Test Results</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Test Case 1: Passed</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Test Case 2: Not run</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Dashboard</span>
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{topic.name}</h1>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          </div>
          <button 
            onClick={onTakeExam}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Take Exam
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 sticky top-6">
              <h3 className="font-bold text-gray-900 mb-4">Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Completion</span>
                    <span className="font-medium">{topic.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                      style={{ width: `${topic.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <Target className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-blue-600">{topic.problemsSolved}</div>
                    <div className="text-xs text-gray-600">Solved</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <Clock className="w-5 h-5 text-green-500 mx-auto mb-1" />
                    <div className="text-lg font-bold text-green-600">{topic.totalProblems}</div>
                    <div className="text-xs text-gray-600">Total</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Problems List */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Practice Problems</h2>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-500" />
                    <span className="text-sm text-gray-600">{problems.length} problems available</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {problems.map((problem, index) => (
                    <div 
                      key={problem.id}
                      className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-sm transition-all cursor-pointer"
                      onClick={() => setSelectedProblem(problem)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{problem.title}</h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className={`px-2 py-1 rounded text-xs font-medium ${
                                problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                                problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-red-100 text-red-700'
                              }`}>
                                {problem.difficulty}
                              </span>
                              {problem.tags.map(tag => (
                                <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Play className="w-5 h-5 text-blue-500" />
                          <span className="text-sm text-blue-600 font-medium">Solve</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};