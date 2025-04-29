import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import MedicalHistoryForm from "../InsuranceForm/MedicalHistoryForm.jsx";
import HealthImage from "../../assets/Healthinsurance.png";

const LifeStep3 = () => {
  return (
    <FormPageLayout title="Health Insurance" image={HealthImage}>
      <MedicalHistoryForm insuranceType="Health-insurance"  />
    </FormPageLayout>
  );
};

export default LifeStep3;
