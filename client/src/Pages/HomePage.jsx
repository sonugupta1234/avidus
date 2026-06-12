import React, { useState } from "react";

import Navbar from "../Components/navigation/Navbar";
import Sidebar from "../Components/navigation/Sidebar";
import AuthContext from "../Context/AuthContext";
import AdminDashboard from "../Components/admintasks/AdminDashboard";
import UserDashboard from "../Components/usertasks/UserDashboard";
import useAuth from "./hooks/useAuth";

const HomePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user } = useAuth(AuthContext);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <main className="flex-1 overflow-auto">
          {/* Admin Dashboard */}
          {user?.role === "admin" && (
            <div className="h-full p-4 md:p-6">
              <AdminDashboard />
            </div>
          )}

          {/* User Dashboard */}
          {user?.role === "user" && (
            <div className="h-full p-4 md:p-6">
              <UserDashboard />
            </div>
          )}

          {/* Guest Home */}
          {!user && (
            <div className="h-full flex items-center justify-center bg-red-300 px-4">
              <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
                  Welcome to TaskFlow
                </h1>

                <h3 className="text-lg md:text-2xl font-semibold text-gray-700">
                  Login to Create Tasks or View Existing Tasks
                </h3>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
