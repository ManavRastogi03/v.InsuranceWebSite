import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import NomineeForm from "../InsuranceForm/NomineeForm.jsx";
import HealthImage from "../../assets/Healthinsurance.png";

const LifeStep4 = () => {
  return (
    <FormPageLayout title="Health Insurance" image={HealthImage}>
      <NomineeForm insuranceType="Health-insurance" />
    </FormPageLayout>
  );
};

export default LifeStep4;
