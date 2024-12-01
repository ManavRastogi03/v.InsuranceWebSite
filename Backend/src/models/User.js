import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// User schema definition
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true, // Ensures usernames are unique
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures email is unique
      match: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i, // Email validation
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Ensure password is at least 6 characters long
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"], // Allows only these options
    },
    phone: {
      type: String,
      optional: true, // This is an optional field
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Hash the user's password before saving the user
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  // Hash password with bcrypt
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare provided password with stored hash
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
