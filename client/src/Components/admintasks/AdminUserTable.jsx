import React from "react";

const AdminUserTable = ({
  users,
  handleDelete,
  handleSearch,
  handleStatusChange,
}) => {
  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">User Management</h1>
      </div>

      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => handleSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 mb-4 w-full max-w-md"
      />

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-center">Name</th>

              <th className="p-4 text-center">Email</th>

              <th className="p-4 text-center">Role</th>

              <th className="p-4 text-center">Status</th>

              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="p-4">{user.name}</td>

                <td className="p-4">{user.email}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.role === "Admin"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>

                <td className="p-4 text-center space-x-2">
                  {user.role !== "admin" ? (
                    <>
                      <button
                        onClick={() =>
                          handleStatusChange(
                            user._id,
                            user.status === "active" ? "inactive" : "active",
                          )
                        }
                        className={`px-3 py-1 rounded text-white ${
                          user.status === "active"
                            ? "bg-yellow-500 hover:bg-yellow-600"
                            : "bg-green-500 hover:bg-green-600"
                        }`}
                      >
                        {user.status === "active" ? "Deactivate" : "Activate"}
                      </button>

                      <button
                        onClick={() => handleDelete(user._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <span className="text-gray-500 font-medium">
                      No Actions
                    </span>
                  )}
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-6 text-gray-500">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUserTable;
