import React from "react";
import Button from "../Component/ui/Button";
import Table from "../Component/ui/Table";

const CompanyTable = ({ companies, onEdit, onDelete }) => {
  console.log("Companies Data:", companies);
  
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full border rounded-lg">
        <thead className="bg-gray-100">
          <tr className="text-left text-gray-600">
            <th className="p-3">Name</th>
            <th className="p-3">Logo</th>
            <th className="p-3">Contact</th>
            <th className="p-3">Plans</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {companies.map((company) => (
            <tr key={company._id} className="text-gray-700 text-sm">
              <td className="p-3 font-medium">{company.companyName}</td>
              <td className="p-3">
                <img src={company.companyLogo} alt="Logo" className="w-10 h-10 rounded-md" />
              </td>
              <td className="p-3">{company.contactNumber}</td>
              <td className="p-3">
                {Array.isArray(company.insurancePlans)
                  ? company.insurancePlans.join(", ")
                  : "No Plans"}
              </td>
              <td className="p-3 flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  onClick={() => onEdit(company)}
                  className="px-3 py-1 text-sm"
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => onDelete(company._id)}
                  className="px-3 py-1 text-sm"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default CompanyTable;
