import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";
import bcrypt from "bcrypt";
import redisClient from "../config/redisClient.js";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

// ✅ Register User with Admin Code Verification
export const registerUser = async (req, res) => {
  try {
    let { firstName, lastName, username, email, password, mobileNo, gender, adminCode } = req.body;

    // ✨ Trim Inputs to Remove Extra Spaces
    firstName = firstName.trim();
    lastName = lastName.trim();
    username = username.trim();
    email = email.trim().toLowerCase(); // ✅ Normalize email
    mobileNo = mobileNo.trim();

    // 🔍 Validate Required Fields
    if (!firstName || !lastName || !username || !email || !password || !mobileNo || !gender) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // 🔍 Validate Mobile Number (10 Digits)
    if (!/^[0-9]{10}$/.test(mobileNo)) {
      return res.status(400).json({ success: false, message: "Invalid mobile number format" });
    }

    // 🔍 Validate Gender
    const allowedGenders = ["Male", "Female", "Other"];
    if (!allowedGenders.includes(gender)) {
      return res.status(400).json({ success: false, message: "Invalid gender value" });
    }

    // 🔍 Check if User Already Exists (by Email, Username, or Mobile Number)
    const existingUser = await User.findOne({ $or: [{ email }, { username }, { mobileNo }] });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message:
          existingUser.email === email
            ? "Email already in use"
            : existingUser.username === username
            ? "Username already taken"
            : "Mobile number already registered",
      });
    }

    // 🔑 Determine User Role (Admin or Regular User)
    let role = "user"; // Default role
    if (adminCode) {
      if (adminCode === process.env.ADMIN_INVITE_CODE) {
        role = "admin";
      } else {
        return res.status(403).json({ success: false, message: "Invalid admin invitation code" });
      }
    }

    // 📝 Create New User
    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password,
      mobileNo,
      gender,
      role, // ✅ Assign Role
      profilePic: process.env.DEFAULT_PROFILE_IMAGE, // ✅ Default Profile Picture
    });

    await newUser.save();

    // 🎟️ Generate JWT Token
    const token = jwt.sign({ id: newUser._id, email: newUser.email, role: newUser.role }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 📤 Send Success Response
    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        userId: newUser._id,
        email: newUser.email,
        username: newUser.username,
        mobileNo: newUser.mobileNo,
        gender: newUser.gender,
        role: newUser.role,
        profilePic: newUser.profilePic,
        token, // ✅ Send Token
      },
    });
  } catch (error) {
    console.error("❌ Error Registering User:", error);
    res.status(500).json({ success: false, message: "Error registering user", error: error.message });
  }
};




// ✅ Login User
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔍 Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    // 🔑 Compare hashed password using model method
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // 🎟️ Generate JWT Token
    const token = jwt.sign({ id: user._id, email: user.email,role:user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error: error.message });
  }
};


export const logoutUser = async (req, res) => {
  try {
    // 🔍 Extract Token from Authorization Header
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) return res.status(400).json({ message: "No token provided" });

    // ✅ Verify Token Properly
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) return res.status(401).json({ message: "Invalid token" });

    // ⏳ Get Token Expiry Time
    const expiryTime = decoded.exp - Math.floor(Date.now() / 1000);
    if (expiryTime <= 0) return res.status(400).json({ message: "Token already expired" });

    // ❌ Blacklist Token in Redis (With Prefix)
    await redisClient.setEx(`blacklist_${token}`, expiryTime, "blacklisted");

    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Error logging out", error: error.message });
  }
};



// ✅ Google Authentication
export const googleAuth = async (req, res) => {
  try {
    const { idToken } = req.body;

    // 🌍 Verify Google Token
    const ticket = await client.verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID });
    const { email, given_name: firstName, family_name: lastName, sub: googleId } = ticket.getPayload();

    // 🔍 Check if user exists
    let user = await User.findOne({ email });

    if (!user) {
      // 📝 Create new user if not exists
      user = new User({ firstName, lastName, email, googleId });
      await user.save();
    }

    // 🎟️ Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Error with Google authentication", error: error.message });
  }
};
