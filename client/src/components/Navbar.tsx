import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useUserStore } from "../store/userStore";
import { useState } from "react";

const Navbar = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const username = useUserStore((state) => state.username);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const protectedLink = (path: string) =>
    isAuthenticated ? path : "/register";

  return (
    <nav style={{
      backgroundColor: '#2a2a2a',
      padding: '1rem 2rem',
      borderBottom: '1px solid #444444',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      boxSizing: 'border-box',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100,
      boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span style={{
          fontSize: '2.2em',
          fontWeight: 'bold',
          color: '#a872e6'
        }}>
          LearnFlow
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }} className="hidden md:flex">
        <Link
          to={protectedLink(`/dashboard/${username}`)}
          style={{ color: '#e0e0e0', textDecoration: 'none', fontWeight: 600, fontSize: '1.05em' }}
        >
          Dashboard
        </Link>
        <Link
          to={protectedLink("/quiz-select")}
          style={{ color: '#e0e0e0', textDecoration: 'none', fontWeight: 600, fontSize: '1.05em' }}
        >
          Take Quiz
        </Link>
        <Link
            to={protectedLink("/recommend")}
            style={{ color: '#e0e0e0', textDecoration: 'none', fontWeight: 600, fontSize: '1.05em' }}
            >
              Get Recommendation
            </Link>

        {!isAuthenticated ? (
          <>
            <Link
              to="/login"
              style={{ color: '#e0e0e0', textDecoration: 'none', fontWeight: 600, fontSize: '1.05em' }}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn btn-secondary"
              style={{ padding: '0.8rem 1.6rem', fontSize: '1em', marginTop: 0 }}
            >
              Sign Up
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="btn btn-danger"
            style={{ padding: '0.8rem 1.6rem', fontSize: '1em', marginTop: 0 }}
          >
            Logout
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div style={{ display: 'flex', alignItems: 'center' }} className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#e0e0e0',
            cursor: 'pointer',
            padding: '0.5rem',
            fontSize: '1.5em',
          }}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          backgroundColor: '#2a2a2a',
          borderTop: '1px solid #444444',
          boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
          padding: '1rem 0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }} className="md:hidden">
          <Link
            to={protectedLink(`/dashboard/${username}`)}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: '#e0e0e0', textDecoration: 'none', fontWeight: 600, fontSize: '1.1em', padding: '0.5rem 1rem', width: '80%', textAlign: 'center', borderRadius: '5px', backgroundColor: '#3a3a3a' }}
          >
            Dashboard
          </Link>
          <Link
            to={protectedLink("/quiz-select")}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: '#e0e0e0', textDecoration: 'none', fontWeight: 600, fontSize: '1.1em', padding: '0.5rem 1rem', width: '80%', textAlign: 'center', borderRadius: '5px', backgroundColor: '#3a3a3a' }}
          >
            Take Quiz
          </Link>
          <Link
            to={protectedLink("/recommend")}
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ color: '#e0e0e0', textDecoration: 'none', fontWeight: 600, fontSize: '1.1em', padding: '0.5rem 1rem', width: '80%', textAlign: 'center', borderRadius: '5px', backgroundColor: '#3a3a3a' }}
            >
              Get Recommendation
            </Link>

          {!isAuthenticated ? (
            <>
              <Link
                to="/login"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ color: '#e0e0e0', textDecoration: 'none', fontWeight: 600, fontSize: '1.1em', padding: '0.5rem 1rem', width: '80%', textAlign: 'center', borderRadius: '5px', backgroundColor: '#3a3a3a' }}
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn btn-secondary"
                style={{ padding: '0.7rem 1.4rem', fontSize: '1em', marginTop: 0, width: '80%' }}
              >
                Sign Up
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="btn btn-danger"
              style={{ padding: '0.7rem 1.4rem', fontSize: '1em', marginTop: 0, width: '80%' }}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
