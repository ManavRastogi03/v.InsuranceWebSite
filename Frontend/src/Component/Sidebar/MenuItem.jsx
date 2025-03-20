import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ name, icon, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `flex items-center gap-3 p-3 rounded-lg ${isActive ? "text-blue-600 bg-blue-100" : "text-gray-700 hover:bg-gray-100"}`
      }
    >
      {icon}
      {name}
    </NavLink>
  );
};

export default MenuItem;
