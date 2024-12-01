import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { body } from "express-validator";

const router = express.Router();

// Register route
router.post(
  "/register",
  [
    body("firstName").notEmpty().withMessage("First name is required."),
    body("lastName").notEmpty().withMessage("Last name is required."),
    body("username").notEmpty().withMessage("Username is required."),
    body("email").isEmail().withMessage("Valid email is required."),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters."),
    body("gender").notEmpty().withMessage("Gender is required."),
    body("phone")
      .optional()
      .matches(/^\d{10}$/)
      .withMessage("Phone must be a 10-digit number."),
  ],
  registerUser
);

// Login route
router.post(
  "/login",
  [
    body("emailOrUsername")
      .notEmpty()
      .withMessage("Email or username is required."),
    body("password").notEmpty().withMessage("Password is required."),
  ],
  loginUser
);

export { router as userRouter };
