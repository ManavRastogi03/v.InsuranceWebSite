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
  
