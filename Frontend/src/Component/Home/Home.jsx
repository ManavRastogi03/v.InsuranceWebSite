import React from 'react';
import { NavLink } from 'react-router-dom';
import healthLogo from '../../assets/health.png'; // Replace with your logo paths
import { useEffect } from "react";
import carLogo from '../../assets/car.png';
import lifeLogo from '../../assets/life.png';
import termLogo from '../../assets/term.png';
import bikeLogo from '../../assets/bike.png';
import businessLogo from '../../assets/business.png';
import { useNavigate } from "react-router-dom";
import travelLogo from '../../assets/travel.png';
import claimImage from '../../assets/claim.png'; // Replace with your claim image

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const isRegistered = localStorage.getItem("userRegistered");

    if (!isRegistered) {
      setTimeout(() => {
        navigate("/signup");
      }, 5000); // Adjust time as needed
    }
  }, [navigate]);
  const insuranceTypes = [
    { name: 'Health Insurance', logo: healthLogo, path: '/health-insurance/family' },
    // { name: 'Car Insurance', logo: carLogo, path: '/car-insurance' },
    { name: 'Life Insurance', logo: lifeLogo, path: '/life-insurance' },
    { name: 'Term Insurance', logo: termLogo, path: '/term-insurance' },
    // { name: 'Bike Insurance', logo: bikeLogo, path: '/bike-insurance' },
    { name: 'Business Insurance', logo: businessLogo, path: '/business-insurance' },
    { name: 'Travel Insurance', logo: travelLogo, path: '/travel-insurance' },
    // Add more insurance types as needed
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center">Available Insurance Options</h2>
        <div className="grid grid-cols-2 gap-4">
          {insuranceTypes.map((insurance, index) => (
            <NavLink
              key={index}
              to={insurance.path}
              className="flex items-center bg-gray-50 rounded-lg p-4 shadow-md hover:bg-gray-100 transition duration-200"
            >
              <img src={insurance.logo} alt={`${insurance.name} Logo`} className="h-12 w-12 mr-4" />
              <span className="text-lg font-medium text-gray-700">{insurance.name}</span>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Claim Served Section with Image on Left and Text on Right */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full mb-8 flex items-center justify-center">
        <div className="flex-shrink-0 mr-4">
          <img src={claimImage} alt="Claim Served" className="h-32 w-32" />
        </div>
        <div className="text-gray-700 text-center">
          <h2 className="text-xl font-semibold mb-4">50K+ Claim Served</h2>
          <p>We ensure quick and hassle-free claim settlement</p>
          <p>for our customers, ensuring peace of mind during difficult times</p>
        </div>
      </div>

      {/* Why Insurance Wala Section */}
      <div className="flex flex-col md:flex-row justify-center items-start min-h-screen bg-gray-100 p-4 md:p-8">
        {/* Left Section: Why Insurance Wala */}
        <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0 md:mr-8">
          <h2 className="text-2xl font-semibold mb-4">Why Insurance Wala?</h2>
          <p className="text-gray-700 mb-4">
            We provide personalized service, expert advice, and comprehensive coverage options to meet your needs. 
          </p>
          <p className="text-gray-700 mb-4">
            With years of experience and a customer-first approach, we ensure that you get the best insurance solutions for your peace of mind.
          </p>
          <p className="text-gray-700">
            Choose Insurance Wala because we care about your future and ensure a smooth claims process every time.
          </p>
        </div>

        {/* Right Section: Three Boxes with Images and Paragraphs */}
        <div className="w-full md:w-2/3 grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Box 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img src={healthLogo} alt="Health Insurance" className="h-16 w-16 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Health Insurance</h3>
            <p className="text-gray-700 text-center">
              Health coverage options for individuals and families to protect against medical expenses.
            </p>
          </div>

          {/* Box 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img src={carLogo} alt="Car Insurance" className="h-16 w-16 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Car Insurance</h3>
            <p className="text-gray-700 text-center">
              Comprehensive car insurance to cover damages and liabilities on the road.
            </p>
          </div>

          {/* Box 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <img src={lifeLogo} alt="Life Insurance" className="h-16 w-16 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Life Insurance</h3>
            <p className="text-gray-700 text-center">
              Protect your loved ones with life insurance that provides financial security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
