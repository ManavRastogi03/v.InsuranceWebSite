import React from "react";

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2";

  const variants = {
    primary: "bg-blue-500 text-white bg-green-400 hover:bg-green-600 focus:ring-green-700",
    outline: "border border-gray-500 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
    destructive: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
