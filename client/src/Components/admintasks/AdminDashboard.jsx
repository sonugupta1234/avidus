import { useEffect, useState } from "react";
import { getAdminDashboard } from "../../api/authApi";

const AdminDashboard = () => {
  const [dashboard, setDashboard] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchDashboard = async () => {
    try {
      const res = await getAdminDashboard();

      setDashboard(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  const activitiesPerPage = 4;

  const indexOfLastActivity = currentPage * activitiesPerPage;
  const indexOfFirstActivity = indexOfLastActivity - activitiesPerPage;

  const currentActivities =
    dashboard?.recentActivities?.slice(
      indexOfFirstActivity,
      indexOfLastActivity,
    ) || [];

  const totalPages = Math.ceil(
    (dashboard?.recentActivities?.length || 0) / activitiesPerPage,
  );

  if (!dashboard) {
    return (
      <div className="h-screen flex items-center font-bold text-2xl justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm">Total Users</h3>

          <p className="text-3xl font-bold text-blue-600 mt-2">
            {dashboard.totalUsers}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm">Total Tasks</h3>

          <p className="text-3xl font-bold text-purple-600 mt-2">
            {dashboard.totalTasks}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm">Completed Tasks</h3>

          <p className="text-3xl font-bold text-green-600 mt-2">
            {dashboard.completedTasks}
          </p>
        </div>

        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-gray-500 text-sm">Pending Tasks</h3>

          <p className="text-3xl font-bold text-yellow-600 mt-2">
            {dashboard.pendingTasks}
          </p>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Recent Activities Logs</h2>
        </div>

        <div className="p-4">
          {currentActivities.length > 0 ? (
            <ul className="space-y-3">
              {currentActivities.map((activity) => (
                <li key={activity._id} className="border-b pb-2">
                  <div className="font-medium">
                    User:- {activity.userId?.name}
                  </div>

                  <div className="text-gray-600">{activity.description}</div>

                  <div className="text-sm text-gray-400">
                    Created At:-{" "}
                    {new Date(activity.createdAt).toLocaleDateString("en-GB")}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No recent activities found.</p>
          )}
        </div>
        <div className="flex justify-center items-center gap-2 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous
          </button>

          <span className="font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
