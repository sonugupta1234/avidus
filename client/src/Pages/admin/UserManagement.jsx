import AdminUserCard from "../../Components/admintasks/AdminUserCard";
import Navbar from "../../Components/navigation/Navbar";
import Sidebar from "../../Components/navigation/Sidebar";

const UserManagement = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <AdminUserCard />
      </div>
    </div>
  );
};

export default UserManagement;
