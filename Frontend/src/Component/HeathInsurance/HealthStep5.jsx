import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import UploadKYCForm from "../InsuranceForm/UploadKYCForm.jsx";
import HealthImage from "../../assets/Healthinsurance.png";

const LifeStep5 = () => {
  return (
    <FormPageLayout title="Health Insurance" image={HealthImage}>
      <UploadKYCForm insuranceType="Health-insurance" />
    </FormPageLayout>
  );
};

export default LifeStep5;
