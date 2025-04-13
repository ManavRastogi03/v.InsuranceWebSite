
import React, { createContext, useContext, useState } from "react";

const FormDataContext = createContext();

export const useFormData = () => useContext(FormDataContext);

export const FormDataProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    fullName: "",
    dob: "",
    gender: "",
    mobile: "",
    email: "",

    // Step 2: Term Insurance Info
    smoker: "",
    income: "",
    sumAssured: "",

    // Step 3: Medical History
    hasMedicalCondition: false,
    isOnMedication: false,
    hospitalizationHistory: "",

    // Step 4: Nominee
    nomineeName: "",
    nomineeRelation: "",
    nomineeDob: "",

    // Step 5: Uploads
    aadhaar: null,
    pan: null,
    policyCopy: null,
    photo: null,

    // Step 6: For Review
    confirmed: false,
  });

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};
