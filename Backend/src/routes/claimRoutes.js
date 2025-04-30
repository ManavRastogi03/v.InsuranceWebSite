import express from "express"
import  {createClaim, getUserClaims} from "../controllers/claimController.js"
import  authMiddleware from "../middlewares/authMiddleware.js"
import uploadfile from "../middlewares/uplaodfile.js"
const router =express.Router();

router.post("/", authMiddleware, uploadfile.single("document"), createClaim);
router.get("/user", authMiddleware, getUserClaims);
export default router;