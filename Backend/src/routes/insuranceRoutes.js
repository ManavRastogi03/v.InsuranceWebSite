import express from "express";
import { getAllInsurancePlans,getInsurancePlanById  } from "../controllers/insuranceController.js";
import authenticateUser from "../middlewares/authenticateUser.js";
import authorizeAdmin from "../middlewares/authorizeAdmin.js";
import {createInsurancePlan }from "../controllers/insurancePlanController.js"
import { deleteInsurancePlan } from "../controllers/insurancePlanController.js";
import { updateInsurancePlan } from "../controllers/insurancePlanController.js";
import { subscribeToPlan } from "../controllers/insurancePlanController.js";
import {getUserSubscriptions} from "../controllers/insurancePlanController.js"
import { createInsuranceCompany } from "../controllers/insuranceCompanyController.js";
import { getCompanies } from "../controllers/insuranceCompanyController.js";
import {deleteInsuranceCompany} from "../controllers/insuranceCompanyController.js";
import upload from "../middlewares/multer.js"; // ✅ Correct (Default Import)

const router = express.Router();
// ✅ Public API (No auth needed)
// router.get("/", getAllInsurancePlans);

// ✅ Customer & Admin Both Can Access
// router.get("/:id", authenticateUser, getInsurancePlanById);

// ✅ Admin-Only APIs
router.post("/admin/createinsurance", authenticateUser, authorizeAdmin, createInsurancePlan);
router.delete("/admin/deleteinsurance/:id", authenticateUser, authorizeAdmin, deleteInsurancePlan);
router.put("/admin/updateinsurance/:planId", authenticateUser, authorizeAdmin, updateInsurancePlan);

// ✅ Subscription API (For Users)
router.post("/subscribe/:planId", authenticateUser, subscribeToPlan);
router.get("/subscriptions/my-plans", authenticateUser, getUserSubscriptions);

// ✅ Admin-Only API for Creating Insurance Company
router.post(
  "/admin/createcompany",
  upload.single("companyLogo"), // ✅ Use multer for file upload
  authenticateUser, 
  authorizeAdmin, 
  createInsuranceCompany
);
router.get("/companies", getCompanies);
router.delete("/admin/deletecompany/:companyId", authenticateUser, authorizeAdmin, deleteInsuranceCompany);
export default router;
