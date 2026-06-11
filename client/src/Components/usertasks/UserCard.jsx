import { useState } from "react";

import TaskTable from "./UserTable";
import Navbar from "../navigation/Navbar";
import Sidebar from "../navigation/Sidebar";
import TaskModal from "./UserModal";

const UserCard = () => {
  const [showModal, setShowModal] = useState(false);

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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Tasks</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Create Task
        </button>
      </div>

      <TaskTable tasks={tasks} />

      {showModal && <TaskModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default UserCard;
