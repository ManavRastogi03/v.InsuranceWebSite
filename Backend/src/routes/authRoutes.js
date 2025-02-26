import express from "express";
import { registerUser, loginUser, googleAuth,logoutUser } from "../controllers/authController.js";
import authenticateUser from "../middlewares/authenticateUser.js";
const router = express.Router();

// ✅ Register Route
router.post("/register", registerUser);

// ✅ Login Route
router.post("/login", loginUser);

//Loout
router.post("/logout", authenticateUser, logoutUser);

// ✅ Google Sign-In Route
router.post("/google", googleAuth);


export default router;
