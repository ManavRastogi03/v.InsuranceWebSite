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
      return res.status(401).json({ 
        message: "Unauthorized: Admin ID missing"
      });
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
export const updateInsurancePlan = async (req, res) => {
  try {
    const { planId } = req.params; // 📌 Get plan ID from URL
    const updateData = req.body; // 📌 Get update fields from request body

    // ✅ Check if the plan exists
    const plan = await InsurancePlan.findById(planId);
    if (!plan) {
      return res.status(404).json({ message: "Insurance plan not found" });
    }

    // 🔄 Update only provided fields
    Object.keys(updateData).forEach((key) => {
      plan[key] = updateData[key];
    });

    // 💾 Save the updated plan
    await plan.save();

    res.status(200).json({
      message: "Insurance plan updated successfully",
      plan,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating insurance plan", error: error.message });
  }
};
export const subscribeToPlan = async (req, res) => {
  try {
    const { planId } = req.params;
    const userId = req.user.id; // ✅ Get user from authenticated request

    // 🔍 Find the Insurance Plan
    const plan = await InsurancePlan.findById(planId);
    if (!plan) {
      return res.status(404).json({ message: "Insurance plan not found" });
    }

    // 🔄 Check if User Already Subscribed
    if (plan.subscribedUsers.includes(userId)) {
      return res.status(400).json({ message: "You are already subscribed to this plan" });
    }

    // ✅ Add User to Subscribed List
    plan.subscribedUsers.push(userId);

    // 🔄 Auto-Update Status: If Users Exist, Keep Active
    plan.status = plan.subscribedUsers.length > 0 ? "Active" : "Inactive";

    await plan.save();

    res.status(200).json({ message: "Subscription successful", plan });
  } catch (error) {
    res.status(500).json({ message: "Error subscribing to insurance plan", error: error.message });
  }
};
// ✅ Controller: Fetch User's Subscribed Plans
export const getUserSubscriptions = async (req, res) => {
  try {
    const userId = req.user.id; // Get logged-in user ID

    // 🔍 Find plans where the user has subscribed
    const plans = await InsurancePlan.find({
      "subscribedUsers.userId": userId, // ✅ Filter plans where user is in the array
      "subscribedUsers.status": "Active", // ✅ Only active subscriptions
    }).select("-__v"); // Remove version key

    if (!plans.length) {
      return res.status(404).json({ message: "No active subscriptions found" });
    }

    res.status(200).json({ plans });
  } catch (error) {
    res.status(500).json({ message: "Error fetching subscriptions", error: error.message });
  }
};
