import React, { useState, useEffect } from "react";
import  Button from "../ui/Button.jsx";
import  Table  from "../ui/Table.jsx"; // Assuming you already have these components
 // Assuming you already have these components
import { Lock, Unlock } from "lucide-react";

const usersData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "active", policies: ["Basic", "Gold"] },
  { id: 2, name: "Jane Smith", email: "jane@example.com", status: "blocked", policies: ["Premium"] },
  { id: 3, name: "Michael Lee", email: "michael@example.com", status: "active", policies: ["Basic", "Custom"] },
];

const NotificationPage = () => {
  const [users, setUsers] = useState(usersData);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleSendNotification = () => {
    if (!message || !recipient) {
      setStatus("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus("Notification sent successfully!");
      setMessage("");
      setRecipient("");
    }, 2000); // Simulate API call
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Send Notification</h2>

      {/* Notification Form */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Recipient</label>
        <select
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mb-4"
        >
          <option value="">Select a user</option>
          {filteredUsers.map(user => (
            <option key={user.id} value={user.email}>
              {user.name} ({user.email})
            </option>
          ))}
        </select>

        <label className="block text-sm font-medium mb-2">Notification Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mb-4"
          placeholder="Enter notification message..."
        />

        {/* Send Button */}
        <Button
          onClick={handleSendNotification}
          className="w-full bg-blue-500 text-white font-medium py-2 rounded-md"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Notification"}
        </Button>

        {/* Status Feedback */}
        {status && <p className="mt-4 text-red-500">{status}</p>}
      </div>

      {/* Notification History Table */}
      <h3 className="text-lg font-semibold mb-4">Notification History</h3>

      <Table>
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Message</th>
            <th>Status</th>
            <th>Sent At</th>
          </tr>
        </thead>
        <tbody>
          {/* Example notification data, in real case it will be fetched from the backend */}
          <tr>
            <td>john@example.com</td>
            <td>Account successfully activated.</td>
            <td className="text-green-500">Sent</td>
            <td>2025-04-01 10:30 AM</td>
          </tr>
          <tr>
            <td>jane@example.com</td>
            <td>Password reset request.</td>
            <td className="text-gray-500">Pending</td>
            <td>2025-04-01 11:00 AM</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default NotificationPage;
