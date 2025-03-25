import { Navigate } from "react-router-dom";

const RequireAdminAuth = ({ children }) => {
    const user = JSON.parse(localStorage.getItem("user")); // ✅ Get user from localStorage
    const isAdmin = user?.role === "admin"; // ✅ Check if user is admin

    return isAdmin ? children : <Navigate to="/login" replace />;
};

export default RequireAdminAuth;
