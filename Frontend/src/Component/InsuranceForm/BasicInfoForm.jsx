import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../Context/FormDataContext.jsx";
import Input from "../ui/Input.jsx";
import Label from "../ui/Label.jsx";
import Button from "../ui/Button.jsx";
const BasicInfoForm = ({ insuranceType }) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormData();

  const handleNext = () => {
    navigate(`/${insuranceType}/step2`);
  };

  return (
    <form className="grid gap-5">
      <div>
        <Label htmlFor="fullName">Full Name</Label>
        <Input
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={(e) => updateFormData("fullName", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="dob">Date of Birth</Label>
        <Input
          id="dob"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={(e) => updateFormData("dob", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="gender">Gender</Label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={(e) => updateFormData("gender", e.target.value)}
          className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <Label htmlFor="mobile">Mobile Number</Label>
        <Input
          id="mobile"
          name="mobile"
          type="tel"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={(e) => updateFormData("mobile", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="email">Email Address (optional)</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(e) => updateFormData("email", e.target.value)}
        />
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={handleNext}>Next</Button>
      </div>
    </form>
  );
};

export default BasicInfoForm;
