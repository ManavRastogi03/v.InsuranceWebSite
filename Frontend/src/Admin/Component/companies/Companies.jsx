import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCompanies, deleteInsuranceCompany } from "../../../api/api.js";
import Input from "../ui/Input.jsx";
import Button from "../ui/Button.jsx";
import CompanyTable from "../CompanyTable.jsx";
import Loader from "../../../Component/Loader/Loader.jsx"; // ✅ Import loader

const Companies = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch Companies from Backend
  useEffect(() => {
    const fetchCompanies = async () => {
      setLoading(true); // ✅ Start loader
      try {
        const response = await getCompanies();
        console.log("📢 API Response:", response);

        if (!response.data || !Array.isArray(response.data)) {
          console.warn("⚠️ API Response is not an array.");
          setCompanies(response.data.data || []);
        } else {
          setCompanies(response.data);
        }
      } catch (error) {
        console.error("❌ Error fetching companies:", error.message);
      } finally {
        setLoading(false); // ✅ Stop loader
      }
    };
    fetchCompanies();
  }, []);

  // ✅ Delete Company
  const handleDeleteCompany = async (companyId) => {
    if (!window.confirm("Are you sure you want to delete this company?")) return;

    try {
      await deleteInsuranceCompany(companyId);
      setCompanies(companies.filter((c) => c._id !== companyId));
    } catch (error) {
      console.error("❌ Error deleting company:", error.message);
    }
  };

  const filteredCompanies = companies.filter((c) =>
    c.companyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 relative">
      {/* ✅ Full Page Loader Overlay */}
      {loading && (
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50">
          <Loader />
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-3">
        <h1 className="text-xl sm:text-2xl font-semibold">Companies Management</h1>
        <Button className="w-full sm:w-auto" onClick={() => navigate("/admin/companies/add")}>
          + Add Company
        </Button>
      </div>

      {/* Search */}
      <Input
        placeholder="Search Companies..."
        className="w-full sm:max-w-md mb-4 p-2 border rounded-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Company Table */}
      <CompanyTable
        companies={filteredCompanies}
        onDelete={handleDeleteCompany}
      />
    </div>
  );
};

export default Companies;
