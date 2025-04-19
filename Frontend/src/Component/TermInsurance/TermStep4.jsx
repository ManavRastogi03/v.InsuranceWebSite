import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import NomineeForm from "../InsuranceForm/NomineeForm.jsx";
import TermInsuranceImage from  "../../assets/Terminsurance.png"

const TermStep4 = () => {
  return (
    <FormPageLayout title="Term Insurance" image={TermInsuranceImage}>
      <NomineeForm insuranceType="term-insurance" />
    </FormPageLayout>
  );
};

export default TermStep4;
