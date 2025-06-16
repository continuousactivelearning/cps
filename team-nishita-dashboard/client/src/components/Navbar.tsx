import { Link } from 'react-router-dom';
import {
  Leaf,
  LogOut,
  User,
  UserPlus,
  LogIn,
  ChartColumnIncreasing
} from 'lucide-react';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="sticky top-0 z-10 border-b border-green-100 shadow-sm bg-white/60 backdrop-blur-md">
      <div className="container flex justify-between items-center py-3 px-6 mx-auto">
        <Link to="/home" className="group">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg transition-all duration-300 group-hover:from-emerald-500 group-hover:to-green-400">
              <Leaf className="text-white" size={22} />
            </div>
            <span className="text-xl font-bold text-emerald-700 transition-colors duration-200 group-hover:text-emerald-600">
              Personal Learning Path Visualization Dashboard
            </span>
          </div>
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          {!user && (
            <div className="flex items-center space-x-1 md:space-x-3">
              <Link
                to="/login"
                className="flex items-center py-1.5 px-3 text-sm text-emerald-700 rounded-md transition-colors duration-200 hover:text-emerald-900 hover:bg-green-50"
              >
                <LogIn className="mr-1.5 w-4 h-4" />
                <span>Login</span>
              </Link>

              <div className="h-5 border-r border-gray-200"></div>

              <Link
                to="/signup"
                className="flex items-center py-2 px-3 text-sm text-gray-700 hover:text-emerald-700 hover:bg-green-50"
              >
                <UserPlus className="mr-2 w-4 h-4 text-emerald-500" />
                <span>Sign Up</span>
              </Link>
            </div>
          )}

          {user && (
            <div className="flex items-center space-x-2 md:space-x-4">
              <div className="flex items-center py-1 px-3 bg-green-50 rounded-full">
                <User className="mr-1.5 w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-emerald-700">
                  {user.username}
                </span>
              </div>
              <Link
                to="/dashboard"
                className="flex items-center py-1.5 px-3 text-sm text-emerald-700 rounded-md transition-colors duration-200 hover:text-emerald-900 hover:bg-green-50"
              >
                <ChartColumnIncreasing className="mr-1.5 w-4 h-4" />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>

              <button
                onClick={onLogout}
                className="flex items-center py-1.5 px-3 text-white bg-gradient-to-r from-green-400 to-emerald-500 rounded-md shadow-sm transition-all duration-200 hover:from-emerald-500 hover:to-green-500"
              >
                <LogOut className="mr-1.5 w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
};
export default Navbar;
