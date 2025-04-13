import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash, Plus } from "lucide-react";
import Button from "../../Component/ui/Button";
import Table from "../../Component/ui/Table";
import Modal from "../../Component/ui/Modal";
import { getAllPolicies, deletePolicy } from "../../../api/api.js"; // ✅ Import API calls

const Policies = () => {
  const navigate = useNavigate();
  const [policies, setPolicies] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [policyToDelete, setPolicyToDelete] = useState(null);

  // ✅ Fetch policies on component mount
  useEffect(() => {
    const fetchPolicies = async () => {
      try {
        const res = await getAllPolicies(); // API call
        console.log("✅ Fetched Policies:", res);
        setPolicies(res.data); // adjust this based on your response structure
        console.log("Policies Data ➡️", res.data);

      } catch (error) {
        console.error("❌ Failed to fetch policies:", error.response || error.message || error);
      }
    };
    

    fetchPolicies();
  }, []);

  // ✅ Delete policy from DB
  const handleDelete = async (id) => {
    try {
      await deletePolicy(id);
      setPolicies((prev) => prev.filter((p) => p._id !== id)); // Remove from UI
      setModalOpen(false);
    } catch (error) {
      console.error("❌ Failed to delete policy:", error.message);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-xl">
      {/* Title & Add Button */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700">📜 Insurance Policies</h2>
        <Button
          variant="primary"
          className="flex items-center gap-2"
          onClick={() => navigate("/admin/addPlan")}
        >
          <Plus size={18} /> Add Policy
        </Button>
      </div>

      {/* Policy List */}
      <Table>
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-3 border">Policy Name</th>
            <th className="p-3 border">Type</th>
            <th className="p-3 border">Premium (₹)</th>
            <th className="p-3 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
        
          {policies.map((policy, index) => (
            <tr
              key={policy._id}
              className={`text-gray-600 border-b ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              } hover:bg-gray-200 transition-all`}
            >
              <td className="p-3 border">{policy.name}</td>
              <td className="p-3 border">{policy.type}</td>
              <td className="p-3 border">{policy.premiumPrice}</td>
              <td className="p-3 flex justify-center gap-3 border">

                <Button
                  variant="destructive"
                  className="flex items-center gap-2"
                  onClick={() => {
                    setPolicyToDelete(policy._id);
                    setModalOpen(true);
                  }}
                >
                  <Trash size={16} /> Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Delete Confirmation Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} title="Confirm Delete">
        <p className="mb-4">Are you sure you want to delete this policy?</p>
        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={() => setModalOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={() => handleDelete(policyToDelete)}>
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Policies;
