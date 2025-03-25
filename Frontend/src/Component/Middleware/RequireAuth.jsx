import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Signup from "../SignUp/Signup.jsx"; // ✅ Ensure correct import path

const RequireAuth = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const isUserLoggedIn = localStorage.getItem("userRegistered") === "true";

    useEffect(() => {
        if (!isUserLoggedIn) {
            // ✅ Show modal once after 3 seconds
            const timer = setTimeout(() => {
                setShowModal(true);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isUserLoggedIn]);

    if (isUserLoggedIn) return children; // ✅ Allow access if logged in

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-xl font-bold mb-3">Sign Up to Continue</h2>
                        <Signup /> {/* ✅ Render Signup Form */}
                        <button 
                            className="mt-4 text-red-500 hover:text-red-700"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
            <Navigate to="/login" replace /> {/* 🔴 Redirect if user tries to access protected pages */}
        </>
    );
};

export default RequireAuth;
