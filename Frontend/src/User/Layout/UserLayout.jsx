import { Outlet } from "react-router-dom";
import UserSidebar from "../Component/UserSidebar";

const UserLayout = () => {
  return (
    <div className="flex">
      {/* Sidebar (Left) */}
        <UserSidebar/>

      {/* Main Content (Right) */}
      <div className="flex-1 p-5">
        <Outlet /> {/* Dynamic Page Content */}
      </div>
    </div>
  );
};

export default UserLayout;
