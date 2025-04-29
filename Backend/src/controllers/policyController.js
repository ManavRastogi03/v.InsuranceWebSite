import mongoose from "mongoose";
import Policy from '../models/Policy.js';
import User from '../models/User.js';
import authMiddleware  from '../middlewares/authMiddleware.js';

const { Schema, model } = mongoose;  

export const createPolicy = async (req, res) => {
    try {
      // Step 1: Extract necessary fields from request body
      const { 
        userId, 
        planId, 
        insuranceFormId, 
        coverageAmount, 
        startDate, 
        premium, 
        endDate,
        documentUrl 
      } = req.body;
  
      // Step 2: Generate a unique policyId (can improve logic later)
      const policyId = `${userId}-${planId}`;
      const policyNumber = `POLICY-${Date.now()}`; // simple random unique number

  
      // Step 3: Create new policy
      const newPolicy = new Policy({
        policyId,
        policyholder: userId,
        policyNumber,
        plan: planId,                // ✅ correctly mapped
        insuranceForm: insuranceFormId, // ✅ correctly mapped
        coverageAmount,
        premium,
        startDate,
        endDate,
        paymentStatus: "paid",       // ✅ default
        documentUrl: documentUrl || null, // ✅ optional
      });
  
      // Step 4: Save policy
      await newPolicy.save();
  
      // Step 5: Optionally push policy to User model (if User model maintains array)
      await User.findByIdAndUpdate(userId, {
        $push: { policies: newPolicy._id },
      });
  
      // Step 6: Respond success
      res.status(201).json({
        message: 'Policy created successfully',
        policy: newPolicy,
      });
  
    } catch (error) {
      console.error("Error creating policy:", error);
      res.status(500).json({
        message: 'Error creating policy',
        error: error.message,
      });
    }
  };
  
  export const getUserPolicies = async (req, res) => {
    try {
      const userId = req.user.id;

  
      if (!userId) {
        return res.status(401).json({ success: false, message: 'Unauthorized: user not found in token' });
      }
  
      const policies = await Policy.find({ policyholder: userId })
        .populate("plan", "name coverageType")
        .populate("insuranceForm", "fullName startDate endDate");
  
      res.status(200).json({ success: true, policies });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Failed to fetch user policies', error: error.message });
    }
  };
  
  
  
  
