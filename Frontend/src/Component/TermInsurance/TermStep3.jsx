import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import MedicalHistoryForm from "../InsuranceForm/MedicalHistoryForm.jsx";
import TermInsuranceImage from  "../../assets/Terminsurance.png"

const TermStep3 = () => {
  return (
    <FormPageLayout title="Term Insurance" image={TermInsuranceImage}>
      <MedicalHistoryForm insuranceType="term-insurance"  />
    </FormPageLayout>
  );
};

export default TermStep3;
