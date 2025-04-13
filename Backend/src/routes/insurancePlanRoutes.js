import express from "express";
import { getPlans } from "../controllers/insurancePlanController.js";
import { deleteInsurancePlan } from "../controllers/insurancePlanController.js";
import authenticateUser from "../middlewares/authenticateUser.js";
import authorizeAdmin from "../middlewares/authorizeAdmin.js";

const router = express.Router();

router.get("/", getPlans); // GET /api/plans
router.delete("/admin/deleteinsurance/:id", authenticateUser, authorizeAdmin, deleteInsurancePlan);

export default router;
