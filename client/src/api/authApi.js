import api from "./axiosInstance";

export const registerUser = (data) => api.post("/auth/register", data);

export const loginUser = (data) => api.post("/auth/login", data);

export const createTask = (data) => api.post("/tasks", data);

export const updateTask = (id, data) => api.put(`/tasks/${id}`, data);

export const getAllTask = () => api.get("/tasks");

export const getSingleTask = (id) => api.get(`/tasks/${id}`);

export const deleteTask = (id) => api.delete(`/tasks/${id}`);
