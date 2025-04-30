import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBuilding,
  FaFileAlt,
  FaUser,
  FaBell,
  FaUserCircle,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, link: "/admin/dashboard" },
    { name: "Companies", icon: <FaBuilding />, link: "/admin/companies" },
    { name: "Policies", icon: <FaFileAlt />, link: "/admin/policies" },
    { name: "Users", icon: <FaUser />, link: "/admin/users" },
    { name: "Notifications", icon: <FaBell />, link: "/admin/notifications" },
    { name: "Profile", icon: <FaUserCircle />, link: "/admin/profile" },
  ];

  return (
    <>
      {/* Sticky Right Toggle Button */}
      <button
        className="fixed top-1/2 right-2 transform -translate-y-1/2 z-50 bg-green-600 text-white p-2 rounded-full shadow-lg lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaAngleRight /> : <FaAngleLeft />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"} lg:translate-x-0 lg:left-0 lg:right-auto lg:relative`}
      >
        <h2 className="text-xl font-bold mb-6 p-4 text-center border-b">Admin Panel</h2>
        <ul className="px-2 space-y-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-green-300 hover:bg-green-400 text-white"
                      : "hover:bg-gray-100 text-gray-800"
                  }`
                }
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      {/* Background Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-40 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
