import React from "react";
import AdminSidebar from "./AdminSidebar";
import Navbar from "./Navbar";
import { useTheme } from '../contexts/ThemeContext';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const { darkMode } = useTheme();
  
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <AdminSidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Navbar />
        <div className={`flex-1 p-6 overflow-auto transition-all duration-300 ${darkMode ? 'dark-theme' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout; 