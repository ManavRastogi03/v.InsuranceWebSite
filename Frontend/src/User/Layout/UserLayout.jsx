import { Outlet } from "react-router-dom";
import UserSidebar from "../Component/UserSidebar";

const UserDashboardLayout = () => {
  return (
    <div className="flex min-h-screen overflow-x-hidden bg-gray-50">
      {/* Sidebar */}
      <UserSidebar />

      {/* Main Content */}
      <main className="flex-1 w-full p-4 pt-20 lg:pt-8 transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto">
          <Outlet /> {/* Renders nested routes */}
        </div>
      </main>
    </div>
  );
};

export default UserDashboardLayout;
