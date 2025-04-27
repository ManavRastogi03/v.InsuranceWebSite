import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import BasicInfoForm from "../InsuranceForm/BasicInfoForm.jsx";
import FilteredCompanies from "../../User/Component/InsuranceCompanyCard/FilteredCompanies.jsx";
import children from "../../assets/children.jpg"
import family from "../../assets/Family.png"
import Parents from "../../assets/parents.png"
import seniorcitizen from "../../assets/Seinor.jpg"
import women from "../../assets/women.png"
import healthinsurance from "../../assets/Healthinsurance.png"

const healthInsuranceDetails = {
  family: {
    title: "Health Insurance for Families",
    description: "Protect your family with the best coverage plans.",
    image: family,  // apne assets me rakh lena ya import kar lena
  },
  seniorcitizen: {
    title: "Health Insurance for Senior Citizens",
    description: "Best plans for senior citizens with lifetime renewability.",
    image: seniorcitizen,
  },
  parents: {
    title: "Health Insurance for Parents",
    description: "Affordable health plans specially curated for parents.",
    image: Parents,
  },
  women: {
    title: "Women Health Insurance",
    description: "Comprehensive coverage plans designed for women.",
    image: women,
  },
  children: {
    title: "Health Insurance for Children",
    description: "Coverage from early years for your kids' health needs.",
    image: children,
  }
};

function HealthInsurance() {
  const { type } = useParams();  // 🛑 URL se "type" fetch kar rahe hain
  const [selectedCompany, setSelectedCompany] = useState(null); // 📍 Track karenge company select hui ya nahi

  const details = healthInsuranceDetails[type] || {
    title: "Health Insurance",
    description: "Get the best health insurance plans customized for you.",
    image: healthinsurance,
  };

  return (
    <FormPageLayout
      title={details.title}
      image={details.image}
    >
      {/* 👉 Conditional rendering */}
      {selectedCompany ? (
        <BasicInfoForm
          insuranceType="health-insurance"
          selectedCompany={selectedCompany}
        />
      ) : (
        <FilteredCompanies
          selectedType="Health Insurance"
          onCompanySelect={(company) => setSelectedCompany(company)}
        />
      )}
    </FormPageLayout>
  );
}

export default HealthInsurance;
