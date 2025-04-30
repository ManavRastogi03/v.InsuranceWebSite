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
      console.log(passwordData);
      
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
      const response = await API.get("/api/insurance/companies", {
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
// 🛠️ Create Policy API Call
export const createPlan = async (policyData) => {
    try {
      const response = await API.post("/api/insurance/admin/createinsurance", policyData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // 🔑 Add Token
        },
      });
  
      console.log("✅ Policy Created:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ API Error (createPlan):", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to create policy");
    }
  };
  // ✅ Get All Insurance Policies (GET)
  export const getAllPolicies = async () => {
    try {
      const response = await API.get("/api/plan", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      console.log("✅ Fetched Policies:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ API Error (getAllPolicies):", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to fetch policies");
    }
  };
  
  
// ✅ Delete Insurance Policy (DELETE)
export const deletePolicy = async (policyId) => {
    try {
      const response = await API.delete(`/api/plan/admin/deleteinsurance/${policyId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // 🔑 Token for authentication
        },
      });
  
      console.log("✅ Policy Deleted:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ API Error (deletePolicy):", error.response?.data || error.message);
      throw new Error(error.response?.data?.message || "Failed to delete policy");
    }
  };
  
  // ✅ Fetch All Users with Policies (Admin)
export const getAllUsers = async () => {
  try {
    const response = await API.get("/api/admin/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // 🔐 Auth Token
      },
    });
    console.log("✅ All Users Fetched:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ API Error (getAllUsers):", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch users");
  }
};

// 🔁 Toggle User Status (Active <-> Blocked)
export const toggleUserStatus = async (userId) => {
  try {
    const response = await API.patch(`/api/admin/users/${userId}/status`, {}, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // 🔐 Auth Token
      },
    });
    console.log("🔁 User Status Toggled:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ API Error (toggleUserStatus):", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to toggle user status");
  }
};
export const submitInsuranceForm = async (formData) => {
  try {
    const payload = new FormData();

    // Loop through all fields (including files)
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        payload.append(key, value);
      }
    });

    const token = localStorage.getItem("token");

    // Step 1: Submit the insurance form
    const formResponse = await API.post("/api/insurance/submit", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    console.log("✅ Insurance Form Submitted:", formResponse.data);

    // Step 2: Extract values from response
    const formDataResponse = formResponse.data.data;
    const {
      planId,
      userId,
      _id: formId,
      policyCopy: documentUrl
    } = formDataResponse;
    
    const planIdValue = typeof planId === "object" ? planId._id : planId;
    const userIdValue = typeof userId === "object" ? userId._id : userId;
    // Step 3: Fetch plan details
    const planResponse = await API.get(`/api/plan/${planId}`);
    const planData = planResponse.data?.plan || {};

    console.log("Plan Data:", planData);

    const { coverageAmount, premiumPrice, duration, name, type } = planData;

    // Step 4: Basic validation
    if (!coverageAmount || !premiumPrice || !duration || !name || !type) {
      console.error("❌ Missing necessary fields in plan data");
      return;
    }

    if (!formData.startDate || !formData.endDate) {
      console.error("❌ startDate or endDate missing in formData");
      return;
    }
    

    // Step 5: Generate random policy ID
// Step 5: Generate random policy ID (only ONCE)
// const generatedPolicyId = `POLICY-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

// Debug log BEFORE the request
const policyResponse = await API.post("/api/policies/create", {
  userId: userIdValue,
  planId: planIdValue,
  insuranceFormId: formId,
  coverageAmount: planData.coverageAmount,
  premium: planData.premiumPrice,
  startDate: formData.startDate,
  endDate: formData.endDate,
  documentUrl: documentUrl || null,
}, {
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});


    

    console.log("✅ Policy Created:", policyResponse.data);
    return policyResponse.data;

  } catch (error) {
    console.error("📦 Error during form submission:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to submit insurance form and create policy");
  }
};

// ✅ Fetch Insurance Plans by Company ID
export const fetchPlansByCompanyId = async (companyId) => {
  try {
    const response = await API.get(`/api/insurance/company/${companyId}/plans`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // 🔐 Auth Token
      },
    });

    console.log("✅ Plans for Company:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ API Error (fetchPlansByCompanyId):", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch plans");
  }
};
// ✅ Get Companies by Insurance Type
export const getCompaniesByType = async (type) => {
  try {
    const response = await API.get("/api/insurance/companies/by-type", {
      params: { type },
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // 🔐 Auth Token
      },
    });

    console.log("✅ Companies Filtered by Type:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ API Error (getCompaniesByType):", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch filtered companies");
  }
};
export const getUnassignedInsurancePlans = async () => {
  try {
    const response = await API.get("/api/insurance/unassigned-plans");
    return response.data.data;
  } catch (error) {
    console.error("❌ Error fetching unassigned insurance plans:", error);
    throw error;
  }
};

export const fetchUserPolicies = async () => {
  const token = localStorage.getItem("token");
  const response = await API.get("/api/policies/user", {
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
  return response.data.policies; // adjust key if response format is different
};
export const fileNewClaim = async (data) => {
  try {
    const token = localStorage.getItem("token"); // Or wherever you're storing the token

    const formData = new FormData();
    formData.append("document", data.documentFile);
    formData.append("policyId", data.policyId);
    formData.append("claimType", data.claimType);
    formData.append("claimAmount", data.claimAmount);
    formData.append("description", data.description);
    console.log("frontend",data.policyId);
    

    // Sending the request to the backend
    const res = await API.post('/api/claims', formData, {
      headers: { Authorization: `Bearer ${token}` }
    });

    return res.data; // Return response data if the claim was successfully created
  } catch (error) {
    console.error("Error submitting claim:", error.message);

    // Optionally, you can return an error object or throw it again to propagate the error
    return {
      success: false,
      message: error.response ? error.response.data.message : error.message
    };
  }
};


export const fetchUserClaims = async () => {
  try {
    const token = localStorage.getItem("token");
    
    const response = await API.get("/api/claims/user", {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    });

    return response.data.claims;
  } catch (error) {
    console.error("Error fetching user claims:", error);
    throw error;
  }
};

// ✅ Fetch All Insurance Companies
// export const fetchCompanies = async () => {
//   try {
//     const response = await API.get("/api/insurance/companies", {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       },
//     });

//     console.log("✅ Companies Fetched:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("❌ Error fetching companies:", error.response?.data || error.message);
//     throw new Error(error.response?.data?.message || "Failed to fetch companies");
//   }
// };


