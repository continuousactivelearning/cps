import React from 'react';
import { useNavigate } from "react-router-dom";
import { logout } from '../utils/auth';
// You can use any icon library. Here, we use Heroicons SVGs for demonstration.
const ChatIcon = () => (
  <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.8L3 21l1.8-4A7.97 7.97 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);
const PlusIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);
const CollapseIcon = ({ collapsed }: { collapsed: boolean }) => (
  collapsed ? (
    <svg className="w-6 h-6 text-gray-900 dark:text-white transition-transform duration-200 rotate-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ) : (
    <svg className="w-6 h-6 text-gray-900 dark:text-white transition-transform duration-200 rotate-90" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
);

interface SidebarProps {
  chats: { id: string; title: string }[];
  activeChatId: string;
  onSelectChat: (id: string) => void;
  onNewChat: () => void;
  collapsed: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  chats,
  activeChatId,
  onSelectChat,
  onNewChat,
  collapsed,
  onToggle,
}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate);
  };

  const handleUpdateProfile = () => {
    navigate("/student-profile");
  };

  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-gradient-to-b from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-r border-gray-200 dark:border-gray-700 z-40 flex flex-col shadow-xl transition-all duration-300 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <span className={`font-bold text-lg transition-all ${collapsed ? 'hidden' : 'block'} text-blue-700 dark:text-white tracking-wide`}>
          Chats
        </span>
        <button
          className="p-1 rounded hover:bg-blue-100 dark:hover:bg-gray-800 transition"
          onClick={onToggle}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <CollapseIcon collapsed={collapsed} />
        </button>
      </div>
      <button
        className={`group m-4 px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 shadow-lg transition-all duration-200 flex items-center justify-center ${
          collapsed ? 'w-8 h-8 p-0 mx-auto' : ''
        }`}
        onClick={onNewChat}
        title="New Chat"
      >
        <PlusIcon />
        {!collapsed && <span className="ml-2 font-medium">New Chat</span>}
      </button>
      <div className="flex-1 overflow-y-auto px-2">
        <ul>
          {chats.map((chat) => (
            <li
              key={chat.id}
              className={`mb-2 p-2 rounded cursor-pointer flex items-center gap-2 transition-all duration-200 group relative
                ${chat.id === activeChatId
                  ? 'bg-blue-100 dark:bg-blue-900 font-semibold scale-105 shadow'
                  : 'hover:bg-blue-50 dark:hover:bg-gray-800'
                }
                ${collapsed ? 'justify-center' : ''}
                text-gray-900 dark:text-white`}
              onClick={() => onSelectChat(chat.id)}
              title={collapsed ? chat.title : undefined}
            >
              <ChatIcon />
              {!collapsed && (
                <span className="truncate">{chat.title}</span>
              )}
              {collapsed && (
                <span className="absolute left-full ml-2 w-max bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 z-50">
                  {chat.title}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Bottom actions */}
      <div className={`p-4 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-2 ${collapsed ? "items-center" : ""}`}>
        <button
          className={`w-full flex items-center gap-2 px-3 py-2 rounded text-sm font-medium bg-blue-100 dark:bg-gray-800 hover:bg-blue-200 dark:hover:bg-gray-700 transition ${
            collapsed ? "justify-center px-0" : ""
          }`}
          onClick={handleUpdateProfile}
          title="Update Profile"
        >
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828A2 2 0 019 17H7v-2a2 2 0 012-2z" />
          </svg>
          {!collapsed && <span>Update Profile</span>}
        </button>
        <button
          className={`w-full flex items-center gap-2 px-3 py-2 rounded text-sm font-medium bg-red-100 dark:bg-gray-800 hover:bg-red-200 dark:hover:bg-gray-700 text-red-700 dark:text-red-300 transition ${
            collapsed ? "justify-center px-0" : ""
          }`}
          onClick={handleLogout}
          title="Logout"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v1" />
          </svg>
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </aside>
  );
};