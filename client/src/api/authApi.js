import api from "./axiosInstance";

export const registerUser = (data) => api.post("/auth/register", data);

export const loginUser = (data) => api.post("/auth/login", data);

export const createTask = (data) => api.post("/tasks", data);

export const updateTask = (id, data) => api.put(`/tasks/${id}`, data);

export const getAllTask = () => api.get("/tasks");

export const getSingleTask = (id) => api.get(`/tasks/${id}`);

export const deleteTask = (id) => api.delete(`/tasks/${id}`);

export const getAdminDashboard = () => api.get("/admin/dashboard");

export const getAllUsers = () => api.get("/admin/users");

export const deleteUser = (id) => api.delete(`/admin/users/${id}`);

export const updateUserStatus = (id, status) =>
  api.patch(`/admin/users/${id}/status`, {
    status,
  });

export const deleteAdminTask = (id) => api.delete(`/admin/tasks/${id}`);

export const getAdminTasks = () => api.get("/admin/tasks");
