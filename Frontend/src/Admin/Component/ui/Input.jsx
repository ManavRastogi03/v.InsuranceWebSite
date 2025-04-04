import React from "react";

const Input = ({ name, type = "text", value, onChange, placeholder, className = "", ...props }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${className}`}
      {...props}
    />
  );
};

export default Input;
