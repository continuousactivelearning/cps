import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import GoogleTranslateWidget from "./GoogleTranslateWidget";

const Navbar: React.FC = () => {
  const { userId, logout } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
      <Link className="navbar-brand" to="/">
        DSA Recommendation System
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
        <ul className="navbar-nav ms-auto">
          {userId ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/initial-setup">
                  Initial Setup
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-light ms-2"
                  style={{ cursor: "pointer" }}
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-light ms-2"
                  style={{ cursor: "pointer" }}
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="ms-3">
          <GoogleTranslateWidget />
        </div>
    </nav>
  );
};

export default Navbar;
