import { FaFileAlt, FaClipboardList, FaCreditCard, FaExclamationTriangle } from "react-icons/fa";

const UserDashboard = () => {
  const userName = "John Doe"; // Replace with real user data
  const stats = [
    { label: "Active Policies", count: 3, icon: <FaFileAlt />, bg: "bg-blue-100", text: "text-blue-700" },
    { label: "Pending Claims", count: 2, icon: <FaClipboardList />, bg: "bg-yellow-100", text: "text-yellow-700" },
    { label: "Upcoming Payments", count: 1, icon: <FaCreditCard />, bg: "bg-green-100", text: "text-green-700" },
  ];

  const alerts = [
    "Your policy #12345 will expire in 5 days.",
    "Claim #98765 requires additional documents.",
  ];

  const recentActivity = [
    "Payment of $120 made on April 2, 2025",
    "Filed claim for vehicle damage on March 30, 2025",
    "Renewed health policy on March 15, 2025",
  ];

  return (
    <div className="p-4 md:p-8">
      {/* Welcome */}
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Welcome back, {userName} 👋</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`p-5 rounded-2xl shadow-sm ${stat.bg} ${stat.text} flex items-center gap-4`}
          >
            <div className="text-2xl">{stat.icon}</div>
            <div>
              <div className="text-xl font-semibold">{stat.count}</div>
              <div className="text-sm">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Alerts */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6">
        <div className="flex items-center gap-2 text-red-700 font-semibold mb-2">
          <FaExclamationTriangle />
          Important Alerts
        </div>
        <ul className="list-disc list-inside text-sm text-red-600">
          {alerts.map((alert, i) => (
            <li key={i}>{alert}</li>
          ))}
        </ul>
      </div>

      {/* Shortcuts */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold shadow">
          File a New Claim
        </button>
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold shadow">
          Pay Now
        </button>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow p-5">
        <h2 className="text-lg font-semibold mb-3">Recent Activity</h2>
        <ul className="text-sm text-gray-700 space-y-2">
          {recentActivity.map((activity, i) => (
            <li key={i}>• {activity}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
