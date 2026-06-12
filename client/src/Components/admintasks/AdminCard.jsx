import { useEffect, useState } from "react";
import AdminTable from "./AdminTable";
import { deleteAdminTask, getAdminTasks } from "../../api/authApi";
import { showError, showSuccess } from "../../utils/toast";

const AdminCard = () => {
  const [tasks, setTasks] = useState([]);
  const fetchTasks = async () => {
    try {
      const res = await getAdminTasks();
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await deleteAdminTask(id);
      showSuccess(res.data.message);
      fetchTasks();
    } catch (error) {
      console.log(error);
      showError(error);
    }
  };

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      <AdminTable tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
};

export default AdminCard;
