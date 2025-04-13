import { FaDownload, FaCreditCard, FaMoneyCheckAlt, FaToggleOn, FaToggleOff } from "react-icons/fa";
import { useState } from "react";

const UserPayments = () => {
  const [autoPay, setAutoPay] = useState(true);

  const billingHistory = [
    {
      id: "INV001",
      date: "2024-03-15",
      amount: "$120.00",
      status: "Paid",
      receipt: "/receipts/inv001.pdf",
    },
    {
      id: "INV002",
      date: "2024-02-15",
      amount: "$120.00",
      status: "Paid",
      receipt: "/receipts/inv002.pdf",
    },
    {
      id: "INV003",
      date: "2024-04-15",
      amount: "$120.00",
      status: "Due",
      receipt: null,
    },
  ];

  const currentDue = billingHistory.find((bill) => bill.status === "Due");

  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold">Payments</h1>
        {currentDue && (
          <button className="mt-4 md:mt-0 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl shadow text-sm font-medium">
            <FaMoneyCheckAlt /> Pay Now (${currentDue.amount})
          </button>
        )}
      </div>

      {/* Payment Methods */}
      <div className="bg-white shadow rounded-2xl p-5 mb-8">
        <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4">
            <FaCreditCard className="text-2xl text-gray-600" />
            <div>
              <p className="text-sm">Visa ending in 4242</p>
              <p className="text-xs text-gray-500">Expires 04/26</p>
            </div>
          </div>
          <button className="mt-4 md:mt-0 bg-blue-100 text-blue-600 hover:bg-blue-200 px-4 py-2 rounded-lg text-sm font-medium shadow">
            Edit
          </button>
        </div>
      </div>

      {/* Auto Pay */}
      <div className="bg-white shadow rounded-2xl p-5 mb-8 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Auto-Pay</h2>
        <button
          onClick={() => setAutoPay(!autoPay)}
          className="flex items-center gap-2 text-blue-600"
        >
          {autoPay ? (
            <>
              <FaToggleOn className="text-2xl" /> Enabled
            </>
          ) : (
            <>
              <FaToggleOff className="text-2xl" /> Disabled
            </>
          )}
        </button>
      </div>

      {/* Billing History */}
      <div className="bg-white shadow rounded-2xl p-5">
        <h2 className="text-lg font-semibold mb-4">Billing History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-xs">
                <th className="px-4 py-3">Invoice ID</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {billingHistory.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-3">{item.id}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3">{item.amount}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {item.receipt ? (
                      <a
                        href={item.receipt}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                      >
                        <FaDownload /> Receipt
                      </a>
                    ) : (
                      <span className="text-gray-400">Not available</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserPayments;
