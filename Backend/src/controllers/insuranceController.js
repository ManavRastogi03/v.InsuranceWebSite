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
        message: "Please make sure all the required fields (fullName, mobile, insuranceType) are provided.",
      });
    }

    // ✅ Validate PlanId
    if (!formData.planId || !mongoose.Types.ObjectId.isValid(formData.planId)) {
      return res.status(400).json({
        success: false,
        message: "The PlanId is missing or invalid. Please check and try again.",
      });
    }

    // Attach the userId from the authenticated user (from the middleware)
    const userId = req.user.id;  // Access the userId from the decoded JWT
    console.log("Authenticated User ID:", userId);
    
    formData.userId = userId;

    // ✅ Save the form
    const newForm = new InsuranceForm({
      ...formData,
      planId: formData.planId, // important! PlanID will be saved
    });

    const saved = await newForm.save();

    // // ✅ Optionally: Update user profile to link the policy (planId)
    // await User.findByIdAndUpdate(userId, {
    //   $push: { policies: formData.planId }, // Add the planId to the user's policies array
    // });

    return res.status(201).json({
      success: true,
      message: "Form submitted successfully! Your insurance form has been saved.",
      data: saved._id,
    });
  } catch (err) {
    console.log("Received Form Data:", req.body);
    console.error("❌ Error submitting form:", err.message);
    console.log("Error:", err);
    return res.status(500).json({

      success: false,
      message: "There was an issue submitting the form. Please try again later.",
    });
  }
};
