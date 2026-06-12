import { useState } from "react";
import Navbar from "../../Components/navigation/Navbar";
import Sidebar from "../../Components/navigation/Sidebar";
import UserCard from "../../Components/usertasks/UserCard";

const Tasks = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col">
      <Navbar setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <UserCard />
      </div>
    </div>
  );
};

export default Tasks;
