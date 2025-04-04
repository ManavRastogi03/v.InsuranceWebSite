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
      match: [/^\+?[1-9]\d{9,14}$/, "Please enter a valid contact number"], // Improved regex
    },
    insurancePlans: {
      type: [String], // Array of plan names (Basic, Premium, etc.)
      required: true,
      validate: {
        validator: function (plans) {
          return Array.isArray(plans) && plans.length > 0;
        },
        message: "At least one insurance plan is required.",
      },
    },
  },
  { timestamps: true } // Adds createdAt & updatedAt timestamps
);

const InsuranceCompany = mongoose.model("InsuranceCompany", insuranceCompanySchema);
export default InsuranceCompany;
