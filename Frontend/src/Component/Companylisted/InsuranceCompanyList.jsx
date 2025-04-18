import React, { useState, useEffect } from 'react';
import { fetchCompanies } from './api'; // Importing the API call function to fetch companies

const InsuranceCompanyList = () => {
  const [companies, setCompanies] = useState([]); // To store the list of companies
  const [selectedCompanyId, setSelectedCompanyId] = useState(null); // To store the selected company id
  const [insurancePlans, setInsurancePlans] = useState([]); // To store insurance plans for selected company

  // Fetching companies when the component mounts
  useEffect(() => {
    fetchCompanies()
      .then(data => setCompanies(data.data)) // Saving the list of companies
      .catch(error => console.error('Error fetching companies:', error)); // Error handling
  }, []);

  // Function to handle company click and fetch its insurance plans
  const handleCompanyClick = (companyId) => {
    setSelectedCompanyId(companyId);

    // Fetch insurance plans for the selected company
    const selectedCompany = companies.find(company => company._id === companyId);
    setInsurancePlans(selectedCompany.insurancePlans);
  };

  return (
    <div>
      <h1>Insurance Companies</h1>

      {/* Displaying the company list */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {companies.map(company => (
          <div
            key={company._id}
            onClick={() => handleCompanyClick(company._id)}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px',
              width: '200px',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              textAlign: 'center'
            }}
          >
            <img
              src={company.companyLogo}
              alt={company.companyName}
              style={{ width: '100%', height: 'auto', maxHeight: '100px', objectFit: 'contain' }}
            />
            <h3>{company.companyName}</h3>
            <p>Contact: {company.contactNumber}</p>
          </div>
        ))}
      </div>

      {/* Displaying the insurance plans of the selected company */}
      {selectedCompanyId && (
        <div style={{ marginTop: '20px' }}>
          <h2>Insurance Plans for {companies.find(company => company._id === selectedCompanyId)?.companyName}</h2>
          <ul>
            {insurancePlans.length > 0 ? (
              insurancePlans.map((plan, index) => (
                <li key={index}>{plan}</li>
              ))
            ) : (
              <p>No insurance plans available for this company.</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InsuranceCompanyList;
