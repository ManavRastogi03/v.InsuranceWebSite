import React from 'react';
import InsuranceForm from '../InsuranceForm.jsx/InsuranceForm';
import lifeInsuranceImage from '../../Image/Lifeinsurance.png'; // Replace with your actual image path

function LifeInsurance() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center">
        {/* Left Section: Insurance Form */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">Life Insurance Form</h2>
          <InsuranceForm />
        </div>

        {/* Right Section: Image (hidden on small screens) */}
        <div className="w-full md:w-1/2 p-4 hidden md:flex justify-center items-center">
          <img src={lifeInsuranceImage} alt="Life Insurance" className="max-h-64 object-cover" />
        </div>
      </div>
    </div>
  );
}

export default LifeInsurance;
