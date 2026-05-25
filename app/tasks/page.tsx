import { Task } from '@/types';
import TaskCard from '@/components/TaskCard';
import { Search, Filter, Plus } from 'lucide-react';

export default function TasksPage() {
  // Mock data
  const tasks: Task[] = [
    { id: '1', projectId: '1', title: 'Implement Auth', description: 'Setup JWT and login/register pages', status: 'In Progress', priority: 'High', dueDate: '2024-03-01' },
    { id: '2', projectId: '1', title: 'Design Dashboard', description: 'Create responsive layout and widgets', status: 'Done', priority: 'Medium', dueDate: '2024-02-25' },
    { id: '3', projectId: '2', title: 'SEO Optimization', description: 'Improve search engine visibility', status: 'To Do', priority: 'Low', dueDate: '2024-03-15' },
  ];

  return (
    <div className=\"space-y-6\">
      <div className=\"flex flex-col md:flex-row md:items-center justify-between gap-4\">
        <h2 className=\"text-2xl font-bold\">Tasks</h2>
        <div className=\"flex items-center space-x-2\">
          <div className=\"relative\">
            <Search className=\"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400\" size={18} />
            <input
              type=\"text\"
              placeholder=\"Search tasks...\"
              className=\"pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 outline-none\"
            />
          </div>
          <button className=\"bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center\">
            <Plus size={18} className=\"mr-1\" /> New Task
          </button>
        </div>
      </div>

      <div className=\"bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden\">
        <div className=\"grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-700\">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
