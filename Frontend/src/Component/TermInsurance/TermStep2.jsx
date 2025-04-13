import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import LifeInsuranceDetailsForm from "../InsuranceForm/Termform.jsx";
import TermInsuranceImage from  "../../Image/Terminsurance.png"

const TermStep2 = () => {
  return (
    <FormPageLayout title="Term Insurance" image={TermInsuranceImage}>
      <LifeInsuranceDetailsForm insuranceType="term-insurance"  />
    </FormPageLayout>
  );
};

export default TermStep2;
