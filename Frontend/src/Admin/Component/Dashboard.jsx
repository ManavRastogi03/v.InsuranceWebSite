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
    <div className="p-6 space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-6 rounded-2xl shadow-md text-white ${item.bg} transform transition duration-300 hover:scale-105 hover:shadow-lg opacity-0 animate-fade-in`}
          >
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-2xl font-bold">{item.count}</p>
            </div>
            <div className="bg-white p-3 rounded-xl text-black">{item.icon}</div>
          </div>
        ))}
      </div>

      {/* Users Growth Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Users Growth (Last 6 Months)</h2>
        <ResponsiveContainer width="100%" height={300}>
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
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Revenue Stats (Last 6 Months)</h2>
        <ResponsiveContainer width="100%" height={300}>
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
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Claims Status</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={claimsData} dataKey="value" nameKey="status" cx="50%" cy="50%" outerRadius={100} label>
              {claimsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <RecentActivities/>
    </div>
  );
}