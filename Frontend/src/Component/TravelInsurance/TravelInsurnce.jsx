import React from 'react';
import FormPageLayout from '../layout/FormPageLayout.jsx';
import BasicInfoForm from '../InsuranceForm/BasicInfoForm';
import TravelInsuranceImage from '../../assets/TravelInsurance.png'; // or from public folder

const TravelInsurance = () => {
  return (
    <FormPageLayout
      title="Travel Insurance"
      image={TravelInsuranceImage}
    >
     <BasicInfoForm insuranceType="travel-insurance" />
    </FormPageLayout>
  );
};

export default TravelInsurance;
