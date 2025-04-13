import express from "express";
import { sendNotificationToUser } from "../controllers/notificationController.js";

const router = express.Router();

// POST /api/notifications/send
router.post("/send", sendNotificationToUser);

export default router;
