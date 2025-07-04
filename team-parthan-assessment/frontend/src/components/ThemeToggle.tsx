import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { isDarkMode, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(isDarkMode ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={`p-3 rounded-full transition-all duration-200 hover:scale-110 ${
        isDarkMode
          ? 'bg-gray-700 text-yellow-400 hover:bg-gray-700'
          : 'bg-gray-200 text-gray-600 hover:bg-gray-200 '
      }`}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}