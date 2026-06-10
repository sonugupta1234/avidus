import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import UserDashboard from "../Pages/user/Dashboard";
import Tasks from "../Pages/user/Tasks";
import AdminDashboard from "../Pages/admin/Dashboard";
import UserManagement from "../Pages/admin/UserManagement";
import TasksMonitor from "../Pages/admin/TasksMonitor";
import ActivityLogs from "../Pages/admin/ActivityLogs";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<UserDashboard />} />

        <Route path="/tasks" element={<Tasks />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="/admin/users" element={<UserManagement />} />

        <Route path="/admin/tasks" element={<TasksMonitor />} />

        <Route path="/admin/logs" element={<ActivityLogs />} />
      </Route>

      <Route
        path="*"
        element={<div className="p-10 text-center">404 - Page Not Found</div>}
      />
    </Routes>
  );
};

export default AllRoutes;
