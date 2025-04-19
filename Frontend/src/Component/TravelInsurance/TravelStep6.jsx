import React from "react";
import FormPageLayout from "../layout/FormPageLayout.jsx";
import ReviewPayment from "../InsuranceForm/ReviewPayment.jsx";
import TravelInsuranceImage from '../../assets/TravelInsurance.png'

const TravelStep6 = () => {
  return (
    <FormPageLayout title="Travel Insurance" image={TravelInsuranceImage}>
      <ReviewPayment insuranceType="travel-insurance" />
    </FormPageLayout>
  );
};

export default TravelStep6;