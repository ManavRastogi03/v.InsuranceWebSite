import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../Context/FormDataContext.jsx";
import Input from "../ui/Input.jsx";
import Label from "../ui/Label.jsx";
import Button from "../ui/Button.jsx";

const UploadsKYCForm = () => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormData();

  const handleNext = () => {
    navigate("/term/step6");
  };

  const handleFileChange = (field) => (e) => {
    const file = e.target.files[0];
    updateFormData(field, file);
  };

  return (
    <form className="grid gap-5">
      <div>
        <Label htmlFor="aadhaar">Upload Aadhaar (PDF or Image)</Label>
        <Input
          id="aadhaar"
          name="aadhaar"
          type="file"
          accept=".pdf,image/*"
          onChange={handleFileChange("aadhaar")}
        />
      </div>

      <div>
        <Label htmlFor="pan">Upload PAN Card</Label>
        <Input
          id="pan"
          name="pan"
          type="file"
          accept=".pdf,image/*"
          onChange={handleFileChange("pan")}
        />
      </div>

      <div>
        <Label htmlFor="photo">Upload Photo</Label>
        <Input
          id="photo"
          name="photo"
          type="file"
          accept="image/*"
          onChange={handleFileChange("photo")}
        />
      </div>

      <div className="flex justify-end pt-4">
        <Button onClick={handleNext}>Next</Button>
      </div>
    </form>
  );
};

export default UploadsKYCForm;