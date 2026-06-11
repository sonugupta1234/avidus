import { NavLink } from "react-router-dom";
import useAuth from "../../Pages/hooks/useAuth";
import AuthContext from "../../Context/AuthContext";

const Sidebar = () => {
  const { user } = useAuth(AuthContext);

  const userMenus = [
    {
      name: "Tasks",
      path: "/tasks",
    },
  ];

  const adminMenus = [
    {
      name: "Users Management",
      path: "/admin/users",
    },
    {
      name: "Task Monitoring",
      path: "/admin/tasks",
    },
    {
      name: "Activity Logs",
      path: "/admin/logs",
    },
  ];

  const menus = user?.role === "admin" ? adminMenus : userMenus;

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white">
      <nav className="p-4 space-y-2 mt-4">
        {menus.map((menu) => (
          <NavLink
            key={menu.path}
            to={menu.path}
            className={({ isActive }) =>
              `block px-4 py-3 rounded-lg border-b transition ${
                isActive ? "bg-blue-600" : "hover:bg-gray-800"
              }`
            }
          >
            {menu.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
