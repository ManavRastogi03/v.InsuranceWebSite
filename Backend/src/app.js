import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { userRouter } from "./routes/userRoutes.js";  // Import user registration routes

// Initialize Express app
const app = express();

// Load environment variables
dotenv.config();

// CORS setup for handling cross-origin requests
app.use(
  cors({
    origin: process.env.CORS_ORIGIN, // Allowed origins
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  })
);

// Middleware setup
app.use(express.json({ limit: "16kb" })); // Handle JSON requests with a limit
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // Handle form submissions
app.use(cookieParser()); // Parse cookies from incoming requests
app.use(express.static("Public")); // Serve static files from 'Public' folder

// User Registration Routes
app.use("/api/v1/user", userRouter);  // Register the user routes here

// Export the app for use in the main entry point
export { app };
