import { useEffect, useState } from "react";
import Signup from "../SignUp/Signup.jsx"; // ✅ Ensure correct import path

const RequireAuth = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const isUserLoggedIn = localStorage.getItem("userRegistered") === "true";

    useEffect(() => {
        if (!isUserLoggedIn) {
            const interval = setInterval(() => {
                setShowModal(true); // Show Signup Popup Every 5s
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isUserLoggedIn]);

    return isUserLoggedIn ? children : (
        <>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-xl font-bold">Sign Up to Continue</h2>
                        <Signup /> {/* ✅ Render Signup Form */}
                        <button className="mt-2 text-red-500" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default RequireAuth;
