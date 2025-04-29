import React, { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

// 🔁 Hook to use form context easily
export const useFormData = () => useContext(FormDataContext);

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    planId: "",
    fullName: "",
    dob: "",
    gender: "",
    mobile: "",
    email: "",
    insuranceType: "",

    // Step 2: Term Info
    smoker: "",
    income: "",
    sumAssured: "",

    // Step 3: Medical
    hasMedicalCondition: false,
    isOnMedication: false,
    hospitalizationHistory: "",

    // Step 4: Nominee Info
    nomineeName: "",
    nomineeRelation: "",
    nomineeDob: "",

    // Step 5: Uploads
    aadhaar: null,
    pan: null,
    policyCopy: null,
    photo: null,

    // Step 6: Confirmation
    startDate: "",
    endDate: "",
    confirmed: false,
  });

  // ➕ Update any field
  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // 🔄 Reset all fields
  const resetFormData = () => {
    setFormData({
      planId: "",
      fullName: "",
      dob: "",
      gender: "",
      mobile: "",
      email: "",
      insuranceType: "",
      smoker: "",
      income: "",
      sumAssured: "",
      hasMedicalCondition: false,
      isOnMedication: false,
      hospitalizationHistory: "",
      nomineeName: "",
      nomineeRelation: "",
      nomineeDob: "",
      aadhaar: null,
      pan: null,
      policyCopy: null,
      photo: null,
      startDate: "",
      endDate: "",
      confirmed: false,
    });
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData, resetFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
