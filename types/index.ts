export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'To Do' | 'In Progress' | 'Review' | 'Done';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'Active' | 'Archived';
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  dueDate: string;
  assigneeId?: string;
}