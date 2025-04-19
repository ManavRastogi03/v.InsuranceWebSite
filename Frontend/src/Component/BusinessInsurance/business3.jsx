import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import MedicalHistoryForm from "../InsuranceForm/MedicalHistoryForm.jsx";
import BussinessInsuranceImage from '../../assets/businessinsurance.png';

const BusinessStep3 = () => {
  return (
    <FormPageLayout title="Business Insurance" image={BussinessInsuranceImage}>
      <MedicalHistoryForm insuranceType="business-insurance"  />
    </FormPageLayout>
  );
};

export default BusinessStep3;
