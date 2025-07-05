
import { useTheme } from '../context/useTheme';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300 
                 bg-gray-50 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 shadow-md"
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? (
        <MoonIcon className="h-4 md:h-5 w-4 md:w-5 text-gray-700" />
      ) : (
        <SunIcon className="h-4 md:h-5 w-4 md:w-5 text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle;
