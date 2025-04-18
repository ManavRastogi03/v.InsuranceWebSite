import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // For page navigation
import { fetchPlansByCompanyId } from './api'; // Assuming the API call function

const InsurancePlanList = ({ companyId }) => {
  const [insurancePlans, setInsurancePlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // To navigate between pages

  useEffect(() => {
    if (!companyId) return; // If no company is selected, do nothing

    setLoading(true);
    setError(null);

    fetchPlansByCompanyId(companyId)
      .then(data => {
        setInsurancePlans(data.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Error fetching insurance plans.');
        setLoading(false);
      });
  }, [companyId]);

  const handleApplyClick = (planType) => {
    // Convert plan type to URL-friendly slug
    const slug = planType.toLowerCase().replace(/\s+/g, '-');
  
    // Navigate to the correct route
    navigate(`/${slug}`);
  };
  

  return (
    <div>
      {loading && <p>Loading insurance plans...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <div>
          <h2>Insurance Plans</h2>
          {insurancePlans.length > 0 ? (
            <ul>
              {insurancePlans.map((plan) => (
                <li key={plan._id}>
                  <h3>{plan.name}</h3>
                  <p><strong>Description:</strong> {plan.description}</p>
                  <p><strong>Type:</strong> {plan.type}</p>
                  <p><strong>Coverage Amount:</strong> ₹{plan.coverageAmount}</p>
                  <p><strong>Premium Price:</strong> ₹{plan.premiumPrice}</p>
                  <p><strong>Duration:</strong> {plan.duration}</p>
                  <p><strong>Eligible Members:</strong> {plan.eligibleMembers.join(', ')}</p>
                  <p><strong>Terms and Conditions:</strong> {plan.termsAndConditions}</p>
                  <p><strong>Status:</strong> {plan.status}</p>

                  {/* Apply Button */}
                  <button onClick={() => handleApplyClick(plan.type)}>Apply</button>

                </li>
              ))}
            </ul>
          ) : (
            <p>No insurance plans available for this company.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default InsurancePlanList;
