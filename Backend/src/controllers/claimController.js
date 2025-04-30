import Claim from "../models/Claim.js"; // Assuming you have a Claim model
import Policy from "../models/Policy.js"; // Assuming you have a Policy model

export const createClaim = async (req, res) => {
  try {
    const { policyId, claimType, claimAmount, description } = req.body;
    const file = req.file;
    
    console.log("Received policyId:", policyId);
    
    const policy = await Policy.findOne({ policyId });
    console.log(policy);
    
    if (!policy) {
      return res.status(404).json({ success: false, message: 'Policy not found' });
    }

    
    // Generate unique claimId
    const claimId = `CLAIM-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const newClaim = new Claim({
      claimId,
      policyId: policy._id,
      claimType,
      claimAmount,
      description,
      documentUrl: file?.path || null, // Cloudinary URL
    });

    await newClaim.save();

    res.status(201).json({
      success: true,
      message: 'Claim created successfully',
      claim: newClaim,
    });
  } catch (error) {
    console.error('Error creating claim:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const getUserClaims = async (req, res) => {
  try {
    const userId = req.user.id; // assuming you're using auth middleware that sets req.user

    // 1. Find all policies of this user
    const userPolicies = await Policy.find({ policyholder: userId });

    const policyIds = userPolicies.map(policy => policy._id);

    // 2. Get all claims linked to those policies
    const claims = await Claim.find({ policyId: { $in: policyIds } });

    res.status(200).json({
      success: true,
      claims,
    });
  } catch (error) {
    console.error("Error fetching claims:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching user claims",
    });
  }
};

