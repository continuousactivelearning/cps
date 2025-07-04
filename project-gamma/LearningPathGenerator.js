// client/src/components/LearningPathGenerator.js
import React, { useState } from 'react';
import axios from 'axios';

function LearningPathGenerator({ token }) {
    const [topic, setTopic] = useState('');
    const [timeConstraint, setTimeConstraint] = useState('1 month');
    const [language, setLanguage] = useState('English');
    const [knowledgeLevel, setKnowledgeLevel] = useState('beginner');
    const [path, setPath] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setPath(null); // Clear previous path
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_API_URL}/learning-paths/generate`,
                { topic, timeConstraint, language, knowledgeLevel },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setPath(response.data.learningPath); // Assuming backend sends 'learningPath' object
        } catch (err) {
            setError(err.response?.data?.message || 'Failed to generate learning path. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Generate New Learning Path</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Topic:</label>
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g., Quantum Physics, Web Development"
                        required
                    />
                </div>
                <div>
                    <label>Time Constraint:</label>
                    <select value={timeConstraint} onChange={(e) => setTimeConstraint(e.target.value)}>
                        <option value="1 week">1 Week</option>
                        <option value="2 weeks">2 Weeks</option>
                        <option value="1 month">1 Month</option>
                        <option value="3 months">3 Months</option>
                        <option value="6 months">6 Months</option>
                    </select>
                </div>
                <div>
                    <label>Language:</label>
                    <input
                        type="text"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        placeholder="e.g., English, Hindi"
                    />
                </div>
                <div>
                    <label>Knowledge Level:</label>
                    <select value={knowledgeLevel} onChange={(e) => setKnowledgeLevel(e.target.value)}>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                    </select>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Generating...' : 'Generate Path'}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            {path && (
                <div style={{ border: '1px solid #ccc', padding: '15px', marginTop: '20px' }}>
                    <h3>Learning Path for: {path.topic}</h3>
                    <p><strong>Estimated Time:</strong> {path.estimatedTime}</p>
                    <p><strong>Knowledge Level:</strong> {path.knowledgeLevel}</p>
                    <p><strong>Language:</strong> {path.language}</p>
                    <h4>Roadmap Steps:</h4>
                    <ul>
                        {path.roadmap && path.roadmap.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ul>
                    <h4>Suggested Resources:</h4>
                    <ul>
                        {path.resources && path.resources.map((resource, index) => (
                            <li key={index}>{resource.name || resource} {resource.url && `(${resource.url})`}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default LearningPathGenerator;
