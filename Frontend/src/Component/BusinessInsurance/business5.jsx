import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import UploadKYCForm from "../InsuranceForm/UploadKYCForm.jsx";
import BussinessInsuranceImage from '../../Image/businessinsurance.png';

const BusinessStep5 = () => {
  return (
    <FormPageLayout title="Business Insurance" image={BussinessInsuranceImage}>
      <UploadKYCForm insuranceType="business-insurance" />
    </FormPageLayout>
  );
};

export default BusinessStep5;
