import React from "react";

export default function RecentActivities() {
  const recentCompanies = [
    { name: "ABC Insurance", date: "2025-03-20" },
    { name: "XYZ Holdings", date: "2025-03-18" },
    { name: "Delta Corp", date: "2025-03-15" },
    { name: "Maverick Ltd", date: "2025-03-12" },
    { name: "Omni Group", date: "2025-03-10" },
  ];

  const recentSubscriptions = [
    { user: "John Doe", plan: "Gold Plan", date: "2025-03-21" },
    { user: "Jane Smith", plan: "Silver Plan", date: "2025-03-20" },
    { user: "Michael Lee", plan: "Platinum Plan", date: "2025-03-18" },
    { user: "Emily Davis", plan: "Basic Plan", date: "2025-03-16" },
  ];

  const claimRequests = [
    { user: "Alice Brown", status: "Pending", date: "2025-03-22" },
    { user: "Robert Johnson", status: "Approved", date: "2025-03-21" },
    { user: "Sophia Martinez", status: "Rejected", date: "2025-03-20" },
    { user: "David Wilson", status: "Pending", date: "2025-03-18" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Latest Companies Added */}
      <div className="bg-white p-5 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-3">Latest Companies Added</h3>
        <ul className="space-y-2">
          {recentCompanies.map((company, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-gray-700 text-sm sm:text-base"
            >
              <span className="truncate">{company.name}</span>
              <span className="text-xs text-gray-500">{company.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Policy Subscriptions */}
      <div className="bg-white p-5 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-3">Recent Policy Subscriptions</h3>
        <ul className="space-y-2">
          {recentSubscriptions.map((subscription, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-gray-700 text-sm sm:text-base"
            >
              <span className="truncate">
                {subscription.user} - {subscription.plan}
              </span>
              <span className="text-xs text-gray-500">{subscription.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Claims Requests */}
      <div className="bg-white p-5 rounded-xl shadow-md">
        <h3 className="text-lg font-semibold mb-3">Claims Requests</h3>
        <ul className="space-y-2">
          {claimRequests.map((claim, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-gray-700 text-sm sm:text-base"
            >
              <span className="truncate">
                {claim.user} - <span className="font-semibold">{claim.status}</span>
              </span>
              <span className="text-xs text-gray-500">{claim.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
