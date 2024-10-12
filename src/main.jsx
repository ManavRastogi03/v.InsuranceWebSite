import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './Component/Home/Home.jsx'
import CarInsurance from './Component/CarInsurance/CarInsurance.jsx'
import LifeInsurance from './Component/LifeInsurance/LifeInsurance.jsx'
import TravelInsurnce from './Component/TravelInsurance/TravelInsurnce.jsx'
import BusinessInsurance from './Component/BusinessInsurance/BusinessInsurance.jsx'
import BikeInsurance from './Component/BikeInsurance/BikeInsurance.jsx'
import TermInsurance from './Component/TermInsurance/TermInsurance.jsx'
// import Resetpassword from './components/ResetPassword/Resetpassword.jsx'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/car-insurance' element={<CarInsurance/>}/>
      <Route path='/life-insurance' element={<LifeInsurance/>}/>
      <Route path='/travel-insurance' element={<TravelInsurnce/>}/>
      <Route path='/bike-insurance' element={<BikeInsurance/>}/>
      <Route path='/term-insurance' element={<TermInsurance/>}/>
      <Route path='/business-insurance' element={<BusinessInsurance/>}/>

      {/* <Route path="/resetpassword" element={<Resetpassword/>}/> */}
    </Route> 
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
