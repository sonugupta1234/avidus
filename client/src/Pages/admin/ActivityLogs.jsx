import React from "react";
import Navbar from "../../Components/navigation/Navbar";
import Sidebar from "../../Components/navigation/Sidebar";
import AdminUserLogCard from "../../Components/admintasks/AdminUserLogCard";

const ActivityLogs = () => {
  return;

  <div className="h-screen flex flex-col">
    <Navbar />

    <div className="flex flex-1">
      <Sidebar />

      <AdminUserLogCard />
    </div>
  </div>;
};

export default ActivityLogs;
