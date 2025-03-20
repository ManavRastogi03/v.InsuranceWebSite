import React, { useState } from "react";
import { registerUser } from "../../api/api"; // Import API call function
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import Loader from "../../Component/Loader/Loader.jsx"; // Loader component import किया

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      gender: "",
      mobileNo: "",
      role: "user", // default role is user
      adminCode: "", // for admin code input
  });
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Handle Input Change
  const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  // Handle Role Change (User or Admin)
  const handleRoleChange = (e) => {
      setFormData({ ...formData, role: e.target.value });
  };
  
  // Handle Form Submission
  const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
  
      if (formData.role === "admin" && formData.adminCode !== "Wizardsecert") {
          setError("Invalid Admin Code.");
          setLoading(false);
          return;
      }
      if (!/^\d{10}$/.test(formData.mobileNo)) {
        setError("Please enter a valid 10-digit mobile number.");
        setLoading(false);
        return;
      }
      
  
      try {
          const response = await registerUser(formData);
          
          if (!response ||  !response.data || !response.data.userId) {
              throw new Error("Invalid response from server.");
          }
  
          console.log("✅ Registration Successful:", response.data);
  
          localStorage.setItem("userRegistered", "true"); // ✅ Store only if successful
  
          alert("User registered successfully! Redirecting to login...");
  
          setTimeout(() => navigate("/login"), 1500);
      } catch (err) {
          setError(err.message || "Registration failed. Try again.");
      } finally {
          setLoading(false);
      }
  };
  
  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
          <Loader />
        </div>
      )}
      <div className="lg:m-10 flex justify-center items-center min-h-screen">
        <form
          className="relative border border-gray-300 space-y-3 max-w-screen-md mx-auto rounded-md p-6 shadow-xl lg:p-10 bg-transparent"
          onSubmit={handleSubmit}
        >
          <button 
            type="button"
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
            onClick={() => navigate("/")}
          >
            <X size={24} />
          </button>

          <h1 className="mb-6 text-xl font-semibold lg:text-2xl text-center">Join Us Today 🚀</h1>

          {/* Role Selection (User/Admin) */}
          <div>
            <label>Account Type</label>
            <div className="flex items-center gap-4">
              <div>
                <input
                  type="radio"
                  id="user"
                  name="role"
                  value="user"
                  checked={formData.role === "user"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="user" className="ml-2">User</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="admin"
                  name="role"
                  value="admin"
                  checked={formData.role === "admin"}
                  onChange={handleRoleChange}
                />
                <label htmlFor="admin" className="ml-2">Admin</label>
              </div>
            </div>
          </div>
          {/* First Name & Last Name */}
          <div className="grid gap-3 md:grid-cols-2">
            <div>
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="mt-2 h-12 w-full rounded-md border px-3"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="mt-2 h-12 w-full rounded-md border px-3"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Username */}
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Choose a unique username"
              className="mt-2 h-12 w-full rounded-md border px-3"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="mt-2 h-12 w-full rounded-md border px-3"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a secure password"
              className="mt-2 h-12 w-full rounded-md border px-3"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Gender & Mobile Number */}
          <div className="grid gap-3 lg:grid-cols-2">
            <div>
              <label>Gender</label>
              <div className="relative w-full rounded-lg mt-2">
                <select
                  name="gender"
                  className="w-full cursor-pointer rounded-lg border p-2 px-3 text-sm text-gray-700"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="text"
                name="mobileNo"
                placeholder="Enter your mobile number"
                className="mt-2 h-12 w-full rounded-md border px-3"
                value={formData.mobileNo}
                onChange={handleChange}
                required
              />
            </div>
          </div>


          {/* Admin Code (if admin selected) */}
          {formData.role === "admin" && (
            <div>
              <label>Admin Code</label>
              <input
                type="text"
                name="adminCode"
                placeholder="Enter Admin Code"
                className="mt-2 h-12 w-full rounded-md border px-3"
                value={formData.adminCode}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Terms and Conditions */}
          <div className="checkbox">
            <input type="checkbox" id="checkbox1" required />
            <label htmlFor="checkbox1">
              I agree to the <a href="#" className="text-blue-600">Terms and Conditions</a>
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white"
            >
            {loading ? "Processing..." : "Sign Up Now"}
            </button>
          </div>

          {/* Already Have an Account? */}
          <p className="text-center mt-4">
            Already have an account? <a href="/login" className="text-blue-500">Log in</a>
          </p>

          {/* Show Error if Exists */}
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
    </>
  );
};

export default Signup;
