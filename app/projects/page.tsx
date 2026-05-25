import { Project } from '@/types';
import ProjectCard from '@/components/ProjectCard';
import { Search, Filter } from 'lucide-react';

export default function ProjectsPage() {
  // Mock data
  const projects: Project[] = [
    { id: '1', name: 'TeamFlow Platform', description: 'Internal project management tool', status: 'Active', createdAt: '2024-01-01', updatedAt: '2024-02-20' },
    { id: '2', name: 'Marketing Site', description: 'Public facing website redesign', status: 'Active', createdAt: '2024-01-15', updatedAt: '2024-02-18' },
    { id: '3', name: 'Mobile App', description: 'iOS and Android task tracker', status: 'Archived', createdAt: '2023-11-01', updatedAt: '2024-01-10' },
  ];

  return (
    <div className=\"space-y-6\">
      <div className=\"flex flex-col md:flex-row md:items-center justify-between gap-4\">
        <h2 className=\"text-2xl font-bold\">Projects</h2>
        <div className=\"flex items-center space-x-2\">
          <div className=\"relative\">
            <Search className=\"absolute left-3 top-1/2 -translate-y-1/2 text-gray-400\" size={18} />
            <input
              type=\"text\"
              placeholder=\"Search projects...\"
              className=\"pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary-500 outline-none\"
            />
          </div>
          <button className=\"p-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors\">
            <Filter size={20} />
          </button>
          <button className=\"bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors\">
            + New Project
          </button>
        </div>
      </div>

      <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6\">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
