import { useState } from "react";
import AdminUserLogTable from "./AdminUserLogTable";

const AdminUserLogCard = () => {
  return (
    <div className="flex-1 bg-gray-100 p-6 overflow-auto">
      <AdminUserLogTable />
    </div>
  );
};

export default AdminUserLogCard;
