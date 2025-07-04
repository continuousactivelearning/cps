import React, { useState } from 'react';
import Sidebar from './Sidebar';

interface SidebarOnlyLayoutProps {
  children: React.ReactNode;
}

const SidebarOnlyLayout: React.FC<SidebarOnlyLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarWidth = collapsed ? 64 : 220;

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-950">
      {/* Sidebar container */}
      <div
        className="transition-all duration-300"
        style={{ width: `${sidebarWidth}px`, minWidth: `${sidebarWidth}px` }}
      >
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 p-6 overflow-auto bg-white dark:bg-gray-950 text-black dark:text-white">
          {children}
        </main>
      </div>
    </div>
  );
};

export default SidebarOnlyLayout;
