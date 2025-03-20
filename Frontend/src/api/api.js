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