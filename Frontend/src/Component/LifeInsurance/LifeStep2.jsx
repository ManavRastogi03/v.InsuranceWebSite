import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import LifeInsuranceDetailsForm from "../InsuranceForm/Termform.jsx";
import lifeImage from "../../assets/Lifeinsurance.png";

const LifeStep2 = () => {
  return (
    <FormPageLayout title="Life Insurance" image={lifeImage}>
      <LifeInsuranceDetailsForm insuranceType="Life-insurance"  />
    </FormPageLayout>
  );
};

export default LifeStep2;
