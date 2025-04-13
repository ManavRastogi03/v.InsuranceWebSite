import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import UploadKYCForm from "../InsuranceForm/UploadKYCForm.jsx";
import lifeImage from "../../Image/Lifeinsurance.png";

const LifeStep5 = () => {
  return (
    <FormPageLayout title="Life Insurance" image={lifeImage}>
      <UploadKYCForm insuranceType="Life-insurance" />
    </FormPageLayout>
  );
};

export default LifeStep5;
