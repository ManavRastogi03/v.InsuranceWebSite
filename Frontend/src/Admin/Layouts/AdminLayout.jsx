import { Outlet } from "react-router-dom";
import AdminSidebar from "../Component/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar (Left) */}
      <AdminSidebar />

      {/* Main Content (Right) */}
      <div className="flex-1 p-5">
        <Outlet /> {/* Dynamic Page Content */}
      </div>
    </div>
  );
};

export default AdminLayout;
