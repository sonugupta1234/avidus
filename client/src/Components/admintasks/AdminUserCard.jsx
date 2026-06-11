import { useState } from "react";
import AdminUserTable from "./AdminUserTable";

const AdminUserCard = () => {
  const [users, setUsers] = useState([
    {
      _id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "User",
      status: "Active",
    },
    {
      _id: "2",
      name: "Sarah Smith",
      email: "sarah@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      _id: "3",
      name: "Admin",
      email: "admin@example.com",
      role: "Admin",
      status: "Active",
    },
  ]);

  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      <AdminUserTable users={users} setUsers={setUsers} />
    </div>
  );
};

export default AdminUserCard;
