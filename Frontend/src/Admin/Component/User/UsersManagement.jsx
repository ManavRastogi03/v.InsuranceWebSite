import { useState } from "react";
import Button from "../ui/Button.jsx";
import Input from "../ui/Input.jsx";
import Table from "../ui/Table.jsx";
import { Lock, Unlock } from "lucide-react";

const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "active", policies: ["Basic", "Gold"] },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "blocked", policies: ["Premium"] },
  { id: 3, name: "Michael Lee", email: "michael@example.com", status: "active", policies: ["Basic", "Custom"] },
];

export default function UsersManagement() {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");

  const toggleBlockUser = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: user.status === "active" ? "blocked" : "active" } : user
    ));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
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
              <tr key={user.id} className="hover:bg-gray-100 transition-colors">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.policies.join(", ")}</td>
                <td className={`py-2 px-4 ${user.status === "active" ? "text-green-500" : "text-red-500"}`}>
                  {user.status}
                </td>
                <td className="py-2 px-4">
                  <Button
                    onClick={() => toggleBlockUser(user.id)}
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
