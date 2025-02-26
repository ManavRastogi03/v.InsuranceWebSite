import InsurancePlan from "../models/InsurancePlan.js";

/**
 * @desc    Create a new insurance plan (Admin Only)
 * @route   POST /api/admin/insurance
 * @access  Private (Admin)
 */
export const createInsurancePlan = async (req, res) => {
  try {
    const { name, description, type, coverageAmount, premiumPrice, duration, eligibleMembers, features, termsAndConditions } = req.body;

    // ✅ Extract adminId from authenticated user
    const adminId = req.user.id; // Make sure `req.user` exists from auth middleware
    if (!adminId) {
      return res.status(401).json({ message: "Unauthorized: Admin ID missing" });
    }

    // ✅ Create new insurance plan
    const newPlan = new InsurancePlan({
      name,
      description,
      type,
      coverageAmount,
      premiumPrice,
      duration,
      eligibleMembers,
      features,
      termsAndConditions,
      adminId, // Attach admin ID to track who created the plan
    });

    await newPlan.save();

    res.status(201).json({
      message: "Insurance plan created successfully",
      plan: newPlan,
    });

  } catch (error) {
    res.status(500).json({ message: "Error creating insurance plan", error: error.message });
  }
};

export const deleteInsurancePlan = async (req, res) => {
  try {
    const { id } = req.params;
    const adminId = req.user.id; // ✅ Authenticated Admin ID from middleware

    // 🔍 Validate if ID is a valid MongoDB ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ success: false, message: "Invalid insurance plan ID" });
    }

    // 🔍 Check if the insurance plan exists
    const insurancePlan = await InsurancePlan.findById(id);
    if (!insurancePlan) {
      return res.status(404).json({ success: false, message: "Insurance plan not found" });
    }

    // 🔐 Ensure only the creator admin can delete the plan
    if (insurancePlan.adminId.toString() !== adminId) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized: You can only delete plans created by you",
      });
    }

    // 🗑 Delete the insurance plan
    await InsurancePlan.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Insurance plan deleted successfully",
      deletedPlanId: id,
    });

  } catch (error) {
    console.error("❌ Error deleting insurance plan:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
