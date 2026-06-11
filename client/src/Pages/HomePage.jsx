import React from "react";

import Navbar from "../Components/navigation/Navbar";
import Sidebar from "../Components/navigation/Sidebar";
import AuthContext from "../Context/AuthContext";
import AdminDashboard from "../Components/admintasks/AdminDashboard";
import UserDashboard from "../Components/usertasks/UserDashboard";
import useAuth from "./hooks/useAuth";

const HomePage = () => {
  const { user } = useAuth(AuthContext);

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        {/* Admin */}
        {user?.role === "admin" && (
          <div className="flex-1 overflow-auto">
            <AdminDashboard />
          </div>
        )}

        {/* User */}
        {user?.role === "user" && (
          <div className="flex-1 overflow-auto">
            <UserDashboard />
          </div>
        )}

        {/* Guest */}
        {!user && (
          <div className="flex-1 bg-red-300 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome to TaskFlow
            </h1>

            <h3 className="text-2xl font-semibold text-gray-700">
              Login to Create Tasks or View Existing Tasks
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
