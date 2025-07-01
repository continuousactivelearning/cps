import React, { useState } from 'react';
import { Upload, FileText, AlertCircle, CheckCircle, BookOpen, Loader, X } from 'lucide-react';
import { apiService } from '../services/submitConcernService'; 
import type { Topic, UserProfile } from '../interface/types';
import { useNavigate } from 'react-router-dom';

interface SubmitConcernPageProps {
  enrolledUnder?: string;
  topics: Topic[];
  onClose?: () => void;
  onSubmitStatus?: (status: { type: 'success' | 'error'; message: string }) => void;
}

const SubmitConcernPage: React.FC<SubmitConcernPageProps> = ({ 
  enrolledUnder, 
  topics, 
  onClose, 
  onSubmitStatus
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState('');
  const [selectedTopicName, setSelectedTopicName] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const navigate = useNavigate();

  const handleTopicChange = (value: string) => {
    setSelectedTopicId(value);
    const topic = topics.find((t) => t.id === value);
    if (topic) setSelectedTopicName(topic.name);
  };

  const validateFile = (selectedFile: File): boolean => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    
    if (selectedFile.type !== 'application/pdf') {
      setSubmitStatus({ type: 'error', message: 'Please select a PDF file only.' });
      return false;
    }
    
    if (selectedFile.size > maxSize) {
      setSubmitStatus({ type: 'error', message: 'File size must be less than 10MB.' });
      return false;
    }
    
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && validateFile(selectedFile)) {
      setFile(selectedFile);
      setSubmitStatus(null);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (validateFile(droppedFile)) {
        setFile(droppedFile);
        setSubmitStatus(null);
      }
    }
  };

  const removeFile = () => {
    setFile(null);
    setSubmitStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTopicId || !message.trim() || !file) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields and upload a PDF file.' });
      return;
    }

    if (!enrolledUnder) {
      setSubmitStatus({ type: 'error', message: 'You must be enrolled under an instructor to submit concerns.' });
      return;
    }

    setSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await apiService.submitConcern({
        topicId: selectedTopicId,
        topicName: selectedTopicName,
        pdf: file,
        message,
        status: 'pending',
      });

      if (res.success) {
        setSubmitStatus({ type: 'success', message: 'Concern submitted successfully!' });
        onSubmitStatus?.({ type: 'success', message: 'Concern submitted successfully!' });
        // Reset form
        setFile(null);
        setMessage('');
        setSelectedTopicId('');
        setSelectedTopicName('');
      } else {
        setSubmitStatus({ type: 'error', message: res.message || 'Submission failed.' });
        onSubmitStatus?.({ type: 'error', message: res.message || 'Submission failed.' });
      }
    } catch (err) {
      console.error('Submit error:', err);
      setSubmitStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  if (!enrolledUnder) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-8 text-center shadow-sm">
          <div className="bg-amber-100 dark:bg-amber-800/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="h-8 w-8 text-amber-600 dark:text-amber-400" />
          </div>
          <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-3">
            Enrollment Required
          </h2>
          <p className="text-amber-800 dark:text-amber-200 mb-6 text-lg leading-relaxed">
            You need to be enrolled under an instructor to submit concerns about quiz questions.
          </p>
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 dark:from-amber-500 dark:to-amber-600 dark:hover:from-amber-600 dark:hover:to-amber-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Go to Profile to Enroll
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 ">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Submit Concern
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Found an issue with a quiz question? Submit your concern with supporting documentation and we'll review it promptly.
        </p>
      </div>
      <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>

      <form 
        onSubmit={handleSubmit} 
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
      >
        <div className="p-8 space-y-8">
          {/* Topic Selector */}
          <div className="space-y-3">
            <label htmlFor="topic" className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
              Select Topic <span className="text-red-500">*</span>
            </label>
            <select
              id="topic"
              value={selectedTopicId}
              onChange={(e) => handleTopicChange(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-gray-100 transition-all duration-200"
              required
            >
              <option value="">Choose a topic...</option>
              {topics.map((topic) => (
                <option key={topic.id} value={topic.id}>
                  {topic.name}
                </option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className="space-y-3">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
              Describe Your Concern <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent text-gray-900 dark:text-gray-100 resize-none transition-all duration-200 placeholder:dark:text-gray-100"
              placeholder="Please provide a detailed description of the issue you found with the quiz question. Include specific details such as question number, what you believe is incorrect, and why."
              required
            />
            <div className="text-right">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {message.length}/1000 characters
              </span>
            </div>
          </div>

          {/* File Upload */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-gray-900 dark:text-gray-100">
              Upload Supporting Document (PDF) <span className="text-red-500">*</span>
            </label>
            <div
              className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 ${
                dragActive
                  ? 'border-blue-500 dark:border-blue-400 bg-blue-50 dark:bg-blue-900/20'
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
              } ${file ? 'bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700' : 'bg-gray-50 dark:bg-gray-700/50'}`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <input
                id="pdf-upload"
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                required
              />
              
              {!file ? (
                <div className="space-y-4">
                  <div className="bg-blue-100 dark:bg-blue-800/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <Upload className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      PDF only, max 10MB
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-green-100 dark:bg-green-800/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <FileText className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
                      {file.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="inline-flex items-center space-x-2 text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 transition-colors"
                  >
                    <X className="h-4 w-4" />
                    <span className="text-sm">Remove file</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Status Message */}
          {submitStatus && (
            <div
              className={`p-4 rounded-xl border ${
                submitStatus.type === 'success' 
                  ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                  : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`rounded-full p-1 ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-100 dark:bg-green-800/30' 
                    : 'bg-red-100 dark:bg-red-800/30'
                }`}>
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  )}
                </div>
                <p className={`text-sm font-medium ${
                  submitStatus.type === 'success' 
                    ? 'text-green-800 dark:text-green-200' 
                    : 'text-red-800 dark:text-red-200'
                }`}>
                  {submitStatus.message}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="bg-gray-50 dark:bg-gray-700/50 px-8 py-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting || !selectedTopicId || !message.trim() || !file}
              className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white px-8 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:transform-none disabled:shadow-lg"
            >
              {submitting ? (
                <>
                  <Loader className="animate-spin h-5 w-5" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <FileText className="h-5 w-5" />
                  <span>Submit Concern</span>
                </>
              )}
            </button>
          </div>
        </div>
      </form>

      {/* Help Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8 shadow-sm">
        <div className="flex items-start space-x-4">
          <div className="bg-blue-100 dark:bg-blue-800/30 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
            <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100">
              Tips for Submitting Concerns
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Be specific about the question number and content',
                'Clearly explain what you believe is incorrect',
                'Upload proof, references, or detailed explanations',
                'Instructors will review and respond within 48 hours'
              ].map((tip, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitConcernPage;