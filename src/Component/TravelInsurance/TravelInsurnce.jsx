import React from 'react';
import InsuranceForm from '../InsuranceForm/InsuranceForm.jsx';
import travelInsuranceImage from '../../Image/Travelinsurance.png'; // Replace with your actual image path

function TravelInsurance() {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center">
        
        {/* Left Section: Image (hidden on mobile, visible on medium screens and larger) */}
        <div className="hidden md:block w-full md:w-1/2 p-4 flex justify-center items-center">
          <img src={travelInsuranceImage} alt="Travel Insurance" className="max-h-72 w-full object-cover" />
        </div>

        {/* Right Section: Insurance Form */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">Travel Insurance Form</h2>
          <InsuranceForm />
        </div>
      </div>
    </div>
  );
}

export default TravelInsurance;
