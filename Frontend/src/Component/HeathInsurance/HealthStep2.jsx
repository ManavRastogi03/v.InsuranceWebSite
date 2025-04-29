import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import HealthInsuranceDetailsForm from "../InsuranceForm/Termform.jsx";
import HealthImage from "../../assets/Healthinsurance.png";

const HealthStep2 = () => {
  return (
    <FormPageLayout title="Health Insurance" image={HealthImage}>
      <HealthInsuranceDetailsForm insuranceType="Health-insurance"  />
    </FormPageLayout>
  );
};

export default HealthStep2;