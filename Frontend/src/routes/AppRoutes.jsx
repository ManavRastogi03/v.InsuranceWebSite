// src/routes/AppRoutes.js
import { createBrowserRouter, Route, createRoutesFromElements } from "react-router-dom";
import Root from "../Root";
import Home from "../Component/Home/Home";
import CarInsurance from "../Component/CarInsurance/CarInsurance";
import LifeInsurance from "../Component/LifeInsurance/LifeInsurance";
import TravelInsurance from "../Component/TravelInsurance/TravelInsurnce";
import BusinessInsurance from "../Component/BusinessInsurance/BusinessInsurance";
import BikeInsurance from "../Component/BikeInsurance/BikeInsurance";
import TermInsurance from "../Component/TermInsurance/TermInsurance";
import LoginPage from "../Component/Login/Login";
import Healthinsurance from "../Component/HeathInsurance/HeathInsurance";
import Signup from "../Component/SignUp/Signup";
import Dashboard from "../Admin/Component/Dashboard.jsx";
import Profile from "../Component/Pages/Profile";
import RequireAuth from "../Component/Middleware/RequireAuth.jsx"; // Middleware
import RequireAdminAuth from "../Component/Middleware/RequireAdminAuth.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* ✅ Public Routes */}
      <Route path="" element={<Home />} />
      <Route path="/car-insurance" element={<CarInsurance />} />
      <Route path="/life-insurance" element={<LifeInsurance />} />
      <Route path="/travel-insurance" element={<TravelInsurance />} />
      <Route path="/bike-insurance" element={<BikeInsurance />} />
      <Route path="/term-insurance" element={<TermInsurance />} />
      <Route path="/business-insurance" element={<BusinessInsurance />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/health-insurance/:type" element={<Healthinsurance />} />

      {/* ✅ Protected Routes (Require Login) */}
      <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
      <Route path="/admin/dashboard" element={<RequireAdminAuth><Dashboard /></RequireAdminAuth>} />
      <Route path="/admin/profile" element={<RequireAdminAuth><Profile /></RequireAdminAuth>} />
      <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
    </Route>
  )
);

export default router;
