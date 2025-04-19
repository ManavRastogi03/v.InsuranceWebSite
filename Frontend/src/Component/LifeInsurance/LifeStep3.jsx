import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import MedicalHistoryForm from "../InsuranceForm/MedicalHistoryForm.jsx";
import lifeImage from "../../assets/Lifeinsurance.png";

const LifeStep3 = () => {
  return (
    <FormPageLayout title="Life Insurance" image={lifeImage}>
      <MedicalHistoryForm insuranceType="Life-insurance"  />
    </FormPageLayout>
  );
};

export default LifeStep3;
