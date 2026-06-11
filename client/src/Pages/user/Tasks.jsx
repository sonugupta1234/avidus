import Navbar from "../../Components/navigation/Navbar";
import Sidebar from "../../Components/navigation/Sidebar";
import UserCard from "../../Components/usertasks/UserCard";

const Tasks = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <UserCard />
      </div>
    </div>
  );
};

export default Tasks;
