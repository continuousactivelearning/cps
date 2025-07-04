import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import {  useLocation } from "react-router-dom";
import { Users, BarChart2, Settings, FileText, MessageSquare, Plus, Home, Menu } from "lucide-react";
import "./Sidebar.styles.css";
import { useTheme } from '../contexts/ThemeContext';

const adminLinks = [
  { name: "Dashboard", icon: <Home size={20} />, path: "/admin" },
  { name: "User Management", icon: <Users size={20} />, path: "/admin/users" },
  { name: "Analytics", icon: <BarChart2 size={20} />, path: "/admin/analytics" },
  { name: "System Settings", icon: <Settings size={20} />, path: "/admin/settings" },
  { name: "Messages", icon: <MessageSquare size={20} />, path: "/admin/messages" },
  { name: "Reports", icon: <FileText size={20} />, path: "/admin/reports" },
  { name: "Add New Course", icon: <Plus size={20} />, path: "/admin/add-course" },
];

const AdminSidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const location = useLocation();
  const { darkMode } = useTheme();

  return (
    <aside className={`sidebar admin-sidebar ${collapsed ? "collapsed" : ""} ${darkMode ? "dark" : "light"}`}>
      <div className="sidebar-header">
        {!collapsed && (
          <span style={{ fontWeight: "bold", fontSize: "1.3rem", color: "#2563eb" }}>Admin Panel</span>
        )}
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
          {adminLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  "sidebar-item" + (isActive ? " active" : "")
                }
                title={collapsed ? link.name : ""}
                {...(link.path === "/admin" ? { end: true } : {})}
              >
                <span className="sidebar-icon">{link.icon}</span>
                {!collapsed && <span className="sidebar-label">{link.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar; 
