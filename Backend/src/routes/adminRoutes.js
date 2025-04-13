import express from "express";
import {
  getAllUsers,
  toggleUserStatus,
} from "../controllers/adminController.js";
import authorizeAdmin  from "../middlewares/authorizeAdmin.js";
import authMiddleware from "../middlewares/authMiddleware.js"; 

const router = express.Router();

// 👤 Get all users with their policies
router.get("/users", authMiddleware,authorizeAdmin, getAllUsers);

// 🔁 Toggle user status (active <-> blocked)
router.patch("/users/:id/status", authMiddleware,authorizeAdmin, toggleUserStatus);

export default router;
