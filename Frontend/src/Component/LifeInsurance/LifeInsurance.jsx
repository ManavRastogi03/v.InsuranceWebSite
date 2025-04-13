import React from 'react';
import FormPageLayout from '../layout/FormPageLayout.jsx';
import BasicInfoForm from '../InsuranceForm/BasicInfoForm';
import lifeInsuranceImage from '../../Image/Lifeinsurance.png'; // or from public folder

const LifeInsurance = () => {
  return (
    <FormPageLayout
      title="Life Insurance"
      image={lifeInsuranceImage}
    >
     <BasicInfoForm insuranceType="Life-insurance" />
    </FormPageLayout>
  );
};

export default LifeInsurance;
