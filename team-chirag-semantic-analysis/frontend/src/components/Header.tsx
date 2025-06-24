import SchoolIcon from '@mui/icons-material/School';
import { IconButton, Tooltip } from '@mui/material';
import { MessageCircle, Moon, Sun } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
   <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 ...">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-3" style={{ marginLeft: '5rem' }}>
          <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Query2Concept
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Semantic mapping of learner queries to concept gaps
            </p>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-2">
          {/* 🧑‍🎓 Student Profile Icon */}
          <Tooltip title="Your Student Profile">
            <IconButton
              color="inherit"
              onClick={() => navigate('/student-profile')}
              className="hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
              size="small"
            >
              <SchoolIcon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </IconButton>
          </Tooltip>

          {/* Theme Toggle */}
          <button
            onClick={() => {
              document.documentElement.classList.toggle('dark');
              localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
            }}
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
