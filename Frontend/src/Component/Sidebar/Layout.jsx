// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Leftsidebar from './Leftsidebar.jsx';

const Layout = () => {
  return (
    <div className="flex">
      <Leftsidebar />
      <div className="flex-1 p-6">
        <Outlet />  {/* Dynamic content will be rendered here */}
      </div>
    </div>
  );
};

export default Layout;
