import React from 'react';
import { useParams } from 'react-router-dom';
import InsuranceForm from '../InsuranceForm/InsuranceForm.jsx';
import healthInsuranceImage from "../../Image/Healthinsurance.png";

function HealthInsurance() {
  const { type } = useParams();

  // Define a mapping of insurance types to their headings
  const insuranceTitles = {
    family: "Health Insurance for Families",
    seniorcitizen: "Health Insurance for Senior Citizens",
    parents: "Health Insurance for Parents",
    women: "Women Health Insurance",
    children: "Health Insurance for Children",
    calculator: "Health Insurance Premium Calculator",
  };

  const heading = insuranceTitles[type] || "Health Insurance";

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row items-center">

        {/* Left Section: Image (hidden on mobile, visible on medium screens and larger) */}
        <div className="hidden md:block w-full md:w-1/2 p-4 flex justify-center items-center">
          <img src={healthInsuranceImage} alt="Health Insurance" className="max-h-80 w-full object-cover" />
        </div>

        {/* Right Section: Insurance Form and Details */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
            {heading}
          </h2>
          
          {/* Subtitle/Description */}
          <p className="text-gray-600 mb-6 text-center md:text-left">
            Protect your family with comprehensive health insurance plans. Get coverage for medical expenses, hospitalization, and more.
          </p>

          {/* Benefits List */}
          <ul className="text-gray-700 mb-6 space-y-2">
            <li>✅ Coverage up to ₹5 lakhs for all family members</li>
            <li>✅ Cashless hospitalization at 5000+ hospitals</li>
            <li>✅ Pre and post-hospitalization coverage</li>
            <li>✅ Tax benefits under section 80D</li>
          </ul>

          {/* CTA Button */}
          <div className="text-center mb-6">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-all">
              Get Your Free Quote
            </button>
          </div>

          {/* Insurance Form */}
          <InsuranceForm />
        </div>
      </div>
    </div>
  );
}

export default HealthInsurance;
