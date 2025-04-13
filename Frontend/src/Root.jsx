import React from 'react'
import Header from './Component/Header/Header.jsx'
import Footer from './Component/Footer/footer.jsx'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'  // ✅ Add this
import 'react-toastify/dist/ReactToastify.css'   // ✅ Import CSS
import Sidebars from './Component/Sidebar/Sidebar.jsx'
function Root() {
  return (
    <>
        <Header/>
        <Outlet/>
        {/* <Sidebars/> */}
        <Footer/>
              {/* ✅ Global Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default Root