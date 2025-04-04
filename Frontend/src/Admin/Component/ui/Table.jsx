import React from "react";

const Table = ({ children }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
        {children}
      </table>
    </div>
  );
};

export default Table;
