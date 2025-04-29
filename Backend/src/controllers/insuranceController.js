import InsuranceForm from "../models/InsuranceForm.js";
import InsurancePlan from "../models/InsurancePlan.js";

import mongoose from "mongoose"; // PlanId validation ke liye chahiye

export const submitForm = async (req, res) => {
  try {
    const formData = req.body;
    const files = req.files;

    // Log the formData and files for debugging
    console.log("Received Form Data:", formData);
    console.log("Uploaded Files:", files);

    // Handle file uploads (optional)
    if (files?.aadhaar) formData.aadhaar = files.aadhaar[0].path;
    if (files?.pan) formData.pan = files.pan[0].path;
    if (files?.photo) formData.photo = files.photo[0].path;
    if (files?.policyCopy) formData.policyCopy = files.policyCopy[0].path;

    // Validate required fields
    if (!formData.fullName || !formData.mobile || !formData.insuranceType || !formData.planId) {
      return res.status(400).json({
        success: false,
        message: "Please make sure all the required fields (fullName, mobile, insuranceType, planId) are provided.",
      });
    }

    // Validate PlanId
    if (!mongoose.Types.ObjectId.isValid(formData.planId)) {
      return res.status(400).json({
        success: false,
        message: "The PlanId is missing or invalid. Please check and try again.",
      });
    }

    // Ensure the plan exists
    const plan = await InsurancePlan.findById(formData.planId);
    if (!plan) {
      return res.status(400).json({
        success: false,
        message: "The specified insurance plan does not exist.",
      });
    }

    // Attach the userId from the authenticated user (from middleware)
    const userId = req.user.id;
    formData.userId = userId;

    // Save the form to the database
    const newForm = new InsuranceForm(formData);
    const saved = await newForm.save();

    // Success response
    return res.status(201).json({
      success: true,
      message: "Form submitted successfully! Your insurance form has been saved.",
      data: {
        _id: saved._id,
        userId: saved.userId,
        planId: saved.planId,

      }
    });
    

  } catch (err) {
    console.error("Error during form submission:", err); // Log the error to the server console
    return res.status(500).json({
      success: false,
      message: "There was an issue submitting the form. Please try again later.",
      error: err.message, // Include the error message in the response for debugging
    });
  }
};
export const getAllInsuranceForms = async (req, res) => {
  try {
    // Fetch all insurance forms from the database
    const insuranceForms = await InsuranceForm.find().populate('planId userId'); // (Optional) Populate user/plan info

    return res.status(200).json({
      success: true,
      message: "Fetched all insurance forms successfully",
      count: insuranceForms.length,
      data: insuranceForms,
    });

  } catch (error) {
    console.error("Error fetching insurance forms:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch insurance forms",
      error: error.message,
    });
  }
};