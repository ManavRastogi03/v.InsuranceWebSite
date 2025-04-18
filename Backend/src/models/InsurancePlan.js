import mongoose from "mongoose";

const InsurancePlanSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Plan name is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Plan description is required"],
      trim: true,
    },
    type: {
      type: String,
      required: [true, "Insurance type is required"],
      enum: [
        "Health Insurance",
        "Car Insurance",
        "Life Insurance",
        "Term Insurance",
        "Bike Insurance",
        "Business Insurance",
        "Travel Insurance",
      ],
      index: true, // ✅ Indexed for faster queries
    },
    coverageAmount: {
      type: Number,
      required: [true, "Coverage amount is required"],
      min: [5000, "Coverage must be at least ₹5000"],
    },
    premiumPrice: {
      type: Number,
      required: [true, "Premium price is required"],
      min: [100, "Premium must be at least ₹100"],
    },
    duration: {
      type: String,
      required: [true, "Duration is required"],
      enum: ["6 Months", "1 Year", "2 Years", "5 Years"],
    },
    eligibleMembers: {
      type: [String],
      required: true,
      enum: ["Self", "Spouse", "Children", "Parents","Family Plans","Senior Citizen","For Parents","Women Insurance","Children Insurance"],
    },
    features: {
      type: [String], // ✅ List of features for better readability
      required: true,
    },
    termsAndConditions: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
    planImage: {
      type: String, // ✅ Image URL stored in Cloudinary
      default: process.env.DEFAULT_PLAN_IMAGE, // ✅ Set default image from .env
    },
    adminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // ✅ Reference to Admin who created the plan
      required: true,
    },
    updatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // ✅ Track who last updated the plan
    },
    isDeleted: {
      type: Boolean,
      default: false, // ✅ Soft delete functionality
    },
    subscribedUsers: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User", // ✅ Track users who have taken the plan
        },
        subscribedAt: {
          type: Date,
          default: Date.now, // ✅ Timestamp when user subscribed
        },
        status: {
          type: String,
          enum: ["Active", "Inactive"],
          default: "Active", // ✅ Track if user is currently subscribed
        },
      },
    ],
  },
  {
    timestamps: true, // ✅ Auto add createdAt & updatedAt fields
    toJSON: { virtuals: true }, // ✅ Include virtual fields in responses
    toObject: { virtuals: true },
  }
);

// ✅ Virtual Field: Calculate Total Cost Over Duration
InsurancePlanSchema.virtual("totalCost").get(function () {
  let durationYears = 1;
  if (this.duration === "2 Years") durationYears = 2;
  else if (this.duration === "5 Years") durationYears = 5;
  return this.premiumPrice * durationYears;
});

// ✅ Pre-save Middleware: Ensure Status Consistency
InsurancePlanSchema.pre("save", function (next) {
  if (!this.status) {
    this.status = "Active";
  }
  next();
});

// ✅ Exclude soft-deleted records in queries
InsurancePlanSchema.pre(/^find/, function (next) {
  this.where({ isDeleted: false });
  next();
});

const InsurancePlan = mongoose.model("InsurancePlan", InsurancePlanSchema);
export default InsurancePlan;
