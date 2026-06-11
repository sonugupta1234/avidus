import React from "react";

const AdminUserLogTable = ({ loading, logs, setUsers }) => {
  const handleStatusToggle = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user._id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user,
      ),
    );

    // API Call
    // await axios.patch(`/admin/users/${id}/status`)
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((user) => user._id !== id));

      // API Call
      // await axios.delete(`/admin/users/${id}`)
    }
  };

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      <h1 className="text-3xl font-bold mb-6">Activity Logs</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left">User</th>
              <th className="p-4 text-left">Role</th>
              <th className="p-4 text-left">Action</th>
              <th className="p-4 text-left">Description</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center p-6">
                  Loading logs...
                </td>
              </tr>
            ) : logs.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No activity logs found
                </td>
              </tr>
            ) : (
              logs.map((log) => (
                <tr key={log._id} className="border-t">
                  {/* User */}
                  <td className="p-4">{log.userId?.name || "System"}</td>

                  {/* Role */}
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        log.userId?.role === "Admin"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {log.userId?.role || "System"}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="p-4">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {log.action}
                    </span>
                  </td>

                  {/* Description */}
                  <td className="p-4">{log.description}</td>

                  {/* Date */}
                  <td className="p-4">
                    {new Date(log.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUserLogTable;
