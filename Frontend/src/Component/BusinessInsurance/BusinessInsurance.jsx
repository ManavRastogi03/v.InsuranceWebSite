import React from 'react';
import FormPageLayout from '../layout/FormPageLayout.jsx';
import BasicInfoForm from '../InsuranceForm/BasicInfoForm';
import BussinessInsuranceImage from '../../Image/businessinsurance.png'; // or from public folder

const BussinessInsurance = () => {
  return (
    <FormPageLayout
      title="Business Insurance"
      image={BussinessInsuranceImage}
    >
     <BasicInfoForm insuranceType="business-insurance" />
    </FormPageLayout>
  );
};

export default BussinessInsurance;
