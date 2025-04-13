import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import ReviewPayment from "../InsuranceForm/ReviewPayment.jsx";
import TermInsuranceImage from  "../../Image/Terminsurance.png"

const TermStep6 = () => {
  return (
    <FormPageLayout title="Term Insurance" image={TermInsuranceImage}>
      <ReviewPayment insuranceType="term-insurance" />
    </FormPageLayout>
  );
};

export default TermStep6;