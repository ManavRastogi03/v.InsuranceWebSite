import React, { useEffect, useState } from "react";
import { getCompaniesByType } from "../../../api/api.js";
import InsuranceCompanyCard from "../../Component/InsuranceCompanyCard/InsuranceCompanyCard.jsx";
import { useFormData } from "../../../Component/Context/FormDataContext.jsx"; 
import Loader from "../../../Component/Loader/Loader.jsx"; 
const FilteredCompanies = ({ selectedType, onCompanySelect }) => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { updateFormData } = useFormData(); 

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        if (selectedType) {
          setLoading(true);
          const res = await getCompaniesByType(selectedType);
          setCompanies(res.data);
        }
      } catch (err) {
        console.error("Error fetching filtered companies", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, [selectedType]);

  // if (company.insurancePlans.length > 0) {
  //   updateFormData("planId", company.insurancePlans[0]);
  // }
  

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Choose an Insurance Company</h2>
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <Loader />
        </div>
      ) : companies.length === 0 ? (
        <p>No companies found for this type.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {companies.map((company) => (
                    <div
                      key={company._id}
                      onClick={() => {
                          if (company.insurancePlans.length > 0) {
                            const planId = company.insurancePlans[0]._id; // ✅ Correct - only id
                            updateFormData("planId", planId);
                          }
                          onCompanySelect(company);
                        }}


                      className="cursor-pointer hover:shadow-lg transition-shadow"
                    >
                      <InsuranceCompanyCard company={company} />
                    </div>
                  ))}

        </div>
      )}
    </div>
  );
};

export default FilteredCompanies;
