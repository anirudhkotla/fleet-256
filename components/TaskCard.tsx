import { Task } from '@/types';
import { Calendar, CheckCircle2, Circle, Clock, AlertCircle } from 'lucide-react';

const TaskCard = ({ task }: { task: Task }) => {
  const priorityColors = {
    High: 'text-red-500 bg-red-50 dark:bg-red-900/20',
    Medium: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20',
    Low: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
  };

  const statusIcons = {
    'To Do': Circle,
    'In Progress': Clock,
    'Review': AlertCircle,
    'Done': CheckCircle2,
  };

  const StatusIcon = statusIcons[task.status];

  return (
    <div className=\"p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors flex items-center gap-4\">
      <button className=\"text-gray-400 hover:text-primary-500\">
        <StatusIcon size={20} />
      </button>
      <div className=\"flex-1 min-w-0\">
        <h4 className=\"font-semibold text-sm truncate\">{task.title}</h4>
        <p className=\"text-xs text-gray-500 dark:text-gray-400 truncate\">{task.description}</p>
      </div>
      <div className=\"flex items-center gap-3\">
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
        <div className=\"flex items-center text-xs text-gray-500 whitespace-nowrap\">
          <Calendar size={14} className=\"mr-1\" />
          {new Date(task.dueDate).toLocaleDateString()}
        </div>
        <div className=\"w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-[10px]\">
          JD
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
