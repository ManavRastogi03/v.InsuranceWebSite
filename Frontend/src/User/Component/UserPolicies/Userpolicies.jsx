import React, { useEffect, useState } from "react";
import { FaFileDownload, FaSyncAlt } from "react-icons/fa";
import { fetchUserPolicies } from "../../../api/api.js";

const UserPolicies = () => {
  const [policies, setPolicies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPolicies = async () => {
      try {
        const data = await fetchUserPolicies();
        setPolicies(data);
      } catch (error) {
        console.error("Error fetching policies:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPolicies();
  }, []);

  if (loading) return <p className="text-center">Loading policies...</p>;

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Policies</h1>

      <div className="grid gap-6">
        {policies.map((policy) => (
          <div
            key={policy._id}
            className="bg-white rounded-2xl shadow p-5 border-l-4"
            style={{
              borderColor: policy.status === "Active" ? "#22c55e" : "#f87171",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
              <h2 className="text-lg font-semibold">{policy.plan?.name || "Insurance Policy"}</h2>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  policy.status === "Active"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {policy.status}
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-700 mb-4">
              <p><strong>Policy ID:</strong> {policy.policyId}</p>
              <p><strong>Coverage:</strong> ₹{policy.coverageAmount.toLocaleString()}</p>
              <p><strong>Start Date:</strong> {policy.startDate}</p>
              <p><strong>End Date:</strong> {policy.endDate}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              {policy.documentUrl && (
                <a
                  href={policy.documentUrl}
                  className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFileDownload /> View Document
                </a>
              )}
              {policy.status === "Expired" && (
                <button className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow">
                  <FaSyncAlt /> Renew Policy
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPolicies;
