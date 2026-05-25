const API_BASE_URL = '/api';

export async function apiFetch(endpoint: string, options: RequestInit = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...options.headers,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'An error occurred' }));
    throw new Error(error.message || response.statusText);
  }

  return response.json();
}

export const projectsApi = {
  list: () => apiFetch('/projects'),
  create: (data: any) => apiFetch('/projects', { method: 'POST', body: JSON.stringify(data) }),
  get: (id: string) => apiFetch(`/projects/${id}`),
};

export const tasksApi = {
  list: () => apiFetch('/tasks'),
  create: (data: any) => apiFetch('/tasks', { method: 'POST', body: JSON.stringify(data) }),
  update: (id: string, data: any) => apiFetch(`/tasks/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  delete: (id: string) => apiFetch(`/tasks/${id}`, { method: 'DELETE' }),
};
