import React, { useState } from 'react';

function InsuranceForm() {
  const [formData, setFormData] = useState({
    gender: '',
    name: '',
    dob: '',
    mobile: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="text-green-400 font-bold text-lg mb-1">
            "Insurance secures your future against uncertainties."  
          </h2>
        </div>

        {/* Gender Selection */}
        <div className="mb-4">
          <label className="text-gray-700 font-medium mb-2 block">Gender</label>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
                className="mr-2"
              />
              Male
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
                className="mr-2"
              />
              Female
            </label>
          </div>
        </div>

        {/* Name Field */}
        <div className="mb-4">
          <label className="text-gray-700 font-medium mb-2 block">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Date of Birth Field */}
        <div className="mb-4">
          <label className="text-gray-700 font-medium mb-2 block">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Mobile Number Field */}
        <div className="mb-4">
          <label className="text-gray-700 font-medium mb-2 block">Mobile Number</label>
          <div className="flex">
            <select className="border border-gray-300 rounded-l-lg p-2 bg-gray-50 focus:outline-none focus:border-blue-500">
              <option>India</option>
              {/* Add more countries if needed */}
            </select>
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="+91 xxxxxxx676"
              className="w-full border border-gray-300 rounded-r-lg p-2 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-800 text-white font-semibold py-3 rounded-lg hover:bg-green-400 transition duration-200"
        >
          Check Your Premium Now
        </button>

        {/* Footer Note */}
        <p className="text-sm text-gray-500 text-center mt-4">
          <i className="fas fa-lock"></i> We don't spam
        </p>
      </form>
    </div>
  );
}

export default InsuranceForm;
