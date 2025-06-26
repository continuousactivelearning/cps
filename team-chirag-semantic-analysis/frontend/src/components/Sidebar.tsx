import React from 'react';

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
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 z-40 flex flex-col transition-all duration-200 ${
        collapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <span className={`font-bold text-lg transition-all ${collapsed ? 'hidden' : 'block'} text-gray-900 dark:text-white`}>
          Chats
        </span>
        <button
          className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
          onClick={onToggle}
          title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? (
            <span className="text-gray-900 dark:text-white">&#9776;</span>
          ) : (
            <span className="text-gray-900 dark:text-white">&#10005;</span>
          )}
        </button>
      </div>
      <button
        className={`m-4 px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition ${
          collapsed ? 'w-8 h-8 p-0 flex items-center justify-center mx-auto' : ''
        }`}
        onClick={onNewChat}
        title="New Chat"
      >
        +
      </button>
      <div className="flex-1 overflow-y-auto px-2">
        <ul>
          {chats.map((chat) => (
            <li
              key={chat.id}
              className={`mb-2 p-2 rounded cursor-pointer transition 
                ${chat.id === activeChatId
                  ? 'bg-blue-100 dark:bg-blue-900 font-semibold'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                } 
                ${collapsed ? 'text-center' : ''} 
                text-gray-900 dark:text-white`}
              onClick={() => onSelectChat(chat.id)}
              title={chat.title}
            >
              {collapsed ? chat.title.charAt(0).toUpperCase() : chat.title}
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};