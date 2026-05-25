import { CheckCircle2, MessageSquare, PlusCircle, UserPlus } from 'lucide-react';

const ActivityTimeline = () => {
  const activities = [
    { id: 1, type: 'task', icon: CheckCircle2, color: 'text-green-500', user: 'Alice Freeman', action: 'completed task', target: 'Design System Update', time: '2 hours ago' },
    { id: 2, type: 'comment', icon: MessageSquare, color: 'text-blue-500', user: 'Bob Smith', action: 'commented on', target: 'API Integration', time: '4 hours ago' },
    { id: 3, type: 'project', icon: PlusCircle, color: 'text-purple-500', user: 'John Doe', action: 'created new project', target: 'Mobile App V2', time: 'Yesterday' },
    { id: 4, type: 'team', icon: UserPlus, color: 'text-orange-500', user: 'Sarah Chen', action: 'joined the team', target: '', time: '2 days ago' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
      <h3 className="text-lg font-semibold mb-6">Activity Timeline</h3>
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 dark:before:via-gray-700 before:to-transparent">
        {activities.map((activity) => (
          <div key={activity.id} className="relative flex items-start space-x-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm z-10">
              <activity.icon size={18} className={activity.color} />
            </div>
            <div className="flex-1 pt-1.5">
              <p className="text-sm">
                <span className="font-bold">{activity.user}</span> {activity.action}{' '}
                <span className="font-medium text-primary-600">{activity.target}</span>
              </p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;
