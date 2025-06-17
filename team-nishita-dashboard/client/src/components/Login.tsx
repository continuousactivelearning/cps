import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api';
import type { Credentials as FormData } from '../api/api';

interface LoginProps {
  onLogin: (user: { username: string }) => void;
}

const Login = ({ onLogin }: LoginProps) => {
  const [formData, setFormData] = useState<FormData>({ username: "", password: "", role: "user" });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await login(formData);
      localStorage.setItem('token', response.data.access_token);
      onLogin({ username: formData.username });
      navigate('/home');
    } catch (error) {
      console.error(error);
      setStatus("Login failed. Please check your credentials.");
    }
  };

  useEffect(() => {
    document.title = 'Login';
  }, []);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      minHeight: '100vh',
      background: 'linear-gradient(to right, #d4f1f4, #a9def9)'
    }}>
      {status && (
        <div style={{
          position: 'fixed',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#f44336',
          color: 'white',
          padding: '0.75rem 1.25rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          zIndex: 1000
        }}>
          {status}
        </div>
      )}

      <div style={{
        maxWidth: '400px',
        width: '100%',
        backgroundColor: '#ffffffcc',
        borderRadius: '10px',
        padding: '2rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(4px)'
      }}>
        <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem', color: '#2c3e50' }}>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Password</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: '5px',
                  border: '1px solid #ccc'
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                style={{
                  position: 'absolute',
                  right: '0.5rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#0077cc',
                  cursor: 'pointer'
                }}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>

    
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="role" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: '5px',
                border: '1px solid #ccc'
              }}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem',
              backgroundColor: '#0077cc',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
