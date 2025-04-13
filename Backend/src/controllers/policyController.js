// import Policy from "../models/Policy.js";

// // Controller to create a new policy
// const createPolicy = async (req, res) => {
//   const { policyNumber, policyholder, coverageAmount, premium, startDate, endDate } = req.body;

//   try {
//     // Check if policy already exists
//     const policyExists = await Policy.findOne({ policyNumber });
//     if (policyExists) {
//       return res.status(400).json({ message: "Policy with this number already exists" });
//     }

//     // Create new policy
//     const newPolicy = await Policy.create({
//       policyNumber,
//       policyholder, // This will be the user ID from the request
//       coverageAmount,
//       premium,
//       startDate,
//       endDate,
//     });

//     res.status(201).json({
//       message: "Policy created successfully",
//       policy: newPolicy,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error creating policy", error: error.message });
//   }
// };

// export default createPolicy;
