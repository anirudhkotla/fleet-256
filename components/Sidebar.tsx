import { LayoutDashboard, FolderKanban, CheckSquare, Users, Settings } from 'lucide-react';
import Link from 'next/link';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
    { icon: FolderKanban, label: 'Projects', href: '/projects' },
    { icon: CheckSquare, label: 'Tasks', href: '/tasks' },
    { icon: Users, label: 'Team', href: '/team' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary-600">TeamFlow</h1>
      </div>
      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;