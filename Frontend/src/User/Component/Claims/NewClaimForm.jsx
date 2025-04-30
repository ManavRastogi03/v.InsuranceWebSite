import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fileNewClaim } from "../../../api/api.js"; // adjust path as needed

const NewClaimForm = () => {
  const [form, setForm] = useState({
    policyId: "",
    claimType: "",
    claimAmount: "",
    description: "",
    document: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, document: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fileNewClaim({
        policyId: form.policyId,
        claimType: form.claimType,
        claimAmount: form.claimAmount,
        description: form.description,
        documentFile: form.document,
      });

      alert("Claim submitted successfully!");
      navigate("/user/claims");
    } catch (error) {
      console.error("Error submitting claim:", error);
      alert("Failed to submit claim.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">File a New Claim</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium">Policy ID</label>
          <input
            type="text"
            name="policyId"
            placeholder="Enter Policy ID"
            value={form.policyId}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Claim Type</label>
          <select
            name="claimType"
            value={form.claimType}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select Claim Type</option>
            <option value="Medical">Medical</option>
            <option value="Car Accident">Car Accident</option>
            <option value="Travel">Travel</option>
            <option value="Home">Home</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Claim Amount</label>
          <input
            type="number"
            name="claimAmount"
            placeholder="Enter Claim Amount"
            value={form.claimAmount}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            placeholder="Enter description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-md resize-none h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        <div>
          <label className="block mb-1 font-medium">Upload Document (JPG, PNG, PDF)</label>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={handleFileChange}
            className="w-full"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Claim
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewClaimForm;
