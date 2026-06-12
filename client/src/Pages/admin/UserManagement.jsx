import { useState } from "react";
import AdminUserCard from "../../Components/admintasks/AdminUserCard";
import Navbar from "../../Components/navigation/Navbar";
import Sidebar from "../../Components/navigation/Sidebar";

const UserManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <Navbar setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <AdminUserCard />
      </div>
    </div>
  );
};

export default UserManagement;
