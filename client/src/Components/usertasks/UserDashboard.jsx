import { useEffect, useState } from "react";
import { getAllTask } from "../../api/authApi";
import AuthContext from "../../Context/AuthContext";
import useAuth from "../../Pages/hooks/useAuth";

const UserDashboard = () => {
  const [tasks, setTasks] = useState([]);

  const { user } = useAuth(AuthContext);

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
      <h1 className="text-3xl font-bold mb-6">Welcome {user.name} 👋</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500">Total Tasks</h3>
          <p className="text-3xl font-bold">{tasks.length}</p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500">Completed</h3>
          <p className="text-3xl font-bold text-green-600">
            {tasks?.filter((el, index) => el.status === "Completed").length}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500">Pending</h3>
          <p className="text-3xl font-bold text-yellow-600">
            {tasks?.filter((el, index) => el.status === "Pending").length}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500">In Progress</h3>
          <p className="text-3xl font-bold text-blue-600">
            {tasks?.filter((el, index) => el.status === "In Progress").length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
