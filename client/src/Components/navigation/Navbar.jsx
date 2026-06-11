import { CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Pages/hooks/useAuth";
import AuthContext from "../../Context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-200 shadow-md px-6 py-4 flex items-center justify-between">
      <Link to="/">
        <h1 className="text-2xl font-bold text-red-600">TaskFlow</h1>
      </Link>
      <div className="relative group">
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition">
          <CiUser size={22} />
        </button>

        <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-lg overflow-hidden z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
          {user ? (
            <>
              <div className="px-4 py-2 border-b text-sm text-gray-600 text-left">
                {user.name}
              </div>

              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-3 hover:bg-gray-100 text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-4 py-3 border-b hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="block px-4 py-3 hover:bg-gray-100"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
