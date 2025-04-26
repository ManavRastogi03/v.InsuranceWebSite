import React, { useState } from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import BasicInfoForm from "../InsuranceForm/BasicInfoForm";
import TravelInsuranceImage from "../../assets/TravelInsurance.png";
import FilteredCompanies from "../../User/Component/InsuranceCompanyCard/FilteredCompanies.jsx";

const TravelInsurance = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <FormPageLayout
      title="Travel Insurance"
      image={selectedCompany ? TravelInsuranceImage : null} // ← ✨ Bas yeh
    >
      {selectedCompany ? (
        <BasicInfoForm
          insuranceType="travel-insurance"
          selectedCompany={selectedCompany}
        />
      ) : (
        <FilteredCompanies
          selectedType="Travel Insurance"
          onCompanySelect={(company) => setSelectedCompany(company)}
        />
      )}
    </FormPageLayout>
  );
};

export default TravelInsurance;
