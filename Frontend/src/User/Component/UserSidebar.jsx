import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaFileAlt,
  FaClipboardList,
  FaCreditCard,
  FaQuestionCircle,
  FaUserCircle,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

const UserSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Auto-close sidebar on route change (mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, link: "/user/dashboard" },
    { name: "Your Policies", icon: <FaFileAlt />, link: "/user/policies" },
    { name: "Claims", icon: <FaClipboardList />, link: "/user/claims" },
    { name: "Payments", icon: <FaCreditCard />, link: "/user/payments" },
    { name: "Help", icon: <FaQuestionCircle />, link: "/user/help" },
    { name: "Profile", icon: <FaUserCircle />, link: "/profile" },
  ];

  return (
    <>
      {/* Mobile Toggle Arrow */}
      <button
        className={`fixed top-5 z-50 text-white bg-green-600 rounded-r-full p-2 shadow-md transition-transform duration-300 lg:hidden ${
          isOpen ? "left-64" : "left-0"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:sticky top-0 left-0 w-64 h-screen bg-white shadow-lg p-5 transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-6 text-center">User Dashboard</h2>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-green-300 hover:bg-green-400 text-white"
                      : "hover:bg-gray-200"
                  }`
                }
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default UserSidebar;
