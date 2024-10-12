import React, { useState } from 'react';

function TermInsuranceCalculator() {
  const [formData, setFormData] = useState({
    age: '',
    coverageAmount: '',
    termLength: ''
  });

  const [premium, setPremium] = useState(null);

  // Function to handle form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Basic premium calculation logic
  const calculatePremium = (age, coverageAmount, termLength) => {
    const baseRate = 500; // base premium rate
    const ageFactor = age > 30 ? (age - 30) * 20 : 0; // additional cost for age over 30
    const termFactor = termLength * 10; // additional cost for each year of the term
    const coverageFactor = (coverageAmount / 1000000) * 50; // cost per 1 crore of coverage
    return baseRate + ageFactor + termFactor + coverageFactor;
  };

  // Handle form submission and premium calculation
  const handleSubmit = (e) => {
    e.preventDefault();
    const { age, coverageAmount, termLength } = formData;
    const calculatedPremium = calculatePremium(
      parseInt(age),
      parseInt(coverageAmount),
      parseInt(termLength)
    );
    setPremium(calculatedPremium.toFixed(2));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          Term Insurance Calculator
        </h2>

        {/* Age Input */}
        <div className="mb-4">
          <label className="text-gray-700 font-medium mb-2 block">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Coverage Amount Input */}
        <div className="mb-4">
          <label className="text-gray-700 font-medium mb-2 block">
            Coverage Amount (in ₹ Lakhs)
          </label>
          <input
            type="number"
            name="coverageAmount"
            value={formData.coverageAmount}
            onChange={handleChange}
            placeholder="Enter coverage amount"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Term Length Input */}
        <div className="mb-4">
          <label className="text-gray-700 font-medium mb-2 block">
            Term Length (in years)
          </label>
          <input
            type="number"
            name="termLength"
            value={formData.termLength}
            onChange={handleChange}
            placeholder="Enter term length"
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        {/* Calculate Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Calculate Premium
        </button>

        {/* Display Calculated Premium */}
        {premium && (
          <div className="mt-4 bg-green-100 p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-green-700">
              Estimated Premium: ₹ {premium}/month
            </h3>
          </div>
        )}
      </form>
    </div>
  );
}

export default TermInsuranceCalculator;
