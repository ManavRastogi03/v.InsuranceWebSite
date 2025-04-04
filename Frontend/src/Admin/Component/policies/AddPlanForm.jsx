import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react"; // Importing an icon
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";

const AddPlanForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    type: "Health Insurance",
    coverageAmount: "",
    premiumPrice: "",
    duration: "1 Year",
    eligibleMembers: [],
    features: [],
    termsAndConditions: "",
  });

  const insuranceTypes = [
    "Health Insurance",
    "Car Insurance",
    "Life Insurance",
    "Term Insurance",
    "Bike Insurance",
    "Business Insurance",
    "Travel Insurance",
  ];

  const eligibleMembersOptions = [
    "Self",
    "Spouse",
    "Children",
    "Parents",
    "Family Plans",
    "Senior Citizen",
    "For Parents",
    "Women Insurance",
    "Children Insurance",
  ];

  const featuresOptions = ["Cashless Treatment", "24x7 Support", "Free Annual Checkup"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked ? [...prev[name], value] : prev[name].filter((item) => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-xl w-full max-w-lg relative">
      {/* Improved Cross Button */}
      <button
        onClick={() => navigate("/admin/policies")}
        className="absolute top-4 right-4 p-2 bg-gray-200 hover:bg-red-500 hover:text-white rounded-full transition-all duration-300 shadow-md"
      >
        <X size={22} />
      </button>

      <h2 className="text-2xl font-semibold mb-4 text-center">🛡️ Add New Insurance Plan</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" placeholder="Plan Name" value={formData.name} onChange={handleChange} required />
        <textarea
          name="description"
          placeholder="Description"
          className="w-full p-2 border rounded-md"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label className="block font-medium">Insurance Type:</label>
        <select
          name="type"
          className="w-full p-2 border rounded-md"
          value={formData.type}
          onChange={handleChange}
        >
          {insuranceTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        <Input
          type="number"
          name="coverageAmount"
          placeholder="Coverage Amount (₹)"
          value={formData.coverageAmount}
          onChange={handleChange}
          required
        />
        <Input
          type="number"
          name="premiumPrice"
          placeholder="Premium Price (₹)"
          value={formData.premiumPrice}
          onChange={handleChange}
          required
        />

        <label className="block font-medium">Duration:</label>
        <select
          name="duration"
          className="w-full p-2 border rounded-md"
          value={formData.duration}
          onChange={handleChange}
        >
          <option>1 Year</option>
          <option>5 Years</option>
          <option>10 Years</option>
        </select>

        <label className="block font-medium">Eligible Members:</label>
        <div className="flex flex-wrap gap-2">
          {eligibleMembersOptions.map((member) => (
            <label key={member} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="eligibleMembers"
                value={member}
                onChange={handleCheckboxChange}
                className="w-4 h-4"
              />
              <span>{member}</span>
            </label>
          ))}
        </div>

        <label className="block font-medium">Features:</label>
        <div className="flex flex-wrap gap-2">
          {featuresOptions.map((feature) => (
            <label key={feature} className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="features"
                value={feature}
                onChange={handleCheckboxChange}
                className="w-4 h-4"
              />
              <span>{feature}</span>
            </label>
          ))}
        </div>

        <textarea
          name="termsAndConditions"
          placeholder="Terms & Conditions"
          className="w-full p-2 border rounded-md"
          value={formData.termsAndConditions}
          onChange={handleChange}
          required
        />

        <Button type="submit" className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700">
          🚀 Submit Plan
        </Button>
      </form>
    </div>
  );
};

export default AddPlanForm;
