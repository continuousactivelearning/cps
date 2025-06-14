import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/api';
import type { Credentials as FormData } from '../api/api'


interface SignupProps {
  onLogin: (user: { username: string }) => void;
}

const Signup = ({ onLogin }: SignupProps) => {
  const [formData, setFormData] = useState<FormData>({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await signup(formData);
      localStorage.setItem('token', response.data.access_token);
      onLogin({ username: formData.username });
      navigate('/home');
    } catch (error) {
      console.error(error);
      setStatus("Signup failed. Please check your credentials.");
    }
  };

  useEffect(() => {
    document.title = 'Signup';
  }, []);

  return (
    <div className="flex justify-center items-center py-12 px-4 w-full min-h-screen bg-gradient-to-br from-emerald-100 to-blue-200">
      {status && (
        <div className="flex fixed top-20 left-1/2 items-center py-2 px-4 text-white bg-red-500 rounded-lg shadow-lg transition-transform duration-300 transform -translate-x-1/2 animate-slideIn">
          <span>{status}</span>
        </div>
      )}

      <div className="w-full max-w-md rounded-xl shadow-xl bg-white/80 backdrop-blur-sm">
        <div className="p-8 rounded-xl shadow-lg bg-emerald-50/90">
          <div className="mb-1 text-sm font-semibold tracking-wide text-emerald-700 uppercase">Welcome back</div>
          <h2 className="block mt-1 text-2xl font-medium leading-tight text-emerald-800">Signup for an account</h2>
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-emerald-700" htmlFor="username">
                Username
              </label>
              <input
                className="py-2 px-3 w-full rounded-lg border border-emerald-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-emerald-100/50"
                id="username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-emerald-700" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="py-2 px-3 w-full rounded-lg border border-emerald-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-emerald-100/50"
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="flex absolute inset-y-0 right-3 items-center text-emerald-600"
                  onClick={() => setShowPassword((prev) => !prev)}
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            <div>
              <button
                className="py-2 px-4 w-full font-semibold text-white bg-emerald-600 rounded-lg transition-colors duration-300 hover:bg-emerald-700"
                type="submit"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
