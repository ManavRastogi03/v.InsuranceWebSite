import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import NomineeForm from "../InsuranceForm/NomineeForm.jsx";
import BussinessInsuranceImage from '../../assets/businessinsurance.png';

const BusinessStep4 = () => {
  return (
    <FormPageLayout title="Business Insurance" image={BussinessInsuranceImage}>
      <NomineeForm insuranceType="business-insurance" />
    </FormPageLayout>
  );
};

export default BusinessStep4;
