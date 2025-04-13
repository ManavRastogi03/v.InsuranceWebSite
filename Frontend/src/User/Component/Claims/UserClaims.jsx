import { FaFileUpload, FaEye, FaPlusCircle } from "react-icons/fa";

const UserClaims = () => {
  const claims = [
    {
      id: "CLM001",
      type: "Medical",
      amount: "$2,500",
      date: "2024-03-01",
      status: "Submitted",
      documentLink: "/docs/claim-medical.pdf",
    },
    {
      id: "CLM002",
      type: "Car Accident",
      amount: "$5,000",
      date: "2024-01-15",
      status: "Approved",
      documentLink: "/docs/claim-car.pdf",
    },
    {
      id: "CLM003",
      type: "Travel",
      amount: "$1,200",
      date: "2023-12-10",
      status: "Rejected",
      documentLink: "/docs/claim-travel.pdf",
    },
  ];

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

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Your Claims</h1>
        <button className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-xl shadow">
          <FaPlusCircle /> File New Claim
        </button>
      </div>

      <div className="grid gap-6">
        {claims.map((claim) => (
          <div
            key={claim.id}
            className="bg-white rounded-2xl shadow-sm p-5 border-l-4 border-blue-500"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
              <h2 className="text-lg font-semibold">{claim.type}</h2>
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
                <strong>Claim ID:</strong> {claim.id}
              </p>
              <p>
                <strong>Date:</strong> {claim.date}
              </p>
              <p>
                <strong>Amount:</strong> {claim.amount}
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={claim.documentLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-xl shadow"
              >
                <FaEye /> View Document
              </a>
              <button className="inline-flex items-center gap-2 border border-blue-500 text-blue-500 hover:bg-blue-100 text-sm font-medium px-4 py-2 rounded-xl shadow">
                <FaFileUpload /> Upload Docs
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserClaims;
