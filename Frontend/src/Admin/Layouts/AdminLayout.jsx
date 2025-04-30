import { Outlet } from "react-router-dom";
import AdminSidebar from "../Component/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-y-auto bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
