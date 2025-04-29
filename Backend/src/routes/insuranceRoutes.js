import express from "express";
// import { getAllInsurancePlans,getInsurancePlanById  } from "../controllers/insuranceController.js";
import authenticateUser from "../middlewares/authenticateUser.js";
import authorizeAdmin from "../middlewares/authorizeAdmin.js";
import {createInsurancePlan }from "../controllers/insurancePlanController.js"
import { updateInsurancePlan } from "../controllers/insurancePlanController.js";
import { subscribeToPlan } from "../controllers/insurancePlanController.js";
import {getUserSubscriptions} from "../controllers/insurancePlanController.js"
import { createInsuranceCompany ,getCompaniesByInsuranceType,getCompaniesWithPlans} from "../controllers/insuranceCompanyController.js";
import { getCompanies } from "../controllers/insuranceCompanyController.js";
import {deleteInsuranceCompany} from "../controllers/insuranceCompanyController.js";
import upload from "../middlewares/multer.js"; // ✅ Correct (Default Import)
import uploadfile from "../middlewares/uplaodfile.js";
import { submitForm ,getAllInsuranceForms} from "../controllers/insuranceController.js";
import  {getUnassignedInsurancePlans} from "../controllers/insuranceCompanyController.js"

const router = express.Router();
// ✅ Public API (No auth needed)
// router.get("/", getAllInsurancePlans);

// ✅ Customer & Admin Both Can Access


// ✅ Admin-Only APIs
router.post("/admin/createinsurance", authenticateUser, authorizeAdmin, createInsurancePlan);

router.put("/admin/updateinsurance/:planId", authenticateUser, authorizeAdmin, updateInsurancePlan);

// ✅ Subscription API (For Users)
router.post("/subscribe/:planId", authenticateUser, subscribeToPlan);
router.get("/subscriptions/my-plans", authenticateUser, getUserSubscriptions);

router.post(
  "/submit",
  uploadfile.fields([
    { name: "aadhaar", maxCount: 1 },
    { name: "pan", maxCount: 1 },
    { name: "photo", maxCount: 1 },
    { name: "policyCopy", maxCount: 1 },
  ]),
  authenticateUser,
  submitForm
);
// ✅ Admin-Only API for Creating Insurance Company
router.post(
  "/admin/createcompany",
  upload.single("companyLogo"), // ✅ Use multer for file upload
  authenticateUser, 
  authorizeAdmin, 
  createInsuranceCompany
);
router.get("/all", getAllInsuranceForms);


router.get("/companies", getCompanies);
router.get("/companies-with-plans", getCompaniesWithPlans);
router.get("/companies/by-type", getCompaniesByInsuranceType);

router.delete("/admin/deletecompany/:companyId", authenticateUser, authorizeAdmin, deleteInsuranceCompany);
router.get('/unassigned-plans', getUnassignedInsurancePlans);
export default router;
