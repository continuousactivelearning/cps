import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useUserStore } from "../store/userStore";
import { useState } from "react";

const Navbar = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);
  const username = useUserStore((state) => state.username);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const protectedLink = (path: string) =>
    isAuthenticated ? path : "/register";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-3 fw-bold text-primary">
          LearnFlow
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to={protectedLink(`/dashboard/${username}`)}
                className="nav-link text-white fw-semibold mx-2"
              >
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={protectedLink("/quiz-select")}
                className="nav-link text-white fw-semibold mx-2"
              >
                Take Quiz
              </Link>
            </li>
            <li className="nav-item">
              {/* Direct to dashboard to find recommendation */}
              <Link
                to={protectedLink("/dashboard")}
                className="nav-link text-white fw-semibold mx-2"
              >
                Get Recommendation
              </Link>
            </li>
            {!isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link text-white fw-semibold mx-2"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register"
                    className="btn btn-success px-4 py-2 ms-lg-3"
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="btn btn-danger px-4 py-2 ms-lg-3"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;