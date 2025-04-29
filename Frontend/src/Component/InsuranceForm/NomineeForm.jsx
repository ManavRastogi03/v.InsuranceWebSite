import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormData } from "../Context/FormDataContext.jsx";
import Input from "../ui/Input.jsx";
import Label from "../ui/Label.jsx";
import Button from "../ui/Button.jsx";

const NomineeForm = ({ insuranceType }) => {
  const navigate = useNavigate();
  const { formData, updateFormData } = useFormData();

  const handleNext = () => {
    navigate(`/${insuranceType}/step5`);
  };


  return (
    <form className="grid gap-5">
      <div>
        <Label htmlFor="nomineeName">Nominee's Full Name</Label>
        <Input
          id="nomineeName"
          name="nomineeName"
          placeholder="Enter nominee's full name"
          value={formData.nomineeName}
          onChange={(e) => updateFormData("nomineeName", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="nomineeRelation">Relation with Nominee</Label>
        <Input
          id="nomineeRelation"
          name="nomineeRelation"
          placeholder="E.g. Father, Wife, Son"
          value={formData.nomineeRelation}
          onChange={(e) => updateFormData("nomineeRelation", e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="nomineeDob">Nominee's Date of Birth</Label>
        <Input
          id="nomineeDob"
          name="nomineeDob"
          type="date"
          value={formData.nomineeDob}
          onChange={(e) => updateFormData("nomineeDob", e.target.value)}
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
                Policy Start Date:
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => updateFormData("startDate", e.target.value)}
                style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontWeight: "bold", marginBottom: "0.5rem" }}>
                Policy End Date:
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => updateFormData("endDate", e.target.value)}
                style={{ padding: "0.5rem", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }}
              />
            </div>


      <div className="flex justify-end pt-4">
        <Button onClick={handleNext}>Next</Button>
      </div>
    </form>
  );
};

export default NomineeForm;