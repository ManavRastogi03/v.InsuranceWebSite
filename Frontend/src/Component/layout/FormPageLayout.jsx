import React from "react";

const FormPageLayout = ({ title, image, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="max-w-6xl w-full bg-white shadow-lg rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* Left Side: Form Content */}
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">{title}</h2>
          <div>{children}</div>

        {/* Right Side: Dynamic Image */}
        </div>
        <div className="hidden md:block bg-gray-100">
          <img
            src={image}
            alt={title + " Illustration"}
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </div>
  );
};

export default FormPageLayout;
