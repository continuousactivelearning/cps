// components/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home, BarChart2, BookOpen, Book, Award, ThumbsUp, Share2, Menu
} from 'lucide-react';
import './Sidebar.styles.css';
import { useTheme } from '../contexts/ThemeContext';

interface SidebarProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, setCollapsed }) => {
  const location = useLocation();
  const { darkMode } = useTheme();

  const links = [
    { name: 'Home', icon: <Home size={20} />, path: '/dashboard' },
    { name: 'Progress', icon: <BarChart2 size={20} />, path: '/progress' },
    { name: 'My Courses', icon: <BookOpen size={20} />, path: '/my-courses' },
    { name: 'All Courses', icon: <Book size={20} />, path: '/all-courses' },
    { name: 'Achievements', icon: <Award size={20} />, path: '/achievements' },
    { name: 'T6 Project', icon: <ThumbsUp size={20} />, path: '/team-faq' },
    { name: 'Knowledge Graph', icon: <Share2 size={20} />, path: '/knowledge-graph' },
    // {
    //   // to: "/admin/add-course",
    //   // label: "Add New Course",
    //   // icon: <span role="img" aria-label="add-course">➕</span>
    // },
  ];

  return (
    <aside className={`sidebar ${collapsed ? 'collapsed' : ''} ${darkMode ? 'dark' : 'light'}`}>
      <div className="sidebar-header">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="collapse-btn"
          title="Toggle Sidebar"
        >
          <Menu size={20} />
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name}>
                <Link
                  to={link.path}
                  title={collapsed ? link.name : ''}
                  className={`sidebar-item ${isActive ? 'active' : ''}`}
                >
                  <span className="sidebar-icon">{link.icon}</span>
                  {!collapsed && <span className="sidebar-label">{link.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
