import express from "express";
import { getAllInsurancePlans,getInsurancePlanById  } from "../controllers/insuranceController.js";
import authenticateUser from "../middlewares/authenticateUser.js";
import authorizeAdmin from "../middlewares/authorizeAdmin.js";
import {createInsurancePlan }from "../controllers/insurancePlanController.js"
import { deleteInsurancePlan } from "../controllers/insurancePlanController.js";
const router = express.Router();

// ✅ Public API (No auth needed)
router.get("/", getAllInsurancePlans);

// // 🔹 GET specific insurance plan by ID
// router.get("/:id", getInsurancePlanById);


// ✅ Customer & Admin Both Can Access
router.get("/:id", authenticateUser, getInsurancePlanById);
// ✅ Admin-Only API
router.post("/admin/createinsurance", authenticateUser, authorizeAdmin, createInsurancePlan);
router.delete("/admin/deleteinsurance/:id", authenticateUser, authorizeAdmin, deleteInsurancePlan)

export default router;
