import React, {  useState } from 'react';
import { Upload, FileText, AlertCircle, CheckCircle, BookOpen, Loader } from 'lucide-react';
import { apiService } from '../services/submitConcernService'; // replace with your real service
import type { Topic, UserProfile } from '../interface/types';
import { useNavigate } from 'react-router-dom';



interface SubmitConcernPageProps {
  enrolledUnder?: string;
  topics: Topic[];
  onClose?: () => void;
  onSubmitStatus?: (status: { type: 'success' | 'error'; message: string }) => void;
}

const SubmitConcernPage: React.FC<SubmitConcernPageProps> = ({ enrolledUnder, topics, onClose, onSubmitStatus }) => {
  const [selectedTopicId, setSelectedTopicId] = useState('');
  const [selectedTopicName, setSelectedTopicName] = useState('');
  const [message, setMessage] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const navigate = useNavigate();

  const handleTopicChange = (value: string) => {
    setSelectedTopicId(value);
    const topic = topics.find((t) => t.id === value);
    if (topic) setSelectedTopicName(topic.name);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile?.type === 'application/pdf') {
      setFile(selectedFile);
      setSubmitStatus(null);
    } else {
      setSubmitStatus({ type: 'error', message: 'Please select a PDF file only.' });
    }
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

    try {
      if (!file) {
        setSubmitStatus({ type: 'error', message: 'Please upload a PDF file.' });
        setSubmitting(false);
        return;
      }

      // Upload PDF file using apiService
     
    } catch (uploadErr) {
      console.error('Upload error:', uploadErr);
      setSubmitStatus({ type: 'error', message: 'Failed to upload PDF file.' });
      setSubmitting(false);
      return;
    }

    // Now submit the concern using the obtained PDF URL
    const res = await apiService.submitConcern({
      topicId: selectedTopicId,
      topicName: selectedTopicName,
      pdf: file, // Pass the file directly if your service handles it
      message,
      status: 'pending', // or any default status
    });

    if (res.success) {
      setSubmitStatus({ type: 'success', message: 'Concern submitted successfully!' });
      onSubmitStatus?.({ type: 'success', message: 'Concern submitted successfully!' });
      setFile(null);
      setMessage('');
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
      <div className="max-w-2xl mx-auto">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-center">
          <AlertCircle className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-yellow-800 mb-2">Enrollment Required</h2>
          <p className="text-yellow-700 mb-4">
            You need to be enrolled under an instructor to submit concerns about quiz questions.
          </p>
          <button
            onClick={() => navigate('/home')}
            className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 font-medium"
          >
            Go to Profile to Enroll
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Submit Concern</h1>
        <p className="mt-2 text-gray-600">Found an issue with a quiz question? Submit your concern with a PDF.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
        {/* Topic Selector */}
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">
            Select Topic <span className="text-red-500">*</span>
          </label>
          <select
            id="topic"
            value={selectedTopicId}
            onChange={(e) => handleTopicChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Describe Your Concern <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Please describe the issue you found with the quiz question."
            required
          />
        </div>

        {/* File Upload */}
        <div>
          <label htmlFor="pdf-upload" className="block text-sm font-medium text-gray-700 mb-2">
            Upload Supporting Document (PDF) <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              id="pdf-upload"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              required
            />
            <label htmlFor="pdf-upload" className="cursor-pointer">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-600 mb-1">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-500">PDF only, max 10MB</p>
            </label>
          </div>
          {file && (
            <div className="mt-3 flex items-center space-x-2 text-sm text-gray-700">
              <FileText className="h-4 w-4 text-blue-600" />
              <span>{file.name}</span>
              <span className="text-gray-500">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
            </div>
          )}
        </div>

        {/* Status Message */}
        {submitStatus && (
          <div
            className={`p-4 rounded-lg ${
              submitStatus.type === 'success' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'
            }`}
          >
            <div className="flex items-start space-x-3">
              {submitStatus.type === 'success' ? (
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-600 mt-0.5" />
              )}
              <p className={`text-sm ${submitStatus.type === 'success' ? 'text-green-700' : 'text-red-700'}`}>
                {submitStatus.message}
              </p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={submitting}
            className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {submitting ? (
              <>
                <Loader className="animate-spin h-4 w-4" />
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <FileText className="h-4 w-4" />
                <span>Submit Concern</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Help Section */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <div className="flex items-start space-x-3">
          <BookOpen className="h-6 w-6 text-blue-600" />
          <div>
            <h3 className="text-lg font-medium text-blue-900 mb-2">Tips for Submitting Concerns</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Be specific about the question</li>
              <li>• Clearly state what is incorrect</li>
              <li>• Upload proof or your explanation</li>
              <li>• Instructors will review and respond</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitConcernPage;
