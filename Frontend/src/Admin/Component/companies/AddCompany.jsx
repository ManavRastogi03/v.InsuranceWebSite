import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Component/ui/Input";
import  {addInsuranceCompany } from "../../../api/api";
import Button from "../../Component/ui/Button";

const AddCompany = () => {
  const navigate = useNavigate();
  const [companyData, setCompanyData] = useState({
    name: "",
    logo: "",
    contact: "",
    plan: "",
    customPlan: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setCompanyData({
      ...companyData,
      [name]: type === "file" ? files[0] : value, // Handle file input
    });
  };
  
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (companyData.plan === "Custom" && !companyData.customPlan) {
          alert("Please enter a custom plan name.");
          return;
        }
      
        // Convert plans into an array format
        const companyDataForSubmit = {
          ...companyData,
          plans: companyData.plan === "Custom" 
            ? [companyData.customPlan] 
            : [companyData.plan], // Ensure plans is always an array
        };
      
        try {
          await addInsuranceCompany(companyDataForSubmit);
          console.log("✅ Company Added Successfully!");
          navigate("/admin/companies");
        } catch (error) {
          console.error("❌ Error Adding Company:", error);
        }
      };
      
  

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* ✨ Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Add New Insurance Company</h2>
        <button onClick={() => navigate("/admin/companies")} className="text-gray-500 hover:text-black">✖</button>
      </div>

      {/* 📋 Form Start */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* 🏢 Company Name */}
        <div>
          <h3 className="text-md font-medium mb-1">Company Name</h3>
          <Input
            name="name"
            value={companyData.name}
            onChange={handleChange}
            placeholder="Enter company name (e.g., LIC, HDFC Life)"
            required
          />
        </div>

        {/* 🖼️ Logo Upload */}
        <div>
          <h3 className="text-md font-medium mb-1">Company Logo (Upload Image)</h3>
          <input 
            type="file" 
            accept="image/*"
            className="w-full p-2 border rounded-md"
            name="logo"
            onChange={handleChange} 
          />

        </div>

        {/* 📞 Contact Number */}
        <div>
          <h3 className="text-md font-medium mb-1">Contact Number</h3>
          <Input
            name="contact"
            value={companyData.contact}
            onChange={handleChange}
            placeholder="Enter contact number (e.g., +91 9876543210)"
            required
          />
        </div>

        {/* 📜 Insurance Plans */}
        <div>
          <h3 className="text-md font-medium mb-1">Select Insurance Plan</h3>
          <select
            name="plan"
            value={companyData.plan}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-300"
          >
            <option value="" disabled>Select a plan</option>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
            <option value="Gold">Gold</option>
            <option value="Custom">Custom (Enter below)</option>
          </select>
        </div>

        {/* ✏️ Custom Plan Name (If Custom is selected) */}
        {companyData.plan === "Custom" && (
          <div>
            <h3 className="text-md font-medium mb-1">Custom Plan Name</h3>
            <Input
              name="customPlan"
              value={companyData.customPlan}
              onChange={handleChange}
              placeholder="Enter custom plan name"
              required
            />
          </div>
        )}

        {/* 🎯 Buttons */}
        <div className="flex gap-3 mt-4">
          <Button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
            Add Company
          </Button>
          <Button 
              type="button"  // Avoid submitting the form on cancel
              onClick={() => navigate("/admin/companies")} 
              className="bg-gray-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </Button>

        </div>

      </form>
      {/* 📋 Form End */}
    </div>
  );
};

export default AddCompany;
