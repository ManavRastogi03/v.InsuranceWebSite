import React from "react";
import clsx from "clsx";

const Label = ({ htmlFor, className = "", children }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={clsx(
        "block text-sm font-medium text-gray-700 mb-1",
        className
      )}
    >
      {children}
    </label>
  );
};

export default Label;
