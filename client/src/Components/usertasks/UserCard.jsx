import { useEffect, useState } from "react";

import UserTable from "./UserTable";
import UserModal from "../Modals/UserModal";
import { getAllTask } from "../../api/authApi";

const UserCard = () => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const res = await getAllTask();
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

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

      <UserTable tasks={tasks} fetchTasks={fetchTasks} />
      {showModal && (
        <UserModal
          onClose={() => setShowModal(false)}
          fetchTasks={fetchTasks}
        />
      )}
    </div>
  );
};

export default UserCard;
