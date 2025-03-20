import axios from 'axios';

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL, // ✅ Now it uses .env
    withCredentials: true,
});


// 🛠️ Register User API Call
export const registerUser = async (userData) => {
    try {
        const response = await API.post("/api/auth/register", userData);
        return response.data; // ✅ Return Response Data to Handle in Frontend
    } catch (error) {
        console.error("❌ Registration Failed:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Something went wrong");
    }
};
// 🛠️ Login User API Call
export const loginUser = async (credentials) => {
    try {
        const response = await API.post("/api/auth/login", credentials);
        return response.data; // ✅ Return Response Data
    } catch (error) {
        console.error("❌ Login Failed:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Invalid credentials");
    }
};
// 🛠️ Fetch User Profile API Call
export const getUserProfile = async () => {
    try {
        const response = await API.get("/api/profile/me", {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }, // ✅ Send Auth Token
        });
        return response.data; // ✅ Return User Data
    } catch (error) {
        console.error("❌ Error Fetching Profile:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Failed to fetch profile");
    }
};
// 🛠️ Upload Profile Picture API Call
export const uploadProfilePic = async (file) => {
    try {
        const formData = new FormData();
        formData.append("profilePic", file);

        const response = await API.post("/api/profile/upload-profile-pic", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${localStorage.getItem("token")}`, // ✅ Send Auth Token
            },
        });

        return response.data; // ✅ Return updated profile pic URL
    } catch (error) {
        console.error("❌ Profile Picture Upload Failed:", error.response?.data?.message || error.message);
        throw new Error(error.response?.data?.message || "Failed to upload profile picture");
    }
};