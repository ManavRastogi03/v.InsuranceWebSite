import express from "express"
import { createPolicy, getUserPolicies } from '../controllers/policyController.js'; 
import authMiddleware  from '../middlewares/authMiddleware.js';

const router=express.Router()
router.post('/create', createPolicy);
router.get('/user', authMiddleware ,getUserPolicies) 
export default router