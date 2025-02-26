// routes/profileRoutes.js

import express from "express";
import { getUserProfile } from "../controllers/profileController.js";
import { updateUserProfile } from "../controllers/profileController.js";
import authMiddleware from "../middlewares/authMiddleware.js"; 
import { uploadProfilePic, upload } from "../controllers/profileController.js";

const router = express.Router();

// ✅ Route to Get User Profile
router.get("/me", authMiddleware, getUserProfile);
router.put("/update", authMiddleware, updateUserProfile);
// 📌 Upload Profile Picture (Authenticated Route)
router.post("/upload-profile-pic", authMiddleware, upload.single("profilePic"), uploadProfilePic);

export default router;
