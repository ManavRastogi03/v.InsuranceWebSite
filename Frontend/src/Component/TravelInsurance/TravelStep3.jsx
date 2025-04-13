import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import MedicalHistoryForm from "../InsuranceForm/MedicalHistoryForm.jsx";
import TravelInsuranceImage from '../../Image/TravelInsurance.png'


const TravelStep3 = () => {
  return (
    <FormPageLayout title="Travel Insurance" image={TravelInsuranceImage}>
      <MedicalHistoryForm insuranceType="travel-insurance"  />
    </FormPageLayout>
  );
};

export default TravelStep3;
