// controllers/profileController.js
import User from "../models/User.js";
import bcrypt from "bcrypt";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinaryConfig.js";

// ✅ Get User Profile
export const getUserProfile = async (req, res) => {
  try {
    // 🔍 Fetch user from DB
    const user = await User.findById(req.user.id).select("-password"); // Exclude password

    // 🚨 If user does not exist, return 404 error
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ Add default profile picture if none is set
    const userData = {
      ...user.toObject(),
      profilePic: user.profilePic || process.env.DEFAULT_PROFILE_IMAGE,
    };

    // 📤 Send user data response
    return res.status(200).json(userData);

  } catch (error) {
    console.error("❌ Error fetching user profile:", error);
    return res.status(500).json({ message: "Error fetching user profile", error: error.message });
  }
};

// ✅ Update User Profile
export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Token se user ka ID mila
    const { firstName, lastName, username, email, password } = req.body;

    // 🔍 User find karein
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // 📝 Jo fields update honi hain unko assign karein
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (username) user.username = username;
    if (email) user.email = email;

    // 🔑 Password ko sirf assign karo, hashing `pre("save")` middleware karega
    if (password) {
      user.password = password; // ❌ Manually hash mat karo
    }

    // 💾 Save updated user
    await user.save();

    res.json({ message: "Profile updated successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error: error.message });
  }
};

// 📸 Set up Multer Storage for Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "profile_pictures",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });
// ✅ Upload Profile Picture
export const uploadProfilePic = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Remove old profile picture from Cloudinary if it exists
    if (user.profilePic) {
      const publicId = user.profilePic.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(`profile_pictures/${publicId}`);
    }

    // Store new profile picture
    user.profilePic = req.file.path;
    await user.save();

    res.json({ message: "Profile picture updated", profilePic: user.profilePic });
  } catch (error) {
    res.status(500).json({ message: "Error uploading profile picture", error: error.message });
  }
};

export { upload };


