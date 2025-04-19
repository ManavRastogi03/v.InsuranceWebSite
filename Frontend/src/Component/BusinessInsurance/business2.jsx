import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import LifeInsuranceDetailsForm from "../InsuranceForm/Termform.jsx";
import BussinessInsuranceImage from '../../assets/businessinsurance.png';

const BusinessStep2 = () => {
  return (
    <FormPageLayout title="Business Insurance" image={BussinessInsuranceImage}>
      <LifeInsuranceDetailsForm insuranceType="business-insurance"  />
    </FormPageLayout>
  );
};

export default BusinessStep2;
