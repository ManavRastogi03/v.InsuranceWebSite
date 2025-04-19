import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import UploadKYCForm from "../InsuranceForm/UploadKYCForm.jsx";
import TravelInsuranceImage from '../../assets/TravelInsurance.png'

const TravelStep5 = () => {
  return (
    <FormPageLayout title="Travel Insurance" image={TravelInsuranceImage}>
      <UploadKYCForm insuranceType="travel-insurance" />
    </FormPageLayout>
  );
};

export default TravelStep5;
