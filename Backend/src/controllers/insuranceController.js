import InsuranceForm from "../models/InsuranceForm.js";
import mongoose from "mongoose"; // PlanId validation ke liye chahiye

export const submitForm = async (req, res) => {
  try {
    const formData = req.body;

    // ✅ Cloudinary files (optional)
    const files = req.files;
    if (files?.aadhaar) formData.aadhaar = files.aadhaar[0].path;
    if (files?.pan) formData.pan = files.pan[0].path;
    if (files?.photo) formData.photo = files.photo[0].path;
    if (files?.policyCopy) formData.policyCopy = files.policyCopy[0].path;

    // ✅ Validate required fields
    if (!formData.fullName || !formData.mobile || !formData.insuranceType) {
      return res.status(400).json({
        success: false,
        message: "Missing fullName, mobile, or insuranceType",
      });
    }

    // ✅ Validate PlanId
    if (!formData.planId || !mongoose.Types.ObjectId.isValid(formData.planId)) {
      return res.status(400).json({
        success: false,
        message: "Invalid or missing PlanId!",
      });
    }

    // ✅ Save the form
    const newForm = new InsuranceForm({
      ...formData,
      planId: formData.planId, // important! PlanID save hoga
    });

    const saved = await newForm.save();

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully",
      data: saved._id,
    });
  } catch (err) {
    console.log("Received Form Data:", req.body);
    console.error("❌ Error submitting form:", err.message);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
