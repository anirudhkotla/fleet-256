import { User } from '@/types';
import { Mail, MoreHorizontal, Shield, UserPlus } from 'lucide-react';

export default function TeamPage() {
  const members: User[] = [
    { id: '1', name: 'John Doe', email: 'john@example.com' },
    { id: '2', name: 'Alice Freeman', email: 'alice@example.com' },
    { id: '3', name: 'Bob Smith', email: 'bob@example.com' },
    { id: '4', name: 'Sarah Chen', email: 'sarah@example.com' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Team Members</h2>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center">
          <UserPlus size={18} className="mr-2" /> Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <div key={member.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-700 font-bold text-xl">
                {member.name.charAt(0)}
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal size={20} />
              </button>
            </div>
            <h3 className="text-lg font-bold">{member.name}</h3>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <Mail size={14} className="mr-2" />
              {member.email}
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="flex items-center text-xs font-medium text-gray-600 dark:text-gray-400">
                <Shield size={14} className="mr-1 text-primary-500" />
                {member.id === '1' ? 'Admin' : 'Member'}
              </span>
              <button className="text-xs text-primary-600 font-semibold hover:underline">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
