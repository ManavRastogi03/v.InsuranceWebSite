import React, { useState } from 'react';
function CarInsurancecal() {
  const [registrationNumber, setRegistrationNumber] = useState('');

  const handleInputChange = (e) => {
    setRegistrationNumber(e.target.value);
  };

  const handleCheckPremium = () => {
    // Implement your logic to check premium based on registration number
    alert(`Checking premium for: ${registrationNumber}`);
  };

  const handleProceedWithoutNumber = () => {
    // Implement logic for proceeding without registration number
    alert('Proceeding without bike number');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Car insurance in few steps
        </h2>

        {/* Registration Number Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Registration Number"
            value={registrationNumber}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Check Premium Button */}
        <button
          onClick={handleCheckPremium}
          className="w-full bg-green-500 text-white p-3 rounded-lg font-semibold mb-4"
        >
          Check Premium
        </button>

        {/* OR Separator */}
        <div className="text-center text-gray-500 mb-4">or</div>

        {/* Proceed Without Bike Number Button */}
        <button
          onClick={handleProceedWithoutNumber}
          className="w-full flex items-center justify-center bg-transparent text-green-500 border border-green-500 p-3 rounded-lg font-semibold mb-4"
        >
          Proceed without Car number
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-9.707a1 1 0 011.414 0L12 9.586V7a1 1 0 112 0v6a1 1 0 01-2 0v-2.586l-.879.879a1 1 0 01-1.414-1.414l2.293-2.293a1 1 0 010 1.414l-2.293-2.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* I have a brand new bike Link */}
        <div className="text-center">
          <a href="#" className="text-blue-500 underline">
            I have a brand new Car
          </a>
        </div>
      </div>
    </div>
  );
}

export default CarInsurancecal;
