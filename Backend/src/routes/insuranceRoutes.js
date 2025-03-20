import express from "express";
import { getAllInsurancePlans,getInsurancePlanById  } from "../controllers/insuranceController.js";
import authenticateUser from "../middlewares/authenticateUser.js";
import authorizeAdmin from "../middlewares/authorizeAdmin.js";
import {createInsurancePlan }from "../controllers/insurancePlanController.js"
import { deleteInsurancePlan } from "../controllers/insurancePlanController.js";
import { updateInsurancePlan } from "../controllers/insurancePlanController.js";
import { subscribeToPlan } from "../controllers/insurancePlanController.js";
import {getUserSubscriptions} from "../controllers/insurancePlanController.js"
const router = express.Router();

// ✅ Public API (No auth needed)
router.get("/", getAllInsurancePlans);

// // 🔹 GET specific insurance plan by ID
// router.get("/:id", getInsurancePlanById);


// ✅ Customer & Admin Both Can Access
router.get("/:id", authenticateUser, getInsurancePlanById);
// ✅ Admin-Only API
router.post("/admin/createinsurance", authenticateUser, authorizeAdmin, createInsurancePlan);
router.delete("/admin/deleteinsurance/:id", authenticateUser, authorizeAdmin, deleteInsurancePlan);
router.put("/admin/updateinsurance/:planId", authenticateUser, authorizeAdmin, updateInsurancePlan);
router.post("/subscribe/:planId", authenticateUser, subscribeToPlan);
// ✅ Route: Get User's Active Subscriptions
router.get("/subscriptions/my-plans", authenticateUser, getUserSubscriptions);

export default router;
