import React from "react";
import { useState } from "react";
import  Button from "../Component/ui/Button";
import Input from "../Component/ui/Input";
import Modal from "../Component/ui/Modal";


const AddCompanyModal = ({ onClose, onSubmit, company }) => {
  const [formData, setFormData] = useState(company || { name: "", logo: "", contact: "", plans: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-lg font-semibold">{company ? "Edit Company" : "Add New Company"}</h2>
      <Input name="name" placeholder="Company Name" value={formData.name} onChange={handleChange} />
      <Input name="logo" type="file" onChange={handleChange} />
      <Input name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleChange} />
      <Input name="plans" placeholder="Plans (comma separated)" value={formData.plans} onChange={handleChange} />
      <Button onClick={handleSubmit}>{company ? "Update" : "Create"}</Button>
    </Modal>
  );
};

export default AddCompanyModal;
