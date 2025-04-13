import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import LifeInsuranceDetailsForm from "../InsuranceForm/Termform.jsx";
import TravelInsuranceImage from '../../Image/TravelInsurance.png'; 

const TravelStep2 = () => {
  return (
    <FormPageLayout title="Travel Insurance" image={TravelInsuranceImage}>
      <LifeInsuranceDetailsForm insuranceType="travel-insurance"  />
    </FormPageLayout>
  );
};

export default TravelStep2;
