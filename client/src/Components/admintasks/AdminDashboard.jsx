import Navbar from "../../Components/navigation/Navbar";
import Sidebar from "../../Components/navigation/Sidebar";

const AdminDashboard = () => {
  const stats = {
    totalUsers: 25,
    totalTasks: 120,
    completedTasks: 75,
    pendingTasks: 45,
  };

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm">Total Users</h3>

          <p className="text-3xl font-bold text-blue-600 mt-2">
            {stats.totalUsers}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm">Total Tasks</h3>

          <p className="text-3xl font-bold text-purple-600 mt-2">
            {stats.totalTasks}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm">Completed Tasks</h3>

          <p className="text-3xl font-bold text-green-600 mt-2">
            {stats.completedTasks}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm">Pending Tasks</h3>

          <p className="text-3xl font-bold text-yellow-600 mt-2">
            {stats.pendingTasks}
          </p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Recent Activities</h2>
        </div>

        <div className="p-4">
          <ul className="space-y-3">
            <li className="border-b pb-2">User John created a task</li>

            <li className="border-b pb-2">User Sarah updated a task</li>

            <li className="border-b pb-2">Admin deactivated a user</li>

            <li className="border-b pb-2">User Mike deleted a task</li>

            <li>User Alex completed a task</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
