import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../Context/FormDataContext.jsx";
import Button from "../ui/Button.jsx";

const ReviewPayment = () => {
  const navigate = useNavigate();
  const { formData } = useFormData();

  const handleSubmit = () => {
    // Normally, you'd send data to backend here
    alert("Form submitted successfully!");
    navigate("/thank-you");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Review Your Details</h2>

      <div className="grid gap-3">
        <p><strong>Full Name:</strong> {formData.fullName}</p>
        <p><strong>DOB:</strong> {formData.dob}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Mobile:</strong> {formData.mobile}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Income:</strong> {formData.income}</p>
        <p><strong>Sum Assured:</strong> {formData.sumAssured}</p>
        <p><strong>Smoker:</strong> {formData.smoker}</p>
        <p><strong>Medical Condition:</strong> {formData.hasMedicalCondition}</p>
        <p><strong>On Medication:</strong> {formData.isOnMedication}</p>
        <p><strong>Hospitalized:</strong> {formData.hospitalizationHistory}</p>
        <p><strong>Nominee Name:</strong> {formData.nomineeName}</p>
        <p><strong>Nominee Relation:</strong> {formData.nomineeRelation}</p>
        <p><strong>Nominee DOB:</strong> {formData.nomineeDob}</p>
      </div>

      <div className="pt-4 border-t">
        <h3 className="text-lg font-medium mb-3">Payment Summary</h3>
        <p>Total Premium: ₹8,500/year (example)</p>
        <p>Payment Method: <em>Select on next screen</em></p>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleSubmit} className="mt-4">Confirm & Proceed to Pay</Button>
      </div>
    </div>
  );
};

export default ReviewPayment;