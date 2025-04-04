import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash, Plus } from "lucide-react"; // Icons
import Button from "../../Component/ui/Button";
import Table from "../../Component/ui/Table";
import Modal from "../../Component/ui/Modal";

const Policies = () => {
  const navigate = useNavigate();
  const [policies, setPolicies] = useState([
    { id: 1, name: "Health Insurance", type: "Medical", premium: "₹500/year" },
    { id: 2, name: "Car Insurance", type: "Vehicle", premium: "₹300/year" },
    { id: 3, name: "Life Insurance", type: "Life", premium: "₹700/year" },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [policyToDelete, setPolicyToDelete] = useState(null);

  const handleDelete = (id) => {
    setPolicies(policies.filter((policy) => policy.id !== id));
    setModalOpen(false);
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
              key={policy.id}
              className={`text-gray-600 border-b ${
                index % 2 === 0 ? "bg-white" : "bg-gray-100"
              } hover:bg-gray-200 transition-all`}
            >
              <td className="p-3 border">{policy.name}</td>
              <td className="p-3 border">{policy.type}</td>
              <td className="p-3 border">{policy.premium}</td>
              <td className="p-3 flex justify-center gap-3 border">
                <Button
                  variant="primary"
                  className="flex items-center gap-2"
                  onClick={() => navigate(`/admin/edit-policy/${policy.id}`)}
                >
                  <Pencil size={16} /> Edit
                </Button>
                <Button
                  variant="destructive"
                  className="flex items-center gap-2"
                  onClick={() => {
                    setPolicyToDelete(policy.id);
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
