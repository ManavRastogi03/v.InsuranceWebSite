import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import NomineeForm from "../InsuranceForm/NomineeForm.jsx";
import lifeImage from "../../assets/Lifeinsurance.png";

const LifeStep4 = () => {
  return (
    <FormPageLayout title="Life Insurance" image={lifeImage}>
      <NomineeForm insuranceType="Life-insurance" />
    </FormPageLayout>
  );
};

export default LifeStep4;
