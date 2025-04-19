import React from 'react';
import CarImage from '../../assets/CarInsuranceImage.png'; // Replace with your actual bike insurance image path
import CarInsurancecal from './CarInsurancecal';

function CarInsurance() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      {/* Container for the form and image */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-6xl flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Section: Insurance Form */}
        <div className="w-full md:w-1/2 p-4">
          <CarInsurancecal/>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
          <img
            src={CarImage}
            alt="Bike Insurance"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
}

export default CarInsurance;
