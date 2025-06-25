import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { useUserStore } from "../store/userStore";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = useAuthStore((state) => state.login);
  const setProfile = useUserStore((state) => state.setProfile);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      if (res.status === 200) {
        const userData = res.data.user;
        login(userData.username);
        setProfile(userData);
        navigate(`/dashboard/${userData.username}`);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="card bg-dark text-white p-4 shadow-lg rounded" style={{ maxWidth: '480px', width: '100%' }}>
      <h2 className="card-title text-center text-primary mb-4 fs-2">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label text-white">Username:</label>
          <input
            id="username"
            type="text"
            className="form-control form-control-lg bg-dark-subtle text-dark-contrast border-secondary"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username" // Added placeholder
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="form-label text-white">Password:</label>
          <input
            id="password"
            type="password"
            className="form-control form-control-lg bg-dark-subtle text-dark-contrast border-secondary"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password" // Added placeholder
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg w-100">Login</button>
      </form>

      {error && <div className="alert alert-danger mt-4 text-center">{error}</div>}
      <p className="mt-4 text-center text-white">
        Don't have an account? <Link to="/register" className="text-info fw-bold">Register here</Link>
      </p>
    </div>
  );
};

export default LoginPage;