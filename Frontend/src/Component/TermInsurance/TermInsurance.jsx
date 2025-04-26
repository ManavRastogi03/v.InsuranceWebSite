import React, { useState } from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import BasicInfoForm from "../InsuranceForm/BasicInfoForm";
import TermInsuranceImage from "../../assets/Terminsurance.png";
import FilteredCompanies from "../../User/Component/InsuranceCompanyCard/FilteredCompanies.jsx";

const TermInsurance = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <FormPageLayout
      title="Term Insurance"
      image={selectedCompany ? TermInsuranceImage : null} // ← ✨ Bas yeh
    >
      {selectedCompany ? (
        <BasicInfoForm
          insuranceType="term-insurance"
          selectedCompany={selectedCompany}
        />
      ) : (
        <FilteredCompanies
          selectedType="Term Insurance"
          onCompanySelect={(company) => setSelectedCompany(company)}
        />
      )}
    </FormPageLayout>
  );
};

export default TermInsurance;
