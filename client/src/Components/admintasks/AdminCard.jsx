import { useState } from "react";

import Navbar from "../navigation/Navbar";
import Sidebar from "../navigation/Sidebar";
import TaskTable from "./AdminTable";

const AdminCard = () => {
  const tasks = [
    {
      id: 1,
      title: "Learn React",
      description: "Complete React Hooks",
      status: "Pending",
      createdAt: "10 Jun 2026",
    },
    {
      id: 2,
      title: "Build API",
      description: "Create auth APIs",
      status: "Completed",
      createdAt: "09 Jun 2026",
    },
  ];

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      <TaskTable tasks={tasks} />
    </div>
  );
};

export default AdminCard;
