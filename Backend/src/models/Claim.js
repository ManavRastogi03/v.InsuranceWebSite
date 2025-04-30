import mongoose from "mongoose";

const claimSchema = new mongoose.Schema({
  claimId: {
    type: String,
    required: true,
    unique: true,
  },
  policyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Policy',
    required: true,
  },
  claimType: {
    type: String,
    required: true,
    enum: ["Medical", "Car Accident", "Travel", "Home", "Other"], // Customize as needed
  },
  claimAmount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  claimDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Submitted", "In Review", "Approved", "Rejected"],
    default: "Submitted",
  },
  documentUrl: {
    type: String,
    default: null,
  },
}, {
  timestamps: true // Adds createdAt and updatedAt
});

const Claim = mongoose.model("Claim", claimSchema);

export default Claim;
