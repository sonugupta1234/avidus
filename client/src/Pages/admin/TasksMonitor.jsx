import { useState } from "react";
import AdminCard from "../../Components/admintasks/AdminCard";
import Navbar from "../../Components/navigation/Navbar";
import Sidebar from "../../Components/navigation/Sidebar";

const TasksMonitor = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <Navbar setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <AdminCard />
      </div>
    </div>
  );
};

export default TasksMonitor;
