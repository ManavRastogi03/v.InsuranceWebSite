import { useEffect, useState } from "react";
import { FaEye, FaPlusCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { fetchUserClaims } from "../../../api/api.js";
import Loader from "../../../Component/Loader/Loader.jsx"; // Uncomment if you have a custom loader

const UserClaims = () => {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadClaims = async () => {
      try {
        const data = await fetchUserClaims();
        setClaims(data);
      } catch (err) {
        console.error("Failed to load claims:", err);
      } finally {
        setLoading(false);
      }
    };

    loadClaims();
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "Submitted":
        return "bg-yellow-100 text-yellow-700";
      case "In Review":
        return "bg-blue-100 text-blue-700";
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleNewClaimClick = () => {
    navigate("/user/claims/new");
  };

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Your Claims</h1>
        <button
          onClick={handleNewClaimClick}
          className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-xl shadow"
        >
          <FaPlusCircle /> File New Claim
        </button>
      </div>

      {loading ? (
        // Replace this with your custom <GreenLoader /> if available
        <div className="flex justify-center items-center h-40">
        <Loader/>
        </div>
      ) : (
        <div className="grid gap-6">
          {claims.map((claim) => (
            <div
              key={claim._id}
              className="bg-white rounded-2xl shadow-sm p-5 border-l-4 border-blue-500"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h2 className="text-lg font-semibold">{claim.claimType}</h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                    claim.status
                  )}`}
                >
                  {claim.status}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-gray-700 mb-3">
                <p>
                  <strong>Claim ID:</strong> {claim.claimId}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(claim.createdAt).toLocaleDateString()}
                </p>
                <p>
                  <strong>Amount:</strong> ${claim.claimAmount}
                </p>
              </div>

              <div className="flex gap-3">
                <a
                  href={claim.documentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-xl shadow"
                >
                  <FaEye /> View Document
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserClaims;
