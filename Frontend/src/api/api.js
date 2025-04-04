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

export const updatePassword = async (passwordData) => {
    try {
      const response = await axios.put("/api/profile/update-password", passwordData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      console.log("API Response:", response.data); 
      return response.data; // ✅ API ka response return karo
    } catch (error) {
      console.error("API Error (updatePassword):", error.response?.data || error.message);

      // ❌ Agar backend error response nahi de raha to default error message return karo
      throw new Error(error.response?.data?.message || "Failed to update password");
    }
  };
  // API calls for insurance companies

  export const addInsuranceCompany = async (companyData) => {
    const formData = new FormData();
    formData.append('companyLogo', companyData.logo); // Attach file
    formData.append('companyName', companyData.name);
    formData.append('contactNumber', companyData.contact);
    formData.append('insurancePlans', JSON.stringify(companyData.plans));
  
    console.log("🚀 Sending Data to API:", {
      companyName: companyData.name,
      contactNumber: companyData.contact,
      insurancePlans: companyData.plans,
      companyLogo: companyData.logo,
    });
  
    try {
      const response = await API.post('/api/insurance/admin/createcompany', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${localStorage.getItem("token")}`, // 🔑 Add Token
        },
      });
  
      console.log("✅ API Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ API Error (addInsuranceCompany):", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to add company");
    }
  };
  // ✅ Fetch All Insurance Companies (GET)
export const getCompanies = async () => {
  try {
      const response = await API.get("api/insurance/companies", {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // 🔑 Auth Token
          },
      });

      console.log("✅ Companies Fetched:", response.data);
      return response.data; // ✅ Return data to be used in frontend
  } catch (error) {
      console.error("❌ API Error (getCompanies):", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to fetch companies");
  }
};
export const deleteInsuranceCompany = async (companyId) => {
  try {
      const response = await API.delete(`/api/insurance/admin/deletecompany/${companyId}`, {
          headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // 🔑 Send Auth Token
          },
      });

      console.log("✅ Company Deleted Successfully:", response.data);
      return response.data; // ✅ Return API Response
  } catch (error) {
      console.error("❌ API Error (deleteInsuranceCompany):", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to delete company");
  }
};
