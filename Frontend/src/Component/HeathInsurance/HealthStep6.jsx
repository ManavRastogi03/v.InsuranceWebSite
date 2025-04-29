import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import ReviewPayment from "../InsuranceForm/ReviewPayment.jsx";
import HealthImage from "../../assets/Healthinsurance.png";

const LifeStep6 = () => {
  return (
    <FormPageLayout title="Health Insurance" image={HealthImage}>
      <ReviewPayment insuranceType="Health-insurance" />
    </FormPageLayout>
  );
};

export default LifeStep6;