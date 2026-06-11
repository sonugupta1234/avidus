import RegisterForm from "../../Components/forms/RegisterForm";
import Navbar from "../../Components/navigation/Navbar";
import Sidebar from "../../Components/navigation/Sidebar";

const Register = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
