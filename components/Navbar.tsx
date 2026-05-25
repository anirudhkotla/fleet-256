import { Bell, Search, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
      <div className="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-3 py-1.5 w-96">
        <Search size={18} className="text-gray-500" />
        <input
          type="text"
          placeholder="Search projects or tasks..."
          className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full outline-none"
        />
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <ThemeToggle />
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
        </button>
        <div className="flex items-center space-x-2 border-l pl-4 border-gray-200 dark:border-gray-700">
          <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white">
            <User size={18} />
          </div>
          <span className="text-sm font-medium hidden sm:inline">John Doe</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
