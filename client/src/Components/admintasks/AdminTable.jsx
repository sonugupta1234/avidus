import { useEffect, useState } from "react";

const AdminTable = ({ tasks, handleDelete }) => {
  console.log(tasks, "tasks");
  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Task Monitoring</h1>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-center">Title</th>

              <th className="p-4 text-center">Description</th>

              <th className="p-4 text-center">User</th>

              <th className="p-4 text-center">Status</th>

              <th className="p-4 text-center">Created At</th>

              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tasks?.map((task) => (
              <tr key={task._id} className="border-t">
                <td className="p-4">{task.title}</td>

                <td className="p-4">{task.description}</td>

                <td className="p-4">{task.createdBy.name}</td>

                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      task.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : task.status === "In Progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {task.status}
                  </span>
                </td>

                <td className="p-4">
                  {new Date(task.createdAt).toLocaleDateString("en-GB")}
                </td>

                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {tasks.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-6 text-gray-500">
                  No tasks found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
