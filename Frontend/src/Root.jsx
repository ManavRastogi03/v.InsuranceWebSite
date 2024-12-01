import React from 'react'
import Header from './Component/Header/Header.jsx'
import Footer from './Component/Footer/footer.jsx'
import { Outlet } from 'react-router-dom'
function Root() {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Root