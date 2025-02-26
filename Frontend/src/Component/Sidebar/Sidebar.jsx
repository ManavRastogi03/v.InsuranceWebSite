import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-lg p-6">
      {/* User Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://via.placeholder.com/100" // Replace this URL with the user's image URL
          alt="User Profile"
          className="w-24 h-24 rounded-full object-cover mb-2 border-4 border-blue-600"
        />
        <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
        <p className="text-sm text-gray-500">johndoe@example.com</p>
      </div>

      {/* Sidebar Menu */}
      <ul className="space-y-4">
        <li>
          <a href="#" className="flex items-center text-blue-600 font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            Dashboard
          </a>
        </li>

        <li>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l-4-4m0 0l4-4m-4 4h16" />
            </svg>
            Your Policies
          </a>
        </li>

        <li>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-3-3v6" />
            </svg>
            Claims
          </a>
        </li>

        <li>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M8 16h8" />
            </svg>
            Get Help
          </a>
        </li>

        <li>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A5 5 0 0112 15m0 0a5 5 0 016.879 2.804M12 15a3 3 0 11-6 0m0 0h12" />
            </svg>
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
