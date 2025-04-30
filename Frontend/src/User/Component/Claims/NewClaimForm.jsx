import React, { useState } from "react";
import {fileNewClaim} from "../../../api/api.js"; // adjust path as needed

const NewClaimForm = () => {
  const [form, setForm] = useState({
    policyId: "",
    claimType: "",
    claimAmount: "",
    description: "",
    document: null,
  });

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
      const res = await fileNewClaim({
        policyId: form.policyId,
        claimType: form.claimType,
        claimAmount: form.claimAmount,
        description: form.description,
        documentFile: form.document,
      });
  
      alert("Claim submitted successfully!");
      console.log(res);
    } catch (error) {
      console.error("Error submitting claim:", error);
      alert("Failed to submit claim.");
    }
  };
  

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">File a New Claim</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="policyId"
          placeholder="Policy ID"
          value={form.policyId}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <select
          name="claimType"
          value={form.claimType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Claim Type</option>
          <option value="Accident">Accident</option>
          <option value="Health">Health</option>
          <option value="Property">Property</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="number"
          name="claimAmount"
          placeholder="Claim Amount"
          value={form.claimAmount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <input
          type="file"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileChange}
          className="w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Claim
        </button>
      </form>
    </div>
  );
};

export default NewClaimForm;
