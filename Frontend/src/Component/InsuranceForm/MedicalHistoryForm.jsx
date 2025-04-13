import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../Context/FormDataContext.jsx";
// import Input from "@/components/ui/input";
import Label from "../ui/Label.jsx";
import Button from "../ui/Button.jsx";

const MedicalHistoryForm = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormData();

  const handleNext = () => {
    navigate("/term/step4");
  };

  return (
    <form className="grid gap-5">
      <div>
        <Label htmlFor="hasMedicalCondition">Any existing medical condition?</Label>
        <select
          id="hasMedicalCondition"
          name="hasMedicalCondition"
          value={formData.hasMedicalCondition}
          onChange={(e) => updateFormData("hasMedicalCondition", e.target.value)}
          className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <Label htmlFor="isOnMedication">Are you currently on medication?</Label>
        <select
          id="isOnMedication"
          name="isOnMedication"
          value={formData.isOnMedication}
          onChange={(e) => updateFormData("isOnMedication", e.target.value)}
          className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div>
        <Label htmlFor="hospitalizationHistory">Have you been hospitalized in the last 5 years?</Label>
        <select
          id="hospitalizationHistory"
          name="hospitalizationHistory"
          value={formData.hospitalizationHistory}
          onChange={(e) => updateFormData("hospitalizationHistory", e.target.value)}
          className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select an option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={handleNext}>Next</Button>
      </div>
    </form>
  );
};

export default MedicalHistoryForm;