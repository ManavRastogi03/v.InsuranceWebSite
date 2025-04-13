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
import UserLayout from "../User/Layout/UserLayout.jsx";
import UserDashboard from "../User/Component/Dashboard/UserDashboard.jsx";
import UserPolicies from "../User/Component/UserPolicies/Userpolicies.jsx";
import Help from "../User/Component/Help/HelpCenter.jsx";
import UserClaims from "../User/Component/Claims/UserClaims.jsx";
import UserPayments from "../User/Component/Payments/UserPayments.jsx";
import LifeStep2 from "../Component/LifeInsurance/LifeStep2.jsx";
import LifeStep3 from "../Component/LifeInsurance/LifeStep3.jsx";
import LifeStep4 from "../Component/LifeInsurance/LifeStep4.jsx";
import LifeStep5 from "../Component/LifeInsurance/LifeStep5.jsx";
import LifeStep6 from "../Component/LifeInsurance/LifeStep6.jsx";
import TravelStep2 from "../Component/TravelInsurance/TravelStep2.jsx";
import TravelStep3 from "../Component/TravelInsurance/TravelStep3.jsx";
import TravelStep4 from "../Component/TravelInsurance/TravelStep4.jsx";
import TravelStep5 from "../Component/TravelInsurance/TravelStep5.jsx";
import TravelStep6 from "../Component/TravelInsurance/TravelStep6.jsx";
import BusinessStep2 from "../Component/BusinessInsurance/business2.jsx";
import BusinessStep3 from "../Component/BusinessInsurance/business3.jsx";
import BusinessStep4 from "../Component/BusinessInsurance/business4.jsx";
import BusinessStep5 from "../Component/BusinessInsurance/business5.jsx";
import BusinessStep6 from "../Component/BusinessInsurance/business6.jsx";
import TermStep2 from "../Component/TermInsurance/TermStep2.jsx";
import TermStep3 from "../Component/TermInsurance/TermStep3.jsx";
import TermStep4 from "../Component/TermInsurance/TermStep4.jsx";
import TermStep5 from "../Component/TermInsurance/TermStep5.jsx";
import TermStep6 from "../Component/TermInsurance/TermStep6.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* ✅ Public Routes */}
      <Route path="" element={<Home />} />
      <Route path="/car-insurance" element={<CarInsurance />} />
      <Route path="/life-insurance" element={<LifeInsurance />} />
      <Route path="/life-insurance/step2" element={<LifeStep2/>} />
      <Route path="/life-insurance/step3" element={<LifeStep3/>} />
      <Route path="/life-insurance/step4" element={<LifeStep4 />} />
      <Route path="/life-insurance/step5" element={<LifeStep5 />} />
      <Route path="/life-insurance/step6" element={<LifeStep6/>} />


      <Route path="/travel-insurance" element={<TravelInsurance />} />
      <Route path="/travel-insurance/step2" element={<TravelStep2/>} />
      <Route path="/travel-insurance/step3" element={<TravelStep3/>} />
      <Route path="/travel-insurance/step4" element={<TravelStep4 />} />
      <Route path="/travel-insurance/step5" element={<TravelStep5 />} />
      <Route path="/travel-insurance/step6" element={<TravelStep6/>} />



      <Route path="/bike-insurance" element={<BikeInsurance />} />



      <Route path="/term-insurance" element={<TermInsurance />} />
      <Route path="/term-insurance/step2" element={<TermStep2 />} />
      <Route path="/term-insurance/step3" element={<TermStep3 />} />
      <Route path="/term-insurance/step4" element={<TermStep4 />} />
      <Route path="/term-insurance/step5" element={<TermStep5 />} />
      <Route path="/term-insurance/step6" element={<TermStep6 />} />

      <Route path="/business-insurance" element={<BusinessInsurance />} />
      <Route path="/business-insurance/step2" element={<BusinessStep2/>} />
      <Route path="/business-insurance/step3" element={<BusinessStep3/>} />
      <Route path="/business-insurance/step4" element={<BusinessStep4 />} />
      <Route path="/business-insurance/step5" element={<BusinessStep5 />} />
      <Route path="/business-insurance/step6" element={<BusinessStep6/>} />



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
      <Route path="/user" element={<RequireAuth><UserLayout/></RequireAuth>}>
        <Route path="dashboard" element={<UserDashboard/>}/>
        <Route path="help" element={<Help/>}/>
        <Route path="policies" element={<UserPolicies/>}/>
        <Route path="claims" element={<UserClaims/>}/>
        <Route path="payments" element={<UserPayments/>}/>
      </Route>
    </Route>
  )
);

export default router;
