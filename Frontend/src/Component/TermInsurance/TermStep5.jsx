import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import UploadKYCForm from "../InsuranceForm/UploadKYCForm.jsx";
import TermInsuranceImage from  "../../Image/Terminsurance.png"

const TermStep5 = () => {
  return (
    <FormPageLayout title="Term Insurance" image={TermInsuranceImage}>
      <UploadKYCForm insuranceType="term-insurance" />
    </FormPageLayout>
  );
};

export default TermStep5;
