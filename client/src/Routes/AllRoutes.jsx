import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/auth/Login";
import Register from "../Pages/auth/Register";
import Tasks from "../Pages/user/Tasks";
import UserManagement from "../Pages/admin/UserManagement";
import TasksMonitor from "../Pages/admin/TasksMonitor";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route element={<PrivateRoutes />}>
        <Route path="/tasks" element={<Tasks />} />

        <Route path="/admin/tasks" element={<TasksMonitor />} />

        <Route path="/admin/users" element={<UserManagement />} />
      </Route>

      <Route
        path="*"
        element={<div className="p-10 text-center">404 - Page Not Found</div>}
      />
    </Routes>
  );
};

export default AllRoutes;
