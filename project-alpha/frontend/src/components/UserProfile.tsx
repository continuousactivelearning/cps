import React, { useState, useRef } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

interface User {
  id: string;
  username: string;
  email: string;
  role: 'admin' | 'student';
  avatar?: string;
}

interface UserProfileProps {
  user: User;
  onLogout: () => void;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onLogout, onClose }) => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({ username: user.username, password: '' });
  const [avatar, setAvatar] = useState<string | null>(user.avatar || null); // base64 or url
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dark] = useState(false);

  // Helper function to compress image
  const compressImage = (file: File, maxWidth: number = 300, maxHeight: number = 300): Promise<string> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        // Calculate new dimensions
        let { width, height } = img;
        if (width > height) {
          if (width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }
        }
        
        canvas.width = width;
        canvas.height = height;
        
        // Draw and compress
        ctx?.drawImage(img, 0, 0, width, height);
        const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.8); // 80% quality
        resolve(compressedDataUrl);
      };
      
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
    setSuccess('');
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select a valid image file');
        return;
      }
      
      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        setError('Image size must be less than 5MB');
        return;
      }
      
      compressImage(file).then((compressedDataUrl) => {
        setAvatar(compressedDataUrl);
        setError(''); // Clear any previous errors
      }).catch((err) => {
        console.error('Image compression error:', err);
        setError('Failed to compress image');
      });
    }
  };

  const handleRemoveAvatar = () => {
    setAvatar(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSuccess('');
    
    try {
      // Validate username
      if (!formData.username.trim()) {
        setError('Username cannot be empty');
        return;
      }
      
      if (formData.username.length < 3) {
        setError('Username must be at least 3 characters long');
        return;
      }
      
      // Validate password if provided
      if (formData.password && formData.password.length < 6) {
        setError('Password must be at least 6 characters long');
        return;
      }
      
      // Prepare update data
      const updateData: any = {
        username: formData.username.trim()
      };
      
      // Only include password if it's provided
      if (formData.password) {
        updateData.password = formData.password;
      }
      
      // Only include avatar if it's changed
      if (avatar !== (user.avatar || null)) {
        updateData.avatar = avatar;
      }
      
      const response = await axios.put(API_ENDPOINTS.UPDATE_USER(user.id), updateData, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        timeout: 30000 // 30 second timeout
      });
      
      setSuccess('Profile updated successfully!');
      setEditMode(false);
      setFormData({ ...formData, password: '' });
      
      // Update localStorage with new user data
      localStorage.setItem('user', JSON.stringify(response.data));
      
      // Reload the page to reflect changes
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      
    } catch (err: any) {
      console.error('Profile update error:', err);
      
      if (err.response) {
        // Server responded with error
        const errorMessage = err.response.data?.message || 'Failed to update profile';
        setError(errorMessage);
      } else if (err.request) {
        // Network error
        setError('Network error. Please check your connection and try again.');
      } else {
        // Other error
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: dark ? 'rgba(24,24,27,0.95)' : 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '10px',
      transition: 'background 0.3s'
    }}>
      <div style={{
        backgroundColor: dark ? '#23232a' : 'white',
        borderRadius: '16px',
        padding: '24px',
        maxWidth: '340px',
        width: '100%',
        maxHeight: '80vh',
        overflowY: 'auto',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        color: dark ? '#fff' : '#18181b',
        transition: 'background 0.3s, color 0.3s'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '15px',
            right: '20px',
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: dark ? '#fff' : '#666',
            width: '30px',
            height: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = dark ? '#18181b' : '#f3f4f6'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          ×
        </button>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#e0e7ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            fontSize: '32px',
            color: '#6366f1',
            fontWeight: 'bold',
            overflow: 'hidden',
            position: 'relative'
          }}>
            {(avatar || user.avatar) ? (
              <img src={avatar || user.avatar} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
              user.username.charAt(0).toUpperCase()
            )}
            {editMode && (avatar || user.avatar) && (
              <button onClick={handleRemoveAvatar} style={{ position: 'absolute', top: 2, right: 2, background: '#fff', border: 'none', borderRadius: '50%', width: 22, height: 22, color: '#dc2626', fontWeight: 700, cursor: 'pointer', fontSize: 16, boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>×</button>
            )}
          </div>
          {editMode && (
            <>
              <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleAvatarChange} />
              <button onClick={() => fileInputRef.current?.click()} style={{ background: dark ? '#18181b' : '#e0e7ff', color: dark ? '#fff' : '#6366f1', border: 'none', borderRadius: 8, padding: '6px 16px', fontWeight: 600, fontSize: 14, marginBottom: 10, cursor: 'pointer', marginRight: 8 }}>Upload Photo</button>
              {avatar && <button onClick={handleRemoveAvatar} style={{ background: dark ? '#18181b' : '#fef2f2', color: '#dc2626', border: 'none', borderRadius: 8, padding: '6px 16px', fontWeight: 600, fontSize: 14, marginBottom: 10, cursor: 'pointer' }}>Remove</button>}
            </>
          )}
          <h2 style={{
            color: dark ? '#fff' : '#1f2937',
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '8px'
          }}>
            {user.username}
          </h2>
          <span style={{
            backgroundColor: user.role === 'admin' ? (dark ? '#27272a' : '#fef2f2') : (dark ? '#23232a' : '#eef2ff'),
            color: user.role === 'admin' ? '#dc2626' : '#6366f1',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase'
          }}>
            {user.role}
          </span>
        </div>
        <div style={{ marginBottom: '18px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: dark ? '#e5e7eb' : '#6b7280',
            fontWeight: '600',
            fontSize: '12px',
            textTransform: 'uppercase'
          }}>
            Email
          </label>
          <div style={{
            padding: '12px 16px',
            backgroundColor: dark ? '#23232a' : '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '16px',
            color: dark ? '#fff' : '#374151',
            marginBottom: 10
          }}>{user.email}</div>
        </div>
        <div style={{ marginBottom: '18px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: dark ? '#e5e7eb' : '#6b7280',
            fontWeight: '600',
            fontSize: '12px',
            textTransform: 'uppercase'
          }}>
            Username
          </label>
          {editMode ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                marginBottom: 0
              }}
            />
          ) : (
            <div style={{
              padding: '12px 16px',
              backgroundColor: dark ? '#23232a' : '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '16px',
              color: dark ? '#fff' : '#374151'
            }}>{user.username}</div>
          )}
        </div>
        <div style={{ marginBottom: '18px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: dark ? '#e5e7eb' : '#6b7280',
            fontWeight: '600',
            fontSize: '12px',
            textTransform: 'uppercase'
          }}>
            Password
          </label>
          {editMode ? (
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '16px',
                outline: 'none',
                marginBottom: 0
              }}
              placeholder="Enter new password"
            />
          ) : (
            <div style={{
              padding: '12px 16px',
              backgroundColor: dark ? '#23232a' : '#f9fafb',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '16px',
              color: dark ? '#fff' : '#374151',
              letterSpacing: '0.2em'
            }}>••••••••</div>
          )}
        </div>
        <div style={{ marginBottom: '18px' }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: dark ? '#e5e7eb' : '#6b7280',
            fontWeight: '600',
            fontSize: '12px',
            textTransform: 'uppercase'
          }}>
            User ID
          </label>
          <div style={{
            padding: '12px 16px',
            backgroundColor: dark ? '#23232a' : '#f9fafb',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            color: dark ? '#fff' : '#6b7280',
            fontFamily: 'monospace'
          }}>{user.id}</div>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          {editMode ? (
            <>
              <button
                onClick={handleSave}
                disabled={saving}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#6366f1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: saving ? 'not-allowed' : 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                {saving ? 'Saving...' : 'Save'}
              </button>
              <button
                onClick={() => { setEditMode(false); setFormData({ username: user.username, password: '' }); setAvatar(null); setError(''); setSuccess(''); }}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: dark ? '#23232a' : '#f3f4f6',
                  color: dark ? '#fff' : '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setEditMode(true)}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#6366f1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                Edit Profile
              </button>
              <button
                onClick={onLogout}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
              >
                Logout
              </button>
              <button
                onClick={onClose}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: dark ? '#23232a' : '#f3f4f6',
                  color: dark ? '#fff' : '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s'
                }}
              >
                Close
              </button>
            </>
          )}
        </div>
        {error && (
          <div style={{ 
            color: '#dc2626', 
            marginTop: 16, 
            padding: '12px 16px',
            backgroundColor: '#fef2f2',
            border: '1px solid #fecaca',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            ⚠️ {error}
          </div>
        )}
        {success && (
          <div style={{ 
            color: '#16a34a', 
            marginTop: 16, 
            padding: '12px 16px',
            backgroundColor: '#f0fdf4',
            border: '1px solid #bbf7d0',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500'
          }}>
            ✅ {success}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile; 