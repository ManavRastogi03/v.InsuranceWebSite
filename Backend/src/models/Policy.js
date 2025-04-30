import mongoose from 'mongoose';
const policySchema = new mongoose.Schema({
  policyId: {
    type: String,
    required: true,
    unique: true,
  },
  policyholder: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  policyNumber: {
  type: String,
  unique: true,
  sparse: true, // ⚡ important
},

  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InsurancePlan", // ✅ Link to insurance plan
    required: true,
  },
  insuranceForm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "InsuranceForm", // ✅ Link to submitted insurance form
    required: true,
  },
  coverageAmount: {
    type: Number,
    required: true,
  },
  premium: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ["active", "expired", "suspended"],
    default: "active",
  },
  paymentStatus: {
    type: String,
    enum: ["paid", "unpaid"],
    default: "paid",
  },
  documentUrl: {
    type: String,
  }
}, {
  timestamps: true,
});

// Create the model
const Policy = mongoose.model('Policy', policySchema);

export default Policy;
