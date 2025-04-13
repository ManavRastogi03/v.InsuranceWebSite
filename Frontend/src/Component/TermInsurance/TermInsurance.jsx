import React from 'react';
import FormPageLayout from '../layout/FormPageLayout.jsx';
import BasicInfoForm from '../InsuranceForm/BasicInfoForm';
import TermInsuranceImage from  "../../Image/Terminsurance.png"// or from public folder
import TermInsuranceCalculator from './TermInsuranceCalculator.jsx';
const TermInsurance = () => {
  return (
    <>

   
    <FormPageLayout
      title="Term Insurance"
      image={TermInsuranceImage}
    >
     <BasicInfoForm insuranceType="Term-insurance" />
    </FormPageLayout>
    <TermInsuranceCalculator/>
    </>
  
  );
};

export default TermInsurance;
