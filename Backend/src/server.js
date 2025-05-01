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
import PlanRoutes from "./routes/insurancePlanRoutes.js"
import adminRoutes from "./routes/adminRoutes.js";
import notificationRoutes from "./routes/notificationRoutes.js"
import policyRoutes from "./routes/policyRoutes.js"
import claimRoutes from "./routes/claimRoutes.js"
// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
const allowedOrigins = [
  "https://v-insurance-web-site.vercel.app", // production
  "http://localhost:5173",                    // development
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));


// Connect Database
connectDB();

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRouter);  // Register the user routes here
app.use("/api/profile", profileRoutes);
// 🔹 Insurance Plans Routes
app.use("/api/insurance", insuranceRoutes);
app.use("/api/plan",PlanRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/claims",claimRoutes);
// app.use("/api/insurance", insuranceRouter)


//  policy routes
app.use('/api/policies', policyRoutes); 
// Default Route
app.get("/", (req, res) => {
  res.send("Insurance Wala API is Running...");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});