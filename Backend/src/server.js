// server.js
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import connectDB from "./Database/index.js";

// Import Routes
import profileRoutes from "./routes/profileRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import  userRouter from "./routes/userRoutes.js";  // Import user registration routes
import insuranceRoutes from "./routes/insuranceRoutes.js";
// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(helmet());
app.use(cookieParser());

// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRouter);  // Register the user routes here
app.use("/api/profile", profileRoutes);
// 🔹 Insurance Plans Routes
app.use("/api/insurance", insuranceRoutes);
// app.use("/api/insurance", insuranceRouter)
// Default Route
app.get("/", (req, res) => {
  res.send("Insurance Wala API is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});