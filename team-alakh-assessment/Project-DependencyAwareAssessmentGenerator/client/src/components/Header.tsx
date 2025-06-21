import logo from '../assets/react.svg';
import Btn from './BtnRnd';

function Header() {
  return (
    <header className="w-full bg-white shadow-md text-blue-600 flex justify-between items-center px-6 py-3 fixed top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
        <h1 className="text-lg font-semibold text-gray-800">Quiz App</h1>
      </div>

      {/* Custom Action Button */}
      <Btn />
    </header>
  );
}

export default Header;
