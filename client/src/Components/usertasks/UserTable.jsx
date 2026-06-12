import React, { useState } from "react";
import UserModal from "../Modals/UserModal";
import { deleteTask, getSingleTask } from "../../api/authApi";
import { showError, showSuccess } from "../../utils/toast";

const UserTable = ({ tasks, fetchTasks }) => {
  const [showModal, setShowModal] = useState(false);
  const [singleUserData, setSingleUserData] = useState({});

  const handleEdit = async (id) => {
    try {
      const singledata = await getSingleTask(id);
      setSingleUserData(singledata.data);
      setShowModal(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteTask(id);
      showSuccess(res.data.message);
      fetchTasks();
    } catch (error) {
      console.log(error);
      showError(error);
    }
  };

  return (
    <>
      {tasks?.length > 0 ? (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-center">Title</th>
                <th className="p-4 text-center">Description</th>
                <th className="p-4 text-center">Status</th>
                <th className="p-4 text-center">Created At</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {tasks?.map((task) => (
                <tr key={task.id} className="border-t">
                  <td className="p-4">{task.title}</td>

                  <td className="p-4">{task.description}</td>

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
                    {new Date(task.createdAt)
                      .toLocaleDateString("en-GB")
                      .replace(/\//g, "-")}
                  </td>

                  <td className="p-4 text-center space-x-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => handleEdit(task._id)}
                    >
                      Edit
                    </button>

                    <button
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      onClick={() => handleDelete(task._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showModal && (
            <UserModal
              onClose={() => setShowModal(false)}
              fetchTasks={fetchTasks}
              singleUserData={singleUserData}
            />
          )}
        </div>
      ) : (
        <h1 className="text-bold text-2xl">No tasks Found Create One.</h1>
      )}
    </>
  );
};

export default UserTable;
