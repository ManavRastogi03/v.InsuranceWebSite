import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaBuilding, FaFileAlt, FaUser, FaBell, FaBars, FaTimes, FaUserCircle } from "react-icons/fa";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Detect route changes

  // Auto-close sidebar on mobile when route changes
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
      {/* Mobile Toggle Button */}
      <button
        className="lg:hidden fixed top-5 left-5 text-2xl z-50 bg-white p-2 rounded shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div className={`fixed lg:relative top-0 left-0 w-64 h-screen bg-white shadow-lg p-5 transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-6 text-center">Admin Panel</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isActive ? "bg-green-300 hover:bg-green-400 text-white" : "hover:bg-gray-200"
                  }`
                }
              >
                {item.icon} <span className="text-sm font-medium">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 lg:hidden" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default AdminSidebar;
