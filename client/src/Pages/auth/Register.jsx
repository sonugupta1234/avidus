import { useState } from "react";
import RegisterForm from "../../Components/forms/RegisterForm";
import Navbar from "../../Components/navigation/Navbar";
import Sidebar from "../../Components/navigation/Sidebar";

const Register = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen flex flex-col">
      <Navbar setSidebarOpen={setSidebarOpen} />

      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
