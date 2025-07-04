import { useState } from 'react'

interface HeaderProps {
  onSignIn: () => void
  onCreateAccount: () => void
  onProfile: () => void
}

const Header: React.FC<HeaderProps> = ({ onSignIn, onCreateAccount, onProfile }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/src/assets/logo.png" alt="LearnPath Logo" />
          <span>LearnPath</span>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <button onClick={onSignIn}>Sign In</button>
        </nav>
        <div className="user-actions">
          <span>🔥0 Login Streak: 0 days</span>
          <button onClick={onCreateAccount}>Try LearnPath Now</button>
          <div className="dropdown">
            <button>My Profile</button>
            <div className="dropdown-content">
              <button onClick={onProfile}>My Profile</button>
              <a href="#progress">View Progress</a>
              <button>Sign Out</button>
            </div>
          </div>
        </div>
        <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <button onClick={onSignIn}>Sign In</button>
          <button onClick={onCreateAccount}>Try LearnPath Now</button>
          <button onClick={onProfile}>My Profile</button>
          <a href="#progress">View Progress</a>
          <button>Sign Out</button>
        </div>
      )}
    </header>
  )
}

export default Header