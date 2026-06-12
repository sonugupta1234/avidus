import { useEffect, useState } from "react";
import AdminUserTable from "./AdminUserTable";
import { deleteUser, getAllUsers, updateUserStatus } from "../../api/authApi";
import { showError, showSuccess } from "../../utils/toast";

const AdminUserCard = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await getAllUsers();

    setUsers(res.data);
    setFilteredUsers(res.data);
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteUser(id);
      showSuccess(res.data.message);
      fetchUsers();
    } catch (error) {
      console.log(error);
      showError(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (value) => {
    if (!value.trim()) {
      setFilteredUsers(users);
      return;
    }

    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredUsers(filtered);
  };
  const handleStatusChange = async (id, status) => {
    try {
      const res = await updateUserStatus(id, status);
      showSuccess(res.data.message);
      fetchUsers();
    } catch (error) {
      console.log(error);
      showError(error);
    }
  };

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      <AdminUserTable
        users={filteredUsers}
        handleDelete={handleDelete}
        handleSearch={handleSearch}
        handleStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default AdminUserCard;
