import React, { useState } from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import BasicInfoForm from "../InsuranceForm/BasicInfoForm";
import LifeInsuranceImage from "../../assets/Lifeinsurance.png";
import FilteredCompanies from "../../User/Component/InsuranceCompanyCard/FilteredCompanies.jsx";

const LifeInsurance = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <FormPageLayout
      title="Life Insurance"
      image={selectedCompany ? LifeInsuranceImage : null} // ← ✨ Bas yeh
    >
      {selectedCompany ? (
        <BasicInfoForm
          insuranceType="life-insurance"
          selectedCompany={selectedCompany}
        />
      ) : (
        <FilteredCompanies
          selectedType="Life Insurance"
          onCompanySelect={(company) => setSelectedCompany(company)}
        />
      )}
    </FormPageLayout>
  );
};

export default LifeInsurance;
