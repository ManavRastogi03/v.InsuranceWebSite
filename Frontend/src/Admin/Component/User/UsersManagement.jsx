import { useEffect, useState } from "react";
import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";
import Table from "../ui/Table.jsx";
import { Lock, Unlock } from "lucide-react";
import Loader from "../../../Component/Loader/Loader.jsx"; // ✅ Import Loader
import { getAllUsers, toggleUserStatus } from "../../../api/api.js";

export default function UsersManagement() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getAllUsers();
        setUsers(data.users || []);
      } catch (err) {
        console.error("❌ Failed to fetch users:", err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleToggleStatus = async (id) => {
    try {
      await toggleUserStatus(id);
      setUsers(users.map(user =>
        user._id === id
          ? { ...user, status: user.status === "active" ? "blocked" : "active" }
          : user
      ));
    } catch (err) {
      alert("Error toggling user status");
      console.error(err);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(search.toLowerCase()) ||
    user.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative p-6 space-y-6">
      {/* ✅ Loader Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <Loader />
        </div>
      )}

      <h2 className="text-xl font-semibold text-gray-800 mb-4">User Management</h2>

      {/* Search Input */}
      <div className="bg-white shadow-sm rounded-md p-4">
        <Input
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mb-4"
        />
      </div>

      {/* Users Table */}
      <div className="bg-white shadow-sm rounded-md p-4">
        <Table>
          <thead className="border-b">
            <tr>
              <th className="py-2 px-4 text-left text-gray-600">Name</th>
              <th className="py-2 px-4 text-left text-gray-600">Email</th>
              <th className="py-2 px-4 text-left text-gray-600">Active Policies</th>
              <th className="py-2 px-4 text-left text-gray-600">Status</th>
              <th className="py-2 px-4 text-left text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user._id} className="hover:bg-gray-100 transition-colors">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">
                  {user.policies?.map((p) => p.planName).join(", ") || "None"}
                </td>
                <td className={`py-2 px-4 ${user.status === "active" ? "text-green-500" : "text-red-500"}`}>
                  {user.status}
                </td>
                <td className="py-2 px-4">
                  <Button
                    onClick={() => handleToggleStatus(user._id)}
                    className="flex items-center space-x-2"
                  >
                    {user.status === "active" ? <Lock size={16} /> : <Unlock size={16} />}
                    <span>{user.status === "active" ? "Block" : "Unblock"}</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
