import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import LifeInsuranceDetailsForm from "../InsuranceForm/TermInfoForm.jsx";
import lifeImage from "../../Image/Lifeinsurance.png";

const LifeStep2 = () => {
  return (
    <FormPageLayout title="Life Insurance" image={lifeImage}>
      <LifeInsuranceDetailsForm />
    </FormPageLayout>
  );
};

export default LifeStep2;
