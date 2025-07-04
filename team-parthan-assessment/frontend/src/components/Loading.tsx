import React from 'react';
interface LoadingProps {
  isVisible: boolean;
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ isVisible, message = "Loading..." }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center transition-all duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl flex flex-col items-center space-y-6 max-w-sm mx-4 transform transition-all duration-300 scale-100 animate-fadeIn">

        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-gray-200 dark:border-gray-600"></div>
          <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-500 animate-spin"></div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-800 dark:text-gray-200 text-lg font-semibold animate-pulse">
            {message}
          </p>
          <div className="flex justify-center space-x-1 mt-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
