import { NavLink } from "react-router-dom";
import useAuth from "../../Pages/hooks/useAuth";
import AuthContext from "../../Context/AuthContext";

const Sidebar = ({ isOpen, setIsOpen }) => {
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
  ];

  const menus = user?.role === "admin" ? adminMenus : userMenus;

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
          fixed md:static
          top-0 left-0
          h-screen
          w-64
          bg-gray-900 text-white
          z-50
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <nav className="p-4 space-y-2 mt-16 md:mt-4">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              onClick={() => setIsOpen(false)}
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
    </>
  );
};

export default Sidebar;
