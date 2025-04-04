import { Briefcase, Users, FileText, AlertTriangle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from "recharts";
import RecentActivities from "./RecentActivities";

const userGrowthData = [
  { month: "Jan", users: 100 },
  { month: "Feb", users: 200 },
  { month: "Mar", users: 350 },
  { month: "Apr", users: 500 },
  { month: "May", users: 700 },
  { month: "Jun", users: 950 },
];

const revenueData = [
  { month: "Jan", revenue: 5000 },
  { month: "Feb", revenue: 7000 },
  { month: "Mar", revenue: 8000 },
  { month: "Apr", revenue: 12000 },
  { month: "May", revenue: 15000 },
  { month: "Jun", revenue: 18000 },
];

const claimsData = [
  { status: "Approved", value: 50, color: "#4CAF50" },
  { status: "Pending", value: 30, color: "#FFC107" },
  { status: "Rejected", value: 20, color: "#F44336" },
];

export default function Dashboard() {
  const summaryData = [
    { title: "Total Companies", count: 20, icon: <Briefcase size={28} />, bg: "bg-blue-500" },
    { title: "Total Users", count: 1200, icon: <Users size={28} />, bg: "bg-green-500" },
    { title: "Active Policies", count: 850, icon: <FileText size={28} />, bg: "bg-yellow-500" },
    { title: "Pending Claims", count: 15, icon: <AlertTriangle size={28} />, bg: "bg-red-500" },
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-4 sm:p-6 rounded-xl shadow-md text-white ${item.bg} transform transition duration-300 hover:scale-105 hover:shadow-lg`}
          >
            <div>
              <h3 className="text-sm sm:text-lg font-semibold">{item.title}</h3>
              <p className="text-lg sm:text-2xl font-bold">{item.count}</p>
            </div>
            <div className="bg-white p-2 sm:p-3 rounded-xl text-black">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Users Growth Chart */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Users Growth (Last 6 Months)</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={userGrowthData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#4CAF50" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Stats Bar Chart */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Revenue Stats (Last 6 Months)</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#2196F3" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Claims Status Pie Chart */}
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-4">Claims Status</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={claimsData} dataKey="value" nameKey="status" cx="50%" cy="50%" outerRadius={80} label>
              {claimsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activities */}
      <RecentActivities />
    </div>
  );
}
