import mongoose from "mongoose";

const InsuranceFormSchema = new mongoose.Schema(
  {
    // Step 1: Basic Info
    fullName: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: true,
    },
    mobile: {
        type: String,
        required: true,
        match: [/^[6-9]\d{9}$/, "Please enter a valid Indian mobile number"],
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },
    insuranceType: {
        type: String,
        enum: ["term", "life", "health", "car", "bike", "travel", "business"],
        required: true,
    },
    // Step 2: Term Info
    smoker: {
    type: String,
    enum: ["yes", "no", "Yes", "No"],
    },

    income: {
    type: Number,
    min: [0, "Income must be positive"],
    },
    sumAssured: {
    type: Number,
    min: [0, "Sum assured must be positive"],
    },

    // Step 3: Medical
    hasMedicalCondition: {
      type: Boolean,
    },
    isOnMedication: {
      type: Boolean,
    },
    hospitalizationHistory: {
      type: String,
    },

    // Step 4: Nominee
    nomineeName: {
      type: String,
    },
    nomineeRelation: {
      type: String,
    },
    nomineeDob: {
      type: Date,
    },

    // Step 5: Uploads (we'll store file names or links later)
    aadhaar: {
      type: String,
    },
    pan: {
      type: String,
    },
    policyCopy: {
      type: String,
    },
    photo: {
      type: String,
    },
    planId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsurancePlan",
      required: true,
    },


    // Step 6: Confirmation
    confirmed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // adds createdAt & updatedAt
  }
);

export default mongoose.model("InsuranceForm", InsuranceFormSchema);
