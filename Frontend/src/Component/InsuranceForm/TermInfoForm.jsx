import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../Context/FormDataContext.jsx";
import Input from "../ui/Input.jsx";
import Label from "../ui/Label.jsx";
import Button from "../ui/Button.jsx";

const TermInsuranceInfoForm = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormData();

  const handleNext = () => {
    navigate("/term/step3");
  };

  return (
    <form className="grid gap-5">
      <div>
        <Label htmlFor="income">Annual Income</Label>
        <Input
          id="income"
          name="income"
          type="number"
          placeholder="Enter your annual income"
          value={formData.income}
          onChange={(e) => updateFormData("income", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="sumAssured">Sum Assured</Label>
        <Input
          id="sumAssured"
          name="sumAssured"
          type="number"
          placeholder="E.g. 5000000"
          value={formData.sumAssured}
          onChange={(e) => updateFormData("sumAssured", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="smoker">Do you smoke?</Label>
        <select
          id="smoker"
          name="smoker"
          value={formData.smoker}
          onChange={(e) => updateFormData("smoker", e.target.value)}
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

export default TermInsuranceInfoForm;