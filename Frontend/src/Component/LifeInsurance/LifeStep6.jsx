import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import ReviewPayment from "../InsuranceForm/ReviewPayment.jsx";
import lifeImage from "../../Image/Lifeinsurance.png";

const LifeStep6 = () => {
  return (
    <FormPageLayout title="Life Insurance" image={lifeImage}>
      <ReviewPayment insuranceType="Life-insurance" />
    </FormPageLayout>
  );
};

export default LifeStep6;