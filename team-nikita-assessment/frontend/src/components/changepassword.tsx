/*CREATED BY NIKITA S RAJ KAPINI(20/06/2025)*/

import React, { useState } from 'react';
import './changepassword.css';

const ChangePassword: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = async () => {
    if (newPassword !== confirmPassword) {
        setMessage('New passwords do not match');
        return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
        setMessage('You must be logged in');
        return;
    }

    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/change-password`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword: oldPassword, newPassword }),
        });

        const data = await res.json();
        setMessage(data.message || 'Password changed');

        if (res.ok) {
        setTimeout(() => onClose(), 1500);
        }
    } catch (err) {
        console.error('Password change error:', err);
        setMessage('Something went wrong');
    }
    };

  return (
    <div className="change-password-modal">
      <div className="modal-content">
        <h3>Change Password</h3>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {message && <p className="message">{message}</p>}
        <div className="modal-actions">
          <button onClick={handleChange}>Submit</button>
          <button className="cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
