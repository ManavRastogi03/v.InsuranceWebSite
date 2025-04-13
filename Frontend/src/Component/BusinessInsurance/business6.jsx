import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import ReviewPayment from "../InsuranceForm/ReviewPayment.jsx";
import BussinessInsuranceImage from '../../Image/businessinsurance.png';

const BusinessStep6 = () => {
  return (
    <FormPageLayout title="Business Insurance" image={BussinessInsuranceImage}>
      <ReviewPayment insuranceType="business-insurance" />
    </FormPageLayout>
  );
};

export default BusinessStep6;