import mongoose from "mongoose";

const insuranceCompanySchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    companyLogo: {
      type: String, // Stores Cloudinary image URL
      required: true,
    },
    contactNumber: {
      type: String,
      required: true,
      match: [/^\+?[1-9]\d{9,14}$/, "Please enter a valid contact number"],
    },
    // ✅ Optional: Instead of just names, reference actual plan docs if needed
    insurancePlans: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "InsurancePlan",
      },
    ],
  },
  { timestamps: true }
);

const InsuranceCompany = mongoose.model("InsuranceCompany", insuranceCompanySchema);
export default InsuranceCompany;
