import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCompanies, deleteInsuranceCompany } from "../../../api/api.js"; // ✅ Import API functions
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import CompanyTable from "../CompanyTable.jsx";

const Companies = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch Companies from Backend
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await getCompanies(); // ✅ API Call
        console.log("📢 API Response:", response);
    
        // 🛠 Correct way to extract data
        if (!response.data || !Array.isArray(response.data)) {
          console.warn("⚠️ API Response is not an array. Using response.data.data instead:", response);
          setCompanies(response.data.data); // ✅ Use the correct array
          return;
        }
    
        setCompanies(response.data); // ✅ Correct state update
      } catch (error) {
        console.error("❌ Error fetching companies:", error.message);
      }
    };
    fetchCompanies();
}, []);

  // ✅ Delete Company using API
  const handleDeleteCompany = async (companyId) => {
    if (!window.confirm("Are you sure you want to delete this company?")) return;

    try {
      await deleteInsuranceCompany(companyId); // ✅ Call API from api.js
      setCompanies(companies.filter((c) => c._id !== companyId));
    } catch (error) {
      console.error("❌ Error deleting company:", error.message);
    }
  };

  // ✅ Filter Companies based on Search
  const filteredCompanies = companies.filter((c) =>
    c.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <h1 className="text-xl sm:text-2xl font-semibold">Companies Management</h1>
        <Button className="w-full sm:w-auto" onClick={() => navigate("/admin/companies/add")}>
          + Add Company
        </Button>
      </div>

      {/* Search Bar */}
      <Input
        placeholder="Search Companies..."
        className="w-full sm:max-w-md mb-4 p-2 border rounded-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Loading State */}
      {loading ? <p>Loading companies...</p> : null}

      {/* Companies Table */}
      <CompanyTable
        companies={filteredCompanies}
        onEdit={(company) => navigate(`/admin/companies/edit/${company._id}`)}
        onDelete={handleDeleteCompany}
      />
    </div>
  );
};

export default Companies;
