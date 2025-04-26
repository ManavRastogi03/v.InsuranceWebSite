import React, { useState } from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import BasicInfoForm from "../InsuranceForm/BasicInfoForm";
import BusinessInsuranceImage from "../../assets/businessinsurance.png";
import FilteredCompanies from "../../User/Component/InsuranceCompanyCard/FilteredCompanies.jsx";

const LifeInsurance = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <FormPageLayout
      title="Business Insurance"
      image={selectedCompany ? BusinessInsuranceImage : null} // ← ✨ Bas yeh
    >
      {selectedCompany ? (
        <BasicInfoForm
          insuranceType="business-insurance"
          selectedCompany={selectedCompany}
        />
      ) : (
        <FilteredCompanies
          selectedType="Business Insurance"
          onCompanySelect={(company) => setSelectedCompany(company)}
        />
      )}
    </FormPageLayout>
  );
};

export default LifeInsurance;
