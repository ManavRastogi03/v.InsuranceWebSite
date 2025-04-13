import React from "react";
import clsx from "clsx";

const Input = ({
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  className = "",
  ...props
}) => {
  return (
    <input
      id={id || name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="on"
      className={clsx(
        "w-full px-4 py-2 border border-gray-300 rounded-md text-gray-800 placeholder-gray-400",
        "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500",
        "transition-all duration-200",
        className
      )}
      {...props}
    />
  );
};

export default Input;
