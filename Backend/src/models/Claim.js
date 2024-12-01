import mongoose from "mongoose";

// Define the Claim Schema
const claimSchema = new mongoose.Schema(
  {
    claimNumber: {
      type: String,
      required: true,
      unique: true,
    },
    policy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Policy",  // Reference to the Policy model
      required: true,
    },
    claimant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",  // Reference to the User model (policyholder)
      required: true,
    },
    claimAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",  // Default status
    },
    claimDate: {
      type: Date,
      default: Date.now,
    },
    settlementDate: {
      type: Date,
      default: null,  // To be filled when claim is settled
    },
    description: {
      type: String,
      required: true,
    },
    documents: {
      type: [String],  // Array of file paths or URLs for uploaded documents
      default: [],
    },
  },
  {
    timestamps: true,  // Automatically adds `createdAt` and `updatedAt` fields
  }
);

// Create and export the Claim model
const Claim = mongoose.model("Claim", claimSchema);
export default Claim;
