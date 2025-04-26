import React from "react";

const InsuranceCompanyCard = ({ company, onApply }) => {
  return (
    <div className="border rounded-xl shadow-lg p-6 bg-white flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300 ease-in-out">
      {/* Top Section: Logo and Name */}
      <div className="flex items-center gap-3 md:gap-4">
        <img
          src={company.companyLogo}
          alt={company.companyName}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-teal-600">{company.companyName}</h2>
          <p className="text-xs md:text-sm text-gray-500">{company.contactNumber}</p>
        </div>
      </div>

      {/* Plans */}
      {company.insurancePlans.map((plan) => (
        <div
          key={plan._id}
          className="border rounded-md p-4 mt-4 bg-gray-50 hover:shadow-md transition-shadow duration-300"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-1">{plan.name}</h3>
          <p className="text-sm md:text-base text-gray-600 mb-2">{plan.type}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
            <div>
              <span className="font-semibold">Coverage amount:</span><br /> ₹{plan.coverageAmount.toLocaleString()}
            </div>
            <div>
              <span className="font-semibold">Premium:</span><br /> ₹{plan.premiumPrice.toLocaleString()} per {plan.duration}
            </div>
            <div>
              <span className="font-semibold">Status:</span><br /> {plan.status}
            </div>
          </div>

          {/* Features */}
          <div className="mb-3">
            <p className="font-semibold">Features:</p>
            <ul className="list-disc list-inside text-xs md:text-sm text-gray-700">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Eligible Members */}
          <div className="mb-3">
            <p className="font-semibold">Eligible Members:</p>
            <ul className="list-disc list-inside text-xs md:text-sm text-gray-700">
              {plan.eligibleMembers.map((member, idx) => (
                <li key={idx}>{member}</li>
              ))}
            </ul>
          </div>

          {/* Terms */}
          <div className="text-xs text-gray-500 mb-4">
            <p className="font-semibold">Terms & Conditions</p>
            <p>{plan.termsAndConditions}</p>
          </div>

          {/* Button */}
          <button
            onClick={() => onApply(company, plan)}
            className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 transition w-full text-sm md:text-base"
          >
            Proceed to Apply
          </button>
        </div>
      ))}
    </div>
  );
};

export default InsuranceCompanyCard;
