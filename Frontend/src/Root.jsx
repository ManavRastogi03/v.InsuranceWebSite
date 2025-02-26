import React from 'react'
import Header from './Component/Header/Header.jsx'
import Footer from './Component/Footer/footer.jsx'
import { Outlet } from 'react-router-dom'
import Sidebars from './Component/Sidebar/Sidebar.jsx'
function Root() {
  return (
    <>
        <Header/>
        <Outlet/>
        {/* <Sidebars/> */}
        <Footer/>
    </>
  )
}

export default Root