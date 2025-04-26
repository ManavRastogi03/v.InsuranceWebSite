import React from "react";

const FormPageLayout = ({ title, image, children }) => {
  return (
    <div className="flex justify-center items-center px-4 py-8 min-h-screen">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-10">
        
        {/* Left Side - Form Section */}
        <div className={`w-full ${image ? "lg:w-2/3" : "lg:w-3/4"} flex flex-col`}>
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center lg:text-left">{title}</h1>
          {children}
        </div>

        {/* Right Side - Image Section */}
        {image && (
          <div className="hidden md:flex w-full lg:w-1/3 justify-center items-center">
            <img
              src={image}
              alt="Illustration"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FormPageLayout;
