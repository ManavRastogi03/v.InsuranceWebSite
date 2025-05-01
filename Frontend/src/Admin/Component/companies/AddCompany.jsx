import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../Component/ui/Input";
import { addInsuranceCompany, getUnassignedInsurancePlans } from "../../../api/api";
import Button from "../../Component/ui/Button";
import Loader from "../../../Component/Loader/Loader.jsx"; 


const AddCompany = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [companyData, setCompanyData] = useState({
    name: "",
    logo: "",
    contact: "",
    plan: "",
    customPlan: "",
  });
  const [availablePlans, setAvailablePlans] = useState([]); //  New State for available plans

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const plans = await getUnassignedInsurancePlans();
        setAvailablePlans(plans);
      } catch (error) {
        console.error("❌ Error fetching plans:", error);
      }
    };

    fetchPlans();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setCompanyData({
      ...companyData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (companyData.plan === "Custom" && !companyData.customPlan) {
      alert("Please enter a custom plan name.");
      return;
    }

    const companyDataForSubmit = {
      ...companyData,
      plans: companyData.plan === "Custom" 
        ? [companyData.customPlan]
        : [companyData.plan], // plans will be array
    };

    try {
      setLoading(true); 
      await addInsuranceCompany(companyDataForSubmit);
      console.log("✅ Company Added Successfully!");
      navigate("/admin/companies");
    } catch (error) {
      console.error("❌ Error Adding Company:", error);
    } finally {
      setLoading(false); // hide loader
    }
  
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      {loading ? (
    <div className="flex justify-center items-center h-40">
      <Loader />
    </div>
  ) : (
    <>
      {/*  Title */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-black">Add New Insurance Company</h2>
        <button onClick={() => navigate("/admin/companies")} className="text-gray-500 hover:text-black">✖</button>
      </div>

      {/*  Form Start */}
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Company Name */}
        <div>
          <h3 className="text-md font-medium mb-1 text-black">Company Name</h3>
          <Input
            name="name"
            value={companyData.name}
            onChange={handleChange}
            placeholder="Enter company name (e.g., LIC, HDFC Life)"
            required
            className="text-black"
          />
        </div>

       
        <div>
          <h3 className="text-md font-medium mb-1 text-black">Company Logo (Upload Image)</h3>
          <input 
            type="file" 
            accept="image/*"
            className="w-full p-2 border rounded-md text-black"
            name="logo"
            onChange={handleChange} 
          />
        </div>

        {/* 📞 Contact Number */}
        <div>
          <h3 className="text-md font-medium mb-1 text-black">Contact Number</h3>
          <Input
            name="contact"
            value={companyData.contact}
            onChange={handleChange}
            placeholder="Enter contact number (e.g., +91 9876543210)"
            required
            className="text-black"
          />
        </div>

        {/* 📜 Insurance Plans */}
        <div className=" text-black ">
          <h3 className="text-md font-medium mb-1 text-black">Select Insurance Plan</h3>
          <select
            name="plan"
            value={companyData.plan}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="" className="text-gray-500" >Select a plan</option>

            {/* 🔥 Dynamically fetched plans */}
            {availablePlans.map((plan) => (
              <option key={plan._id} value={plan._id} className="text-black">
                {plan.planName}
              </option>
            ))}

            {/* ➕ Custom Plan Option */}
            <option value="Custom">Custom (Enter below)</option>
          </select>
        </div>

        {/* ✏️ Custom Plan Name */}
        {companyData.plan === "Custom" && (
          <div>
            <h3 className="text-md font-medium mb-1 text-black">Custom Plan Name</h3>
            <Input
              name="customPlan"
              value={companyData.customPlan}
              onChange={handleChange}
              placeholder="Enter custom plan name"
              required
              className="text-black"
            />
          </div>
        )}

        {/* 🎯 Buttons */}
        <div className="flex gap-3 mt-4">
          <Button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">
            Add Company
          </Button>
          <Button 
            type="button"
            onClick={() => navigate("/admin/companies")} 
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </Button>
        </div>
      </form>
      </>
    )}
      {/* 📋 Form End */}
    </div>

  );
};

export default AddCompany;
