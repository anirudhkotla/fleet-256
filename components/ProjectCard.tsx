import { Project } from '@/types';
import { Calendar, MoreVertical, Users } from 'lucide-react';

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className=\"bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow\">
      <div className=\"flex justify-between items-start mb-4\">
        <div className={`px-2 py-1 rounded-md text-xs font-semibold ${
          project.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
        }`}>
          {project.status}
        </div>
        <button className=\"text-gray-400 hover:text-gray-600 dark:hover:text-gray-200\">
          <MoreVertical size={18} />
        </button>
      </div>
      <h3 className=\"text-lg font-bold mb-2\">{project.name}</h3>
      <p className=\"text-sm text-gray-500 dark:text-gray-400 mb-6 line-clamp-2\">
        {project.description}
      </p>
      <div className=\"flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700\">
        <div className=\"flex items-center text-xs text-gray-500\">
          <Calendar size={14} className=\"mr-1\" />
          <span>Updated {new Date(project.updatedAt).toLocaleDateString()}</span>
        </div>
        <div className=\"flex -space-x-2\">
          {[1, 2, 3].map((i) => (
            <div key={i} className=\"w-7 h-7 rounded-full border-2 border-white dark:border-gray-800 bg-primary-100 flex items-center justify-center text-[10px] font-bold text-primary-700\">
              U{i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
