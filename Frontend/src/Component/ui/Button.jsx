import React from "react";
import clsx from "clsx";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-5 py-2.5 rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1";

  const variants = {
    primary:
      "bg-green-600 text-white hover:bg-green-400 focus:ring-green-400",
    outline:
      "border border-green-400 text-green-700 hover:bg-gray-100 focus:ring-green-300",
    destructive:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-geen-300",
    ghost:
      "bg-transparent text-green-700 hover:bg-green-100 focus:ring-green-300",
  };

  return (
    <button
      type={type}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
