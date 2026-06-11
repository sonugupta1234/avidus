import AdminCard from "../../Components/admintasks/AdminCard";
import Navbar from "../../Components/navigation/Navbar";
import Sidebar from "../../Components/navigation/Sidebar";

const TasksMonitor = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <AdminCard />
      </div>
    </div>
  );
};

export default TasksMonitor;
