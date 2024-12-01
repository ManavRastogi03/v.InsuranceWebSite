import React from 'react';
import InsuranceForm from '../InsuranceForm/InsuranceForm.jsx';
import TermInsuranceCalculator from './TermInsuranceCalculator';
import termInsuranceImage from '../../Image/Terminsurance.png'; // Replace with your actual image path

function TermInsurance() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col justify-center items-center">
      
      {/* Container for Image and Form */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center">
        
        {/* Left Section: Image (hidden on small screens) */}
        <div className="w-full md:w-1/2 p-4 hidden md:flex justify-center items-center">
          <img src={termInsuranceImage} alt="Term Insurance" className="max-h-64 object-cover" />
        </div>

        {/* Right Section: Insurance Form */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">Term Insurance Form</h2>
          <InsuranceForm />
        </div>
      </div>

      {/* Calculator Section (full width below the form/image on mobile) */}
      <div className="w-full max-w-4xl mt-6">
        <TermInsuranceCalculator />
      </div>
    </div>
  );
}

export default TermInsurance;
