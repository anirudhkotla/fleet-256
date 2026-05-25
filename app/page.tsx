import ActivityTimeline from '@/components/ActivityTimeline';

export default function Dashboard() {
  const stats = [
    { label: 'Total Projects', value: 12, color: 'bg-blue-500' },
    { label: 'Active Tasks', value: 48, color: 'bg-green-500' },
    { label: 'Completed', value: 156, color: 'bg-purple-500' },
    { label: 'Team Members', value: 8, color: 'bg-orange-500' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          + New Project
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
            <p className="text-3xl font-bold mt-1">{stat.value}</p>
            <div className={`h-1 w-12 mt-4 rounded-full ${stat.color}`}></div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Recent Projects</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
                  <div>
                    <p className="font-medium">Project TeamFlow {i}</p>
                    <p className="text-xs text-gray-500">Updated 2 hours ago</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Active</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Upcoming Deadlines</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4 p-3 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 rounded-r-lg">
                  <div className="flex-1">
                    <p className="font-medium">Task: Implement Auth {i}</p>
                    <p className="text-xs text-gray-500">Due: Tomorrow</p>
                  </div>
                  <span className="text-xs font-semibold text-red-600">High</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <ActivityTimeline />
        </div>
      </div>
    </div>
  );
}
