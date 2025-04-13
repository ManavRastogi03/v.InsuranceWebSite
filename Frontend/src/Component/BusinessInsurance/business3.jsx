import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import MedicalHistoryForm from "../InsuranceForm/MedicalHistoryForm.jsx";
import BussinessInsuranceImage from '../../Image/businessinsurance.png';

const BusinessStep3 = () => {
  return (
    <FormPageLayout title="Business Insurance" image={BussinessInsuranceImage}>
      <MedicalHistoryForm insuranceType="business-insurance"  />
    </FormPageLayout>
  );
};

export default BusinessStep3;
