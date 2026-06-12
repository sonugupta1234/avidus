import { useState } from "react";
import LoginForm from "../../Components/forms/LoginForm";
import Navbar from "../../Components/navigation/Navbar";
import Sidebar from "../../Components/navigation/Sidebar";

const Login = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <Navbar setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
