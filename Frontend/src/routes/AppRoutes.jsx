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
import Dashboard from "../Admin/Component/Dashboard/Dashboard.jsx";
import Profile from "../Component/Pages/Profile";
import RequireAuth from "../Component/Middleware/RequireAuth.jsx";
import RequireAdminAuth from "../Component/Middleware/RequireAdminAuth.jsx";
import Companies from "../Admin/Component/companies/Companies.jsx"; 
import AdminLayout from "../Admin/Layouts/AdminLayout.jsx";
import AddPlanForm from "../Admin/Component/policies/AddPlanForm.jsx";  // ✅ Import AddPlanForm
import AddCompany from "../Admin/Component/companies/AddCompany.jsx";
import Policies from "../Admin/Component/policies/Policies.jsx";
import UsersManagement from "../Admin/Component/User/UsersManagement.jsx";
import NotificationPage from "../Admin/Component/Notification/NotificationPage.jsx";
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

      {/* ✅ User Dashboard */}
      <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
      <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />

      {/* ✅ Admin Routes with Sidebar */}
      <Route path="/admin" element={<RequireAdminAuth><AdminLayout /></RequireAdminAuth>}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="companies" element={<Companies />} />
        <Route path="companies/add" element={<AddCompany />} />
        <Route path="addPlan" element={<AddPlanForm />} />  {/* ✅ Add Route */}
        <Route path="policies" element={<Policies/>}/>
        <Route path="users" element={<UsersManagement/>}/>
        <Route path="notifications" element={<NotificationPage/>}/>
      </Route>
    </Route>
  )
);

export default router;
