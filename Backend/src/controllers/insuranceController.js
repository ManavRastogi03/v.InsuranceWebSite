import InsuranceForm from "../models/InsuranceForm.js";
// import InsurancePlan from "../models/InsurancePlan.js";

// // ✅ Fetch All Insurance Plans
// export const getAllInsurancePlans = async (req, res) => {
//     try {
//       const plans = await InsurancePlan.find();
      
//       if (plans.length === 0) {
//         return res.status(200).json({ success: true, message: "No insurance plans available", plans: [] });
//       }
  
//       res.status(200).json({ success: true, plans });
//     } catch (error) {
//       res.status(500).json({ success: false, message: "Error fetching insurance plans", error: error.message });
//     }
//   };
  
// // ✅ Fetch a Specific Insurance Plan by ID
// export const getInsurancePlanById = async (req, res) => {
//     try {
//       const { id } = req.params;
  
//       // 🔍 Find plan by ID
//       const plan = await InsurancePlan.findById(id);
//       if (!plan) return res.status(404).json({ success: false, message: "Insurance plan not found" });
  
//       res.status(200).json({ success: true, plan });
//     } catch (error) {
//       res.status(500).json({ success: false, message: "Error fetching insurance plan", error: error.message });
//     }
//   };
export const submitForm = async (req, res) => {
  try {
    const formData = req.body;

    // Cloudinary files (optional)
    const files = req.files;
    if (files?.aadhaar) formData.aadhaar = files.aadhaar[0].path;
    if (files?.pan) formData.pan = files.pan[0].path;
    if (files?.photo) formData.photo = files.photo[0].path;
    if (files?.policyCopy) formData.policyCopy = files.policyCopy[0].path;

    // Validate required fields
    if (!formData.fullName || !formData.mobile || !formData.insuranceType) {
      return res.status(400).json({
        success: false,
        message: "Missing fullName, mobile, or insuranceType",
      });
    }

    const newForm = new InsuranceForm(formData);
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
