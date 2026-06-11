import LoginForm from "../../Components/forms/LoginForm";
import Navbar from "../../Components/navigation/Navbar";
import Sidebar from "../../Components/navigation/Sidebar";

const Login = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
