import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import NomineeForm from "../InsuranceForm/NomineeForm.jsx";
import TravelInsuranceImage from '../../assets/TravelInsurance.png'
const TravelStep4 = () => {
  return (
    <FormPageLayout title="Travel Insurance" image={TravelInsuranceImage}>
      <NomineeForm insuranceType="Travel-insurance" />
    </FormPageLayout>
  );
};

export default TravelStep4;
