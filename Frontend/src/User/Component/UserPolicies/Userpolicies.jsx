import React from "react";
import { FaFileDownload, FaSyncAlt } from "react-icons/fa";

const UserPolicies = () => {
  const policies = [
    {
      id: "POL12345",
      type: "Health Insurance",
      coverage: "$100,000",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      status: "Active",
      documentLink: "/docs/health_policy.pdf",
    },
    {
      id: "POL54321",
      type: "Car Insurance",
      coverage: "$50,000",
      startDate: "2023-01-01",
      endDate: "2023-12-31",
      status: "Expired",
      documentLink: "/docs/car_policy.pdf",
    },
  ];

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6">Your Policies</h1>

      <div className="grid gap-6">
        {policies.map((policy) => (
          <div
            key={policy.id}
            className="bg-white rounded-2xl shadow p-5 border-l-4"
            style={{
              borderColor: policy.status === "Active" ? "#22c55e" : "#f87171",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
              <h2 className="text-lg font-semibold">{policy.type}</h2>
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
              <p>
                <strong>Policy ID:</strong> {policy.id}
              </p>
              <p>
                <strong>Coverage:</strong> {policy.coverage}
              </p>
              <p>
                <strong>Start Date:</strong> {policy.startDate}
              </p>
              <p>
                <strong>End Date:</strong> {policy.endDate}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={policy.documentLink}
                className="inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-medium shadow"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFileDownload /> View Document
              </a>
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
