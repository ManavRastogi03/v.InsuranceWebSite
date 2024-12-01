import mongoose from "mongoose";

// Define the Policy Schema
const policySchema = new mongoose.Schema(
  {
    policyNumber: {
      type: String,
      required: true,  // Policy number is required
      unique: true,    // Ensures policy number is unique
    },
    policyholder: {
      type: mongoose.Schema.Types.ObjectId,  // Reference to User model
      ref: "User",                           // Points to the User model
      required: true,  // Policyholder is required
    },
    coverageAmount: {
      type: Number,
      required: true, // The coverage amount is required
    },
    premium: {
      type: Number,
      required: true, // Premium amount is required
    },
    startDate: {
      type: Date,
      required: true, // Start date is required
    },
    endDate: {
      type: Date,
      required: true, // End date is required
    },
    status: {
      type: String,
      enum: ["active", "expired", "suspended"], // Status options
      default: "active", // Default status is "active"
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create and export the Policy model
const Policy = mongoose.model("Policy", policySchema);

export default Policy;
