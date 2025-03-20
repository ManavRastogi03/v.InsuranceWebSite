import React, { useState } from "react";
import { Edit, Eye, EyeOff } from "lucide-react";

const Profile = () => {
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    mobileNo: "123-456-7890",
    gender: "Male",
    profilePic: "https://asset.cloudinary.com/duj6tm4qi/056ccc2af0ad755f3fc50e04993e7ff2",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState("");

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const uploadedPicUrl = URL.createObjectURL(file);
      setUserData({ ...userData, profilePic: uploadedPicUrl });
    }
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }
    alert("Password updated successfully");
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${resetEmail}`);
    setShowForgotPassword(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-300 relative">
        <div className="flex flex-col items-center relative">
          <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-gray-300">
            <img src={userData.profilePic} alt="Profile" className="w-full h-full object-cover" />
            <label htmlFor="file-upload" className="absolute bottom-2 right-2 bg-black bg-opacity-60 px-3 py-1 rounded-full cursor-pointer flex items-center gap-1 hover:bg-opacity-80">
              <Edit size={20} color="white" />
              <span className="text-white text-sm">Edit</span>
            </label>
          </div>
          <input id="file-upload" type="file" accept="image/*" onChange={handleProfilePicChange} className="hidden" />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(userData).map(([key, value]) => (
            key !== "profilePic" && (
              <div key={key} className="border border-gray-300 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700">
                  {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                </label>
                <p className="text-lg">{value}</p>
              </div>
            )
          ))}
        </div>

        <div className="mt-6 p-4 border border-gray-300 rounded-lg text-center">
          <h2 className="text-lg font-semibold">Change Password</h2>
          <form onSubmit={handlePasswordSubmit} className="mt-4">
            {['currentPassword', 'newPassword', 'confirmPassword'].map((field, index) => (
              <div className="mb-4 relative flex items-center" key={index}>
                <label className="block text-sm font-medium text-gray-700 w-full">
                  {field === 'currentPassword' ? 'Current Password' : field === 'newPassword' ? 'New Password' : 'Confirm Password'}
                </label>
                <div className="relative w-full">
                  <input type={showPassword ? "text" : "password"} name={field} value={passwordData[field]} onChange={handlePasswordChange} className="mt-1 p-2 w-full border rounded-lg pr-10" required />
                  <button type="button" className="absolute inset-y-0 right-3 flex items-center justify-center h-full" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            ))}
            <button type="submit" className="mt-4 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Update Password</button>
            <p className="mt-2 text-sm text-gray-500 cursor-pointer hover:text-blue-600" onClick={() => setShowForgotPassword(true)}>Forgot Password?</p>
          </form>
        </div>
      </div>

      {showForgotPassword && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-lg font-semibold">Reset Password</h2>
            <form onSubmit={handleForgotPassword} className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Enter your registered email</label>
              <input type="email" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} className="mt-1 p-2 w-full border rounded-lg" required />
              <div className="flex justify-end mt-4">
                <button type="button" className="mr-2 px-3 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500" onClick={() => setShowForgotPassword(false)}>Cancel</button>
                <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Send Reset Link</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
